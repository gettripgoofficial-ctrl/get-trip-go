import type { Metadata } from "next";
import DharamshalaMetro from "@/components/india/dharamshala/DharamshalaMetro";

export const metadata: Metadata = {
  title: "Dharamshala Travel Guide 2027: McLeod Ganj & Triund",
  description:
    "Plan Dharamshala in 2027: McLeod Ganj, Dalai Lama Temple, Triund trek, best time, Delhi to Dharamshala by road, train or flight, and a 2-day itinerary.",
  alternates: { canonical: "https://gettripgo.com/India/dharamshala" },
  openGraph: {
    type: "article",
    title: "Dharamshala Travel Guide 2027: McLeod Ganj & Triund",
    description:
      "McLeod Ganj, Dalai Lama Temple, Triund trek, best time, Delhi to Dharamshala and a 2-day itinerary.",
    url: "https://gettripgo.com/India/dharamshala",
    images: ["/images/dharamshala-guide-og.jpg"],
  },
};

export default function Page() {
  return <DharamshalaMetro />;
}
