import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  kenyaStays,
  kenyaSafariWildlife,
  kenyaParksReserves,
  kenyaVisaEntry,
} from "@/data/kenyaData"
import { kenyaArticleSeo } from "@/data/kenyaArticleSeo"
import KenyaArticleShell from "@/components/KenyaArticleShell"
import CheetahsOfTheMaraArticle from "@/components/kenya-articles/cheetahs-of-the-mara"
import AmboselisLastSuperTuskersArticle from "@/components/kenya-articles/amboselis-last-super-tuskers"
import LakeNakurusFlamingoSpectacleArticle from "@/components/kenya-articles/lake-nakurus-flamingo-spectacle"

// All articles that can be looked up by slug across every Kenya category.
const allArticles = [
  ...kenyaStays,
  ...kenyaSafariWildlife,
  ...kenyaParksReserves,
  ...kenyaVisaEntry,
]

// Add one entry here per article as it's written.
const registry: Record<string, React.ComponentType> = {
  "cheetahs-of-the-mara": CheetahsOfTheMaraArticle,
  "amboselis-last-super-tuskers": AmboselisLastSuperTuskersArticle,
  "lake-nakurus-flamingo-spectacle": LakeNakurusFlamingoSpectacleArticle,
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

  return (
    <KenyaArticleShell
      category={meta!.category}
      title={meta!.title}
      heroImage={meta!.image}
      heroAlt={meta!.title}
      readTime={meta!.meta}
    >
      <Body />
    </KenyaArticleShell>
  )
}
