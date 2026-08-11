import type { Metadata } from "next";
import KenyaNorthernExplorerLandingPage from "@/components/KenyaNorthernExplorerLandingPage";
export const metadata: Metadata = {
  title: "Northern Kenya Explorer: Off the Beaten Path | Get Trip Go",
  description: "A 10-day, 9-night Kenya safari through Ol Pejeta, Samburu, Meru and Lewa — remote conservancies most safari-goers never reach. Private 4x4 game drives and handpicked lodges.",
  openGraph: {
    title: "Northern Kenya Explorer: Off the Beaten Path | Get Trip Go",
    description: "Ol Pejeta, Samburu, Meru and Lewa — a 10-day guided Kenya safari through remote northern conservancies.",
    url: "https://gettripgo.com/kenya/northern-kenya-explorer-off-the-beaten-path",
    siteName: "Get Trip Go",
    images: [{ url: "https://images.unsplash.com/photo-1526095179574-86e545346ae6?w=1200&q=80", width: 1200, height: 630, alt: "Northern Kenya safari" }],
    locale: "en_IN",
    type: "article",
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya/northern-kenya-explorer-off-the-beaten-path",
  },
};
const tripSchema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Northern Kenya Explorer: Off the Beaten Path",
  description: "A 10-day, 9-night Kenya safari through Ol Pejeta, Samburu, Meru and Lewa with private 4x4 game drives and handpicked lodges.",
  touristType: "Safari",
  provider: { "@type": "TravelAgency", name: "Get Trip Go", url: "https://gettripgo.com" },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: "https://gettripgo.com/kenya/northern-kenya-explorer-off-the-beaten-path",
  },
};
export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} />
      <KenyaNorthernExplorerLandingPage />
    </>
  );
}
