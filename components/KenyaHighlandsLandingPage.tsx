"use client"
import Image from "next/image"
import { useState } from "react"

const ANIMALS = [
  { name: "Lion", image: "https://images.unsplash.com/photo-1697638332466-16f48f835b96?w=300&q=80" },
  { name: "Elephant", image: "https://images.unsplash.com/photo-1674909072480-ad551618b63e?w=300&q=80" },
  { name: "Rhino", image: "https://images.unsplash.com/photo-1541414779316-956a5084c0d4?w=300&q=80" },
  { name: "Leopard", image: "https://images.unsplash.com/photo-1759055646019-e076c6482ed1?w=300&q=80" },
  { name: "Buffalo", image: "https://images.unsplash.com/photo-1672438605161-22d8c2912054?w=300&q=80" },
  { name: "Giraffe", image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=300&q=80" },
]

const ITINERARY = [
  {
    day: "Day 1",
    route: "Nairobi → Lake Naivasha",
    overnight: "Lake Naivasha Lodge",
    bullets: ["Private drive from Nairobi to Lake Naivasha.", "Evening boat ride on Lake Naivasha.", "Watch hippos, pelicans and fish eagles."],
    image: "https://images.unsplash.com/photo-1760044280686-c5bf1edf3cbb?w=700&q=80",
  },
  {
    day: "Day 2",
    route: "Lake Naivasha → Lake Nakuru",
    overnight: "Lake Nakuru Lodge",
    bullets: ["Scenic drive to Lake Nakuru.", "Afternoon game drive — home to rhino and flamingo."],
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&q=80",
  },
  {
    day: "Day 3",
    route: "Lake Nakuru → Masai Mara",
    overnight: "Masai Mara Safari Camp",
    bullets: ["Drive to the world-famous Masai Mara National Reserve.", "Enjoy evening game drive."],
    image: "https://images.unsplash.com/photo-1741850821150-58b56e0e6156?w=700&q=80",
  },
  {
    day: "Day 4",
    route: "Masai Mara: Full Day Safari",
    overnight: "Masai Mara Safari Camp",
    bullets: ["Full day of game drives in Masai Mara.", "Explore rich wildlife and the vast savannah."],
    image: "https://images.unsplash.com/photo-1728891376539-14448ef60798?w=700&q=80",
  },
  {
    day: "Day 5",
    route: "Masai Mara: Deeper into the Wild",
    overnight: "Masai Mara Safari Camp",
    bullets: ["Morning and afternoon game drives.", "Optional visit to a Maasai village (village fee applies)."],
    image: "https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?w=700&q=80",
  },
  {
    day: "Day 6",
    route: "Masai Mara: Dawn from the Air",
    overnight: "Masai Mara Safari Camp",
    bullets: ["Optional hot air balloon safari at sunrise.", "Later, enjoy a game drive in the park."],
    image: "https://images.unsplash.com/photo-1758558364489-e6b0a03d1fcf?w=700&q=80",
  },
  {
    day: "Day 7",
    route: "Masai Mara → Nairobi",
    overnight: "End of Unforgettable Journey",
    bullets: ["Morning game drive.", "Drive back to Nairobi and drop off at airport for your onward flight."],
    image: "https://images.unsplash.com/photo-1764555735463-78b9ff085350?w=700&q=80",
  },
]

const STAYS = [
  { location: "Lake Naivasha", name: "Enashipai Resort & Spa or similar", stars: 4, image: "https://images.unsplash.com/photo-1760044280686-c5bf1edf3cbb?w=400&q=80" },
  { location: "Lake Nakuru", name: "Lake Nakuru Lodge or similar", stars: 4, image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=400&q=80" },
  { location: "Masai Mara", name: "Mara Sopa Lodge or similar", stars: 4, image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=400&q=80" },
]

const INCLUSIONS = [
  "Airport Meet & Greet",
  "6 Nights Accommodation",
  "All Meals on Safari",
  "Private 4x4 Safari Vehicle",
  "Professional English-speaking Guide",
  "Masai Mara Game Drives",
  "Boat Safari in Lake Naivasha",
  "Park Entry Fees",
  "Drinking Water During Safari",
  "All Applicable Taxes",
]

const EXCLUSIONS = [
  "International Flights",
  "Visa Fees",
  "Travel Insurance",
  "Personal Expenses",
  "Tips & Gratuities",
  "Any Services Not Mentioned in Inclusions",
]

const TESTIMONIALS = [
  { text: "Amazing experience! The safari, guides and hotels were all excellent. Highly recommended.", name: "Rahul Mehta", place: "Mumbai" },
  { text: "Everything was perfectly organised. We saw the Big Five in Masai Mara!", name: "Priya Sharma", place: "Delhi" },
  { text: "Our guide was fantastic. Truly a trip of a lifetime.", name: "Amit Verma", place: "Bangalore" },
]

const FAQS = [
  {
    q: "Is this a private safari?",
    a: "Yes. This itinerary runs as a private safari for your group only — you will not be combined with other travellers you don\'t know. Your vehicle, guide and pace are entirely your own.",
  },
  {
    q: "Are flights included?",
    a: "No, international and domestic flights are not included in the package price. This keeps the price flexible since flight costs vary widely by departure city and season — we\'re happy to help you find the best fares separately.",
  },
  {
    q: "Which hotels will we stay at?",
    a: "The standard itinerary includes handpicked 3-star lodges and camps at each stop — comfortable, well-located properties suited for a safari trip. If you\'d prefer a different category, the itinerary can be customised with 4-star or luxury properties at each location based on your preference and budget.",
  },
  {
    q: "Is the safari vehicle private?",
    a: "Yes. You get a private 4x4 safari vehicle with a dedicated driver-guide for your group throughout the trip — it is not shared with other travellers, so you set the pace for game drives and stops.",
  },
  {
    q: "What meals are included?",
    a: "Yes, meals are included as specified in the itinerary for each day — typically breakfast, lunch and dinner at your lodge or camp, plus any specified meals during transfers and game drives.",
  },
  {
    q: "Is visa assistance included?",
    a: "Yes, we provide visa assistance as part of your booking — including guidance on the Kenya eTA application process, required documents, and timelines, so you\'re not navigating it alone.",
  },
  {
    q: "What is the best month to visit Kenya?",
    a: "June to October is generally the best window — dry weather, easier wildlife spotting, and (from around July) the Great Migration in the Masai Mara. That said, other months have their own advantages like lower prices and quieter parks, and we can help you pick based on what matters most to you.",
  },
  {
    q: "How many people can travel together?",
    a: "This itinerary is designed for a minimum of 2 and a maximum of 7 travellers per vehicle. Larger groups can absolutely be accommodated — we\'ll simply arrange additional vehicles and guides so everyone travels comfortably together.",
  },
  {
    q: "Can I customise the itinerary?",
    a: "Yes, absolutely. This 7-day route is a starting template — we can adjust the number of days, swap destinations, upgrade accommodation, add activities like a hot air balloon safari or a Maasai village visit, or rework the pace entirely to match how you like to travel.",
  },
  {
    q: "What happens after I submit an enquiry?",
    a: "Our Kenya Safari Team will contact you directly — usually within a few hours — to understand your travel dates, group size and any preferences, then send you a detailed, personalised quote and itinerary for your trip.",
  },
]

function buildWhatsAppUrl(data: Record<string, string>) {
  const lines = [
    "*New Kenya Safari Quote Request*",
    "Package: 7 Days Through the Kenya Highlands",
    `Name: ${data.name || ""}`,
    `Phone: ${data.phone || ""}`,
    `Email: ${data.email || ""}`,
    data.month ? `Preferred Month: ${data.month}` : null,
    `Travellers: ${data.adults || "0"} Adults, ${data.children || "0"} Children, ${data.infants || "0"} Infants`,
  ].filter(Boolean)
  return `https://wa.me/919667892504?text=${encodeURIComponent(lines.join("\n"))}`
}

function LeadForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data: Record<string, string> = {}
    form.forEach((v, k) => { data[k] = String(v) })
    window.open(buildWhatsAppUrl(data), "_blank")
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <h3 className="text-gray-900 font-extrabold text-lg text-center">PLAN YOUR KENYA SAFARI</h3>
      <p className="text-gray-500 text-sm text-center mb-5">Get your personalised quote</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 text-xs font-bold mb-1">Full Name</label>
          <input name="name" required type="text" placeholder="Enter your name" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-green-600" />
        </div>
        <div>
          <label className="block text-gray-700 text-xs font-bold mb-1">WhatsApp / Phone</label>
          <input name="phone" required type="tel" placeholder="Enter your number" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-green-600" />
        </div>
        <div>
          <label className="block text-gray-700 text-xs font-bold mb-1">Email</label>
          <input name="email" type="email" placeholder="Enter your email" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-green-600" />
        </div>
        <div>
          <label className="block text-gray-700 text-xs font-bold mb-1">Preferred Travel Month</label>
          <select name="month" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-green-600">
            <option value="">Select month</option>
            {["January","February","March","April","May","June","July","August","September","October","November","December"].map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-700 text-xs font-bold mb-1">Number of Travellers</label>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <span className="block text-gray-400 text-[10px] mb-1">Adults</span>
              <select name="adults" defaultValue="2" className="w-full border border-gray-200 rounded-md px-2 py-2 text-sm focus:outline-none focus:border-green-600">
                {[...Array(9)].map((_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
              </select>
            </div>
            <div>
              <span className="block text-gray-400 text-[10px] mb-1">Children</span>
              <select name="children" defaultValue="0" className="w-full border border-gray-200 rounded-md px-2 py-2 text-sm focus:outline-none focus:border-green-600">
                {[...Array(6)].map((_, i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
            <div>
              <span className="block text-gray-400 text-[10px] mb-1">Infants</span>
              <select name="infants" defaultValue="0" className="w-full border border-gray-200 rounded-md px-2 py-2 text-sm focus:outline-none focus:border-green-600">
                {[...Array(4)].map((_, i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
          </div>
        </div>
        <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-4 py-3 rounded-md transition-colors flex items-center justify-center gap-2">
          GET MY SAFARI QUOTE
        </button>
        <p className="text-gray-400 text-[11px] text-center">Your details are safe with us. No spam.</p>
      </form>
    </div>
  )
}

export default function KenyaHighlandsLandingPage() {
  const [showStickyBar, setShowStickyBar] = useState(true)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative w-full min-h-[620px] sm:min-h-[520px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=80"
          alt="Lion on the savanna with a safari vehicle in the Kenya highlands"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent md:via-white/60" />

        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-6">
            <span className="inline-flex items-center gap-2 bg-white/90 border border-gray-200 rounded-full px-4 py-2 text-xs font-bold text-gray-800 shadow-sm">
              📅 BEST TIME TO VISIT: JUN – OCT
            </span>
            <div className="bg-white rounded-lg shadow-md px-5 py-3 text-center">
              <p className="text-gray-900 font-extrabold text-lg">4.8/5</p>
              <p className="text-amber-500 text-sm">★★★★★</p>
              <p className="text-gray-500 text-xs mt-1">500+<br />Happy Travellers</p>
            </div>
          </div>

          <div className="max-w-xl">
            <p className="italic text-gray-700 mb-2">Wild by Nature, Unforgettable by Choice</p>
            <h1 className="leading-none mb-3">
              <span className="block text-green-900 font-black text-4xl sm:text-6xl tracking-tight">KENYA</span>
              <span className="block text-orange-600 font-black text-4xl sm:text-6xl tracking-tight">SAFARI</span>
            </h1>
            <p className="text-gray-700 text-sm mb-1">📍 Lake Naivasha · Lake Nakuru National Park</p>
            <p className="text-gray-700 text-sm mb-4">Masai Mara National Reserve · Nairobi</p>

            <div className="flex flex-wrap gap-4 text-gray-700 text-sm font-semibold mb-5">
              <span>📅 7 DAYS / 6 NIGHTS</span>
              <span>👥 GUIDED SAFARI EXPERIENCE</span>
            </div>

            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Starting from</p>
            <p className="text-orange-600 font-black text-4xl mb-1">
              ₹1,49,999<span className="text-gray-500 font-normal text-base"> / person</span>
            </p>
            <p className="text-gray-400 text-xs mb-5">Flights Optional · All Taxes Included</p>

            <div className="flex flex-wrap gap-3 mb-3">
              
              <a
                target="_blank"
                rel="noreferrer"
                className="bg-green-800 hover:bg-green-900 text-white font-bold text-sm px-6 py-3 rounded-md flex items-center gap-2 transition-colors"
              >
                GET KENYA SAFARI QUOTE
              </a>
              <a
                href="tel:+919667892504"
                className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold text-sm px-6 py-3 rounded-md flex items-center gap-2 transition-colors"
              >
                📞 TALK TO SAFARI EXPERT
              </a>
            </div>
            <p className="text-gray-400 text-xs">⏱ Takes 30 seconds · No payment required</p>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-green-900">
        <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 sm:grid-cols-5 gap-4 text-white text-xs font-semibold text-center">
          <div>🛏 Comfortable Safari Stays</div>
          <div>🧑 Experienced Local Guides</div>
          <div>🚙 Game Drives & Boat Safari</div>
          <div>📷 Scenic Landscapes & Wildlife</div>
          <div>🎧 24/7 Travel Support</div>
        </div>
      </div>

      {/* Why choose */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-center text-gray-800 font-extrabold text-xl tracking-wide mb-8">
          <span className="border-b-2 border-yellow-500 pb-2">WHY CHOOSE THIS KENYA SAFARI?</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {[
            { icon: "📍", title: "3 Iconic Destinations", desc: "Explore Lake Naivasha, Lake Nakuru and Masai Mara." },
            { icon: "🚙", title: "Private 4x4 Safari Vehicle", desc: "Comfortable & reliable private vehicle for your entire journey." },
            { icon: "🐾", title: "Big Five Wildlife", desc: "Spot Lions, Elephants, Rhinos, Leopards & Buffalo." },
            { icon: "🛏", title: "Handpicked Stays", desc: "Carefully selected lodges & camps for best experience." },
            { icon: "🎧", title: "End-to-End Support", desc: "We're with you from airport pickup to departure." },
          ].map(item => (
            <div key={item.title} className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-gray-900 font-bold text-sm mb-1">{item.title}</p>
              <p className="text-gray-500 text-xs leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Wildlife grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <h2 className="text-center text-gray-800 font-extrabold text-xl tracking-wide mb-8">
          <span className="border-b-2 border-yellow-500 pb-2">COME FACE-TO-FACE WITH AFRICA'S WILDLIFE</span>
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {ANIMALS.map(animal => (
            <div key={animal.name} className="text-center">
              <div className="relative w-full aspect-square rounded-full overflow-hidden mb-2 border-4 border-white shadow-md">
                <Image src={animal.image} alt={animal.name} fill sizes="150px" className="object-cover" />
              </div>
              <p className="text-gray-800 font-bold text-sm">{animal.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Itinerary + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: itinerary */}
          <div className="lg:col-span-2">
            <h2 className="text-gray-800 font-extrabold text-xl tracking-wide mb-6">
              <span className="border-b-2 border-yellow-500 pb-2">YOUR 7-DAY KENYA SAFARI ITINERARY</span>
            </h2>
            <div className="space-y-6">
              {ITINERARY.map(item => (
                <div key={item.day} className="flex gap-4 items-start border-b border-gray-100 pb-6 last:border-0">
                  <div className="flex-shrink-0 w-20">
                    <span className="inline-block bg-green-900 text-white text-[11px] font-bold px-3 py-1 rounded-full">{item.day}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 font-bold text-base mb-2">{item.route}</p>
                    <ul className="space-y-1 mb-2">
                      {item.bullets.map(b => (
                        <li key={b} className="text-gray-600 text-sm flex gap-2">
                          <span className="text-yellow-500">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-400 text-xs">🛏 Overnight: {item.overnight}</p>
                  </div>
                  <div className="hidden sm:block relative w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image src={item.image} alt={item.route} fill sizes="128px" className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="relative w-full h-56 rounded-xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1759055646019-e076c6482ed1?w=600&q=80" alt="Leopard resting in a tree" fill sizes="400px" className="object-cover" />
            </div>

            <LeadForm />

            <div>
              <h3 className="text-gray-800 font-extrabold text-base mb-4">
                <span className="border-b-2 border-yellow-500 pb-1">WHERE YOU'LL STAY</span>
              </h3>
              <div className="space-y-3">
                {STAYS.map(stay => (
                  <div key={stay.location} className="relative rounded-lg overflow-hidden h-24">
                    <Image src={stay.image} alt={stay.name} fill sizes="400px" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-white font-bold text-sm">{stay.location}</p>
                      <p className="text-gray-200 text-xs">{stay.name}</p>
                      <p className="text-amber-400 text-xs">{"★".repeat(stay.stars)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inclusions / Exclusions / Reviews */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-gray-900 font-extrabold text-sm mb-3">PACKAGE INCLUSIONS</h3>
                <ul className="space-y-2">
                  {INCLUSIONS.map(i => (
                    <li key={i} className="text-gray-600 text-xs flex gap-2">
                      <span className="text-green-700">✓</span><span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-orange-600 font-extrabold text-sm mb-3">PACKAGE EXCLUSIONS</h3>
                <ul className="space-y-2">
                  {EXCLUSIONS.map(i => (
                    <li key={i} className="text-gray-600 text-xs flex gap-2">
                      <span className="text-red-500">✗</span><span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-900 font-extrabold text-sm">TRUSTED BY TRAVELLERS</h3>
              <span className="text-gray-400 text-xs font-semibold">Google Verified Reviews</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-900 font-extrabold text-lg">4.8/5</span>
              <span className="text-amber-500 text-sm">★★★★★</span>
              <span className="text-gray-400 text-xs">Based on 500+ Google Reviews</span>
            </div>
            <div className="space-y-3">
              {TESTIMONIALS.map(t => (
                <div key={t.name} className="bg-white rounded-lg p-3">
                  <p className="text-gray-600 text-xs leading-snug mb-1">"{t.text}"</p>
                  <p className="text-gray-800 text-xs font-bold">{t.name} <span className="text-gray-400 font-normal">· {t.place}</span></p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-[10px] mt-3">Sample reviews shown for illustration — replace with your verified Google Reviews before launch.</p>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <h3 className="text-gray-800 font-extrabold text-lg mb-3 text-center">Frequently Asked Questions</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-1.5">
          {FAQS.map((faq, i) => (
            <div key={faq.q} className="bg-gray-50 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 px-3 py-2 text-left"
              >
                <span className="text-gray-900 font-bold text-xs">{faq.q}</span>
                <span
                  className={`shrink-0 text-gray-400 text-xs transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                >
                  &#9662;
                </span>
              </button>
              {openFaq === i && (
                <p className="text-gray-600 text-xs leading-snug px-3 pb-2.5">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA banner */}
      <div className="relative bg-green-900 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image src="https://images.unsplash.com/photo-1758558364489-e6b0a03d1fcf?w=1600&q=80" alt="Kenya sunset safari" fill className="object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-extrabold text-lg mb-1">YOUR KENYA ADVENTURE STARTS HERE</p>
            <p className="text-gray-200 text-sm mb-1">7 Days / 6 Nights · Masai Mara · Lake Nakuru · Lake Naivasha</p>
            <p className="text-amber-400 font-bold">FROM ₹1,49,999 <span className="text-gray-300 font-normal text-xs">/ person</span></p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={buildWhatsAppUrl({})} target="_blank" rel="noreferrer" className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-5 py-3 rounded-md">
              GET MY KENYA SAFARI QUOTE
            </a>
            <a href={`https://wa.me/919667892504`} target="_blank" rel="noreferrer" className="bg-green-700 hover:bg-green-600 text-white font-bold text-sm px-5 py-3 rounded-md">
              WhatsApp Chat
            </a>
            <a href="tel:+919667892504" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-bold text-sm px-5 py-3 rounded-md">
              Call Our Expert
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
