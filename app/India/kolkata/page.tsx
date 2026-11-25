import type { Metadata } from "next";
import KolkataMetro from "../../../components/india/kolkata/KolkataMetro";

export const metadata: Metadata = {
  title: "Kolkata Travel Guide 2027: Victoria Memorial & Puja",
  description:
    "Plan Kolkata with this 2027 guide: Victoria Memorial, Howrah Bridge, Dakshineswar, Durga Puja, best time, how to reach from Delhi, a 2-day itinerary and day trips.",
  alternates: { canonical: "https://gettripgo.com/India/kolkata" },
  openGraph: {
    type: "article",
    title: "Kolkata Travel Guide 2027: Victoria Memorial & Puja",
    description:
      "Victoria Memorial, Howrah Bridge, Dakshineswar, Durga Puja, best time, how to reach from Delhi, a 2-day itinerary and day trips.",
    url: "https://gettripgo.com/India/kolkata",
    images: ["/images/kolkata-guide-og.jpg"],
  },
};

export default function Page() {
  return <KolkataMetro />;
}
