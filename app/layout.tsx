import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "GetTripGo | Flights, Hotels & Holiday Packages at Best Prices",
  description: "Book flights, hotels & holiday packages at best prices. India's #1 travel platform for custom holidays, group tours & visa. Compare & save more — Get Trip Go.",
  keywords: "flights booking, hotels, holiday packages, custom holidays, group tours, visa, travel India, best travel deals, GetTripGo",
  openGraph: {
    title: "GetTripGo | Flights, Hotels & Holiday Packages at Best Prices",
    description: "Book flights, hotels & holiday packages at best prices. India's #1 travel platform for custom holidays, group tours & visa. Compare & save more — Get Trip Go.",
    url: "https://www.gettripgo.com",
    siteName: "GetTripGo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GetTripGo | Flights, Hotels & Holiday Packages at Best Prices",
    description: "Book flights, hotels & holiday packages at best prices. India's #1 travel platform for custom holidays, group tours & visa. Compare & save more — Get Trip Go.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/get-trip-go.png",
    apple: "/get-trip-go.png",
    shortcut: "/get-trip-go.png",
  },
  alternates: {
    canonical: "https://www.gettripgo.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>
        <div style={{ backgroundColor: "#1A56F0" }}>
          <Navbar />
        </div>
        {children}
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}