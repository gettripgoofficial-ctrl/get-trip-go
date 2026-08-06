import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customized Itineraries — Handcrafted Holiday Packages",
  description:
    "Tailor-made travel itineraries crafted by Get Trip Go's travel experts. Choose from honeymoon, family, adventure and cultural packages across Asia, Europe and beyond.",
};

export default function CustomizedItinerariesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
