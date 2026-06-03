"use client";

import { useState } from "react";

const roles = [
  {
    id: 1,
    title: "Holiday Package Consultant",
    dept: "Holidays",
    type: "Full-time",
    location: "Delhi / Hybrid",
    tag: "Holidays",
    desc: "Curate and sell bespoke holiday packages for leisure and family travellers across domestic and international destinations.",
  },
  {
    id: 2,
    title: "International Travel Specialist",
    dept: "International",
    type: "Full-time",
    location: "Mumbai / Remote",
    tag: "International",
    desc: "Handle end-to-end international bookings — flights, hotels, visas — ensuring seamless travel experiences for our global customers.",
  },
  {
    id: 3,
    title: "Air Ticketing Executive",
    dept: "Ticketing",
    type: "Full-time",
    location: "Bangalore",
    tag: "Ticketing",
    desc: "Process domestic and international flight bookings using GDS platforms (Amadeus / Galileo), manage fare rules and reissuances.",
  },
  {
    id: 4,
    title: "Operations Manager — Travel",
    dept: "Operations",
    type: "Full-time",
    location: "Delhi",
    tag: "Operations",
    desc: "Lead day-to-day travel operations, vendor coordination, and quality control across holiday and ticketing verticals.",
  },
  {
    id: 5,
    title: "Destination Expert — Europe & UK",
    dept: "International",
    type: "Full-time",
    location: "Remote",
    tag: "International",
    desc: "Deep destination knowledge for Europe & UK itineraries. Work with customers to design, price, and execute their dream trips.",
  },
  {
    id: 6,
    title: "Group Tours Coordinator",
    dept: "Holidays",
    type: "Full-time",
    location: "Delhi / Hybrid",
    tag: "Holidays",
    desc: "Manage group departure packages — logistics, guides, coaches, hotels — for 15 to 200+ pax departures across popular circuits.",
  },
  {
    id: 7,
    title: "Visa & Documentation Specialist",
    dept: "Operations",
    type: "Full-time",
    location: "Delhi",
    tag: "Operations",
    desc: "Handle visa applications, documentation, and embassy submissions for international travellers across Schengen, UK, USA, and Southeast Asia.",
  },
  {
    id: 8,
    title: "Travel Sales Executive",
    dept: "Sales",
    type: "Full-time",
    location: "Pan India / Remote",
    tag: "Sales",
    desc: "Convert inbound leads across holidays, flights, and hotel products. Own your pipeline and hit monthly revenue targets.",
  },
  {
    id: 9,
    title: "Customer Experience Associate",
    dept: "Operations",
    type: "Full-time",
    location: "Gurgaon / Remote",
    tag: "Operations",
    desc: "Be the first point of contact for travellers — resolving queries, handling changes, cancellations, and emergencies with speed and empathy.",
  },
  {
    id: 10,
    title: "Hotel Contracting Executive",
    dept: "Holidays",
    type: "Full-time",
    location: "Mumbai",
    tag: "Holidays",
    desc: "Build and manage hotel and resort contracts across leisure destinations. Negotiate rates, allotments, and special deals.",
  },
];

const tagColors: Record<string, string> = {
  Holidays:      "bg-amber-50 text-amber-700 border-amber-200",
  International: "bg-blue-50 text-blue-700 border-blue-200",
  Ticketing:     "bg-purple-50 text-purple-700 border-purple-200",
  Operations:    "bg-emerald-50 text-emerald-700 border-emerald-200",
  Sales:         "bg-rose-50 text-rose-700 border-rose-200",
};

const values = [
  { icon: "✈️", title: "Travel-obsessed team", desc: "We live and breathe travel. Everyone on the team has a story — and helps write yours." },
  { icon: "🌍", title: "Global exposure", desc: "Work on international products reaching travellers across 50+ countries." },
  { icon: "📈", title: "Real ownership", desc: "Flat structure. Your decisions move fast and your impact shows up immediately." },
  { icon: "💡", title: "Learn every day", desc: "Destination trainings, GDS certifications, and a dedicated learning budget for every employee." },
];

export default function CareersPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) { setError(true); return; }
    setError(false);
    setSubmitted(true);
    // TODO: POST email to your backend / CRM
    console.log("Career interest email:", email);
  };

  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="bg-white px-6 py-24 text-center border-b border-gray-100">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-5">
          Careers at Get Trip Go
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] mb-5 tracking-tight text-gray-900">
          We're building the team<br />that moves the world
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed mb-8">
          Great travel starts with great people. We're not actively hiring right now,
          but that's about to change.
        </p>
        <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-5 py-2.5 text-sm text-gray-500">
          <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
          Hiring currently closed — openings coming soon
        </div>
      </section>

      {/* ── Why Join ── */}
      <section className="px-6 md:px-16 py-20 max-w-6xl mx-auto">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-3">
          Why Get Trip Go
        </p>
        <h2 className="text-3xl font-semibold mb-3 tracking-tight">
          A travel company, run by travellers
        </h2>
        <p className="text-gray-500 text-base leading-relaxed max-w-2xl mb-14">
          We help millions of people compare, book, and experience the world — flights, hotels,
          holidays, transfers, and beyond. We're a fast-moving team with a clear mission,
          and every person here plays a real part in it.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="border border-gray-100 rounded-2xl p-6 hover:border-[#2B3FDE]/30 transition-colors">
              <div className="text-2xl mb-4">{v.icon}</div>
              <h3 className="text-sm font-semibold mb-1.5 text-gray-900">{v.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Roles ── */}
      <section className="bg-[#F8F9FF] px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-3">
            Open positions
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight mb-2">
                Roles we'll be hiring for
              </h2>
              <p className="text-gray-500 text-sm max-w-xl">
                These are the 10 positions we're planning to open. Leave your email below
                and we'll reach out the moment applications go live.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-2 h-2 rounded-full bg-gray-300" />
              <span className="text-xs text-gray-400 font-medium">All positions currently closed</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {roles.map((r) => (
              <div
                key={r.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#2B3FDE]/40 hover:shadow-sm transition-all group"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#2B3FDE] transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">{r.location} · {r.type}</p>
                  </div>
                  <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full border shrink-0 ${tagColors[r.tag]}`}>
                    {r.tag}
                  </span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                  Closed for now — notify me when open
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Email CTA ── */}
      <section className="px-6 md:px-16 py-24">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-4">
            Stay in the loop
          </p>
          <h2 className="text-3xl font-semibold tracking-tight mb-3">
            Be the first to know
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            We open roles regularly across holidays, ticketing, international, and operations.
            Leave your email and we'll reach out when something fits — no spam, ever.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2.5 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-xl px-5 py-4 border border-emerald-100">
              <span>✅</span> You're on the list. We'll be in touch when we start hiring.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(false); }}
                  placeholder="your@email.com"
                  className={`flex-1 px-4 py-3 text-sm border rounded-xl outline-none focus:border-[#2B3FDE] focus:ring-2 focus:ring-[#2B3FDE]/10 transition-all bg-gray-50 ${
                    error ? "border-red-400 bg-red-50" : "border-gray-200"
                  }`}
                />
                <button
                  type="submit"
                  className="bg-[#2B3FDE] text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-[#2236C5] transition-colors whitespace-nowrap"
                >
                  Notify me
                </button>
              </div>
              {error && (
                <p className="text-xs text-red-500 mt-2">Please enter a valid email address.</p>
              )}
            </form>
          )}
        </div>
      </section>

    </main>
  );
}