"use client"
import { createContext, useContext, useEffect, useRef, useState } from "react"
import Cookies from "js-cookie"

interface CurrencyContextType {
  currency: string
  setCurrency: (c: string) => void
  rates: Record<string, number>
  currencies: string[]
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: "INR",
  setCurrency: () => {},
  rates: {},
  currencies: [],
})

const MAJOR = ["INR", "USD", "EUR", "GBP", "AED", "SGD", "AUD", "CAD", "JPY", "THB"]

export function CurrencyProvider({ children, initialCurrency }: { children: React.ReactNode; initialCurrency?: string }) {
  const [currency, setCurrencyState] = useState("INR")
  const [rates, setRates] = useState<Record<string, number>>({ INR: 1 })
  const [currencies, setCurrencies] = useState<string[]>(["INR"])
  const userSelectedCurrency = useRef(false)

  function setCurrency(c: string) {
    userSelectedCurrency.current = true
    setCurrencyState(c)
    Cookies.set("currency", c, { expires: 90, path: "/" })
    Cookies.set("currency_source", "user", { expires: 90, path: "/" })
  }

  useEffect(() => {
    fetch("/api/currency")
      .then(async response => {
        if (!response.ok) {
          throw new Error(`Currency API returned ${response.status}`)
        }

        const data = await response.json()
        if (!data.rates || typeof data.rates !== "object" || Array.isArray(data.rates)) {
          throw new Error("Currency API returned invalid rates")
        }

        const availableCurrencies = MAJOR.filter(
          c => Number.isFinite(data.rates[c]) && data.rates[c] > 0
        )
        if (!availableCurrencies.includes("INR")) {
          throw new Error("Currency API did not return an INR rate")
        }

        setRates(data.rates)
        setCurrencies(availableCurrencies)
        if (!userSelectedCurrency.current) {
          setCurrencyState(
            initialCurrency && availableCurrencies.includes(initialCurrency)
              ? initialCurrency
              : "INR"
          )
        }
      })
      .catch(error => {
        console.error("Failed to load currency rates; using INR", error)
        setRates({ INR: 1 })
        setCurrencies(["INR"])
        setCurrencyState("INR")
      })
  }, [initialCurrency])

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, rates, currencies }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  return useContext(CurrencyContext)
}
