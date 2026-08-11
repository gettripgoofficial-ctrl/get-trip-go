import type { Metadata } from "next";
import ThemeHolidaysClient from "./ThemeHolidaysClient";
import { themePackages } from "@/data/themePackages";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}): Promise<Metadata> {
  const theme = typeof searchParams.theme === "string" ? searchParams.theme : null;

  if (!theme || theme === "All") {
    return {
      title: "Theme Holidays — Honeymoon, Family, Adventure & More",
      description:
        "Browse holiday packages by theme: Honeymoon, Family, Adventure, Beach, Hill Stations, Wildlife & Safari, Spiritual and Luxury trips with Get Trip Go.",
    };
  }

  const matches = themePackages.filter(
    (p) => p.theme.toLowerCase() === theme.toLowerCase()
  );
  const count = matches.length;
  const lowestPrice = count > 0 ? Math.min(...matches.map((p) => p.price)) : null;

  return {
    title: `${theme} Holiday Packages`,
    description: `Explore ${count} ${theme.toLowerCase()} holiday package${count === 1 ? "" : "s"}${
      lowestPrice ? ` starting at ₹${lowestPrice.toLocaleString("en-IN")} per person` : ""
    }. Compare destinations and inclusions with Get Trip Go.`,
  };
}

export default function ThemeHolidaysPage() {
  return <ThemeHolidaysClient />;
}
