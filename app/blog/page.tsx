import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Stories & Guides | Get Trip Go",
  description:
    "Insider travel intel, destination guides, and trip-planning wisdom — straight from the team that lives and breathes travel every single day.",
  keywords: [
    "travel stories", "travel guides", "destination guides",
    "travel tips", "family travel", "honeymoon guide",
    "budget travel", "adventure travel", "Get Trip Go blog",
  ],
  openGraph: {
    title: "Travel Stories & Guides | Get Trip Go",
    description:
      "Insider travel intel, destination guides, and trip-planning wisdom — straight from the team that lives and breathes travel every single day.",
    url: "https://gettripgo.com/blog",
    siteName: "Get Trip Go",
    images: [
      {
        url: "https://gettripgo.com/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Get Trip Go Travel Stories",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Stories & Guides | Get Trip Go",
    description:
      "Insider travel intel, destination guides, and trip-planning wisdom.",
    images: ["https://gettripgo.com/og-blog.jpg"],
  },
  alternates: {
    canonical: "https://gettripgo.com/blog",
  },
};

export { default } from "./client-page";