import type { Metadata } from "next"
import OlPejetaArticle from "@/components/OlPejetaArticle"
export const metadata: Metadata = {
  title: "Ol Pejeta Conservancy: A Model for Conservation",
  description: "The last northern white rhinos, a chimpanzee sanctuary, and why Ol Pejeta is a conservation success story.",
}
export default function OlPejetaPage() {
  return <OlPejetaArticle />
}
