import type { Metadata } from "next";
import { getPackageBySlug } from "@/data/packages";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const pkg = getPackageBySlug(params.slug);

  if (!pkg) {
    return { title: "Holiday Package Not Found" };
  }

  const themeText = pkg.themes?.length ? ` — ${pkg.themes.join(", ")}` : "";

  return {
    title: `${pkg.name} — ${pkg.duration} Holiday Package${themeText}`,
    description: `Book the ${pkg.name} package to ${pkg.destination}, ${pkg.country}: ${pkg.duration}, ${pkg.nights} nights, ${pkg.hotelCategory}-star hotels. Starting at ₹${pkg.price.toLocaleString("en-IN")} per person with Get Trip Go.`,
  };
}

export default function PopularDestinationSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
