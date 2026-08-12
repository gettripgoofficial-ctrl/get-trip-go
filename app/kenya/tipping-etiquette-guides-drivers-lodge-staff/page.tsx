import type { Metadata } from "next"
import TippingEtiquetteArticle from "@/components/TippingEtiquetteArticle"

export const metadata: Metadata = {
  title: "Tipping Etiquette: Guides, Drivers and Lodge Staff",
  description: "Suggested tipping amounts for safari guides, drivers, and lodge staff in Kenya.",
  openGraph: {
    title: "Tipping Etiquette: Guides, Drivers and Lodge Staff | Get Trip Go",
    description: "Suggested tipping amounts for safari guides, drivers, and lodge staff in Kenya.",
    url: "https://gettripgo.com/kenya/tipping-etiquette-guides-drivers-lodge-staff",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-1547721064-d.jpg", width: 1200, height: 630, alt: "Tipping Etiquette: Guides, Drivers and Lodge Staff" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tipping Etiquette: Guides, Drivers and Lodge Staff | Get Trip Go",
    description: "Suggested tipping amounts for safari guides, drivers, and lodge staff in Kenya.",
    images: ["/images/external/unsplash-1547721064-d.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/tipping-etiquette-guides-drivers-lodge-staff",
  },
  keywords: ["safari tipping guide", "Kenya safari etiquette", "how much to tip safari"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tipping Etiquette: Guides, Drivers and Lodge Staff",
  description: "Suggested tipping amounts for safari guides, drivers, and lodge staff in Kenya.",
  image: "/images/external/unsplash-1547721064-d.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
  mainEntityOfPage: "https://gettripgo.com/kenya/tipping-etiquette-guides-drivers-lodge-staff",
}

export default function TippingEtiquettePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <TippingEtiquetteArticle />
    </>
  )
}
