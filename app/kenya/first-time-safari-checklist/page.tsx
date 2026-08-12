import type { Metadata } from "next"
import FirstTimeSafariChecklistArticle from "@/components/FirstTimeSafariChecklistArticle"

export const metadata: Metadata = {
  title: "First-Time Safari Checklist",
  description: "Everything to sort before a first Kenya safari, organized into a countdown timeline from booking to departure day.",
  openGraph: {
    title: "First-Time Safari Checklist | Get Trip Go",
    description: "Everything to sort before a first Kenya safari, organized into a countdown timeline from booking to departure day.",
    url: "https://gettripgo.com/kenya/first-time-safari-checklist",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-143649186533.jpg", width: 1200, height: 630, alt: "First-Time Safari Checklist" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "First-Time Safari Checklist | Get Trip Go",
    description: "Everything to sort before a first Kenya safari, organized into a countdown timeline from booking to departure day.",
    images: ["/images/external/unsplash-143649186533.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/first-time-safari-checklist",
  },
  keywords: ["first time safari checklist", "Kenya safari planning", "safari booking timeline"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "First-Time Safari Checklist",
  description: "Everything to sort before a first Kenya safari, organized into a countdown timeline from booking to departure day.",
  image: "/images/external/unsplash-143649186533.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
  mainEntityOfPage: "https://gettripgo.com/kenya/first-time-safari-checklist",
}

export default function FirstTimeSafariChecklistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <FirstTimeSafariChecklistArticle />
    </>
  )
}
