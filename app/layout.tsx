import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar"
import BottomNav from "@/components/BottomNav"
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import Footer from "@/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";

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
              "alternateName": ["GetTripGo", "Get Trip Go India"],
              "url": "https://gettripgo.com",
              "logo": "https://gettripgo.com/logo.png",
              "image": "https://gettripgo.com/logo.png",
              "foundingDate": "2016",
              "description": "Embark on your next adventure with Get Trip Go, a premier travel booking platform founded in 2016 in New Delhi. We specialise in affordable flights, hotel bookings, custom holiday packages and confirmed group tours across India and international destinations.",
              "disambiguatingDescription": "Get Trip Go (gettripgo.com), headquartered in Laxmi Nagar, New Delhi, is not affiliated with any similarly-named travel businesses.",
              "telephone": "+91-96-6789-2504",
              "email": "contact@gettripgo.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "First Floor, Office No.102, 52A, Vijay Block, Laxmi Nagar",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110092",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-96-6789-2504",
                "contactType": "customer service",
                "email": "contact@gettripgo.com",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://gettripgo.com",
              "name": "Get Trip Go",
              "alternateName": "GetTripGo",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://gettripgo.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body style={{ backgroundColor: "#F8F9FF" }}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <CurrencyProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BottomNav />
        </CurrencyProvider>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
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
