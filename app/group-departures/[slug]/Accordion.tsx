"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Accordion({
  title,
  items,
  defaultOpen = false,
}: {
  title: string
  items: string[]
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3.5 bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <span className="text-sm font-bold text-gray-800">{title}</span>
        <ChevronDown size={16} className={`text-gray-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-4 py-3.5">
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item} className="text-sm text-gray-600 leading-relaxed flex items-start gap-2">
                <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
