import React from "react"
import { Search } from "lucide-react"
import { cn } from "./searchUtils"

export function SearchButton({ 
  label, 
  onClick, 
  disabled,
  loading,
}: { 
  label: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
}) {
  return (
    <div className="flex items-center px-3 flex-shrink-0">
      <button
        onClick={onClick}
        disabled={disabled || loading}
        aria-label={label}
        className={cn(
          "flex items-center gap-2 px-5 h-[44px]",
          "bg-[#1A56F0] hover:bg-blue-700 active:bg-blue-800",
          "text-white text-[13px] font-bold rounded-[12px]",
          "transition-all hover:scale-[1.02] active:scale-[0.97]",
          "shadow-[0_4px_14px_rgba(26,86,240,0.30)] hover:shadow-[0_4px_18px_rgba(26,86,240,0.45)]",
          "whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A56F0]",
          (disabled || loading) && "opacity-50 cursor-not-allowed hover:scale-100 hover:bg-[#1A56F0]"
        )}
      >
        <Search size={14} aria-hidden="true" />
        {loading ? "Searching..." : label}
      </button>
    </div>
  )
}