import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  kenyaStays,
  kenyaSafariWildlife,
  kenyaParksReserves,
  kenyaVisaEntry,
  kenyaVisaEntryExtra,
  kenyaConservationCulture,
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

// All articles that can be looked up by slug across every Kenya category.
const allArticles = [
  ...kenyaStays,
  ...kenyaSafariWildlife,
  ...kenyaParksReserves,
  ...kenyaVisaEntry,
  ...kenyaVisaEntryExtra,
  ...kenyaConservationCulture,
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
}

function getArticleMeta(slug: string) {
  return allArticles.find((a) => a.id === slug)
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
