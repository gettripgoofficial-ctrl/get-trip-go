"use client"
import { Plus, Minus } from "lucide-react"

export default function PassengerCounter({
  label,
  sublabel,
  value,
  min = 0,
  onChange,
}: {
  label: string
  sublabel: string
  value: number
  min?: number
  onChange: (next: number) => void
}) {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="text-sm font-semibold text-gray-800">{label}</p>
        <p className="text-xs text-gray-400">{sublabel}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          <Minus size={14} />
        </button>
        <span className="text-sm font-bold text-gray-900 w-5 text-center">{value}</span>
        <button
          onClick={() => onChange(value + 1)}
          className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50"
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  )
}
