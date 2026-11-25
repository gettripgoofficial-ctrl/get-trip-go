import type { Metadata } from "next";
import KeralaMetro from "../../../components/india/kerala/KeralaMetro";

export const metadata: Metadata = {
  title: "Kerala Travel Guide 2027: Backwaters, Hills & Beaches",
  description:
    "Plan your Kerala trip with our 2027 guide: best time, Kochi, Munnar, Alleppey backwaters, Kovalam, Varkala, Thekkady, how to reach from Delhi and FAQs.",
  alternates: { canonical: "https://gettripgo.com/India/kerala" },
  openGraph: {
    type: "article",
    url: "https://gettripgo.com/India/kerala",
    title: "Kerala Travel Guide 2027: Backwaters, Hills & Beaches",
    description:
      "Best time, Kochi, Munnar, Alleppey backwaters, Kovalam, Varkala, Thekkady, how to reach from Delhi and FAQs.",
    images: [
      {
        url: "/images/kerala-guide-og.jpg",
        width: 1200,
        height: 630,
        alt: "Houseboat on the Alleppey backwaters at sunset",
      },
    ],
  },
};

export default function Page() {
  return <KeralaMetro />;
}
