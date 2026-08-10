"use client"
import Image from "next/image"
import { useState } from "react"
import KenyaMobileHeader from "@/components/KenyaMobileHeader"

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
    route: "Nairobi",
    overnight: "Nairobi | Optional",
    bullets: [
      "Arrive in Nairobi and transfer to Movenpick Hotel.",
      "This night is optional depending on your international flight arrival time and is available at an additional cost.",
    ],
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=700&q=80",
  },
  {
    day: "Day 2",
    route: "Nairobi",
    overnight: "Nairobi",
    bullets: [
      "After breakfast, transfer from the airport to Movenpick Hotel. Rest of the day is at leisure.",
      "Optional visits to the Giraffe Centre, Elephant Orphanage, Nairobi National Museum or Nairobi National Park can be arranged at an additional cost.",
    ],
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&q=80",
  },
  {
    day: "Day 3",
    route: "Lake Nakuru",
    overnight: "Nakuru",
    bullets: [
      "After breakfast, drive to Lake Nakuru and check in at Lake Nakuru Sopa Lodge.",
      "After lunch, enjoy an afternoon game drive in Lake Nakuru National Park.",
    ],
    image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=700&q=80",
  },
  {
    day: "Day 4",
    route: "Ol Pejeta",
    overnight: "Ol Pejeta",
    bullets: [
      "Drive to Ol Pejeta Conservancy and check in at Jambo Mutara Camp.",
      "Enjoy a game drive in the conservancy, with visits to the Chimpanzee and Rhino Sanctuaries.",
    ],
    image: "https://images.unsplash.com/photo-1541414779316-956a5084c0d4?w=700&q=80",
  },
  {
    day: "Day 5",
    route: "Masai Mara",
    overnight: "Masai Mara",
    bullets: [
      "Transfer to the airstrip for your flight to Masai Mara. On arrival, transfer to Fairmont Mara Safari Club and enjoy lunch.",
      "Proceed for an afternoon game drive in the Masai Mara National Reserve.",
    ],
    image: "https://images.unsplash.com/photo-1741850821150-58b56e0e6156?w=700&q=80",
  },
  {
    day: "Day 6",
    route: "Masai Mara",
    overnight: "Masai Mara",
    bullets: [
      "Enjoy a full day of game drives in the Masai Mara National Reserve, with opportunities to see abundant wildlife and the seasonal wildebeest migration.",
      "Optional Masai village visit can also be arranged.",
    ],
    image: "https://images.unsplash.com/photo-1728891376539-14448ef60798?w=700&q=80",
  },
  {
    day: "Day 7",
    route: "Masai Mara",
    overnight: "Masai Mara",
    bullets: [
      "Spend another full day exploring the Masai Mara with morning and afternoon game drives.",
      "Enjoy excellent opportunities for wildlife viewing and photography.",
    ],
    image: "https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?w=700&q=80",
  },
  {
    day: "Day 8",
    route: "Serengeti",
    overnight: "Serengeti",
    bullets: [
      "Fly from Masai Mara to Serengeti. On arrival, proceed for a game drive in Serengeti National Park.",
      "Continue to Serengeti Serena Lodge for dinner and overnight stay.",
    ],
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=700&q=80",
  },
  {
    day: "Day 9",
    route: "Serengeti",
    overnight: "Serengeti",
    bullets: [
      "Enjoy a full day of game drives in Serengeti National Park, exploring the plains and looking for lions, elephants, cheetahs, leopards, zebras and wildebeest.",
    ],
    image: "https://images.unsplash.com/photo-1758558364489-e6b0a03d1fcf?w=700&q=80",
  },
  {
    day: "Day 10",
    route: "Ngorongoro",
    overnight: "Ngorongoro",
    bullets: [
      "Enjoy a game drive through the Serengeti en route to Ngorongoro, with a picnic lunch.",
      "Continue to Ngorongoro Serena Lodge for dinner and overnight stay.",
    ],
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=700&q=80",
  },
  {
    day: "Day 11",
    route: "Ngorongoro",
    overnight: "Ngorongoro",
    bullets: [
      "Enjoy a full-day game drive in the Ngorongoro Crater with a picnic lunch.",
      "Explore the crater and its abundant wildlife before returning to the lodge.",
    ],
    image: "https://images.unsplash.com/photo-1760044280686-c5bf1edf3cbb?w=700&q=80",
  },
  {
    day: "Day 12",
    route: "Lake Manyara",
    overnight: "Lake Manyara",
    bullets: [
      "Travel to Lake Manyara and check in at Lake Manyara Serena Lodge.",
      "Enjoy an evening game drive in Lake Manyara National Park.",
    ],
    image: "https://images.unsplash.com/photo-1760044280686-c5bf1edf3cbb?w=700&q=80",
  },
  {
    day: "Day 13",
    route: "Arusha - Departure",
    overnight: "End of Safari",
    bullets: [
      "After breakfast, travel to Arusha and enjoy lunch.",
      "Continue to Kilimanjaro International Airport for your onward flight, marking the end of your safari.",
    ],
    image: "https://images.unsplash.com/photo-1764555735463-78b9ff085350?w=700&q=80",
  },
]

const STAYS = [
  { location: "Nairobi", name: "Movenpick Hotel", stars: 4, image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80" },
  { location: "Lake Nakuru", name: "Lake Nakuru Sopa Lodge", stars: 4, image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=400&q=80" },
  { location: "Ol Pejeta", name: "Jambo Mutara Camp", stars: 4, image: "https://images.unsplash.com/photo-1760044280686-c5bf1edf3cbb?w=400&q=80" },
  { location: "Masai Mara", name: "Fairmont Mara Safari Club", stars: 4, image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=400&q=80" },
  { location: "Serengeti", name: "Serengeti Serena Lodge", stars: 4, image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=80" },
  { location: "Ngorongoro", name: "Ngorongoro Serena Lodge", stars: 4, image: "https://images.unsplash.com/photo-1758558364489-e6b0a03d1fcf?w=400&q=80" },
  { location: "Lake Manyara", name: "Lake Manyara Serena Lodge", stars: 4, image: "https://images.unsplash.com/photo-1741850821150-58b56e0e6156?w=400&q=80" },
]

const INCLUSIONS = [
  "Airport Meet & Greet",
  "12 Nights Accommodation",
  "All Meals as per Itinerary",
  "Private 4x4 Safari Vehicle",
  "Professional English-speaking Guide",
  "Internal Flight: Masai Mara to Serengeti",
  "Game Drives as per Itinerary",
  "Park and Conservancy Entry Fees",
  "Drinking Water During Safari",
  "All Applicable Taxes",
]

const EXCLUSIONS = [
  "International Flights",
  "Kenya and Tanzania Visa Fees",
  "Travel Insurance",
  "Personal Expenses",
  "Tips & Gratuities",
  "Optional Activities (Giraffe Centre, Elephant Orphanage, Masai Village Visit)",
  "Any Services Not Mentioned in Inclusions",
]

const FAQS = [
  {
    q: "Is this a private safari?",
    a: "Yes. This itinerary runs as a private safari for your group only, with your own vehicle, guide and pace throughout Kenya and Tanzania.",
  },
  {
    q: "Are flights included?",
    a: "International flights are not included. The one internal flight from Masai Mara to Serengeti is included, since it is a required part of crossing between the two countries on this route.",
  },
  {
    q: "Which hotels will we stay at?",
    a: "You will stay at Movenpick Hotel in Nairobi, Lake Nakuru Sopa Lodge, Jambo Mutara Camp in Ol Pejeta, Fairmont Mara Safari Club in the Masai Mara, Serengeti Serena Lodge, Ngorongoro Serena Lodge, and Lake Manyara Serena Lodge.",
  },
  {
    q: "Is the safari vehicle private?",
    a: "Yes, you get a private 4x4 safari vehicle with a dedicated driver-guide for your group throughout the trip.",
  },
  {
    q: "What meals are included?",
    a: "Yes, meals are included as specified in the itinerary each day, including picnic lunches on full-day game drive days in the Serengeti and Ngorongoro Crater.",
  },
  {
    q: "Is visa assistance included?",
    a: "This itinerary crosses from Kenya into Tanzania, so you will need entry documentation for both countries. We provide visa assistance and guidance for both the Kenya eTA and Tanzania visa requirements as part of your booking.",
  },
  {
    q: "What is the best time to visit for this route?",
    a: "June to October offers the best overall conditions across both Kenya and Tanzania, including strong chances of the wildebeest migration depending on the exact month. We can help you time your trip around specific migration river crossings if that is a priority.",
  },
  {
    q: "How many people can travel together?",
    a: "This itinerary is designed for small private groups. Larger groups can be accommodated with additional vehicles and guides so everyone travels together comfortably.",
  },
  {
    q: "Can I customise the itinerary?",
    a: "Yes. Days in Nairobi can be shortened or extended, optional activities like the Giraffe Centre or a Masai village visit can be added, and accommodation categories can be upgraded.",
  },
  {
    q: "What happens after I submit an enquiry?",
    a: "Our Kenya Safari Team will contact you directly to understand your travel dates, group size and preferences, then send you a detailed itinerary and quote for your trip.",
  },
]

function buildWhatsAppUrl(data: Record<string, string>) {
  const lines = [
    "*New Kenya Safari Quote Request*",
    "Package: The Classic Kenya Grand Circuit: 13 Days",
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

export default function KenyaGrandCircuitLandingPage() {
  const [showPhonePopup, setShowPhonePopup] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-white">
      <KenyaMobileHeader />
      <div className="md:hidden h-14" />

      {/* Hero */}
      <div className="relative w-full min-h-[480px] sm:min-h-[380px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1600&q=80"
          alt="Savanna sunrise on the Kenya Tanzania safari circuit"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent md:via-white/60" />

        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-end items-start mb-6">
            <div className="bg-white rounded-lg shadow-md px-5 py-3 text-center">
              <p className="text-gray-900 font-extrabold text-lg">13 Days</p>
              <p className="text-gray-500 text-xs mt-1">Kenya + Tanzania<br />Safari Circuit</p>
            </div>
          </div>

          <div className="max-w-xl">
            <p className="italic text-gray-700 mb-2">Two Countries, One Unforgettable Migration</p>
            <h1 className="leading-none mb-3">
              <span className="block text-green-900 font-black text-4xl sm:text-6xl tracking-tight">GRAND</span>
              <span className="block text-orange-600 font-black text-4xl sm:text-6xl tracking-tight">CIRCUIT</span>
            </h1>
            <p className="text-gray-700 text-sm mb-1">Nairobi - Lake Nakuru - Ol Pejeta - Masai Mara</p>
            <p className="text-gray-700 text-sm mb-4">Serengeti - Ngorongoro - Lake Manyara - Arusha</p>

            <div className="flex flex-wrap gap-4 text-gray-700 text-sm font-semibold mb-5">
              <span>13 DAYS / 12 NIGHTS</span>
              <span>GUIDED SAFARI EXPERIENCE</span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
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
                  TALK TO SAFARI EXPERT
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
                BEST TIME TO VISIT: JUN - OCT
              </span>
            </div>
            <p className="text-gray-400 text-xs">Takes 30 seconds - No payment required</p>
          </div>
        </div>
      </div>

      {/* Why choose */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-center text-gray-800 font-extrabold text-xl tracking-wide mb-8">
          <span className="border-b-2 border-yellow-500 pb-2">WHY CHOOSE THIS SAFARI CIRCUIT?</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {[
            { title: "2 Countries, 1 Trip", desc: "Kenya and Tanzania combined, with the migration crossing between them." },
            { title: "Private 4x4 Safari Vehicle", desc: "Comfortable and reliable private vehicle for your entire journey." },
            { title: "Big Five Wildlife", desc: "Spot Lions, Elephants, Rhinos, Leopards and Buffalo across two ecosystems." },
            { title: "Handpicked Stays", desc: "Serena and Sopa properties selected for location and comfort." },
            { title: "End-to-End Support", desc: "We are with you from Nairobi arrival to Kilimanjaro departure." },
          ].map(item => (
            <div key={item.title} className="bg-gray-50 rounded-lg p-4 text-center">
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
              <span className="border-b-2 border-yellow-500 pb-2">YOUR 13-DAY SAFARI ITINERARY</span>
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
                          <span className="text-yellow-500">-</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-400 text-xs">Overnight: {item.overnight}</p>
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
                      <p className="text-amber-400 text-sm">{"\u2605".repeat(stay.stars)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
