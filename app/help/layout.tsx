import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center — Booking Support & FAQs",
  description:
    "Get answers to booking, refund, visa and payment questions. Get Trip Go's Help Center covers everything you need for a smooth trip.",
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
