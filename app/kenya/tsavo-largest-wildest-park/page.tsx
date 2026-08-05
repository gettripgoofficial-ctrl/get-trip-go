import type { Metadata } from "next"
import TsavoArticle from "@/components/TsavoArticle"
export const metadata: Metadata = {
  title: "Tsavo: Kenya's Largest and Wildest Park | Get Trip Go",
  description: "Tsavo East and West — red-dust elephants, vast wilderness, and what makes this park different from the Mara.",
}
export default function TsavoPage() {
  return <TsavoArticle />
}
