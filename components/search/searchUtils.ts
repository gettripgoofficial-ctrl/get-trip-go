// ─── cn helper ────────────────────────────────────────────────────────────────
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ")
}
// ─── Types ────────────────────────────────────────────────────────────────────
export type ServiceTab = "Flights" | "Hotels" | "Holidays" | "Activities" | "Transfers"
export interface SearchBoxProps {
  activeTab: ServiceTab
}
// ─── Shared CTA labels ────────────────────────────────────────────────────────
export const CTA_LABELS: Record<ServiceTab, string> = {
  Flights:    "Unlock Best Deals",
  Hotels:     "Search Hotels",
  Holidays:   "Search Holidays",
  Activities: "Find Activities",
  Transfers:  "Search Transfers",
}