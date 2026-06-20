"use client"
import { usePrice } from "@/hooks/usePrice"

export default function PriceBlock({ priceINR, priceOriginalINR }: { priceINR: number; priceOriginalINR?: number }) {
  const { convert } = usePrice()
  const discountPct = priceOriginalINR ? Math.round(((priceOriginalINR - priceINR) / priceOriginalINR) * 100) : 0

  return (
    <div className="flex items-baseline gap-2 flex-wrap">
      <span className="text-2xl font-bold text-gray-900">{convert(priceINR)}</span>
      <span className="text-xs text-gray-400">/ per person</span>
      {priceOriginalINR && (
        <>
          <span className="text-sm text-gray-400 line-through w-full sm:w-auto">{convert(priceOriginalINR)}</span>
          <span className="text-xs font-semibold text-green-600">{discountPct}% OFF</span>
        </>
      )}
    </div>
  )
}
