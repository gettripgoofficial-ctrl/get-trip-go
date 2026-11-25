import type { Metadata } from "next";
import DarjeelingMetro from "@/components/india/darjeeling/DarjeelingMetro";

export const metadata: Metadata = {
  title: "Darjeeling Travel Guide 2027: Toy Train & Tiger Hill",
  description:
    "Plan Darjeeling in 2027: toy train, Tiger Hill sunrise, tea gardens, best time, Delhi and Kolkata to Darjeeling and a 2-day itinerary.",
  alternates: { canonical: "https://gettripgo.com/India/darjeeling" },
  openGraph: {
    type: "article",
    title: "Darjeeling Travel Guide 2027: Toy Train & Tiger Hill",
    description:
      "Toy train, Tiger Hill sunrise, tea gardens, best time, Delhi and Kolkata to Darjeeling and a 2-day itinerary.",
    url: "https://gettripgo.com/India/darjeeling",
    images: ["/images/darjeeling-guide-og.jpg"],
  },
};

export default function Page() {
  return <DarjeelingMetro />;
}
