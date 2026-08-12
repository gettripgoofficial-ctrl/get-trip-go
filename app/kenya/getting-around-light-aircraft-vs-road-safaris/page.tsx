import type { Metadata } from "next"
import GettingAroundKenyaArticle from "@/components/GettingAroundKenyaArticle"

export const metadata: Metadata = {
  title: "Getting Around: Light Aircraft vs Road Safaris",
  description: "Flying versus driving between Kenya's parks — cost, time, comfort, and which option fits your itinerary.",
  openGraph: {
    title: "Getting Around: Light Aircraft vs Road Safaris | Get Trip Go",
    description: "Flying versus driving between Kenya's parks — cost, time, comfort, and which option fits your itinerary.",
    url: "https://gettripgo.com/kenya/getting-around-light-aircraft-vs-road-safaris",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-151782480670.jpg", width: 1200, height: 630, alt: "Getting Around: Light Aircraft vs Road Safaris" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Getting Around: Light Aircraft vs Road Safaris | Get Trip Go",
    description: "Flying versus driving between Kenya's parks — cost, time, comfort, and which option fits your itinerary.",
    images: ["/images/external/unsplash-151782480670.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/getting-around-light-aircraft-vs-road-safaris",
  },
  keywords: ["Kenya safari transport", "light aircraft safari", "road safari vs flying Kenya"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Getting Around: Light Aircraft vs Road Safaris",
  description: "Flying versus driving between Kenya's parks — cost, time, comfort, and which option fits your itinerary.",
  image: "/images/external/unsplash-151782480670.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
  mainEntityOfPage: "https://gettripgo.com/kenya/getting-around-light-aircraft-vs-road-safaris",
}

export default function GettingAroundKenyaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <GettingAroundKenyaArticle />
    </>
  )
}
