import type { Metadata } from "next";
import KenyaHighlandsLandingPage from "@/components/KenyaHighlandsLandingPage";

export const metadata: Metadata = {
  title: "7 Days Through the Kenya Highlands | Kenya Safari Package | Get Trip Go",
  description: "A 7-day, 6-night Kenya safari through Lake Naivasha, Lake Nakuru and Masai Mara. Private 4x4 game drives, handpicked lodges, and Big Five sightings.",
  openGraph: {
    title: "7 Days Through the Kenya Highlands | Get Trip Go",
    description: "Lake Naivasha, Lake Nakuru and Masai Mara - a 7-day guided Kenya safari with private game drives and handpicked stays.",
    url: "https://gettripgo.com/kenya/7-days-through-the-kenya-highlands",
    siteName: "Get Trip Go",
    images: [{ url: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=1200&q=80", width: 1200, height: 630, alt: "Kenya Highlands safari" }],
    locale: "en_IN",
    type: "article",
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/7-days-through-the-kenya-highlands",
  },
};

const tripSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "7 Days Through the Kenya Highlands",
  description: "A 7-day, 6-night Kenya safari through Lake Naivasha, Lake Nakuru and Masai Mara with private 4x4 game drives and handpicked lodges.",
  touristType: "Safari",
  provider: { "@type": "TravelAgency", name: "Get Trip Go", url: "https://gettripgo.com" },
  itinerary: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@type": "Place", name: "Lake Naivasha" } },
      { "@type": "ListItem", position: 2, item: { "@type": "Place", name: "Lake Nakuru" } },
      { "@type": "ListItem", position: 3, item: { "@type": "Place", name: "Masai Mara" } },
    ],
  },
  offers: {
    "@type": "Offer",
    price: "149999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: "https://gettripgo.com/kenya/7-days-through-the-kenya-highlands",
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} />
      <KenyaHighlandsLandingPage />
    </>
  );
}
