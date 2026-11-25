import type { Metadata } from "next";
import GuideLayout from "@/components/india/guides/GuideLayout";
import GuideCta from "@/components/india/guides/GuideCta";
import GuideFaq from "@/components/india/guides/GuideFaq";
import GuideFeature from "@/components/india/guides/GuideFeature";
import { slugify } from "@/components/india/guides/slugify";
import { CTA_DESTINATIONS, CTA_PRIMARY, CTA_SECONDARY } from "@/data/india/guideCta";

const TITLE = "Indian Festivals 2027: Complete Calendar, Dates & Travel Guide | Get Trip Go";
const DESCRIPTION =
  "Plan around Indian festivals in 2027: month-by-month calendar, checked dates, Holi, Diwali, Durga Puja, Kumbh Mela, tips and festival tour ideas.";
const URL = "https://gettripgo.com/India/guides/festivals-and-events";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "Indian festivals", "festivals in India", "famous festivals of India", "Indian festival calendar",
    "Indian cultural festivals", "Indian festivals 2027", "festivals in India by month",
    "best places to celebrate Holi", "Diwali celebrations in India", "India cultural tours",
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Get Trip Go",
    type: "article",
    images: [{ url: "/images/india/guides/festivals.jpg", alt: "Colour powder thrown during Holi celebrations in India" }],
  },
};

const LINKS = {
  bestTime: "/India/guides/best-time-to-visit",
  around: "/India/guides/getting-around",
  safety: "/India/guides/safety-and-health",
  custom: "/customized-itineraries",
  hub: "/India",
};

const calendar = [
  ["January", "Pongal and Makar Sankranti", "Tamil Nadu; across India", "Solar, fixed: mid-January", "Harvest feasts, kolam art, kites"],
  ["January", "International Kite Festival", "Ahmedabad, Gujarat", "Around 14 January; set yearly", "Kite-filled skies, street food"],
  ["January", "Republic Day parade", "New Delhi", "Fixed: 26 January", "Military and cultural floats"],
  ["January", "Jaipur Literature Festival", "Jaipur, Rajasthan", "Usually late January; set yearly", "Authors, talks, music"],
  ["February", "Jaisalmer Desert Festival", "Jaisalmer, Rajasthan", "January or February; dates vary", "Camel events, folk music"],
  ["February", "Surajkund Crafts Mela", "Faridabad, Haryana", "Usually early to mid-February", "Handicrafts from many states"],
  ["February", "Losar", "Ladakh, Sikkim, Arunachal", "Tibetan calendar: Feb or March", "Monastery rituals, masked dances"],
  ["February", "Khajuraho Dance Festival", "Khajuraho, Madhya Pradesh", "Usually February; dates vary", "Classical dance beside temples"],
  ["March", "Holi", "Mathura, Vrindavan, Jaipur, Delhi", "Lunar: March (22 March 2027)", "Colour powder, music, sweets"],
  ["March", "International Yoga Festival", "Rishikesh, Uttarakhand", "Usually early March", "Yoga by the Ganga"],
  ["March", "Chapchar Kut", "Mizoram", "Usually early March", "Dance, music, spring feasts"],
  ["April", "Baisakhi", "Punjab; Amritsar", "Solar, fixed: about 13 to 14 April", "Bhangra, Golden Temple"],
  ["April", "Bihu", "Assam", "Solar, fixed: mid-April", "Bihu dance, pitha rice cakes"],
  ["April", "Vishu", "Kerala", "Solar, fixed: mid-April", "Sadya feast, fireworks"],
  ["April", "Mahavir Jayanti", "Jain centres across India", "Lunar: March or April", "Temple processions"],
  ["April", "Thrissur Pooram", "Thrissur, Kerala", "Lunar: April or May; set yearly", "Elephants, drums, fireworks"],
  ["May", "Buddha Purnima", "Bodh Gaya; Sarnath", "Lunar: April or May", "Prayers, lamps, pilgrimage"],
  ["May", "Mount Abu Summer Festival", "Mount Abu, Rajasthan", "Usually May or June; dates vary", "Folk music, boat races"],
  ["May", "Moatsu Festival", "Nagaland (Ao Naga)", "Usually 1 to 3 May", "Songs, dances, feasts"],
  ["June", "Rath Yatra", "Puri, Odisha", "Lunar: June or July (5 July 2027)", "Giant chariots"],
  ["June", "Hemis Festival", "Hemis Monastery, Ladakh", "Tibetan calendar: June or July", "Masked cham dances"],
  ["June", "Ambubachi Mela", "Kamakhya Temple, Guwahati", "Usually around 22 to 26 June", "Pilgrim gathering"],
  ["July", "Guru Purnima", "Across India", "Lunar: July (18 July 2027)", "Ashram gatherings"],
  ["July", "Bonalu", "Hyderabad, Telangana", "Ashada month: July to August", "Goddess offerings, processions"],
  ["August", "Independence Day", "Across India; Delhi", "Fixed: 15 August", "Flag hoisting, kite flying"],
  ["August", "Teej", "Jaipur, Rajasthan", "Lunar: Hariyali Teej 4 Aug 2027", "Swings, processions"],
  ["August", "Raksha Bandhan", "Across India", "Lunar: 17 August 2027", "Sibling rituals, sweets"],
  ["August", "Janmashtami", "Mathura, Vrindavan, Mumbai", "Lunar: 24 to 25 August 2027", "Dahi Handi, midnight prayers"],
  ["Aug to Sep", "Onam", "Kerala", "Lunar-solar: 12 September 2027", "Flower carpets, boat races"],
  ["September", "Ganesh Chaturthi", "Mumbai, Pune", "Lunar: 4 September 2027", "Idol processions"],
  ["September", "Nuakhai", "Western Odisha", "Lunar: August or September", "New-harvest rites, folk dance"],
  ["September", "Ziro Festival of Music", "Ziro, Arunachal Pradesh", "Usually late September; check organisers", "Outdoor music festival"],
  ["October", "Navratri and Garba", "Gujarat", "Lunar: nine nights before Dussehra", "Garba and dandiya"],
  ["October", "Durga Puja", "Kolkata", "Lunar: begins 5 October 2027", "Pandals, art, processions"],
  ["October", "Dussehra and Mysuru Dasara", "Mysuru; Kullu; Delhi", "Lunar: 9 October 2027", "Palace procession, effigy burning"],
  ["October", "Marwar Festival", "Jodhpur, Rajasthan", "Around Sharad Purnima; dates vary", "Folk music, performances"],
  ["Oct to Nov", "Diwali", "Across India; Jaipur, Varanasi", "Lunar: 29 October 2027", "Lamps, rangoli, fireworks"],
  ["November", "Pushkar Camel Fair", "Pushkar, Rajasthan", "Lunar: around Kartik Purnima", "Camel trading, lake bathing"],
  ["November", "Dev Deepawali", "Varanasi", "Lunar: Kartik Purnima (13 Nov 2027)", "Ghats lit with lamps"],
  ["November", "Chhath Puja", "Bihar, Jharkhand, eastern UP", "Lunar: about six days after Diwali", "Dawn and dusk river rituals"],
  ["Nov to Mar", "Rann Utsav", "Dhordo, Kutch", "Season set yearly (2026-27: 1 Nov to 7 Mar)", "Tent city, White Rann"],
  ["December", "Hornbill Festival", "Kisama, Nagaland", "Annual: 1 to 10 December", "Naga tribal dance and food"],
  ["December", "Christmas", "Goa, Kerala, Kolkata, Mumbai", "Fixed: 25 December", "Midnight Mass, lights"],
];

const profiles = [
  ["Holi: Festival of Colours", "Mathura, Vrindavan, Jaipur, Delhi", "March", "Holi welcomes spring and recalls the triumph of good over evil and the playful love of Krishna and Radha. Bonfires burn on the eve (Holika Dahan), then streets fill with coloured powder, music and gujiya sweets. Mathura and Vrindavan celebrate for several days.", "Wear old clothes, seal your phone in a bag, oil your hair and skin first, and stay with a group."],
  ["Diwali: Festival of Lights", "Across India; Jaipur, Varanasi, Amritsar", "Oct to Nov", "Diwali celebrates light over darkness and is linked to Rama's return to Ayodhya and the worship of Lakshmi. Homes glow with oil lamps and rangoli, markets sell sweets, and the five-day festival peaks on Lakshmi Puja night.", "Expect fireworks, business closures and busy transport. Book months ahead."],
  ["Durga Puja: Kolkata's Grand Celebration", "Kolkata, West Bengal", "Sep to Oct", "Durga Puja honours the goddess Durga's victory over the buffalo demon Mahishasura. Artists build themed pandals (temporary shrines), and Kolkata goes pandal-hopping until late at night before idols are immersed in the river on the final day.", "Visit pandals in the morning or early evening to avoid the biggest crowds."],
  ["Ganesh Chaturthi: Mumbai and Pune", "Mumbai, Pune", "Aug to Sep", "The festival celebrates the birth of Ganesha, remover of obstacles. Clay idols stand in homes and street pandals for up to ten days, then are carried to the sea or rivers in drum-filled processions. Modak sweets are the classic treat.", "Immersion days are the busiest. Allow extra travel time and watch from a safe spot."],
  ["Navratri and Garba: Gujarat", "Ahmedabad, Vadodara", "Sep to Oct", "Nine nights honour the goddess. In Gujarat they are famous for garba and dandiya circle dances in colourful costume. Visitors can join community dance grounds, and many locals fast during the day.", "Wear comfortable clothes you can dance in. Ticketed venues can sell out."],
  ["Pushkar Camel Fair: Rajasthan", "Pushkar, Rajasthan", "November", "A livestock fair and a pilgrimage in one. Traders gather camels and horses by the sacred lake, with races, folk music and turban contests, while pilgrims bathe on Kartik Purnima. Pushkar is a holy town that is strictly vegetarian and largely alcohol-free.", "Book early. Tent camps and good rooms fill months ahead."],
  ["Onam: Kerala's Harvest Festival", "Kochi, Alleppey, Kerala", "Aug to Sep", "Onam welcomes the legendary king Mahabali. Homes lay flower carpets (pookalam), families share the sadya feast on banana leaves, and the backwaters host snake boat races around the season.", "Boat race days are crowded. Book hotels and viewing spots early."],
  ["Pongal: Tamil Nadu", "Tamil Nadu; Madurai, Thanjavur", "Mid-January", "This four-day harvest festival thanks the sun and farm animals. Families cook sweet pongal rice in new pots until it boils over, and doorways are decorated with kolam patterns.", "Pair it with Tamil Nadu's temple towns."],
  ["Rath Yatra: Puri, Odisha", "Puri, Odisha", "June to July", "Lord Jagannath, Balabhadra and Subhadra ride in giant wooden chariots from the Jagannath Temple, pulled by thousands of devotees along Grand Road. The English word juggernaut comes from this festival.", "Arrive early and expect dense crowds. The temple itself is closed to non-Hindus."],
  ["Kumbh Mela: India's Sacred Gathering", "Prayagraj, Haridwar, Nashik, Ujjain", "Rotating cycle", "One of the largest gatherings of people on earth, held in turn at four sacred river sites. Pilgrims bathe on auspicious days after processions of ascetics. The Nashik-Trimbakeshwar Simhastha is under way, with major bathing days announced for 2027.", "Book far ahead, travel light and follow official crowd guidance."],
  ["Hornbill Festival: Nagaland", "Kisama, near Kohima", "1 to 10 December", "Known as the festival of festivals, it brings Naga tribes together for traditional dance, music, crafts, sports and food at the Kisama Heritage Village.", "Book Kohima stays early and check current permit rules."],
  ["Baisakhi: Punjab", "Amritsar, Punjab", "13 to 14 April", "Baisakhi marks the harvest and the founding of the Khalsa in 1699. Gurdwaras hold processions, the Golden Temple glows, and villages hold bhangra and fairs.", "Cover your head, remove shoes at gurdwaras and accept langar meals respectfully."],
  ["Bihu: Assam", "Assam; Guwahati, Majuli", "Mid-April", "Rongali Bihu is the Assamese New Year and spring festival. Dancers in red and white perform Bihu dance to the dhol and pepa horn, and families share pitha rice cakes.", "Combine it with Kaziranga National Park, open in the dry season."],
  ["Christmas: Goa and Kerala", "Goa, Kochi", "25 December", "Midnight Mass in old churches, star lanterns, cribs and plum cake make Goa and Kerala especially festive. The period overlaps peak tourist season.", "Book early, as late December has the highest prices."],
  ["Hemis Festival: Ladakh", "Hemis Monastery, Ladakh", "June to July", "Monks perform masked cham dances in the monastery courtyard in honour of Guru Padmasambhava. Dates follow the Tibetan lunar calendar.", "Spend a couple of days acclimatising in Leh first."],
];

const stays = [
  ["Mathura and Vrindavan", "Holi", "3 to 5 days", "Agra, Delhi"],
  ["Varanasi", "Dev Deepawali, Ganga Aarti", "2 to 3 days", "Sarnath"],
  ["Jaipur", "Diwali, Teej", "3 to 4 days", "Amber Fort, Pushkar"],
  ["Pushkar", "Pushkar Camel Fair", "3 to 4 days", "Ajmer, Jaipur, Jodhpur"],
  ["Kolkata", "Durga Puja", "4 to 5 days", "Dakshineswar, Belur Math"],
  ["Ahmedabad", "Kite Festival, Navratri", "2 to 3 days", "Modhera, Rann of Kutch"],
  ["Mumbai", "Ganesh Chaturthi", "3 to 4 days", "Elephanta Caves, Pune"],
  ["Puri", "Rath Yatra", "2 to 3 days", "Konark, Bhubaneswar"],
  ["Kochi and Alleppey", "Onam", "4 to 6 days", "Kumarakom, Munnar"],
  ["Amritsar", "Baisakhi", "2 to 3 days", "Golden Temple, Wagah Border"],
  ["Kohima", "Hornbill Festival", "4 to 5 days", "Khonoma village, Dimapur"],
  ["Leh", "Hemis Festival", "3 to 5 days", "Hemis, Thiksey, Nubra Valley"],
];

const bestFor = [
  ["First-time visitors", "Holi in Jaipur, Diwali in Jaipur, Pushkar Camel Fair"],
  ["Cultural experiences", "Durga Puja in Kolkata, Rath Yatra in Puri, Hornbill Festival"],
  ["Photography", "Holi in Vrindavan, Pushkar, Dev Deepawali in Varanasi, Hemis"],
  ["Families", "Diwali, Pongal, Onam, Ganesh Chaturthi (with crowd care)"],
  ["Couples", "Dev Deepawali in Varanasi, Rann Utsav in Kutch, Diwali in Jaipur"],
  ["Festive food", "Onam sadya, Durga Puja street food, Baisakhi langar, Diwali sweets"],
  ["Music and dance", "Navratri garba, Khajuraho Dance Festival, Ziro Festival, Hornbill"],
  ["Unique experiences", "Nashik Kumbh Mela, Hemis, Rann Utsav, Hornbill Festival"],
];

const experiences = [
  "Festive feasts: sadya on banana leaves in Kerala, sweets and langar in Punjab, street food at Durga Puja.",
  "Music and dance: garba circles in Gujarat, Bihu in Assam, classical dance at Khajuraho.",
  "Traditional dress: sarees, turbans and tribal attire, often worn for the first day of a festival.",
  "Temple rituals: aarti, lamp-lighting and bathing ceremonies on holy rivers and lakes.",
  "Street processions: chariots, idols and drummers moving through whole towns.",
  "Crafts and markets: fairs such as Surajkund and Pushkar sell regional handicrafts.",
  "Boat races: snake boat races on the Kerala backwaters.",
  "Folk art and local fairs: village performances and community celebrations away from the big cities.",
];

const manners = [
  "Ask before photographing people, especially during rituals, and follow any signs about photography.",
  "Dress modestly with shoulders and knees covered at temples and gurdwaras, and remove shoes where asked.",
  "Do not step into ritual spaces, touch idols or cross a procession's path.",
  "Accept food and blessings graciously, and keep to the vegetarian and alcohol-free rules of holy towns.",
  "Follow the lead of local families and guides, and never treat a ceremony as a stage.",
];

const dates2027 = [
  ["Pongal", "About 14 to 17 January", "Solar calendar; stable"],
  ["Republic Day", "26 January", "Fixed"],
  ["Rann Utsav 2026-27", "Runs to 7 March 2027", "Announced by organisers; reconfirm on the official site"],
  ["Haridwar Ardh Kumbh", "6 and 8 March (reported bathing days)", "Approved by the Akhara Parishad; state announcement awaited. Tentative"],
  ["Holi", "22 March (some calendars list 23 March)", "Lunar; tentative until confirmed locally"],
  ["Rath Yatra, Puri", "5 July", "Lunar; most calendars agree, so confirm with the temple administration"],
  ["Hemis Festival", "June or July", "Tibetan calendar; tentative"],
  ["Nashik-Trimbakeshwar Kumbh", "Began 31 Oct 2026. Bathing days reported: 2 Aug, 31 Aug, 11 to 12 Sep 2027", "Announced by the Maharashtra government; check for updates"],
  ["Janmashtami", "24 to 25 August", "Lunar; varies by tradition"],
  ["Ganesh Chaturthi", "4 September", "Lunar"],
  ["Onam (Thiruvonam)", "12 September", "Lunar-solar"],
  ["Durga Puja and Dussehra", "Begins 5 October; Dussehra 9 October", "Lunar"],
  ["Diwali", "29 October (Lakshmi Puja)", "Lunar; some overseas calendars list 28 October"],
  ["Dev Deepawali, Varanasi", "13 November", "Lunar"],
  ["Pushkar Camel Fair", "Expected around 13 November (Kartik Purnima)", "Official dates not yet announced. Tentative"],
  ["Hornbill Festival", "1 to 10 December", "Held on these dates every year; confirm with Nagaland tourism"],
  ["Rann Utsav 2027-28", "Not yet announced", "Check the official site"],
];

const seasonLinks = [
  ["October to November", "Diwali, Dussehra, Navratri, Pushkar, Dev Deepawali", "Post-monsoon clarity and comfortable weather in most regions. Peak demand."],
  ["December to February", "Hornbill, Rann Utsav, Pongal, kite festivals, Republic Day", "Cool and dry in most of the country; cold in the north and mountains."],
  ["March", "Holi, Yoga Festival, Chapchar Kut", "Spring warmth; the north heats up through the month."],
  ["April to June", "Baisakhi, Bihu, Vishu, Thrissur Pooram, Hemis, Rath Yatra", "Hot plains, pleasant hills; Ladakh opens around June."],
  ["July to September", "Guru Purnima, Teej, Janmashtami, Onam, Ganesh Chaturthi", "Monsoon: green landscapes but heavy rain and possible delays."],
];

const trips = [
  ["Rajasthan Cultural Festival Tour", "Jaipur, Pushkar, Jodhpur, Udaipur", "Teej (Aug), Diwali (Oct to Nov), Pushkar Camel Fair (Nov), Marwar Festival (Oct)", "10 to 12 days"],
  ["North India Festival Experience", "Delhi, Mathura, Vrindavan, Agra, Varanasi", "Holi (March), Janmashtami (August), Diwali and Dev Deepawali (Oct to Nov)", "8 to 10 days"],
  ["South India Cultural Experience", "Chennai, Madurai, Thanjavur, Kochi, Alleppey", "Pongal (January), Onam (Aug to Sep), Christmas (December)", "10 to 12 days"],
];

const planning = [
  "Choose the festival first, then fit the route and season around it.",
  "Check the festival dates and your region's weather before booking flights.",
  "Book hotels and trains early, as rooms and berths vanish around major festivals.",
  "Allow buffer days for crowds, road closures and delays.",
  "Combine festivals with sightseeing, since most sit close to major heritage sites.",
  "Hire a local guide for ritual-heavy festivals such as Kumbh, Rath Yatra and Durga Puja.",
  "Keep regional routes short and avoid long transfers on festival days.",
];

const tips = [
  "Learn the basics of local customs and religious traditions before you go.",
  "Dress modestly at temples and religious places, and carry a scarf.",
  "Ask permission before taking photos, and respect restrictions.",
  "Stay with your group in crowds, keep valuables close and know your exit routes.",
  "Drink sealed bottled water and eat freshly cooked food.",
  "Plan transport ahead. Roads close for processions and trains fill up.",
  "Book flights, hotels and trains early for major festivals.",
  "Check official local schedules, since dates move every year.",
  "Hire a local guide where a festival has detailed rituals.",
];

const specific = [
  ["Holi", "Protect cameras and phones, wear old clothes, avoid colour near eyes and be cautious with bhang drinks."],
  ["Kumbh Mela", "Expect very large crowds. Book accommodation and travel far ahead, travel light, and follow official bathing-day advice."],
  ["Diwali", "Expect fireworks, noise and smoke, with some closures. Keep a mask handy and book transport early."],
  ["Large temple festivals", "Arrive early, keep to marked routes, and note that some temples restrict non-Hindus."],
];

const faqs = [
  ["What are the most famous festivals in India?", "Holi, Diwali, Durga Puja, Ganesh Chaturthi, Navratri, Onam and the Pushkar Camel Fair are among the best known, along with the Kumbh Mela and the Hornbill Festival."],
  ["Which is the biggest festival in India?", "Diwali is widely seen as the biggest and most widely celebrated festival. The Kumbh Mela is the largest gathering of people."],
  ["What is the best month to experience Indian festivals?", "October and November are the busiest, with Diwali, Dussehra and Pushkar. March has Holi, and December to February has winter fairs."],
  ["When is Holi celebrated in India?", "In March, following the lunar calendar. In 2027 most calendars list 22 March, so confirm locally before booking."],
  ["Where is the best place to celebrate Holi in India?", "Mathura and Vrindavan for the traditional, multi-day version. Jaipur and Delhi are easier for first-time visitors."],
  ["Which city is famous for Diwali celebrations?", "Jaipur, Varanasi and Amritsar are popular for their lights and atmosphere, though almost every city and town celebrates."],
  ["What is the best place to experience Durga Puja?", "Kolkata, famous for its artistic pandals and late-night pandal-hopping. Plan 4 to 5 days to see the city properly."],
  ["Can international tourists participate in Indian festivals?", "Yes. Most public festivals are welcoming. Follow local customs, ask before photographing, and note that some temples restrict non-Hindus."],
  ["Which Indian festivals are best for foreigners?", "Holi, Diwali, the Pushkar Camel Fair, Durga Puja and the Hornbill Festival are popular and offer plenty to see and join."],
  ["What is the best time to visit India for cultural experiences?", "October to March has the best weather and the most festivals. Spring, monsoon and summer have regional festivals too."],
  ["How far in advance should I book hotels for Indian festivals?", "For Pushkar, Diwali, Durga Puja and the Kumbh Mela, book several months ahead. Good rooms and tents sell out early."],
  ["Is it safe for tourists to attend large Indian festivals?", "Generally yes, with sensible care. Expect crowds, keep valuables close, stay with a group and follow local guidance."],
  ["What should I wear when attending Indian festivals?", "Modest, comfortable clothing, with shoes that are easy to remove at temples. For Holi, wear old clothes you do not mind staining."],
  ["Which festivals are celebrated in India during December?", "The Hornbill Festival in Nagaland, Rann Utsav in Kutch, Christmas in Goa, Kerala and Kolkata, and winter cultural events."],
  ["Can I combine festival celebrations with sightseeing tours?", "Yes. Most festival towns sit near major heritage sites. Add buffer days for crowds and plan fewer, longer stops."],
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "India's Festivals: A Guide to Celebrations & Events",
  description: DESCRIPTION,
  mainEntityOfPage: URL,
  publisher: { "@type": "Organization", name: "Get Trip Go" },
};

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200">
      <table className="w-full min-w-[640px] text-left text-sm leading-6">
        <thead className="bg-slate-100 text-slate-900">
          <tr>{head.map((h) => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {rows.map((r, n) => (
            <tr key={n} className="align-top">
              {r.map((c, i) => (
                <td key={i} className={`px-4 py-2.5 ${i === 0 ? "font-semibold text-slate-900" : ""}`}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function IndiaFestivalsPage() {
  return (
    <GuideLayout
      tag="Culture & Festivals"
      title="India's Festivals: A Guide to Celebrations & Events"
      image="/images/india/guides/festivals.jpg"
      cta={
        <GuideCta
          title="Experience the magic of India's festivals with Get Trip Go"
          text="Celebrate Holi in Mathura, see Diwali in Jaipur, witness Durga Puja in Kolkata or join the Hornbill Festival in Nagaland. Our travel experts plan the whole journey around your dates."
          destinations={CTA_DESTINATIONS}
          primary={{ label: "Plan Your India Festival Holiday", href: CTA_PRIMARY.href }}
          secondary={CTA_SECONDARY}
        />
      }
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />

      <div>
        <p>
          Festivals are the heartbeat of Indian culture. With dozens of religions, hundreds of
          languages and a calendar shaped by the seasons, harvests and the moon, India always has
          Indian festivals under way somewhere. Each region marks them in its own way, from the
          colour of Holi to the lamps of Diwali and the tribal dances of Nagaland.
        </p>
        <p>
          For international travellers, a festival is a chance to see living traditions rather than
          monuments: families cooking, streets filling with music and neighbours welcoming
          visitors. Planning your holiday around one can turn a good trip into a memorable one.
        </p>
      </div>

      <p className="bg-orange-50">
        Most Indian festivals follow the lunar calendar, so dates move every year. We separate
        fixed, lunar and variable dates below and mark anything not yet confirmed as tentative.
        Check official announcements before you book.
      </p>

      <h2>Indian Festival Calendar: Month by Month</h2>
      <Table head={["Month", "Festival", "Location", "When", "Main attraction"]} rows={calendar} />

      <h2>Major Indian Festivals Explained</h2>
      {profiles.map(([name, where, when, text, tip]) => (
        <GuideFeature
          key={name}
          label={when}
          title={name}
          meta={where}
          image={`/images/india/festivals/${slugify(name.split(":")[0])}.jpg`}
        >
          <p>{text}</p>
          <p><strong>Tip:</strong> {tip}</p>
        </GuideFeature>
      ))}

      <h2>Where to Experience Indian Festivals, and for How Long</h2>
      <p>
        Durations are suggested planning ideas, not requirements. Add days for sightseeing nearby.
      </p>
      <Table head={["Destination", "Festival", "Suggested stay", "Nearby attractions"]} rows={stays} />

      <h2>Best Indian Festivals for International Travellers</h2>
      <Table head={["Best for", "Recommended festivals"]} rows={bestFor} />

      <h2>Cultural Experiences During Festivals</h2>
      <ul className="list-disc space-y-1.5 rounded-2xl border border-slate-200 bg-slate-50 py-5 pl-10 pr-5">
        {experiences.map((e) => <li key={e}>{e}</li>)}
      </ul>
      <h3 className="text-xl font-semibold text-slate-900">Joining in respectfully</h3>
      <ul className="list-disc space-y-1.5 rounded-2xl border border-slate-200 bg-slate-50 py-5 pl-10 pr-5">
        {manners.map((m) => <li key={m}>{m}</li>)}
      </ul>

      <h2>Festival Dates for 2027</h2>
      <p>
        These dates were checked against several calendars and official announcements as of
        November 2026. Lunar dates can shift by a day depending on local almanacs, so treat
        anything marked tentative as provisional until organisers confirm it.
      </p>
      <Table head={["Event", "2027 date", "Status"]} rows={dates2027} />

      <h2>Best Time to Visit India for Festivals</h2>
      <Table head={["Period", "Festivals", "Conditions"]} rows={seasonLinks} />
      <p>
        See our full guide to the{" "}
        <a href={LINKS.bestTime}>best time to explore India</a> for weather by region.
      </p>

      <h2>How to Plan an India Festival Tour</h2>
      <ul className="list-disc space-y-1.5 rounded-2xl border border-slate-200 bg-slate-50 py-5 pl-10 pr-5">
        {planning.map((p) => <li key={p}>{p}</li>)}
      </ul>
      <h3 className="text-xl font-semibold text-slate-900">Three sample routes</h3>
      <Table head={["Trip", "Route", "Festivals that may fit", "Length"]} rows={trips} />
      <p>
        Wondering how to link the stops? Read our guide to{" "}
        <a href={LINKS.around}>travelling across India</a>, or ask for a{" "}
        <a href={LINKS.custom}>customised itinerary</a>.
      </p>

      <h2>Travel Tips for International Visitors</h2>
      <ul className="list-disc space-y-1.5 rounded-2xl border border-slate-200 bg-slate-50 py-5 pl-10 pr-5">
        {tips.map((t) => <li key={t}>{t}</li>)}
      </ul>
      <Table head={["Festival", "Specific advice"]} rows={specific} />
      <p>
        Before you travel, read our <a href={LINKS.safety}>health and safety tips for India</a>, and
        browse our <a href={LINKS.hub}>India destination guides</a>.
      </p>

      <GuideFaq faqs={faqs} />
    </GuideLayout>
  );
}
