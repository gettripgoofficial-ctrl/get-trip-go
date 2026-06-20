"use client"
import { useState, useMemo } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const MONTH_ABBR = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
const WEEKDAYS = ["M","T","W","T","F","S","S"]

function parseDepDate(s: string) {
  const [dayStr, monAbbr, yearStr] = s.split(" ")
  const month = MONTH_ABBR.indexOf(monAbbr)
  return { day: parseInt(dayStr, 10), month, year: parseInt(yearStr, 10) }
}

export default function DepartureCalendar({
  departureDates,
  selectedDate,
  onSelect,
}: {
  departureDates: string[]
  selectedDate: string | null
  onSelect: (date: string) => void
}) {
  const parsedDates = useMemo(() => departureDates.map(d => ({ raw: d, ...parseDepDate(d) })), [departureDates])

  const initial = parsedDates[0] ?? { month: new Date().getMonth(), year: new Date().getFullYear() }
  const [viewMonth, setViewMonth] = useState(initial.month)
  const [viewYear, setViewYear] = useState(initial.year)

  const firstOfMonth = new Date(viewYear, viewMonth, 1)
  const startWeekday = (firstOfMonth.getDay() + 6) % 7
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()

  const cells: (number | null)[] = [
    ...Array(startWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
  while (cells.length % 7 !== 0) cells.push(null)

  function findMatch(day: number) {
    return parsedDates.find(d => d.day === day && d.month === viewMonth && d.year === viewYear)
  }

  function goPrev() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1) } else { setViewMonth(viewMonth - 1) }
  }
  function goNext() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1) } else { setViewMonth(viewMonth + 1) }
  }

  return (
    <div>
      {/* Month header */}
      <div className="flex items-center justify-between mb-0.5">
        <button onClick={goPrev} className="p-0.5 rounded-md hover:bg-gray-100 text-gray-500">
          <ChevronLeft size={12} />
        </button>
        <span className="text-[11px] font-bold text-gray-900">{MONTH_NAMES[viewMonth]} {viewYear}</span>
        <button onClick={goNext} className="p-0.5 rounded-md hover:bg-gray-100 text-gray-500">
          <ChevronRight size={12} />
        </button>
      </div>

      {/* Weekday labels */}
      <div className="grid grid-cols-7 gap-px mb-px">
        {WEEKDAYS.map((w, i) => (
          <div key={i} className="text-center text-[8px] font-semibold text-gray-400">{w}</div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-px">
        {cells.map((day, i) => {
          if (day === null) return <div key={i} />
          const match = findMatch(day)
          const isSelected = match && selectedDate === match.raw
          return (
            <button
              key={i}
              disabled={!match}
              onClick={() => match && onSelect(match.raw)}
              className={`aspect-square rounded text-[9px] font-semibold flex items-center justify-center transition-colors leading-none
                ${isSelected ? "bg-green-600 text-white" : match ? "bg-green-50 text-green-700 hover:bg-green-100" : "text-gray-300 cursor-default"}
              `}
              style={{ minHeight: "13px" }}
            >
              {day}
            </button>
          )
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-2 mt-1.5 text-[8px] text-gray-400">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Available
        </span>
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-600" /> Selected
        </span>
      </div>
    </div>
  )
}
