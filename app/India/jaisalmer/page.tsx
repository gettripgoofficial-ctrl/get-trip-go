import type { Metadata } from "next";
import JaisalmerMetro from "../../../components/india/jaisalmer/JaisalmerMetro";

export const metadata: Metadata = {
  title: "Jaisalmer Travel Guide 2027: Fort, Dunes & Camel Safari",
  description:
    "Plan Jaisalmer in 2027: the Golden Fort, havelis, Sam sand dunes, camel safari, best time, Delhi to Jaisalmer options, a 2-day itinerary and FAQs.",
  alternates: { canonical: "https://gettripgo.com/India/jaisalmer" },
  openGraph: {
    title: "Jaisalmer Travel Guide 2027: Fort, Dunes & Camel Safari",
    description:
      "Plan Jaisalmer in 2027: the Golden Fort, havelis, Sam sand dunes, camel safari, best time, Delhi to Jaisalmer options, a 2-day itinerary and FAQs.",
    url: "https://gettripgo.com/India/jaisalmer",
    siteName: "Get Trip Go",
    type: "article",
    images: [
      {
        url: "/images/jaisalmer-guide-og.jpg",
        width: 1200,
        height: 630,
        alt: "Jaisalmer Fort glowing golden at sunset",
      },
    ],
  },
};

export default function Page() {
  return <JaisalmerMetro />;
}
