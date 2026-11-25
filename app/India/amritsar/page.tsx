import type { Metadata } from "next";
import AmritsarMetro from "@/components/india/amritsar/AmritsarMetro";

export const metadata: Metadata = {
  title: "Amritsar Travel Guide 2027: Golden Temple & Wagah",
  description:
    "Plan Amritsar in 2027: Golden Temple, Jallianwala Bagh, Wagah Border, best time, Delhi to Amritsar by train or flight and a 2-day itinerary.",
  alternates: { canonical: "https://gettripgo.com/India/amritsar" },
  openGraph: {
    type: "article",
    title: "Amritsar Travel Guide 2027: Golden Temple & Wagah",
    description:
      "Golden Temple, Jallianwala Bagh, Wagah Border, best time, Delhi to Amritsar and a 2-day itinerary.",
    url: "https://gettripgo.com/India/amritsar",
    images: ["/images/amritsar-guide-og.jpg"],
  },
};

export default function Page() {
  return <AmritsarMetro />;
}
