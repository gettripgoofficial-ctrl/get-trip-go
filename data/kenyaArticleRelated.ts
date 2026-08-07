// Curated "Related Reads" per article slug. Values are objects with title + href
// so this can point to either dynamic [slug] articles or static-route articles
// (e.g. /kenya/big-five-how-to-spot), since routing doesn't care which system
// built the destination page.
export const kenyaArticleRelated: Record<string, { title: string; href: string }[]> = {
  "elsas-kopje-built-into-the-rock": [
    { title: "Rare Sightings: Black Rhinos of Ol Pejeta", href: "/kenya/rare-sightings-black-rhinos" },
    { title: "Community Conservancies: How Locals Protect Wildlife", href: "/kenya/community-conservancies-how-locals-protect-wildlife" },
    { title: "Best Time to Visit Kenya: A Season-by-Season Guide", href: "/kenya/best-time-to-visit-kenya" },
  ],

  "giraffes-of-kenya": [
    { title: "Giraffe Manor: Breakfast With Giraffes", href: "/kenya/giraffe-manor-breakfast-with-giraffes" },
    { title: "Sasaab: A Moroccan-Style Lodge on the Ewaso Nyiro", href: "/kenya/sasaab-a-moroccan-style-lodge" },
    { title: "Lake Nakuru's Flamingo Spectacle", href: "/kenya/lake-nakurus-flamingo-spectacle" },
  ],

  "rare-sightings-black-rhinos": [
    { title: "Rhino Conservation: The Fight to Save a Species", href: "/kenya/rhino-conservation-the-fight-to-save-a-species" },
    { title: "Kenya's Big Cats: Lions, Leopards and Cheetahs Compared", href: "/kenya/kenyas-big-cats-compared" },
    { title: "Anti-Poaching Efforts in Kenya's Parks", href: "/kenya/anti-poaching-efforts-in-kenyas-parks" },
  ],

  "lake-nakuru-park-birds-rhinos": [
    { title: "Lake Nakuru's Flamingo Spectacle", href: "/kenya/lake-nakurus-flamingo-spectacle" },
    { title: "Birdwatching in Kenya: 50 Species to Look For", href: "/kenya/birdwatching-in-kenya-detail" },
    { title: "Loldia House: A Colonial Farmhouse on Lake Naivasha", href: "/kenya/loldia-house-a-colonial-farmhouse" },
  ],

  "tsavo-largest-wildest-park": [
    { title: "Amboseli National Park: Complete Guide", href: "/kenya/amboseli-national-park-guide" },
    { title: "Finch Hattons: Out of Africa, Reimagined", href: "/kenya/finch-hattons-out-of-africa-reimagined" },
    { title: "Kenya's Big Cats: Lions, Leopards and Cheetahs Compared", href: "/kenya/kenyas-big-cats-compared" },
  ],

  "amboseli-national-park-guide": [
    { title: "Amboseli's Last Super Tuskers", href: "/kenya/amboselis-last-super-tuskers" },
    { title: "Masai Mara vs Serengeti: What's the Difference", href: "/kenya/masai-mara-vs-serengeti" },
    { title: "Best Time to Visit Kenya: A Season-by-Season Guide", href: "/kenya/best-time-to-visit-kenya" },
  ],

  "masai-mara-reserve-vs-conservancies": [
    { title: "Masai Mara vs Serengeti: What's the Difference", href: "/kenya/masai-mara-vs-serengeti" },
    { title: "Night Safaris: What Happens After Dark", href: "/kenya/night-safaris-what-happens-after-dark" },
    { title: "The Wildebeest River Crossing: A Photographer's Guide", href: "/kenya/wildebeest-river-crossing-guide" },
  ],

  "masai-mara-vs-serengeti": [
    { title: "The Wildebeest River Crossing: A Photographer's Guide", href: "/kenya/wildebeest-river-crossing-guide" },
    { title: "Best Time to Visit Kenya: A Season-by-Season Guide", href: "/kenya/best-time-to-visit-kenya" },
    { title: "Kenya's Big Cats: Lions, Leopards and Cheetahs Compared", href: "/kenya/kenyas-big-cats-compared" },
  ],

  "birdwatching-in-kenya-detail": [
    { title: "Lake Nakuru's Flamingo Spectacle", href: "/kenya/lake-nakurus-flamingo-spectacle" },
    { title: "Best Time to Visit Kenya: A Season-by-Season Guide", href: "/kenya/best-time-to-visit-kenya" },
    { title: "Kenya's Big Cats: Lions, Leopards and Cheetahs Compared", href: "/kenya/kenyas-big-cats-compared" },
  ],

  "wildebeest-river-crossing-guide": [
    { title: "Kenya's Big Cats: Lions, Leopards and Cheetahs Compared", href: "/kenya/kenyas-big-cats-compared" },
    { title: "Climate Change and the Great Migration", href: "/kenya/climate-change-and-the-great-migration" },
    { title: "Best Time to Visit Kenya: A Season-by-Season Guide", href: "/kenya/best-time-to-visit-kenya" },
  ],

  "kenyas-big-cats-compared": [
    { title: "Cheetahs of the Mara: Africa's Fastest Predator", href: "/kenya/cheetahs-of-the-mara" },
    { title: "Night Safaris: What Happens After Dark", href: "/kenya/night-safaris-what-happens-after-dark" },
    { title: "Best Time to Visit Kenya: A Season-by-Season Guide", href: "/kenya/best-time-to-visit-kenya" },
  ],

  "cheetahs-of-the-mara": [
    { title: "Big Five: How to Spot Lion, Leopard, Rhino, Elephant and Buffalo", href: "/kenya/big-five-how-to-spot" },
    { title: "The Great Migration Explained: When, Where and Why", href: "/kenya/the-great-migration-explained" },
    { title: "Best Time to Visit Kenya: A Season-by-Season Guide", href: "/kenya/best-time-to-visit-kenya" },
  ],
  "amboselis-last-super-tuskers": [
    { title: "Big Five: How to Spot Lion, Leopard, Rhino, Elephant and Buffalo", href: "/kenya/big-five-how-to-spot" },
    { title: "Best Time to Visit Kenya: A Season-by-Season Guide", href: "/kenya/best-time-to-visit-kenya" },
    { title: "Cheetahs of the Mara: Africa's Fastest Predator", href: "/kenya/cheetahs-of-the-mara" },
  ],
  "lake-nakurus-flamingo-spectacle": [
    { title: "Big Five: How to Spot Lion, Leopard, Rhino, Elephant and Buffalo", href: "/kenya/big-five-how-to-spot" },
    { title: "Cheetahs of the Mara: Africa's Fastest Predator", href: "/kenya/cheetahs-of-the-mara" },
    { title: "Best Time to Visit Kenya: A Season-by-Season Guide", href: "/kenya/best-time-to-visit-kenya" },
  ],
  "night-safaris-what-happens-after-dark": [
    { title: "Cheetahs of the Mara: Africa's Fastest Predator", href: "/kenya/cheetahs-of-the-mara" },
    { title: "Big Five: How to Spot Lion, Leopard, Rhino, Elephant and Buffalo", href: "/kenya/big-five-how-to-spot" },
    { title: "Best Time to Visit Kenya: A Season-by-Season Guide", href: "/kenya/best-time-to-visit-kenya" },
  ],
  "community-conservancies-how-locals-protect-wildlife": [
    { title: "The Maasai: Guardians of the Mara", href: "/kenya/the-maasai-guardians-of-the-mara" },
    { title: "Anti-Poaching Efforts in Kenya's Parks", href: "/kenya/anti-poaching-efforts-in-kenyas-parks" },
    { title: "Night Safaris: What Happens After Dark", href: "/kenya/night-safaris-what-happens-after-dark" },
  ],
  "anti-poaching-efforts-in-kenyas-parks": [
    { title: "Rhino Conservation: The Fight to Save a Species", href: "/kenya/rhino-conservation-the-fight-to-save-a-species" },
    { title: "Community Conservancies: How Locals Protect Wildlife", href: "/kenya/community-conservancies-how-locals-protect-wildlife" },
    { title: "The Maasai: Guardians of the Mara", href: "/kenya/the-maasai-guardians-of-the-mara" },
  ],
  "rhino-conservation-the-fight-to-save-a-species": [
    { title: "Anti-Poaching Efforts in Kenya's Parks", href: "/kenya/anti-poaching-efforts-in-kenyas-parks" },
    { title: "Community Conservancies: How Locals Protect Wildlife", href: "/kenya/community-conservancies-how-locals-protect-wildlife" },
    { title: "The Maasai: Guardians of the Mara", href: "/kenya/the-maasai-guardians-of-the-mara" },
  ],
  "the-maasai-guardians-of-the-mara": [
    { title: "Community Conservancies: How Locals Protect Wildlife", href: "/kenya/community-conservancies-how-locals-protect-wildlife" },
    { title: "Anti-Poaching Efforts in Kenya's Parks", href: "/kenya/anti-poaching-efforts-in-kenyas-parks" },
    { title: "Rhino Conservation: The Fight to Save a Species", href: "/kenya/rhino-conservation-the-fight-to-save-a-species" },
  ],
  "climate-change-and-the-great-migration": [
    { title: "The Wildebeest River Crossing: A Photographer's Guide", href: "/kenya/the-wildebeest-river-crossing" },
    { title: "Best Time to Visit Kenya: A Season-by-Season Guide", href: "/kenya/best-time-to-visit-kenya" },
    { title: "Community Conservancies: How Locals Protect Wildlife", href: "/kenya/community-conservancies-how-locals-protect-wildlife" },
  ],
  "basic-swahili-phrases-and-kenyan-etiquette": [
    { title: "The Maasai: Guardians of the Mara", href: "/kenya/the-maasai-guardians-of-the-mara" },
    { title: "First-Time Safari Checklist", href: "/kenya/first-time-safari-checklist" },
    { title: "Safari Budget Guide: Luxury vs Mid-Range vs Budget", href: "/kenya/safari-budget-guide-luxury-vs-mid-range-vs-budget" },
  ],
  "common-eta-mistakes-travelers-denied-boarding": [
    { title: "Kenya eTA Guide: How to Apply, Cost and Processing Time", href: "/kenya/kenya-eta-guide-how-to-apply-cost-and-processing" },
    { title: "What Happens If You Overstay Your Kenya eTA", href: "/kenya/overstay-kenya-eta-what-happens" },
    { title: "Kenya Visa on Arrival vs eTA: Which One Applies to You", href: "/kenya/visa-on-arrival-vs-eta-which-applies-to-you" },
  ],
  "overstay-kenya-eta-what-happens": [
    { title: "Kenya eTA Guide: How to Apply, Cost and Processing Time", href: "/kenya/kenya-eta-guide-how-to-apply-cost-and-processing" },
    { title: "Common eTA Mistakes That Get Travelers Denied Boarding", href: "/kenya/common-eta-mistakes-travelers-denied-boarding" },
    { title: "Kenya Visa on Arrival vs eTA: Which One Applies to You", href: "/kenya/visa-on-arrival-vs-eta-which-applies-to-you" },
  ],
  "visa-on-arrival-vs-eta-which-applies-to-you": [
    { title: "Kenya eTA Guide: How to Apply, Cost and Processing Time", href: "/kenya/kenya-eta-guide-how-to-apply-cost-and-processing" },
    { title: "Common eTA Mistakes That Get Travelers Denied Boarding", href: "/kenya/common-eta-mistakes-travelers-denied-boarding" },
    { title: "What Happens If You Overstay Your Kenya eTA", href: "/kenya/overstay-kenya-eta-what-happens" },
  ],
  "how-much-does-a-kenya-safari-cost": [
    { title: "Safari Budget Guide: Luxury vs Mid-Range vs Budget", href: "/kenya/safari-budget-guide-luxury-vs-mid-range-vs-budget" },
    { title: "Best Time to Visit Kenya: A Season-by-Season Guide", href: "/kenya/best-time-to-visit-kenya" },
    { title: "First-Time Safari Checklist", href: "/kenya/first-time-safari-checklist" },
  ],
  "can-you-drink-the-water-in-kenya": [
    { title: "What to Pack for a Kenya Safari", href: "/kenya/what-to-pack-for-a-kenya-safari" },
    { title: "Safari First Aid: What to Pack in Your Kit", href: "/kenya/safari-first-aid-what-to-pack-in-your-kit" },
    { title: "First-Time Safari Checklist", href: "/kenya/first-time-safari-checklist" },
  ],
  "what-currency-should-you-carry-in-kenya": [
    { title: "Do You Need Cash or Can You Pay by Card on Safari", href: "/kenya/do-you-need-cash-or-card-on-safari" },
    { title: "How Much Does a Kenya Safari Cost in 2026", href: "/kenya/how-much-does-a-kenya-safari-cost" },
    { title: "Tipping Etiquette: Guides, Drivers and Lodge Staff", href: "/kenya/tipping-etiquette-guides-drivers-lodge-staff" },
  ],
  "do-you-need-cash-or-card-on-safari": [
    { title: "What Currency Should You Carry in Kenya", href: "/kenya/what-currency-should-you-carry-in-kenya" },
    { title: "Tipping Etiquette: Guides, Drivers and Lodge Staff", href: "/kenya/tipping-etiquette-guides-drivers-lodge-staff" },
    { title: "How Much Does a Kenya Safari Cost in 2026", href: "/kenya/how-much-does-a-kenya-safari-cost" },
  ],
  "kenya-time-zone-and-jet-lag-tips": [
    { title: "What to Pack for a Kenya Safari", href: "/kenya/what-to-pack-for-a-kenya-safari" },
    { title: "How Many Days Do You Need for a Kenya Safari", href: "/kenya/how-many-days-do-you-need-for-a-kenya-safari" },
    { title: "First-Time Safari Checklist", href: "/kenya/first-time-safari-checklist" },
  ],
  "internet-and-phone-signal-in-the-bush": [
    { title: "What Happens If You Get Sick During a Safari", href: "/kenya/what-happens-if-you-get-sick-during-a-safari" },
    { title: "Kenya Time Zone and Jet Lag Tips", href: "/kenya/kenya-time-zone-and-jet-lag-tips" },
    { title: "First-Time Safari Checklist", href: "/kenya/first-time-safari-checklist" },
  ],
  "what-happens-if-you-get-sick-during-a-safari": [
    { title: "Internet and Phone Signal in the Bush", href: "/kenya/internet-and-phone-signal-in-the-bush" },
    { title: "Safari First Aid: What to Pack in Your Kit", href: "/kenya/safari-first-aid-what-to-pack-in-your-kit" },
    { title: "First-Time Safari Checklist", href: "/kenya/first-time-safari-checklist" },
  ],
  "what-to-wear-on-a-kenya-safari": [
    { title: "Tsetse Flies: Why Blue and Black Clothing Is a Problem", href: "/kenya/tsetse-flies-blue-and-black-clothing" },
    { title: "Packing List for a 10-Day Kenya Safari", href: "/kenya/packing-list-for-a-10-day-kenya-safari" },
    { title: "Safari Footwear: What Actually Works", href: "/kenya/safari-footwear-what-actually-works" },
  ],
  "tsetse-flies-blue-and-black-clothing": [
    { title: "What to Wear on a Kenya Safari: Colors, Fabrics and Layers", href: "/kenya/what-to-wear-on-a-kenya-safari" },
    { title: "Packing List for a 10-Day Kenya Safari", href: "/kenya/packing-list-for-a-10-day-kenya-safari" },
    { title: "Sun Protection: Hats, SPF and Sunglasses for Safari", href: "/kenya/sun-protection-hats-spf-sunglasses" },
  ],
  "sun-protection-hats-spf-sunglasses": [
    { title: "What to Wear on a Kenya Safari: Colors, Fabrics and Layers", href: "/kenya/what-to-wear-on-a-kenya-safari" },
    { title: "Packing List for a 10-Day Kenya Safari", href: "/kenya/packing-list-for-a-10-day-kenya-safari" },
    { title: "Safari Footwear: What Actually Works", href: "/kenya/safari-footwear-what-actually-works" },
  ],
  "packing-list-for-a-10-day-kenya-safari": [
    { title: "What to Wear on a Kenya Safari: Colors, Fabrics and Layers", href: "/kenya/what-to-wear-on-a-kenya-safari" },
    { title: "Duffel Bags Only: Safari Luggage Restrictions Explained", href: "/kenya/duffel-bags-only-safari-luggage-restrictions" },
    { title: "First-Time Safari Checklist", href: "/kenya/first-time-safari-checklist" },
  ],
  "duffel-bags-only-safari-luggage-restrictions": [
    { title: "Packing List for a 10-Day Kenya Safari", href: "/kenya/packing-list-for-a-10-day-kenya-safari" },
    { title: "What to Wear on a Kenya Safari: Colors, Fabrics and Layers", href: "/kenya/what-to-wear-on-a-kenya-safari" },
    { title: "Getting Around: Light Aircraft vs Road Safaris", href: "/kenya/getting-around-light-aircraft-vs-road-safaris" },
  ],
  "angama-mara-suites-on-the-escarpment": [
    { title: "Masai Mara vs Serengeti", href: "/kenya/masai-mara-vs-serengeti" },
    { title: "Masai Mara Reserve vs Conservancies", href: "/kenya/masai-mara-reserve-vs-conservancies" },
    { title: "The Wildebeest River Crossing: A Photographer's Guide", href: "/kenya/wildebeest-river-crossing-guide" },
  ],
  "giraffe-manor-breakfast-with-giraffes": [
    { title: "Giraffes of Kenya", href: "/kenya/giraffes-of-kenya" },
    { title: "Angama Mara: Suites on the Escarpment", href: "/kenya/angama-mara-suites-on-the-escarpment" },
    { title: "How Many Days Do You Need for a Kenya Safari", href: "/kenya/how-many-days-do-you-need-for-a-kenya-safari" },
  ],
  "finch-hattons-out-of-africa-reimagined": [
    { title: "Tsavo: Largest, Wildest Park", href: "/kenya/tsavo-largest-wildest-park" },
    { title: "Giraffe Manor: Breakfast With Giraffes", href: "/kenya/giraffe-manor-breakfast-with-giraffes" },
    { title: "Rare Sightings: Black Rhinos", href: "/kenya/rare-sightings-black-rhinos" },
  ],
  "ilora-retreats-design-led-luxury-in-the-mara": [
    { title: "Angama Mara: Suites on the Escarpment", href: "/kenya/angama-mara-suites-on-the-escarpment" },
    { title: "Masai Mara vs Serengeti", href: "/kenya/masai-mara-vs-serengeti" },
    { title: "Masai Mara Reserve vs Conservancies", href: "/kenya/masai-mara-reserve-vs-conservancies" },
  ],
  "loldia-house-a-colonial-farmhouse": [
    { title: "Lake Naivasha Boat Safaris", href: "/kenya/lake-naivasha-boat-safaris" },
    { title: "Hell's Gate Walking Safari Park", href: "/kenya/hells-gate-walking-safari-park" },
    { title: "How Many Days Do You Need for a Kenya Safari", href: "/kenya/how-many-days-do-you-need-for-a-kenya-safari" },
  ],
  "sasaab-a-moroccan-style-lodge": [
    { title: "Rare Sightings: Black Rhinos", href: "/kenya/rare-sightings-black-rhinos" },
    { title: "Giraffes of Kenya", href: "/kenya/giraffes-of-kenya" },
    { title: "Ol Donyo Lodge: Under Kilimanjaro's Shadow", href: "/kenya/ol-donyo-lodge-under-kilimanjaros-shadow" },
  ],
  "ol-donyo-lodge-under-kilimanjaros-shadow": [
    { title: "Tsavo: Largest, Wildest Park", href: "/kenya/tsavo-largest-wildest-park" },
    { title: "Amboseli National Park Guide", href: "/kenya/amboseli-national-park-guide" },
    { title: "Amboseli's Last Super Tuskers", href: "/kenya/amboselis-last-super-tuskers" },
  ],
  "segera-retreat-conservancy-and-infinity-pool": [
    { title: "Community Conservancies: How Locals Protect Wildlife", href: "/kenya/community-conservancies-how-locals-protect-wildlife" },
    { title: "Ol Donyo Lodge: Under Kilimanjaro's Shadow", href: "/kenya/ol-donyo-lodge-under-kilimanjaros-shadow" },
    { title: "Giraffes of Kenya", href: "/kenya/giraffes-of-kenya" },
  ],
  "wildebeest-crossing-2026-migration-forecast": [
    { title: "The Great Migration Explained: When, Where and Why", href: "/kenya/the-great-migration-explained" },
    { title: "Best Time to Visit Kenya: A Season-by-Season Guide", href: "/kenya/best-time-to-visit-kenya" },
    { title: "Kenya's Rainy Season: What Changes on Safari", href: "/kenya/kenyas-rainy-season-what-changes" },
  ],
  "kenyas-rainy-season-what-changes": [
    { title: "Best Time to Visit Kenya: A Season-by-Season Guide", href: "/kenya/best-time-to-visit-kenya" },
    { title: "The Great Migration Explained: When, Where and Why", href: "/kenya/the-great-migration-explained" },
    { title: "The Wildebeest Crossing: 2026 Migration Forecast", href: "/kenya/wildebeest-crossing-2026-migration-forecast" },
  ],
  "solar-eclipse-and-stargazing-safaris": [
    { title: "Best Time to Visit Kenya: A Season-by-Season Guide", href: "/kenya/best-time-to-visit-kenya" },
    { title: "Night Safaris: What Happens After Dark", href: "/kenya/night-safaris-what-happens-after-dark" },
    { title: "Cheetahs of the Mara: Africa's Fastest Predator", href: "/kenya/cheetahs-of-the-mara" },
  ],
  "kenyas-new-conservation-fees": [
    { title: "Safari Budget Guide: Luxury vs Mid-Range vs Budget", href: "/kenya/safari-budget-guide-luxury-vs-mid-range-vs-budget" },
    { title: "Kenya eTA Guide: How to Apply, Cost and Processing Time", href: "/kenya/kenya-eta-guide-how-to-apply-cost-and-processing" },
    { title: "How Much Does a Kenya Safari Cost", href: "/kenya/how-much-does-a-kenya-safari-cost" },
  ],
  "hot-air-balloon-safaris-over-the-mara": [
    { title: "Cheetahs of the Mara: Africa's Fastest Predator", href: "/kenya/cheetahs-of-the-mara" },
    { title: "The Great Migration Explained: When, Where and Why", href: "/kenya/the-great-migration-explained" },
    { title: "Safari Photography: Camera Gear and Settings", href: "/kenya/safari-photography-camera-gear-and-settings" },
  ],
  "new-direct-flights-cutting-kenya-travel-time": [
    { title: "Getting Around: Light Aircraft vs Road Safaris", href: "/kenya/getting-around-light-aircraft-vs-road-safaris" },
    { title: "How Many Days Do You Need for a Kenya Safari", href: "/kenya/how-many-days-do-you-need-for-a-kenya-safari" },
    { title: "Best Time to Visit Kenya: A Season-by-Season Guide", href: "/kenya/best-time-to-visit-kenya" },
  ],
  "kenya-safari-faqs-everything-first-timers-ask": [
    { title: "First-Time Safari Checklist", href: "/kenya/first-time-safari-checklist" },
    { title: "How Much Does a Kenya Safari Cost in 2026", href: "/kenya/how-much-does-a-kenya-safari-cost" },
    { title: "Is It Ethical to Go on Safari? Common Concerns Answered", href: "/kenya/is-it-ethical-to-go-on-safari" },
  ],
  "is-it-ethical-to-go-on-safari": [
    { title: "Community Conservancies: How Locals Protect Wildlife", href: "/kenya/community-conservancies-how-locals-protect-wildlife" },
    { title: "Anti-Poaching Efforts in Kenya's Parks", href: "/kenya/anti-poaching-efforts-in-kenyas-parks" },
    { title: "The Maasai: Guardians of the Mara", href: "/kenya/the-maasai-guardians-of-the-mara" },
  ],
  "plastic-bag-ban-whats-illegal-to-bring": [
    { title: "What to Pack for a Kenya Safari", href: "/kenya/what-to-pack-for-a-kenya-safari" },
    { title: "Kenya eTA Guide: How to Apply, Cost and Processing Time", href: "/kenya/kenya-eta-guide-how-to-apply-cost-and-processing" },
    { title: "Duffel Bags Only: Safari Luggage Restrictions", href: "/kenya/duffel-bags-only-safari-luggage-restrictions" },
  ],
  "booking-through-a-local-tour-operator-vs-diy": [
    { title: "How Much Does a Kenya Safari Cost in 2026", href: "/kenya/how-much-does-a-kenya-safari-cost" },
    { title: "Safari Budget Guide: Luxury vs Mid-Range vs Budget", href: "/kenya/safari-budget-guide-luxury-vs-mid-range-vs-budget" },
    { title: "First-Time Safari Checklist", href: "/kenya/first-time-safari-checklist" },
  ],
  "bumpy-roads-and-motion-sickness": [
    { title: "Safari First Aid: What to Pack in Your Kit", href: "/kenya/safari-first-aid-what-to-pack-in-your-kit" },
    { title: "Getting Around: Light Aircraft vs Road Safaris", href: "/kenya/getting-around-light-aircraft-vs-road-safaris" },
    { title: "First-Time Safari Checklist", href: "/kenya/first-time-safari-checklist" },
  ],
}
