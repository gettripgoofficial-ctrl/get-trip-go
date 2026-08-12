import type { Metadata } from "next"
import HowManyDaysKenyaSafariArticle from "@/components/HowManyDaysKenyaSafariArticle"

export const metadata: Metadata = {
  title: "How Many Days Do You Need for a Kenya Safari",
  description: "How to match trip length to how many parks you want to see, with a length-vs-coverage breakdown.",
  openGraph: {
    title: "How Many Days Do You Need for a Kenya Safari | Get Trip Go",
    description: "How to match trip length to how many parks you want to see, with a length-vs-coverage breakdown.",
    url: "https://gettripgo.com/kenya/how-many-days-do-you-need-for-a-kenya-safari",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-143649186533.jpg", width: 1200, height: 630, alt: "How Many Days Do You Need for a Kenya Safari" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Many Days Do You Need for a Kenya Safari | Get Trip Go",
    description: "How to match trip length to how many parks you want to see, with a length-vs-coverage breakdown.",
    images: ["/images/external/unsplash-143649186533.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/how-many-days-do-you-need-for-a-kenya-safari",
  },
  keywords: ["how many days Kenya safari", "Kenya safari itinerary length", "safari trip planning"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Many Days Do You Need for a Kenya Safari",
  description: "How to match trip length to how many parks you want to see, with a length-vs-coverage breakdown.",
  image: "/images/external/unsplash-143649186533.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
  mainEntityOfPage: "https://gettripgo.com/kenya/how-many-days-do-you-need-for-a-kenya-safari",
}

export default function HowManyDaysKenyaSafariPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <HowManyDaysKenyaSafariArticle />
    </>
  )
}
