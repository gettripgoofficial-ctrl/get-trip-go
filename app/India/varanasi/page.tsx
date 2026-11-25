import type { Metadata } from "next";
import VaranasiMetro from "../../../components/india/varanasi/VaranasiMetro";

export const metadata: Metadata = {
  title: "Varanasi Travel Guide 2027: Ghats, Temples, Stay & Tips",
  description:
    "Plan your Varanasi trip with our 2027 guide: best time, Ganga Aarti, ghats, Kashi Vishwanath, Sarnath, how to reach from Delhi, hotels and FAQs.",
  alternates: { canonical: "https://gettripgo.com/India/varanasi" },
  openGraph: {
    type: "article",
    url: "https://gettripgo.com/India/varanasi",
    title: "Varanasi Travel Guide 2027: Ghats, Temples, Stay & Tips",
    description:
      "Best time, Ganga Aarti, ghats, Kashi Vishwanath, Sarnath, how to reach from Delhi, where to stay and FAQs.",
    images: [
      {
        url: "/images/varanasi-guide-og.jpg",
        width: 1200,
        height: 630,
        alt: "Sunrise boat ride along the Varanasi ghats on the Ganga",
      },
    ],
  },
};

export default function Page() {
  return <VaranasiMetro />;
}
