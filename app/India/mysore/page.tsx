import type { Metadata } from "next";
import MysoreMetro from "../../../components/india/mysore/MysoreMetro";

export const metadata: Metadata = {
  title: "Mysore Travel Guide 2027: Palace, Dasara & Day Trips",
  description:
    "Plan Mysore with this 2027 guide: Mysore Palace, Chamundi Hills, Dasara, best time, how to reach from Delhi, a 2-day itinerary and day trips.",
  alternates: { canonical: "https://gettripgo.com/India/mysore" },
  openGraph: {
    type: "article",
    title: "Mysore Travel Guide 2027: Palace, Dasara & Day Trips",
    description:
      "Mysore Palace, Chamundi Hills, Dasara, best time, how to reach from Delhi, a 2-day itinerary and day trips.",
    url: "https://gettripgo.com/India/mysore",
    images: ["/images/mysore-guide-og.jpg"],
  },
};

export default function Page() {
  return <MysoreMetro />;
}
