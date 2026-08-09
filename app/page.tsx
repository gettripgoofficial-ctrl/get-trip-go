import ResponsiveHero from "@/components/ResponsiveHero"
import KenyaBanner from "@/components/KenyaBanner"
import SecondaryServices from "@/components/SecondaryServices"
import SpecialOffers from "@/components/SpecialOffers"
import PopularDestinations from "@/components/PopularDestinations"
import GroupDepartures from "@/components/GroupDepartures"
import CustomPackages from "@/components/CustomPackages"
import ThemeHolidays from "@/components/ThemeHolidays"
import TrustedPartners from "@/components/TrustedPartners"
import TravelStories from "@/components/TravelStories"
import NewsletterSignup from "@/components/NewsletterSignup"
import FAQSection from "@/components/FAQSection";
import { homeFaqs } from "@/data/faqData";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Preload the desktop hero image so the browser starts fetching it
          immediately from the initial HTML, instead of waiting for JS to
          hydrate ResponsiveHero and mount the <img> tag client-side. */}
      <link rel="preload" as="image" href="/hero1.jpg" fetchPriority="high" media="(min-width: 768px)" />

      {/* Hero — picks mobile or desktop version based on real screen size */}
      <ResponsiveHero />

      {/* Sections below — shared for both */}
      <div className="hidden md:block">
        <SecondaryServices />
      </div>

      <div className="hidden md:block">
        <SpecialOffers />
      </div>
      <div className="hidden md:block">
        <KenyaBanner />
      </div>
      <PopularDestinations />
      <GroupDepartures />
      <CustomPackages />
      <ThemeHolidays />
      <TrustedPartners />
      <TravelStories />
      <FAQSection faqs={homeFaqs} />
      <NewsletterSignup />

    </main>
  )
}