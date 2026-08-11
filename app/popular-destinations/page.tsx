import type { Metadata } from "next";
import PopularDestinationsClient from "./PopularDestinationsClient";
import { packages } from "@/data/packages";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> {
  const destination = typeof searchParams.destination === "string" ? searchParams.destination : null;

  if (!destination || destination === "All") {
    return {
      title: "Popular Holiday Destinations — Bali, Thailand, Kerala & More",
      description:
        "Browse holiday packages across Bali, Thailand, Kerala, Maldives, Dubai and more. Filter by budget, hotel category and travel theme with Get Trip Go.",
    };
  }

  const matches = packages.filter(
    (p) => p.destination.toLowerCase() === destination.toLowerCase()
  );
  const count = matches.length;
  const lowestPrice = count > 0 ? Math.min(...matches.map((p) => p.price)) : null;
  const country = matches[0]?.country;

  return {
    title: `${destination} Holiday Packages${country ? ` — ${country}` : ""}`,
    description: `Explore ${count} ${destination} holiday package${count === 1 ? "" : "s"}${
      lowestPrice ? ` starting at ₹${lowestPrice.toLocaleString("en-IN")} per person` : ""
    }. Compare hotels, themes and inclusions with Get Trip Go.`,
  };
}

export default function PopularDestinationsPage() {
  return <PopularDestinationsClient />;
}
