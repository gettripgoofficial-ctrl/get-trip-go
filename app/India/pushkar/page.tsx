import type { Metadata } from "next";
import PushkarMetro from "../../../components/india/pushkar/PushkarMetro";

export const metadata: Metadata = {
  title: "Pushkar Travel Guide 2027: Lake, Ghats & Camel Fair",
  description:
    "Plan Pushkar in 2027: Pushkar Lake, Brahma Temple, ghats, Savitri Temple sunrise, camel fair, best time, Delhi to Pushkar options, a 2-day plan and FAQs.",
  alternates: { canonical: "https://gettripgo.com/India/pushkar" },
  openGraph: {
    title: "Pushkar Travel Guide 2027: Lake, Ghats & Camel Fair",
    description:
      "Plan Pushkar in 2027: Pushkar Lake, Brahma Temple, ghats, Savitri Temple sunrise, camel fair, best time, Delhi to Pushkar options, a 2-day plan and FAQs.",
    url: "https://gettripgo.com/India/pushkar",
    siteName: "Get Trip Go",
    type: "article",
    images: [
      {
        url: "/images/pushkar-guide-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pushkar Lake ghats at sunrise",
      },
    ],
  },
};

export default function Page() {
  return <PushkarMetro />;
}
