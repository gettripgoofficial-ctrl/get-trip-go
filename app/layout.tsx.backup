import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"
import BottomNav from "@/components/BottomNav"
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Get Trip Go",
              "url": "https://gettripgo.com",
              "logo": "https://gettripgo.com/logo.png",
              "image": "https://gettripgo.com/logo.png",
              "foundingDate": "2016",
              "description": "Embark on your next adventure with Get Trip Go, a premier travel booking platform founded in 2016 in New Delhi. We specialise in affordable flights, hotel bookings, custom holiday packages and confirmed group tours across India and international destinations.",
              "telephone": "+919334433557",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "First Floor, Office No.102, 52A, Vijay Block, Laxmi Nagar",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110092",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.instagram.com/gettripgo_official/",
                "https://www.facebook.com/gettripgo.official",
                "https://x.com/gettripgo",
                "https://www.youtube.com/@GettripGo"
              ]
            })
          }}
        />
      </head>
      <body style={{ backgroundColor: "#F8F9FF" }}>
        <CurrencyProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BottomNav />
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
  verification: {
    google: "92TJAzSHn0M4P-fp00jNvAMrmgY0gQnXtt5oY7UHsUw",
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
