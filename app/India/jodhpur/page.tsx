import type { Metadata } from "next";
import JodhpurMetro from "@/components/india/jodhpur/JodhpurMetro";

export const metadata: Metadata = {
  title: "Jodhpur Travel Guide 2027: Blue City Tips & Trips",
  description:
    "Plan Jodhpur in 2027: Mehrangarh Fort, the Blue City lanes, best time to visit, how to reach from Delhi, a 2-day itinerary and nearby trips.",
  alternates: { canonical: "https://gettripgo.com/India/jodhpur" },
  openGraph: {
    type: "article",
    title: "Jodhpur Travel Guide 2027: Blue City Tips & Trips",
    description:
      "Mehrangarh Fort, the Blue City lanes, best time to visit, how to reach from Delhi, a 2-day itinerary and nearby trips.",
    url: "https://gettripgo.com/India/jodhpur",
    images: ["/images/jodhpur-guide-og.jpg"],
  },
};

export default function Page() {
  return <JodhpurMetro />;
}
