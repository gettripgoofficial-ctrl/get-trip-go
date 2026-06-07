import { useCurrency } from "@/contexts/CurrencyContext"

const SYMBOLS: Record<string, string> = {
  INR: "₹", USD: "$", EUR: "€", GBP: "£",
  AED: "AED ", SGD: "S$", AUD: "A$", CAD: "C$",
  JPY: "¥", THB: "฿",
}

export function usePrice() {
  const { currency, rates } = useCurrency()

  function convert(amountInINR: number): string {
    if (!amountInINR) return ""
    const rate = rates[currency] ?? 1
    const converted = amountInINR * rate
    const symbol = SYMBOLS[currency] ?? currency + " "

    if (currency === "INR") {
      return `₹${converted.toLocaleString("en-IN")}`
    }

    if (converted >= 1000) {
      return `${symbol}${converted.toLocaleString("en-US", { maximumFractionDigits: 0 })}`
    }

    return `${symbol}${converted.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  return { convert, currency }
}
