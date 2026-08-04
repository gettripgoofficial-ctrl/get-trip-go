// Curated "Related Reads" per article slug. Values are objects with title + href
// so this can point to either dynamic [slug] articles or static-route articles
// (e.g. /kenya/big-five-how-to-spot), since routing doesn't care which system
// built the destination page.
export const kenyaArticleRelated: Record<string, { title: string; href: string }[]> = {
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
}
