"use client"
import Image from "next/image"
import { useState } from "react"
import { MapPin, Car, TreePine, Headphones, Users, Phone, MessageCircle, ShieldCheck, Binoculars, Award, Heart, Star } from "lucide-react"

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
    route: "Nairobi to Lake Naivasha",
    overnight: "Naivasha | Full Board",
    bullets: [
      "Arrive at Nairobi International Airport, where you will meet our representative and drive to Lake Naivasha, a beautiful freshwater lake in the Great Rift Valley.",
      "Check in and enjoy lunch before an afternoon boat ride on the lake, with opportunities to see hippos, pelicans, African fish eagles and other birdlife.",
      "Return to the lodge for dinner and overnight stay.",
    ],
    image: "https://images.unsplash.com/photo-1760044280686-c5bf1edf3cbb?w=700&q=80",
  },
  {
    day: "Day 2",
    route: "Lake Naivasha to Lake Nakuru National Park",
    overnight: "Nakuru | Full Board",
    bullets: [
      "After breakfast, depart Naivasha for Lake Nakuru National Park. Arrive in time for lunch before an afternoon game drive.",
      "The park is well known for its rhino population and diverse wildlife, including buffaloes, giraffes, lions, leopards and other species. The lake also attracts various waterbirds, including flamingos.",
      "Return to the lodge for dinner and overnight stay.",
    ],
    image: "https://images.unsplash.com/photo-1541414779316-956a5084c0d4?w=700&q=80",
  },
  {
    day: "Day 3",
    route: "Lake Nakuru to Masai Mara National Reserve",
    overnight: "Masai Mara | Full Board",
    bullets: [
      "After breakfast, depart Lake Nakuru and drive towards the Masai Mara National Reserve, approximately 5–6 hours.",
      "Arrive around lunchtime, check in and enjoy lunch before your first afternoon game drive. Search for lions, elephants, cheetahs, buffaloes, giraffes and other wildlife.",
      "Return to the lodge in the evening.",
    ],
    image: "https://images.unsplash.com/photo-1741850821150-58b56e0e6156?w=700&q=80",
  },
  {
    day: "Day 4",
    route: "Full Day Masai Mara National Reserve",
    overnight: "Masai Mara | Full Board",
    bullets: [
      "Enjoy a full day exploring the Masai Mara with morning and afternoon game drives.",
      "With your Maasai safari guide, explore the open plains and different wildlife areas, offering excellent opportunities for wildlife viewing and photography.",
    ],
    image: "https://images.unsplash.com/photo-1728891376539-14448ef60798?w=700&q=80",
  },
  {
    day: "Day 5",
    route: "Full Day Masai Mara National Reserve",
    overnight: "Masai Mara | Full Board",
    bullets: [
      "After breakfast, set out for another full day in the Masai Mara, exploring river areas, rocky kopjes and expansive grasslands while searching for abundant wildlife.",
      "Enjoy a picnic lunch in the reserve before continuing the day's exploration.",
      "Return to the lodge in the late afternoon.",
    ],
    image: "https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?w=700&q=80",
  },
  {
    day: "Day 6",
    route: "Masai Mara to Nairobi",
    overnight: "Nairobi | Breakfast",
    bullets: [
      "After breakfast, drive back to Nairobi.",
      "Upon arrival, enjoy some free time to visit local places, explore the city, or do shopping at your own pace, depending on the available time.",
    ],
    image: "https://images.unsplash.com/photo-1758558364489-e6b0a03d1fcf?w=700&q=80",
  },
  {
    day: "Day 7",
    route: "Departure",
    overnight: "End of Unforgettable Journey",
    bullets: [
      "After breakfast, transfer to the airport.",
      "Depending on your flight schedule, you may have time for lunch or some leisure time in Nairobi before proceeding to Jomo Kenyatta International Airport for your onward flight.",
    ],
    image: "https://images.unsplash.com/photo-1764555735463-78b9ff085350?w=700&q=80",
  },
]

const STAYS = [
  {
    location: "Lake Naivasha",
    name: "Naivasha Kongoni Lodge",
    stars: 4,
    rating: 4.2,
    tripadvisorUrl: "https://www.tripadvisor.in/Hotel_Review-g317067-d3474739-Reviews-Naivasha_Kongoni_Lodge-Naivasha_Rift_Valley_Province.html",
    image: "https://images.unsplash.com/photo-1760044280686-c5bf1edf3cbb?w=400&q=80",
  },
  {
    location: "Lake Nakuru",
    name: "Ziwa Bush Lodge",
    stars: 4,
    rating: 4.5,
    tripadvisorUrl: "https://www.tripadvisor.in/Hotel_Review-g1015946-d4598733-Reviews-Ziwa_Bush_Lodge-Nakuru_Rift_Valley_Province.html",
    image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=400&q=80",
  },
  {
    location: "Masai Mara",
    name: "Jambo Mara Safari Lodge",
    stars: 4,
    rating: 3.9,
    tripadvisorUrl: "https://www.tripadvisor.in/Hotel_Review-g294209-d7195107-Reviews-Jambo_Mara_Safari_Lodge-Maasai_Mara_National_Reserve_Rift_Valley_Province.html",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=400&q=80",
  },
  {
    location: "Nairobi",
    name: "Kingfisher Nest Hotel",
    stars: 4,
    rating: 4.1,
    tripadvisorUrl: "https://www.tripadvisor.in/Hotel_Review-g294207-d13880353-Reviews-Kingfisher_Nest_Hotel_Suites-Nairobi.html",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80",
  },
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
        <p className="text-green-100 text-xs">Get your personalised quote in minutes</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 p-6">
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
          <label className="block text-gray-700 text-xs font-bold mb-1">Departure City</label>
          <input name="departureCity" type="text" placeholder="e.g. Delhi, Mumbai, Bangalore" className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-green-600" />
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

export default function KenyaHighlandsLandingPage() {
  const [showStickyBar, setShowStickyBar] = useState(true)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showPhonePopup, setShowPhonePopup] = useState(false)

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative w-full min-h-[480px] sm:min-h-[380px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=80"
          alt="Lion on the savanna with a safari vehicle in the Kenya highlands"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent md:via-white/60" />

        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-end items-start mb-6">
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
              ₹1,90,000<span className="text-gray-500 font-normal text-base"> / person</span>
            </p>
            <p className="text-gray-400 text-xs mb-5">Flights Optional · All Taxes Included</p>

            <div className="flex flex-wrap gap-3 mb-3">
              <a href="#safari-quote-form"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("safari-quote-form")?.scrollIntoView({ behavior: "smooth", block: "center" })
                }}
                className="bg-green-800 hover:bg-green-900 text-white font-bold text-sm px-6 py-3 rounded-md flex items-center gap-2 transition-colors"
              >
                GET MY SAFARI QUOTE
              </a>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowPhonePopup(!showPhonePopup)}
                  className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold text-sm px-6 py-3 rounded-md flex items-center gap-2 transition-colors"
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
              <span className="bg-white border border-gray-300 text-gray-800 font-bold text-sm px-6 py-3 rounded-md flex items-center gap-2">
                📅 BEST TIME TO VISIT: JUN – OCT
              </span>
            </div>
            <p className="text-gray-400 text-xs">⏱ Takes 30 seconds · No payment required</p>
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
              <span className="text-green-900">Plan Your </span><span className="text-amber-800">Kenya Safari Tour</span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center mt-3 mb-6">
              Tell us your travel month, departure city and number of travellers, and our travel experts will create a personalized Kenya safari package based on your travel preferences.
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
              <span className="text-gray-400 text-xs">or</span>
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
          <Image src="https://images.unsplash.com/photo-1758558364489-e6b0a03d1fcf?w=1600&q=80" alt="Kenya sunset safari" fill className="object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-extrabold text-lg mb-1">YOUR KENYA ADVENTURE STARTS HERE</p>
            <p className="text-gray-200 text-sm mb-1">7 Days / 6 Nights · Masai Mara · Lake Nakuru · Lake Naivasha</p>
            <p className="text-amber-400 font-bold">FROM ₹1,90,000 <span className="text-gray-300 font-normal text-xs">/ person</span></p>
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
