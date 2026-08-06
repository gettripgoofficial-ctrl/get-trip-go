import type { Metadata } from "next"
import LakeNaivashaArticle from "@/components/LakeNaivashaArticle"
export const metadata: Metadata = {
  title: "Lake Naivasha: Boat Safaris and Hippos | Get Trip Go",
  description: "Boat safaris, hippos, and the walk-among-wildlife experience of Crescent Island on Lake Naivasha.",
}
export default function LakeNaivashaPage() {
  return <LakeNaivashaArticle />
}
