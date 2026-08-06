import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Get Trip Go — Our Story, Expertise & Team",
  description: "Get Trip Go is an India-based travel booking platform founded in 2016, helping travellers book flights, hotels, holidays and visas across 150+ countries.",
};

const milestones = [
  { year: "2016", label: "Founded in New Delhi" },
  { year: "150+", label: "Countries Covered" },
  { year: "50M+", label: "Travellers Served" },
  { year: "24/7", label: "Support Available" },
];

const values = [
  { icon: "1", title: "Traveller-first pricing", desc: "We compare fares across hundreds of airlines and hotels so you never overpay." },
  { icon: "2", title: "Real human support", desc: "Every query is handled by a real travel expert, not a chatbot script." },
  { icon: "3", title: "Transparent bookings", desc: "No hidden charges - what you see at checkout is what you pay." },
  { icon: "4", title: "Deep destination knowledge", desc: "Our itineraries are built by people who have studied these places closely, not templated packages." },
];

const expertise = [
  { title: "Itinerary planning", desc: "Every group departure and custom itinerary is checked for realistic pacing, sensible transfer times, and genuinely worthwhile stops - not just a list of famous landmarks." },
  { title: "Visa and documentation", desc: "Our visa team tracks requirement changes across 150+ countries and gives destination-specific checklists rather than generic advice." },
  { title: "Airline and hotel partnerships", desc: "We work directly with airlines and hotel chains for real-time pricing, so you are comparing live fares, not stale cached rates." },
  { title: "On-ground local knowledge", desc: "Destination content is written using verified local sources - opening hours, seasonal weather patterns, and transport options that hold up in practice." },
];

const promises = [
  { title: "Price transparency", desc: "The price you see at checkout includes all mandatory taxes and fees - no surprise add-ons at the end." },
  { title: "Data security", desc: "Every transaction is encrypted and processed through PCI-DSS compliant payment gateways." },
  { title: "Fair cancellation policy", desc: "Cancellation and refund terms are shown before you pay, not buried after booking." },
  { title: "Accountable support", desc: "Every booking has a reference number and a real support contact - not just an automated ticket queue." },
];

const faqs = [
  { q: "Is Get Trip Go a registered travel agency?", a: "Yes, Get Trip Go operates as a registered travel booking platform based in New Delhi, India, working with licensed airline and hotel partners." },
  { q: "How does Get Trip Go choose its holiday packages?", a: "Our travel team researches each destination directly - checking hotel quality, realistic itinerary pacing, and genuine traveller feedback - before a package goes live on the site." },
  { q: "What happens if I have a problem during my trip?", a: "Our support team is available 24/7 via call, WhatsApp, and email to help resolve issues with bookings, flights, hotels, or visas while you are travelling." },
  { q: "Does Get Trip Go only serve Indian travellers?", a: "Our platform is built primarily for Indian travellers - INR pricing, Indian payment methods, and destinations popular with Indian tourists - though our services cover international travel to 150+ countries." },
];

const WHATSAPP_NUMBER = "919667892504";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Get Trip Go",
          url: "https://gettripgo.com/about",
          mainEntity: {
            "@type": "TravelAgency",
            name: "Get Trip Go",
            foundingDate: "2016",
            url: "https://gettripgo.com",
          },
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

      <section className="bg-[#F8F9FF] px-6 py-24 text-center">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-5">About Us</p>
        <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] mb-5 tracking-tight text-gray-900">
          Travel, built around<br />the traveller.
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
          Get Trip Go started in New Delhi in 2016 with one goal - make booking flights, hotels and holidays simpler and more transparent for Indian travellers.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {milestones.map((m) => (
            <div key={m.label} className="bg-white border border-gray-100 rounded-2xl p-6 text-center">
              <p className="text-3xl font-semibold text-[#2B3FDE] mb-1">{m.year}</p>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-3">Our story</p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">Why we exist</h2>
        <div className="bg-white border border-gray-100 rounded-2xl p-8 space-y-4">
          <p className="text-sm text-gray-500 leading-relaxed">
            Get Trip Go was founded in New Delhi in 2016 by a small team of travellers frustrated with comparing fares across a dozen tabs and dealing with confusing visa paperwork on their own. What started as a flight and hotel comparison tool has grown into a full travel platform - covering flights, hotels, curated holiday packages, group departures, visa assistance, travel insurance, and forex.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Headquartered in Laxmi Nagar, New Delhi, our team works directly with airlines, hotels, and destination experts to build itineraries that are actually worth booking - not generic templates. Every group departure and custom itinerary on our site is planned by someone who has studied that destination closely.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-3">What we know</p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-10">How we build every trip</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {expertise.map((e) => (
            <div key={e.title} className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{e.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-3">Our commitment</p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-10">What you can expect from us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {promises.map((p) => (
            <div key={p.title} className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-3">What sets us apart</p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-10">Our values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map((v) => (
            <div key={v.title} className="bg-white border border-gray-100 rounded-2xl p-6 flex gap-5">
              <div className="w-9 h-9 rounded-xl bg-[#F0F3FF] flex items-center justify-center text-sm font-bold text-[#2B3FDE] shrink-0">{v.icon}</div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-3">FAQs</p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-10">Common questions about us</h2>
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Have a question we did not cover?</h2>
          <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto">
            Our team is available 24/7 to help with bookings, itineraries, or anything else about how we work.
          </p>
          
            <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#2B3FDE] hover:bg-[#2233c0] text-white font-semibold text-sm px-7 py-3.5 rounded-full transition-colors shadow-md shadow-blue-500/20"
          >
            Chat with us on WhatsApp
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link href="/why-us" className="text-[#2B3FDE] text-sm font-semibold hover:underline">See why travellers trust us -&gt;</Link>
          <Link href="/contact" className="text-[#2B3FDE] text-sm font-semibold hover:underline">Get in touch -&gt;</Link>
        </div>
      </div>
    </main>
  );
}
