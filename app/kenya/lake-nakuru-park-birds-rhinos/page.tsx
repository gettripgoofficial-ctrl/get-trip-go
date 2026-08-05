import type { Metadata } from "next"
import LakeNakuruArticle from "@/components/LakeNakuruArticle"
export const metadata: Metadata = {
  title: "Lake Nakuru National Park: Birds and Rhinos | Get Trip Go",
  description: "Lake Nakuru's flamingo history, rhino sanctuary, and why the park's small size is an advantage.",
}
export default function LakeNakuruPage() {
  return <LakeNakuruArticle />
}
