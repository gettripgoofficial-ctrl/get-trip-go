import type { Metadata } from "next"
import TippingEtiquetteArticle from "@/components/TippingEtiquetteArticle"
export const metadata: Metadata = {
  title: "Tipping Etiquette: Guides, Drivers and Lodge Staff",
  description: "Suggested tipping amounts for safari guides, drivers, and lodge staff in Kenya.",
}
export default function TippingEtiquettePage() {
  return <TippingEtiquetteArticle />
}
