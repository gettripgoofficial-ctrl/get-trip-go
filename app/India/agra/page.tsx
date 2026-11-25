import type { Metadata } from "next";
import AgraMetro from "@/components/india/agra/AgraMetro";

export const metadata: Metadata = {
  title: "Agra Travel Guide 2027: Taj Mahal, Hotels & Tips",
  description:
    "Plan your Agra trip with our 2027 guide: best time to visit, Taj Mahal tips, Agra Fort, hotels, Delhi to Agra by train or car, and a one-day plan.",
  alternates: { canonical: "https://gettripgo.com/India/agra" },
  openGraph: {
    title: "Agra Travel Guide 2027: Taj Mahal, Hotels & Tips",
    description:
      "Best time to visit Agra, Taj Mahal tips, Agra Fort, Fatehpur Sikri, hotels and how to reach Agra from Delhi.",
    url: "https://gettripgo.com/India/agra",
    type: "article",
  },
};

export default function AgraPage() {
  return <AgraMetro />;
}
