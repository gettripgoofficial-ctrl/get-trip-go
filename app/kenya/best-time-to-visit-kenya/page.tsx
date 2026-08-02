import type { Metadata } from "next"
import BestTimeToVisitKenyaArticle from "@/components/BestTimeToVisitKenyaArticle"

export const metadata: Metadata = {
  title: "Best Time to Visit Kenya: A Season-by-Season Guide | Get Trip Go",
  description: "When to go for the Great Migration, the driest skies, the lowest prices, or the quietest parks — a full season-by-season breakdown for planning a Kenya safari.",
}

export default function BestTimeToVisitKenyaPage() {
  return <BestTimeToVisitKenyaArticle />
}
