import type { Metadata } from "next"
import SafariPhotographyArticle from "@/components/SafariPhotographyArticle"
export const metadata: Metadata = {
  title: "Safari Photography: Camera Gear and Settings | Get Trip Go",
  description: "The lens, camera settings, and gear checklist that make the biggest difference to safari photos.",
}
export default function SafariPhotographyPage() {
  return <SafariPhotographyArticle />
}
