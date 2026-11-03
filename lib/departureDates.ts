const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

function toDate(s: string): Date | null {
  const [d, m, y] = s.trim().split(" ")
  const month = MONTHS.indexOf(m)
  const day = parseInt(d, 10)
  const year = parseInt(y, 10)
  if (month < 0 || isNaN(day) || isNaN(year)) return null
  return new Date(year, month, day)
}

// Returns only today-or-later dates, soonest first. Unparseable dates are dropped.
export function upcomingDates(dates: string[] = []): string[] {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return dates
    .map(s => ({ s, d: toDate(s) }))
    .filter((x): x is { s: string; d: Date } => x.d !== null && x.d >= today)
    .sort((a, b) => a.d.getTime() - b.d.getTime())
    .map(x => x.s)
}
