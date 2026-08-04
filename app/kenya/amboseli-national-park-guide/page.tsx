import type { Metadata } from "next"
import AmboseliNationalParkArticle from "@/components/AmboseliNationalParkArticle"
export const metadata: Metadata = {
  title: "Amboseli National Park: Complete Guide | Get Trip Go",
  description: "Amboseli's elephants, Kilimanjaro views, and practical tips for planning a visit.",
}
export default function AmboseliNationalParkPage() {
  return <AmboseliNationalParkArticle />
}
