import type { Metadata } from "next";
import MaduraiMetro from "../../../components/india/madurai/MaduraiMetro";

export const metadata: Metadata = {
  title: "Madurai Travel Guide 2027: Meenakshi Temple & Day Trips",
  description:
    "Plan Madurai with this 2027 guide: Meenakshi Amman Temple, Thirumalai Nayak Palace, best time, how to reach from Delhi, a 2-day itinerary and day trips.",
  alternates: { canonical: "https://gettripgo.com/India/madurai" },
  openGraph: {
    type: "article",
    title: "Madurai Travel Guide 2027: Meenakshi Temple & Day Trips",
    description:
      "Meenakshi Amman Temple, Thirumalai Nayak Palace, best time, how to reach from Delhi, a 2-day itinerary and day trips.",
    url: "https://gettripgo.com/India/madurai",
    images: ["/images/madurai-guide-og.jpg"],
  },
};

export default function Page() {
  return <MaduraiMetro />;
}
