import type { Metadata } from "next";
import Link from "next/link";
import SearchBox from "@/components/search/SearchBox";

export const metadata: Metadata = {
  title: "Cheap Flights — Domestic & International | Get Trip Go",
  description:
    "Book domestic and international flights at the best prices with Get Trip Go. Compare fares across airlines, flexible dates, and instant booking confirmation.",
};

const popularRoutes = [
  { from: "Delhi", to: "Dubai" },
  { from: "Mumbai", to: "Bangkok" },
  { from: "Delhi", to: "Singapore" },
  { from: "Bangalore", to: "Dubai" },
  { from: "Mumbai", to: "Male" },
  { from: "Delhi", to: "London" },
];

const faqs = [
  { q: "How do I get the cheapest flight fares?", a: "Book in advance where possible, stay flexible on travel dates, and compare fares across airlines — our search shows real-time pricing across multiple carriers so you don't have to check each airline separately." },
  { q: "Can I book international flights on Get Trip Go?", a: "Yes, we support both domestic flights within India and international flights to 150+ countries, including popular routes to the UAE, Southeast Asia, Europe and the US." },
  { q: "What if I need to cancel or reschedule my flight?", a: "Cancellation and rescheduling policies depend on the airline and fare type. Our support team is available 24/7 via call, WhatsApp or email to help with changes." },
  { q: "Do you offer flight + hotel packages?", a: "Yes — check our Holiday Packages and Customized Itineraries for bundled flight and hotel deals, often at a better combined price than booking separately." },
];

export default function FlightsPage() {
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
          Flights
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] mb-5 tracking-tight text-gray-900">
          Fly for less.<br />Anywhere you're going.
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
          Compare domestic and international flight fares across airlines and book in minutes.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6">
          <SearchBox activeTab="Flights" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-3">
          Trending
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-10">
          Popular flight routes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {popularRoutes.map((r) => (
            <div key={`${r.from}-${r.to}`} className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between hover:border-[#2B3FDE]/30 hover:shadow-sm transition-all">
              <span className="text-sm font-semibold text-gray-900">{r.from}</span>
              <span className="text-gray-300">→</span>
              <span className="text-sm font-semibold text-gray-900">{r.to}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-3">
          FAQs
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-10">
          Flight booking questions
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
        <p className="text-sm text-gray-400 mb-4">Looking for a full holiday, not just flights?</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/popular-destinations" className="text-[#2B3FDE] text-sm font-semibold hover:underline">Browse holiday packages →</Link>
          <Link href="/hotels" className="text-[#2B3FDE] text-sm font-semibold hover:underline">Search hotels →</Link>
        </div>
      </div>
    </main>
  );
}
