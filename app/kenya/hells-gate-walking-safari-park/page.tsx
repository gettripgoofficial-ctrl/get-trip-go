import type { Metadata } from "next"
import HellsGateArticle from "@/components/HellsGateArticle"
export const metadata: Metadata = {
  title: "Hell's Gate: Kenya's Walking Safari Park | Get Trip Go",
  description: "Walking and cycling safaris through dramatic gorges at one of Kenya's few low-predator parks.",
}
export default function HellsGatePage() {
  return <HellsGateArticle />
}
