export type DelhiTour = {
  title: string
  days: string
  label: string
  intro?: string
  itinerary: string[]
  route: string[]
  image: string
  alt: string
  // Starting price in Indian rupees. Leave it out to show "Price on request".
  price?: number
}

export const delhiPackagesTitle = "Popular Multi-City Tour Packages Starting from Delhi"

export const delhiPackagesIntro =
  "Delhi is the starting point for several popular travel circuits. International visitors can combine historical monuments, spiritual experiences, cultural attractions and mountain destinations into one holiday."

export const delhiTours: DelhiTour[] = [
  {
    title: "Golden Triangle Tour",
    days: "6 to 7 Days",
    label: "Delhi, Agra and Jaipur",
    intro: "The Golden Triangle is among the most popular travel routes for first-time visitors to India.",
    itinerary: [
      "Day 1: Arrive in Delhi and transfer to your hotel.",
      "Day 2: Explore Old Delhi and New Delhi.",
      "Day 3: Travel from Delhi to Agra and visit the Taj Mahal.",
      "Day 4: Travel from Agra to Jaipur.",
      "Day 5: Explore Jaipur’s forts, palaces and markets.",
      "Day 6: Return to Delhi.",
      "Day 7: Departure or additional sightseeing.",
    ],
    route: ["Delhi", "Agra", "Jaipur", "Delhi"],
    image: "/images/india/attractions/taj-mahal.jpg",
    alt: "Taj Mahal in Agra, part of the Golden Triangle tour",
  },
  {
    title: "Spiritual and Cultural India Tour",
    days: "7 to 9 Days",
    label: "Delhi, Haridwar, Rishikesh and Varanasi",
    itinerary: [
      "Delhi: Historical and cultural sightseeing.",
      "Haridwar: Visit temples and experience Ganga Aarti.",
      "Rishikesh: Explore yoga centres and riverside attractions.",
      "Varanasi: Experience the ghats, temples and traditional boat rides.",
    ],
    route: ["Delhi", "Haridwar", "Rishikesh", "Varanasi"],
    image: "/images/india/cities/rishikesh.jpg",
    alt: "Laxman Jhula in Rishikesh, part of the Spiritual and Cultural India tour",
  },
  {
    title: "North India Heritage and Mountain Tour",
    days: "10 to 12 Days",
    label: "Delhi, Amritsar and Shimla",
    itinerary: [
      "Delhi: Explore historical monuments and local markets.",
      "Amritsar: Visit the Golden Temple and Jallianwala Bagh.",
      "Shimla: Enjoy mountain scenery and colonial architecture.",
      "Delhi: Return for departure.",
    ],
    route: ["Delhi", "Amritsar", "Shimla", "Delhi"],
    image: "/images/india/attractions/golden-temple.jpg",
    alt: "Golden Temple in Amritsar, part of the North India Heritage and Mountain tour",
  },
]

export const delhiPackagesNote =
  "These itineraries can be customised according to travel dates, interests, hotel preferences and transportation choices."
