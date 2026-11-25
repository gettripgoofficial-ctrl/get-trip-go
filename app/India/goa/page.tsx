import type { Metadata } from "next";
import GoaMetro from "../../../components/india/goa/GoaMetro";

export const metadata: Metadata = {
  title: "Goa Travel Guide 2027: Beaches, Forts, Hotels & Tips",
  description:
    "Plan your Goa trip with our 2027 guide: best time, North and South Goa beaches, Old Goa churches, airports, how to reach from Delhi, hotels and FAQs.",
  alternates: { canonical: "https://gettripgo.com/India/goa" },
  openGraph: {
    type: "article",
    url: "https://gettripgo.com/India/goa",
    title: "Goa Travel Guide 2027: Beaches, Forts, Hotels & Tips",
    description:
      "Best time, North and South Goa, Old Goa churches, airports, how to reach from Delhi and abroad, hotels and FAQs.",
    images: [
      {
        url: "/images/goa-guide-og.jpg",
        width: 1200,
        height: 630,
        alt: "Palm-lined beach in South Goa at sunset",
      },
    ],
  },
};

export default function Page() {
  return <GoaMetro />;
}
