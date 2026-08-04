import type { Metadata } from "next"
import MasaiMaraVsSerengetiArticle from "@/components/MasaiMaraVsSerengetiArticle"
export const metadata: Metadata = {
  title: "Masai Mara vs Serengeti: What's the Difference | Get Trip Go",
  description: "How the Masai Mara and Serengeti actually differ — size, migration timing, crowds, and access.",
}
export default function MasaiMaraVsSerengetiPage() {
  return <MasaiMaraVsSerengetiArticle />
}
