import type { Metadata } from "next";
import KenyaWalkingSafariLandingPage from "@/components/KenyaWalkingSafariLandingPage";

export const metadata: Metadata = {
  title: "Walking Safari Kenya: On Foot Through the Bush | Get Trip Go",
  description: "A 9-day, 8-night Kenya safari through Nairobi, Aberdares, Samburu, Ol Pejeta Conservancy, Lake Nakuru and Masai Mara. Private 4x4 game drives, handpicked lodges, and Big Five sightings.",
  openGraph: {
    title: "Walking Safari Kenya: On Foot Through the Bush | Get Trip Go",
    description: "Nairobi, Aberdares, Samburu, Ol Pejeta, Lake Nakuru and Masai Mara — a 9-day guided Kenya safari with private game drives and handpicked stays.",
    url: "https://gettripgo.com/kenya/walking-safari-kenya-on-foot-through-the-bush",
    siteName: "Get Trip Go",
    images: [{ url: "/images/external/unsplash-172889137653.jpg", width: 1200, height: 630, alt: "Walking safari through the Kenyan bush" }],
    locale: "en_IN",
    type: "article",
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/walking-safari-kenya-on-foot-through-the-bush",
  },
};

const tripSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Walking Safari Kenya: On Foot Through the Bush",
  description: "A 9-day, 8-night Kenya safari through Nairobi, Aberdares, Samburu, Ol Pejeta Conservancy, Lake Nakuru and Masai Mara with private 4x4 game drives and handpicked lodges.",
  touristType: "Safari",
  provider: { "@type": "TravelAgency", name: "Get Trip Go", url: "https://gettripgo.com" },
  itinerary: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@type": "Place", name: "Nairobi" } },
      { "@type": "ListItem", position: 2, item: { "@type": "Place", name: "Aberdares" } },
      { "@type": "ListItem", position: 3, item: { "@type": "Place", name: "Samburu" } },
      { "@type": "ListItem", position: 4, item: { "@type": "Place", name: "Ol Pejeta Conservancy" } },
      { "@type": "ListItem", position: 5, item: { "@type": "Place", name: "Lake Nakuru" } },
      { "@type": "ListItem", position: 6, item: { "@type": "Place", name: "Masai Mara" } },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} />
      <KenyaWalkingSafariLandingPage />
    </>
  );
}
