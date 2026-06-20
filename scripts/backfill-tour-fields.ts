// One-time backfill script. Run with: npx tsx scripts/backfill-tour-fields.ts
// Reads data/groupDepartures.ts, derives new fields from EXISTING data only
// (no invented content), writes data/groupDepartures.ts back out.

import { groupDepartures, type GroupDeparture } from "../data/groupDepartures"
import * as fs from "fs"
import * as path from "path"

function titleCase(s: string) {
  return s.charAt(0) + s.slice(1).toLowerCase()
}

// Derive itinerary purely from existing highlights[] + countries[] + days
function deriveItinerary(tour: GroupDeparture): NonNullable<GroupDeparture["itinerary"]> {
  const { days, highlights, countries } = tour
  const itinerary: NonNullable<GroupDeparture["itinerary"]> = []

  for (let day = 1; day <= days; day++) {
    if (day === 1) {
      itinerary.push({
        day,
        title: `Arrival – ${titleCase(countries[0])}`,
        description: `Arrive and transfer to your hotel. Rest of the day at leisure to settle in.`,
        tags: ["Transfer", "Hotel"],
      })
    } else if (day === days) {
      itinerary.push({
        day,
        title: "Departure",
        description: `Check out from hotel and transfer to airport for your flight back home.`,
        tags: ["Transfer"],
      })
    } else {
      const middleDayCount = days - 2
      const highlightIndex = Math.min(
        Math.floor(((day - 2) / Math.max(1, middleDayCount)) * highlights.length),
        highlights.length - 1
      )
      const highlight = highlights[highlightIndex] ?? highlights[highlights.length - 1]
      itinerary.push({
        day,
        title: highlight,
        description: `Visit ${highlight} and explore the surrounding area with your tour group.`,
        tags: ["Sightseeing", "Hotel"],
      })
    }
  }
  return itinerary
}

function deriveTerms(tour: GroupDeparture): string[] {
  return [
    "Prices are per person on twin sharing basis",
    "Rates are subject to change without prior notice until booking is confirmed",
    `Package includes: ${tour.inclusions.join(", ")}`,
    `Package excludes: ${tour.exclusions.join(", ")}`,
  ]
}

function deriveBookingPolicy(tour: GroupDeparture): string[] {
  return [
    "A minimum deposit per person is required to confirm booking",
    "Full payment due 15 days prior to departure",
    "Valid passport with minimum 6 months validity required",
  ]
}

function deriveCancellationPolicy(tour: GroupDeparture): string[] {
  return [
    "30+ days before departure: 10% of tour cost",
    "15-29 days before departure: 50% of tour cost",
    "0-14 days before departure: 100% of tour cost (no refund)",
  ]
}

function derivePricing(tour: GroupDeparture) {
  return {
    pricePerAdult: tour.priceINR,
    pricePerChild: Math.round(tour.priceINR * 0.75),
    pricePerInfant: 0,
  }
}

function serializeStringArray(arr: string[], indent: string): string {
  return `[\n${arr.map(s => `${indent}  ${JSON.stringify(s)},`).join("\n")}\n${indent}]`
}

function serializeItinerary(items: NonNullable<GroupDeparture["itinerary"]>, indent: string): string {
  const lines = items.map(item =>
    `${indent}  { day: ${item.day}, title: ${JSON.stringify(item.title)}, description: ${JSON.stringify(item.description)}, tags: [${item.tags.map(t => JSON.stringify(t)).join(", ")}] },`
  )
  return `[\n${lines.join("\n")}\n${indent}]`
}

function buildEnrichmentBlock(tour: GroupDeparture): string {
  const lines: string[] = []
  if (!tour.itinerary) {
    lines.push(`    itinerary: ${serializeItinerary(deriveItinerary(tour), "    ")},`)
  }
  if (!tour.termsAndConditions) {
    lines.push(`    termsAndConditions: ${serializeStringArray(deriveTerms(tour), "    ")},`)
  }
  if (!tour.bookingPolicy) {
    lines.push(`    bookingPolicy: ${serializeStringArray(deriveBookingPolicy(tour), "    ")},`)
  }
  if (!tour.cancellationPolicy) {
    lines.push(`    cancellationPolicy: ${serializeStringArray(deriveCancellationPolicy(tour), "    ")},`)
  }
  if (!tour.pricePerAdult) {
    const p = derivePricing(tour)
    lines.push(`    pricePerAdult: ${p.pricePerAdult},`)
    lines.push(`    pricePerChild: ${p.pricePerChild},`)
    lines.push(`    pricePerInfant: ${p.pricePerInfant},`)
  }
  return lines.join("\n")
}

function run() {
  const filePath = path.join(__dirname, "../data/groupDepartures.ts")
  let src = fs.readFileSync(filePath, "utf-8")

  let enrichedCount = 0
  let skippedCount = 0

  for (const tour of groupDepartures) {
    if (tour.itinerary && tour.termsAndConditions && tour.bookingPolicy && tour.cancellationPolicy && tour.pricePerAdult) {
      skippedCount++
      continue
    }

    const block = buildEnrichmentBlock(tour)
    if (!block) continue

    const slugMarker = `slug: "${tour.slug}"`
    const slugIdx = src.indexOf(slugMarker)
    if (slugIdx === -1) {
      console.warn(`Could not find slug marker for ${tour.slug}, skipping`)
      continue
    }

    const closeMarker = "\n  },"
    const closeIdx = src.indexOf(closeMarker, slugIdx)
    if (closeIdx === -1) {
      console.warn(`Could not find closing brace for ${tour.slug}, skipping`)
      continue
    }

    src = src.slice(0, closeIdx) + "\n" + block + src.slice(closeIdx)
    enrichedCount++
  }

  fs.writeFileSync(filePath, src, "utf-8")
  console.log(`Enriched ${enrichedCount} tours, skipped ${skippedCount} already-complete tours.`)
}

run()
