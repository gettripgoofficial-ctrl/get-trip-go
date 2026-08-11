"use client"
import Image from "next/image"
import { useState } from "react"
import { Phone, MessageCircle, MapPin, Car, TreePine, Headphones } from "lucide-react"

const ANIMALS = [
  { name: "Lion", image: "https://images.unsplash.com/photo-1697638332466-16f48f835b96?w=300&q=80" },
  { name: "Elephant", image: "https://images.unsplash.com/photo-1674909072480-ad551618b63e?w=300&q=80" },
  { name: "Rhino", image: "https://images.unsplash.com/photo-1541414779316-956a5084c0d4?w=300&q=80" },
  { name: "Leopard", image: "https://images.unsplash.com/photo-1759055646019-e076c6482ed1?w=300&q=80" },
  { name: "Buffalo", image: "https://images.unsplash.com/photo-1672438605161-22d8c2912054?w=300&q=80" },
  { name: "Dolphin", image: "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=300&q=80" },
]

const ITINERARY = [
  {
    day: "Day 1",
    route: "Arrival in Nairobi",
    overnight: "Tamarind Tree Hotel, Nairobi | Bed & Breakfast",
    bullets: [
      "Arrive in Nairobi and meet your safari representative.",
      "Transfer to your hotel and relax after your international journey.",
    ],
    image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=700&q=80",
  },
  {
    day: "Day 2",
    route: "Nairobi to Ol Pejeta Conservancy",
    overnight: "Sweetwaters Serena Camp, Ol Pejeta | Full Board",
    bullets: [
      "After breakfast, depart Nairobi and drive towards Ol Pejeta Conservancy, located in the foothills of Mount Kenya.",
      "Enjoy an afternoon game drive through the conservancy, with opportunities to see rhinos, elephants, lions, giraffes and other wildlife.",
    ],
    image: "/images/external/unsplash-black-rhino.jpg",
  },
  {
    day: "Day 3",
    route: "Ol Pejeta to Lake Nakuru",
    overnight: "Lake Nakuru Sopa Lodge | Full Board",
    bullets: [
      "After breakfast, depart for Lake Nakuru National Park.",
      "Enjoy a scenic drive through the Great Rift Valley before arriving at your lodge. Later, head out for an afternoon game drive in search of rhinos, buffaloes, giraffes, zebras and other wildlife.",
    ],
    image: "/images/external/unsplash-1549366021-9.jpg",
  },
  {
    day: "Day 4",
    route: "Lake Nakuru to Masai Mara",
    overnight: "Fairmont Mara Safari Club | Full Board",
    bullets: [
      "After breakfast, drive towards the legendary Masai Mara National Reserve.",
      "Arrive at your lodge in time for lunch, followed by an afternoon game drive across the golden savannah.",
    ],
    image: "/images/external/unsplash-savanna-landscape.jpg",
  },
  {
    day: "Day 5",
    route: "Masai Mara — Full Day Safari",
    overnight: "Fairmont Mara Safari Club | Full Board",
    bullets: [
      "Enjoy a full day exploring the Masai Mara National Reserve.",
      "With a picnic lunch, venture deeper into the reserve in search of the Big Five and other wildlife. Depending on the season, you may also witness the spectacular Great Migration.",
    ],
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=700&q=80",
  },
  {
    day: "Day 6",
    route: "Masai Mara — Nairobi — Diani Beach",
    overnight: "Baobab Beach Resort & Spa, Diani | Half Board",
    bullets: [
      "After breakfast, depart Masai Mara and return to Nairobi.",
      "Continue your journey to Kenya's spectacular Indian Ocean coast, arriving in Diani Beach.",
      "Check in to your beach resort and spend the evening relaxing by the ocean.",
    ],
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&q=80",
  },
  {
    day: "Day 7",
    route: "Diani Beach — Leisure",
    overnight: "Baobab Beach Resort & Spa, Diani | Half Board",
    bullets: [
      "Enjoy a full day at leisure on the beautiful Diani Beach.",
      "Relax on the white-sand beach, enjoy the resort facilities or choose from optional activities such as a marine excursion, snorkeling, diving or a traditional dhow cruise.",
    ],
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=700&q=80",
  },
  {
    day: "Day 8",
    route: "Diani Beach — Leisure",
    overnight: "Baobab Beach Resort & Spa, Diani | Half Board",
    bullets: [
      "Another relaxing day on the Kenyan coast.",
      "Spend the day enjoying the tropical surroundings or exploring the coastal attractions around Diani.",
    ],
    image: "https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=700&q=80",
  },
  {
    day: "Day 9",
    route: "Diani Beach — Leisure",
    overnight: "Baobab Beach Resort & Spa, Diani | Half Board",
    bullets: [
      "Enjoy your final full day beside the Indian Ocean.",
      "Relax at the resort, enjoy the beach and take in the beautiful coastal atmosphere before your departure the following day.",
    ],
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=700&q=80",
  },
  {
    day: "Day 10",
    route: "Diani Beach — Departure",
    overnight: "End of Unforgettable Journey",
    bullets: [
      "After breakfast, check out from the resort.",
      "Transfer to the airport for your onward flight, taking home unforgettable memories of Kenya's wildlife, landscapes and Indian Ocean coastline.",
    ],
    image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=700&q=80",
  },
]

const STAYS = [
  {
    location: "Nairobi",
    name: "Tamarind Tree Hotel",
    stars: 4,
    rating: 4.2,
    tripadvisorUrl: "https://www.tripadvisor.in/",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80",
  },
  {
    location: "Ol Pejeta",
    name: "Sweetwaters Serena Camp",
    stars: 4,
    rating: 4.4,
    tripadvisorUrl: "https://www.tripadvisor.in/",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=400&q=80",
  },
  {
    location: "Lake Nakuru",
    name: "Lake Nakuru Sopa Lodge",
    stars: 4,
    rating: 4.1,
    tripadvisorUrl: "https://www.tripadvisor.in/",
    image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=400&q=80",
  },
  {
    location: "Masai Mara",
    name: "Fairmont Mara Safari Club",
    stars: 5,
    rating: 4.6,
    tripadvisorUrl: "https://www.tripadvisor.in/",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80",
  },
  {
    location: "Diani Beach",
    name: "Baobab Beach Resort & Spa",
    stars: 4,
    rating: 4.3,
    tripadvisorUrl: "https://www.tripadvisor.in/",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=400&q=80",
  },
]

const INCLUSIONS = [
  "Airport Meet & Greet",
  "9 Nights Accommodation",
  "Meals as per Itinerary",
  "Private 4x4 Safari Vehicle",
  "Professional English-speaking Guide",
  "Domestic Flight or Road Transfer to Diani",
  "Park Entry Fees",
  "Drinking Water During Safari",
  "All Applicable Taxes",
]

const EXCLUSIONS = [
  "International Flights",
  "Visa Fees",
  "Travel Insurance",
  "Optional Marine Excursions & Water Sports",
  "Personal Expenses",
  "Tips & Gratuities",
  "Any Services Not Mentioned in Inclusions",
]

const TESTIMONIALS = [
  { text: "The perfect mix of safari and beach! Ol Pejeta and Masai Mara were incredible, and Diani was the perfect way to unwind after.", name: "Rohan Kapoor", place: "Mumbai" },
  { text: "Everything was seamless, from the game drives to the beach resort. Highly recommend this combination.", name: "Sneha Iyer", place: "Bangalore" },
  { text: "Our guide was excellent throughout the safari leg, and the coast was pure relaxation. A trip we'll never forget.", name: "Karan Malhotra", place: "Delhi" },
]

const FAQS = [
  {
    q: "Is this a private safari?",
    a: "Yes. This itinerary runs as a private safari for your group only — you will not be combined with other travellers you don't know. Your vehicle, guide and pace are entirely your own for the safari portion of the trip.",
  },
  {
    q: "How do we get from Masai Mara to Diani Beach?",
    a: "This is typically arranged via a road transfer back to Nairobi followed by a domestic flight to the coast, or a direct connecting flight where available — we'll confirm the most efficient option based on your dates and flight availability.",
  },
  {
    q: "Are flights included?",
    a: "International flights are not included. The domestic transfer between the safari circuit and Diani Beach is included as part of the package.",
  },
  {
    q: "What's the difference between Ol Pejeta and Masai Mara?",
    a: "Ol Pejeta is a private conservancy known for rhino conservation, including the last northern white rhinos, and generally has fewer vehicles per sighting. Masai Mara is Kenya's most famous reserve, known for its sheer density of wildlife and, in season, the Great Migration.",
  },
  {
    q: "What activities are available at Diani Beach?",
    a: "Diani offers optional marine excursions, snorkeling, scuba diving, and traditional dhow sailing cruises, alongside simply relaxing on the white-sand beach. These activities are not included in the base package but can be added on.",
  },
  {
    q: "What is the best month to visit for this itinerary?",
    a: "June to October offers the best wildlife viewing and driest weather, including the Great Migration in the Mara from around July. The Diani coast is pleasant most of the year, though it's worth avoiding the long rains in April-May for the best beach weather.",
  },
  {
    q: "Can I customise the number of days at the beach or on safari?",
    a: "Yes, absolutely. This 10-day route is a starting template — we can extend or shorten either the safari or beach portion, add Zanzibar as an extension, upgrade accommodation, or rework the pace entirely to match how you like to travel.",
  },
  {
    q: "What happens after I submit an enquiry?",
    a: "Our Kenya Safari Team will contact you directly — usually within a few hours — to understand your travel dates, group size and any preferences, then send you a detailed, personalised quote and itinerary for your trip.",
  },
]

function buildWhatsAppUrl(data: Record<string, string>) {
  const lines = [
    "*New Kenya Safari + Beach Quote Request*",
    "Package: Highlands to the Indian Ocean - Combining Safari and Beach",
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
        <h3 className="text-white font-extrabold text-base">PLAN YOUR SAFARI & BEACH TRIP</h3>
        <p className="text-green-100 text-xs">Get your personalised quote in minutes</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 p-6">
        <div>
          <label className="block text-gray-700 text-xs font-bold mb-1">Full Name</label>
          <input aria-label="Enter your name" name="name" required type="text" placeholder="Enter your name" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-green-600" />
        </div>
        <div>
          <label className="block text-gray-700 text-xs font-bold mb-1">WhatsApp/ Phone</label>
          <input aria-label="Enter your number" name="phone" required type="tel" placeholder="Enter your number" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-green-600" />
        </div>
        <div>
          <label className="block text-gray-700 text-xs font-bold mb-1">Email</label>
          <input aria-label="Enter your email" name="email" type="email" placeholder="Enter your email" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-green-600" />
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
          <label className="block text-gray-700 text-xs font-bold mb-1">Departure City</label>
          <input aria-label="e.g. Delhi, Mumbai, Bangalore" name="departureCity" type="text" placeholder="e.g. Delhi, Mumbai, Bangalore" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-green-600" />
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
        <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-4 py-3.5 rounded-lg transition-colors shadow-md shadow-orange-600/30 flex items-center justify-center gap-2">
          GET MY SAFARI QUOTE
        </button>
      </form>
    </div>
  )
}

export default function KenyaHighlandsBeachLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showPhonePopup, setShowPhonePopup] = useState(false)

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative w-full min-h-[480px] sm:min-h-[380px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&q=80"
          alt="Kenya safari meets the Indian Ocean coastline at Diani Beach"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_60%]"
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
            <p className="italic text-gray-700 mb-2">Wild by Nature, Unforgettable by the Sea</p>
            <div className="flex items-center justify-between gap-3 mb-3 lg:block">
              <h1 className="leading-none lg:mb-3">
                <span className="block text-green-900 font-black text-4xl sm:text-6xl tracking-tight">HIGHLANDS</span>
                <span className="block text-orange-600 font-black text-4xl sm:text-6xl tracking-tight">TO THE COAST</span>
              </h1>
              <div className="lg:hidden flex-shrink-0 bg-white rounded-lg shadow-md px-3 py-2 text-center">
                <p className="text-gray-900 font-extrabold text-sm">4.8/5</p>
                <p className="text-amber-500 text-xs">★★★★★</p>
                <p className="text-gray-500 text-[10px] mt-1">500+<br />Happy Travellers</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-1">📍 Ol Pejeta · Lake Nakuru · Masai Mara</p>
            <p className="text-gray-700 text-sm mb-4">Diani Beach, Indian Ocean</p>

            <div className="flex flex-wrap gap-4 text-gray-700 text-sm font-semibold mb-5">
              <span>📅 10 DAYS / 9 NIGHTS</span>
              <span>👥 SAFARI + BEACH EXPERIENCE</span>
            </div>

            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Starting from</p>
            <p className="text-orange-600 font-black text-4xl mb-1">
              ₹2,19,999<span className="text-gray-500 font-normal text-base"> / person</span>
            </p>
            <p className="text-gray-500 text-xs mb-5">Flights Optional · All Taxes Included</p>

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
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowPhonePopup(!showPhonePopup)}
                  className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold text-sm px-4 lg:px-5 py-3 rounded-md flex items-center gap-2 transition-colors whitespace-nowrap"
                >
                  📞 TALK TO SAFARI EXPERT
                </button>
                {showPhonePopup && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg px-4 py-3 whitespace-nowrap z-10">
                    <p className="text-gray-500 text-[11px] mb-1">Call us directly</p>
                    <a href="tel:+919667892504" className="text-green-800 font-bold text-sm">
                      +91 96 6789 2504
                    </a>
                  </div>
                )}
              </div>
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
          <span className="border-b-2 border-yellow-500 pb-2">WHY CHOOSE THIS SAFARI & BEACH JOURNEY?</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {[
            { icon: "📍", title: "4 Iconic Destinations", desc: "Ol Pejeta, Lake Nakuru, Masai Mara and Diani Beach." },
            { icon: "🚙", title: "Private 4x4 Safari Vehicle", desc: "Comfortable & reliable private vehicle throughout the safari." },
            { icon: "🐾", title: "Big Five Wildlife", desc: "Spot Lions, Elephants, Rhinos, Leopards & Buffalo." },
            { icon: "🏖", title: "4 Nights on the Coast", desc: "Unwind on Diani's white-sand beaches after the safari." },
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
          <span className="border-b-2 border-yellow-500 pb-2">FROM SAVANNAH WILDLIFE TO OCEAN LIFE</span>
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
              <span className="border-b-2 border-yellow-500 pb-2">YOUR 10-DAY SAFARI & BEACH ITINERARY</span>
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
                    <p className="text-gray-400 text-xs">🛏 {item.overnight}</p>
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
              <span className="text-green-900">Plan Your </span><span className="text-amber-800">Safari &amp; Beach Trip</span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center mt-3 mb-6">
              Tell us your travel month, departure city and number of travellers, and our travel experts will create a personalized safari and beach package based on your travel preferences.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white rounded-xl p-3 border border-[#E4DCC8] text-center">
                <div className="w-12 h-12 rounded-full bg-[#EFEBDD] flex items-center justify-center mx-auto mb-2"><MapPin className="w-5 h-5 text-green-900" /></div>
                <div className="flex items-center justify-center gap-1 mb-2">{Array.from({ length: 5 }).map((_, i) => (<span key={i} className="w-1 h-1 rounded-full bg-green-800" />))}</div>
                <p className="text-gray-900 font-bold text-xs leading-snug">Personalized Safari &amp; Beach Itinerary</p>
              </div>
              <div className="bg-white rounded-xl p-3 border border-[#E4DCC8] text-center">
                <div className="w-12 h-12 rounded-full bg-[#EFEBDD] flex items-center justify-center mx-auto mb-2"><Car className="w-5 h-5 text-green-900" /></div>
                <div className="flex items-center justify-center gap-1 mb-2">{Array.from({ length: 5 }).map((_, i) => (<span key={i} className="w-1 h-1 rounded-full bg-green-800" />))}</div>
                <p className="text-gray-900 font-bold text-xs leading-snug">Private 4×4 Safari Vehicle</p>
              </div>
              <div className="bg-white rounded-xl p-3 border border-[#E4DCC8] text-center">
                <div className="w-12 h-12 rounded-full bg-[#EFEBDD] flex items-center justify-center mx-auto mb-2"><TreePine className="w-5 h-5 text-green-900" /></div>
                <div className="flex items-center justify-center gap-1 mb-2">{Array.from({ length: 5 }).map((_, i) => (<span key={i} className="w-1 h-1 rounded-full bg-green-800" />))}</div>
                <p className="text-gray-900 font-bold text-xs leading-snug">Handpicked Lodges &amp; Beach Resort</p>
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
          <Image src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1600&q=80" alt="Diani Beach sunset" fill className="object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-extrabold text-lg mb-1">YOUR SAFARI & BEACH ADVENTURE STARTS HERE</p>
            <p className="text-gray-200 text-sm mb-1">10 Days / 9 Nights · Masai Mara · Lake Nakuru · Ol Pejeta · Diani Beach</p>
            <p className="text-amber-400 font-bold">FROM ₹2,19,999 <span className="text-gray-300 font-normal text-xs">/ person</span></p>
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
