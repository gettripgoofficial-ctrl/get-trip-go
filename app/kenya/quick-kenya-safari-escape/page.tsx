import type { Metadata } from "next";
import KenyaQuickEscapeLandingPage from "@/components/KenyaQuickEscapeLandingPage";

export const metadata: Metadata = {
  title: "Quick Kenya Safari Escape | Get Trip Go",
  description: "A 6-day, 5-night Kenya safari through Lake Elementaita and the Maasai Mara. Private 4x4 game drives, handpicked lodges, and Big Five sightings on a shorter timeline.",
  openGraph: {
    title: "Quick Kenya Safari Escape | Get Trip Go",
    description: "Lake Elementaita and the Maasai Mara — a 6-day guided Kenya safari with private game drives and handpicked stays.",
    url: "https://gettripgo.com/kenya/quick-kenya-safari-escape",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-151681523156.jpg", width: 1200, height: 630, alt: "Quick Kenya safari escape" }],
    locale: "en_IN",
    type: "article",
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/quick-kenya-safari-escape",
  },
};

const tripSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Quick Kenya Safari Escape",
  description: "A 6-day, 5-night Kenya safari through Lake Elementaita and the Maasai Mara with private 4x4 game drives and handpicked lodges.",
  touristType: "Safari",
  provider: { "@type": "TravelAgency", name: "Get Trip Go", url: "https://gettripgo.com" },
  itinerary: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@type": "Place", name: "Lake Elementaita" } },
      { "@type": "ListItem", position: 2, item: { "@type": "Place", name: "Maasai Mara" } },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} />
      <KenyaQuickEscapeLandingPage />
    </>
  );
}
