// Curated "Related Reads" per article slug. Values are objects with title + href
// so this can point to either dynamic [slug] articles or static-route articles
// (e.g. /kenya/big-five-how-to-spot), since routing doesn't care which system
// built the destination page.
export const kenyaArticleRelated: Record<string, { title: string; href: string }[]> = {
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
}
