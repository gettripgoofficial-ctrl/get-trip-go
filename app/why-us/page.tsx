const stats = [
  { num: "50M+", label: "Travellers Served" },
  { num: "150+", label: "Countries Covered" },
  { num: "4.9★", label: "Customer Rating" },
  { num: "24/7", label: "Support Available" },
];

const reasons = [
  {
    icon: "✈️",
    title: "Best Fares, Guaranteed",
    desc: "We compare prices across hundreds of airlines and hotels in real time — so you always get the lowest fare without hunting across tabs.",
  },
  {
    icon: "🛡️",
    title: "Trusted by Millions",
    desc: "Over 50 million travellers have booked with us. Our reviews speak for themselves — consistently rated 4.9/5 across platforms.",
  },
  {
    icon: "📞",
    title: "24/7 Human Support",
    desc: "Real people, not bots. Whether it's a last-minute change or an emergency abroad, our support team is available round the clock.",
  },
  {
    icon: "🔒",
    title: "Safe & Secure Payments",
    desc: "Every transaction is encrypted and PCI-DSS compliant. Pay via UPI, cards, net banking, EMI, or wallets — all fully secure.",
  },
  {
    icon: "🌍",
    title: "One Platform, Everything",
    desc: "Flights, hotels, holidays, transfers, visa, insurance, forex — book everything in one place without juggling multiple websites.",
  },
  {
    icon: "💸",
    title: "Instant Refunds",
    desc: "Cancelled your trip? Refunds are processed within 2–3 business days for UPI and wallets, and 5–7 days for cards. No chasing required.",
  },
  {
    icon: "🎯",
    title: "Personalised for India",
    desc: "Built for Indian travellers — INR pricing, Indian payment methods, multilingual support, and routes that matter most to you.",
  },
  {
    icon: "🏖️",
    title: "Curated Holiday Packages",
    desc: "From Bali to Europe, our travel experts handpick the best packages so you get a seamless holiday — not just a booking confirmation.",
  },
];



export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FF]">

      {/* ── Hero ── */}
      <section className="bg-[#F8F9FF] px-6 py-24 text-center">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-5">
          Why Get Trip Go
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] mb-5 tracking-tight text-gray-900">
          Travel smarter.<br />Book with confidence.
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
          Millions of travellers choose Get Trip Go every year. Here's why we're different — and why it matters to you.
        </p>
      </section>

      {/* ── Stats ── */}
      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white border border-gray-100 rounded-2xl p-6 text-center">
              <p className="text-3xl font-semibold text-[#2B3FDE] mb-1">{s.num}</p>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Reasons ── */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-3">
          What sets us apart
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2">
          8 reasons travellers trust us
        </h2>
        <p className="text-gray-400 text-sm mb-10 max-w-xl">
          We've built every feature around one goal — making travel easier, cheaper, and stress-free for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 flex gap-5 hover:border-[#2B3FDE]/30 hover:shadow-sm transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-[#F0F3FF] flex items-center justify-center text-xl shrink-0">
                {r.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{r.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Google Reviews ── */}
      <div className="bg-white border-y border-gray-100 py-20 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header row */}
          <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-3">
                Traveller stories
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                Don't take our word for it
              </h2>
            </div>
            {/* Google rating badge */}
            <div className="flex items-center gap-3 bg-[#F8F9FF] border border-gray-100 rounded-2xl px-5 py-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-semibold text-gray-900">4.9</span>
                  <span className="text-yellow-400 tracking-wide">★★★★★</span>
                </div>
                <p className="text-xs text-gray-400">Google Reviews</p>
              </div>
            </div>
          </div>

          {/* Review cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { initials: "PS", name: "Priya Sharma", location: "Delhi", when: "2 weeks ago", text: "Booked a Europe trip for 4 people and everything was seamless. Visa assistance alone saved us hours of stress. Will definitely book again.", bg: "bg-blue-50", color: "text-blue-700" },
              { initials: "RM", name: "Rahul Mehta", location: "Mumbai", when: "1 month ago", text: "Got a fare ₹4,000 cheaper than other sites for the same flight. The comparison tool is genuinely the best I've used anywhere.", bg: "bg-green-50", color: "text-green-700" },
              { initials: "AN", name: "Anjali Nair", location: "Bangalore", when: "3 weeks ago", text: "Flight got cancelled and support rebooked me in under 30 minutes. No panic, no hold music. Absolutely incredible service.", bg: "bg-amber-50", color: "text-amber-700" },
              { initials: "VK", name: "Vikram Kapoor", location: "Hyderabad", when: "1 month ago", text: "Booked a Bali holiday package and every detail was perfect — resort, transfers, itinerary. The team clearly knows travel.", bg: "bg-purple-50", color: "text-purple-700" },
              { initials: "SR", name: "Sneha Reddy", location: "Chennai", when: "2 months ago", text: "Refund was processed in 2 days after my cancellation. No follow-ups needed. That kind of reliability is rare these days.", bg: "bg-rose-50", color: "text-rose-700" },
              { initials: "AT", name: "Arjun Tiwari", location: "Lucknow", when: "3 months ago", text: "Used them for a group of 22 for Rajasthan. The coordination was flawless — coach, hotels, guide all perfectly arranged.", bg: "bg-teal-50", color: "text-teal-700" },
            ].map((r) => (
              <div key={r.name} className="bg-[#F8F9FF] border border-gray-100 rounded-2xl p-5 flex flex-col gap-3 hover:border-[#2B3FDE]/25 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full ${r.bg} ${r.color} flex items-center justify-center text-xs font-semibold shrink-0`}>
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.location} · {r.when}</p>
                  </div>
                </div>
                <div className="text-yellow-400 text-xs tracking-wide">★★★★★</div>
                <p className="text-sm text-gray-500 leading-relaxed">"{r.text}"</p>
                <div className="flex items-center gap-1.5 mt-auto pt-1">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-[11px] text-blue-600 font-medium">via Google</span>
                </div>
              </div>
            ))}
          </div>

          {/* Leave a review CTA */}
          <div className="flex justify-center">
            <a
              href="https://g.page/r/CZkeIeGg7cBuEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-xl px-5 py-3 text-sm font-medium text-gray-700 hover:border-[#2B3FDE] hover:text-[#2B3FDE] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Leave us a Google review →
            </a>
          </div>

        </div>
      </div>

      {/* ── CTA ── */}
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#2B3FDE] mb-4">
          Ready to travel?
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-3">
          Your next trip starts here
        </h2>
        <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
          Join millions of happy travellers who book smarter with Get Trip Go.
        </p>
        <a
          href="/"
          className="inline-block bg-[#2B3FDE] text-white px-8 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#2236C5] transition-colors"
        >
          Search flights & holidays →
        </a>
      </div>

    </main>
  );
}