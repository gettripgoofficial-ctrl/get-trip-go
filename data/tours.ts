export interface Tour {
  id: number
  name: string
  route: string
  duration: string
  nights: string
  priceINR: number
  originalPriceINR: number
  dealDiscount: number
  dealOffer: string
  nextDates: string[]
  visa: string
  badge?: string
  dealTag: string
  dealColor: string
  dealHook: string
  dealSub: string
  image: string
  highlights: string[]
}

// Formula: (EUR Double/Triple × 112) + 65,000 (flights) + 25,000 (taxes) = base
// Deal price = base - dealDiscount

export const tours: Tour[] = [
  {
    id: 1,
    name: "Grand Wonders Of Europe",
    route: "London → Rome",
    duration: "16 Days",
    nights: "15N/16D",
    originalPriceINR: Math.round(2955 * 112) + 90000, // 420,960
    dealDiscount: 15000,
    dealOffer: "Save ₹15,000",
    priceINR: Math.round(2955 * 112) + 90000 - 15000, // 405,960
    nextDates: ["Jun 14", "Jun 26", "Jul 5", "Jul 12", "Aug 9", "Sep 11", "Sep 21", "Oct 12"],
    visa: "UK + FRANCE",
    dealTag: "BEST SELLER",
    dealColor: "#E53935",
    dealHook: "🔥 Save ₹15,000 Per Person",
    dealSub: "Limited seats · Book now",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=100&auto=format&fit=crop&sat=30",
    highlights: ["London", "Paris", "Swiss Alps", "Venice", "Rome"],
  },
  {
    id: 2,
    name: "Best of Europe",
    route: "Paris → Rome",
    duration: "13 Days",
    nights: "12N/13D",
    originalPriceINR: Math.round(2320 * 112) + 90000, // 349,840
    dealDiscount: 0,
    dealOffer: "Free Visa Assistance",
    priceINR: Math.round(2320 * 112) + 90000, // 349,840
    nextDates: ["Jun 10", "Jun 17", "Jun 24", "Jul 8", "Jul 15", "Aug 12", "Aug 22", "Sep 2", "Sep 14", "Oct 7"],
    visa: "FRANCE",
    dealTag: "EARLY BIRD",
    dealColor: "#FF6F00",
    dealHook: "🛂 Free Visa Assistance",
    dealSub: "France visa support included",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=100&auto=format&fit=crop&sat=30",
    highlights: ["Paris", "Lyon", "Nice", "Florence", "Rome"],
  },
  {
    id: 3,
    name: "Beauty of Europe",
    route: "Paris → Zurich",
    duration: "9 Days",
    nights: "8N/9D",
    originalPriceINR: Math.round(1995 * 112) + 90000, // 313,440
    dealDiscount: 12000,
    dealOffer: "Save ₹12,000",
    priceINR: Math.round(1995 * 112) + 90000 - 12000, // 301,440
    nextDates: ["Jun 10", "Jun 13", "Jun 17", "Jul 8", "Jul 18", "Aug 12", "Aug 22", "Sep 2", "Sep 14", "Oct 7"],
    visa: "FRANCE",
    badge: "NEW TOUR",
    dealTag: "NEW LAUNCH",
    dealColor: "#7B1FA2",
    dealHook: "✨ Save ₹12,000 — Introductory Price",
    dealSub: "Rhine Falls included · New route",
    image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=1200&q=100&auto=format&fit=crop&sat=30",
    highlights: ["Paris", "Strasbourg", "Black Forest", "Rhine Falls", "Zurich"],
  },
  {
    id: 4,
    name: "Grand Exclusive Europe",
    route: "London → Rome",
    duration: "13 Days",
    nights: "12N/13D",
    originalPriceINR: Math.round(2495 * 112) + 90000, // 369,440
    dealDiscount: 10000,
    dealOffer: "₹10,000 Off Per Person",
    priceINR: Math.round(2495 * 112) + 90000 - 10000, // 359,440
    nextDates: ["Jun 27", "Jul 15", "Aug 12", "Sep 12", "Sep 21"],
    visa: "UK + FRANCE",
    dealTag: "GROUP DEAL",
    dealColor: "#E65100",
    dealHook: "👨‍👩‍👧‍👦 ₹10,000 Off Per Person",
    dealSub: "Min. 4 travellers · Group booking",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=100&auto=format&fit=crop&sat=30",
    highlights: ["London", "Brussels", "Amsterdam", "Paris", "Rome"],
  },
  {
    id: 5,
    name: "Exclusive Europe",
    route: "Paris → Rome",
    duration: "11 Days",
    nights: "10N/11D",
    originalPriceINR: Math.round(1980 * 112) + 90000, // 311,760
    dealDiscount: 0,
    dealOffer: "Kids Under 12 Free",
    priceINR: Math.round(1980 * 112) + 90000, // 311,760
    nextDates: ["Jun 12", "Jun 19", "Jun 26", "Jun 29", "Jul 10", "Jul 17", "Jul 24", "Aug 3", "Aug 14", "Aug 24", "Sep 4", "Sep 14", "Sep 23", "Sep 26", "Oct 10", "Oct 17", "Oct 23"],
    visa: "FRANCE",
    dealTag: "SUMMER SPECIAL",
    dealColor: "#F9A825",
    dealHook: "👶 Kids Under 12 Travel Free",
    dealSub: "No child cost · Family special",
    image: "https://images.unsplash.com/photo-1543429776-2782fc8e0ec0?w=1200&q=100&auto=format&fit=crop&sat=30",
    highlights: ["Paris", "Geneva", "Milan", "Venice", "Rome"],
  },
  {
    id: 6,
    name: "Grand Fascinating Europe",
    route: "London → Zurich",
    duration: "10 Days",
    nights: "9N/10D",
    originalPriceINR: Math.round(2140 * 112) + 90000, // 329,680
    dealDiscount: 10000,
    dealOffer: "Save ₹10,000",
    priceINR: Math.round(2140 * 112) + 90000 - 10000, // 319,680
    nextDates: ["Jun 27", "Jul 15", "Aug 12", "Sep 12", "Sep 21"],
    visa: "UK + SWISS",
    dealTag: "POPULAR",
    dealColor: "#D32F2F",
    dealHook: "🏔️ Save ₹10,000 — Jungfrau Combo",
    dealSub: "UK + Swiss visa · All included",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=100&auto=format&fit=crop&sat=30",
    highlights: ["London", "Paris", "Lucerne", "Jungfrau", "Zurich"],
  },
  {
    id: 7,
    name: "Fascinating Europe",
    route: "Paris → Zurich",
    duration: "8 Days",
    nights: "7N/8D",
    originalPriceINR: Math.round(1600 * 112) + 90000, // 269,200
    dealDiscount: 0,
    dealOffer: "Complimentary Hotel Night",
    priceINR: Math.round(1600 * 112) + 90000, // 269,200
    nextDates: ["Jun 12", "Jun 19", "Jun 26", "Jun 29", "Jul 10", "Jul 17", "Jul 24", "Aug 3", "Sep 4", "Sep 14", "Sep 23", "Oct 10", "Oct 17", "Oct 23"],
    visa: "SWISS",
    dealTag: "BEST VALUE",
    dealColor: "#FF8F00",
    dealHook: "🏨 1 Complimentary Hotel Night",
    dealSub: "Most booked 8-day itinerary",
    image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=1200&q=100&auto=format&fit=crop&sat=30",
    highlights: ["Paris", "Colmar", "Lucerne", "Mt. Titlis", "Zurich"],
  },
  {
    id: 8,
    name: "Grand European Highlights",
    route: "London → Rome",
    duration: "12 Days",
    nights: "11N/12D",
    originalPriceINR: Math.round(2010 * 112) + 90000, // 315,120
    dealDiscount: 20000,
    dealOffer: "Save ₹20,000",
    priceINR: Math.round(2010 * 112) + 90000 - 20000, // 295,120
    nextDates: ["Sep 21", "Oct 13"],
    visa: "UK + SWISS",
    dealTag: "AUTUMN DEAL",
    dealColor: "#BF360C",
    dealHook: "🍂 Save ₹20,000 — Off Season",
    dealSub: "Sep–Oct · Fewer crowds",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=100&auto=format&fit=crop&sat=30",
    highlights: ["London", "Paris", "Interlaken", "Milan", "Rome"],
  },
  {
    id: 9,
    name: "European Highlights",
    route: "Paris → Rome",
    duration: "10 Days",
    nights: "9N/10D",
    originalPriceINR: Math.round(1485 * 112) + 90000, // 256,320
    dealDiscount: 0,
    dealOffer: "Free Travel Insurance",
    priceINR: Math.round(1485 * 112) + 90000, // 256,320
    nextDates: ["Jun 19", "Jun 26", "Jul 14", "Jul 31", "Aug 14", "Sep 14", "Oct 15"],
    visa: "FRANCE",
    dealTag: "BUDGET PICK",
    dealColor: "#FF6D00",
    dealHook: "🛡️ Free Travel Insurance",
    dealSub: "5 departures Jun–Aug 2026",
    image: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=1200&q=100&auto=format&fit=crop&sat=30",
    highlights: ["Paris", "Nice", "Pisa", "Florence", "Rome"],
  },
  {
    id: 10,
    name: "Sound of Swiss",
    route: "Zurich → Zurich",
    duration: "8 Days",
    nights: "7N/8D",
    originalPriceINR: Math.round(1995 * 112) + 90000, // 313,440
    dealDiscount: 12000,
    dealOffer: "Save ₹12,000",
    priceINR: Math.round(1995 * 112) + 90000 - 12000, // 301,440
    nextDates: ["Jun 19", "Jul 3", "Aug 7"],
    visa: "SWISS",
    badge: "NEW TOUR",
    dealTag: "NEW LAUNCH",
    dealColor: "#C62828",
    dealHook: "🇨🇭 Save ₹12,000 — Pure Switzerland",
    dealSub: "Jungfrau · Interlaken · Bern",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=100&auto=format&fit=crop&sat=30",
    highlights: ["Zurich", "Lucerne", "Jungfrau", "Interlaken", "Bern"],
  },
  {
    id: 11,
    name: "Jewels of East Europe",
    route: "Vienna → Munich",
    duration: "8 Days",
    nights: "7N/8D",
    originalPriceINR: Math.round(1320 * 112) + 90000, // 237,840
    dealDiscount: 8000,
    dealOffer: "Save ₹8,000",
    priceINR: Math.round(1320 * 112) + 90000 - 8000, // 229,840
    nextDates: ["Jun 21", "Jul 12", "Aug 9"],
    visa: "AUSTRIA",
    dealTag: "LOWEST PRICE",
    dealColor: "#E53935",
    dealHook: "🏰 Save ₹8,000 — 4 Countries",
    dealSub: "Vienna · Budapest · Prague · Munich",
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1200&q=100&auto=format&fit=crop&sat=30",
    highlights: ["Vienna", "Budapest", "Prague", "Salzburg", "Munich"],
  },
  {
    id: 12,
    name: "Scandinavian Delights",
    route: "Helsinki → Copenhagen",
    duration: "10 Days",
    nights: "9N/10D",
    originalPriceINR: Math.round(2295 * 112) + 90000, // 347,040
    dealDiscount: 0,
    dealOffer: "Free City Tour Worth ₹8,000",
    priceINR: Math.round(2295 * 112) + 90000, // 347,040
    nextDates: ["Jul 21", "Aug 20"],
    visa: "NORWAY",
    dealTag: "LIMITED SEATS",
    dealColor: "#FF6F00",
    dealHook: "🌅 Free City Tour Worth ₹8,000",
    dealSub: "Midnight Sun · Jul & Aug only",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=100&auto=format&fit=crop&sat=30",
    highlights: ["Helsinki", "Stockholm", "Oslo", "Bergen", "Copenhagen"],
  },
  {
    id: 13,
    name: "Spanish Fiesta With Portugal",
    route: "Madrid → Barcelona",
    duration: "11 Days",
    nights: "10N/11D",
    originalPriceINR: Math.round(1800 * 112) + 90000, // 291,600
    dealDiscount: 10000,
    dealOffer: "Save ₹10,000",
    priceINR: Math.round(1800 * 112) + 90000 - 10000, // 281,600
    nextDates: ["Jun 15", "Jul 2", "Aug 15"],
    visa: "SPAIN",
    dealTag: "HOT DEAL",
    dealColor: "#D32F2F",
    dealHook: "🎊 Save ₹10,000 — 2 Countries",
    dealSub: "Spain + Portugal · No extra cost",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&q=100&auto=format&fit=crop&sat=30",
    highlights: ["Madrid", "Lisbon", "Seville", "Granada", "Barcelona"],
  },
  {
    id: 14,
    name: "Glimpses of United Kingdom",
    route: "London → London",
    duration: "8 Days",
    nights: "7N/8D",
    originalPriceINR: Math.round(1320 * 112) + 90000, // 237,840
    dealDiscount: 0,
    dealOffer: "Free Airport Transfer",
    priceINR: Math.round(1320 * 112) + 90000, // 237,840
    nextDates: ["Jun 17", "Jun 27", "Jul 12", "Aug 12", "Sep 12", "Oct 13"],
    visa: "UK",
    dealTag: "MOST DATES",
    dealColor: "#BF360C",
    dealHook: "🎡 Free Airport Transfer",
    dealSub: "Edinburgh · Highlands · Oxford",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=100&auto=format&fit=crop&sat=30",
    highlights: ["London", "Edinburgh", "Highlands", "Lake District", "Oxford"],
  },
]

export const affiliates = [
  { name: "Klook", tagline: "Tours & Activities Worldwide", desc: "Book top-rated tours, day trips, and must-do activities at the best prices.", href: "https://klook.tpx.lu/FX3uG39B", color: "#FF5722", icon: "🎟️" },
  { name: "GetTransfer", tagline: "Private Airport Transfers", desc: "Book reliable private transfers to and from airports across Europe.", href: "https://gettransfer.tpx.lu/jdOm5nmH", color: "#1565C0", icon: "🚗" },
  { name: "Kiwitaxi", tagline: "Airport Taxi Service", desc: "Fixed-price airport taxis with professional drivers in 100+ countries.", href: "https://kiwitaxi.tpx.lu/FDwabX74", color: "#00897B", icon: "🚕" },
  { name: "Travel Partner", tagline: "Exclusive Travel Deals", desc: "Discover handpicked travel deals and exclusive offers for your trip.", href: "https://tpx.lu/li6O3WLY", color: "#6A1B9A", icon: "✈️" },
  { name: "Tiqets", tagline: "Museum & Attraction Tickets", desc: "Skip-the-line tickets to top museums, landmarks and experiences.", href: "https://tiqets.tpx.lu/4FAWmeqf", color: "#E53935", icon: "🎭" },
  { name: "GetRentaCar", tagline: "Car Rentals Worldwide", desc: "Compare and book rental cars at the best rates across 160+ countries.", href: "https://getrentacar.tpx.lu/3wYtv7U9", color: "#2E7D32", icon: "🚙" },
]