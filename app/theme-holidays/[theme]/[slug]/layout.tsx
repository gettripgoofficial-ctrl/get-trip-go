import type { Metadata } from "next";
import { getThemePackageBySlug } from "@/data/themePackages";

export async function generateMetadata({
  params,
}: {
  params: { theme: string; slug: string };
}): Promise<Metadata> {
  const pkg = getThemePackageBySlug(params.slug);

  if (!pkg) {
    return { title: "Package Not Found" };
  }

  return {
    title: `${pkg.name} — ${params.theme} Holiday Package`,
    description: `${pkg.name} — a ${pkg.duration} ${params.theme.toLowerCase()} holiday to ${pkg.destination}, ${pkg.country}. Starting at ₹${pkg.price.toLocaleString("en-IN")} per person with Get Trip Go.`,
  };
}

export default function ThemeHolidaySlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
