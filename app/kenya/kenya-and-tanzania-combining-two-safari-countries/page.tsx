import type { Metadata } from "next";
import KenyaTanzaniaCombinedLandingPage from "@/components/KenyaTanzaniaCombinedLandingPage";

export const metadata: Metadata = {
  title: "Kenya and Tanzania: Combining Two Safari Countries | Get Trip Go",
  description: "A 14-day, 13-night safari combining Kenya and Tanzania - Nairobi, Lake Nakuru, Ol Pejeta, Masai Mara, Serengeti, Ngorongoro Crater, Lake Manyara and Arusha. Private 4x4 game drives and handpicked lodges throughout.",
  openGraph: {
    title: "Kenya and Tanzania: Combining Two Safari Countries | Get Trip Go",
    description: "Masai Mara, Serengeti, Ngorongoro Crater and more — a 14-day guided safari across both Kenya and Tanzania with private game drives and handpicked stays.",
    url: "https://gettripgo.com/kenya/kenya-and-tanzania-combining-two-safari-countries",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-savanna-landscape.jpg", width: 1200, height: 630, alt: "Kenya and Tanzania combined safari" }],
    locale: "en_IN",
    type: "article",
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/kenya-and-tanzania-combining-two-safari-countries",
  },
};

const tripSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Kenya and Tanzania: Combining Two Safari Countries",
  description: "A 14-day, 13-night safari combining Kenya and Tanzania with private 4x4 game drives and handpicked lodges throughout both countries.",
  touristType: "Safari",
  provider: { "@type": "TravelAgency", name: "Get Trip Go", url: "https://gettripgo.com" },
  itinerary: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@type": "Place", name: "Nairobi" } },
      { "@type": "ListItem", position: 2, item: { "@type": "Place", name: "Lake Nakuru" } },
      { "@type": "ListItem", position: 3, item: { "@type": "Place", name: "Ol Pejeta Conservancy" } },
      { "@type": "ListItem", position: 4, item: { "@type": "Place", name: "Masai Mara" } },
      { "@type": "ListItem", position: 5, item: { "@type": "Place", name: "Serengeti" } },
      { "@type": "ListItem", position: 6, item: { "@type": "Place", name: "Ngorongoro Crater" } },
      { "@type": "ListItem", position: 7, item: { "@type": "Place", name: "Lake Manyara" } },
      { "@type": "ListItem", position: 8, item: { "@type": "Place", name: "Arusha" } },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} />
      <KenyaTanzaniaCombinedLandingPage />
    </>
  );
}
