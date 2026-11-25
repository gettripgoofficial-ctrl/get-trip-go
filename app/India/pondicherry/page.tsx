import type { Metadata } from "next";
import PondicherryMetro from "../../../components/india/pondicherry/PondicherryMetro";

export const metadata: Metadata = {
  title: "Pondicherry Travel Guide 2027: French Quarter & Beaches",
  description:
    "Plan Pondicherry with this 2027 guide: French Quarter, Promenade Beach, Auroville, best time, how to reach from Delhi, a 2-day itinerary and day trips.",
  alternates: { canonical: "https://gettripgo.com/India/pondicherry" },
  openGraph: {
    type: "article",
    title: "Pondicherry Travel Guide 2027: French Quarter & Beaches",
    description:
      "French Quarter, Promenade Beach, Auroville, best time, how to reach from Delhi, a 2-day itinerary and day trips.",
    url: "https://gettripgo.com/India/pondicherry",
    images: ["/images/pondicherry-guide-og.jpg"],
  },
};

export default function Page() {
  return <PondicherryMetro />;
}
