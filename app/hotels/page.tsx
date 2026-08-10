import type { Metadata } from "next";
import Link from "next/link";
import SearchBox from "@/components/search/SearchBox";

export const metadata: Metadata = {
  title: "Hotel Booking — Best Rates Worldwide",
  description:
    "Book hotels across India and worldwide with Get Trip Go. Compare rates, real guest reviews, and flexible cancellation on thousands of properties.",
};

const popularCities = ["Goa", "Dubai", "Bali", "Bangkok", "Singapore", "Kerala", "Maldives", "Manali"];

const faqs = [
  { q: "Can I cancel my hotel booking for free?", a: "Many properties on Get Trip Go offer free cancellation up to a set number of days before check-in — the exact policy is shown on each hotel's booking page before you confirm." },
  { q: "Do you offer hotel + flight combo deals?", a: "Yes — check our Holiday Packages and Customized Itineraries for bundled flight and hotel pricing, which is often cheaper than booking each separately." },
  { q: "How do I know the hotel reviews are genuine?", a: "We display verified guest reviews collected from actual bookings, not paid or incentivized reviews." },
  { q: "What if I have an issue during my stay?", a: "Our 24/7 support team is available via call, WhatsApp or email to help resolve any issues with your booking or stay directly with the property." },
];

export default function HotelsPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      <section className="bg-[#F8F9FF] px-6 pt-24 pb-10 text-center">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-5">
          Hotels
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] mb-5 tracking-tight text-gray-900">
          Stays you'll<br />actually enjoy.
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
          From budget stays to luxury resorts — compare and book hotels across India and worldwide.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6">
          <SearchBox activeTab="Hotels" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-3">
          Trending
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-10">
          Popular hotel destinations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popularCities.map((c) => (
            <div key={c} className="bg-white border border-gray-100 rounded-2xl p-5 text-center hover:border-[#2B3FDE]/30 hover:shadow-sm transition-all">
              <span className="text-sm font-semibold text-gray-900">{c}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-3">
          FAQs
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-10">
          Hotel booking questions
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {faqs.map((f) => (
            <div key={f.q} className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{f.q}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24 text-center">
        <p className="text-sm text-gray-400 mb-4">Planning a full trip, not just a stay?</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/popular-destinations" className="text-[#2B3FDE] text-sm font-semibold hover:underline">Browse holiday packages →</Link>
          <Link href="/flights" className="text-[#2B3FDE] text-sm font-semibold hover:underline">Search flights →</Link>
        </div>
      </div>
    </main>
  );
}
