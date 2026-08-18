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
    route: "Nairobi to Lake Elementaita: Into the Rift Valley",
    overnight: "Lake Elementaita | Full Board",
    bullets: [
      "Depart Nairobi and drive towards Lake Elementaita, passing through the scenic landscapes of Kenya's Great Rift Valley.",
      "Arrive at the lake and settle into your accommodation, surrounded by open skies, tranquil waters and abundant birdlife.",
      "Enjoy the rest of the day at leisure, taking in the peaceful surroundings and views across the lake.",
    ],
    image: "/images/external/unsplash-174185082115.jpg",
  },
  {
    day: "Day 2",
    route: "Lake Elementaita: Lakes, Wildlife & Birdlife",
    overnight: "Lake Elementaita | Full Board",
    bullets: [
      "Enjoy a relaxed day around Lake Elementaita. Explore the Soysambu Conservancy, known for its wildlife and beautiful landscapes, or spend time birdwatching around the lake, where flamingos and other waterbirds can often be seen.",
      "Alternatively, take a visit towards Lake Nakuru for additional wildlife experiences.",
      "The day can be enjoyed at an unhurried pace, with time to relax and appreciate the Rift Valley scenery.",
    ],
    image: "/images/external/unsplash-154141477931.jpg",
  },
  {
    day: "Day 3",
    route: "Lake Elementaita to Maasai Mara: Into the Mara",
    overnight: "Masai Mara | Full Board",
    bullets: [
      "After breakfast, depart Lake Elementaita and continue south towards the legendary Maasai Mara, passing through changing landscapes and traditional Maasai country.",
      "Arrive at the Mara and settle into your accommodation before heading out on your first afternoon game drive.",
      "As the afternoon light softens, explore the plains in search of lions, elephants, giraffes, zebras, wildebeest and other wildlife.",
    ],
    image: "/images/external/unsplash-151681523156.jpg",
  },
  {
    day: "Day 4",
    route: "Maasai Mara: Full Day on the Plains",
    overnight: "Masai Mara | Full Board",
    bullets: [
      "Spend a full day exploring the Maasai Mara with morning and afternoon game drives accompanied by a Maasai guide.",
      "Discover the vast open savannahs and rich wildlife of the reserve, with excellent opportunities to encounter the Big Five and other plains animals.",
      "The day is dedicated to wildlife viewing, photography and experiencing the beauty of the Mara.",
    ],
    image: "/images/external/unsplash-172889137653.jpg",
  },
  {
    day: "Day 5",
    route: "Maasai Mara: Deeper Into the Reserve",
    overnight: "Masai Mara | Full Board",
    bullets: [
      "Set out for another full day of safari, venturing deeper into the Maasai Mara and exploring areas away from the main tracks.",
      "Enjoy a picnic lunch in the bush surrounded by the sounds and scenery of the African wilderness.",
      "Continue with game viewing through the afternoon, with opportunities to encounter predators, large herds and the diverse wildlife that makes the Mara so iconic.",
    ],
    image: "/images/external/unsplash-156410116053.jpg",
  },
  {
    day: "Day 6",
    route: "Maasai Mara to Nairobi to Home: Farewell to Kenya",
    overnight: "End of Unforgettable Journey",
    bullets: [
      "After breakfast, depart the Maasai Mara and drive back towards Nairobi, enjoying the changing scenery as you leave the safari landscapes behind.",
      "On arrival in Nairobi, continue to the airport for your onward international flight, bringing your memorable Kenya safari to an end.",
    ],
    image: "/images/external/unsplash-176455573546.jpg",
  },
]

const STAYS = [
  { location: "Lake Elementaita", name: "Lakeside safari lodge with Rift Valley views", image: "/images/external/unsplash-174185082115.jpg" },
  { location: "Maasai Mara", name: "Tented safari camp on the reserve's plains", image: "/images/external/unsplash-151681523156.jpg" },
]

const INCLUSIONS = [
  "Airport Meet & Greet",
  "5 Nights Accommodation",
  "All Meals on Safari",
  "Private 4x4 Safari Vehicle",
  "Professional English-speaking Guide",
  "Maasai Mara Game Drives",
  "Soysambu Conservancy Visit",
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

const FAQS = [
  {
    q: "Is this a private safari?",
    a: "Yes. This itinerary runs as a private safari for your group only — you will not be combined with other travellers you don't know. Your vehicle, guide and pace are entirely your own.",
  },
  {
    q: "Are flights included?",
    a: "No, international and domestic flights are not included in the package. Flight costs vary widely by departure city and season, so we're happy to help you find the best fares separately.",
  },
  {
    q: "Which lodges will we stay at?",
    a: "The itinerary includes a handpicked lakeside lodge at Lake Elementaita and a tented safari camp in the Maasai Mara. The itinerary can be customised with a different property category based on your preference.",
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
    a: "Yes, we provide visa assistance as part of your booking — including guidance on the Kenya eTA application process, required documents, and timelines, so you're not navigating it alone.",
  },
  {
    q: "Is 6 days enough time for a Kenya safari?",
    a: "Yes — this itinerary is designed to give you a genuine taste of the Rift Valley and the Maasai Mara in a shorter window, ideal if you're working with limited time but still want two full days of game drives in the Mara.",
  },
  {
    q: "How many people can travel together?",
    a: "This itinerary is designed for a minimum of 2 and a maximum of 7 travellers per vehicle. Larger groups can absolutely be accommodated — we'll arrange additional vehicles and guides so everyone travels comfortably together.",
  },
  {
    q: "Can I customise the itinerary?",
    a: "Yes, absolutely. This 6-day route is a starting template — we can adjust the number of days, swap destinations, upgrade accommodation, or rework the pace entirely to match how you like to travel.",
  },
  {
    q: "What happens after I submit an enquiry?",
    a: "Our Kenya Safari Team will contact you directly — usually within a few hours — to understand your travel dates, group size and any preferences, then send you a detailed, personalised itinerary for your trip.",
  },
]

function buildWhatsAppUrl(data: Record<string, string>) {
  const lines = [
    "*New Kenya Safari Quote Request*",
    "Package: Quick Kenya Safari Escape",
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
        <h3 className="text-white font-extrabold text-base">PLAN YOUR KENYA SAFARI</h3>
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
          <label htmlFor="quick-escape-month" className="block text-gray-700 text-xs font-bold mb-1">Preferred Travel Month</label>
          <select id="quick-escape-month" name="month" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-green-600">
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
              <label htmlFor="quick-escape-adults" className="block text-gray-500 text-[10px] mb-1">Adults</label>
              <select id="quick-escape-adults" name="adults" defaultValue="2" className="w-full border border-gray-200 rounded-md px-2 py-2 text-sm focus:outline-none focus:border-green-600">
                {[...Array(9)].map((_, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="quick-escape-children" className="block text-gray-500 text-[10px] mb-1">Children</label>
              <select id="quick-escape-children" name="children" defaultValue="0" className="w-full border border-gray-200 rounded-md px-2 py-2 text-sm focus:outline-none focus:border-green-600">
                {[...Array(6)].map((_, i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="quick-escape-infants" className="block text-gray-500 text-[10px] mb-1">Infants</label>
              <select id="quick-escape-infants" name="infants" defaultValue="0" className="w-full border border-gray-200 rounded-md px-2 py-2 text-sm focus:outline-none focus:border-green-600">
                {[...Array(4)].map((_, i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>
          </div>
        </div>
        <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-4 py-3.5 rounded-lg transition-colors shadow-md shadow-orange-600/30 flex items-center justify-center gap-2">
          GET MY SAFARI ITINERARY
        </button>
      </form>
    </div>
  )
}

export default function KenyaQuickEscapeLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showPhonePopup, setShowPhonePopup] = useState(false)

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative w-full min-h-[480px] sm:min-h-[380px] md:mt-[68px]">
        <Image
          src="/images/external/unsplash-savanna-landscape.jpg"
          alt="Sunrise over Lake Elementaita and the Maasai Mara"
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
                <span className="block text-green-900 font-black text-4xl sm:text-6xl tracking-tight">KENYA</span>
                <span className="block text-orange-600 font-black text-4xl sm:text-6xl tracking-tight">SAFARI</span>
              </h1>
            </div>
            <p className="text-gray-700 text-sm mb-1">📍 Lake Elementaita</p>
            <p className="text-gray-700 text-sm mb-4">Maasai Mara National Reserve</p>

            <div className="flex flex-wrap gap-4 text-gray-700 text-sm font-semibold mb-5">
              <span>📅 6 DAYS / 5 NIGHTS</span>
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
                GET MY SAFARI ITINERARY
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
          <span className="border-b-2 border-yellow-500 pb-2">WHY CHOOSE THIS KENYA SAFARI?</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {[
            { icon: "📍", title: "2 Iconic Destinations", desc: "Explore Lake Elementaita and the Maasai Mara." },
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
              <span className="border-b-2 border-yellow-500 pb-2">YOUR 6-DAY KENYA SAFARI ITINERARY</span>
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
              <span className="text-green-900">Plan Your </span><span className="text-amber-800">Kenya Safari Tour</span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center mt-3 mb-6">
              Tell us your travel month, departure city and number of travellers, and our travel experts will create a personalized Kenya safari itinerary based on your travel preferences.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white rounded-xl p-3 border border-[#E4DCC8] text-center">
                <div className="w-12 h-12 rounded-full bg-[#EFEBDD] flex items-center justify-center mx-auto mb-2"><MapPin className="w-5 h-5 text-green-900" /></div>
                <div className="flex items-center justify-center gap-1 mb-2">{Array.from({ length: 5 }).map((_, i) => (<span key={i} className="w-1 h-1 rounded-full bg-green-800" />))}</div>
                <p className="text-gray-900 font-bold text-xs leading-snug">Personalized Kenya Safari Itinerary</p>
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
          <Image src="/images/external/unsplash-175855836448.jpg" alt="Kenya sunset safari" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-extrabold text-lg mb-1">YOUR KENYA ADVENTURE STARTS HERE</p>
            <p className="text-gray-200 text-sm mb-1">6 Days / 5 Nights · Lake Elementaita · Maasai Mara</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => document.getElementById("safari-quote-form")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 hover:scale-105 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all uppercase tracking-wide min-w-[220px]"
            >
              GET MY SAFARI ITINERARY
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
