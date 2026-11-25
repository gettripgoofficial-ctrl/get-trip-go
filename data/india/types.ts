// Incredible India hub: data model types (single editable data source).
// Prices are stored ONCE in BASE_CURRENCY and converted by the currency switcher.

export const BASE_CURRENCY = "INR" as const

export type ImageRef = {
  src: string
  alt: string
  width: number
  height: number
}

// "core" = the 8 main cities carousel; "more" = the "More places to explore" row.
export type CityGroup = "core" | "more"

export type City = {
  slug: string
  name: string
  group: CityGroup
  blurb: string // one line aimed at a first-time international visitor
  badge?: string // e.g. "Golden Triangle"
  image?: ImageRef // omit until an original photo exists; the card shows a gradient
  link: string // /India/<slug>
}

export type Attraction = {
  slug: string
  name: string
  city: string
  image?: ImageRef
  link: string
}

export type PackageCategory = "culture" | "adventure"

export type Package = {
  title: string
  destination: string
  days: number
  nights: number
  image?: ImageRef
  price: number // in BASE_CURRENCY
  oldPrice?: number // in BASE_CURRENCY
  rating?: number // only from real, visible reviews
  reviewCount?: number // only from real, visible reviews
  badges: string[]
  link: string
  category: PackageCategory
}

export type Guide = {
  slug: string
  title: string
  description: string
  lastUpdated: string // ISO date, e.g. "2026-11-21"
}

export type Faq = {
  question: string
  answer: string
  lastUpdated?: string // ISO date
}

export type CountryPage = {
  slug: string
  country: string
  title: string
  description: string
  intro: string // unique text per country
}

export type Story = {
  title: string
  image?: ImageRef
  link: string
}
