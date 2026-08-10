import type { Metadata } from "next"
import WhatToPackForKenyaSafariArticle from "@/components/WhatToPackForKenyaSafariArticle"
export const metadata: Metadata = {
  title: "What to Pack for a Kenya Safari",
  description: "The full packing list for a Kenya safari — clothing colors, duffel bag rules, gear, and documents you actually need.",
}
export default function WhatToPackForKenyaSafariPage() {
  return <WhatToPackForKenyaSafariArticle />
}
