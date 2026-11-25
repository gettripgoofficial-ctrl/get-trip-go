import type { Metadata } from "next";
import AjantaElloraMetro from "../../../components/india/ajanta-ellora/AjantaElloraMetro";

export const metadata: Metadata = {
  title: "Ajanta & Ellora Caves Guide 2027: Kailasa & Aurangabad",
  description:
    "Plan Ajanta and Ellora with this 2027 guide: Kailasa Temple, Ajanta murals, best time, how to reach from Delhi, a 2-day itinerary and day trips.",
  alternates: { canonical: "https://gettripgo.com/India/ajanta-ellora" },
  openGraph: {
    type: "article",
    title: "Ajanta & Ellora Caves Guide 2027: Kailasa & Aurangabad",
    description:
      "Kailasa Temple, Ajanta murals, best time, how to reach from Delhi, a 2-day itinerary and day trips.",
    url: "https://gettripgo.com/India/ajanta-ellora",
    images: ["/images/ajanta-ellora-guide-og.jpg"],
  },
};

export default function Page() {
  return <AjantaElloraMetro />;
}
