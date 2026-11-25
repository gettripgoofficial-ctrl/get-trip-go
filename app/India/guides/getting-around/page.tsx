import type { Metadata } from "next";
import GuideLayout from "@/components/india/guides/GuideLayout";
import GuideCta from "@/components/india/guides/GuideCta";
import GuideFaq from "@/components/india/guides/GuideFaq";
import { CTA_DESTINATIONS, CTA_PRIMARY, CTA_SECONDARY } from "@/data/india/guideCta";
import GuideFeature from "@/components/india/guides/GuideFeature";
import { slugify } from "@/components/india/guides/slugify";

const TITLE = "Getting Around India: Complete Guide to Trains, Flights, Buses & Transport";
const DESCRIPTION =
  "Getting around India made simple: compare trains, flights, buses, metros, taxis, ferries and private drivers, with booking tips for first-time visitors.";
const URL = "https://gettripgo.com/India/guides/getting-around";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Get Trip Go",
    type: "article",
    images: [
      {
        url: "/images/india/guides/getting-around.jpg",
        alt: "A train crossing a railway level crossing in India",
      },
    ],
  },
};

const modes = [
  {
    name: "Trains",
    text: "India has one of the largest rail networks in the world, and a train journey is one of the most memorable ways to see the country. Services range from slow passenger trains to fast premium services like the Vande Bharat Express and the Rajdhani and Shatabdi trains between major cities.",
    bullets: [
      "1A (First AC): private cabins, the most comfortable and the most expensive.",
      "2A (Second AC): four- and two-berth compartments with curtains. A good balance for most travellers.",
      "3A (Third AC): six berths per compartment, cheaper and very popular for overnight trips.",
      "3E (Third AC Economy): a lower-priced AC option on selected trains. Check the facilities on your specific train.",
      "Sleeper (SL): non-air-conditioned berths with open windows. Cheap, but hot in summer.",
      "CC and EC (chair cars): daytime seating on trains like Shatabdi and Vande Bharat, with EC the more spacious.",
      "Book on the IRCTC website or app, or through a travel platform such as Cleartrip or MakeMyTrip. Foreign visitors may be eligible for a special tourist quota, so check IRCTC for the current rules and booking window.",
      "Popular routes sell out, so book as soon as bookings open. If you are waitlisted, check the status again close to departure.",
    ],
  },
  {
    name: "Domestic Flights",
    text: "For long distances, flying saves days. India has a large domestic network served by airlines such as IndiGo, Air India, Air India Express, Akasa Air and SpiceJet, and fares are often competitive if you book ahead. Fog can cause delays at northern airports in winter, so leave a buffer before international connections.",
  },
  {
    name: "Buses",
    text: "Buses reach almost everywhere, including towns the trains don't. State-run buses are cheap and frequent, while private operators run overnight sleeper and air-conditioned coaches on popular routes. Apps like redBus make it easy to compare operators and book seats. For night journeys, pick a reputable operator and keep valuables with you.",
  },
  {
    name: "Metro Systems",
    text: "Several cities have clean, fast and inexpensive metro networks, including Delhi, Mumbai, Bengaluru, Kolkata, Chennai, Hyderabad, Jaipur and Kochi. In Delhi, the metro is also the easiest way to reach the airport and many major sights.",
  },
  {
    name: "Taxis, Autos and Ride-Hailing",
    text: "Ride-hailing apps such as Uber and Ola, along with Rapido for bikes and autos, work in many cities and show the fare upfront. Auto-rickshaws are everywhere for short trips. Ask for the meter or agree on a price before you start. Prepaid taxi counters at major airports and stations are a simple way to avoid haggling.",
  },
  {
    name: "Hiring a Car and Driver",
    text: "Most visitors do not self-drive in India, because traffic and road conditions can be demanding. Hiring a car with a driver is common and reasonably priced, especially for multi-day trips such as the Golden Triangle. Agree the route, daily kilometre limits and overnight charges in writing beforehand.",
  },
  {
    name: "Shared Jeeps and Mountain Transport",
    text: "In the Himalayas, shared 4WD jeeps and local buses connect villages and passes. Roads can close because of landslides or snow, so build spare days into your plan. Some areas of the Northeast and border regions require permits, which are best arranged before you travel.",
  },
  {
    name: "Ferries and Boats",
    text: "Ferries connect islands and river towns, including the Kerala backwaters, parts of Kolkata and the Andaman Islands. Check conditions before sailing, especially in the monsoon.",
  },
];

const comparison = [
  ["Indian Railways", "Most travellers; medium to long city-to-city routes, overnight trips", "Budget to moderate (premium on top classes)", "Moderate to high", "Huge network, overnight trips save a hotel night", "Popular trains sell out; delays happen"],
  ["Domestic flights", "Long distances, limited time, islands and remote regions", "Moderate to premium", "Moderate", "Saves a day or more on long routes", "Airport time; fog and monsoon delays"],
  ["Government and private buses", "Budget travel, towns without rail, hill routes", "Budget to moderate", "Basic to good", "Reaches almost everywhere", "Road conditions vary; check operator"],
  ["Metro trains", "City sightseeing and airport links", "Budget", "Good", "Avoids traffic, predictable", "Peak-hour crowds; rules differ by city"],
  ["Taxis and ride-hailing", "Short urban journeys, airport transfers", "Budget to moderate", "Moderate to good", "Door to door, fares visible in apps", "Surge pricing; app and phone requirements"],
  ["Private car with driver", "Multi-day regional touring, families, couples", "Moderate to premium", "High", "Flexible stops, local knowledge, luggage space", "Agree inclusions in writing"],
  ["Shared jeeps", "Mountain regions, budget travellers", "Budget", "Basic", "Often the only public option in remote areas", "Cramped, weather dependent"],
  ["Ferries and boats", "Islands, backwaters, river crossings", "Budget (public) to premium (private cruises)", "Basic to high", "Scenic, sometimes the fastest route", "Weather cancellations; check schedules"],
];

const trainRoutes = [
  ["Delhi to Agra", "A short corridor with daytime premium services, handy for the Taj Mahal. Check which services currently run and which station they use."],
  ["Delhi to Jaipur", "A well-served route with day and overnight options, linking Delhi to Rajasthan."],
  ["Mumbai to Goa", "Popular for the scenic Konkan coast. Timetables can change in the monsoon, so check carefully."],
  ["Delhi to Varanasi", "Overnight and daytime options exist, and rail is the traditional way to reach the city."],
  ["Chennai to Bengaluru", "A frequent corridor between two major southern cities, with daytime options suitable for tourists."],
  ["Kochi to Thiruvananthapuram", "A convenient coastal route through Kerala, linking the main tourist hubs."],
];

const metros = [
  ["Delhi NCR", "Extensive network across Delhi, Noida, Gurugram and nearby cities", "Airport line, Old Delhi and many sights", "Delhi Metro Rail Corporation"],
  ["Mumbai", "Several lines; suburban trains remain the backbone", "Business districts and parts of the airport area", "Mumbai metro operators"],
  ["Bengaluru", "Namma Metro with multiple lines", "Central areas around MG Road", "Bangalore Metro Rail Corporation"],
  ["Kolkata", "India's oldest metro", "Central Kolkata and the Esplanade area", "Kolkata Metro Railway"],
  ["Chennai", "Two main lines, still expanding", "Airport and Chennai Central links", "Chennai Metro Rail Limited"],
  ["Hyderabad", "Three corridors", "Hi-tech city and central areas", "Hyderabad Metro Rail"],
  ["Jaipur", "A limited line", "Useful near the Pink City, but does not reach every sight", "Jaipur Metro Rail Corporation"],
  ["Kochi", "A line along the main city corridor, plus Kochi Water Metro boats", "Ernakulam area; Fort Kochi is easiest by road or boat", "Kochi Metro Rail Limited"],
];

const travellerTypes = [
  ["First-time visitors", "Mix a private driver or prepaid taxis for the first days with a few easy train or flight legs. Avoid over-complicated routes."],
  ["International tourists", "Book key trains early on IRCTC, carry your passport, and use a trusted agent if apps reject foreign cards or numbers."],
  ["Budget backpackers", "Trains (3A or Sleeper), state buses, metros and shared jeeps. Book ahead for popular trains."],
  ["Families with children", "Private cars for flexibility, daytime AC chair-car trains and flights for long legs. Avoid overnight buses."],
  ["Senior citizens", "Flights for long distances, AC trains with lower berths, and a private car for comfort."],
  ["Couples", "A private car for scenic routes, 2A or 1A for overnight trains, and boat experiences in Kerala."],
  ["Solo travellers", "Trains and flights, daytime buses, app taxis with ride sharing, and hotel-arranged pickups for late arrivals."],
  ["Luxury travellers", "Chauffeured cars, premium rail classes, flights and arranged hotel transfers."],
  ["Limited time", "Fly the long routes, use a driver for regional stops and visit fewer cities."],
  ["Remote destinations", "A local operator with a suitable 4WD, extra buffer days and a plan for permits and weather."],
];

const routes = [
  ["Delhi to Agra", "Train or private car", "Good on daytime services, verify the train", "Not practical", "Worthwhile for a day trip or Golden Triangle", "Winter fog can affect trains and roads"],
  ["Delhi to Jaipur", "Train, car or bus", "Suitable, with day and night options", "Rarely needed", "Good for sightseeing en route", "Summers are very hot"],
  ["Delhi to Varanasi", "Train or flight", "Classic choice, overnight or daytime", "Useful if short on time", "Long drive, not typical", "Winter fog can delay trains and flights"],
  ["Delhi to Mumbai", "Flight or premium train", "Possible for those who enjoy long rail trips", "Most practical for most travellers", "Not recommended", "Monsoon and fog can disrupt flights"],
  ["Mumbai to Goa", "Train, flight or car", "Scenic Konkan route, check monsoon timetable", "Convenient and quick", "Worthwhile for flexible coastal stops", "Heavy monsoon affects rail and roads"],
  ["Bengaluru to Mysuru", "Train, car or bus", "Well served for a day trip", "Not needed", "Convenient for a day trip", "Roads are busy at weekends"],
  ["Kochi to Munnar", "Private car or bus", "No direct rail to Munnar", "Not applicable", "Strongly recommended", "Hill roads are slower in rain"],
  ["Kochi to Alleppey", "Train, car or boat", "Short and simple", "Not needed", "Convenient with luggage", "Backwater boats depend on weather"],
  ["Jaipur to Udaipur", "Train or car", "Possible, check availability", "Limited options, check", "Popular for scenery and stops", "A long road day, plan stops"],
  ["Guwahati to Shillong", "Shared taxi, car or bus", "Rail reaches Guwahati only", "Not needed", "Convenient for the hills", "Landslides possible in monsoon"],
  ["Srinagar to Gulmarg", "Private car or taxi", "No rail link", "Fly to Srinagar", "Standard option", "Snow can affect winter access"],
  ["Leh to Nubra Valley", "Private 4WD or shared taxi", "No rail link", "Fly to Leh", "Strongly recommended", "High passes, permits and seasonal closures apply"],
];

const apps = [
  ["Google Maps", "Navigation, public transport and offline maps", "No Indian number needed", "Download offline maps, as signal can fail"],
  ["IRCTC Rail Connect", "Official train booking", "Registration needed; foreign visitors verify an international mobile number", "Payments and verification can be harder for foreign cards"],
  ["NTES", "Train running status and schedules", "No booking account needed", "Information only, you cannot book"],
  ["redBus", "Bus ticket comparison and booking", "Account usually needed", "Check the actual operator and policy"],
  ["Uber, Ola, Rapido", "Taxi, auto and bike hailing", "Depends on the app and city", "Availability varies, and some need an Indian number"],
  ["Airline apps", "Booking, web check-in and boarding passes", "Account usually needed", "Check app and card support"],
  ["Metro apps", "Tickets, maps and card top-up in some cities", "Varies", "Not every metro has an app"],
  ["Offline maps and translation", "Directions and translation without data", "No Indian number needed", "Download languages and maps before you travel"],
];

const tips = [
  "Match transport to distance. Trains and flights suit long routes, while cars and buses suit shorter regional hops.",
  "Plan fewer, longer stops. India is large, and long transfers can use up half a day.",
  "Book popular trains and peak-season flights early, especially from October to February and around festivals.",
  "Carry photo ID and a printout or screenshot of your tickets. You may need ID to board trains and enter some airports and monuments.",
  "Keep valuables with you and lock your bags on overnight trains and buses.",
  "Download offline maps and a ride-hailing app before you arrive, and consider a local SIM or eSIM.",
  "Leave buffer time before flights. Delays on roads and rails are common.",
];

const faqs = [
  ["What is the best way to travel around India?", "It depends on distance. Trains suit medium distances, flights save time on long routes, and a car with a driver or a bus works well for shorter regional hops."],
  ["Is travelling by train in India safe for tourists?", "Millions travel by train every day. Choose AC classes for overnight trips, keep valuables close, lock your bags and book through official channels."],
  ["How can foreigners book train tickets in India?", "Register on IRCTC, verify your profile and look for the foreign tourist booking option, which has an extended booking window. Carry your passport and confirm current rules and classes on IRCTC."],
  ["Which train class is best for international tourists?", "2A or 3A for overnight trips, CC or EC on daytime premium trains, and 1A for privacy."],
  ["How far in advance should I book Indian trains?", "As early as bookings open for popular routes and peak season. Foreign tourist bookings have a longer window, so check IRCTC."],
  ["Can I travel in India without an Indian phone number?", "Yes, but some apps send OTPs to Indian numbers, so an Indian SIM or eSIM helps. Download offline maps either way."],
  ["Are domestic flights in India expensive?", "Fares vary widely by route, season and how early you book. Compare airlines and weigh the cost against the time saved."],
  ["Which apps are best for booking transport in India?", "IRCTC Rail Connect for trains, airline apps for flights, redBus for buses, Uber, Ola or Rapido for local rides and Google Maps for navigation."],
  ["Is Uber available throughout India?", "No. Ride-hailing availability differs by city. Check which apps work where you are, and use prepaid taxis or local options elsewhere."],
  ["Is hiring a private driver in India worth it?", "It is common for multi-day trips, families and multi-stop routes. Agree the route, daily distance limit, tolls and overnight charges in writing."],
  ["Are overnight buses in India comfortable?", "It varies. Premium sleeper and AC coaches can be comfortable, but trains or flights are often better for long routes. Choose a reputable operator."],
  ["Which Indian cities have metro services?", "Delhi NCR, Mumbai, Bengaluru, Kolkata, Chennai, Hyderabad, Jaipur and Kochi, plus many others, with new lines still opening."],
  ["Can tourists rent a car and drive in India?", "Self-drive is uncommon and often not recommended because of traffic and road conditions. Most visitors hire a car with a driver."],
  ["What is the best transport for travelling in Rajasthan?", "A private car with a driver for flexibility, with trains for suitable long legs. Check rail availability for each route."],
  ["How do I travel between Kerala destinations?", "Trains along the coast, private cars or buses to hill areas like Munnar and Thekkady, and boats around the backwaters."],
  ["Is public transportation suitable for families?", "Metros, AC trains and daytime services can work well. With small children and heavy luggage, a private car often makes journeys easier."],
  ["How can I avoid transportation scams in India?", "Book through official channels, agree fares upfront, use prepaid taxis, check hotel closure claims yourself and avoid unofficial helpers."],
  ["What should I do if my train or flight is delayed?", "Check NTES or the airline app, speak to staff and review your rebooking and refund options. Keep buffer time and contact your agent if you have one."],
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Getting Around India: Complete Guide to Trains, Flights, Buses & Transport",
  description: DESCRIPTION,
  mainEntityOfPage: URL,
  publisher: { "@type": "Organization", name: "Get Trip Go" },
};

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full min-w-[680px] text-left text-sm leading-6">
        <thead className="bg-slate-100 text-slate-900">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {rows.map((r) => (
            <tr key={r[0]} className="align-top">
              {r.map((c, i) => (
                <td
                  key={i}
                  className={`px-4 py-3 ${i === 0 ? "whitespace-nowrap font-semibold text-slate-900" : ""}`}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function GettingAroundIndiaPage() {
  return (
    <GuideLayout tag="Getting Around" title="Getting Around India: Your Complete Guide to Trains, Flights, Roads & Water" image="/images/india/guides/getting-around.jpg"
      cta={
        <GuideCta
          title="Let us handle the getting around"
          text="From train tickets and domestic flights to private drivers, airport pickups and hotel-to-hotel transfers, our travel experts help plan smooth connections between every stop on your India trip, whether it is one city or a multi-city journey."
          destinations={CTA_DESTINATIONS}
          primary={CTA_PRIMARY}
          secondary={CTA_SECONDARY}
        />
      }>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      <div>
        <p>
          India is enormous, and how you move through it shapes your trip. Distances are long, regions
          differ sharply, from desert plains and coastal highways to Himalayan passes, and a journey
          that looks short on a map can take most of a day. Planning your transport early saves time,
          money and stress.
        </p>
        <p>
          Most travellers combine several options: a night train can save you a hotel, a short flight
          can save you a day, a driver can turn a long road into part of the experience, and metros
          and ride-hailing apps handle the city. This guide covers trains, domestic flights, buses,
          metros, taxis, private cars, mountain transport and ferries, with tips for choosing and
          booking each one.
        </p>
      </div>

      <p className="bg-orange-50">
        Fares, schedules, airline status and booking rules change often. Treat this guide as general
        travel advice and confirm current details with the operator or official site before you book.
      </p>

      <h2>Transport Options in India at a Glance</h2>
      <p>
        Prices vary by route, season, booking time and operator, so this table compares the options
        in broad terms only.
      </p>
      <Table
        head={["Transport", "Best for", "Relative cost", "Comfort", "Main advantage", "Consider"]}
        rows={comparison}
      />

      {modes.map((m, i) => (
        <GuideFeature
          key={m.name}
          wide={!!m.bullets}
          reverse={i % 2 === 1}
          title={m.name}
          image={`/images/india/transport/${slugify(m.name)}.jpg`}
        >
          <p>{m.text}</p>
          {m.bullets && (
            <ul className="list-disc space-y-2 pl-5">
              {m.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </GuideFeature>
      ))}

      <h2>Indian Railways: How It Works and Which Class to Choose</h2>
      <ul className="list-disc space-y-2">
        <li>
          <strong>Train types.</strong> Passenger trains are slow with many stops. Express and
          superfast services make fewer stops and suit most tourists. Premium trains such as Vande
          Bharat, Rajdhani and Shatabdi are faster and usually include meals. Classes offered vary by
          train.
        </li>
        <li>
          <strong>Best classes for visitors.</strong> 2A is the comfort pick and 3A the value pick for
          overnight trips, 1A suits those who want privacy, and CC or EC suit daytime premium trains.
          Sleeper is best for experienced or budget travellers, especially outside the hot months.
        </li>
        <li>
          <strong>Overnight or daytime.</strong> Overnight trains save a hotel night but can arrive at
          awkward hours. Daytime trains let you see the landscape and are easier with luggage.
        </li>
      </ul>

      <h2>Booking Trains on IRCTC as a Foreign Tourist</h2>
      <ul className="list-disc space-y-2">
        <li>
          Register on the official IRCTC website or the IRCTC Rail Connect app and verify your
          profile. Sources describe foreign tourists verifying an international mobile number.
        </li>
        <li>
          The Foreign Tourist Quota is for visitors travelling on a foreign passport, and your
          passport number is captured at booking.
        </li>
        <li>
          Foreign Tourist Quota bookings have been open up to 365 days ahead, longer than the general
          window. Some sources mention a service charge of Rs 200 plus GST per ticket. Eligible
          classes have been described differently over the years, so confirm both on IRCTC before you
          plan around them.
        </li>
        <li>
          Carry your original passport on the train. Indian Railways has recently been checking and
          penalising misuse of this quota, so valid documents matter.
        </li>
        <li>
          If the app does not accept your card or phone number, a reputable travel company can book
          on your behalf.
        </li>
      </ul>

      <h2>Confirmed, RAC and Waitlisted Tickets</h2>
      <ul className="list-disc space-y-2">
        <li><strong>Confirmed (CNF):</strong> you have a berth or seat.</li>
        <li><strong>RAC (Reservation Against Cancellation):</strong> you can board and share a berth, and may be upgraded if a cancellation happens.</li>
        <li><strong>Waitlist (WL):</strong> you only travel if enough tickets ahead of you are cancelled. Do not rely on a high waitlist number.</li>
        <li><strong>PNR:</strong> your 10-digit booking number. Use it on IRCTC or the National Train Enquiry System (NTES) to check status and live running information.</li>
      </ul>

      <h2>At the Station and On Board</h2>
      <ul className="list-disc space-y-2">
        <li>Arrive at least 30 to 45 minutes before departure, and earlier at very large stations.</li>
        <li>Check your platform on the display boards or NTES, as platforms can change at short notice.</li>
        <li>Coach numbers are shown on the coach and on platform displays, and the reservation chart lists your berth.</li>
        <li>On overnight trains, keep valuables on you and chain and lock your bag under the berth.</li>
        <li>Do not hand your luggage or tickets to unofficial helpers at the station.</li>
      </ul>

      <h2>Best Train Routes for First-Time Visitors</h2>
      <p>
        These are popular tourist corridors. Services and timings change, so verify the specific
        train on IRCTC or NTES before you rely on a connection.
      </p>
      <Table head={["Route", "Why it works for tourists"]} rows={trainRoutes} />

      <h2>Domestic Flights in India: What to Know</h2>
      <ul className="list-disc space-y-2">
        <li>
          <strong>Airlines.</strong> Regulator data from 2026 lists nine scheduled domestic airlines:
          IndiGo, Air India, Air India Express, Akasa Air, SpiceJet, Alliance Air, Star Air, Fly91
          and IndiaOne Air. IndiGo and the Air India group carry most domestic passengers.
        </li>
        <li>
          <strong>Full-service or low-cost.</strong> Air India is the full-service carrier. IndiGo,
          Air India Express, Akasa Air and SpiceJet are low-cost, where meals and seat selection may
          cost extra on the lowest fares.
        </li>
        <li>
          <strong>Operating status changes.</strong> SpiceJet, for example, has reported reduced
          capacity and weaker on-time performance in 2026, so check its current schedule before
          booking tight connections.
        </li>
        <li>
          <strong>Baggage.</strong> Cabin and checked allowances differ by airline and fare type, so
          check your ticket before you pack.
        </li>
        <li>
          <strong>Check-in and security.</strong> Check in online where possible and arrive early,
          around two hours before departure is a common recommendation. Carry your passport as photo
          ID.
        </li>
        <li>
          <strong>Changes and cancellations.</strong> The cheapest fares tend to be the least
          flexible, so read the rules first.
        </li>
        <li>
          <strong>Delays.</strong> Winter fog in the north and monsoon storms can cause disruption.
          If you connect to an international flight on a separate ticket, leave generous time, often
          a night or at least several hours.
        </li>
      </ul>

      <h2>When Should You Choose a Flight Instead of a Train?</h2>
      <ul className="list-disc space-y-2">
        <li>Very long routes such as Delhi to Mumbai, Delhi to Kochi or Mumbai to Bengaluru, where the train takes a day or more.</li>
        <li>When you have limited time, or need to reach islands and remote regions such as the Andamans.</li>
        <li>When trains are sold out or waitlisted.</li>
        <li>A train still makes sense for the experience, to save a hotel night, or on short routes where airport time cancels out the flight time.</li>
      </ul>

      <h2>Bus Travel: Types, Booking and Safety</h2>
      <ul className="list-disc space-y-2">
        <li>
          <strong>Types.</strong> Government buses run from ordinary to express and air-conditioned
          services. Private operators offer AC seaters, sleeper and semi-sleeper coaches and
          Volvo-type premium coaches.
        </li>
        <li>
          <strong>Booking.</strong> Platforms such as redBus show many operators, but the bus is run
          by the operator, so read the operator name, bus type, reviews, boarding point and
          cancellation policy before paying.
        </li>
        <li>
          <strong>Boarding points.</strong> Many private buses leave from roadside points rather than
          the main bus station, so confirm the exact pick-up and drop-off.
        </li>
        <li>
          <strong>Overnight advice.</strong> Choose a well-reviewed operator, keep your passport,
          phone and valuables with you, and lock your bags. Solo travellers may prefer daytime
          buses.
        </li>
        <li>
          <strong>Long distances.</strong> For routes of many hours, a train or flight is often more
          comfortable. Buses shine on hill routes and where rail is limited.
        </li>
      </ul>

      <h2>City Metro Guide for Tourists</h2>
      <p>
        Official figures from 2026 describe metro services in about two dozen Indian cities. Ticketing,
        apps and luggage rules differ by city, so check the local operator.
      </p>
      <ul className="list-disc space-y-2">
        <li><strong>Tickets.</strong> Buy single-journey tokens or tickets at stations, or use a smart card or the digital options many systems offer.</li>
        <li><strong>Maps and interchanges.</strong> Follow the line colour and the final-station name for direction, and use the station maps to find interchanges.</li>
        <li><strong>Airport links.</strong> Some cities have direct airport metro services and others do not, so check before relying on one with heavy luggage.</li>
        <li><strong>Women-only coaches.</strong> Available on several systems, with arrangements varying by city.</li>
        <li><strong>Crowds and luggage.</strong> Expect crowds at peak hours. Large bags may take longer to screen or be restricted.</li>
      </ul>
      <Table head={["City", "Metro availability", "Useful tourist connections", "Operator to check"]} rows={metros} />
      <p>
        Other cities with systems in operation include Lucknow, Ahmedabad, Pune, Nagpur, Agra, Patna,
        Bhopal and Indore, some only in part.
      </p>

      <h2>Taxis, Auto-Rickshaws and Ride-Hailing Tips</h2>
      <ul className="list-disc space-y-2">
        <li>Uber, Ola and Rapido availability and services differ by city and change over time, so open the app in your city before relying on it.</li>
        <li>Prepaid taxi booths inside many airports are an easy option on arrival.</li>
        <li>Shared autos run fixed routes and are cheap but cramped. Cycle-rickshaws are mostly found in older parts of some cities.</li>
        <li>Confirm the destination and the fare or meter before the vehicle moves.</li>
        <li>Check the number plate and driver details against the app, and share your ride with someone using the app feature.</li>
        <li>Keep small change for autos, and plan late-night arrivals with a prepaid booth, a hotel pickup or an app ride.</li>
        <li>Regulations differ between cities and states, including rules on app bikes and shared services.</li>
      </ul>

      <h2>Hiring a Private Car and Driver: What to Confirm</h2>
      <ul className="list-disc space-y-2">
        <li><strong>Why it is popular.</strong> Flexible stops, local knowledge, luggage space and no navigation or parking stress.</li>
        <li><strong>Types of booking.</strong> One-way transfer, full-day rental (often with a kilometre or hour limit) and multi-day tour.</li>
        <li><strong>Inclusions.</strong> Usually the vehicle, driver and fuel, but confirm kilometre limits, tolls, parking, state taxes, driver accommodation and food, and overnight charges.</li>
        <li><strong>Get it in writing.</strong> Ask for a written quotation and confirmation from a registered company with reviews and a clear cancellation policy.</li>
        <li><strong>Questions to ask.</strong> What car model, is it air-conditioned, who pays tolls and taxes, is there a backup vehicle and can I speak to the driver beforehand?</li>
        <li><strong>Good journeys for a private car.</strong> Delhi, Agra and Jaipur (the Golden Triangle), Jaipur, Jodhpur and Udaipur, Kochi, Munnar, Thekkady and Alleppey, and Delhi, Rishikesh and Haridwar. Journey times depend on traffic, road conditions and stops.</li>
      </ul>

      <h2>Mountain and Remote-Region Transportation</h2>
      <ul className="list-disc space-y-2">
        <li><strong>Himachal Pradesh and Uttarakhand.</strong> State buses, shared taxis and private cars. Monsoon landslides can close roads.</li>
        <li><strong>Ladakh and Spiti.</strong> Shared taxis, a few buses and private 4WD vehicles. Many high passes close in winter.</li>
        <li><strong>Kashmir.</strong> Shared taxis and private cabs, with access affected by season and conditions. Check current advisories.</li>
        <li><strong>Sikkim and the Northeast.</strong> Shared jeeps and buses. Some areas need permits, and requirements can depend on nationality.</li>
        <li>Allow extra days for weather and closures, book ahead in peak season and ask your hotel or a local operator for current road status.</li>
      </ul>

      <h2>Getting Around Ladakh and Spiti Valley</h2>
      <ul className="list-disc space-y-2">
        <li><strong>Altitude.</strong> Allow time to acclimatise, drink water and speak to a doctor first if you have health concerns.</li>
        <li><strong>Roads.</strong> Expect rough surfaces, landslides, water crossings and long days. Do not treat any road or pass as open all year.</li>
        <li><strong>Fuel and supplies.</strong> Stations are far apart, so refuel when you can.</li>
        <li><strong>Connectivity.</strong> Mobile coverage can be weak or absent, so download offline maps and tell someone your plan.</li>
        <li><strong>Permits.</strong> Some areas need permits for foreign visitors. Ask a registered local operator what applies now.</li>
      </ul>

      <h2>Ferries and Boat Transportation</h2>
      <ul className="list-disc space-y-2">
        <li><strong>Kerala.</strong> Public passenger boats connect backwater towns, while houseboats and boat tours are private tourist experiences. Kochi also has the Water Metro.</li>
        <li><strong>Andaman and Nicobar Islands.</strong> Inter-island ferries are run by government and private operators. Seats can sell out, so book in advance on official or operator portals.</li>
        <li><strong>Kolkata.</strong> Ferries run on the Hooghly River as an alternative to road traffic.</li>
        <li><strong>Public, cruise or private.</strong> Public ferries are for transport, tourist cruises sell an experience and private boat tours are custom hires.</li>
        <li>Carry your passport or photo ID, expect weather cancellations, pack motion-sickness medicine if you need it and always check the official schedule.</li>
      </ul>

      <h2>Best Transportation for Different Types of Travellers</h2>
      <p>No single option suits everyone. Use these as starting points.</p>
      <Table head={["Traveller", "What usually works best"]} rows={travellerTypes} />

      <h2>Best Ways to Travel Between Popular Indian Destinations</h2>
      <p>
        Journey times, train availability and flight frequency change, so verify before you book.
        This table shows which mode usually fits.
      </p>
      <Table
        head={["Route", "Recommended options", "Train", "Flight", "Private car", "Seasonal notes"]}
        rows={routes}
      />

      <h2>How to Book Transportation in India</h2>
      <ul className="list-disc space-y-2">
        <li><strong>Trains.</strong> Create an IRCTC account, use the foreign tourist option if you qualify, confirm quota and class, then save your ticket and PNR.</li>
        <li><strong>Flights.</strong> Compare airline sites and booking platforms. Booking directly can make changes and refunds easier.</li>
        <li><strong>Buses.</strong> Use a platform such as redBus or the state transport portal, and check the actual operator and cancellation rules.</li>
        <li><strong>Metro.</strong> Buy at stations, with smart cards or the local metro app where available.</li>
        <li><strong>Taxis.</strong> Install the apps you plan to use and check they work with your phone number and payment card.</li>
        <li><strong>Ferries.</strong> Use official operator or government portals, especially for the Andamans.</li>
        <li><strong>Private cars.</strong> Book with a registered company and get the quote and itinerary in writing.</li>
        <li><strong>General.</strong> Compare prices and read cancellation terms. Check website addresses carefully, as fake booking sites imitate real ones. Keep digital and printed confirmations, and check card fees and international payment support.</li>
      </ul>

      <h2>Common Transportation Scams and How to Avoid Them</h2>
      <p>Most drivers and agents are honest. These situations are worth knowing about.</p>
      <ul className="list-disc space-y-2">
        <li><strong>Hotel is closed.</strong> If a driver says your hotel is closed, call the hotel yourself and decline detours.</li>
        <li><strong>Station helpers.</strong> Use official counters, display boards and the IRCTC app, and politely decline unofficial help.</li>
        <li><strong>Fake ticket agents.</strong> Book through IRCTC or an established agent, and check the PNR yourself.</li>
        <li><strong>Overcharging and route changes.</strong> Agree the fare or use the meter, and follow your own map.</li>
        <li><strong>Airport transfer touts.</strong> Use the prepaid booth, a known app or a pre-booked pickup.</li>
        <li><strong>Fake websites.</strong> Check the address, reviews and contact details, and prefer official sites.</li>
        <li><strong>Surprise extra payments.</strong> Confirm tolls, parking and overnight costs in writing before the trip.</li>
      </ul>

      <h2>Essential Travel Apps for Getting Around India</h2>
      <p>Availability and features change, so check each app before you travel.</p>
      <Table
        head={["App or service", "What it does", "Registration or Indian number", "Limitations for visitors"]}
        rows={apps}
      />

      <h2>Essential Transportation Tips for International Tourists</h2>
      <ul className="list-disc space-y-2">
        <li>Carry a valid photo ID (your passport) and keep digital and printed ticket confirmations.</li>
        <li>Download offline maps and consider an Indian SIM or eSIM, since some apps send OTPs to Indian numbers.</li>
        <li>Keep luggage secure and avoid unofficial ticket agents.</li>
        <li>Allow extra time for airport and railway transfers, and check platform and boarding information.</li>
        <li>Carry some local currency for small transport expenses.</li>
        <li>Confirm the destination and fare before you travel.</li>
        <li>Check local weather and transport disruption updates.</li>
      </ul>

      <h2>Packing Checklist for Indian Journeys</h2>
      <ul className="list-disc space-y-2">
        <li>Passport and identification, plus tickets and booking confirmations</li>
        <li>Phone, charger and a power bank, and headphones</li>
        <li>Reusable water bottle, hand sanitiser and tissues</li>
        <li>Personal medication</li>
        <li>Small luggage lock</li>
        <li>Comfortable clothing, with a light layer for air-conditioned trains and buses</li>
        <li>Snacks for longer journeys</li>
        <li>Travel pillow and eye mask for overnight trips</li>
      </ul>

      <h2>Sample India Travel Routes</h2>
      <p>These are illustrative routes and can be customised to your dates, pace and budget.</p>
      <ul className="list-disc space-y-2">
        <li>
          <strong>Classic Golden Triangle (6 to 7 days): Delhi, Agra, Jaipur and back to Delhi.</strong>{" "}
          Use the metro for Delhi sightseeing, a daytime train or private car to Agra, a private car
          from Agra to Jaipur so you can stop en route, and a train or car back to Delhi.
        </li>
        <li>
          <strong>Rajasthan Highlights (8 to 10 days): Jaipur, Jodhpur and Udaipur.</strong> Private road
          transfers give flexibility for forts and villages, and where suitable trains exist, verify
          the timetable and consider them for a long leg.
        </li>
        <li>
          <strong>Kerala Highlights (7 to 8 days): Kochi, Munnar, Thekkady and Alleppey.</strong> Private
          cars suit the hill roads where rail does not reach, and boats fit around Alleppey, either a
          public ferry or a private houseboat or tour.
        </li>
      </ul>

      <h2>Practical Tips</h2>
      <ul className="list-disc space-y-2">
        {tips.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>

      <GuideFaq faqs={faqs} />

      <h2>Plan the Rest of Your Trip</h2>
      <p>
        Pair this guide with our advice on the{" "}
        <a href="/India/guides/best-time-to-visit">
          best time to explore India
        </a>
        , our{" "}
        <a href="/India/guides/festivals-and-events">
          festivals guide
        </a>{" "}
        and our tips for{" "}
        <a href="/India/guides/safety-and-health">
          staying healthy and safe
        </a>
        . Ready to plan? Request a{" "}
        <a href="/customized-itineraries">
          custom itinerary
        </a>{" "}
        or{" "}
        <a href="/contact">
          talk to a travel expert
        </a>
        .
      </p>
    </GuideLayout>
  );
}
