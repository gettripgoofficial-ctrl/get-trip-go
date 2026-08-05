import type { Metadata } from "next"
import SamburuArticle from "@/components/SamburuArticle"
export const metadata: Metadata = {
  title: "Samburu: The Special Five You Won't See Elsewhere | Get Trip Go",
  description: "Grevy's zebra, reticulated giraffe, and Samburu's other arid-adapted species you won't find in southern Kenya.",
}
export default function SamburuPage() {
  return <SamburuArticle />
}
