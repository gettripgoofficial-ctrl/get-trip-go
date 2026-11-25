import type { Metadata } from "next";
import RanthamboreMetro from "@/components/india/ranthambore/RanthamboreMetro";

export const metadata: Metadata = {
  title: "Ranthambore Travel Guide 2027: Tiger Safari Tips",
  description:
    "Plan Ranthambore in 2027: tiger safari zones, Ranthambore Fort, best time, Delhi to Sawai Madhopur by train and a 2-day itinerary.",
  alternates: { canonical: "https://gettripgo.com/India/ranthambore" },
  openGraph: {
    type: "article",
    title: "Ranthambore Travel Guide 2027: Tiger Safari Tips",
    description:
      "Tiger safari zones, Ranthambore Fort, best time, Delhi to Sawai Madhopur and a 2-day itinerary.",
    url: "https://gettripgo.com/India/ranthambore",
    images: ["/images/ranthambore-guide-og.jpg"],
  },
};

export default function Page() {
  return <RanthamboreMetro />;
}
