import KenyaMobileHeader from "@/components/KenyaMobileHeader"
import KenyaHero from "@/components/KenyaHero"
import KenyaSectionNav from "@/components/KenyaSectionNav"
import KenyaTipsAndRoutes from "@/components/KenyaTipsAndRoutes"
import KenyaTravelTipsWildlife from "@/components/KenyaTravelTipsWildlife"
import KenyaExploreSection from "@/components/KenyaExploreSection"
import KenyaWhoShouldGoTrending from "@/components/KenyaWhoShouldGoTrending"
import KenyaConservationCultureSection from "@/components/KenyaConservationCultureSection"
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
