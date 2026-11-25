import type { Metadata } from "next";
import JaipurMetro from "@/components/india/jaipur/JaipurMetro";

export const metadata: Metadata = {
  title: "Jaipur Travel Guide 2027: Forts, Palaces, Hotels & Tips",
  description:
    "Plan your Jaipur trip with our 2027 guide: best time to visit, Amber Fort, Hawa Mahal, City Palace, hotels, and Delhi to Jaipur by train or road.",
  alternates: { canonical: "https://gettripgo.com/India/jaipur" },
  openGraph: {
    title: "Jaipur Travel Guide 2027: Forts, Palaces, Hotels & Tips",
    description:
      "Best time to visit Jaipur, Amber Fort, City Palace, Hawa Mahal, hotels and how to reach Jaipur from Delhi.",
    url: "https://gettripgo.com/India/jaipur",
    type: "article",
  },
};

export default function JaipurPage() {
  return <JaipurMetro />;
}
