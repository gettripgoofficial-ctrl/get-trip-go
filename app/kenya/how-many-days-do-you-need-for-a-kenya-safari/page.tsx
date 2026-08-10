import type { Metadata } from "next"
import HowManyDaysKenyaSafariArticle from "@/components/HowManyDaysKenyaSafariArticle"
export const metadata: Metadata = {
  title: "How Many Days Do You Need for a Kenya Safari",
  description: "How to match trip length to how many parks you want to see, with a length-vs-coverage breakdown.",
}
export default function HowManyDaysKenyaSafariPage() {
  return <HowManyDaysKenyaSafariArticle />
}
