import KenyaMobileHeader from "@/components/KenyaMobileHeader"
import KenyaHero from "@/components/KenyaHero"
import KenyaSectionNav from "@/components/KenyaSectionNav"
import KenyaTipsAndRoutes from "@/components/KenyaTipsAndRoutes"
import KenyaTravelTipsWildlife from "@/components/KenyaTravelTipsWildlife"
import KenyaExploreSection from "@/components/KenyaExploreSection"
import KenyaWhoShouldGoTrending from "@/components/KenyaWhoShouldGoTrending"
import KenyaConservationCultureSection from "@/components/KenyaConservationCultureSection"

export const metadata = {
  title: "Kenya Safari Guide: Parks, Wildlife, Visas & Travel Tips | Get Trip Go",
  description: "Everything you need to plan a Kenya safari -- park guides, wildlife spotting, visa requirements, where to stay, and practical travel tips.",
  openGraph: {
    title: "Kenya Safari Guide: Parks, Wildlife, Visas & Travel Tips",
    description: "Everything you need to plan a Kenya safari -- park guides, wildlife spotting, visa requirements, where to stay, and practical travel tips.",
    url: "https://gettripgo.com/kenya",
    siteName: "Get Trip Go",
    images: [{ url: "https://images.unsplash.com/photo-1516934024742-b461fba47600?w=1200&q=80", width: 1200, height: 630, alt: "Kenya safari guide" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenya Safari Guide: Parks, Wildlife, Visas & Travel Tips",
    description: "Everything you need to plan a Kenya safari -- park guides, wildlife spotting, visa requirements, where to stay, and practical travel tips.",
  },
  alternates: {
    canonical: "https://gettripgo.com/kenya",
  },
}
export default function KenyaPage() {
  return (
    <main className="min-h-screen bg-white">
      <KenyaMobileHeader />
      <div className="md:hidden h-14" />
      <KenyaSectionNav />
      <KenyaHero />
      <div id="safari-routes">
        <KenyaTipsAndRoutes />
      </div>
      <div id="travel-wildlife">
        <KenyaTravelTipsWildlife />
      </div>
      <div id="explore">
        <KenyaExploreSection />
      </div>
      <div id="who-should-go-trending">
        <KenyaWhoShouldGoTrending />
      </div>
      <div id="conservation-culture">
        <KenyaConservationCultureSection />
      </div>
    </main>
  )
}
