import type { Metadata } from "next";
import GuideLayout from "@/components/india/guides/GuideLayout";
import GuideCta from "@/components/india/guides/GuideCta";
import GuideFeature from "@/components/india/guides/GuideFeature";
import { slugify } from "@/components/india/guides/slugify";

const TITLE = "Best Time to Visit India: Month-by-Month Travel Guide | Get Trip Go";
const DESCRIPTION =
  "Planning India? Find the best time to visit India by month, region and travel style, with weather notes, itineraries, packing tips and answers to common questions.";
const URL = "https://gettripgo.com/India/guides/best-time-to-visit";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "best time to visit India",
    "best month to explore India",
    "India travel season",
    "India weather by month",
    "best places to visit in India",
    "India holiday packages",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Get Trip Go",
    type: "article",
    images: [
      {
        url: "/images/india/guides/best-time-to-visit-india.jpg",
        alt: "Kangchenjunga glowing at sunrise, one of India's best mountain views",
      },
    ],
  },
};

// Edit these paths if your tour pages live elsewhere.
const LINKS = {
  rajasthan: "/India/rajasthan",
  kerala: "/India/kerala",
  goa: "/India/goa",
  kashmir: "/India/kashmir",
  ladakh: "/India/ladakh",
  andaman: "/India/andaman",
  goldenTriangle: "/India/golden-triangle",
  festivals: "/India/guides/festivals-and-events",
  gettingAround: "/India/guides/getting-around",
  safety: "/India/guides/safety-and-health",
  custom: "/customized-itineraries",
  contact: "/contact",
};

const seasons = [
  {
    name: "Winter (October to March): the classic travel season.",
    text: "For most of the country, this is the sweet spot. Days are sunny and dry, nights are cool, and sightseeing is comfortable. The Golden Triangle (Delhi, Agra and Jaipur), Rajasthan, Varanasi, Goa and Kerala are all at their best. The trade-off is crowds and higher prices, especially around Christmas and New Year.",
  },
  {
    name: "Summer (April to June): hot, but not for everyone.",
    text: "In the plains, temperatures regularly climb past 40°C, which makes midday sightseeing hard work. But summer is the best time to escape to the hills. Himachal Pradesh, Uttarakhand, Darjeeling, Sikkim and Kashmir are pleasant, green and far less crowded than the plains.",
  },
  {
    name: "Monsoon (June to September): lush, dramatic and quieter.",
    text: "The rains arrive in Kerala around the start of June and move northward. Landscapes turn vivid green, waterfalls roar and prices drop. Heavy rain can disrupt transport, and some regions are best avoided, but others are at their most beautiful.",
  },
  {
    name: "Post-monsoon (October to November): a hidden gem.",
    text: "The air is clear, the countryside is green and the big festival season begins. Many seasoned travellers consider this the best window of the year.",
  },
];

const months = [
  ["January", "Rajasthan, Delhi and Agra, Goa, Kerala, Andaman", "Palace stays, Taj Mahal, beaches, backwaters, snow in Gulmarg and Auli", "Cool, sunny days in the north with foggy mornings; warm in the south. Peak season, so book early."],
  ["February", "Rajasthan, Ranthambore, Kerala, Goa, Andaman", "Tiger safaris, desert camps, beaches, skiing in Kashmir", "Pleasant almost everywhere as the north begins to warm up."],
  ["March", "Varanasi, Delhi, Darjeeling, Sikkim, Kerala, Ranthambore", "Holi, spring in the hills, wildlife", "Warming up in the plains; the Himalayas are blooming. Holi dates move each year."],
  ["April", "Himachal Pradesh, Uttarakhand, Kashmir, Darjeeling, Meghalaya", "Hill stations, tulips in Srinagar, treks", "Hot in the plains and getting humid in the south. The hills are the better choice."],
  ["May", "Shimla, Manali, Mussoorie, Sikkim, Kashmir", "Cool escapes, trekking, tiger spotting in the hot, dry season", "Very hot in the plains. Some Himalayan passes begin to open; dates vary by snowfall."],
  ["June", "Ladakh, Kashmir, Himachal Pradesh", "Mountain drives, monasteries, Rath Yatra in Puri", "Monsoon reaches Kerala around the start of June. Ladakh roads usually open."],
  ["July", "Ladakh, Valley of Flowers, Spiti, Kerala", "Alpine flowers, Ayurveda, green landscapes", "Heavy rain in much of India. Landslides can affect mountain roads."],
  ["August", "Ladakh, Valley of Flowers, Western Ghats, Kerala", "Monsoon scenery, trekking, backwater boat races", "Wet in most regions; Ladakh stays comparatively dry. Onam often falls in late August or September."],
  ["September", "Ladakh, Kashmir, Kerala, Rajasthan", "Festivals, green countryside, quieter sights", "The rains retreat gradually. A good shoulder month for value."],
  ["October", "Rajasthan, Golden Triangle, Varanasi, Himalayan views, Kerala", "Dussehra, wildlife parks reopening, clear mountain views", "Clear skies and easing heat. Demand rises, so book ahead."],
  ["November", "Rajasthan, Goa, Andaman, Tamil Nadu, Delhi", "Diwali, Pushkar Camel Fair, beaches", "Comfortable and dry in most regions. Diwali can fall in October or November."],
  ["December", "Goa, Kerala, Andaman, Rajasthan, Kutch", "Beach holidays, Hornbill Festival, Rann Utsav, snow in the Himalayas", "Cool in the north with fog, warm in the south. Highest prices around Christmas and New Year."],
];

const regions = [
  {
    name: "North India and Rajasthan",
    text: "Go from October to March. Delhi, Agra, Jaipur, Udaipur, Jodhpur and Jaisalmer are comfortable and sunny. Desert regions like Jaisalmer are especially good from November to February, when you can enjoy camel safaris and dune camping without the heat. Expect cold mornings and fog in the plains in December and January, so pack layers.",
  },
  {
    name: "The Himalayas",
    text: "The mountains have different sweet spots depending on where you are heading.",
    bullets: [
      "Himachal Pradesh and Uttarakhand (Shimla, Manali, Rishikesh, Mussoorie): March to June for pleasant weather and September to November for clear mountain views. December to February brings snow and winter sports.",
      "Ladakh: roughly June to September, when the high-altitude roads are open and the weather is manageable. Outside this window, access is limited and it is extremely cold.",
      "Kashmir: April to October. Spring brings tulip blooms and summer brings cool, green valleys.",
      "Sikkim and Darjeeling: March to May for rhododendrons and October to November for the sharpest views of Kangchenjunga, the world's third-highest peak.",
      "Valley of Flowers (Uttarakhand): July to September, when the alpine meadow is in bloom.",
    ],
  },
  {
    name: "Kerala and the South",
    text: "Kerala is best from September to March, with cooler weather for backwaters, beaches and hill stations like Munnar. Tamil Nadu's temple towns and the cities of Karnataka are most comfortable from November to March. If you are curious about Ayurveda, the monsoon months are traditionally considered a good time for treatments, and rates are lower.",
  },
  {
    name: "Goa and the Beaches",
    text: "Peak beach season runs November to February, with calm seas, sunshine and lively beach scenes. The Andaman Islands are best from November to April for diving, snorkelling and clear water. Many beach shacks in Goa close during the monsoon.",
  },
  {
    name: "The Northeast",
    text: "States like Assam, Meghalaya, Arunachal Pradesh and Nagaland are best from October to April, with clear skies and manageable temperatures. Meghalaya is famous for being one of the wettest places on earth, so visit during the dry months for easier travel to living root bridges and waterfalls.",
  },
  {
    name: "Wildlife Safaris",
    text: "For tiger spotting in parks like Ranthambore, Bandhavgarh and Kanha, the hot, dry months of March to June are often best, because animals gather around water sources and vegetation is thin. Many parks close or restrict access during the monsoon, so check dates before booking.",
  },
];

const experiences = [
  ["Beach holidays", "Goa, Andaman Islands, Kovalam and Varkala in Kerala, Gokarna", "November to February for Goa; November to April for the Andamans"],
  ["Mountain and snow", "Gulmarg, Manali, Auli, Shimla, Darjeeling", "December to February for snow; April to June and September to November for views and walks"],
  ["Wildlife and tiger safaris", "Ranthambore, Bandhavgarh, Kanha, Corbett, Kaziranga", "November to April for most parks; March to June often best for tigers. Many parks close in the monsoon."],
  ["Desert safaris", "Jaisalmer, Bikaner, Pushkar, Rann of Kutch", "November to February"],
  ["Honeymoon holidays", "Kerala, Goa, Udaipur, Andaman, Kashmir, Darjeeling", "October to March for most; April to October for Kashmir"],
  ["Family holidays", "Golden Triangle, Kerala, Goa, Jaipur, Udaipur", "November to February, when days are comfortable"],
  ["Cultural and heritage tours", "Delhi, Agra, Jaipur, Varanasi, Hampi, Tamil Nadu temple towns", "October to March"],
  ["Adventure and trekking", "Himachal, Uttarakhand, Sikkim, Ladakh, Rishikesh", "April to June and September to October for most treks; June to September for Ladakh"],
  ["Backwater experiences", "Alleppey, Kumarakom, Kollam, Kochi", "September to March; monsoon brings lush scenery and lower prices"],
];

const travellers = [
  ["First-time visitors", "October to March", "Start with the Golden Triangle (Delhi, Agra, Jaipur) and add Varanasi, Udaipur or Kerala. Comfortable weather and the easiest logistics."],
  ["International tourists", "October to March", "The widest range of tours and the best weather. Book flights and hotels early, and check visa rules before you travel."],
  ["Honeymoon couples", "October to March; April to October for Kashmir", "Kerala backwaters, Udaipur palaces, Goa or Andaman beaches, or Kashmir in the warmer months."],
  ["Families", "November to February", "Pick fewer, longer stops with comfortable transfers. Avoid the heat of April to June in the plains."],
  ["Budget travellers", "Late September, early October and March", "Shoulder months mean lower prices and fewer crowds. The monsoon is cheapest, but check regional conditions."],
  ["Adventure enthusiasts", "April to June and September to October; June to September for Ladakh", "Himalayan treks, Ladakh road trips, rafting and wildlife, with seasonal closures in mind."],
];

const itineraries = [
  ["5 to 7 days", "Golden Triangle (Delhi, Agra, Jaipur) or Kerala (Kochi, Munnar, Alleppey)", "A first taste of India. Stay in one region to avoid long transfers."],
  ["8 to 10 days", "Golden Triangle plus Varanasi, or Delhi, Agra, Jaipur and Udaipur", "Adds a second cultural highlight without feeling rushed."],
  ["10 to 12 days", "Rajasthan circuit (Jaipur, Jodhpur, Jaisalmer, Udaipur) with Delhi and Agra, or Kerala with Goa", "Time for deserts, forts and palaces, or backwaters and beaches."],
  ["12 to 15 days", "Golden Triangle, Rajasthan and Varanasi, or Delhi, Agra, Jaipur plus Kerala", "A good length to combine two regions using a domestic flight."],
  ["15 to 20 days", "North and south combined: Delhi, Agra, Jaipur, Varanasi, then Goa or Kerala. In summer, pair Delhi with Ladakh or Kashmir", "Room for wildlife, a hill region or beach time."],
  ["20 to 25 days", "A grand tour: Delhi, Rajasthan, Varanasi, Mumbai, Goa or Hampi, Kerala, with extras like Darjeeling or the Andamans", "Slower pacing, more rest days and regional variety."],
];

const packing = [
  {
    name: "Winter",
    text: "Pack layers. Cool mornings and evenings are common in the north, and Himalayan trips need proper warm clothing, including a jacket, hat and gloves. In the south, light cotton is enough. Bring a scarf, which also helps in temples.",
  },
  {
    name: "Summer",
    text: "Choose light, loose cotton or linen, a wide-brimmed hat, sunglasses, high-SPF sunscreen and a refillable bottle. Plan sightseeing for early morning and late afternoon. For the hills, add a warm layer for the evenings.",
  },
  {
    name: "Monsoon",
    text: "Bring quick-dry clothes, a lightweight rain jacket, waterproof sandals or shoes with good grip, a dry bag for electronics and insect repellent. Allow extra travel time in case of delays.",
  },
];

const essentials = [
  "Modest clothing that covers shoulders and knees for temples and religious sites",
  "Comfortable shoes that are easy to take off",
  "A universal travel adapter. India uses a 230V supply with types C, D and M plugs",
  "A basic medical kit, any prescription medicines and insect repellent",
  "Copies of your passport, visa and travel insurance, kept separately from the originals",
];

const tips = [
  "Book early for peak season. Trains, flights and good hotels fill up quickly from October to February.",
  "Consider shoulder months. Late September, October and March offer a good balance of weather, fewer crowds and better prices.",
  "Don't try to see everything in one trip. India is huge. Pick one or two regions that share a good season.",
  "Pack for the region, not the country. A trip that includes the Himalayas and the south may need both a warm jacket and light cotton.",
  "Check conditions before you go. Mountain access, national park schedules and festival dates can all change from year to year.",
];

const faqs = [
  ["What is the best month to visit India?", "It depends on the region, but October to March suits most first trips, with sunny weather across the Golden Triangle, Rajasthan, Goa and Kerala. Ladakh runs roughly June to September."],
  ["Is October a good time to visit India?", "Yes. The monsoon has mostly withdrawn, the air is clearer and festivals such as Dussehra begin. Demand rises, so book early. Some southern coasts can still see rain."],
  ["What is the cheapest time to travel to India?", "The monsoon (June to September) and the hot weeks of April and May in the plains are usually cheapest. Late September and March offer good shoulder-season value."],
  ["Which part of India is best during summer?", "The hills. Himachal Pradesh, Uttarakhand, Kashmir, Sikkim and Darjeeling are pleasant from April to June, and Ladakh opens from roughly June."],
  ["Is India worth visiting during the monsoon?", "It can be. Kerala and the Western Ghats look lush, crowds are smaller and prices are lower. Expect rain delays, landslide risks in the mountains and some park closures."],
  ["How many days are enough to explore India?", "For a first trip, 8 to 12 days covers the Golden Triangle plus one or two extras. With 15 to 20 days you can combine north and south."],
  ["What is the best time to visit the Taj Mahal?", "October to March has the most comfortable weather, though winter mornings can be foggy. The Taj Mahal is closed to general visitors on Fridays, so check opening times."],
  ["When should international tourists visit India?", "Most find October to March easiest, with comfortable weather and the widest choice of tours. For lower prices and fewer crowds, try late September, October or March."],
  ["What is the best time to visit Kerala?", "September to March is generally best for backwaters, beaches and hill stations. The monsoon brings heavy rain and green landscapes, with cheaper Ayurveda packages."],
  ["What is the best time to visit Ladakh?", "Roughly June to September, when the high passes are normally open. Opening dates depend on snowfall, so check road status and allow time to acclimatise."],
  ["What is the best time to visit Goa?", "November to February is peak beach season. March and October are quieter. During the monsoon many beach shacks close and the sea can be rough."],
  ["Do festival dates and park schedules change?", "Yes. Many festival dates follow the lunar calendar, parks often close in the monsoon, and mountain roads can shut because of snow or landslides. Confirm before booking."],
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "When Is the Best Time to Explore India?",
  description: DESCRIPTION,
  mainEntityOfPage: URL,
  publisher: { "@type": "Organization", name: "Get Trip Go" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
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

export default function BestTimeToVisitIndiaPage() {
  return (
    <GuideLayout
      tag="Essential Travel Tips"
      title="When Is the Best Time to Explore India?"
      image="/images/india/guides/best-time-to-visit-india.jpg"
      cta={
        <GuideCta
          title="Plan your India trip with Get Trip Go"
          text="Now you know when to go, let our travel experts handle the rest. We build India holiday packages around your dates, interests and budget."
          destinations={[
            { label: "Golden Triangle tours", href: LINKS.goldenTriangle },
            { label: "Rajasthan tours", href: LINKS.rajasthan },
            { label: "Kerala holidays", href: LINKS.kerala },
            { label: "Goa holidays", href: LINKS.goa },
            { label: "Kashmir tours", href: LINKS.kashmir },
            { label: "Ladakh tours", href: LINKS.ladakh },
            { label: "Andaman holidays", href: LINKS.andaman },
          ]}
          primary={{ label: "Request a custom itinerary", href: LINKS.custom }}
          secondary={{ label: "Talk to a travel expert", href: LINKS.contact }}
        />
      }
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <div>
        <p>
          India is not one destination. It is a subcontinent with snow-capped peaks, tropical
          beaches, desert dunes and rainforest, and the weather in each can be completely
          different on the same day. While Delhi shivers in a January fog, Goa is warm and
          golden. While Rajasthan bakes in May, Ladakh is just opening its mountain passes.
        </p>
        <p>
          So the honest answer to &quot;when should I go?&quot; is: it depends on where. This
          guide breaks down the India travel season by month, region and travel style, so you can
          match your trip to the right time.
        </p>
      </div>

      <p className="bg-orange-50">
        <strong>Quick answer:</strong> for most first-time visitors, October to March is the best
        time to visit India. Choose April to June for the hills, June to September for Ladakh, and
        plan the monsoon for lush landscapes and lower prices.
      </p>

      <h2>India&apos;s Seasons at a Glance</h2>
      {seasons.map((s, i) => (
        <GuideFeature
          key={s.name}
          reverse={i % 2 === 1}
          title={s.name.split(":")[0]}
          image={`/images/india/seasons/${slugify(s.name.split(" (")[0])}.jpg`}
        >
          <p>
            <strong>{s.name.split(": ")[1]}</strong> {s.text}
          </p>
        </GuideFeature>
      ))}

      <h2>India Weather by Month: Where to Go and What to Do</h2>
      <p>
        Use this table to find the best places to visit in India in your travel month. Conditions
        vary by region and year, so treat it as a starting point.
      </p>
      <Table head={["Month", "Best places", "Highlights", "Weather and notes"]} rows={months} />

      <h2>The Best Time by Region</h2>
      {regions.map((r, i) => (
        <GuideFeature
          key={r.name}
          wide={!!r.bullets}
          reverse={i % 2 === 1}
          title={r.name}
          image={`/images/india/regions/${slugify(r.name)}.jpg`}
        >
          <p>{r.text}</p>
          {r.bullets && (
            <ul className="list-disc space-y-2 pl-5">
              {r.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </GuideFeature>
      ))}

      <h2>Best Time to Visit India for Your Kind of Holiday</h2>
      <Table head={["Experience", "Recommended destinations", "Ideal months"]} rows={experiences} />

      <h2>Best Time to Visit India for International Travellers</h2>
      <Table head={["Traveller", "Best time", "What to know"]} rows={travellers} />

      <h2>Timing Your Trip Around Festivals</h2>
      <p>
        Festivals can make a trip unforgettable, but they also affect crowds and prices.{" "}
        <strong>Holi</strong> (March) fills northern towns with colour, <strong>Diwali</strong>{" "}
        (October or November) lights up the whole country, and the{" "}
        <strong>Pushkar Camel Fair</strong> (November) draws traders and travellers to Rajasthan.
        Dates follow the lunar calendar and change each year, so check before you lock in flights
        and hotels. Read our <a href={LINKS.festivals}>guide to India&apos;s festivals</a> for more.
      </p>

      <h2>How Many Days Do You Need to Explore India?</h2>
      <p>
        India is big, so it is better to see less and enjoy it more. These routes show what fits
        into each trip length.
      </p>
      <Table head={["Trip length", "Suggested route", "Why it works"]} rows={itineraries} />
      <p>
        See our <a href={LINKS.gettingAround}>guide to travelling across India</a> for how to link
        these stops by train, flight and road.
      </p>

      <h2>What to Pack for India</h2>
      {packing.map((p, i) => (
        <GuideFeature
          key={p.name}
          reverse={i % 2 === 1}
          title={p.name}
          image={`/images/india/packing/${slugify(p.name)}.jpg`}
        >
          <p>{p.text}</p>
        </GuideFeature>
      ))}
      <ul className="list-disc space-y-2">
        {essentials.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>

      <h2>Practical Tips for Choosing Your Dates</h2>
      <ul className="list-disc space-y-2">
        {tips.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <p>
        Before you travel, read our <a href={LINKS.safety}>health and safety tips for India</a>.
      </p>

      <h2>Frequently Asked Questions</h2>
      <div className="grid items-start gap-3 !space-y-0 !text-base md:grid-cols-2 [&>*]:!mt-0">
        {faqs.map(([q, a]) => (
          <details
            key={q}
            className="group rounded-xl border border-slate-200 bg-white px-4 py-3 open:bg-slate-50"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[0.95rem] font-semibold leading-snug text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden">
              {q}
              <span className="text-xl leading-none text-orange-500 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-2 text-sm leading-6">{a}</p>
          </details>
        ))}
      </div>
    </GuideLayout>
  );
}
