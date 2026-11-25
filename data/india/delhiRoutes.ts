export type DelhiRoute = {
  slug: string
  name: string
  description: string
  distance: string
  trainTime: string
  roadTime: string
  trainFare: [number, number]
  trainFareNote?: string
  busFare: [number, number]
  closing: string
  image: string
}

export const delhiRoutesTitle = "Travelling from Delhi to Other Popular Tourist Destinations in India"

export const delhiRoutesIntro: string[] = [
  "Delhi is an excellent starting point for exploring North India and several famous Indian tourist destinations. Visitors can travel by train, bus, private car or domestic flight depending on their budget and travel preferences.",
  "Popular destinations accessible from Delhi include Agra, Jaipur, Amritsar, Haridwar, Rishikesh, Varanasi, Shimla, Mathura and Udaipur.",
]

export const delhiRoutes: DelhiRoute[] = [
  {
    slug: "agra", name: "Agra",
    description: "Agra is famous for the Taj Mahal, one of the world’s most recognised monuments and a UNESCO World Heritage Site.",
    distance: "230 km", trainTime: "2–3 hours", roadTime: "3.5–5 hours",
    trainFare: [200, 1400], busFare: [700, 1500],
    closing: "Agra is one of the best destinations for a day trip from Delhi. Visitors can explore the Taj Mahal, Agra Fort and other Mughal-era attractions.",
    image: "/images/india/delhi/routes/agra.jpg",
  },
  {
    slug: "jaipur", name: "Jaipur",
    description: "Jaipur, the capital of Rajasthan, is famous for its royal palaces, forts, colourful markets and traditional architecture.",
    distance: "280 km", trainTime: "4–5 hours", roadTime: "5–6 hours",
    trainFare: [220, 1400], busFare: [400, 1200],
    closing: "Popular attractions include Amber Fort, Hawa Mahal, City Palace and Jantar Mantar. Jaipur is an important destination on India’s famous Golden Triangle tourist circuit.",
    image: "/images/india/delhi/routes/jaipur.jpg",
  },
  {
    slug: "amritsar", name: "Amritsar",
    description: "Amritsar is an important cultural and religious destination in Punjab. The Golden Temple is its most famous attraction and welcomes visitors from around the world.",
    distance: "450 km", trainTime: "6–7 hours", roadTime: "8–10 hours",
    trainFare: [400, 2000], busFare: [600, 1800],
    closing: "Visitors can also explore Jallianwala Bagh, local Punjabi markets and the Wagah-Attari border ceremony.",
    image: "/images/india/delhi/routes/amritsar.jpg",
  },
  {
    slug: "haridwar", name: "Haridwar",
    description: "Haridwar is one of India’s most important spiritual destinations, located beside the River Ganga.",
    distance: "220 km", trainTime: "4–5 hours", roadTime: "4.5–6 hours",
    trainFare: [150, 1200], busFare: [290, 900],
    closing: "Visitors can experience the famous Ganga Aarti at Har Ki Pauri and explore temples and traditional markets.",
    image: "/images/india/delhi/routes/haridwar.jpg",
  },
  {
    slug: "rishikesh", name: "Rishikesh",
    description: "Rishikesh is famous for yoga, meditation, river activities and beautiful Himalayan surroundings.",
    distance: "240 km", trainTime: "Approximately 4–5 hours to Haridwar, followed by a road transfer", roadTime: "5–7 hours",
    trainFare: [200, 1500], trainFareNote: "including an indicative connection", busFare: [300, 1500],
    closing: "Popular activities include visiting Laxman Jhula’s surrounding area, exploring ashrams, enjoying riverside cafés and experiencing yoga retreats.",
    image: "/images/india/delhi/routes/rishikesh.jpg",
  },
  {
    slug: "varanasi", name: "Varanasi",
    description: "Varanasi is one of the world’s oldest continuously inhabited cities and an important spiritual destination in India.",
    distance: "820 km", trainTime: "8–13 hours", roadTime: "12–16 hours",
    trainFare: [430, 3400], busFare: [1000, 2500],
    closing: "Visitors can experience the Ganga Aarti, explore ancient ghats, enjoy boat rides and discover the city’s spiritual traditions.",
    image: "/images/india/delhi/routes/varanasi.jpg",
  },
  {
    slug: "shimla", name: "Shimla",
    description: "Shimla is a beautiful hill station in Himachal Pradesh, famous for its colonial architecture, mountain views and pleasant summer climate.",
    distance: "350 km", trainTime: "Approximately 4–5 hours to Kalka, followed by a connecting toy train journey", roadTime: "8–10 hours",
    trainFare: [300, 1800], trainFareNote: "for an indicative connecting journey", busFare: [500, 1600],
    closing: "Popular attractions include Mall Road, The Ridge, Jakhoo Temple and nearby mountain destinations.",
    image: "/images/india/delhi/routes/shimla.jpg",
  },
  {
    slug: "mathura", name: "Mathura",
    description: "Mathura is an important religious destination associated with Lord Krishna. It is popular among domestic and international visitors interested in Indian culture and spirituality.",
    distance: "180 km", trainTime: "1.5–3 hours", roadTime: "3–4 hours",
    trainFare: [100, 700], busFare: [250, 700],
    closing: "Visitors can also explore nearby Vrindavan, famous for its temples and spiritual atmosphere.",
    image: "/images/india/delhi/routes/mathura.jpg",
  },
  {
    slug: "udaipur", name: "Udaipur",
    description: "Udaipur is one of Rajasthan’s most beautiful destinations, known for its lakes, palaces, heritage hotels and romantic atmosphere.",
    distance: "660 km", trainTime: "11–13 hours", roadTime: "11–13 hours",
    trainFare: [430, 2700], busFare: [700, 1800],
    closing: "Popular attractions include City Palace, Lake Pichola, Jag Mandir and traditional markets.",
    image: "/images/india/delhi/routes/udaipur.jpg",
  },
]

export const delhiRoutesNote =
  "All distances, journey times and ticket prices above are approximate planning estimates. Actual travel duration and fares depend on the departure station, selected train or bus, class, operator, travel date, availability and road conditions. Rishikesh and Shimla train journeys require connecting transport."
