import type { Metadata } from "next";
import UdaipurMetro from "@/components/india/udaipur/UdaipurMetro";

export const metadata: Metadata = {
  title: "Udaipur Travel Guide 2027: Lakes, Palaces, Hotels & Tips",
  description:
    "Plan your Udaipur trip with our 2027 guide: best time to visit, Lake Pichola, City Palace, lake-view hotels, Kumbhalgarh and Delhi to Udaipur options.",
  alternates: { canonical: "https://gettripgo.com/India/udaipur" },
  openGraph: {
    title: "Udaipur Travel Guide 2027: Lakes, Palaces, Hotels & Tips",
    description:
      "Best time to visit Udaipur, Lake Pichola, City Palace, Kumbhalgarh, hotels and how to reach Udaipur from Delhi and Jaipur.",
    url: "https://gettripgo.com/India/udaipur",
    type: "article",
  },
};

export default function UdaipurPage() {
  return <UdaipurMetro />;
}
