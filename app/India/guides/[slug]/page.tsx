import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Breadcrumbs from "@/components/Breadcrumbs"
import { guides } from "@/data/india/guides"

// Only the known guide slugs exist; everything else is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = guides.find((g) => g.slug === params.slug)
  if (!guide) return {}
  return {
    title: { absolute: `${guide.title} | Get Trip Go` },
    description: guide.description,
    alternates: { canonical: `https://gettripgo.com/India/guides/${guide.slug}` },
    // TODO_OWNER: remove noindex once this guide has real, verified content.
    robots: { index: false, follow: true },
  }
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = guides.find((g) => g.slug === params.slug)
  if (!guide) notFound()

  return (
    <div className="bg-white">
      <Breadcrumbs
        items={[
          { label: "India", href: "/India" },
          { label: guide.title },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <h1 className="text-3xl font-extrabold leading-tight text-[#1a2b49] sm:text-4xl">{guide.title}</h1>
        <p className="mt-4 text-lg text-gray-600">{guide.description}</p>
        <p className="mt-8 rounded-xl border border-dashed border-gray-300 p-6 text-gray-700">
          TODO_OWNER: add real, verified content for this guide. Any visa, health or safety facts need a
          source (TODO_VERIFY).
        </p>
      </article>
    </div>
  )
}
