import type { Metadata } from "next";
import RishikeshMetro from "@/components/india/rishikesh/RishikeshMetro";

export const metadata: Metadata = {
  title: "Rishikesh Travel Guide 2027: Ganga, Yoga & Rafting",
  description:
    "Plan Rishikesh in 2027: Laxman Jhula, Ganga Aarti, yoga, rafting, best time, Delhi to Rishikesh by road or train and a 2-day itinerary.",
  alternates: { canonical: "https://gettripgo.com/India/rishikesh" },
  openGraph: {
    type: "article",
    title: "Rishikesh Travel Guide 2027: Ganga, Yoga & Rafting",
    description:
      "Laxman Jhula, Ganga Aarti, yoga, rafting, best time, Delhi to Rishikesh and a 2-day itinerary.",
    url: "https://gettripgo.com/India/rishikesh",
    images: ["/images/rishikesh-guide-og.jpg"],
  },
};

export default function Page() {
  return <RishikeshMetro />;
}
