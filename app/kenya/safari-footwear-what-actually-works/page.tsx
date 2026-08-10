import type { Metadata } from "next"
import SafariFootwearArticle from "@/components/SafariFootwearArticle"
export const metadata: Metadata = {
  title: "Safari Footwear: What Actually Works",
  description: "What shoes to pack for game drives, walking safaris, and camp downtime — and when heavy boots are actually needed.",
}
export default function SafariFootwearPage() {
  return <SafariFootwearArticle />
}
