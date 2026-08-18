import { MetadataRoute } from "next";
import { groupDepartures } from "@/data/groupDepartures";
import { packages } from "@/data/packages";
import { themePackages } from "@/data/themePackages";
import { customPackages } from "@/data/customPackages";
import { offers } from "@/data/offers";
import { supabaseAdmin } from "@/lib/supabase";

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
  { url: `${BASE_URL}/kenya`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
];

// Kenya articles are static per-folder pages, not driven by a data file — keep hardcoded.
const kenyaArticleSlugs = [
  "best-time-to-visit-kenya", "the-great-migration-explained", "big-five-how-to-spot",
  "is-kenya-safe-for-tourists", "what-to-pack-for-a-kenya-safari",
  "getting-around-light-aircraft-vs-road-safaris", "how-many-days-do-you-need-for-a-kenya-safari",
  "safari-budget-guide-luxury-vs-mid-range-vs-budget", "first-time-safari-checklist",
  "safari-photography-camera-gear-and-settings", "kenya-eta-guide-how-to-apply-cost-and-processing",
  "safari-footwear-what-actually-works", "vaccinations-for-kenya-yellow-fever-and-more",
  "malaria-prevention-tablets-repellents", "travel-insurance-for-safari-what-it-should-cover",
  "altitude-sickness-in-the-kenyan-highlands", "drinking-water-and-food-safety-on-safari",
  "safari-first-aid-what-to-pack", "is-a-kenya-safari-safe-during-pregnancy",
  "safari-with-young-children-age-limits", "safari-for-travelers-with-mobility-issues",
  "is-kenya-suitable-for-solo-female-travelers", "safari-for-people-with-heart-conditions",
  "elderly-travelers-what-to-know",
];

const kenyaDynamicSlugArticles = [
  "cheetahs-of-the-mara", "amboselis-last-super-tuskers", "lake-nakurus-flamingo-spectacle",
];

const themeSlugToUrl = (theme: string) =>
  theme.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const { data: blogPosts } = await supabaseAdmin
      .from("blog_posts")
      .select("slug, created_at");
    blogRoutes = (blogPosts || []).map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.created_at ? new Date(post.created_at) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    // If Supabase fetch fails at build time, skip blog routes rather than failing the whole sitemap.
  }

  return [
    ...staticRoutes,
    ...kenyaArticleSlugs.map((slug) => ({
      url: `${BASE_URL}/kenya/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...kenyaDynamicSlugArticles.map((slug) => ({
      url: `${BASE_URL}/kenya/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...packages.map((pkg) => ({
      url: `${BASE_URL}/popular-destinations/${pkg.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...groupDepartures.map((tour) => ({
      url: `${BASE_URL}/group-departures/${tour.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...customPackages.map((pkg) => ({
      url: `${BASE_URL}/customized-itineraries/${pkg.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...offers.map((offer) => ({
      url: `${BASE_URL}/offers/${offer.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...themePackages.map((pkg) => ({
      url: `${BASE_URL}/theme-holidays/${themeSlugToUrl(pkg.theme)}/${pkg.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...blogRoutes,
  ];
}
