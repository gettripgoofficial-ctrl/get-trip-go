import type { Metadata } from "next";
import KhajurahoMetro from "@/components/india/khajuraho/KhajurahoMetro";

export const metadata: Metadata = {
  title: "Khajuraho Travel Guide 2027: Temples, Dance & Tigers",
  description:
    "Plan Khajuraho in 2027: UNESCO temples, light and sound show, Panna tiger reserve, best time, Delhi to Khajuraho and a 2-day itinerary.",
  alternates: { canonical: "https://gettripgo.com/India/khajuraho" },
  openGraph: {
    type: "article",
    title: "Khajuraho Travel Guide 2027: Temples, Dance & Tigers",
    description:
      "UNESCO temples, light and sound show, Panna tiger reserve, best time, Delhi to Khajuraho and a 2-day itinerary.",
    url: "https://gettripgo.com/India/khajuraho",
    images: ["/images/khajuraho-guide-og.jpg"],
  },
};

export default function Page() {
  return <KhajurahoMetro />;
}
