export const kenyaHero = {
  breadcrumb: ["Home", "Countries", "Kenya"],
  region: "East Africa",
  title: "Kenya",
  tagline: "The home of the safari — with wildlife, landscapes and journeys for every kind of traveller.",
  image: "/images/kenya-banner.jpg",
  infoStrip: [
    { label: "Best Known For", value: "The original safari — the Mara, the migration, Amboseli's elephants", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80" },
    { label: "When To Go", value: "Jul-Oct (dry, migration); Jan-Feb (dry, green)", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80" },
    { label: "Getting There", value: "Nairobi (NBO), the regional hub with daily long-haul flights", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80" },
    { label: "Getting Around", value: "Light aircraft between parks; road through the highlands", image: "https://images.unsplash.com/photo-1516934024742-b461fba47600?w=600&q=80" },
    { label: "Pairs With", value: "Tanzania, Zanzibar, or a Diani beach finish", image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80" },
  ],
}

export type KenyaDestination = {
  id: string
  name: string
  region: string
  image: string
}

export const kenyaDestinations: KenyaDestination[] = [
  { id: "masai-mara", name: "Masai Mara National Reserve", region: "Wildlife Reserve · Southern Kenya", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80" },
  { id: "amboseli", name: "Amboseli National Park", region: "Southern Kenya · Kilimanjaro Foothills", image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80" },
  { id: "lake-nakuru", name: "Lake Nakuru National Park", region: "Rift Valley · Central Kenya", image: "https://images.unsplash.com/photo-1547970310-4b1d1e35c108?w=800&q=80" },
  { id: "lake-elementaita", name: "Lake Elementaita", region: "Rift Valley · Central Kenya", image: "https://images.unsplash.com/photo-1552083375-1447ce886485?w=800&q=80" },
  { id: "lake-naivasha", name: "Lake Naivasha", region: "Rift Valley · Central Kenya", image: "https://images.unsplash.com/photo-1516569422509-4d5a94125c02?w=800&q=80" },
  { id: "ol-pejeta", name: "Ol Pejeta", region: "Laikipia · Central Kenya", image: "https://images.unsplash.com/photo-1534567110243-8875d64ca8ff?w=800&q=80" },
]

export type KenyaJourney = {
  id: string
  title: string
  days: number
  nights: number
  image: string
}

export const kenyaJourneys: KenyaJourney[] = [
  { id: "highlands-escape", title: "Kenya Highlands Escape", days: 7, nights: 6, image: "https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=800&q=80" },
  { id: "forests-coast", title: "Forests to the Coast", days: 10, nights: 9, image: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=800&q=80" },
  { id: "grand-circuit", title: "Classic Kenya Grand Circuit", days: 13, nights: 12, image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80" },
  { id: "northern-explorer", title: "Northern Kenya Explorer", days: 10, nights: 9, image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80" },
  { id: "walking-safari", title: "Walking Safari Kenya", days: 9, nights: 8, image: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?w=800&q=80" },
  { id: "indian-ocean", title: "Highlands to the Indian Ocean", days: 10, nights: 9, image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?w=800&q=80" },
]

export type KenyaStay = {
  id: string
  name: string
  region: string
  description: string
  image: string
}

export const kenyaStays: KenyaStay[] = [
  { id: "ilora-retreats", name: "Ilora Retreats", region: "Masai Mara", description: "An intimate, design-led tented retreat in the heart of the Mara.", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80" },
  { id: "angama-mara", name: "Angama Mara", region: "Masai Mara", description: "Glass-fronted suites suspended on the Oloololo Escarpment.", image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80" },
  { id: "finch-hattons", name: "Finch Hattons", region: "Tsavo West", description: "A refined, Out-of-Africa-styled luxury camp built around natural springs.", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80" },
  { id: "loldia-house", name: "Loldia House", region: "Lake Naivasha", description: "A characterful colonial farmhouse on the lakeshore.", image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=800&q=80" },
  { id: "giraffe-manor", name: "Giraffe Manor", region: "Nairobi", description: "The famous 1930s manor where resident giraffes lean through the windows.", image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=800&q=80" },
  { id: "angama-amboseli", name: "Angama Amboseli", region: "Amboseli", description: "A ten-suite lodge framed by Kilimanjaro views.", image: "https://images.unsplash.com/photo-1516934024742-b461fba47600?w=800&q=80" },
]

export type KenyaWildlife = {
  id: string
  name: string
  image: string
}

export const kenyaWildlife: KenyaWildlife[] = [
  { id: "elephant", name: "Elephant", image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=600&q=80" },
  { id: "rhino", name: "Rhino", image: "https://images.unsplash.com/photo-1584844115436-473887b1e6f5?w=600&q=80" },
  { id: "leopard", name: "Leopard", image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=600&q=80" },
  { id: "lion", name: "Lion", image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=600&q=80" },
  { id: "birds", name: "Birds", image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&q=80" },
  { id: "primates", name: "Primates", image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=600&q=80" },
  { id: "cheetah", name: "Cheetah", image: "/images/kenya-banner.jpg" },
]
