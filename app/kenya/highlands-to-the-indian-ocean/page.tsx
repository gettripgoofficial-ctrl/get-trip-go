import type { Metadata } from "next";
import KenyaHighlandsBeachLandingPage from "@/components/KenyaHighlandsBeachLandingPage";

export const metadata: Metadata = {
  title: "Highlands to the Indian Ocean: Combining Safari and Beach | Kenya Safari Package",
  description: "A 10-day, 9-night Kenya journey through Ol Pejeta, Lake Nakuru and Masai Mara, ending with 4 nights on Diani Beach. Private game drives and handpicked stays.",
  openGraph: {
    title: "Highlands to the Indian Ocean: Combining Safari and Beach | Get Trip Go",
    description: "Ol Pejeta, Lake Nakuru, Masai Mara and Diani Beach - a 10-day Kenya safari and coast combination.",
    url: "https://gettripgo.com/kenya/highlands-to-the-indian-ocean",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-148949388746.jpg", width: 1200, height: 630, alt: "Kenya safari and Indian Ocean beach" }],
    locale: "en_IN",
    type: "article",
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/highlands-to-the-indian-ocean",
  },
};

const tripSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Highlands to the Indian Ocean: Combining Safari and Beach",
  description: "A 10-day, 9-night Kenya journey through Ol Pejeta, Lake Nakuru and Masai Mara, ending with 4 nights on Diani Beach.",
  touristType: "Safari",
  provider: { "@type": "TravelAgency", name: "Get Trip Go", url: "https://gettripgo.com" },
  itinerary: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@type": "Place", name: "Ol Pejeta Conservancy" } },
      { "@type": "ListItem", position: 2, item: { "@type": "Place", name: "Lake Nakuru" } },
      { "@type": "ListItem", position: 3, item: { "@type": "Place", name: "Masai Mara" } },
      { "@type": "ListItem", position: 4, item: { "@type": "Place", name: "Diani Beach" } },
    ],
  },
  offers: {
    "@type": "Offer",
    price: "219999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: "https://gettripgo.com/kenya/highlands-to-the-indian-ocean",
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} />
      <KenyaHighlandsBeachLandingPage />
    </>
  );
}
