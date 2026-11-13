export type HotelDestination = {
  slug: string
  name: string
  country: string
  image: string
}

export const hotelDestinations: HotelDestination[] = [
  { slug: "bangkok", name: "Bangkok", country: "Thailand", image: "/images/external/unsplash-150666553119.jpg" },
  { slug: "paris", name: "Paris", country: "France", image: "/images/external/unsplash-paris-eiffel.jpg" },
  { slug: "london", name: "London", country: "United Kingdom", image: "/images/external/unsplash-151363526997.jpg" },
  { slug: "dubai", name: "Dubai", country: "United Arab Emirates", image: "/images/external/unsplash-151245397979.jpg" },
  { slug: "singapore", name: "Singapore", country: "Singapore", image: "/images/external/unsplash-152562529338.jpg" },
  { slug: "tokyo", name: "Tokyo", country: "Japan", image: "/images/external/unsplash-153136693633.jpg" },
  { slug: "new-york", name: "New York", country: "United States", image: "/images/external/unsplash-152380500934.jpg" },
  { slug: "rome", name: "Rome", country: "Italy", image: "/images/external/unsplash-152390683465.jpg" },
  { slug: "istanbul", name: "Istanbul", country: "Türkiye", image: "/images/external/unsplash-153400875703.jpg" },
  { slug: "barcelona", name: "Barcelona", country: "Spain", image: "/images/external/unsplash-153435159066.jpg" },
  { slug: "amsterdam", name: "Amsterdam", country: "Netherlands", image: "/images/external/unsplash-europe-street.jpg" },
  { slug: "hong-kong", name: "Hong Kong", country: "Hong Kong", image: "/images/external/unsplash-156808468078.jpg" },
  { slug: "kuala-lumpur", name: "Kuala Lumpur", country: "Malaysia", image: "/images/external/unsplash-151693402474.jpg" },
  { slug: "seoul", name: "Seoul", country: "South Korea", image: "/images/external/unsplash-151681523156.jpg" },
  { slug: "osaka", name: "Osaka", country: "Japan", image: "/images/external/unsplash-1543783207-e.jpg" },
  { slug: "prague", name: "Prague", country: "Czechia", image: "/images/external/unsplash-152365261502.jpg" },
  { slug: "vienna", name: "Vienna", country: "Austria", image: "/images/external/unsplash-153456711024.jpg" },
  { slug: "madrid", name: "Madrid", country: "Spain", image: "/images/external/unsplash-153313006179.jpg" },
  { slug: "sydney", name: "Sydney", country: "Australia", image: "/images/external/unsplash-150697303587.jpg" },
  { slug: "los-angeles", name: "Los Angeles", country: "United States", image: "/images/external/unsplash-150260289865.jpg" },
  { slug: "delhi", name: "Delhi", country: "India", image: "/images/external/unsplash-152449241293.jpg" },
  { slug: "agra", name: "Agra", country: "India", image: "/images/external/unsplash-152449241293.jpg" },
  { slug: "kerala", name: "Kerala", country: "India", image: "/images/external/unsplash-160221605609.jpg" },
  { slug: "varanasi", name: "Varanasi", country: "India", image: "/image/pilgrimage.jpg" },
  { slug: "goa", name: "Goa", country: "India", image: "/images/external/unsplash-150752542803.jpg" },
  { slug: "jaipur", name: "Jaipur", country: "India", image: "/images/external/unsplash-152449241293.jpg" },
]

export function getHotelDestinationBySlug(slug: string) {
  return hotelDestinations.find((destination) => destination.slug === slug)
}
