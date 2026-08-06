import type { Metadata } from "next"
import MeruNationalParkArticle from "@/components/MeruNationalParkArticle"
export const metadata: Metadata = {
  title: "Meru National Park: Kenya's Quietest Big Game Country | Get Trip Go",
  description: "Meru's Born Free history, rhino sanctuary, and why it's one of Kenya's least crowded major parks.",
}
export default function MeruNationalParkPage() {
  return <MeruNationalParkArticle />
}
