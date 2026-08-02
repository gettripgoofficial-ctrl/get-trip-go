import KenyaHero from "@/components/KenyaHero"
import KenyaTipsAndRoutes from "@/components/KenyaTipsAndRoutes"
import KenyaSafariWildlifeSection from "@/components/KenyaSafariWildlifeSection"
import KenyaExploreSection from "@/components/KenyaExploreSection"
import KenyaWhoShouldGoTrending from "@/components/KenyaWhoShouldGoTrending"
import KenyaConservationCultureSection from "@/components/KenyaConservationCultureSection"

export default function KenyaPage() {
  return (
    <main className="min-h-screen bg-white">
      <KenyaHero />
      <KenyaTipsAndRoutes />
      <KenyaSafariWildlifeSection />
      <KenyaExploreSection />
      <KenyaWhoShouldGoTrending />
      <KenyaConservationCultureSection />
    </main>
  )
}
