import type { Metadata } from "next"
import MasaiMaraReserveVsConservanciesArticle from "@/components/MasaiMaraReserveVsConservanciesArticle"
export const metadata: Metadata = {
  title: "Masai Mara: National Reserve vs Private Conservancies | Get Trip Go",
  description: "What's different between the main Masai Mara reserve and the private conservancies around it — rules, cost, and crowds.",
}
export default function MasaiMaraReserveVsConservanciesPage() {
  return <MasaiMaraReserveVsConservanciesArticle />
}
