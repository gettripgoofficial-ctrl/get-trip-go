import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Group Departures — Escorted Tours to Europe & Beyond",
  description:
    "Join scheduled group departures to Europe, Asia and beyond with fixed dates, expert guides and all-inclusive pricing from Get Trip Go.",
};

export default function GroupDeparturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
