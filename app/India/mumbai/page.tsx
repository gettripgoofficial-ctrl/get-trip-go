import type { Metadata } from "next";
import MumbaiMetro from "../../../components/india/mumbai/MumbaiMetro";

export const metadata: Metadata = {
  title: "Mumbai Travel Guide 2027: Sights, Food, Stay & Tips",
  description:
    "Plan your Mumbai trip with our 2027 guide: best time, Gateway of India, Elephanta Caves, street food, airports, how to reach from Delhi, hotels and FAQs.",
  alternates: { canonical: "https://gettripgo.com/India/mumbai" },
  openGraph: {
    type: "article",
    url: "https://gettripgo.com/India/mumbai",
    title: "Mumbai Travel Guide 2027: Sights, Food, Stay & Tips",
    description:
      "Best time, Gateway of India, Elephanta Caves, street food, airports, how to reach from Delhi and abroad, hotels and FAQs.",
    images: [
      {
        url: "/images/mumbai-guide-og.jpg",
        width: 1200,
        height: 630,
        alt: "Gateway of India at sunrise, Colaba, Mumbai",
      },
    ],
  },
};

export default function Page() {
  return <MumbaiMetro />;
}
