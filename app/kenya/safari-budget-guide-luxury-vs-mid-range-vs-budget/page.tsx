import type { Metadata } from "next"
import SafariBudgetGuideArticle from "@/components/SafariBudgetGuideArticle"
export const metadata: Metadata = {
  title: "Safari Budget Guide: Luxury vs Mid-Range vs Budget | Get Trip Go",
  description: "What actually changes as safari prices go up — accommodation, privacy, service — and what stays the same regardless of tier.",
}
export default function SafariBudgetGuidePage() {
  return <SafariBudgetGuideArticle />
}
