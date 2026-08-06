import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Get Trip Go — Call, WhatsApp or Email Our Travel Team",
  description:
    "Reach Get Trip Go by phone, WhatsApp or email. Get booking support, refund status, and visa help — average response time under 2 hours.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
