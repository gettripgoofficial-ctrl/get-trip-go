import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#F8F9FF" }}>
        <CurrencyProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://gettripgo.com"),
  title: {
    default: "Get Trip Go | India's Trusted Travel Booking Platform",
    template: "%s | Get Trip Go",
  },
  description:
    "Book flights, hotels, custom holidays & group tours at the best prices. India's trusted travel platform for domestic and international travel.",
  keywords: [
    "travel booking", "flights", "hotels", "holiday packages",
    "group tours", "customized itineraries", "India travel",
    "international travel", "Get Trip Go",
  ],
  authors: [{ name: "Get Trip Go" }],
  creator: "Get Trip Go",
  publisher: "Get Trip Go",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gettripgo.com",
    siteName: "Get Trip Go",
    title: "Get Trip Go | India's Trusted Travel Booking Platform",
    description:
      "Book flights, hotels, custom holidays & group tours at the best prices.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Get Trip Go",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Trip Go | India's Trusted Travel Booking Platform",
    description:
      "Book flights, hotels, custom holidays & group tours at the best prices.",
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};