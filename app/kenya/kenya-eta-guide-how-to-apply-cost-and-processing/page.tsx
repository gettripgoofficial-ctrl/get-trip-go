import type { Metadata } from "next"
import KenyaETAGuideArticle from "@/components/KenyaETAGuideArticle"
export const metadata: Metadata = {
  title: "Kenya eTA Guide: How to Apply, Cost and Processing Time | Get Trip Go",
  description: "How to apply for Kenya's mandatory eTA — cost, processing time, official portal, and common mistakes to avoid.",
}
export default function KenyaETAGuidePage() {
  return <KenyaETAGuideArticle />
}
