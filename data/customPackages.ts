export type CustomPackage = {
  slug: string
  name: string
  duration: string
  nights: number
  type: string
  typeColor: string
  price: number
  totalPrice: number
  cities: string
  country: string
  heroImage: string
  images: string[]
  tag?: string
  highlights: string[]
  inclusions: {
    hotel: string
    transfers: string
    meals: string
    activities: string
    flights?: string
  }
  itinerary: {
    day: number
    title: string
    description: string
    meals: string
  }[]
  inclusions_list: string[]
  exclusions_list: string[]
}

export const customPackages: CustomPackage[] = [
  // ─── SINGAPORE & MALAYSIA ──────────────────────────────
  {
    slug: "singapore-malaysia-discovery",
    name: "Singapore & Malaysia Discovery",
    duration: "6N/7D",
    nights: 6,
    type: "Family",
    typeColor: "#059669",
    price: 65999,
    totalPrice: 263996,
    cities: "Singapore · Kuala Lumpur",
    country: "Singapore & Malaysia",
    heroImage: "/images/external/unsplash-152562529338.jpg",
    images: [
      "/images/external/unsplash-152562529338.jpg",
      "/images/external/unsplash-159642284654.jpg",
      "/images/external/unsplash-150800960388.jpg",
    ],
    tag: "Best Seller",
    highlights: ["Universal Studios Singapore", "Gardens by the Bay", "Petronas Twin Towers", "Batu Caves", "Night Safari", "Genting Highlands"],
    inclusions: { hotel: "4 Star Hotel", transfers: "Airport Transfers + Inter-city Coach", meals: "Daily Breakfast", activities: "8 Activities", flights: "Round Trip Flights" },
    itinerary: [
      { day: 1, title: "Arrival Singapore", description: "Arrive Singapore Changi Airport. Transfer to hotel. Evening at Marina Bay — Gardens by the Bay light show.", meals: "Dinner" },
      { day: 2, title: "Universal Studios Singapore", description: "Full day at Universal Studios. All themed zones and rides.", meals: "Breakfast" },
      { day: 3, title: "Singapore City & Night Safari", description: "Morning — Sentosa Island, Merlion Park, Chinatown. Evening — world-famous Night Safari.", meals: "Breakfast, Lunch" },
      { day: 4, title: "Singapore to Kuala Lumpur", description: "Coach to KL. Check in. Evening Petronas Twin Towers and KLCC Park.", meals: "Breakfast, Dinner" },
      { day: 5, title: "Kuala Lumpur City Tour", description: "Batu Caves, National Museum, KL Tower, Petaling Street. Shopping at Bukit Bintang.", meals: "Breakfast" },
      { day: 6, title: "Genting Highlands", description: "Day trip to Genting Highlands. Cable car, indoor theme park, cool mountain air.", meals: "Breakfast, Lunch" },
      { day: 7, title: "Departure KL", description: "Morning at leisure. Transfer to KL International Airport.", meals: "Breakfast" },
    ],
    inclusions_list: ["Return airfare from India", "6 nights 4-star hotels", "Daily breakfast + select meals", "Singapore–KL coach transfer", "Universal Studios tickets", "Night Safari tickets", "English guide throughout"],
    exclusions_list: ["Singapore & Malaysia visa fees", "Lunch on select days", "Personal expenses", "Optional Genting rides", "Tips"],
  },

  // ─── ITALY ─────────────────────────────────────────────
  {
    slug: "italy-bella-vita",
    name: "Italy Bella Vita",
    duration: "10N/11D",
    nights: 10,
    type: "Couple",
    typeColor: "#DB2777",
    price: 185999,
    totalPrice: 371998,
    cities: "Rome · Venice · Florence · Amalfi",
    country: "Italy",
    heroImage: "/images/external/unsplash-151554262210.jpg",
    images: [
      "/images/external/unsplash-151554262210.jpg",
      "/images/external/unsplash-152390683465.jpg",
      "/images/external/unsplash-154134367288.jpg",
    ],
    tag: "Honeymoon Special",
    highlights: ["Colosseum Rome", "Vatican City", "Venice Gondola Ride", "Uffizi Gallery Florence", "Amalfi Coast Drive", "Pompeii Ruins", "Trevi Fountain", "Tuscany Wine Tasting"],
    inclusions: { hotel: "4 Star Hotel", transfers: "All Transfers + Train", meals: "Breakfast & Dinner", activities: "10 Activities", flights: "Round Trip Flights" },
    itinerary: [
      { day: 1, title: "Arrival Rome", description: "Arrive in Rome. Transfer to hotel. Evening walk — Trevi Fountain, Spanish Steps, Piazza Navona.", meals: "Dinner" },
      { day: 2, title: "Rome — Ancient City", description: "Colosseum, Roman Forum, Palatine Hill. Afternoon Circus Maximus. Evening gelato walk.", meals: "Breakfast, Dinner" },
      { day: 3, title: "Vatican City", description: "Vatican Museums, Sistine Chapel, St. Peter's Basilica and Square. Afternoon Pantheon.", meals: "Breakfast" },
      { day: 4, title: "Rome to Florence", description: "High-speed train to Florence. Piazzale Michelangelo sunset view. Ponte Vecchio.", meals: "Breakfast, Dinner" },
      { day: 5, title: "Florence Art & Culture", description: "Uffizi Gallery, Duomo Cathedral, Baptistery. Afternoon Tuscany countryside drive.", meals: "Breakfast, Lunch" },
      { day: 6, title: "Tuscany Wine Tour", description: "Guided Chianti wine region tour. Wine tasting at a historic vineyard. Siena old town.", meals: "Breakfast, Lunch, Dinner" },
      { day: 7, title: "Florence to Venice", description: "Train to Venice. Check in. Evening Rialto Bridge and San Marco Square.", meals: "Breakfast, Dinner" },
      { day: 8, title: "Venice — La Serenissima", description: "Gondola ride through Grand Canal. Murano glass island. Doge's Palace. Burano island.", meals: "Breakfast" },
      { day: 9, title: "Venice to Amalfi", description: "Travel to Amalfi Coast. Check in clifftop hotel. Evening Positano village walk.", meals: "Breakfast, Dinner" },
      { day: 10, title: "Amalfi Coast & Pompeii", description: "Morning boat along Amalfi Coast. Afternoon Pompeii Archaeological ruins.", meals: "Breakfast, Lunch" },
      { day: 11, title: "Departure Naples", description: "Transfer to Naples Airport for return flight.", meals: "Breakfast" },
    ],
    inclusions_list: ["Return airfare from India", "10 nights 4-star hotels", "Breakfast and dinner daily", "High-speed trains (Rome–Florence–Venice)", "All transfers", "Gondola ride", "Vatican Museums tickets", "Tuscany wine tour", "English guide"],
    exclusions_list: ["Schengen visa fees (~₹7,000)", "Lunch on select days", "Personal expenses", "Camera fees", "Tips", "Optional cooking class"],
  },

  // ─── VIETNAM ───────────────────────────────────────────
  {
    slug: "vietnam-hidden-trails",
    name: "Vietnam Hidden Trails",
    duration: "7N/8D",
    nights: 7,
    type: "Adventure",
    typeColor: "#D97706",
    price: 55999,
    totalPrice: 111998,
    cities: "Hanoi · Halong Bay · Hoi An",
    country: "Vietnam",
    heroImage: "/images/external/unsplash-152812726932.jpg",
    images: [
      "/images/external/unsplash-152812726932.jpg",
      "/images/external/unsplash-1557750255-c.jpg",
    ],
    highlights: ["Ha Long Bay Overnight Cruise", "Kayaking Limestone Caves", "Hoi An Lantern Festival", "Phong Nha Caves", "Motorbike Street Food Tour", "Marble Mountains"],
    inclusions: { hotel: "3 Star Hotel + Cruise Cabin", transfers: "All Transfers + Domestic Flight", meals: "Breakfast & Cruise Meals", activities: "7 Activities", flights: "Round Trip Flights" },
    itinerary: [
      { day: 1, title: "Arrival Hanoi", description: "Arrive Hanoi. Hoan Kiem Lake, Old Quarter, Water Puppet Show. Street food tour by motorbike.", meals: "Dinner" },
      { day: 2, title: "Hanoi to Ha Long Bay", description: "Drive to Ha Long Bay. Board cruise. Kayaking through limestone karsts. Sunset on deck.", meals: "Breakfast, Lunch, Dinner" },
      { day: 3, title: "Ha Long Bay to Hanoi", description: "Morning cruise activities. Return to Hanoi. Fly to Danang.", meals: "Breakfast, Lunch" },
      { day: 4, title: "Hoi An Ancient Town", description: "UNESCO Hoi An. Japanese Bridge, lantern making, tailor street, bicycle tour.", meals: "Breakfast, Dinner" },
      { day: 5, title: "My Son Sanctuary & Cooking Class", description: "My Son Hindu ruins (UNESCO). Afternoon Vietnamese cooking class.", meals: "Breakfast, Lunch" },
      { day: 6, title: "Marble Mountains & Da Nang", description: "Marble Mountains caves and pagodas. Dragon Bridge. My Khe Beach.", meals: "Breakfast" },
      { day: 7, title: "Phong Nha Caves", description: "Drive to Phong Nha. Boat into Paradise Cave — world's largest dry cave.", meals: "Breakfast, Lunch" },
      { day: 8, title: "Departure", description: "Return to Da Nang Airport.", meals: "Breakfast" },
    ],
    inclusions_list: ["Return airfare + 1 domestic flight", "7 nights accommodation + cruise cabin", "Breakfast daily + cruise meals", "All transfers", "Ha Long Bay cruise", "All activities as listed", "English guide"],
    exclusions_list: ["Vietnam e-visa fees (~₹2,800)", "Lunch on select days", "Personal expenses", "Optional motorbike hire", "Tips"],
  },

  // ─── GEORGIA ───────────────────────────────────────────
  {
    slug: "georgia-unexplored",
    name: "Georgia Unexplored",
    duration: "5N/6D",
    nights: 5,
    type: "Couple",
    typeColor: "#DB2777",
    price: 48999,
    totalPrice: 97998,
    cities: "Tbilisi · Kazbegi · Batumi",
    country: "Georgia",
    heroImage: "/images/external/unsplash-156500857654.jpg",
    images: [
      "/images/external/unsplash-156500857654.jpg",
      "/images/external/unsplash-157866299644.jpg",
    ],
    highlights: ["Gergeti Trinity Church Kazbegi", "Tbilisi Old Town", "Sulfur Bath Experience", "Black Sea Batumi", "Wine Tasting Kakheti", "Narikala Fortress"],
    inclusions: { hotel: "4 Star Hotel", transfers: "All Transfers", meals: "Breakfast & Dinner", activities: "6 Activities", flights: "Round Trip Flights" },
    itinerary: [
      { day: 1, title: "Arrival Tbilisi", description: "Arrive Tbilisi. Old Town walk — Rustaveli Avenue, sulfur baths, cable car to Narikala.", meals: "Dinner" },
      { day: 2, title: "Tbilisi & Mtskheta", description: "Svetitskhoveli Cathedral (UNESCO), Jvari Monastery. Evening wine tasting in Old Town.", meals: "Breakfast, Dinner" },
      { day: 3, title: "Kazbegi", description: "Drive through Georgian Military Highway. Gergeti Trinity Church at 2,170m. Stunning Caucasus views.", meals: "Breakfast, Dinner" },
      { day: 4, title: "Kakheti Wine Region", description: "Sighnaghi — City of Love. Bodbe Monastery. Traditional winery visit and wine tasting.", meals: "Breakfast, Lunch, Dinner" },
      { day: 5, title: "Batumi Black Sea", description: "Drive to Batumi. Batumi Boulevard, botanical garden, Ali and Nino statue.", meals: "Breakfast, Dinner" },
      { day: 6, title: "Departure Tbilisi", description: "Return to Tbilisi. Transfer to airport.", meals: "Breakfast" },
    ],
    inclusions_list: ["Return airfare from India", "5 nights 4-star hotels", "Breakfast and dinner daily", "All transfers", "English guide", "Wine tasting", "All entry tickets"],
    exclusions_list: ["Georgia e-visa fees (~₹3,500)", "Lunch on select days", "Personal expenses", "Optional paragliding", "Tips"],
  },

  // ─── PARIS & SWISS ─────────────────────────────────────
  {
    slug: "paris-swiss-romance",
    name: "Paris & Swiss Romance",
    duration: "7N/8D",
    nights: 7,
    type: "Honeymoon",
    typeColor: "#7C3AED",
    price: 155999,
    totalPrice: 311998,
    cities: "Paris · Geneva · Lucerne",
    country: "France & Switzerland",
    heroImage: "/images/external/unsplash-143127417276.jpg",
    images: [
      "/images/external/unsplash-143127417276.jpg",
      "/images/external/unsplash-150260289865.jpg",
    ],
    tag: "Honeymoon Special",
    highlights: ["Eiffel Tower Summit", "Louvre Museum", "Jungfrau Top of Europe", "Lake Geneva Cruise", "Lucerne Chapel Bridge", "Versailles Palace", "Swiss Chocolate Factory", "Mont Blanc View"],
    inclusions: { hotel: "5 Star Hotel", transfers: "All Transfers + Eurostar", meals: "Breakfast & Dinner", activities: "9 Activities", flights: "Round Trip Flights" },
    itinerary: [
      { day: 1, title: "Arrival Paris", description: "Arrive Paris CDG. Transfer to 5-star hotel. Evening Seine River cruise. Eiffel Tower lit up.", meals: "Dinner" },
      { day: 2, title: "Paris — City of Light", description: "Eiffel Tower summit, Louvre Museum, Notre Dame, Champs-Élysées, Arc de Triomphe.", meals: "Breakfast, Dinner" },
      { day: 3, title: "Versailles Palace", description: "Full day at Palace of Versailles — Hall of Mirrors, royal gardens, Marie Antoinette's estate.", meals: "Breakfast, Lunch" },
      { day: 4, title: "Paris to Geneva", description: "Train to Geneva. Lake Geneva cruise. Old Town, Jet d'Eau fountain. Watch museum.", meals: "Breakfast, Dinner" },
      { day: 5, title: "Jungfrau — Top of Europe", description: "Train journey to Jungfraujoch (3,454m) — highest railway station in Europe. Snow and glaciers.", meals: "Breakfast, Lunch" },
      { day: 6, title: "Lucerne", description: "Drive to Lucerne. Chapel Bridge, Lion Monument. Mt. Pilatus cable car. Lake cruise.", meals: "Breakfast, Dinner" },
      { day: 7, title: "Swiss Chocolate & Zurich", description: "Lindt Chocolate Factory tour and tasting. Zurich old town. Rhine Falls nearby.", meals: "Breakfast" },
      { day: 8, title: "Departure Zurich", description: "Transfer to Zurich Airport for return flight.", meals: "Breakfast" },
    ],
    inclusions_list: ["Return airfare from India", "7 nights 5-star hotels", "Breakfast and dinner daily", "Paris–Geneva train", "Eiffel Tower tickets", "Versailles tickets", "Jungfrau railway pass", "Lake Geneva cruise", "English guide"],
    exclusions_list: ["Schengen visa fees (~₹7,000)", "Lunch on select days", "Personal expenses", "Shopping", "Tips", "Optional skiing"],
  },

  // ─── AUSTRALIA ─────────────────────────────────────────
  {
    slug: "australia-dream-journey",
    name: "Australia Dream Journey",
    duration: "12N/13D",
    nights: 12,
    type: "Family",
    typeColor: "#059669",
    price: 245999,
    totalPrice: 983996,
    cities: "Sydney · Melbourne · Cairns",
    country: "Australia",
    heroImage: "/images/external/unsplash-150697303587.jpg",
    images: [
      "/images/external/unsplash-150697303587.jpg",
      "/images/external/unsplash-153400875703.jpg",
    ],
    highlights: ["Sydney Opera House", "Great Barrier Reef Snorkeling", "Uluru Sunrise", "Melbourne Lanes", "Blue Mountains", "Kangaroo Island", "Daintree Rainforest", "Bondi Beach"],
    inclusions: { hotel: "4 Star Hotel", transfers: "All Transfers + Domestic Flights", meals: "Breakfast Daily", activities: "12 Activities", flights: "Round Trip Flights" },
    itinerary: [
      { day: 1, title: "Arrival Sydney", description: "Arrive Sydney. Transfer to hotel. Harbour Bridge walk, Circular Quay.", meals: "Dinner" },
      { day: 2, title: "Sydney Icons", description: "Sydney Opera House tour, Bondi Beach, Darling Harbour, Taronga Zoo.", meals: "Breakfast" },
      { day: 3, title: "Blue Mountains", description: "Day trip to Blue Mountains. Three Sisters, Scenic Railway, Leura village.", meals: "Breakfast, Lunch" },
      { day: 4, title: "Sydney to Melbourne", description: "Fly to Melbourne. Federation Square, Flinders Street, Queen Victoria Market.", meals: "Breakfast" },
      { day: 5, title: "Great Ocean Road", description: "Full day Great Ocean Road. Twelve Apostles, Loch Ard Gorge, Kennett River koalas.", meals: "Breakfast, Lunch" },
      { day: 6, title: "Melbourne City", description: "Melbourne laneways and street art, Melbourne Cricket Ground, St. Kilda Beach.", meals: "Breakfast" },
      { day: 7, title: "Fly to Uluru", description: "Fly to Uluru (Ayers Rock). Uluru sunset viewing with champagne.", meals: "Breakfast, Dinner" },
      { day: 8, title: "Uluru Sunrise & Kata Tjuta", description: "Uluru sunrise. Kata Tjuta domes walk. Aboriginal cultural experience.", meals: "Breakfast, Dinner" },
      { day: 9, title: "Fly to Cairns", description: "Fly to Cairns. Esplanade, night markets, reef briefing.", meals: "Breakfast" },
      { day: 10, title: "Great Barrier Reef", description: "Full day on Great Barrier Reef. Snorkeling, glass-bottom boat, marine life.", meals: "Breakfast, Lunch" },
      { day: 11, title: "Daintree Rainforest", description: "World's oldest rainforest. Cape Tribulation, crocodile cruise, cassowary spotting.", meals: "Breakfast, Lunch" },
      { day: 12, title: "Cairns at Leisure", description: "Skyrail Rainforest Cableway, Kuranda village, butterfly sanctuary.", meals: "Breakfast" },
      { day: 13, title: "Departure Cairns", description: "Transfer to Cairns Airport for return flight.", meals: "Breakfast" },
    ],
    inclusions_list: ["Return airfare + 3 domestic flights", "12 nights 4-star hotels", "Daily breakfast + select meals", "All transfers", "Great Barrier Reef tour", "Great Ocean Road tour", "Uluru sunset experience", "English guide throughout"],
    exclusions_list: ["Australia visa fees (~₹8,000)", "Lunch on select days", "Personal expenses", "Optional helicopter Reef flight", "Tips"],
  },

  // ─── BALI ──────────────────────────────────────────────
  {
    slug: "bali-soul-escape",
    name: "Bali Soul Escape",
    duration: "6N/7D",
    nights: 6,
    type: "Honeymoon",
    typeColor: "#7C3AED",
    price: 52999,
    totalPrice: 105998,
    cities: "Kuta · Ubud · Seminyak",
    country: "Indonesia",
    heroImage: "/images/external/unsplash-153799619447.jpg",
    images: [
      "/images/external/unsplash-153799619447.jpg",
      "/images/external/unsplash-1552733407-5.jpg",
    ],
    tag: "Honeymoon Special",
    highlights: ["Ubud Rice Terraces", "Tanah Lot Sunset", "Romantic Spa Couple Package", "Uluwatu Kecak Dance", "Private Beach Dinner", "Mount Batur Sunrise", "Seminyak Beach Club"],
    inclusions: { hotel: "5 Star Villa", transfers: "Private Car Transfers", meals: "Breakfast & Romantic Dinners", activities: "7 Activities", flights: "Round Trip Flights" },
    itinerary: [
      { day: 1, title: "Arrival — Seminyak", description: "Arrive Ngurah Rai Airport. Private transfer to 5-star villa. Welcome drinks. Seminyak sunset.", meals: "Dinner" },
      { day: 2, title: "Ubud Romance", description: "Tegallalang Rice Terraces. Ubud Monkey Forest. Royal Palace. Cooking class for two.", meals: "Breakfast, Lunch" },
      { day: 3, title: "Mount Batur Sunrise", description: "Pre-dawn trek to Mount Batur. Watch sunrise over volcano and Lake Batur. Afternoon couples spa.", meals: "Breakfast" },
      { day: 4, title: "Tanah Lot & Uluwatu", description: "Tanah Lot Temple at low tide. Uluwatu Cliff temple. Kecak fire dance at sunset.", meals: "Breakfast, Dinner" },
      { day: 5, title: "Private Beach Day", description: "Private beach club in Seminyak. Sunset cocktails. Romantic private beach dinner under stars.", meals: "Breakfast, Dinner" },
      { day: 6, title: "Water Sports & Spa", description: "Tanjung Benoa water sports. Afternoon luxury spa treatment — Balinese massage, flower bath.", meals: "Breakfast" },
      { day: 7, title: "Departure", description: "Morning at leisure. Transfer to airport.", meals: "Breakfast" },
    ],
    inclusions_list: ["Return airfare", "6 nights 5-star villa", "Breakfast daily + romantic dinners", "Private car transfers", "Couples spa treatment", "Mount Batur trek", "All activities as listed"],
    exclusions_list: ["Bali visa on arrival fees (~₹2,000)", "Lunch on select days", "Personal expenses", "Optional yacht charter", "Tips"],
  },

  // ─── EASTERN EUROPE ────────────────────────────────────
  {
    slug: "eastern-europe-grand-tour",
    name: "Eastern Europe Grand Tour",
    duration: "7N/8D",
    nights: 7,
    type: "Family",
    typeColor: "#0891B2",
    price: 125999,
    totalPrice: 503996,
    cities: "Prague · Vienna · Budapest",
    country: "Czech Republic · Austria · Hungary",
    heroImage: "/images/external/unsplash-1541849546-2.jpg",
    images: [
      "/images/external/unsplash-1541849546-2.jpg",
      "/images/external/unsplash-1559662780-c.jpg",
    ],
    highlights: ["Prague Castle", "Charles Bridge", "Vienna Opera House", "Schönbrunn Palace", "Budapest Parliament", "Danube River Cruise", "Vienna Sachertorte", "Bohemian Countryside"],
    inclusions: { hotel: "4 Star Hotel", transfers: "All Transfers + Inter-city Coach", meals: "Breakfast & Dinner", activities: "9 Activities", flights: "Round Trip Flights" },
    itinerary: [
      { day: 1, title: "Arrival Prague", description: "Arrive Prague. Old Town Square, Astronomical Clock, Wenceslas Square. Evening river walk.", meals: "Dinner" },
      { day: 2, title: "Prague Castle & Charles Bridge", description: "Prague Castle complex, St. Vitus Cathedral, Charles Bridge at sunrise. Josefov Jewish Quarter.", meals: "Breakfast, Dinner" },
      { day: 3, title: "Czech Countryside — Cesky Krumlov", description: "Day trip to UNESCO Cesky Krumlov castle town. River rafting, old town exploration.", meals: "Breakfast, Lunch" },
      { day: 4, title: "Prague to Vienna", description: "Coach to Vienna. Schönbrunn Palace and gardens. Ringstrasse boulevard. Vienna State Opera.", meals: "Breakfast, Dinner" },
      { day: 5, title: "Vienna Imperial Day", description: "Hofburg Palace, Spanish Riding School, Belvedere Museum (Klimt's The Kiss). Prater Giant Wheel.", meals: "Breakfast" },
      { day: 6, title: "Vienna to Budapest", description: "Coach to Budapest. Fisherman's Bastion, Matthias Church. Evening Danube River cruise with dinner.", meals: "Breakfast, Dinner" },
      { day: 7, title: "Budapest Grand Day", description: "Hungarian Parliament, Heroes' Square, Vajdahunyad Castle. Széchenyi thermal baths.", meals: "Breakfast, Lunch" },
      { day: 8, title: "Departure Budapest", description: "Transfer to Budapest Airport.", meals: "Breakfast" },
    ],
    inclusions_list: ["Return airfare", "7 nights 4-star hotels", "Breakfast and dinner daily", "Inter-city coaches", "All entry tickets", "Danube river cruise", "English guide throughout"],
    exclusions_list: ["Schengen visa fees (~₹7,000)", "Lunch on select days", "Personal expenses", "Optional horse show Vienna", "Tips"],
  },

  // ─── JAPAN ─────────────────────────────────────────────
  {
    slug: "japan-sakura-serenity",
    name: "Japan Sakura & Serenity",
    duration: "8N/9D",
    nights: 8,
    type: "Cultural",
    typeColor: "#DC2626",
    price: 195999,
    totalPrice: 391998,
    cities: "Tokyo · Kyoto · Osaka",
    country: "Japan",
    heroImage: "/images/external/unsplash-152836098327.jpg",
    images: [
      "/images/external/unsplash-152836098327.jpg",
      "/images/external/unsplash-149397604037.jpg",
    ],
    highlights: ["Mount Fuji Day Trip", "Fushimi Inari Shrine", "Shibuya Crossing", "Arashiyama Bamboo Grove", "Nara Deer Park", "Shinkansen Bullet Train", "Tsukiji Fish Market", "Tea Ceremony Kyoto"],
    inclusions: { hotel: "4 Star Hotel + Ryokan", transfers: "JR Pass + All Transfers", meals: "Breakfast & Select Dinners", activities: "10 Activities", flights: "Round Trip Flights" },
    itinerary: [
      { day: 1, title: "Arrival Tokyo", description: "Arrive Tokyo Narita. Transfer to hotel. Evening Shibuya Crossing and Harajuku district.", meals: "Dinner" },
      { day: 2, title: "Tokyo Highlights", description: "Tsukiji Fish Market, Senso-ji Temple Asakusa, Tokyo Skytree, Shinjuku by night.", meals: "Breakfast" },
      { day: 3, title: "Mount Fuji Day Trip", description: "Bullet train to Mt. Fuji. Fuji Five Lakes area. Chureito Pagoda viewpoint.", meals: "Breakfast, Lunch" },
      { day: 4, title: "Tokyo to Kyoto", description: "Shinkansen to Kyoto. Nijo Castle, Kinkaku-ji (Golden Pavilion), Ryoan-ji Rock Garden.", meals: "Breakfast, Dinner" },
      { day: 5, title: "Kyoto Cultural Day", description: "Fushimi Inari Shrine (10,000 torii gates), traditional tea ceremony, geisha district Gion.", meals: "Breakfast" },
      { day: 6, title: "Arashiyama & Nara", description: "Bamboo Grove, Tenryu-ji Temple. Afternoon Nara — friendly deer, Todai-ji Giant Buddha.", meals: "Breakfast, Lunch" },
      { day: 7, title: "Ryokan Experience", description: "Check into traditional ryokan. Onsen (hot spring bath). Kaiseki multi-course Japanese dinner.", meals: "Breakfast, Dinner" },
      { day: 8, title: "Osaka Food & Fun", description: "Travel to Osaka. Dotonbori, Osaka Castle, Kuromon Ichiba Market. Street food crawl.", meals: "Breakfast" },
      { day: 9, title: "Departure Osaka", description: "Transfer to Kansai International Airport.", meals: "Breakfast" },
    ],
    inclusions_list: ["Return airfare", "8 nights (hotels + 1 ryokan)", "Breakfast daily + select dinners", "7-day JR Pass", "All transfers", "Tea ceremony", "All entry tickets", "English guide"],
    exclusions_list: ["Japan visa fees (~₹5,000)", "Lunch on select days", "Personal expenses", "Optional kimono rental", "Tips"],
  },

  // ─── ANDAMAN ───────────────────────────────────────────
  {
    slug: "andaman-island-bliss",
    name: "Andaman Island Bliss",
    duration: "5N/6D",
    nights: 5,
    type: "Beach",
    typeColor: "#0891B2",
    price: 32999,
    totalPrice: 131996,
    cities: "Port Blair · Havelock · Neil Island",
    country: "India",
    heroImage: "/images/external/unsplash-150752542803.jpg",
    images: [
      "/images/external/unsplash-150752542803.jpg",
      "/images/external/unsplash-157384398126.jpg",
    ],
    highlights: ["Radhanagar Beach (Asia's Best)", "Scuba Diving Havelock", "Cellular Jail Light Show", "Snorkeling Neil Island", "Glass Bottom Boat", "Elephanta Beach Trek", "Coral Safari"],
    inclusions: { hotel: "3 Star Resort + Beach Cottage", transfers: "Ferry + AC Car Transfers", meals: "Breakfast & Dinner", activities: "6 Activities", flights: "Round Trip Flights" },
    itinerary: [
      { day: 1, title: "Arrival Port Blair", description: "Arrive Port Blair. Cellular Jail visit. Evening Sound & Light Show — India's freedom struggle.", meals: "Dinner" },
      { day: 2, title: "Port Blair to Havelock", description: "Ferry to Havelock Island. Radhanagar Beach — Asia's Best Beach. Sunset swim.", meals: "Breakfast, Dinner" },
      { day: 3, title: "Havelock — Scuba & Snorkeling", description: "Morning scuba diving at Elephant Beach. Afternoon snorkeling at Kalapathar Beach.", meals: "Breakfast, Lunch, Dinner" },
      { day: 4, title: "Havelock to Neil Island", description: "Ferry to Neil Island. Natural Bridge, Laxmanpur Beach, coral reef snorkeling.", meals: "Breakfast, Dinner" },
      { day: 5, title: "Glass Bottom Boat & Coral Safari", description: "Glass bottom boat ride over coral reefs. Afternoon at leisure on pristine beach.", meals: "Breakfast, Dinner" },
      { day: 6, title: "Return Port Blair — Departure", description: "Ferry back to Port Blair. Transfer to airport.", meals: "Breakfast" },
    ],
    inclusions_list: ["Return airfare from mainland India", "5 nights (resort + beach cottage)", "Breakfast and dinner daily", "Ferry transfers between islands", "Scuba diving (1 dive)", "Snorkeling equipment", "Glass bottom boat", "English guide"],
    exclusions_list: ["Lunch on select days", "Additional dives", "Personal expenses", "Optional sea walk", "Tips"],
  },
]

export const getCustomPackageBySlug = (slug: string) =>
  customPackages.find(p => p.slug === slug)