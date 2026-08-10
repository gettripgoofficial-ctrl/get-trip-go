import type { Metadata } from "next";
import Link from "next/link";
import VisaCountryExplorer from "@/components/visa/VisaCountryExplorer";

export const metadata: Metadata = {
  title: "Visa Assistance — Tourist, Business & Transit Visas",
  description: "Apply for tourist, business, and transit visas to 150+ countries with Get Trip Go. Fast processing, document checklists, and expert guidance every step of the way.",
};

const visaTypes = [
  { icon: "🧳", title: "Tourist Visa", desc: "For leisure travel, sightseeing, and visiting family or friends abroad.", processing: "3-10 business days" },
  { icon: "💼", title: "Business Visa", desc: "For conferences, meetings, trade fairs, and corporate travel.", processing: "3-7 business days" },
  { icon: "🔄", title: "Transit Visa", desc: "For layovers and connecting flights through countries that require one.", processing: "2-5 business days" },
  { icon: "🎓", title: "Student Visa", desc: "For studying abroad, including document guidance for admissions.", processing: "10-25 business days" },
  { icon: "🏥", title: "Medical Visa", desc: "For travellers seeking medical treatment overseas.", processing: "3-7 business days" },
];

const popularCountries = [
  { flag: "🇦🇪", name: "UAE / Dubai", type: "e-Visa", time: "3-4 days" },
  { flag: "🇹🇭", name: "Thailand", type: "Visa on Arrival / e-Visa", time: "Same day - 3 days" },
  { flag: "🇻🇳", name: "Vietnam", type: "e-Visa", time: "3-5 days" },
  { flag: "🇸🇬", name: "Singapore", type: "e-Visa", time: "3-5 days" },
  { flag: "🇪🇺", name: "Schengen (Europe)", type: "Sticker Visa", time: "10-15 days" },
  { flag: "🇬🇧", name: "United Kingdom", type: "Sticker Visa", time: "15-20 days" },
  { flag: "🇺🇸", name: "United States", type: "Interview-based", time: "Varies by embassy slot" },
  { flag: "🇮🇩", name: "Indonesia (Bali)", type: "Visa on Arrival / e-Visa", time: "Same day - 2 days" },
];

const documents = [
  "Valid passport (6+ months validity, 2 blank pages)",
  "Recent passport-size photographs (as per destination spec)",
  "Confirmed return flight itinerary",
  "Proof of accommodation (hotel booking or invitation letter)",
  "Bank statements - last 3-6 months",
  "Employment letter or business proof (for business visas)",
  "Travel insurance (required for Schengen and other countries)",
  "Visa application form, filled and signed",
];

const steps = [
  { step: "1", title: "Tell us where you're headed", desc: "Share your destination, travel dates, and visa type via WhatsApp or a quick form." },
  { step: "2", title: "Get your document checklist", desc: "Our visa experts send a personalised checklist based on your nationality and destination." },
  { step: "3", title: "We handle the paperwork", desc: "Submit your documents to us - we manage the application and embassy coordination." },
  { step: "4", title: "Track your visa status", desc: "Get real-time updates via WhatsApp until your visa is approved and ready." },
];

const faqs = [
  { q: "How long does visa processing take?", a: "Processing times vary by country and visa type, typically ranging from same-day e-Visas to 3-4 weeks for sticker visas like Schengen or the UK. See the country table above for estimates." },
  { q: "Which countries do you provide visa assistance for?", a: "We assist with visa applications for 150+ countries including the UAE, Schengen countries, USA, UK, Thailand, Vietnam, and Singapore." },
  { q: "What documents do I need for a tourist visa?", a: "Requirements vary by destination, but typically include a valid passport, passport-size photos, proof of accommodation, travel itinerary, and financial statements." },
  { q: "Can I apply for a visa if I'm travelling in a group?", a: "Yes, we handle both individual and group visa applications, including corporate and family group bookings." },
  { q: "What happens if my visa application is rejected?", a: "Rejection reasons and reapplication rules vary by country. Our team reviews your documents in advance to minimise this risk." },
];

const WHATSAPP_NUMBER = "919667892504";
const whatsappMessage = encodeURIComponent("Hi, I'd like help applying for a visa. Can you share the requirements?");

export default function VisaPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Visa Assistance",
          provider: { "@type": "TravelAgency", name: "Get Trip Go", url: "https://gettripgo.com" },
          areaServed: "IN",
          description: "Tourist, business, transit, student and medical visa assistance for 150+ countries.",
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }) }}
      />

      <section className="bg-[#F8F9FF] px-6 pt-24 pb-10 text-center">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-5">Visa Assistance</p>
        <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] mb-5 tracking-tight text-gray-900">
          Visas made simple.<br />For 150+ countries.
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed mb-8">
          Tourist, business, transit, student and medical visas - with document checklists and expert guidance, start to finish.
        </p>
        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#2B3FDE] hover:bg-[#2233c0] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors shadow-md shadow-blue-500/20">
          Apply for Visa on WhatsApp
        </a>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-16 pt-10">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-3">Visa types we support</p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-10">Whatever the purpose of your trip</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visaTypes.map((v) => (
            <div key={v.title} className="bg-white border border-gray-100 rounded-2xl p-6 flex gap-5 hover:border-[#2B3FDE]/30 hover:shadow-sm transition-all">
              <div className="w-11 h-11 rounded-xl bg-[#F0F3FF] flex items-center justify-center text-xl shrink-0">{v.icon}</div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-2">{v.desc}</p>
                <p className="text-xs font-semibold text-[#2B3FDE]">Processing: {v.processing}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-3">All destinations</p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-10">Visa requirements by country</h2>
        <VisaCountryExplorer />
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-3">Be prepared</p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-10">Documents you will typically need</h2>
        <div className="bg-white border border-gray-100 rounded-2xl p-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {documents.map((d) => (
              <li key={d} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#F0F3FF] text-[#2B3FDE] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">OK</span>
                <span className="text-sm text-gray-500 leading-relaxed">{d}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-400 mt-6 pt-6 border-t border-gray-100">
            Exact requirements depend on your nationality and destination.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-3">How it works</p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-10">From application to approval</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div key={s.step} className="bg-white border border-gray-100 rounded-2xl p-6">
              <p className="text-2xl font-semibold text-[#2B3FDE] mb-3">{s.step}</p>
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{s.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-3">FAQs</p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-10">Common visa questions</h2>
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
        <div className="bg-white border border-gray-100 rounded-2xl p-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Ready to apply?</h2>
          <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto">
            Message us your destination and travel dates and we will send your personalised document checklist within minutes.
          </p>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2B3FDE] hover:bg-[#2233c0] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors shadow-md shadow-blue-500/20">
            Apply for Visa on WhatsApp
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link href="/popular-destinations" className="text-[#2B3FDE] text-sm font-semibold hover:underline">Browse holiday packages -&gt;</Link>
          <Link href="/contact" className="text-[#2B3FDE] text-sm font-semibold hover:underline">Contact us -&gt;</Link>
        </div>
      </div>
    </main>
  );
}
