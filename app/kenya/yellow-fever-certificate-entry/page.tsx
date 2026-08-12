import type { Metadata } from "next"
import YellowFeverCertificateArticle from "@/components/YellowFeverCertificateArticle"

export const metadata: Metadata = {
  title: "Do You Need a Yellow Fever Certificate to Enter Kenya",
  description: "When Kenya requires a yellow fever certificate, and how to check based on your specific travel route.",
  openGraph: {
    title: "Do You Need a Yellow Fever Certificate to Enter Kenya | Get Trip Go",
    description: "When Kenya requires a yellow fever certificate, and how to check based on your specific travel route.",
    url: "https://gettripgo.com/kenya/yellow-fever-certificate-entry",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-165416360017.jpg", width: 1200, height: 630, alt: "Do You Need a Yellow Fever Certificate to Enter Kenya" }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Do You Need a Yellow Fever Certificate to Enter Kenya | Get Trip Go",
    description: "When Kenya requires a yellow fever certificate, and how to check based on your specific travel route.",
    images: ["/images/external/unsplash-165416360017.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/yellow-fever-certificate-entry",
  },
  keywords: ["yellow fever certificate Kenya", "Kenya entry requirements", "yellow fever vaccine travel"],
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Do You Need a Yellow Fever Certificate to Enter Kenya",
  description: "When Kenya requires a yellow fever certificate, and how to check based on your specific travel route.",
  image: "/images/external/unsplash-165416360017.jpg",
  author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
  publisher: { "@type": "Organization", name: "Get Trip Go" },
  mainEntityOfPage: "https://gettripgo.com/kenya/yellow-fever-certificate-entry",
}

export default function YellowFeverCertificatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <YellowFeverCertificateArticle />
    </>
  )
}
