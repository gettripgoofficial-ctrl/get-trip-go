import type { Metadata } from "next";
import HampiMetro from "../../../components/india/hampi/HampiMetro";

export const metadata: Metadata = {
  title: "Hampi Travel Guide 2027: Ruins, Temples & Day Trips",
  description:
    "Plan Hampi with this 2027 guide: Virupaksha Temple, Vittala Temple, Hampi Bazaar, best time, how to reach from Delhi, a 2-day itinerary and day trips.",
  alternates: { canonical: "https://gettripgo.com/India/hampi" },
  openGraph: {
    type: "article",
    title: "Hampi Travel Guide 2027: Ruins, Temples & Day Trips",
    description:
      "Virupaksha Temple, Vittala Temple, Hampi Bazaar, best time, how to reach from Delhi, a 2-day itinerary and day trips.",
    url: "https://gettripgo.com/India/hampi",
    images: ["/images/hampi-guide-og.jpg"],
  },
};

export default function Page() {
  return <HampiMetro />;
}
