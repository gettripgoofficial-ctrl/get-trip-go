import type { Metadata } from "next"
import GettingAroundKenyaArticle from "@/components/GettingAroundKenyaArticle"
export const metadata: Metadata = {
  title: "Getting Around: Light Aircraft vs Road Safaris | Get Trip Go",
  description: "Flying versus driving between Kenya's parks — cost, time, comfort, and which option fits your itinerary.",
}
export default function GettingAroundKenyaPage() {
  return <GettingAroundKenyaArticle />
}
