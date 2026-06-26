// Shared schema.org builder for tour / holiday package pages.
//
// Why both Product AND TouristTrip:
// - Product + Offer is what Google actually renders as a rich result
//   (price, availability) in search. This is the one that matters for CTR.
// - TouristTrip is the semantically correct type for a multi-day trip, but
//   Google has no rich-result treatment for it today. It's still worth
//   including because AI engines (ChatGPT, Perplexity, Google AI Overviews)
//   read it when deciding whether to cite a page as a source.
//
// Both are valid to have on the same page as separate JSON-LD blocks.

const MONTHS: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
}

/**
 * Parses dates in the site's "15 Jul 2026" format and checks whether at
 * least one is still in the future. Used to set Offer.availability
 * dynamically instead of hardcoding InStock everywhere.
 *
 * If a date string doesn't match the expected format, we fail open
 * (treat as upcoming) rather than wrongly mark a real tour as SoldOut.
 */
export function hasUpcomingDate(dates: string[]): boolean {
  if (!dates || dates.length === 0) return true
  const now = new Date()
  return dates.some((d) => {
    const parts = d.trim().split(" ")
    if (parts.length < 3) return true
    const day = parseInt(parts[0], 10)
    const month = MONTHS[parts[1] as keyof typeof MONTHS]
    const year = parseInt(parts[2], 10)
    if (Number.isNaN(day) || month === undefined || Number.isNaN(year)) return true
    return new Date(year, month, day) >= now
  })
}

type Availability = "InStock" | "SoldOut" | "PreOrder"

export type TripSchemaInput = {
  /** Full canonical URL of the page, e.g. https://gettripgo.com/group-departures/heart-of-europe */
  url: string
  name: string
  description: string
  /** Hero image first, then gallery images. Absolute URLs only. */
  images: string[]
  /** Price in INR (or whatever priceCurrency is set to). */
  price: number
  priceCurrency?: string
  /** Unique identifier — page slug works well. */
  sku: string
  availability?: Availability
  /** ISO date string, e.g. "2026-12-31". Omit if not applicable. */
  priceValidUntil?: string
  /** Place names for the TouristTrip itinerary (countries, cities, or destination). */
  itineraryPlaces: string[]
  touristType?: string
  providerName?: string
  providerUrl?: string
  /**
   * Only pass this when you have REAL rating data from your own dataset.
   * Never fabricate a rating/count — Google cross-checks this and can
   * suppress the whole rich result (or penalise the page) if it doesn't
   * match what's actually on the page / on Google Business Profile.
   */
  realRating?: { value: number; count: number }
}

export function buildTripSchemas(input: TripSchemaInput) {
  const {
    url,
    name,
    description,
    images,
    price,
    priceCurrency = "INR",
    sku,
    availability = "InStock",
    priceValidUntil,
    itineraryPlaces,
    touristType = "Package tour",
    providerName = "Get Trip Go",
    providerUrl = "https://gettripgo.com",
    realRating,
  } = input

  const aggregateRating = realRating
    ? {
        "@type": "AggregateRating",
        ratingValue: realRating.value,
        reviewCount: realRating.count,
      }
    : undefined

  const baseOffer = {
    "@type": "Offer",
    url,
    priceCurrency,
    price: String(price),
    availability: `https://schema.org/${availability}`,
    ...(priceValidUntil ? { priceValidUntil } : {}),
  }

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: images.filter(Boolean),
    brand: { "@type": "Brand", name: providerName },
    sku,
    offers: baseOffer,
    ...(aggregateRating ? { aggregateRating } : {}),
  }

  const touristTrip = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name,
    description,
    provider: { "@type": "TravelAgency", name: providerName, url: providerUrl },
    touristType,
    itinerary: {
      "@type": "ItemList",
      itemListElement: itineraryPlaces.filter(Boolean).map((place, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Place", name: place },
      })),
    },
    offers: {
      "@type": "Offer",
      price: String(price),
      priceCurrency,
      availability: `https://schema.org/${availability}`,
    },
    ...(aggregateRating ? { aggregateRating } : {}),
  }

  return { product, touristTrip }
}

/** Builds a simple ItemList schema for catalog/listing pages. */
export function buildItemListSchema(input: {
  name: string
  url: string
  items: { name: string; url: string }[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: input.name,
    url: input.url,
    itemListElement: input.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: item.url,
      name: item.name,
    })),
  }
}
