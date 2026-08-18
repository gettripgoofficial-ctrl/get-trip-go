"use client"
import { createContext, useContext, useEffect, useState } from "react"
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
  const [currency, setCurrencyState] = useState(initialCurrency || "INR")
  const [rates, setRates] = useState<Record<string, number>>({})
  const [currencies, setCurrencies] = useState<string[]>(MAJOR)

  function setCurrency(c: string) {
    setCurrencyState(c)
    Cookies.set("currency", c, { expires: 90, path: "/" })
    Cookies.set("currency_source", "user", { expires: 90, path: "/" })
  }

  useEffect(() => {
    fetch("/api/currency")
      .then(r => r.json())
      .then(data => {
        if (data.rates) {
          setRates(data.rates)
          setCurrencies(MAJOR.filter(c => data.rates[c]))
        }
      })
      .catch(() => {})
  }, [])

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, rates, currencies }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  return useContext(CurrencyContext)
}
