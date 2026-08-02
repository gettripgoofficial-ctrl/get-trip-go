import type { Metadata } from "next"
import BigFiveArticle from "@/components/BigFiveArticle"

export const metadata: Metadata = {
  title: "Big Five: How to Spot Lion, Leopard, Rhino, Elephant and Buffalo | Get Trip Go",
  description: "How to identify each of the Big Five, where they're most commonly seen in Kenya, and realistic expectations for spotting all five on one safari.",
}

export default function BigFivePage() {
  return <BigFiveArticle />
}
