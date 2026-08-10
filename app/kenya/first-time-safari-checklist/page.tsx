import type { Metadata } from "next"
import FirstTimeSafariChecklistArticle from "@/components/FirstTimeSafariChecklistArticle"
export const metadata: Metadata = {
  title: "First-Time Safari Checklist",
  description: "Everything to sort before a first Kenya safari, organized into a countdown timeline from booking to departure day.",
}
export default function FirstTimeSafariChecklistPage() {
  return <FirstTimeSafariChecklistArticle />
}
