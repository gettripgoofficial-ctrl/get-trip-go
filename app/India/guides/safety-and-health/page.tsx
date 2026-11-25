import type { Metadata } from "next";
import GuideLayout from "@/components/india/guides/GuideLayout";
import GuideCta from "@/components/india/guides/GuideCta";
import GuideFaq from "@/components/india/guides/GuideFaq";
import { CTA_DESTINATIONS, CTA_PRIMARY, CTA_SECONDARY } from "@/data/india/guideCta";
import GuideFeature from "@/components/india/guides/GuideFeature";
import { slugify } from "@/components/india/guides/slugify";

const TITLE = "India Travel Safety Tips: Health, Food, Scams & Emergency Guide";
const DESCRIPTION =
  "India travel safety tips for visitors: vaccines to discuss, food and water safety, air quality, altitude, scams, solo and women travel, and emergency numbers.";
const URL = "https://gettripgo.com/India/guides/safety-and-health";

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
        url: "/images/india/guides/safety-and-health.jpg",
        alt: "A traveller resting in a quiet corner of India",
      },
    ],
  },
};

const sections = [
  {
    title: "Before You Go",
    text: "Start preparing four to six weeks before departure, because some vaccines need more than one dose.",
    bullets: [
      "See a doctor or travel clinic early. The CDC recommends typhoid vaccination for most travellers to India, and health authorities such as the CDC and the UK's TravelHealthPro commonly discuss hepatitis A as well. Hepatitis B, cholera, Japanese encephalitis and rabies may be advised depending on your itinerary, age and activities.",
      "Make sure routine vaccines (such as measles, tetanus and flu) are up to date.",
      "Ask about malaria. Risk varies by region and season, and preventive medicine is advised only for certain areas. Your clinician can match advice to your route.",
      "Buy travel insurance that covers medical care and evacuation, and check that it covers any adventure activities such as trekking.",
      "Carry enough of your regular medicines in their original packaging, with a copy of the prescription. Rules differ for some medicines, so check the requirements before you fly.",
      "Make copies of your passport, visa and insurance, and keep one set separate from the originals.",
    ],
  },
  {
    title: "Food and Water",
    text: "Stomach upsets are the most common travel health problem in India, and most can be avoided with a few habits.",
    bullets: [
      "Drink bottled water with an intact seal, or filtered or boiled water. Avoid tap water and ice of unknown origin.",
      "Eat food that is freshly cooked and served hot. Busy stalls with high turnover are usually safer than empty ones.",
      "Be careful with raw salads, pre-cut fruit and unpeeled items you can't wash yourself.",
      "Wash your hands often or carry hand sanitiser, especially before eating.",
      "If you get diarrhoea, drink plenty of fluids and use oral rehydration salts. See a doctor if you have blood in your stool, a high fever, severe pain or symptoms that last more than a couple of days.",
    ],
  },
  {
    title: "Mosquitoes and Insect Bites",
    text: "Dengue, malaria and other infections spread through mosquito bites. Use insect repellent, wear long sleeves and trousers at dusk and dawn, and choose accommodation with screens or air conditioning. Stay particularly alert during and after the monsoon, when mosquitoes are most active.",
  },
  {
    title: "Heat, Pollution and Altitude",
    bullets: [
      "Heat: In April to June, avoid the midday sun, drink plenty of water, and wear light, loose clothing and a hat.",
      "Air quality: Delhi and other northern cities can have poor air from roughly October to January. Check a local air-quality app, limit outdoor exertion on bad days, and consider a well-fitting N95-type mask. If you have asthma or heart or lung conditions, talk to your doctor first.",
      "Altitude: Places like Leh in Ladakh sit at about 3,500 metres. Allow a day or two to rest and acclimatise, drink water, avoid alcohol at first, and ascend gradually. Headache, nausea and breathlessness can be signs of altitude sickness. Don't go higher if symptoms appear, and descend if they get worse.",
    ],
  },
  {
    title: "Animals and Bites",
    text: "Keep your distance from stray dogs and monkeys, and don't carry exposed food near temples or viewpoints where monkeys gather. If you are bitten or scratched by any animal, wash the wound thoroughly with soap and water for at least 15 minutes and get medical advice urgently, because rabies treatment depends on acting quickly.",
  },
  {
    title: "Staying Safe in Cities and on the Road",
    bullets: [
      "Agree on prices or use the meter before taxi and auto-rickshaw rides, or use ride-hailing apps that show the fare upfront.",
      "Be wary of touts who say a hotel or attraction is closed or who steer you to a particular shop. Book through places you have checked, and compare prices.",
      "Keep valuables out of sight in crowds and on trains, and use a money belt or a zipped inner pocket.",
      "Road traffic is one of the main risks for visitors. Cross roads carefully, wear a helmet on motorbikes, and avoid night driving on highways where possible.",
      "Use licensed guides and operators for treks, rafting and safaris, and check the equipment.",
      "Follow local advice on rivers, beaches and mountains, since conditions can change quickly during the monsoon.",
    ],
  },
  {
    title: "Solo and Women Travellers",
    text: "Many women travel through India safely, and a few precautions help. Dress in line with local norms, which also helps at temples. Choose well-reviewed accommodation, share your live location with someone you trust, and use registered taxis or ride-hailing apps rather than unmarked cars. Avoid arriving in new places late at night, and trust your instincts if a situation feels wrong. Women-only train coaches and metro carriages are available on some services.",
  },
  {
    title: "In an Emergency",
    bullets: [
      "India's national emergency number is 112, which connects to police, fire and ambulance services.",
      "India's Ministry of Tourism runs a multilingual tourist helpline on 1363. Confirm the number before you travel.",
      "Save your embassy's emergency contact and your insurer's 24-hour number in your phone.",
      "For serious illness, go to a reputable private hospital in major cities and contact your insurer as soon as you can.",
    ],
  },
];

const preTravel = [
  ["Vaccination consultation", "Speak with a travel health professional about your itinerary and health history", "4 to 6 weeks before travel"],
  ["Travel insurance", "Confirm medical and evacuation cover, and any adventure activities", "Before departure"],
  ["Medication", "Carry enough prescribed medication in original packaging, with a prescription copy", "Before departure"],
  ["Documents", "Keep digital and physical copies of passport, visa and insurance", "Before departure"],
  ["Emergency contacts", "Save local numbers, your embassy and your insurer's 24-hour line", "Before departure"],
];

const risks = [
  ["Traveller's diarrhoea", "Loose stools from contaminated food or water", "Safe water, hot freshly cooked food, handwashing, oral rehydration solutions", "Blood in stool, high fever, severe pain, dehydration, or no improvement after a couple of days"],
  ["Food poisoning", "Illness from contaminated or badly stored food", "Avoid food left out, choose busy places, take care with seafood and dairy", "Persistent vomiting, fever, severe cramps or dehydration"],
  ["Dehydration", "Fluid loss from heat, sweating or illness", "Drink regularly, rest in shade, use rehydration salts when ill", "Dizziness, confusion, very dark urine or fainting"],
  ["Heat exhaustion and heatstroke", "Overheating in high temperatures and humidity", "Avoid midday sun, light clothing, hat, water, rest breaks", "Hot dry skin, confusion or collapse. Heatstroke is an emergency"],
  ["Dengue", "Mosquito-borne virus, mosquitoes bite in daytime", "Repellent, long sleeves, screened or air-conditioned rooms", "Sudden high fever with severe headache, body pain, rash, bleeding or severe abdominal pain"],
  ["Malaria", "Mosquito-borne parasite, risk varies by region and season", "Bite prevention plus any preventive medicine your clinician advises", "Fever or flu-like symptoms during or after travel, even weeks later"],
  ["Chikungunya", "Mosquito-borne virus causing fever and joint pain", "Same bite prevention as dengue", "Fever with severe joint pain that persists"],
  ["Respiratory infections", "Spread in crowded places and in poor air", "Hand hygiene, up-to-date vaccines, mask in bad air if suitable", "Breathing difficulty, chest pain, high or lasting fever"],
  ["Air pollution", "Poor air quality in some cities, mostly in winter", "Check AQI, limit outdoor exertion, consider a well-fitting mask", "Wheezing, chest tightness or worsening of an existing condition"],
  ["Altitude sickness", "Illness from going high too quickly", "Ascend gradually, rest, hydrate, avoid heavy exertion at first", "Worsening headache, vomiting, confusion, unusual breathlessness. Descend and seek help"],
  ["Rabies exposure", "Bites or scratches from dogs, monkeys and other animals", "Keep your distance, never feed animals", "Any bite or scratch: wash for at least 15 minutes and get urgent medical advice"],
];

const seasons = [
  ["Summer (April to June)", "Extreme heat, dehydration, heat exhaustion, strong sun", "Sightsee early and late, drink water, wear a hat and sun protection, rest in the shade"],
  ["Monsoon (June to September)", "Heavy rain, flooding, slippery roads, mosquitoes, travel disruption, river and waterfall hazards", "Leave buffer days, avoid swollen rivers and waterfalls, use repellent, follow local warnings"],
  ["Winter (October to February)", "Cold in the north, fog delays, poor air quality in some cities", "Warm layers, extra time for flights and trains, check AQI, respiratory precautions"],
];

const emergency = [
  ["National emergency", "112", "Single emergency number for police, fire and ambulance"],
  ["Tourist helpline", "1363", "Ministry of Tourism. Verify current availability before you travel"],
  ["Police, ambulance, fire", "Local numbers", "Some states and cities publish separate local numbers. Ask your hotel"],
  ["Embassy or consulate", "Save before you go", "Specific to your nationality and the nearest mission"],
  ["Insurance assistance", "24-hour number on your policy", "Call early for guidance on hospitals and claims"],
  ["Hospital", "Ask your hotel", "Specific to the city you are in"],
];

const destinations = [
  ["Delhi", "Poor air quality can occur in winter, so check AQI. Use prepaid taxis or apps from the airport, and watch for touts around tourist areas and stations. Summers are very hot."],
  ["Agra", "Touts and unofficial guides near the Taj Mahal are common, so book through reputable providers. Summer heat is intense, and winter fog can affect travel."],
  ["Jaipur", "Hot summers. Agree prices for rickshaws and check shop detours. Sightsee early or late in the day."],
  ["Varanasi", "Crowded lanes and ghats. Take care with food and water, watch your belongings, and respect rituals and photography rules."],
  ["Mumbai", "Monsoon flooding can disrupt travel. Crowded trains and markets call for care with valuables. Use app taxis or the prepaid desk."],
  ["Goa", "Check sea conditions and lifeguard guidance, and avoid swimming in unsafe waters, especially in the monsoon. Be careful with motorbike rentals and night riding."],
  ["Kerala", "Mosquito protection matters in the monsoon. Boat operators should be licensed, and hill roads can be slow in heavy rain."],
  ["Rajasthan", "Very hot summers, with desert nights that can be cold in winter. Hydrate and plan long road days with breaks."],
  ["Kashmir", "Check current official travel advice and local conditions before and during your trip, and book through reputable operators."],
  ["Ladakh", "High altitude, so acclimatise. Roads and passes can close by season, and mobile coverage can be limited. Ask about permits that apply to you."],
  ["Himachal Pradesh", "Monsoon landslides and road closures are possible. Allow spare days, use licensed trekking operators and watch weather forecasts."],
  ["Andaman Islands", "Weather can cancel ferries and flights. Check sea conditions, use licensed water-sports operators and keep buffer days."],
];

const faqs = [
  ["Is India safe for international tourists?", "Millions of people visit India each year and most trips go smoothly. Common problems are minor, such as stomach upsets, scams and traffic. Safety varies by place and season, so check your government's current travel advice and take sensible precautions."],
  ["What vaccinations should I consider before travelling to India?", "The CDC recommends typhoid vaccination for most travellers, and others such as hepatitis A, hepatitis B, rabies and Japanese encephalitis may be advised depending on your itinerary. Keep routine vaccines current, and see a travel clinic four to six weeks before you go."],
  ["Is tap water safe to drink in India?", "Tap water is generally not recommended for visitors. Drink sealed bottled water, or water that has been filtered or boiled, and avoid ice of unknown origin. Use safe water for brushing your teeth if your stomach is sensitive."],
  ["How can I avoid food poisoning in India?", "Choose busy places where food is cooked fresh and served hot, wash your hands, and be careful with raw salads, pre-cut fruit, seafood and unpasteurised dairy. Carry oral rehydration salts, and see a doctor if symptoms are severe or last."],
  ["Do I need malaria tablets for India?", "It depends on where and when you travel. The CDC advises preventive medicine for certain areas, while other areas have lower risk. A travel health professional can advise based on your route, health and the season. Bite prevention matters everywhere."],
  ["Is street food safe to eat in India?", "It can be enjoyed more safely by choosing busy stalls with fast turnover, food cooked in front of you and served hot, and avoiding items left out, raw chutneys and ice. Ease in gradually and keep your hands clean."],
  ["Is India safe for solo women travellers?", "Many women travel solo in India without problems, and experiences vary by place. Choose well-reviewed stays, use registered transport, share your plans, dress in line with local norms and avoid isolated areas late at night. Trust your instincts."],
  ["What should I do if I get sick in India?", "For minor illness, rest, drink fluids and visit a pharmacy or clinic. For serious symptoms, go to a hospital or call 112, and contact your insurer early. Keep your prescriptions and insurance details to hand."],
  ["What is the emergency number in India?", "112 is India's national emergency number for police, fire and ambulance. The Ministry of Tourism also lists a tourist helpline on 1363, which you should verify before travelling. Save your embassy and insurer numbers too."],
  ["Do I need travel insurance for India?", "It is strongly recommended. Look for medical and evacuation cover, and check it covers activities like trekking or water sports. Read how claims work and whether cashless treatment applies, and carry the insurer's 24-hour number."],
  ["How can I avoid tourist scams in India?", "Book through verified platforms, agree prices before you travel, use prepaid taxis or apps, and check any hotel closure claims yourself. Be wary of unsolicited helpers and keep card details and OTPs private. Most people you meet are honest."],
  ["Is Delhi safe to visit during winter?", "Winter is a popular time to visit, but air quality can be poor and fog can delay flights and trains. Check AQI daily, limit outdoor exertion on bad days, and talk to your doctor if you have a heart or lung condition."],
  ["How can I prevent altitude sickness in Ladakh?", "Ascend gradually, rest on arrival, drink water, avoid alcohol and strenuous activity at first, and speak to a doctor before you go. If headache, nausea or breathlessness worsen, do not go higher and descend with medical help."],
  ["Is it safe to travel in India during the monsoon?", "Many people travel then, but rain brings flooding, landslides, slippery roads and more mosquitoes. Allow buffer days, avoid swollen rivers and waterfalls, use repellent and follow local warnings. Some regions are more affected than others."],
  ["What should I do if a dog or monkey bites me in India?", "Wash the wound with soap and water for at least 15 minutes, then get urgent medical advice about rabies treatment. Do not wait for symptoms. Tell your insurer, and keep a note of the date and the animal."],
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "India Travel Safety Tips: Health, Food, Scams & Emergency Guide",
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

export default function IndiaSafetyAndHealthPage() {
  return (
    <GuideLayout tag="Travel Smart & Stay Safe" title="India Travel Safety Tips: Essential Health & Safety Guide" image="/images/india/guides/safety-and-health.jpg"
      cta={
        <GuideCta
          title="Explore India with confidence"
          text="Discover India with greater confidence through thoughtfully planned itineraries, vetted stays and trusted transport arrangements. Whether you are exploring Rajasthan, the Kerala backwaters, the Himalayas or India's cultural heritage, our team can help you organise a smoother trip."
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
          Millions of travellers visit India every year and come home with great memories. These India
          travel safety tips help you prepare for what visitors most often run into: unfamiliar food
          and water, heat, monsoon rain, air quality, busy roads and the occasional scam. Conditions
          vary a lot between cities, seasons and regions, so a little preparation goes a long way.
        </p>
        <p>
          This guide covers the basics before you leave, food and water, common health risks, mosquito
          protection, seasonal and air-quality advice, altitude, scams, transport, solo and inclusive
          travel, healthcare, emergencies and destination-specific tips. The aim is to keep you
          informed and reassured, not worried.
        </p>
      </div>

      <p className="bg-orange-50">
        This guide is general, educational information, not medical advice. Speak to a doctor or
        travel clinic about your own health and itinerary, and check official sources such as the
        CDC, the UK TravelHealthPro site and your government&apos;s travel advice before you go. Risks
        vary by destination, season and personal circumstances.
      </p>

      {sections.map((s, i) => (
        <GuideFeature
          key={s.title}
          reverse={i % 2 === 1}
          wide={!!s.bullets}
          title={s.title}
          image={`/images/india/safety/${slugify(s.title)}.jpg`}
        >
          {s.text && <p>{s.text}</p>}
          {s.bullets && (
            <ul className="list-disc space-y-2 pl-5">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </GuideFeature>
      ))}

      <h2>Pre-Travel Health Checklist</h2>
      <Table head={["Preparation", "Recommended action", "When to do it"]} rows={preTravel} />
      <ul className="list-disc space-y-2">
        <li>Pack a basic medical kit: personal medicines, oral rehydration salts, plasters, antiseptic, sun protection and insect repellent.</li>
        <li>Note any allergies and medical conditions in a document you can show a doctor.</li>
        <li>Check your government&apos;s current travel advice for India and the regions on your route.</li>
        <li>Need entry paperwork? See our <a href="/visa">visa and travel assistance</a> page.</li>
      </ul>

      <h2>Street Food Safety in India</h2>
      <ul className="list-disc space-y-2">
        <li>Pick busy stalls where locals queue and food turns over quickly.</li>
        <li>Choose items cooked in front of you and served piping hot, such as fried snacks, dosas and rotis.</li>
        <li>Be more cautious with raw chutneys, salads, cut fruit, ice and anything that has been sitting out.</li>
        <li>Look for vendors who handle money and food separately and use clean plates and water.</li>
        <li>Ease in. Start with cooked foods in your first days while your stomach adjusts.</li>
        <li>Take care with unpasteurised dairy and with seafood, especially inland or in the monsoon.</li>
      </ul>

      <h2>Common Health Risks for Travellers in India</h2>
      <p>
        This is educational information to help you recognise and prevent common problems. It does
        not diagnose anything or replace advice from a doctor.
      </p>
      <Table
        head={["Risk", "What it is and how you may be exposed", "Basic prevention", "Seek medical help if"]}
        rows={risks}
      />

      <h2>Mosquito and Insect Bite Protection</h2>
      <ul className="list-disc space-y-2">
        <li>Use a repellent suitable for your age and health. Your clinician or pharmacist can advise.</li>
        <li>Dengue mosquitoes bite during the day, so protect yourself in daytime too, not only at night.</li>
        <li>Use a mosquito net where rooms are not screened or air-conditioned, and avoid standing water around where you stay.</li>
        <li>Risk differs between regions and seasons. High mountain areas generally carry lower malaria risk than some lowland areas, but check your route with a clinician.</li>
        <li>See a doctor promptly if you develop fever, headache or severe aches during or after your trip.</li>
      </ul>

      <h2>Seasonal Safety Guide: Summer, Monsoon and Winter</h2>
      <Table head={["Season", "Main risks", "Recommended precautions"]} rows={seasons} />

      <h2>Air Quality and Environmental Safety</h2>
      <p>
        Air quality varies widely between cities and seasons. Northern cities, including Delhi, often
        have poorer air in winter.
      </p>
      <ul className="list-disc space-y-2">
        <li>Check the daily Air Quality Index (AQI) from official sources such as India&apos;s Central Pollution Control Board or a reliable monitoring service.</li>
        <li>On highly polluted days, limit outdoor exercise and long outdoor sightseeing.</li>
        <li>If you use a mask, choose a well-fitting N95-type respirator, since ordinary cloth or surgical masks give less protection from fine particles.</li>
        <li>Children and travellers with respiratory or heart conditions should take extra care and speak to a doctor before travel.</li>
        <li>Consider accommodation with air conditioning or indoor air filtration if air quality is a concern.</li>
      </ul>

      <h2>Altitude Safety in Ladakh, Spiti and the Himalayas</h2>
      <p>
        Leh, Spiti Valley and parts of Himachal Pradesh, Uttarakhand and Sikkim sit at high altitude.
        Altitude sickness happens when the body does not get time to adjust to thinner air, and going
        up too quickly raises the risk.
      </p>
      <ul className="list-disc space-y-2">
        <li>See a doctor before going high, especially if you have heart, lung or other health conditions.</li>
        <li>Ascend gradually, rest after arrival and avoid strenuous activity while you acclimatise.</li>
        <li>Drink water regularly, eat light meals and avoid alcohol at first.</li>
        <li>Warning signs include headache, nausea, dizziness and unusual breathlessness. Tell your group.</li>
        <li>Do not go higher if symptoms appear. Severe symptoms need urgent medical assessment and descent under appropriate guidance.</li>
        <li>Carry sun protection, warm layers and any medicine your doctor has advised, and keep insurance details and a local contact for evacuation.</li>
      </ul>

      <h2>Personal Safety and Common Tourist Scams in India</h2>
      <p>Most people you meet will be honest and helpful. These situations are worth recognising.</p>
      <ul className="list-disc space-y-2">
        <li><strong>Taxi overcharging.</strong> Confirm the fare or meter first, or use a ride-hailing app or prepaid booth.</li>
        <li><strong>Unofficial tour guides.</strong> Hire guides through your hotel, an official counter or a verified platform, and agree the price.</li>
        <li><strong>Fake hotel closure claims.</strong> Call the hotel yourself and decline detours.</li>
        <li><strong>Unwanted shopping detours.</strong> Say clearly that you want to go straight to your destination, and compare prices before buying.</li>
        <li><strong>Fake travel agents and ticket sellers.</strong> Use official booking channels such as IRCTC for trains, or an established company.</li>
        <li><strong>ATM and payment scams.</strong> Use ATMs inside banks, cover your PIN, and never share card details or OTPs.</li>
        <li><strong>Pickpocketing.</strong> Keep bags zipped and in front of you in crowds.</li>
        <li><strong>Unverified online accommodation.</strong> Book through verified platforms and confirm directly with the hotel.</li>
      </ul>
      <p>
        For transport-specific advice, see our guide to{" "}
        <a href="/India/guides/getting-around">getting around India</a>.
      </p>

      <h2>Transportation and Road Safety in India</h2>
      <ul className="list-disc space-y-2">
        <li><strong>Taxis and auto-rickshaws.</strong> Use reputable ride-hailing services where available, confirm fares or meter use, and check vehicle and driver details.</li>
        <li><strong>Trains.</strong> Book through authorised railway channels, secure your luggage, use designated platforms and be cautious with unsolicited assistance.</li>
        <li><strong>Buses.</strong> Choose reputable operators, check seat and luggage arrangements and avoid unsafe overcrowding.</li>
        <li><strong>Self-driving and motorbikes.</strong> Traffic is demanding and most visitors choose a driver. If you ride, check licence and insurance requirements, wear a helmet and avoid unfamiliar night driving.</li>
        <li><strong>Domestic flights.</strong> Keep essential medicines and documents in your cabin bag, and allow extra time during fog and weather disruptions.</li>
      </ul>

      <h2>Safety for Solo and Women Travellers</h2>
      <ul className="list-disc space-y-2">
        <li>Book verified transport and well-reviewed stays, and avoid isolated areas late at night.</li>
        <li>Share your plans with a trusted contact and keep emergency numbers easy to reach.</li>
        <li>If you get unwanted attention, move to a busy, well-lit place, make clear you are not interested, and ask staff or people nearby for help.</li>
        <li>Understand dress expectations at religious sites, and choose reputable group tours and guides.</li>
        <li>Safety varies by place, time and circumstance. Avoid assuming a whole city or community is safe or unsafe, and read recent traveller reviews.</li>
        <li>For all solo travellers: tell someone your itinerary, keep a charged phone and offline map, stay where there is 24-hour reception if possible, and never leave drinks or bags unattended.</li>
      </ul>

      <h2>LGBTQ+ and Inclusive Travel Considerations</h2>
      <ul className="list-disc space-y-2">
        <li>Laws and social attitudes can differ from what you are used to and vary between places. Check current official advice from your government and trusted LGBTQ+ travel sources.</li>
        <li>Choose welcoming, well-reviewed accommodation and book through reputable providers.</li>
        <li>Be mindful of personal privacy and discretion, particularly in smaller towns and at religious sites.</li>
        <li>Research your destinations and arrangements ahead of travel, and share plans with someone you trust.</li>
      </ul>

      <h2>Religious Places, Wildlife and Outdoor Adventure Safety</h2>
      <ul className="list-disc space-y-2">
        <li><strong>Religious places.</strong> Dress modestly, remove footwear where required, ask before photographing, respect rituals and follow local instructions.</li>
        <li><strong>Wildlife and safaris.</strong> Keep a safe distance, follow trained guides, never feed wild animals and stay inside designated vehicles where required.</li>
        <li><strong>Beaches and water activities.</strong> Check sea conditions, follow lifeguard instructions, avoid unsafe areas and learn about rip currents. If caught in one, swim parallel to the shore.</li>
        <li><strong>Trekking and adventure.</strong> Use licensed operators, check equipment, understand the weather, share your itinerary and carry essential supplies.</li>
      </ul>

      <h2>Medical Facilities and Healthcare in India</h2>
      <p>
        Healthcare quality and availability differ considerably between cities, towns and remote
        destinations.
      </p>
      <ul className="list-disc space-y-2">
        <li>Private hospitals in major cities generally offer the widest range of services. Not every hospital accepts every international insurer.</li>
        <li>Pharmacies are widespread and clinics can handle minor problems. Carry prescriptions and a list of your medicines and allergies.</li>
        <li>Contact your insurer early. Ask whether cashless treatment applies or whether you pay and claim later, and keep receipts.</li>
        <li>Ask your hotel to arrange an interpreter or a doctor who speaks your language.</li>
        <li>For remote regions, confirm medical evacuation arrangements before you travel.</li>
      </ul>

      <h2>Emergency Information</h2>
      <p>Save these before you travel, and verify them again close to departure.</p>
      <Table head={["Service", "Number or action", "Note"]} rows={emergency} />
      <ul className="list-disc space-y-2">
        <li><strong>Serious illness.</strong> Call 112 or go to the nearest suitable hospital, then contact your insurer.</li>
        <li><strong>Road accident.</strong> Move to safety if you can, call 112 and get medical help. Report to the police and your insurer.</li>
        <li><strong>Theft or lost passport.</strong> Report to local police, get a copy of the report, and contact your embassy and insurer.</li>
        <li><strong>Animal bite.</strong> Wash the wound for at least 15 minutes with soap and water and get urgent medical advice.</li>
        <li><strong>Natural disaster.</strong> Follow local authority instructions, contact your hotel or tour operator and tell your family you are safe.</li>
        <li><strong>Lost or missing travel companion.</strong> Contact local police and your embassy, and inform your tour operator and hotel.</li>
      </ul>

      <h2>India Travel Safety Checklist</h2>
      <ul className="list-disc space-y-2">
        <li><strong>Before departure:</strong> check travel insurance, consult a healthcare professional, save embassy contacts, prepare essential medication, keep copies of documents and research destination-specific risks.</li>
        <li><strong>During travel:</strong> drink safe water, practise food hygiene, protect against mosquitoes, monitor weather and AQI, use reputable transportation, keep valuables secure and follow local safety instructions.</li>
        <li><strong>In an emergency:</strong> contact emergency services, inform your travel companion, contact your insurer, reach a suitable medical facility and notify your embassy if required.</li>
      </ul>

      <h2>Safety Tips by Destination in India</h2>
      <p>
        Conditions change with the season and local situation, so check current advice for the places
        on your route.
      </p>
      <Table head={["Destination", "Safety and practical considerations"]} rows={destinations} />

      <GuideFaq faqs={faqs} />

      <h2>Keep Planning</h2>
      <p>
        Continue with our guides to the{" "}
        <a href="/India/guides/best-time-to-visit">best time to explore India</a>,{" "}
        <a href="/India/guides/festivals-and-events">festivals and events</a> and{" "}
        <a href="/India/guides/getting-around">travelling across India</a>. Browse our{" "}
        <a href="/India">India destination guides</a>, get help with{" "}
        <a href="/visa">visa and travel assistance</a>, plan a{" "}
        <a href="/customized-itineraries">customised itinerary</a> or{" "}
        <a href="/contact">contact our team</a>.
      </p>
    </GuideLayout>
  );
}
