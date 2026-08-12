import type { Metadata } from "next"
import OlPejetaArticle from "@/components/OlPejetaArticle"

export const metadata: Metadata = {
  title: "Ol Pejeta Conservancy: A Model for Conservation",
  description: "The last northern white rhinos, a chimpanzee sanctuary, and why Ol Pejeta is a conservation success story.",
  openGraph: {
    title: "Ol Pejeta Conservancy: A Model for Conservation | Get Trip Go",
    description: "The last northern white rhinos, a chimpanzee sanctuary, and why Ol Pejeta is a conservation success story.",
    url: "https://gettripgo.com/kenya/ol-pejeta-conservancy-model",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-1552083375-1.jpg", width: 1200, height: 630, alt: "Ol Pejeta Conservancy: A Model for Conservation" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ol Pejeta Conservancy: A Model for Conservation | Get Trip Go",
    description: "The last northern white rhinos, a chimpanzee sanctuary, and why Ol Pejeta is a conservation success story.",
    images: ["/images/external/unsplash-1552083375-1.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/ol-pejeta-conservancy-model",
  },
  keywords: ["Ol Pejeta Conservancy", "northern white rhino Kenya", "Kenya conservation safari"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ol Pejeta Conservancy: A Model for Conservation",
  description: "The last northern white rhinos, a chimpanzee sanctuary, and why Ol Pejeta is a conservation success story.",
  image: "/images/external/unsplash-1552083375-1.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
  mainEntityOfPage: "https://gettripgo.com/kenya/ol-pejeta-conservancy-model",
}

export default function OlPejetaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <OlPejetaArticle />
    </>
  )
}
