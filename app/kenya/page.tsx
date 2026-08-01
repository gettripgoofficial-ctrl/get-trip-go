import KenyaHero from "@/components/KenyaHero"
import KenyaDestinations from "@/components/KenyaDestinations"
import KenyaJourneys from "@/components/KenyaJourneys"
import KenyaStays from "@/components/KenyaStays"
import KenyaWildlife from "@/components/KenyaWildlife"
import KenyaQuickFacts from "@/components/KenyaQuickFacts"

export default function KenyaPage() {
  return (
    <main className="min-h-screen bg-white">
      <KenyaHero />
      <KenyaDestinations />
      <KenyaJourneys />
      <KenyaStays />
      <KenyaWildlife />
      <KenyaQuickFacts />
    </main>
  )
}
