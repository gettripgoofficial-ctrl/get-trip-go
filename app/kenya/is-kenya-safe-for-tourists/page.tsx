import type { Metadata } from "next"
import IsKenyaSafeArticle from "@/components/IsKenyaSafeArticle"

export const metadata: Metadata = {
  title: "Is Kenya Safe for Tourists? What You Should Know | Get Trip Go",
  description: "A realistic look at safety on safari, in Nairobi, and everywhere in between — what the real risks are and which areas to avoid.",
}

export default function IsKenyaSafePage() {
  return <IsKenyaSafeArticle />
}
