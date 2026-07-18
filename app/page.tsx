import ResponsiveHero from "@/components/ResponsiveHero"
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

      {/* Hero — picks mobile or desktop version based on real screen size */}
      <ResponsiveHero />

      {/* Sections below — shared for both */}
      <div className="hidden md:block">
        <SecondaryServices />
      </div>

      <div className="hidden md:block">
        <SpecialOffers />
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