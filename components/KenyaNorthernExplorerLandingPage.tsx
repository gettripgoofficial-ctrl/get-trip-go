"use client"
import Image from "next/image"
import { useState } from "react"
import { MapPin, Car, TreePine, Headphones, Phone, MessageCircle } from "lucide-react"

const ANIMALS = [
  { name: "Grevy's Zebra", image: "https://images.unsplash.com/photo-1526095179574-86e545346ae6?w=300&q=80" },
  { name: "Reticulated Giraffe", image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=300&q=80" },
  { name: "Gerenuk", image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=300&q=80" },
  { name: "Beisa Oryx", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=300&q=80" },
  { name: "Elephant", image: "https://images.unsplash.com/photo-1674909072480-ad551618b63e?w=300&q=80" },
  { name: "Rhino", image: "https://images.unsplash.com/photo-1541414779316-956a5084c0d4?w=300&q=80" },
]

const ITINERARY = [
  {
    day: "Day 1",
    route: "Arrival in Nairobi",
    overnight: "Tamarind Tree Hotel, Nairobi | Bed & Breakfast",
    bullets: [
      "Arrive in Nairobi and meet your safari representative after customs and immigration.",
      "Transfer to your hotel and rest after your international journey.",
    ],
    image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=700&q=80",
  },
  {
    day: "Day 2",
    route: "Nairobi to Ol Pejeta Conservancy",
    overnight: "Sweetwaters Serena Camp, Ol Pejeta | Full Board",
    bullets: [
      "After breakfast, drive north towards Ol Pejeta Conservancy in the foothills of Mount Kenya.",
      "Enjoy an afternoon game drive, with a strong chance of spotting rhino, elephant and lion in this private, low-density conservancy.",
    ],
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=700&q=80",
  },
  {
    day: "Day 3",
    route: "Ol Pejeta: Full Day",
    overnight: "Sweetwaters Serena Camp, Ol Pejeta | Full Board",
    bullets: [
      "Spend a full day exploring Ol Pejeta, home to the last two northern white rhinos on Earth.",
      "Visit the Sweetwaters Chimpanzee Sanctuary and enjoy morning and afternoon game drives across the conservancy.",
    ],
    image: "https://images.unsplash.com/photo-1541414779316-956a5084c0d4?w=700&q=80",
  },
  {
    day: "Day 4",
    route: "Ol Pejeta to Samburu National Reserve",
    overnight: "Samburu Sopa Lodge | Full Board",
    bullets: [
      "After breakfast, continue north into genuinely remote territory, crossing into semi-arid Samburu country.",
      "Arrive at your lodge on the banks of the Ewaso Ng'iro River in time for an afternoon game drive.",
    ],
    image: "https://images.unsplash.com/photo-1526095179574-86e545346ae6?w=700&q=80",
  },
  {
    day: "Day 5",
    route: "Samburu: Full Day",
    overnight: "Samburu Sopa Lodge | Full Board",
    bullets: [
      "Spend a full day in Samburu National Reserve, home to the 'Samburu Special Five' found nowhere else in Kenya — Grevy's zebra, reticulated giraffe, Somali ostrich, gerenuk and Beisa oryx.",
      "Enjoy morning and afternoon game drives with a fraction of the vehicle density of the Mara.",
    ],
    image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=700&q=80",
  },
  {
    day: "Day 6",
    route: "Samburu to Meru National Park",
    overnight: "Ikweta Safari Camp, Meru | Full Board",
    bullets: [
      "Drive south-east into Meru National Park — wild, riverine country made famous as the setting of 'Born Free'.",
      "Arrive at camp in time for an afternoon game drive along the Tana and Rojoweru rivers.",
    ],
    image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=700&q=80",
  },
  {
    day: "Day 7",
    route: "Meru: Full Day",
    overnight: "Ikweta Safari Camp, Meru | Full Board",
    bullets: [
      "Spend a full day exploring one of Kenya's least-visited parks, with a rhino sanctuary, doum palm forests and dramatic river scenery.",
      "Optional visit to Elsa's grave, the lioness whose story inspired 'Born Free'.",
    ],
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=700&q=80",
  },
  {
    day: "Day 8",
    route: "Meru to Lewa Wildlife Conservancy",
    overnight: "Lewa Safari Camp | Full Board",
    bullets: [
      "Continue to Lewa Wildlife Conservancy, a UNESCO World Heritage Site and one of Africa's most important rhino sanctuaries.",
      "Afternoon game drive in search of black and white rhino, alongside healthy populations of Grevy's zebra and elephant.",
    ],
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=700&q=80",
  },
  {
    day: "Day 9",
    route: "Lewa: Full Day",
    overnight: "Lewa Safari Camp | Full Board",
    bullets: [
      "Full day at Lewa, with the option of a guided walking safari alongside your usual game drives — something not permitted in most of Kenya's national parks.",
      "Optional community visit to a local conservation and education project.",
    ],
    image: "https://images.unsplash.com/photo-1541414779316-956a5084c0d4?w=700&q=80",
  },
  {
    day: "Day 10",
    route: "Lewa to Nairobi: Departure",
    overnight: "End of Unforgettable Journey",
    bullets: [
      "After breakfast, transfer back to Nairobi by road or light aircraft.",
      "Connect to Jomo Kenyatta International Airport for your onward flight, taking home memories of a Kenya far from the crowds.",
    ],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=700&q=80",
  },
]

const STAYS = [
  { location: "Nairobi", name: "Tamarind Tree Hotel", stars: 4, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80" },
  { location: "Ol Pejeta", name: "Sweetwaters Serena Camp", stars: 4, image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=400&q=80" },
  { location: "Samburu", name: "Samburu Sopa Lodge", stars: 4, image: "https://images.unsplash.com/photo-1526095179574-86e545346ae6?w=400&q=80" },
  { location: "Meru", name: "Ikweta Safari Camp", stars: 4, image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=400&q=80" },
  { location: "Lewa", name: "Lewa Safari Camp", stars: 4, image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&q=80" },
]

const INCLUSIONS = [
  "Airport Meet & Greet",
  "9 Nights Accommodation",
  "All Meals as per Itinerary (Bed & Breakfast, Full Board)",
  "Private 4x4 Safari Vehicle",
  "Professional English-speaking Guide",
  "Game Drives as per Itinerary",
  "Park & Conservancy Entry Fees",
  "Guided Walking Safari at Lewa",
  "Drinking Water During Safari",
  "All Applicable Taxes",
]

const EXCLUSIONS = [
  "International Flights",
  "Kenya Visa / eTA Fees",
  "Travel Insurance",
  "Personal Expenses",
  "Tips & Gratuities",
  "Optional Community Visit Fees",
  "Any Services Not Mentioned in Inclusions",
]

const FAQS = [
  {
    q: "Is this a private safari?",
    a: "Yes. This itinerary runs as a private safari for your group only, with your own vehicle, guide and pace throughout northern Kenya.",
  },
  {
    q: "Why visit northern Kenya instead of the Masai Mara?",
    a: "Northern Kenya's conservancies see a fraction of the visitor numbers of the Mara or Amboseli, so you get closer, quieter wildlife encounters — plus species like Grevy's zebra and gerenuk that don't occur further south.",
  },
  {
    q: "Are flights included?",
    a: "International flights are not included. All road transfers between destinations on this route are included as part of the package.",
  },
  {
    q: "Which lodges will we stay at?",
    a: "Tamarind Tree Hotel in Nairobi, Sweetwaters Serena Camp at Ol Pejeta, Samburu Sopa Lodge, Ikweta Safari Camp in Meru, and Lewa Safari Camp — all handpicked 4-star properties suited to each region.",
  },
  {
    q: "Is the safari vehicle private?",
    a: "Yes, you get a private 4x4 safari vehicle with a dedicated driver-guide for your group throughout the trip.",
  },
  {
    q: "Can we do a walking safari?",
    a: "Yes — Lewa Wildlife Conservancy permits guided walking safaris, which most Kenyan national parks don't allow. It's included as part of your time there.",
  },
  {
    q: "What is the best time to visit for this route?",
    a: "This region is good year-round, though June to October offers the driest conditions and easiest wildlife viewing across all four conservancies.",
  },
  {
    q: "How many people can travel together?",
    a: "This itinerary is designed for small private groups. Larger groups can be accommodated with additional vehicles and guides.",
  },
  {
    q: "Can I customise the itinerary?",
    a: "Yes. Days at each conservancy can be adjusted, accommodation categories upgraded, and activities like the community visit or walking safari added or removed.",
  },
  {
    q: "What happens after I submit an enquiry?",
    a: "Our Kenya Safari Team will contact you directly to understand your travel dates, group size and preferences, then send you a detailed itinerary and quote for your trip.",
  },
]

function buildWhatsAppUrl(data: Record<string, string>) {
  const lines = [
    "*New Kenya Safari Quote Request*",
    "Package: Northern Kenya Explorer: Off the Beaten Path",
    `Name: ${data.name || ""}`,
    `Phone: ${data.phone || ""}`,
    `Email: ${data.email || ""}`,
    data.month ? `Preferred Month: ${data.month}` : null,
    data.departureCity ? `Departure City: ${data.departureCity}` : null,
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
    <div id="safari-quote-form" className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-green-900 to-green-800 px-6 py-3 text-center">
        <h3 className="text-white font-extrabold text-base">PLAN YOUR NORTHERN KENYA SAFARI</h3>
        <p className="text-green-100 text-xs">Get your personalised quote in minutes</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 p-6">
        <div>
          <label className="block text-gray-700 text-xs font-bold mb-1">Full Name</label>
          <input aria-label="Enter your name" name="name" required type="text" placeholder="Enter your name" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-green-600" />
        </div>
        <div>
          <label className="block text-gray-700 text-xs font-bold mb-1">WhatsApp / Phone</label>
          <input aria-label="Enter your number" name="phone" required type="tel" placeholder="Enter your number" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-green-600" />
        </div>
        <div>
          <label className="block text-gray-700 text-xs font-bold mb-1">Email</label>
          <input aria-label="Enter your email" name="email" type="email" placeholder="Enter your email" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-green-600" />
        </div>
        <div>
          <label htmlFor="ne-month" className="block text-gray-700 text-xs font-bold mb-1">Preferred Travel Month</label>
          <select id="ne-month" name="month" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-green-600">
            <option value="">Select month</option>
            {["January","February","March","April","May","June","July","August","September","October","November","December"].map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-700 text-xs font-bold mb-1">Departure City</label>
          <input aria-label="e.g. Delhi, Mumbai, Bangalore" name="departureCity" type="text" placeholder="e.g. Delhi, Mumbai, Bangalore" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-green-600" />
        </div>
        <div>
          <label className="block text-gray-700 text-xs font-bold mb-1">Number of Travellers</label>
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label htmlFor="ne-adults" className="block text-gray-500 text-[10px] mb-1">Adults</label>
              <select id="ne-adults" name="adults" defaultValue="2" className="w-full border border-gray-200 rounded-md px-2 py-2 text-sm focus:outline-none focus:border-green-600">
                {[...Array(9)].map((_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="ne-children" className="block text-gray-500 text-[10px] mb-1">Children</label>
              <select id="ne-children" name="children" defaultValue="0" className="w-full border border-gray-200 rounded-md px-2 py-2 text-sm focus:outline-none focus:border-green-600">
                {[...Array(6)].map((_, i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="ne-infants" className="block text-gray-500 text-[10px] mb-1">Infants</label>
              <select id="ne-infants" name="infants" defaultValue="0" className="w-full border border-gray-200 rounded-md px-2 py-2 text-sm focus:outline-none focus:border-green-600">
                {[...Array(4)].map((_, i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
          </div>
        </div>
        <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-4 py-3.5 rounded-lg transition-colors shadow-md shadow-orange-600/30 flex items-center justify-center gap-2">
          GET MY SAFARI QUOTE
        </button>
      </form>
    </div>
  )
}

export default function KenyaNorthernExplorerLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showPhonePopup, setShowPhonePopup] = useState(false)

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative w-full min-h-[480px] sm:min-h-[380px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1526095179574-86e545346ae6?w=1600&q=80"
          alt="Grevy's zebra in the remote landscapes of northern Kenya"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_75%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent md:from-white md:via-white/5 md:to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <span className="hidden lg:flex absolute right-4 bottom-10 bg-white border border-gray-300 text-gray-800 font-bold text-sm px-5 py-3 rounded-md items-center gap-2 whitespace-nowrap shadow-md z-10">
            📅 BEST TIME TO VISIT: JUN – OCT
          </span>
          <div className="hidden lg:block absolute right-4 top-6 bg-white rounded-lg shadow-md px-5 py-3 text-center z-10">
            <p className="text-gray-900 font-extrabold text-lg">4.8/5</p>
            <p className="text-amber-500 text-sm">★★★★★</p>
            <p className="text-gray-500 text-xs mt-1">500+<br />Happy Travellers</p>
          </div>

          <div className="max-w-2xl">
            <p className="italic text-gray-700 mb-2">Wild by Nature, Remote by Choice</p>
            <div className="flex items-center justify-between gap-3 mb-3 lg:block">
              <h1 className="leading-none lg:mb-3">
                <span className="block text-green-900 font-black text-4xl sm:text-6xl tracking-tight">NORTHERN</span>
                <span className="block text-orange-600 font-black text-4xl sm:text-6xl tracking-tight">EXPLORER</span>
              </h1>
              <div className="lg:hidden flex-shrink-0 bg-white rounded-lg shadow-md px-3 py-2 text-center">
                <p className="text-gray-900 font-extrabold text-sm">4.8/5</p>
                <p className="text-amber-500 text-xs">★★★★★</p>
                <p className="text-gray-500 text-[10px] mt-1">500+<br />Happy Travellers</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-1">📍 Ol Pejeta · Samburu · Meru</p>
            <p className="text-gray-700 text-sm mb-4">Lewa Wildlife Conservancy</p>

            <div className="flex flex-wrap gap-4 text-gray-700 text-sm font-semibold mb-5">
              <span>📅 10 DAYS / 9 NIGHTS</span>
              <span>👥 GUIDED SAFARI EXPERIENCE</span>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 lg:gap-3 mb-3">
              <a href="#safari-quote-form"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("safari-quote-form")?.scrollIntoView({ behavior: "smooth", block: "center" })
                }}
                className="bg-green-800 hover:bg-green-900 text-white font-bold text-sm px-4 lg:px-5 py-3 rounded-md flex items-center gap-2 transition-colors whitespace-nowrap"
              >
                GET MY SAFARI QUOTE
              </a>
              <a href="tel:+919667892504" className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold text-sm px-4 lg:px-5 py-3 rounded-md flex items-center gap-2 transition-colors whitespace-nowrap">
                📞 TALK TO SAFARI EXPERT
              </a>
              <span className="lg:hidden bg-white border border-gray-300 text-gray-800 font-bold text-sm px-4 py-3 rounded-md flex items-center gap-2 whitespace-nowrap">
                📅 BEST TIME TO VISIT: JUN – OCT
              </span>
            </div>
            <p className="text-gray-500 text-xs">⏱ Takes 30 seconds · No payment required</p>
          </div>
        </div>
      </div>

      {/* Why choose */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-center text-gray-800 font-extrabold text-xl tracking-wide mb-8">
          <span className="border-b-2 border-yellow-500 pb-2">WHY CHOOSE THIS NORTHERN KENYA SAFARI?</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {[
            { icon: "🧭", title: "Off the Beaten Path", desc: "Remote conservancies most safari-goers never reach." },
            { icon: "🚙", title: "Private 4x4 Safari Vehicle", desc: "Comfortable & reliable private vehicle for your entire journey." },
            { icon: "🦓", title: "Rare & Unique Wildlife", desc: "The Samburu Special Five, found nowhere else in Kenya." },
            { icon: "🛏", title: "Handpicked Stays", desc: "Carefully selected lodges & camps in each conservancy." },
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
          <span className="border-b-2 border-yellow-500 pb-2">COME FACE-TO-FACE WITH NORTHERN KENYA'S WILDLIFE</span>
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
              <span className="border-b-2 border-yellow-500 pb-2">YOUR 10-DAY NORTHERN KENYA ITINERARY</span>
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
                    <p className="text-gray-500 text-xs">🛏 {item.overnight}</p>
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
            <LeadForm />

            <div>
              <h3 className="text-gray-800 font-extrabold text-base mb-4">
                <span className="border-b-2 border-yellow-500 pb-1">WHERE YOU'LL STAY</span>
              </h3>
              <div className="space-y-3">
                {STAYS.map(stay => (
                  <div key={stay.location} className="relative rounded-lg overflow-hidden h-40">
                    <Image src={stay.image} alt={stay.name} fill sizes="400px" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-bold text-base">{stay.location}</p>
                      <p className="text-gray-200 text-sm">{stay.name}</p>
                      <p className="text-amber-400 text-sm">{"★".repeat(stay.stars)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inclusions / Exclusions / Plan Your Tour */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_2fr] gap-6 items-stretch">

          <div className="bg-gray-50 rounded-xl p-5 h-full">
            <h3 className="text-gray-900 font-extrabold text-base pb-3 mb-4 border-b-2 border-gray-300">PACKAGE INCLUSIONS</h3>
            <ul className="space-y-3.5">
              {INCLUSIONS.map(i => (
                <li key={i} className="text-gray-700 text-sm flex gap-2">
                  <span className="text-green-700">✓</span><span>{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 h-full">
            <h3 className="text-orange-600 font-extrabold text-base pb-3 mb-4 border-b-2 border-orange-200">PACKAGE EXCLUSIONS</h3>
            <ul className="space-y-3.5">
              {EXCLUSIONS.map(i => (
                <li key={i} className="text-gray-700 text-sm flex gap-2">
                  <span className="text-red-500">✗</span><span>{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-[#F7F3E9] border border-[#E4DCC8] shadow-lg p-5 sm:p-8">
            <h3 className="leading-tight text-xl sm:text-3xl font-black text-center">
              <span className="text-green-900">Plan Your </span><span className="text-amber-800">Northern Kenya Safari</span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center mt-3 mb-6">
              Tell us your travel month, departure city and number of travellers, and our travel experts will create a personalized northern Kenya safari based on your travel preferences.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white rounded-xl p-3 border border-[#E4DCC8] text-center">
                <div className="w-12 h-12 rounded-full bg-[#EFEBDD] flex items-center justify-center mx-auto mb-2"><MapPin className="w-5 h-5 text-green-900" /></div>
                <div className="flex items-center justify-center gap-1 mb-2">{Array.from({ length: 5 }).map((_, i) => (<span key={i} className="w-1 h-1 rounded-full bg-green-800" />))}</div>
                <p className="text-gray-900 font-bold text-xs leading-snug">Personalized Northern Kenya Itinerary</p>
              </div>
              <div className="bg-white rounded-xl p-3 border border-[#E4DCC8] text-center">
                <div className="w-12 h-12 rounded-full bg-[#EFEBDD] flex items-center justify-center mx-auto mb-2"><Car className="w-5 h-5 text-green-900" /></div>
                <div className="flex items-center justify-center gap-1 mb-2">{Array.from({ length: 5 }).map((_, i) => (<span key={i} className="w-1 h-1 rounded-full bg-green-800" />))}</div>
                <p className="text-gray-900 font-bold text-xs leading-snug">Private 4×4 Safari Vehicle</p>
              </div>
              <div className="bg-white rounded-xl p-3 border border-[#E4DCC8] text-center">
                <div className="w-12 h-12 rounded-full bg-[#EFEBDD] flex items-center justify-center mx-auto mb-2"><TreePine className="w-5 h-5 text-green-900" /></div>
                <div className="flex items-center justify-center gap-1 mb-2">{Array.from({ length: 5 }).map((_, i) => (<span key={i} className="w-1 h-1 rounded-full bg-green-800" />))}</div>
                <p className="text-gray-900 font-bold text-xs leading-snug">Handpicked Safari Lodges</p>
              </div>
              <div className="bg-white rounded-xl p-3 border border-[#E4DCC8] text-center">
                <div className="w-12 h-12 rounded-full bg-[#EFEBDD] flex items-center justify-center mx-auto mb-2"><Headphones className="w-5 h-5 text-green-900" /></div>
                <div className="flex items-center justify-center gap-1 mb-2">{Array.from({ length: 5 }).map((_, i) => (<span key={i} className="w-1 h-1 rounded-full bg-green-800" />))}</div>
                <p className="text-gray-900 font-bold text-xs leading-snug">Expert Travel Assistance</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
              <a href="tel:+919667892504" className="flex-1 w-full flex items-center justify-center gap-2 bg-green-900 hover:bg-green-950 text-white font-bold text-xs px-4 py-3 rounded-full transition-colors uppercase tracking-wide">
                <Phone className="w-4 h-4" /> TALK TO SAFARI EXPERT
              </a>
              <span className="text-gray-500 text-xs">or</span>
              <a href="https://wa.me/919667892504" target="_blank" rel="noreferrer" className="flex-1 w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-4 py-3 rounded-full transition-colors uppercase tracking-wide">
                <MessageCircle className="w-4 h-4" /> Message us on WhatsApp
              </a>
            </div>
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
                  className={`shrink-0 text-gray-500 text-xs transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
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
          <Image src="https://images.unsplash.com/photo-1526095179574-86e545346ae6?w=1600&q=80" alt="Northern Kenya sunset safari" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-extrabold text-lg mb-1">YOUR NORTHERN KENYA ADVENTURE STARTS HERE</p>
            <p className="text-gray-200 text-sm mb-1">10 Days / 9 Nights · Ol Pejeta · Samburu · Meru · Lewa</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => document.getElementById("safari-quote-form")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 hover:scale-105 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all uppercase tracking-wide min-w-[220px]"
            >
              GET MY SAFARI QUOTE
            </button>
            <a href="https://wa.me/919667892504" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 hover:scale-105 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all uppercase tracking-wide min-w-[220px]">
              <MessageCircle className="w-4 h-4" /> Message us on WhatsApp
            </a>
            <a href="tel:+919667892504" className="flex items-center justify-center gap-2 bg-green-900 hover:bg-green-950 hover:scale-105 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all uppercase tracking-wide min-w-[220px]">
              <Phone className="w-4 h-4" /> TALK TO SAFARI EXPERT
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
