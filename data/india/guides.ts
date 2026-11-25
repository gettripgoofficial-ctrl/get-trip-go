// Incredible India hub: guide pages (single editable data source).
// Pages live at /India/guides/<slug>. TODO_OWNER: real, verified content for each guide.
// lastUpdated is the day the placeholder was created; do not display it until content is real.
import type { Guide } from "./types"

export type GuideItem = Guide & { badge: string }

export const guides: GuideItem[] = [
  {
    slug: "best-time-to-visit",
    title: "When Is the Best Time to Explore India?",
    description: "Compare India's seasons and regional climates as you choose the timing for your trip.",
    badge: "ESSENTIAL TRAVEL TIPS",
    lastUpdated: "2026-11-21",
  },
  {
    slug: "festivals-and-events",
    title: "India's Festivals: A Guide to Celebrations & Events",
    description: "Explore India's cultural calendar and plan around celebrations and events.",
    badge: "CULTURE & FESTIVALS",
    lastUpdated: "2026-11-21",
  },
  {
    slug: "getting-around",
    title: "Your Guide to Travel Across India",
    description: "Compare ways to travel between destinations, from domestic flights and trains to private transfers.",
    badge: "GETTING AROUND",
    lastUpdated: "2026-11-21",
  },
  {
    slug: "safety-and-health",
    title: "Essential Health & Safety Tips for India",
    description: "Prepare for your trip with practical health and safety guidance for India.",
    badge: "TRAVEL SMART & STAY SAFE",
    lastUpdated: "2026-11-21",
  },
]
