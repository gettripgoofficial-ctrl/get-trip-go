import type { Metadata } from "next"
import DelhiMetro from "@/components/india/delhi/DelhiMetro"
const TITLE = "Delhi Travel Guide 2027: Best Places, Hotels & Transport | Get Trip Go"
const DESCRIPTION =
  "Delhi guide for international visitors: best time, top attractions, hotels, airport tips, and train and bus routes to Agra, Jaipur and more."
const URL = "https://gettripgo.com/India/delhi"

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Get Trip Go",
    type: "article",
    images: [{ url: "/images/india/delhi/hero.jpg", alt: "India Gate in Delhi, India" }],
  },
}

export default function DelhiPage() {
  return <DelhiMetro />;
}
