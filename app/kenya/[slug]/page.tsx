import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  kenyaStays,
  kenyaSafariWildlife,
  kenyaParksReserves,
  kenyaVisaEntry,
  kenyaVisaEntryExtra,
  kenyaConservationCulture,
  kenyaFaqs,
  kenyaWhatToWear,
} from "@/data/kenyaData"
import { kenyaArticleSeo } from "@/data/kenyaArticleSeo"
import { kenyaArticleFaqs } from "@/data/kenyaArticleFaqs"
import { kenyaArticleRelated } from "@/data/kenyaArticleRelated"
import KenyaArticleShell from "@/components/KenyaArticleShell"
import AmboselisLastSuperTuskersArticle from "@/components/kenya-articles/amboselis-last-super-tuskers"
import LakeNakurusFlamingoSpectacleArticle from "@/components/kenya-articles/lake-nakurus-flamingo-spectacle"
import CheetahsOfTheMaraArticle from "@/components/kenya-articles/cheetahs-of-the-mara"
import MasaiMaraVsSerengetiArticle from "@/components/kenya-articles/masai-mara-vs-serengeti"
import MasaiMaraReserveVsConservanciesArticle from "@/components/kenya-articles/masai-mara-reserve-vs-conservancies"
import AmboseliNationalParkGuideArticle from "@/components/kenya-articles/amboseli-national-park-guide"
import TsavoLargestWildestParkArticle from "@/components/kenya-articles/tsavo-largest-wildest-park"
import LakeNakuruParkBirdsRhinosArticle from "@/components/kenya-articles/lake-nakuru-park-birds-rhinos"
import BirdwatchingInKenyaDetailArticle from "@/components/kenya-articles/birdwatching-in-kenya-detail"
import WildebeestRiverCrossingGuideArticle from "@/components/kenya-articles/wildebeest-river-crossing-guide"
import KenyasBigCatsComparedArticle from "@/components/kenya-articles/kenyas-big-cats-compared"
import NightSafarisWhatHappensAfterDarkArticle from "@/components/kenya-articles/night-safaris-what-happens-after-dark"
import CommunityConservanciesHowLocalsProtectWildlifeArticle from "@/components/kenya-articles/community-conservancies-how-locals-protect-wildlife"
import AntiPoachingEffortsInKenyasParksArticle from "@/components/kenya-articles/anti-poaching-efforts-in-kenyas-parks"
import RhinoConservationTheFightToSaveASpeciesArticle from "@/components/kenya-articles/rhino-conservation-the-fight-to-save-a-species"
import TheMaasaiGuardiansOfTheMaraArticle from "@/components/kenya-articles/the-maasai-guardians-of-the-mara"
import ClimateChangeAndTheGreatMigrationArticle from "@/components/kenya-articles/climate-change-and-the-great-migration"
import BasicSwahiliPhrasesAndKenyanEtiquetteArticle from "@/components/kenya-articles/basic-swahili-phrases-and-kenyan-etiquette"
import CommonEtaMistakesArticle from "@/components/kenya-articles/common-eta-mistakes-travelers-denied-boarding"
import OverstayKenyaEtaWhatHappensArticle from "@/components/kenya-articles/overstay-kenya-eta-what-happens"
import VisaOnArrivalVsEtaArticle from "@/components/kenya-articles/visa-on-arrival-vs-eta-which-applies-to-you"
import HowMuchDoesAKenyaSafariCostArticle from "@/components/kenya-articles/how-much-does-a-kenya-safari-cost"
import CanYouDrinkTheWaterInKenyaArticle from "@/components/kenya-articles/can-you-drink-the-water-in-kenya"
import WhatCurrencyShouldYouCarryInKenyaArticle from "@/components/kenya-articles/what-currency-should-you-carry-in-kenya"
import DoYouNeedCashOrCardOnSafariArticle from "@/components/kenya-articles/do-you-need-cash-or-card-on-safari"
import KenyaTimeZoneAndJetLagTipsArticle from "@/components/kenya-articles/kenya-time-zone-and-jet-lag-tips"
import InternetAndPhoneSignalInTheBushArticle from "@/components/kenya-articles/internet-and-phone-signal-in-the-bush"
import WhatHappensIfYouGetSickDuringASafariArticle from "@/components/kenya-articles/what-happens-if-you-get-sick-during-a-safari"
import WhatToWearOnAKenyaSafariArticle from "@/components/kenya-articles/what-to-wear-on-a-kenya-safari"
import TsetseFliesBlueAndBlackClothingArticle from "@/components/kenya-articles/tsetse-flies-blue-and-black-clothing"
import SunProtectionHatsSpfSunglassesArticle from "@/components/kenya-articles/sun-protection-hats-spf-sunglasses"
import PackingListForATenDayKenyaSafariArticle from "@/components/kenya-articles/packing-list-for-a-10-day-kenya-safari"
import DuffelBagsOnlySafariLuggageRestrictionsArticle from "@/components/kenya-articles/duffel-bags-only-safari-luggage-restrictions"
import AngamaMaraSuitesOnTheEscarpmentArticle from "@/components/kenya-articles/angama-mara-suites-on-the-escarpment"
import GiraffeManorBreakfastWithGiraffesArticle from "@/components/kenya-articles/giraffe-manor-breakfast-with-giraffes"
import FinchHattonsOutOfAfricaReimaginedArticle from "@/components/kenya-articles/finch-hattons-out-of-africa-reimagined"
import IloraRetreatsDesignLedLuxuryInTheMaraArticle from "@/components/kenya-articles/ilora-retreats-design-led-luxury-in-the-mara"
import LoldiaHouseAColonialFarmhouseArticle from "@/components/kenya-articles/loldia-house-a-colonial-farmhouse"
import SasaabAMoroccanStyleLodgeArticle from "@/components/kenya-articles/sasaab-a-moroccan-style-lodge"
import OlDonyoLodgeUnderKilimanjarosShadowArticle from "@/components/kenya-articles/ol-donyo-lodge-under-kilimanjaros-shadow"
import SegeraRetreatConservancyAndInfinityPoolArticle from "@/components/kenya-articles/segera-retreat-conservancy-and-infinity-pool"

// All articles that can be looked up by slug across every Kenya category.
const allArticles = [
  ...kenyaStays,
  ...kenyaSafariWildlife,
  ...kenyaParksReserves,
  ...kenyaVisaEntry,
  ...kenyaVisaEntryExtra,
  ...kenyaConservationCulture,
  ...kenyaFaqs,
  ...kenyaWhatToWear,
]

// Add one entry here per article as it's written.
const registry: Record<string, React.ComponentType> = {
  "cheetahs-of-the-mara": CheetahsOfTheMaraArticle,
  "masai-mara-vs-serengeti": MasaiMaraVsSerengetiArticle,
  "masai-mara-reserve-vs-conservancies": MasaiMaraReserveVsConservanciesArticle,
  "amboseli-national-park-guide": AmboseliNationalParkGuideArticle,
  "tsavo-largest-wildest-park": TsavoLargestWildestParkArticle,
  "lake-nakuru-park-birds-rhinos": LakeNakuruParkBirdsRhinosArticle,
  "birdwatching-in-kenya-detail": BirdwatchingInKenyaDetailArticle,
  "wildebeest-river-crossing-guide": WildebeestRiverCrossingGuideArticle,
  "kenyas-big-cats-compared": KenyasBigCatsComparedArticle,
  "amboselis-last-super-tuskers": AmboselisLastSuperTuskersArticle,
  "lake-nakurus-flamingo-spectacle": LakeNakurusFlamingoSpectacleArticle,
  "night-safaris-what-happens-after-dark": NightSafarisWhatHappensAfterDarkArticle,
  "community-conservancies-how-locals-protect-wildlife": CommunityConservanciesHowLocalsProtectWildlifeArticle,
  "anti-poaching-efforts-in-kenyas-parks": AntiPoachingEffortsInKenyasParksArticle,
  "rhino-conservation-the-fight-to-save-a-species": RhinoConservationTheFightToSaveASpeciesArticle,
  "the-maasai-guardians-of-the-mara": TheMaasaiGuardiansOfTheMaraArticle,
  "climate-change-and-the-great-migration": ClimateChangeAndTheGreatMigrationArticle,
  "basic-swahili-phrases-and-kenyan-etiquette": BasicSwahiliPhrasesAndKenyanEtiquetteArticle,
  "common-eta-mistakes-travelers-denied-boarding": CommonEtaMistakesArticle,
  "overstay-kenya-eta-what-happens": OverstayKenyaEtaWhatHappensArticle,
  "visa-on-arrival-vs-eta-which-applies-to-you": VisaOnArrivalVsEtaArticle,
  "how-much-does-a-kenya-safari-cost": HowMuchDoesAKenyaSafariCostArticle,
  "can-you-drink-the-water-in-kenya": CanYouDrinkTheWaterInKenyaArticle,
  "what-currency-should-you-carry-in-kenya": WhatCurrencyShouldYouCarryInKenyaArticle,
  "do-you-need-cash-or-card-on-safari": DoYouNeedCashOrCardOnSafariArticle,
  "kenya-time-zone-and-jet-lag-tips": KenyaTimeZoneAndJetLagTipsArticle,
  "internet-and-phone-signal-in-the-bush": InternetAndPhoneSignalInTheBushArticle,
  "what-happens-if-you-get-sick-during-a-safari": WhatHappensIfYouGetSickDuringASafariArticle,
  "what-to-wear-on-a-kenya-safari": WhatToWearOnAKenyaSafariArticle,
  "tsetse-flies-blue-and-black-clothing": TsetseFliesBlueAndBlackClothingArticle,
  "sun-protection-hats-spf-sunglasses": SunProtectionHatsSpfSunglassesArticle,
  "packing-list-for-a-10-day-kenya-safari": PackingListForATenDayKenyaSafariArticle,
  "duffel-bags-only-safari-luggage-restrictions": DuffelBagsOnlySafariLuggageRestrictionsArticle,
  "angama-mara-suites-on-the-escarpment": AngamaMaraSuitesOnTheEscarpmentArticle,
  "giraffe-manor-breakfast-with-giraffes": GiraffeManorBreakfastWithGiraffesArticle,
  "finch-hattons-out-of-africa-reimagined": FinchHattonsOutOfAfricaReimaginedArticle,
  "ilora-retreats-design-led-luxury-in-the-mara": IloraRetreatsDesignLedLuxuryInTheMaraArticle,
  "loldia-house-a-colonial-farmhouse": LoldiaHouseAColonialFarmhouseArticle,
  "sasaab-a-moroccan-style-lodge": SasaabAMoroccanStyleLodgeArticle,
  "ol-donyo-lodge-under-kilimanjaros-shadow": OlDonyoLodgeUnderKilimanjarosShadowArticle,
  "segera-retreat-conservancy-and-infinity-pool": SegeraRetreatConservancyAndInfinityPoolArticle,
}

function getArticleMeta(slug: string) {
  return allArticles.find((a) => a.id === slug)
}

export async function generateStaticParams() {
  return Object.keys(registry).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const meta = getArticleMeta(params.slug)
  if (!meta) return {}
  const description = kenyaArticleSeo[params.slug] ?? meta.excerpt
  return {
    title: `${meta.title} | Get Trip Go`,
    description,
    openGraph: {
      title: `${meta.title} | Get Trip Go`,
      description,
      url: `https://gettripgo.com/kenya/${params.slug}`,
      siteName: "Get Trip Go",
      images: [{ url: meta.image, width: 1200, height: 630, alt: meta.title }],
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta.title} | Get Trip Go`,
      description,
      images: [meta.image],
    },
    alternates: {
      canonical: `https://gettripgo.com/kenya/${params.slug}`,
    },
  }
}

export default function KenyaArticlePage({ params }: { params: { slug: string } }) {
  const meta = getArticleMeta(params.slug)
  const Body = registry[params.slug]
  if (!meta || !Body) {
    notFound()
  }

  const description = kenyaArticleSeo[params.slug] ?? meta!.excerpt
  const faqs = kenyaArticleFaqs[params.slug]
  const related = kenyaArticleRelated[params.slug]

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta!.title,
    description,
    image: meta!.image,
    author: { "@type": "Organization", name: "GetTripGo Travel Desk" },
    publisher: { "@type": "Organization", name: "Get Trip Go" },
    mainEntityOfPage: `https://gettripgo.com/kenya/${params.slug}`,
  }

  const faqSchema = faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <KenyaArticleShell
        category={meta!.category}
        title={meta!.title}
        heroImage={meta!.image}
        heroAlt={meta!.title}
        readTime={meta!.meta}
        related={related}
      >
        <Body />
      </KenyaArticleShell>
    </>
  )
}
