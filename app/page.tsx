import HeroSection from "@/components/HeroSection"
import HeroSectionMobile from "@/components/HeroSectionMobile"
import SecondaryServices from "@/components/SecondaryServices"
import SpecialOffers from "@/components/SpecialOffers"
import PopularDestinations from "@/components/PopularDestinations"
import GroupDepartures from "@/components/GroupDepartures"
import CustomPackages from "@/components/CustomPackages"
import ThemeHolidays from "@/components/ThemeHolidays"
import TrustedPartners from "@/components/TrustedPartners"
import TravelStories from "@/components/TravelStories"
import NewsletterSignup from "@/components/NewsletterSignup"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Desktop Hero */}
      <div className="hidden md:block">
        <HeroSection />
      </div>

      {/* Mobile Hero */}
      <div className="block md:hidden">
        <HeroSectionMobile />
      </div>

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
      <NewsletterSignup />

    </main>
  )
}