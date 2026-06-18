import React from "react"
import { cn } from "./searchUtils"

// ─── Field ────────────────────────────────────────────────────────────────────

export function Field({
  icon, label, value, className, onClick, onChange, type,
}: {
  icon: React.ReactNode
  label: string
  value: React.ReactNode
  className?: string
  onClick?: () => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex flex-1 items-center gap-2.5 px-3.5 py-3",
        "border-r border-slate-100 last:border-r-0",
        "cursor-pointer hover:bg-blue-50/60 transition-colors min-w-0",
        className,
      )}
    >
      <span className="text-[#1A56F0] flex-shrink-0">{icon}</span>
      <div className="min-w-0 w-full">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-0.5">
          {label}
        </p>
        {onChange ? (
          <input
            type={type || "text"}
            value={value as string}
            onChange={onChange}
            className="text-[14px] font-bold text-[#0e1f45] truncate leading-none bg-transparent outline-none w-full"
          />
        ) : (
          <div className="text-[14px] font-bold text-[#0e1f45] truncate leading-none">
            {value}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── FieldRow ─────────────────────────────────────────────────────────────────

export function FieldRow({ 
  children, 
  className 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <div className={cn(
      "flex items-stretch rounded-[14px] border-[1.5px] border-slate-200 overflow-visible",
      className
    )}>
      {children}
    </div>
  )
}