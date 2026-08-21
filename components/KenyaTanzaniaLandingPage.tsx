"use client"
import Image from "next/image"
import { useState } from "react"
import { MapPin, Car, TreePine, Headphones, Phone, MessageCircle } from "lucide-react"

const ANIMALS = [
  { name: "Lion", image: "https://images.unsplash.com/photo-1697638332466-16f48f835b96?w=300&q=80" },
  { name: "Elephant", image: "https://images.unsplash.com/photo-1674909072480-ad551618b63e?w=300&q=80" },
  { name: "Rhino", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&q=80" },
  { name: "Leopard", image: "https://images.unsplash.com/photo-1759055646019-e076c6482ed1?w=300&q=80" },
  { name: "Buffalo", image: "https://images.unsplash.com/photo-1672438605161-22d8c2912054?w=300&q=80" },
  { name: "Giraffe", image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=300&q=80" },
]

const ITINERARY = [
  {
    day: "Day 1",
    route: "Nairobi",
    overnight: "Nairobi | Bed & Breakfast",
    bullets: [
      "Arrive at Jomo Kenyatta International Airport and complete customs and immigration formalities.",
      "Meet our representative and transfer to your Nairobi hotel.",
      "Check in and relax after your flight.",
    ],
    image: "https://images.unsplash.com/photo-1490430657723-4d607c1503fc?w=700&q=80",
  },
  {
    day: "Day 2",
    route: "Lake Naivasha",
    overnight: "Naivasha | Full Board",
    bullets: [
      "After breakfast, check out and drive to Lake Naivasha, arriving in time for lunch at the lodge.",
      "Afternoon optional activities include a boat ride on Lake Naivasha, Crescent Island and a visit to Hell's Gate.",
      "Dinner and overnight at your lodge.",
    ],
    image: "https://images.unsplash.com/photo-1760044280686-c5bf1edf3cbb?w=700&q=80",
  },
  {
    day: "Day 3",
    route: "Masai Mara",
    overnight: "Masai Mara | Full Board",
    bullets: [
      "After breakfast, depart for the famous Masai Mara National Reserve, with a short break at Narok Town en route.",
      "Arrive in time for lunch, followed by an afternoon game drive from 4:00 PM to 6:00 PM.",
      "Dinner and overnight at your camp.",
    ],
    image: "https://images.unsplash.com/photo-1741850821150-58b56e0e6156?w=700&q=80",
  },
  {
    day: "Day 4",
    route: "Masai Mara",
    overnight: "Masai Mara | Full Board",
    bullets: [
      "Spend a full day in the Masai Mara National Reserve with morning and afternoon game drives.",
      "Enjoy hot lunch at the lodge, or a full-day game drive with a picnic lunch inside the reserve.",
      "Dinner and overnight at your camp.",
    ],
    image: "https://images.unsplash.com/photo-1728891376539-14448ef60798?w=700&q=80",
  },
  {
    day: "Day 5",
    route: "Central Serengeti",
    overnight: "Serengeti | Full Board",
    bullets: [
      "After breakfast, check out with picnic lunch boxes and depart towards the Isebania border point.",
      "Complete customs and immigration formalities and cross into Tanzania, entering Serengeti National Park with a game drive en route to your lodge.",
      "Check in, dinner and overnight at your lodge.",
    ],
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=700&q=80",
  },
  {
    day: "Day 6",
    route: "Central Serengeti",
    overnight: "Serengeti | Full Board",
    bullets: [
      "Spend a full day exploring Serengeti National Park with morning and afternoon game drives.",
      "Enjoy hot lunch at the lodge, or a full-day game drive with picnic lunch inside the reserve.",
      "Dinner and overnight at your lodge.",
    ],
    image: "https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?w=700&q=80",
  },
  {
    day: "Day 7",
    route: "Ngorongoro",
    overnight: "Ngorongoro | Full Board",
    bullets: [
      "After breakfast, continue your game drive with a packed lunch.",
      "Optional visits to Olduvai Gorge and a Maasai village can be arranged along the way.",
      "Continue to Ngorongoro for dinner and overnight.",
    ],
    image: "https://images.unsplash.com/photo-1534567110243-8875d64ca8ff?w=700&q=80",
  },
  {
    day: "Day 8",
    route: "Ngorongoro Crater",
    overnight: "Ngorongoro | Full Board",
    bullets: [
      "After breakfast, descend into the Ngorongoro Crater for a game drive with a packed lunch.",
      "Enjoy wildlife viewing on the crater floor, home to one of Africa's densest concentrations of wildlife.",
      "Return to your lodge in the late afternoon for dinner and overnight.",
    ],
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&q=80",
  },
  {
    day: "Day 9",
    route: "Arusha",
    overnight: "Arusha | Bed & Breakfast",
    bullets: [
      "After breakfast, check out and drive to Arusha.",
      "On arrival, transfer to your hotel and check in.",
      "Rest of the day at leisure.",
    ],
    image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=700&q=80",
  },
  {
    day: "Day 10",
    route: "Departure",
    overnight: "End of Unforgettable Journey",
    bullets: [
      "After breakfast, check out and proceed to the international airport for your onward flight.",
      "End of your memorable Kenya and Tanzania safari.",
    ],
    image: "https://images.unsplash.com/photo-1764555735463-78b9ff085350?w=700&q=80",
  },
]

const STAYS = [
  { location: "Nairobi", name: "Mövenpick Hotel & Residences Nairobi", meal: "B&B", stars: 4, image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=400&q=80" },
  { location: "Lake Naivasha", name: "Lake Naivasha Sopa Resort", meal: "Full Board", stars: 4, image: "https://images.unsplash.com/photo-1760044280686-c5bf1edf3cbb?w=400&q=80" },
  { location: "Masai Mara", name: "Sarova Mara Game Camp", meal: "Full Board", stars: 4, image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=400&q=80" },
  { location: "Central Serengeti", name: "Serengeti Serena Safari Lodge", meal: "Full Board", stars: 4, image: "https://images.unsplash.com/photo-1741850821150-58b56e0e6156?w=400&q=80" },
  { location: "Ngorongoro", name: "Ngorongoro Serena Safari Lodge", meal: "Full Board", stars: 4, image: "https://images.unsplash.com/photo-1534567110243-8875d64ca8ff?w=400&q=80" },
  { location: "Arusha", name: "Four Points by Sheraton Arusha", meal: "B&B", stars: 4, image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80" },
]

const INCLUSIONS = [
  "Airport Meet & Greet",
  "9 Nights Accommodation",
  "All Meals as per Itinerary",
  "Private 4x4 Safari Vehicle",
  "Professional English-speaking Guide",
  "Masai Mara & Serengeti Game Drives",
  "Ngorongoro Crater Game Drive",
  "Kenya–Tanzania Border Crossing Assistance",
  "Park Entry Fees",
  "Drinking Water During Safari",
  "All Applicable Taxes",
]

const EXCLUSIONS = [
  "International Flights",
  "Visa Fees (Kenya & Tanzania)",
  "Travel Insurance",
  "Personal Expenses",
  "Tips & Gratuities",
  "Optional Activities (Olduvai Gorge, Maasai Village Visits)",
  "Any Services Not Mentioned in Inclusions",
]

const TESTIMONIALS = [
  { text: "Combining Kenya and Tanzania in one trip was incredible. The Ngorongoro Crater alone was worth it.", name: "Rahul Mehta", place: "Mumbai" },
  { text: "Seamless border crossing, great guides on both sides. Highly recommended for a bigger safari.", name: "Priya Sharma", place: "Delhi" },
  { text: "Ten days flew by. Serengeti and the Mara back to back is an experience like no other.", name: "Amit Verma", place: "Bangalore" },
]

const FAQS = [
  {
    q: "Is this a private safari?",
    a: "Yes. This itinerary runs as a private safari for your group only — you will not be combined with other travellers you don't know. Your vehicle, guide and pace are entirely your own.",
  },
  {
    q: "Do I need separate visas for Kenya and Tanzania?",
    a: "Yes, Kenya and Tanzania each require their own entry visa or eTA, even though the itinerary crosses between them by land at Isebania. We provide visa assistance for both countries as part of your booking.",
  },
  {
    q: "Are flights included?",
    a: "No, international flights are not included in the package. This keeps things flexible since flight costs vary by departure city and season — we're happy to help you find the best fares separately.",
  },
  {
    q: "Which hotels will we stay at?",
    a: "The standard itinerary includes handpicked lodges and camps at each stop across both countries, as listed in the hotel plan. If you'd prefer a different category, the itinerary can be customised with other properties based on your preference and budget.",
  },
  {
    q: "Is the safari vehicle private?",
    a: "Yes. You get a private 4x4 safari vehicle with a dedicated driver-guide for your group throughout the trip, including the Kenya-to-Tanzania border crossing.",
  },
  {
    q: "What meals are included?",
    a: "Meals are included as specified in the itinerary for each day — generally Bed & Breakfast in Nairobi and Arusha, and Full Board at all safari lodges and camps in between.",
  },
  {
    q: "How does the border crossing at Isebania work?",
    a: "Your guide handles the logistics — you'll complete Kenyan exit immigration, cross the border on land, then complete Tanzanian entry immigration before continuing into Serengeti National Park, all as part of Day 5 of the itinerary.",
  },
  {
    q: "What is the best month to visit for this route?",
    a: "June to October is generally the best window for both countries — dry weather, easier wildlife spotting, and the Great Migration moving between the Mara and Serengeti during parts of this period.",
  },
  {
    q: "Can I customise the itinerary?",
    a: "Yes, absolutely. This 10-day route is a starting template — we can adjust the number of days, add Zanzibar or a coastal extension after Arusha, upgrade accommodation, or add activities like a hot air balloon safari or a Maasai village visit.",
  },
  {
    q: "What happens after I submit an enquiry?",
    a: "Our Safari Team will contact you directly — usually within a few hours — to understand your travel dates, group size and preferences, then send you a detailed, personalised quote and itinerary for your trip.",
  },
]

function buildWhatsAppUrl(data: Record<string, string>) {
  const lines = [
    "*New Kenya & Tanzania Safari Quote Request*",
    "Package: Kenya and Tanzania: Combining Two Safari Countries",
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

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "form_submit",
      form_name: "kenya_tanzania",
      page_path: window.location.pathname,
    })
  }

  return (
    <div id="safari-quote-form" className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-green-900 to-green-800 px-6 py-3 text-center">
        <h3 className="text-white font-extrabold text-base">PLAN YOUR KENYA & TANZANIA SAFARI</h3>
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
          <label htmlFor="kt-month" className="block text-gray-700 text-xs font-bold mb-1">Preferred Travel Month</label>
          <select id="kt-month" name="month" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-green-600">
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
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            <div>
              <label htmlFor="kt-adults" className="block text-gray-600 text-xs font-semibold mb-1">Adults</label>
              <select id="kt-adults" name="adults" defaultValue="2" className="w-full border border-gray-200 rounded-md px-2 py-2 text-sm focus:outline-none focus:border-green-600">
                {[...Array(9)].map((_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="kt-children" className="block text-gray-600 text-xs font-semibold mb-1">Children</label>
              <select id="kt-children" name="children" defaultValue="0" className="w-full border border-gray-200 rounded-md px-2 py-2 text-sm focus:outline-none focus:border-green-600">
                {[...Array(6)].map((_, i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="kt-infants" className="block text-gray-600 text-xs font-semibold mb-1">Infants</label>
              <select id="kt-infants" name="infants" defaultValue="0" className="w-full border border-gray-200 rounded-md px-2 py-2 text-sm focus:outline-none focus:border-green-600">
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

export default function KenyaTanzaniaLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showPhonePopup, setShowPhonePopup] = useState(false)

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative w-full min-h-[480px] sm:min-h-[380px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=80"
          alt="Savanna landscape with Kilimanjaro on the Kenya-Tanzania border"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_85%]"
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
            <p className="italic text-gray-700 mb-2">Wild by Nature, Unforgettable by Choice</p>
            <div className="flex items-center justify-between gap-3 mb-3 lg:block">
              <h1 className="leading-none lg:mb-3">
                <span className="block text-green-900 font-black text-4xl sm:text-6xl tracking-tight">KENYA &amp; TANZANIA</span>
                <span className="block text-orange-600 font-black text-4xl sm:text-6xl tracking-tight">SAFARI</span>
              </h1>
              <div className="lg:hidden flex-shrink-0 bg-white rounded-lg shadow-md px-3 py-2 text-center">
                <p className="text-gray-900 font-extrabold text-sm">4.8/5</p>
                <p className="text-amber-500 text-xs">★★★★★</p>
                <p className="text-gray-500 text-[10px] mt-1">500+<br />Happy Travellers</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-1">📍 Nairobi · Lake Naivasha · Masai Mara</p>
            <p className="text-gray-700 text-sm mb-4">Serengeti · Ngorongoro · Arusha</p>

            <div className="flex flex-wrap gap-4 text-gray-700 text-sm font-semibold mb-5">
              <span>📅 10 DAYS / 9 NIGHTS</span>
              <span>👥 GUIDED SAFARI EXPERIENCE · 2 COUNTRIES</span>
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
          <span className="border-b-2 border-yellow-500 pb-2">WHY CHOOSE THIS KENYA &amp; TANZANIA SAFARI?</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {[
            { icon: "📍", title: "2 Countries, 1 Trip", desc: "Kenya's Masai Mara and Tanzania's Serengeti & Ngorongoro in one seamless journey." },
            { icon: "🚙", title: "Private 4x4 Safari Vehicle", desc: "Comfortable & reliable private vehicle for your entire journey, border crossing included." },
            { icon: "🐾", title: "Big Five Wildlife", desc: "Spot Lions, Elephants, Rhinos, Leopards & Buffalo across both countries." },
            { icon: "🛏", title: "Handpicked Stays", desc: "Carefully selected lodges & camps at every stop." },
            { icon: "🎧", title: "End-to-End Support", desc: "We're with you from airport pickup to departure, including the border crossing." },
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
              <span className="border-b-2 border-yellow-500 pb-2">YOUR 10-DAY KENYA &amp; TANZANIA ITINERARY</span>
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
                    <p className="text-gray-500 text-xs">🛏 Overnight: {item.overnight}</p>
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
                      <p className="text-amber-400 text-sm">{"★".repeat(stay.stars)} <span className="text-gray-300 text-xs">· {stay.meal}</span></p>
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
              <span className="text-green-900">Plan Your </span><span className="text-amber-800">Kenya &amp; Tanzania Safari</span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center mt-3 mb-6">
              Tell us your travel month, departure city and number of travellers, and our travel experts will create a personalized two-country safari package based on your travel preferences.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white rounded-xl p-3 border border-[#E4DCC8] text-center">
                <div className="w-12 h-12 rounded-full bg-[#EFEBDD] flex items-center justify-center mx-auto mb-2"><MapPin className="w-5 h-5 text-green-900" /></div>
                <div className="flex items-center justify-center gap-1 mb-2">{Array.from({ length: 5 }).map((_, i) => (<span key={i} className="w-1 h-1 rounded-full bg-green-800" />))}</div>
                <p className="text-gray-900 font-bold text-xs leading-snug">Personalized 2-Country Itinerary</p>
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
                <p className="text-gray-900 font-bold text-xs leading-snug">Border Crossing Assistance</p>
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
          <Image src="https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?w=1600&q=80" alt="Kenya Tanzania sunset safari" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-extrabold text-lg mb-1">YOUR KENYA &amp; TANZANIA ADVENTURE STARTS HERE</p>
            <p className="text-gray-200 text-sm">10 Days / 9 Nights · Masai Mara · Serengeti · Ngorongoro</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => document.getElementById("safari-quote-form")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 hover:scale-105 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all uppercase tracking-wide min-w-[220px]"
            >
              GET MY SAFARI QUOTE
            </button>
            <a href={`https://wa.me/919667892504`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 hover:scale-105 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all uppercase tracking-wide min-w-[220px]">
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
