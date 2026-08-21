"use client"
import Image from "next/image"
import { useState } from "react"
import { MapPin, Car, TreePine, Headphones, Phone, MessageCircle } from "lucide-react"

const ANIMALS = [
  { name: "Lion", image: "/images/external/unsplash-169763833246.jpg" },
  { name: "Elephant", image: "/images/external/unsplash-167490907248.jpg" },
  { name: "Rhino", image: "/images/external/unsplash-154141477931.jpg" },
  { name: "Leopard", image: "/images/external/unsplash-175905564601.jpg" },
  { name: "Buffalo", image: "/images/external/unsplash-167243860516.jpg" },
  { name: "Giraffe", image: "/images/external/unsplash-1547721064-d.jpg" },
]

const ITINERARY = [
  {
    day: "Day 1",
    route: "Arrival in Nairobi",
    overnight: "Nairobi | Movenpick Hotel | Bed & Breakfast",
    bullets: [
      "Arrive in Nairobi and meet your representative at the airport. Transfer to your hotel and check in.",
      "Spend the rest of the day at leisure and relax after your international journey.",
    ],
    image: "/images/external/unsplash-176455573546.jpg",
  },
  {
    day: "Day 2",
    route: "Nairobi to Lake Nakuru",
    overnight: "Lake Nakuru | Lake Nakuru Sopa Lodge | Full Board",
    bullets: [
      "After breakfast, depart Nairobi and drive towards the Great Rift Valley and Lake Nakuru National Park.",
      "Upon arrival, check in to your lodge and enjoy lunch. Later, head out for an afternoon game drive in Lake Nakuru National Park, known for its diverse wildlife and scenic landscapes.",
    ],
    image: "/images/external/unsplash-154141477931.jpg",
  },
  {
    day: "Day 3",
    route: "Lake Nakuru: Full Day",
    overnight: "Lake Nakuru | Lake Nakuru Sopa Lodge | Full Board",
    bullets: [
      "After breakfast, enjoy another day exploring the Lake Nakuru region.",
      "Head out for a game drive through the national park and enjoy opportunities to spot rhinos, buffaloes, giraffes, zebras, lions and a variety of birdlife.",
      "Spend the evening relaxing at the lodge.",
    ],
    image: "/images/external/unsplash-174185082115.jpg",
  },
  {
    day: "Day 4",
    route: "Lake Nakuru to Ol Pejeta",
    overnight: "Ol Pejeta | Jambo Mutara Camp | Full Board",
    bullets: [
      "After breakfast, continue your safari journey towards Ol-Pejeta Conservancy.",
      "Enjoy a game drive through the conservancy and visit the Sweetwaters Chimpanzee Sanctuary and Rhino Sanctuary, learning about the region's important wildlife conservation efforts.",
    ],
    image: "/images/external/unsplash-167490907248.jpg",
  },
  {
    day: "Day 5",
    route: "Ol Pejeta to Masai Mara",
    overnight: "Masai Mara | Fairmont Mara Safari Club | Full Board",
    bullets: [
      "After breakfast, transfer to the airstrip for your flight to Masai Mara.",
      "Upon arrival, transfer to your camp and enjoy lunch. Later, head out for your first afternoon game drive in the Masai Mara National Reserve.",
    ],
    image: "/images/external/unsplash-151681523156.jpg",
  },
  {
    day: "Day 6",
    route: "Masai Mara: Full Day Safari",
    overnight: "Masai Mara | Fairmont Mara Safari Club | Full Board",
    bullets: [
      "Enjoy a full day of safari exploration in the Masai Mara National Reserve.",
      "With a picnic lunch, spend the day exploring the reserve and looking for the Big Five and other wildlife.",
    ],
    image: "/images/external/unsplash-savanna-landscape.jpg",
  },
  {
    day: "Day 7",
    route: "Masai Mara: Game Drive & Maasai Culture",
    overnight: "Masai Mara | Fairmont Mara Safari Club | Full Board",
    bullets: [
      "Enjoy another exciting day in the Masai Mara.",
      "Head out for a game drive across the reserve. Later, enjoy a visit to a Maasai village to experience the traditional culture, lifestyle and customs of the Maasai people.",
    ],
    image: "/images/external/unsplash-156410116053.jpg",
  },
  {
    day: "Day 8",
    route: "Masai Mara to Serengeti",
    overnight: "Serengeti | Serengeti Serena Lodge | Full Board",
    bullets: [
      "After breakfast, transfer to the airstrip for your flight from Masai Mara to Serengeti.",
      "Upon arrival in Tanzania, continue towards your lodge and enjoy a game drive in Serengeti National Park.",
    ],
    image: "/images/external/unsplash-172889137653.jpg",
  },
  {
    day: "Day 9",
    route: "Serengeti: Full Day Safari",
    overnight: "Serengeti | Serengeti Serena Lodge | Full Board",
    bullets: [
      "Spend the day exploring the Serengeti National Park.",
      "Enjoy game drives across the vast plains with opportunities to spot lions, leopards, cheetahs, elephants, giraffes, zebras, wildebeest and other wildlife.",
    ],
    image: "/images/external/unsplash-169763833246.jpg",
  },
  {
    day: "Day 10",
    route: "Serengeti to Ngorongoro",
    overnight: "Ngorongoro | Ngorongoro Serena Lodge | Full Board",
    bullets: [
      "After breakfast, enjoy a game drive through the Serengeti as you make your way towards Ngorongoro.",
      "Enjoy a picnic lunch en route before continuing to your lodge.",
    ],
    image: "/images/external/unsplash-175905564601.jpg",
  },
  {
    day: "Day 11",
    route: "Ngorongoro Crater: Full Day Safari",
    overnight: "Ngorongoro | Ngorongoro Serena Lodge | Full Board",
    bullets: [
      "After breakfast, descend into the spectacular Ngorongoro Crater for a full-day game drive.",
      "Enjoy a picnic lunch while exploring the crater and its extraordinary concentration of wildlife.",
    ],
    image: "/images/external/unsplash-167243860516.jpg",
  },
  {
    day: "Day 12",
    route: "Ngorongoro to Lake Manyara",
    overnight: "Lake Manyara | Lake Manyara Serena Lodge | Full Board",
    bullets: [
      "After breakfast, depart for Lake Manyara.",
      "In the evening, enjoy a game drive through Lake Manyara National Park, known for its diverse landscapes, birdlife and wildlife.",
    ],
    image: "/images/external/unsplash-1547721064-d.jpg",
  },
  {
    day: "Day 13",
    route: "Lake Manyara to Arusha",
    overnight: "Arusha | Hotel To Be Confirmed | Full Board",
    bullets: [
      "After breakfast, depart Lake Manyara and travel towards Arusha.",
      "Arrive in Arusha and check in to your hotel. Spend the remainder of the day at leisure.",
    ],
    image: "/images/external/unsplash-176685126514.jpg",
  },
  {
    day: "Day 14",
    route: "Arusha: Departure",
    overnight: "End of Unforgettable Journey",
    bullets: [
      "After breakfast, enjoy some leisure time in Arusha.",
      "Later, transfer to Kilimanjaro International Airport for your onward flight.",
    ],
    image: "/images/external/unsplash-175855836448.jpg",
  },
]

const STAYS = [
  { location: "Nairobi", name: "Movenpick Hotel — 1 Night", image: "/images/external/unsplash-176455573546.jpg" },
  { location: "Lake Nakuru", name: "Lake Nakuru Sopa Lodge — 2 Nights", image: "/images/external/unsplash-154141477931.jpg" },
  { location: "Ol Pejeta", name: "Jambo Mutara Camp — 1 Night", image: "/images/external/unsplash-167490907248.jpg" },
  { location: "Masai Mara", name: "Fairmont Mara Safari Club — 3 Nights", image: "/images/external/unsplash-151681523156.jpg" },
  { location: "Serengeti", name: "Serengeti Serena Lodge — 2 Nights", image: "/images/external/unsplash-172889137653.jpg" },
  { location: "Ngorongoro", name: "Ngorongoro Serena Lodge — 2 Nights", image: "/images/external/unsplash-167243860516.jpg" },
  { location: "Lake Manyara", name: "Lake Manyara Serena Lodge — 1 Night", image: "/images/external/unsplash-1547721064-d.jpg" },
  { location: "Arusha", name: "Hotel To Be Confirmed — 1 Night", image: "/images/external/unsplash-176685126514.jpg" },
]

const INCLUSIONS = [
  "Airport Meet & Greet (Nairobi & Kilimanjaro)",
  "13 Nights Accommodation",
  "All Meals as per Itinerary (Bed & Breakfast, Full Board)",
  "Private 4x4 Safari Vehicle in Kenya & Tanzania",
  "Professional English-speaking Driver-Guide",
  "Masai Mara to Serengeti Flight Transfer",
  "Ol Pejeta, Masai Mara, Serengeti, Ngorongoro & Lake Manyara Game Drives",
  "Sweetwaters Chimpanzee & Rhino Sanctuary Visit",
  "Maasai Village Cultural Visit",
  "Park Entry Fees",
  "Drinking Water During Safari",
  "All Applicable Taxes",
]

const EXCLUSIONS = [
  "International Flights",
  "Kenya & Tanzania Visa Fees",
  "Travel Insurance",
  "Personal Expenses",
  "Tips & Gratuities",
  "Any Services Not Mentioned in Inclusions",
]

const FAQS = [
  {
    q: "Is this a private safari across both countries?",
    a: "Yes. This itinerary runs as a private safari for your group only, in both Kenya and Tanzania — you will not be combined with other travellers you don't know. Your vehicle, guide and pace are entirely your own in each country.",
  },
  {
    q: "Are flights included?",
    a: "International flights are not included. The internal flight transfer from Masai Mara to Serengeti is included as part of the itinerary, since it's essential for crossing between the two countries efficiently.",
  },
  {
    q: "Do I need two separate visas for Kenya and Tanzania?",
    a: "Yes, Kenya and Tanzania each require their own entry visa or eTA. We provide visa assistance for both as part of your booking, including guidance on the application process, required documents, and timelines.",
  },
  {
    q: "Which lodges will we stay at?",
    a: "Movenpick Hotel in Nairobi, Lake Nakuru Sopa Lodge, Jambo Mutara Camp at Ol Pejeta, Fairmont Mara Safari Club in the Masai Mara, Serengeti Serena Lodge, Ngorongoro Serena Lodge, Lake Manyara Serena Lodge, and a hotel to be confirmed in Arusha. The itinerary can be customised with different properties based on your preference.",
  },
  {
    q: "How do you get from Masai Mara to Serengeti?",
    a: "By a short scheduled flight between the two reserves, which is included in the itinerary — this is the standard and most efficient way to cross between the Kenya and Tanzania safari circuits.",
  },
  {
    q: "Is the safari vehicle private in both countries?",
    a: "Yes. You get a private 4x4 safari vehicle with a dedicated driver-guide in Kenya, and a separate private vehicle and guide once you cross into Tanzania — neither is shared with other travellers.",
  },
  {
    q: "What is the best month to visit for this combined itinerary?",
    a: "June to October is generally the best window for both Kenya and Tanzania — dry weather, easier wildlife spotting, and the Great Migration moving between the Masai Mara and Serengeti during parts of this period.",
  },
  {
    q: "How many people can travel together?",
    a: "This itinerary is designed for a minimum of 2 and a maximum of 7 travellers per vehicle. Larger groups can absolutely be accommodated — we'll arrange additional vehicles and guides so everyone travels comfortably together.",
  },
  {
    q: "Can I customise the itinerary?",
    a: "Yes, absolutely. This 14-day route is a starting template — we can adjust the number of days, swap destinations, upgrade accommodation, or rework the pace entirely to match how you like to travel.",
  },
  {
    q: "What happens after I submit an enquiry?",
    a: "Our Kenya & Tanzania Safari Team will contact you directly — usually within a few hours — to understand your travel dates, group size and any preferences, then send you a detailed, personalised itinerary for your trip.",
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
      form_name: "kenya_tanzania_combined",
      page_path: window.location.pathname,
    })
  }

  return (
    <div id="safari-quote-form" className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-green-900 to-green-800 px-6 py-3 text-center">
        <h3 className="text-white font-extrabold text-base">PLAN YOUR KENYA &amp; TANZANIA SAFARI</h3>
        <p className="text-green-100 text-xs">Get your personalised itinerary in minutes</p>
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
          <label htmlFor="kt-combined-month" className="block text-gray-700 text-xs font-bold mb-1">Preferred Travel Month</label>
          <select id="kt-combined-month" name="month" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-green-600">
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
              <label htmlFor="kt-combined-adults" className="block text-gray-500 text-[10px] mb-1">Adults</label>
              <select id="kt-combined-adults" name="adults" defaultValue="2" className="w-full border border-gray-200 rounded-md px-2 py-2 text-sm focus:outline-none focus:border-green-600">
                {[...Array(9)].map((_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="kt-combined-children" className="block text-gray-500 text-[10px] mb-1">Children</label>
              <select id="kt-combined-children" name="children" defaultValue="0" className="w-full border border-gray-200 rounded-md px-2 py-2 text-sm focus:outline-none focus:border-green-600">
                {[...Array(6)].map((_, i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="kt-combined-infants" className="block text-gray-500 text-[10px] mb-1">Infants</label>
              <select id="kt-combined-infants" name="infants" defaultValue="0" className="w-full border border-gray-200 rounded-md px-2 py-2 text-sm focus:outline-none focus:border-green-600">
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

export default function KenyaTanzaniaCombinedLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showPhonePopup, setShowPhonePopup] = useState(false)

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative w-full min-h-[480px] sm:min-h-[380px] md:mt-[68px]">
        <Image
          src="/images/external/unsplash-savanna-landscape.jpg"
          alt="Vast plains of the Serengeti and Masai Mara ecosystem"
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

          <div className="max-w-2xl">
            <p className="italic text-gray-700 mb-2">Wild by Nature, Unforgettable by Choice</p>
            <div className="flex items-center justify-between gap-3 mb-3 lg:block">
              <h1 className="leading-none lg:mb-3">
                <span className="block text-green-900 font-black text-4xl sm:text-6xl tracking-tight">KENYA &amp;</span>
                <span className="block text-orange-600 font-black text-4xl sm:text-6xl tracking-tight">TANZANIA</span>
              </h1>
            </div>
            <p className="text-gray-700 text-sm mb-1">📍 Nairobi · Lake Nakuru · Ol Pejeta · Masai Mara</p>
            <p className="text-gray-700 text-sm mb-4">Serengeti · Ngorongoro · Lake Manyara · Arusha</p>

            <div className="flex flex-wrap gap-4 text-gray-700 text-sm font-semibold mb-5">
              <span>📅 14 DAYS / 13 NIGHTS</span>
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
          <span className="border-b-2 border-yellow-500 pb-2">WHY CHOOSE THIS KENYA &amp; TANZANIA SAFARI?</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {[
            { icon: "📍", title: "Two Safari Countries", desc: "Cross seamlessly between Kenya's Masai Mara and Tanzania's Serengeti ecosystem." },
            { icon: "🚙", title: "Private 4x4 Vehicles", desc: "Dedicated private vehicles and guides in both countries." },
            { icon: "🐾", title: "Big Five Wildlife", desc: "Spot Lions, Elephants, Rhinos, Leopards & Buffalo across two reserves." },
            { icon: "🛏", title: "Handpicked Stays", desc: "Carefully selected lodges & camps for the best experience throughout." },
            { icon: "🎧", title: "End-to-End Support", desc: "We're with you from airport pickup to final departure." },
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
              <span className="border-b-2 border-yellow-500 pb-2">YOUR 14-DAY KENYA &amp; TANZANIA SAFARI ITINERARY</span>
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
              Tell us your travel month, departure city and number of travellers, and our travel experts will create a personalized Kenya &amp; Tanzania safari itinerary based on your travel preferences.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white rounded-xl p-3 border border-[#E4DCC8] text-center">
                <div className="w-12 h-12 rounded-full bg-[#EFEBDD] flex items-center justify-center mx-auto mb-2"><MapPin className="w-5 h-5 text-green-900" /></div>
                <div className="flex items-center justify-center gap-1 mb-2">{Array.from({ length: 5 }).map((_, i) => (<span key={i} className="w-1 h-1 rounded-full bg-green-800" />))}</div>
                <p className="text-gray-900 font-bold text-xs leading-snug">Personalized Kenya &amp; Tanzania Itinerary</p>
              </div>
              <div className="bg-white rounded-xl p-3 border border-[#E4DCC8] text-center">
                <div className="w-12 h-12 rounded-full bg-[#EFEBDD] flex items-center justify-center mx-auto mb-2"><Car className="w-5 h-5 text-green-900" /></div>
                <div className="flex items-center justify-center gap-1 mb-2">{Array.from({ length: 5 }).map((_, i) => (<span key={i} className="w-1 h-1 rounded-full bg-green-800" />))}</div>
                <p className="text-gray-900 font-bold text-xs leading-snug">Private 4×4 Vehicles in Both Countries</p>
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
          <Image src="/images/external/unsplash-175855836448.jpg" alt="Kenya and Tanzania sunset safari" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-extrabold text-lg mb-1">YOUR KENYA &amp; TANZANIA ADVENTURE STARTS HERE</p>
            <p className="text-gray-200 text-sm mb-1">14 Days / 13 Nights · Masai Mara · Serengeti · Ngorongoro</p>
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
