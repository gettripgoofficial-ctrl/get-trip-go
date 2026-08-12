import type { Metadata } from "next"
import SafariPhotographyArticle from "@/components/SafariPhotographyArticle"

export const metadata: Metadata = {
  title: "Safari Photography: Camera Gear and Settings",
  description: "The lens, camera settings, and gear checklist that make the biggest difference to safari photos.",
  openGraph: {
    title: "Safari Photography: Camera Gear and Settings | Get Trip Go",
    description: "The lens, camera settings, and gear checklist that make the biggest difference to safari photos.",
    url: "https://gettripgo.com/kenya/safari-photography-camera-gear-and-settings",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-151782480670.jpg", width: 1200, height: 630, alt: "Safari Photography: Camera Gear and Settings" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safari Photography: Camera Gear and Settings | Get Trip Go",
    description: "The lens, camera settings, and gear checklist that make the biggest difference to safari photos.",
    images: ["/images/external/unsplash-151782480670.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/safari-photography-camera-gear-and-settings",
  },
  keywords: ["safari photography gear", "safari camera settings", "Kenya wildlife photography"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Safari Photography: Camera Gear and Settings",
  description: "The lens, camera settings, and gear checklist that make the biggest difference to safari photos.",
  image: "/images/external/unsplash-151782480670.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
  mainEntityOfPage: "https://gettripgo.com/kenya/safari-photography-camera-gear-and-settings",
}

export default function SafariPhotographyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SafariPhotographyArticle />
    </>
  )
}
