import type { Metadata } from "next";
import { getCustomPackageBySlug } from "@/data/customPackages";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const pkg = getCustomPackageBySlug(params.slug);

  if (!pkg) {
    return { title: "Custom Itinerary Not Found" };
  }

  return {
    title: `${pkg.name} — ${pkg.duration} Custom Itinerary`,
    description: `A handcrafted ${pkg.duration} ${pkg.type} itinerary covering ${pkg.cities}, ${pkg.country}. Starting at ₹${pkg.price.toLocaleString("en-IN")} per person with Get Trip Go.`,
  };
}

export default function CustomizedItinerarySlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
