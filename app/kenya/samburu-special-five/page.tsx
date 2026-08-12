import type { Metadata } from "next"
import SamburuArticle from "@/components/SamburuArticle"

export const metadata: Metadata = {
  title: "Samburu: The Special Five You Won't See Elsewhere",
  description: "Grevy's zebra, reticulated giraffe, and Samburu's other arid-adapted species you won't find in southern Kenya.",
  openGraph: {
    title: "Samburu: The Special Five You Won't See Elsewhere | Get Trip Go",
    description: "Grevy's zebra, reticulated giraffe, and Samburu's other arid-adapted species you won't find in southern Kenya.",
    url: "https://gettripgo.com/kenya/samburu-special-five",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-151693402474.jpg", width: 1200, height: 630, alt: "Samburu: The Special Five You Won't See Elsewhere" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samburu: The Special Five You Won't See Elsewhere | Get Trip Go",
    description: "Grevy's zebra, reticulated giraffe, and Samburu's other arid-adapted species you won't find in southern Kenya.",
    images: ["/images/external/unsplash-151693402474.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/samburu-special-five",
  },
  keywords: ["Samburu National Reserve", "Special Five Kenya", "Grevy's zebra safari"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Samburu: The Special Five You Won't See Elsewhere",
  description: "Grevy's zebra, reticulated giraffe, and Samburu's other arid-adapted species you won't find in southern Kenya.",
  image: "/images/external/unsplash-151693402474.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
  mainEntityOfPage: "https://gettripgo.com/kenya/samburu-special-five",
}

export default function SamburuPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SamburuArticle />
    </>
  )
}
