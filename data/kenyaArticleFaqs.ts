// FAQ Q&A pairs per article slug, used to generate FAQPage JSON-LD schema.
// Keep these in sync with the visible "Frequently Asked Questions" section
// rendered inside each article component in components/kenya-articles/.
export const kenyaArticleFaqs: Record<string, { question: string; answer: string }[]> = {
  "cheetahs-of-the-mara": [
    {
      question: "Are cheetahs the same as leopards?",
      answer: "No — cheetahs have a slimmer build, simple round black spots, and distinctive black \"tear lines\" running from the eyes to the mouth. Leopards are stockier, more muscular, have rosette-shaped spots, and hunt mainly at night from trees or thick cover, rather than in open daylight chases.",
    },
    {
      question: "What's the best time of year to see cheetahs in the Mara?",
      answer: "Any time of year works, since cheetahs are resident rather than migratory. Early morning game drives give the best chance of seeing an actual hunt, regardless of season.",
    },
    {
      question: "How fast can a cheetah really run?",
      answer: "Cheetahs can reach speeds of 100–120 km/h, but only in short bursts of around 20–30 seconds — they rely on getting close before the chase begins rather than sustained speed over distance.",
    },
    {
      question: "Are Masai Mara cheetahs endangered?",
      answer: "Cheetahs are classified as Vulnerable rather than Endangered, but numbers are declining across their range due to habitat loss, making protected conservancy land increasingly important to their survival.",
    },
  ],
  "amboselis-last-super-tuskers": [
    {
      question: "What makes an elephant a \"super tusker\"?",
      answer: "An elephant is generally considered a super tusker when each tusk weighs 100 pounds (45 kg) or more — a threshold reached by only a small handful of bulls alive today, most of them decades old.",
    },
    {
      question: "How many super tuskers are left in the world?",
      answer: "Estimates generally put the number at around 25 to 30 worldwide, with the Amboseli ecosystem holding one of the largest known concentrations of any single region.",
    },
    {
      question: "When is Kilimanjaro most visible from Amboseli?",
      answer: "Early morning, before cloud builds up over the mountain later in the day. The dry months of June–October and January–February also offer the clearest overall visibility.",
    },
    {
      question: "Is Amboseli good for first-time safari visitors?",
      answer: "Yes — it's compact, close to Nairobi, and known for consistent, close-range elephant sightings, making it one of the more reliable parks for travelers on a shorter itinerary.",
    },
  ],
  "lake-nakurus-flamingo-spectacle": [
    {
      question: "Are the flamingos still at Lake Nakuru?",
      answer: "Yes, but in much smaller numbers than the famous million-bird flocks of past decades. Rising water levels since the early 2010s reduced the lake's algae, pushing many flamingos to nearby Lake Bogoria and Lake Elementaita instead.",
    },
    {
      question: "What's the best time of year to see flamingos at Lake Nakuru?",
      answer: "August through October has traditionally been the most reliable window, though numbers vary from year to year depending on rainfall and lake conditions.",
    },
    {
      question: "What's the difference between lesser and greater flamingos?",
      answer: "Lesser flamingos are smaller, deeper pink, and feed on algae; greater flamingos are larger, paler, and feed on crustaceans and larvae in the mud. Both species can be found at Lake Nakuru.",
    },
    {
      question: "Is Lake Nakuru worth visiting if the flamingos aren't there?",
      answer: "Yes — it's a rhino sanctuary with strong odds of seeing both black and white rhino, plus lion, leopard, and over 400 recorded bird species beyond the flamingos themselves.",
    },
  ],
  "night-safaris-what-happens-after-dark": [
    {
      question: "Can I do a night safari in the Masai Mara?",
      answer: "Not inside the main reserve itself, which closes to vehicles at sunset, but yes in several of the private conservancies bordering it, such as Naboisho and Mara North.",
    },
    {
      question: "What animals can I only see on a night safari?",
      answer: "Genets, civets, bush babies, and aardvarks are almost exclusively nocturnal, and leopards and hyenas are both far more active and visible after dark than by day.",
    },
    {
      question: "Does the spotlight harm or disturb the animals?",
      answer: "Reputable operators use red or infrared filtered light, which most nocturnal mammals see poorly, and guides limit how long the beam stays on any one animal, especially one that's actively hunting.",
    },
    {
      question: "Is a night safari worth adding to my itinerary?",
      answer: "Yes, as a supplement to daytime drives rather than a replacement — it shows a genuinely different side of the ecosystem, though sightings are less predictable.",
    },
  ],
  "community-conservancies-how-locals-protect-wildlife": [
    {
      question: "What is a community conservancy in Kenya?",
      answer: "Land leased from Maasai or other local landowners by tourism operators or conservation trusts, set aside for wildlife instead of grazing or farming, with landowners paid a fixed lease income in return.",
    },
    {
      question: "How do conservancies differ from national parks?",
      answer: "National parks are government-run and closed to the public after dark; conservancies are community- and privately-run, cap visitor numbers, and typically allow night drives, walking safaris, and off-road access that parks prohibit.",
    },
    {
      question: "Do local communities actually benefit financially?",
      answer: "Yes — landowning families receive monthly lease payments regardless of tourist volume, and conservancies employ local residents as guides, rangers, and staff, with some fees funding schools and other community infrastructure.",
    },
    {
      question: "Which conservancies are best to visit in Kenya?",
      answer: "The Mara conservancies — Naboisho, Olare Motorogi, and Mara North — are the best-known, alongside conservancies near Amboseli and in Laikipia further north.",
    },
  ],
}
