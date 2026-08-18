"use client"
import { usePrice } from "@/hooks/usePrice"

export default function PriceTag({ amountInr }: { amountInr: number }) {
  const { convert } = usePrice()
  return <>{convert(amountInr)}</>
}
