import type { Metadata } from "next";
import KenyaGrandCircuitLandingPage from "@/components/KenyaGrandCircuitLandingPage";
export const metadata: Metadata = {
  title: "The Classic Kenya Grand Circuit | 13-Day Kenya Safari",
  description: "A 13-day, 12-night Kenya grand circuit safari covering the country's top parks and reserves. Private 4x4 game drives, handpicked lodges, and unforgettable wildlife encounters.",
  openGraph: {
    title: "The Classic Kenya Grand Circuit | Get Trip Go",
    description: "13 days across Kenya's top parks and reserves - a guided grand circuit safari with private game drives and handpicked stays.",
    url: "https://gettripgo.com/kenya/the-classic-kenya-grand-circuit-13-days",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-151681523156.jpg", width: 1200, height: 630, alt: "Kenya Grand Circuit safari" }],
    locale: "en_IN",
    type: "article",
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/the-classic-kenya-grand-circuit-13-days",
  },
};
const tripSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "The Classic Kenya Grand Circuit",
  description: "A 13-day, 12-night Kenya grand circuit safari with private 4x4 game drives and handpicked lodges.",
  touristType: "Safari",
  provider: { "@type": "TravelAgency", name: "Get Trip Go", url: "https://gettripgo.com" },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: "https://gettripgo.com/kenya/the-classic-kenya-grand-circuit-13-days",
  },
};
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} />
      <KenyaGrandCircuitLandingPage />
    </>
  );
}
