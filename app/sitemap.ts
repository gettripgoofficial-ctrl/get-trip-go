import { MetadataRoute } from "next";

const BASE_URL = "https://gettripgo.com";

const staticRoutes: MetadataRoute.Sitemap = [
  { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
  { url: `${BASE_URL}/group-departures`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  { url: `${BASE_URL}/customized-itineraries`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  { url: `${BASE_URL}/popular-destinations`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  { url: `${BASE_URL}/theme-holidays`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  { url: `${BASE_URL}/offers`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
  { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
  { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/why-us`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/careers`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE_URL}/help`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  { url: `${BASE_URL}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  { url: `${BASE_URL}/cookies`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
];

const popularDestinationSlugs = [
  "bali-honeymoon-delight","bali-adventure-explorer","bali-family-fun",
  "thailand-bangkok-pattaya","thailand-phuket-krabi","kerala-backwaters-honeymoon",
  "kerala-family-adventure","singapore-family-explorer","kashmir-paradise-honeymoon",
  "kashmir-winter-wonderland","maldives-luxury-overwater","maldives-budget-beach",
  "rajasthan-royal-heritage","dubai-luxury-experience","georgia-caucasus-explorer",
  "bhutan-kingdom-discovery","vietnam-north-south-tour","northeast-india-explorer",
];

const groupDepartureSlugs = [
  "heart-of-europe","alpine-wonders","grand-european-adventure","europe-complete-circle",
  "continental-explorer","european-capitals-express","paris-and-capitals","romance-of-europe",
  "swiss-french-escape","european-memories","jewels-of-europe","european-ring",
  "european-bliss","european-dance","european-delight","european-triangle-go",
  "european-journey-go","beloved-europe","india-heart-of-europe","india-european-charm",
  "india-swiss-french-delight","india-europe-complete-circle","india-romance-europe",
  "eastern-gems","central-european-discovery","beautiful-europe-journey","central-ring-explorer",
  "majestic-central-europe","east-of-europe-balkans","germany-eastern-europe",
  "majestic-europe-spain","east-europe-venice","london-paris-amsterdam",
  "western-europe-highlights","paris-london-triangle","great-european-cities-tour",
  "spain-france-england","unforgettable-europe","modern-europe-berlin","genuine-europe",
  "european-grandeur","nordic-explorer","pearls-of-norway-sweden","scandinavia-eastern-europe",
  "germany-northern-europe","poland-scandinavia-east","scandinavia-budapest",
  "pearls-nordic-copenhagen","eastern-europe-poland-scandinavia",
];

const customizedItinerarySlugs = [
  "singapore-malaysia-discovery","italy-bella-vita","vietnam-hidden-trails",
  "georgia-unexplored","paris-swiss-romance","australia-dream-journey",
  "bali-soul-escape","eastern-europe-grand-tour","japan-sakura-serenity","andaman-island-bliss",
];

const offerSlugs = [
  "first-booking-5000","mumbai-dubai-12999","bangkok-8999",
  "cruise-25-off","europe-group-10000","thailand-4n-pattaya-free","bhutan-kids-free",
];

const themePackages: { theme: string; slug: string }[] = [
  { theme: "Honeymoon", slug: "maldives-overwater-honeymoon" },
  { theme: "Honeymoon", slug: "bali-honeymoon-romance" },
  { theme: "Honeymoon", slug: "paris-honeymoon" },
  { theme: "Honeymoon", slug: "kashmir-honeymoon" },
  { theme: "Honeymoon", slug: "santorini-honeymoon" },
  { theme: "Honeymoon", slug: "kerala-honeymoon" },
  { theme: "Honeymoon", slug: "dubai-honeymoon" },
  { theme: "Honeymoon", slug: "andaman-honeymoon" },
  { theme: "Family", slug: "singapore-family" },
  { theme: "Family", slug: "thailand-family" },
  { theme: "Family", slug: "kerala-family" },
  { theme: "Family", slug: "australia-family" },
  { theme: "Family", slug: "rajasthan-family" },
  { theme: "Family", slug: "japan-family" },
  { theme: "Family", slug: "dubai-family" },
  { theme: "Family", slug: "new-zealand-family" },
  { theme: "Adventure", slug: "nepal-adventure" },
  { theme: "Adventure", slug: "ladakh-adventure" },
  { theme: "Adventure", slug: "rishikesh-adventure" },
  { theme: "Adventure", slug: "iceland-adventure" },
  { theme: "Adventure", slug: "patagonia-adventure" },
  { theme: "Adventure", slug: "spiti-adventure" },
  { theme: "Adventure", slug: "new-zealand-adventure" },
  { theme: "Adventure", slug: "africa-adventure" },
  { theme: "Beach", slug: "phuket-beach" },
  { theme: "Beach", slug: "maldives-beach" },
  { theme: "Beach", slug: "goa-beach" },
  { theme: "Beach", slug: "bali-beach" },
  { theme: "Beach", slug: "mauritius-beach" },
  { theme: "Beach", slug: "sri-lanka-beach" },
  { theme: "Beach", slug: "zanzibar-beach" },
  { theme: "Beach", slug: "andaman-beach" },
  { theme: "Hill Stations", slug: "shimla-manali-hills" },
  { theme: "Hill Stations", slug: "darjeeling-sikkim-hills" },
  { theme: "Hill Stations", slug: "swiss-alps-hills" },
  { theme: "Hill Stations", slug: "ooty-kodaikanal-hills" },
  { theme: "Hill Stations", slug: "mussoorie-nainital-hills" },
  { theme: "Hill Stations", slug: "coorg-hills" },
  { theme: "Hill Stations", slug: "scotland-highlands" },
  { theme: "Wildlife & Safari", slug: "kenya-safari" },
  { theme: "Wildlife & Safari", slug: "jim-corbett-safari" },
  { theme: "Wildlife & Safari", slug: "south-africa-safari" },
  { theme: "Wildlife & Safari", slug: "ranthambore-safari" },
  { theme: "Wildlife & Safari", slug: "kaziranga-safari" },
  { theme: "Wildlife & Safari", slug: "serengeti-safari" },
  { theme: "Wildlife & Safari", slug: "borneo-wildlife" },
  { theme: "Spiritual", slug: "varanasi-spiritual" },
  { theme: "Spiritual", slug: "char-dham-spiritual" },
  { theme: "Spiritual", slug: "golden-temple-spiritual" },
  { theme: "Spiritual", slug: "bali-spiritual" },
  { theme: "Spiritual", slug: "jerusalem-spiritual" },
  { theme: "Spiritual", slug: "lhasa-spiritual" },
  { theme: "Spiritual", slug: "camino-spiritual" },
  { theme: "Luxury", slug: "maldives-luxury" },
  { theme: "Luxury", slug: "safari-luxury" },
  { theme: "Luxury", slug: "amalfi-luxury" },
  { theme: "Luxury", slug: "dubai-luxury" },
  { theme: "Luxury", slug: "swiss-luxury" },
  { theme: "Luxury", slug: "french-riviera-luxury" },
  { theme: "Luxury", slug: "rajasthan-luxury" },
  { theme: "Luxury", slug: "japan-luxury" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const themeSlugToUrl = (theme: string) =>
    theme.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");

  return [
    ...staticRoutes,
    ...popularDestinationSlugs.map((slug) => ({
      url: `${BASE_URL}/popular-destinations/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...groupDepartureSlugs.map((slug) => ({
      url: `${BASE_URL}/group-departures/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...customizedItinerarySlugs.map((slug) => ({
      url: `${BASE_URL}/customized-itineraries/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...offerSlugs.map((slug) => ({
      url: `${BASE_URL}/offers/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...themePackages.map(({ theme, slug }) => ({
      url: `${BASE_URL}/theme-holidays/${themeSlugToUrl(theme)}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
