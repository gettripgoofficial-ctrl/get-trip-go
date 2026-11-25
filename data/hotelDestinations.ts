export type HotelDestination = {
  slug: string
  name: string
  country: string
  image: string
  guide: {
    intro: string
    stayAreas: string[]
    placesToVisit: string[]
    localFood: string[]
    gettingAround: string
  }
}

export const hotelDestinations: HotelDestination[] = [
  {
    slug: "bangkok", name: "Bangkok", country: "Thailand", image: "/images/destinations/bangkok.jpg",
    guide: {
      intro: "Bangkok combines landmark temples, riverside neighbourhoods, markets and a wide range of Thai food. Choose a base near the sights or transit that best fit your plans.",
      stayAreas: ["Riverside for temples, river views and boat connections", "Sukhumvit for shopping, dining and BTS access", "Siam for malls and central transport links"],
      placesToVisit: ["The Grand Palace and Wat Phra Kaew", "Wat Pho and Wat Arun", "Chao Phraya river piers and a local market"],
      localFood: ["Pad thai and stir-fried noodles", "Tom yum and other Thai soups", "Mango sticky rice from a reputable market stall"],
      gettingAround: "Use the BTS Skytrain, MRT, river boats and metered taxis. Allow extra time for road traffic and check the route before choosing a hotel."
    }
  },
  {
    slug: "paris", name: "Paris", country: "France", image: "/images/destinations/paris.jpg",
    guide: {
      intro: "Paris is best explored by neighbourhood, with museums, gardens, cafés and historic streets spread across the city. Pick accommodation near a Metro line that serves your main interests.",
      stayAreas: ["Le Marais for historic streets, galleries and cafés", "Saint-Germain-des-Prés for Left Bank walks and dining", "Opéra for department stores and central connections"],
      placesToVisit: ["Eiffel Tower and the Champ de Mars", "Louvre area and the Tuileries Garden", "Île de la Cité and the Seine riverbanks"],
      localFood: ["Croissants and bakery pastries", "Crêpes from a dedicated crêperie", "Classic French dishes at a neighbourhood bistro"],
      gettingAround: "The Metro and RER cover most visitor routes. Check service notices, walking distances and museum opening days before planning each day."
    }
  },
  {
    slug: "london", name: "London", country: "United Kingdom", image: "/images/destinations/london.jpg",
    guide: {
      intro: "London offers royal landmarks, museums, theatre and distinct neighbourhoods connected by public transport. Choose a stay near the Tube or rail route you expect to use most.",
      stayAreas: ["South Bank for river walks and cultural venues", "Bloomsbury for museums and central connections", "Kensington for museums and west London access"],
      placesToVisit: ["Westminster Abbey and the Houses of Parliament", "The British Museum", "South Bank and the Tower of London"],
      localFood: ["Traditional fish and chips", "Sunday roast at a pub", "Food stalls at a market such as Borough Market"],
      gettingAround: "Use the Underground, buses and Elizabeth line, and check contactless or travel-card options. Allow time for transfers across this large city."
    }
  },
  {
    slug: "dubai", name: "Dubai", country: "United Arab Emirates", image: "/images/destinations/dubai.jpg",
    guide: {
      intro: "Dubai pairs modern districts and major attractions with older creekside neighbourhoods. Consider heat, transfer times and which area your planned activities are in when selecting a stay.",
      stayAreas: ["Downtown Dubai for central landmarks and malls", "Dubai Marina and JBR for waterfront promenades", "Deira and Bur Dubai for creekside heritage and souks"],
      placesToVisit: ["Dubai Creek and the historic Al Fahidi district", "Downtown landmarks and Dubai Mall", "Marina and JBR waterfront"],
      localFood: ["Emirati dishes such as machboos where available", "Middle Eastern grills and mezze", "South Asian food in neighbourhood restaurants"],
      gettingAround: "The Metro connects several major districts; taxis and ride services help with destinations beyond the line. Check attraction locations and summer conditions."
    }
  },
  {
    slug: "singapore", name: "Singapore", country: "Singapore", image: "/images/destinations/singapore.jpg",
    guide: {
      intro: "Singapore is compact and easy to explore by neighbourhood, with gardens, museums, waterfront areas and hawker centres. Staying close to an MRT station makes day plans simpler.",
      stayAreas: ["Marina Bay for waterfront landmarks", "Bugis and Kampong Glam for heritage and shopping", "Chinatown for food, temples and central MRT access"],
      placesToVisit: ["Gardens by the Bay", "National Museum of Singapore and Civic District", "Sentosa for attractions and beaches"],
      localFood: ["Hainanese chicken rice", "Laksa and kaya toast", "Hawker-centre dishes such as satay; check operating days"],
      gettingAround: "Use the MRT and buses with a stored-value or accepted contactless payment method. Carry water and plan for heat and sudden rain."
    }
  },
  {
    slug: "tokyo", name: "Tokyo", country: "Japan", image: "/images/destinations/tokyo.jpg",
    guide: {
      intro: "Tokyo is a collection of distinct districts connected by an extensive rail network. Choose a hotel near a station and group activities by area to reduce cross-city travel.",
      stayAreas: ["Shinjuku for transport, dining and nightlife", "Tokyo Station and Ginza for central access and shopping", "Asakusa for temple visits and a more historic atmosphere"],
      placesToVisit: ["Sensō-ji and Asakusa", "Meiji Shrine and nearby Harajuku", "Ueno Park and its museums"],
      localFood: ["Sushi and seasonal seafood", "Ramen from a specialist shop", "Tempura or soba at a local restaurant"],
      gettingAround: "Use train and subway route planners, and check the station exit closest to your destination. Avoid overloading a day with distant districts."
    }
  },
  {
    slug: "new-york", name: "New York", country: "United States", image: "/images/destinations/new-york.jpg",
    guide: {
      intro: "New York City spans five boroughs, and Manhattan alone has many different bases for visitors. Compare transit access, room size and daily travel time before booking a stay.",
      stayAreas: ["Midtown for first-time access to central Manhattan sights", "Lower Manhattan for historic sites and downtown connections", "Long Island City for subway links across the East River"],
      placesToVisit: ["Central Park and nearby museums", "The Statue of Liberty and Ellis Island—check ferry schedules", "The 9/11 Memorial and One World Observatory area"],
      localFood: ["New York-style pizza", "Bagels from a local bakery", "A range of cuisines in Queens and other boroughs"],
      gettingAround: "The subway and buses are useful for most routes. Check service changes, walking distances and late-night travel options for your itinerary."
    }
  },
  {
    slug: "rome", name: "Rome", country: "Italy", image: "/images/destinations/rome.jpg",
    guide: {
      intro: "Rome's ancient sites, churches and neighbourhoods reward a walkable itinerary, but sights are spread out. Choose accommodation with convenient Metro or bus links and book timed-entry attractions ahead where required.",
      stayAreas: ["Centro Storico for historic squares and walking", "Monti for neighbourhood dining near ancient sites", "Prati for Vatican access and residential streets"],
      placesToVisit: ["Colosseum and Roman Forum", "Pantheon and Piazza Navona", "Vatican Museums and St Peter's Basilica—check separate entry arrangements"],
      localFood: ["Cacio e pepe and other Roman pastas", "Supplì from a local takeaway", "Roman-style artichokes when in season"],
      gettingAround: "Walk where practical and use Metro, buses or trams for longer trips. Wear comfortable shoes for cobbled streets and verify attraction opening times."
    }
  },
  {
    slug: "istanbul", name: "Istanbul", country: "Türkiye", image: "/images/destinations/istanbul.jpg",
    guide: {
      intro: "Istanbul connects historic sites, markets and waterfront neighbourhoods across two continents. Pick accommodation near the sights or transit routes you plan to use and account for hills and bridge traffic.",
      stayAreas: ["Sultanahmet for major historic landmarks", "Karaköy and Galata for waterfront access and cafés", "Kadıköy for neighbourhood markets and the Asian-side experience"],
      placesToVisit: ["Hagia Sophia and the Sultanahmet area", "Topkapı Palace—check visitor access and tickets", "A Bosphorus ferry ride between waterfront districts"],
      localFood: ["Simit and Turkish breakfast", "Meze and grilled dishes", "Baklava or other pastries from established bakeries"],
      gettingAround: "Trams, Metro, ferries and buses connect many areas. Check current transit-card options and allow extra time for busy crossings."
    }
  },
  {
    slug: "barcelona", name: "Barcelona", country: "Spain", image: "/images/destinations/barcelona.jpg",
    guide: {
      intro: "Barcelona combines Modernisme architecture, museums, markets and Mediterranean waterfront. Reserve timed-entry attractions in advance and select a stay near Metro or train connections.",
      stayAreas: ["Eixample for architecture and central grid streets", "El Born for historic lanes, museums and dining", "Barceloneta for beach access and waterfront walks"],
      placesToVisit: ["Sagrada Família—check official ticket availability", "Park Güell and Gràcia", "The Gothic Quarter and nearby El Born"],
      localFood: ["Pa amb tomàquet and Catalan dishes", "Seafood from a restaurant with clear menus", "Market produce; follow local rules about eating inside markets"],
      gettingAround: "The Metro, buses and walking cover many visitor routes. Check local transport notices and keep valuables secure in crowded areas."
    }
  },
  {
    slug: "amsterdam", name: "Amsterdam", country: "Netherlands", image: "/images/destinations/amsterdam.jpg",
    guide: {
      intro: "Amsterdam's canal belt, museums and residential districts are easy to combine on foot, by tram or by bicycle. Choose a stay based on transit and walking distance rather than assuming every canal area is alike.",
      stayAreas: ["Canal Belt for historic streets and central walks", "Museum Quarter for major museums and Vondelpark", "Amsterdam-Noord for a different neighbourhood feel with ferry connections"],
      placesToVisit: ["Rijksmuseum and Museumplein", "Anne Frank House—tickets are date-specific", "Canal district and Jordaan"],
      localFood: ["Stroopwafels from a reputable bakery or market", "Dutch cheeses and herring from established vendors", "Indonesian rijsttafel at a restaurant"],
      gettingAround: "Use trams, Metro, buses and ferries; cycle only if comfortable with local traffic. Book popular museums early and respect residential canal areas."
    }
  },
  {
    slug: "hong-kong", name: "Hong Kong", country: "Hong Kong", image: "/images/destinations/hong-kong.jpg",
    guide: {
      intro: "Hong Kong is known for its harbour, dense urban districts, hiking routes and varied Cantonese food. The MTR makes many areas accessible, so compare a hotel's station access and room needs.",
      stayAreas: ["Central and Sheung Wan for business, dining and historic trams", "Tsim Sha Tsui for harbour views and museums", "Causeway Bay for shopping and Hong Kong Island transport"],
      placesToVisit: ["Victoria Peak—check weather and tram queues", "Star Ferry and the harbourfront", "Wong Tai Sin Temple or a country-park trail"],
      localFood: ["Dim sum at a long-running restaurant", "Wonton noodles", "Egg tarts and milk tea from a local bakery or café"],
      gettingAround: "Use the MTR, buses, trams and ferries. Check service hours for outlying islands and bring a payment method accepted by local transit."
    }
  },
  {
    slug: "kuala-lumpur", name: "Kuala Lumpur", country: "Malaysia", image: "/images/destinations/kuala-lumpur.jpg",
    guide: {
      intro: "Kuala Lumpur brings together major city landmarks, shopping districts and Malay, Chinese and Indian food traditions. Select a hotel near a rail station or the neighbourhoods you plan to explore.",
      stayAreas: ["Bukit Bintang for shopping and dining", "KLCC for the city-centre landmarks", "Chinatown and Pasar Seni for markets and heritage streets"],
      placesToVisit: ["Petronas Twin Towers and KLCC Park", "Merdeka Square and the historic centre", "Batu Caves—check access and dress guidance"],
      localFood: ["Nasi lemak", "Roti canai and teh tarik", "Hawker-centre dishes such as satay; check stall hours"],
      gettingAround: "Use the rail network for major corridors and ride-hailing or taxis for connections. Account for traffic and the distance between some attractions."
    }
  },
  {
    slug: "seoul", name: "Seoul", country: "South Korea", image: "/images/destinations/seoul.jpg",
    guide: {
      intro: "Seoul pairs historic palaces and market streets with contemporary neighbourhoods. The city is large, so choose a base near a subway line and plan visits by district.",
      stayAreas: ["Jongno for palaces and historic neighbourhoods", "Myeongdong for shopping and central subway access", "Hongdae for cafés, music venues and a younger nightlife scene"],
      placesToVisit: ["Gyeongbokgung Palace—check closure days and entry details", "Bukchon Hanok Village and nearby heritage streets", "N Seoul Tower area for city views"],
      localFood: ["Bibimbap and Korean stews", "Korean barbecue at a restaurant with clear ordering", "Street snacks from busy markets such as Gwangjang"],
      gettingAround: "The subway and buses are extensive. Use a current map app, check last-train times and be considerate in residential heritage areas."
    }
  },
  {
    slug: "osaka", name: "Osaka", country: "Japan", image: "/images/destinations/osaka.jpg",
    guide: {
      intro: "Osaka is a lively base for food, shopping and day trips in the Kansai region. Stay near a major rail or subway station and check which station serves your planned sights.",
      stayAreas: ["Namba for dining, shopping and southern Osaka connections", "Umeda for major rail links and northern city access", "Osaka Castle area for parks and quieter evenings"],
      placesToVisit: ["Osaka Castle Park", "Dōtonbori and the Namba canal district", "Kuromon Market; check vendor schedules and visitor guidance"],
      localFood: ["Takoyaki from a specialist stall", "Okonomiyaki", "Kushikatsu from a restaurant in Shinsekai"],
      gettingAround: "Use Osaka Metro and JR lines; separate operators may require different tickets. Plan rail connections before day trips to Kyoto or Nara."
    }
  },
  {
    slug: "prague", name: "Prague", country: "Czechia", image: "/images/destinations/prague.jpg",
    guide: {
      intro: "Prague's compact historic centre is known for architecture, river views and walkable districts. Compare a central stay with quieter neighbourhoods that have tram or Metro connections.",
      stayAreas: ["Old Town for central historic sights", "Malá Strana for castle-side streets and river walks", "Vinohrady for cafés and residential character"],
      placesToVisit: ["Prague Castle complex—check ticket options", "Charles Bridge and the Old Town", "Letná Park for views across the river"],
      localFood: ["Czech dumplings and stews", "Smažený sýr from a local restaurant", "Koláče or other Czech pastries from a bakery"],
      gettingAround: "The historic centre is walkable but includes cobblestones and hills. Use trams and Metro for longer journeys and validate tickets as required."
    }
  },
  {
    slug: "vienna", name: "Vienna", country: "Austria", image: "/images/destinations/vienna.jpg",
    guide: {
      intro: "Vienna is a city of imperial landmarks, museums, music venues and café culture. Choose a hotel close to a U-Bahn or tram stop and check event schedules for your travel dates.",
      stayAreas: ["Innere Stadt for central landmarks and museums", "Leopoldstadt for the Prater and easy transit", "Neubau for museums, independent shops and cafés"],
      placesToVisit: ["Schönbrunn Palace—check official timed-entry details", "The Ringstrasse and its museums", "Belvedere Palace and gardens"],
      localFood: ["Wiener schnitzel", "Apfelstrudel in a traditional café", "Austrian pastries and coffee-house fare"],
      gettingAround: "The U-Bahn, trams and buses make city travel straightforward. Check ticket validity, museum opening days and seasonal palace access."
    }
  },
  {
    slug: "madrid", name: "Madrid", country: "Spain", image: "/images/destinations/madrid.jpg",
    guide: {
      intro: "Madrid combines major art museums, public squares, parks and neighbourhood dining. Stay near a Metro station and group museum visits with nearby areas to keep the itinerary manageable.",
      stayAreas: ["Centro and Sol for central landmarks", "Retiro for park access and museums", "Malasaña for cafés, shops and nightlife"],
      placesToVisit: ["Prado Museum—check timed-entry options", "Retiro Park and the nearby museum district", "Royal Palace and Plaza Mayor"],
      localFood: ["Tortilla española", "Bocadillo de calamares around Plaza Mayor", "Churros with chocolate from a traditional café"],
      gettingAround: "Use the Metro, Cercanías rail and walking. Check museum schedules, midday opening patterns and transit connections for late evenings."
    }
  },
  {
    slug: "sydney", name: "Sydney", country: "Australia", image: "/images/destinations/sydney.jpg",
    guide: {
      intro: "Sydney's harbour, beaches and neighbourhoods are spread across a large area. Choose accommodation based on ferry, train or bus access to the activities you have planned.",
      stayAreas: ["The Rocks and Circular Quay for harbour and ferry connections", "Darling Harbour for waterfront attractions", "Surry Hills for cafés and inner-city access"],
      placesToVisit: ["Sydney Opera House and Circular Quay", "Royal Botanic Garden and harbour walks", "Bondi to Coogee coastal walk—check weather and track conditions"],
      localFood: ["Seafood from a restaurant with clear sourcing", "Flat white and brunch in a local café", "A range of cuisines across the inner suburbs"],
      gettingAround: "Use trains, buses, light rail and ferries with the currently accepted local payment method. Check beach safety advice and seasonal conditions."
    }
  },
  {
    slug: "los-angeles", name: "Los Angeles", country: "United States", image: "/images/destinations/los-angeles.jpg",
    guide: {
      intro: "Los Angeles is geographically spread out, so hotel location and transport planning matter. Select a base near the neighbourhoods you intend to visit and budget time for road traffic.",
      stayAreas: ["Hollywood for entertainment landmarks and Metro access", "Santa Monica for the coast and walkable streets", "Downtown LA for museums, venues and rail connections"],
      placesToVisit: ["Getty Center—check timed-entry and parking guidance", "Griffith Observatory and its surrounding trails", "Santa Monica Pier and nearby coastline"],
      localFood: ["Tacos from a well-reviewed local taqueria", "Korean dishes in Koreatown", "Farmers' market produce and regional cuisine"],
      gettingAround: "Metro rail and buses serve selected corridors, while many itineraries use taxis or rental cars. Check traffic, parking and walking distances in advance."
    }
  },
  {
    slug: "pattaya", name: "Pattaya", country: "Thailand", image: "/images/destinations/pattaya.jpg",
    guide: {
      intro: "Pattaya is a beach resort city on Thailand's eastern Gulf coast, roughly two hours by road from Bangkok. It suits beach stays, water activities and day trips to nearby islands. Choose an area based on the atmosphere you want.",
      stayAreas: ["Central Pattaya for restaurants, shopping and nightlife", "Jomtien for a longer, quieter beach", "Naklua and Wongamat for calmer, more upmarket stays"],
      placesToVisit: ["The Sanctuary of Truth wooden temple", "A day boat trip to Koh Larn", "The Pattaya viewpoint at Khao Phra Tamnak"],
      localFood: ["Grilled seafood from a busy, well-reviewed restaurant", "Som tam and other Thai street food", "Mango sticky rice"],
      gettingAround: "Shared songthaew trucks run along the main roads, and taxis or ride apps help for longer trips; check or agree fares first. Allow for traffic on road transfers from Bangkok."
    }
  },
  {
    slug: "santorini", name: "Santorini", country: "Greece", image: "/images/destinations/santorini.jpg",
    guide: {
      intro: "Santorini is a Greek island on the rim of a flooded volcanic caldera, known for white-and-blue villages, sunsets and black-sand beaches. Views and prices vary a lot between villages, so choose your base carefully.",
      stayAreas: ["Fira for transport links, shops and caldera views", "Oia for sunsets and a village atmosphere", "Imerovigli for quieter stays on the caldera edge"],
      placesToVisit: ["Oia village and its sunset viewpoints", "The Fira to Oia caldera walk; check weather and path conditions", "The Akrotiri archaeological site"],
      localFood: ["Tomatokeftedes (tomato fritters)", "Fava and white aubergine dishes", "Local Assyrtiko wine from a island winery"],
      gettingAround: "Local buses link Fira with the main villages, while taxis and rental vehicles cover other routes. Book ahead in summer, expect steps and steep paths at many hotels, and check ferry and flight schedules."
    }
  },
  {
    slug: "copenhagen", name: "Copenhagen", country: "Denmark", image: "/images/destinations/copenhagen.jpg",
    guide: {
      intro: "Copenhagen is a compact, bike-friendly capital with colourful harbours, parks, design shops and a strong food scene. Most central sights are close together, so staying near a Metro or S-train station works well.",
      stayAreas: ["Indre By for central sights and shopping", "Vesterbro for dining and nightlife near the central station", "Nørrebro for cafés and neighbourhood streets"],
      placesToVisit: ["Nyhavn harbour", "Tivoli Gardens", "Rosenborg Castle and the King's Garden"],
      localFood: ["Smørrebrød (open sandwiches)", "Danish pastries from a local bakery", "Seafood or New Nordic restaurants; book popular places ahead"],
      gettingAround: "The Metro, S-trains and buses cover most visitor routes, and cycling is common. Check ticket zones and keep to marked bike lanes if you ride."
    }
  },
  {
    slug: "stockholm", name: "Stockholm", country: "Sweden", image: "/images/destinations/stockholm.jpg",
    guide: {
      intro: "Stockholm is spread across islands, with a medieval old town, museums and a large archipelago nearby. Plan your days by area and use boats as well as trains.",
      stayAreas: ["Gamla Stan for medieval streets and central walks", "Norrmalm for the central station and shopping", "Södermalm for cafés, bars and city views"],
      placesToVisit: ["Gamla Stan, the old town", "The Vasa Museum on Djurgården", "A ferry or boat trip into the archipelago"],
      localFood: ["Swedish meatballs", "Fika: coffee with a cinnamon bun", "Herring and other seafood dishes"],
      gettingAround: "The metro, buses, trams and commuter ferries are covered by the local transport system. Check ticket options in the official app and allow for winter weather."
    }
  },
  {
    slug: "oslo", name: "Oslo", country: "Norway", image: "/images/destinations/oslo.jpg",
    guide: {
      intro: "Oslo combines a waterfront setting with museums, parks and quick access to forests and fjord islands. Costs are high, so a hotel near the central station or metro often saves time and money.",
      stayAreas: ["Sentrum for the central station and main sights", "Grünerløkka for cafés and independent shops", "Aker Brygge and Bjørvika for the waterfront"],
      placesToVisit: ["The Oslo Opera House and its walkable roof", "Vigeland Sculpture Park", "Akershus Fortress"],
      localFood: ["Fresh seafood and salmon", "Norwegian waffles", "Cinnamon buns from a local bakery"],
      gettingAround: "The metro (T-bane), trams, buses and harbour ferries are covered by the local ticket system. Check ticket zones and opening times, as some venues close early or on certain days."
    }
  },
  {
    slug: "reykjavik", name: "Reykjavik", country: "Iceland", image: "/images/destinations/reykjavik.jpg",
    guide: {
      intro: "Reykjavik is Iceland's small, walkable capital and the starting point for most trips to its volcanic and coastal landscapes. Weather changes quickly, so plan flexible days.",
      stayAreas: ["Downtown (101) for walkable streets and dining", "The harbour area for museums and whale-watching trips", "Laugardalur for geothermal pools and quieter streets"],
      placesToVisit: ["The tower of Hallgrímskirkja church", "Harpa concert hall and the harbour", "Day trips such as the Golden Circle or a geothermal spa; book ahead"],
      localFood: ["Icelandic lamb soup", "Fresh fish at a harbour restaurant", "Icelandic hot dogs"],
      gettingAround: "Downtown is walkable and city buses cover the wider area, while day tours or rental cars reach places beyond it. Check official road and weather updates before driving, especially in winter."
    }
  },
]

export function getHotelDestinationBySlug(slug: string) {
  return hotelDestinations.find((destination) => destination.slug === slug)
}
