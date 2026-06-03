import { itinerary as heartOfEurope } from "./heart-of-europe"
import { itinerary as alpineWonders } from "./alpine-wonders"
import { itinerary as grandEuropeanAdventure } from "./grand-european-adventure"
import { itinerary as europeCompleteCircle } from "./europe-complete-circle"
import { itinerary as continentalExplorer } from "./continental-explorer"
import { itinerary as europeanCapitalsExpress } from "./european-capitals-express"
import { itinerary as parisAndCapitals } from "./paris-and-capitals"
import { itinerary as romanceOfEurope } from "./romance-of-europe"
import { itinerary as swissFrenchEscape } from "./swiss-french-escape"
import { itinerary as europeanMemories } from "./european-memories"
import { itinerary as jewelsOfEurope } from "./jewels-of-europe"
import { itinerary as europeanRing } from "./european-ring"
import { itinerary as europeanBliss } from "./european-bliss"
import { itinerary as europeanDance } from "./european-dance"
import { itinerary as europeanDelight } from "./european-delight"
import { itinerary as europeanTriangleGo } from "./european-triangle-go"
import { itinerary as europeanJourneyGo } from "./european-journey-go"
import { itinerary as belovedEurope } from "./beloved-europe"
import { itinerary as indiaHeartOfEurope } from "./india-heart-of-europe"
import { itinerary as indiaEuropeanCharm } from "./india-european-charm"
import { itinerary as indiaSwissFrenchDelight } from "./india-swiss-french-delight"
import { itinerary as indiaEuropeCompleteCircle } from "./india-europe-complete-circle"
import { itinerary as indiaRomanceEurope } from "./india-romance-europe"
import { itinerary as easternGems } from "./eastern-gems"
import { itinerary as centralEuropeanDiscovery } from "./central-european-discovery"
import { itinerary as beautifulEuropeJourney } from "./beautiful-europe-journey"
import { itinerary as centralRingExplorer } from "./central-ring-explorer"
import { itinerary as majesticCentralEurope } from "./majestic-central-europe"
import { itinerary as eastOfEuropeBalkans } from "./east-of-europe-balkans"
import { itinerary as germanyEasternEurope } from "./germany-eastern-europe"
import { itinerary as majesticEuropeSpain } from "./majestic-europe-spain"
import { itinerary as eastEuropeVenice } from "./east-europe-venice"
import { itinerary as londonParisAmsterdam } from "./london-paris-amsterdam"
import { itinerary as westernEuropeHighlights } from "./western-europe-highlights"
import { itinerary as parisLondonTriangle } from "./paris-london-triangle"
import { itinerary as greatEuropeanCitiesTour } from "./great-european-cities-tour"
import { itinerary as spainFranceEngland } from "./spain-france-england"
import { itinerary as unforgettableEurope } from "./unforgettable-europe"
import { itinerary as modernEuropeBerlin } from "./modern-europe-berlin"
import { itinerary as genuineEurope } from "./genuine-europe"
import { itinerary as europeanGrandeur } from "./european-grandeur"
import { itinerary as nordicExplorer } from "./nordic-explorer"
import { itinerary as pearlsOfNorwaySweden } from "./pearls-of-norway-sweden"
import { itinerary as scandinaviaEasternEurope } from "./scandinavia-eastern-europe"
import { itinerary as germanyNorthernEurope } from "./germany-northern-europe"
import { itinerary as polandScandinaviaEast } from "./poland-scandinavia-east"
import { itinerary as scandinaviaBudapest } from "./scandinavia-budapest"
import { itinerary as pearlsNordicCopenhagen } from "./pearls-nordic-copenhagen"
import { itinerary as easternEuropePolandScandinavia } from "./eastern-europe-poland-scandinavia"

export type ItineraryDay = {
  day: number
  title: string
  description: string
  meals: string
}

const itineraries: Record<string, ItineraryDay[]> = {
  "heart-of-europe": heartOfEurope,
  "alpine-wonders": alpineWonders,
  "grand-european-adventure": grandEuropeanAdventure,
  "europe-complete-circle": europeCompleteCircle,
  "continental-explorer": continentalExplorer,
  "european-capitals-express": europeanCapitalsExpress,
  "paris-and-capitals": parisAndCapitals,
  "romance-of-europe": romanceOfEurope,
  "swiss-french-escape": swissFrenchEscape,
  "european-memories": europeanMemories,
  "jewels-of-europe": jewelsOfEurope,
  "european-ring": europeanRing,
  "european-bliss": europeanBliss,
  "european-dance": europeanDance,
  "european-delight": europeanDelight,
  "european-triangle-go": europeanTriangleGo,
  "european-journey-go": europeanJourneyGo,
  "beloved-europe": belovedEurope,
  "india-heart-of-europe": indiaHeartOfEurope,
  "india-european-charm": indiaEuropeanCharm,
  "india-swiss-french-delight": indiaSwissFrenchDelight,
  "india-europe-complete-circle": indiaEuropeCompleteCircle,
  "india-romance-europe": indiaRomanceEurope,
  "eastern-gems": easternGems,
  "central-european-discovery": centralEuropeanDiscovery,
  "beautiful-europe-journey": beautifulEuropeJourney,
  "central-ring-explorer": centralRingExplorer,
  "majestic-central-europe": majesticCentralEurope,
  "east-of-europe-balkans": eastOfEuropeBalkans,
  "germany-eastern-europe": germanyEasternEurope,
  "majestic-europe-spain": majesticEuropeSpain,
  "east-europe-venice": eastEuropeVenice,
  "london-paris-amsterdam": londonParisAmsterdam,
  "western-europe-highlights": westernEuropeHighlights,
  "paris-london-triangle": parisLondonTriangle,
  "great-european-cities-tour": greatEuropeanCitiesTour,
  "spain-france-england": spainFranceEngland,
  "unforgettable-europe": unforgettableEurope,
  "modern-europe-berlin": modernEuropeBerlin,
  "genuine-europe": genuineEurope,
  "european-grandeur": europeanGrandeur,
  "nordic-explorer": nordicExplorer,
  "pearls-of-norway-sweden": pearlsOfNorwaySweden,
  "scandinavia-eastern-europe": scandinaviaEasternEurope,
  "germany-northern-europe": germanyNorthernEurope,
  "poland-scandinavia-east": polandScandinaviaEast,
  "scandinavia-budapest": scandinaviaBudapest,
  "pearls-nordic-copenhagen": pearlsNordicCopenhagen,
  "eastern-europe-poland-scandinavia": easternEuropePolandScandinavia,
}

export const getItinerary = (slug: string): ItineraryDay[] =>
  itineraries[slug] ?? []