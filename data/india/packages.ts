// Incredible India hub: tour packages (single editable data source).
// TODO_OWNER: every title, duration (days/nights = 0) and price (0) below is a placeholder.
// Replace with real packages, then add rating/reviewCount ONLY from real visible reviews,
// badges only if true, and an original photo in `image`.
import type { Package, PackageCategory } from "./types"

function p(
  title: string,
  destination: string,
  citySlug: string,
  category: PackageCategory,
): Package {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
  return {
    title,
    image: { src: `/images/india/packages/${slug}.jpg`, alt: `${title}, India`, width: 800, height: 600 },
    destination,
    days: 0, // TODO_OWNER
    nights: 0, // TODO_OWNER
    price: 0, // TODO_OWNER (INR)
    badges: [],
    link: `/India/${citySlug}`, // TODO_OWNER: replace with the real package page
    category,
  }
}

export const packages: Package[] = [
  // Culture and history
  p("India's Golden Triangle Discovery", "Delhi, Agra and Jaipur", "delhi", "culture"),
  p("Taj Mahal Sunrise Experience", "Agra", "agra", "culture"),
  p("Discover Old Delhi on Foot", "Delhi", "delhi", "culture"),
  p("Rajasthan's Royal Heritage Trail", "Rajasthan", "jaipur", "culture"),
  p("Varanasi Spiritual & Ganga Aarti Tour", "Varanasi", "varanasi", "culture"),
  p("Explore Amritsar & Golden Temple", "Amritsar", "amritsar", "culture"),
  p("Ancient Wonders of Ajanta & Ellora", "Ajanta and Ellora", "ajanta-ellora", "culture"),
  p("Discover the Ancient Ruins of Hampi", "Hampi", "hampi", "culture"),
  p("Khajuraho's Magnificent Temple Trail", "Khajuraho", "khajuraho", "culture"),

  // Adventure
  p("Kerala Backwater Houseboat Escape", "Kerala", "kerala", "adventure"),
  p("Into the Wild: Ranthambore Safari", "Ranthambore", "ranthambore", "adventure"),
  p("White Water Rafting in Rishikesh", "Rishikesh", "rishikesh", "adventure"),
  p("Magical Nights in the Thar Desert", "Jaisalmer", "jaisalmer", "adventure"),
  p("Discover Darjeeling's Tea Gardens", "Darjeeling", "darjeeling", "adventure"),
  p("Goa Beach & Coastal Escape", "Goa", "goa", "adventure"),
  p("Explore the Scenic Hills of Munnar", "Kerala", "kerala", "adventure"),
  p("Himalayan Trails & Mountain Adventures", "Dharamshala and McLeod Ganj", "dharamshala", "adventure"),
]
