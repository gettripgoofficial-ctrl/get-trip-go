import type { Metadata } from "next";
import KenyaUltimateWildlifeLandingPage from "@/components/KenyaUltimateWildlifeLandingPage";

export const metadata: Metadata = {
  title: "Ultimate Kenya Wildlife Safari | Get Trip Go",
  description: "An 8-day, 7-night Kenya safari through Nairobi, Samburu, Ol Pejeta Conservancy, Lake Elementaita and Masai Mara. Private 4x4 game drives, handpicked lodges, and Big Five sightings.",
  openGraph: {
    title: "Ultimate Kenya Wildlife Safari | Get Trip Go",
    description: "Nairobi, Samburu, Ol Pejeta, Lake Elementaita and Masai Mara — an 8-day guided Kenya safari with private game drives and handpicked stays.",
    url: "https://gettripgo.com/kenya/ultimate-kenya-wildlife-safari",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-169763833246.jpg", width: 1200, height: 630, alt: "Ultimate Kenya wildlife safari" }],
    locale: "en_IN",
    type: "article",
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/ultimate-kenya-wildlife-safari",
  },
};

const tripSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Ultimate Kenya Wildlife Safari",
  description: "An 8-day, 7-night Kenya safari through Nairobi, Samburu, Ol Pejeta Conservancy, Lake Elementaita and Masai Mara with private 4x4 game drives and handpicked lodges.",
  touristType: "Safari",
  provider: { "@type": "TravelAgency", name: "Get Trip Go", url: "https://gettripgo.com" },
  itinerary: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@type": "Place", name: "Nairobi" } },
      { "@type": "ListItem", position: 2, item: { "@type": "Place", name: "Samburu" } },
      { "@type": "ListItem", position: 3, item: { "@type": "Place", name: "Ol Pejeta Conservancy" } },
      { "@type": "ListItem", position: 4, item: { "@type": "Place", name: "Lake Elementaita" } },
      { "@type": "ListItem", position: 5, item: { "@type": "Place", name: "Masai Mara" } },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} />
      <KenyaUltimateWildlifeLandingPage />
    </>
  );
}
