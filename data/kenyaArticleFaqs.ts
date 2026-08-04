// FAQ Q&A pairs per article slug, used to generate FAQPage JSON-LD schema.
// Keep these in sync with the visible "Frequently Asked Questions" section
// rendered inside each article component in components/kenya-articles/.
export const kenyaArticleFaqs: Record<string, { question: string; answer: string }[]> = {
  "birdwatching-in-kenya-detail": [
    {
      question: "How many bird species does Kenya actually have?",
      answer: "Over 1,100 species have been recorded in Kenya, one of the highest totals of any country in Africa, thanks to its range of habitats and position along a major migration route.",
    },
    {
      question: "Do I need to be a dedicated birder to enjoy birdwatching in Kenya?",
      answer: "Not at all — a normal safari game drive will pass dozens of species without any extra effort. Bringing binoculars and a bit of curiosity is enough to notice far more than most first-time visitors expect.",
    },
    {
      question: "What's the single best bird-watching region in Kenya?",
      answer: "It depends on what you want to see — the Rift Valley lakes for waterbirds, Kakamega Forest for rainforest species, or the Mara and Amboseli for raptors and savanna icons. Most itineraries end up covering more than one.",
    },
    {
      question: "When is the best time of year for birdwatching in Kenya?",
      answer: "November through April, when Palearctic migrants from Europe and Asia add significantly to the resident bird population already present year-round.",
    },
  ],

  "wildebeest-river-crossing-guide": [
    {
      question: "Can I guarantee I'll see a river crossing?",
      answer: "No — crossings depend on herd behavior and timing that can't be scheduled. Building multiple days near the river into your itinerary, rather than a single visit, gives the best realistic odds.",
    },
    {
      question: "How long does a crossing actually take?",
      answer: "The buildup can take hours, but the crossing itself is usually over within a few frantic minutes once the herd commits.",
    },
    {
      question: "What lens is best for photographing a river crossing?",
      answer: "A telephoto zoom in the 200\u2013400mm range offers the flexibility to react as distance to the action changes, which a single fixed focal length can't match.",
    },
    {
      question: "Are crocodiles a real danger during crossings?",
      answer: "Yes, to the wildebeest — crocodiles in the Mara River regularly take advantage of the chaos to make kills during crossings, which is part of what makes the spectacle so dramatic to witness.",
    },
  ],

  "kenyas-big-cats-compared": [
    {
      question: "What's the easiest way to tell a leopard from a cheetah?",
      answer: "Look at the spots and the build. Cheetahs have solid round spots, black \"tear line\" markings from the eyes to the mouth, and a slim, greyhound-like frame. Leopards have open rosette-shaped spots and a stockier, more muscular build.",
    },
    {
      question: "Which is more dangerous to encounter: a lion, leopard, or cheetah?",
      answer: "Lions, by a wide margin, given their size, strength, and social hunting behavior. Leopards can be dangerous if surprised or cornered. Cheetahs are generally the least aggressive toward humans of the three.",
    },
    {
      question: "Why do leopards drag their kills into trees?",
      answer: "To protect the kill from lions and hyenas, which can't climb well enough to follow. It's one of the clearest field signs of a leopard's presence, even without seeing the cat itself.",
    },
    {
      question: "Which of the three is easiest to spot on safari?",
      answer: "Lions, generally — they're social, active at dawn and dusk when game drives run, and rest in the open rather than hiding in cover the way leopards do.",
    },
  ],

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
  "anti-poaching-efforts-in-kenyas-parks": [
    {
      question: "How much has poaching in Kenya actually decreased?",
      answer: "Elephant and rhino poaching have fallen sharply since the crisis peak of the early-to-mid 2010s, driven by expanded ranger capacity, tracking technology, tougher penalties, and community reporting networks.",
    },
    {
      question: "Who carries out anti-poaching work in Kenya's parks?",
      answer: "Kenya Wildlife Service rangers alongside conservancy-employed local scouts, sniffer dog units at borders and airports, and community informant networks that report suspicious activity.",
    },
    {
      question: "Why did community involvement make such a difference?",
      answer: "Paying local scouts and sharing conservancy revenue gives nearby communities a direct financial stake in wildlife staying alive, turning former sources of poachers into an extension of the protection effort.",
    },
    {
      question: "Is poaching still a threat to Kenya's wildlife today?",
      answer: "Yes — numbers are down significantly, but ranger units and community programs depend on sustained funding, and demand for ivory and horn can shift rather than disappear entirely.",
    },
  ],
  "rhino-conservation-the-fight-to-save-a-species": [
    {
      question: "Where is the best place to see rhinos in Kenya?",
      answer: "Ol Pejeta Conservancy and Lake Nakuru National Park hold the majority of Kenya's black and white rhino population and are the most reliable places for sightings.",
    },
    {
      question: "How many northern white rhinos are left in the world?",
      answer: "Only two — Najin and Fatu, a mother-and-daughter pair living under armed guard at Ol Pejeta Conservancy, both female, meaning natural reproduction is no longer possible.",
    },
    {
      question: "What's the difference between black and white rhinos?",
      answer: "Black rhino have a pointed lip for browsing shrubs and are more solitary and skittish; white rhino have a flat lip for grazing grass and are typically calmer and seen in small groups.",
    },
    {
      question: "Does dehorning hurt the rhino?",
      answer: "No — it's done under sedation and the horn is made of keratin, similar to a fingernail, so it regrows over time without lasting harm to the animal.",
    },
  ],
  "the-maasai-guardians-of-the-mara": [
    {
      question: "Were the Maasai forced off land to create the Mara Reserve?",
      answer: "Yes — when the reserve was formally established, Maasai communities that had grazed cattle across that land for generations were excluded from settling or grazing inside its boundaries.",
    },
    {
      question: "How are Maasai communities involved in conservation today?",
      answer: "Through the conservancy model, Maasai landowners lease land for wildlife use, often hold ownership stakes and board seats in conservancy management, and work widely as guides, trackers, and rangers.",
    },
    {
      question: "Is visiting a Maasai village worth doing?",
      answer: "It can be, especially through the conservancy a guest is staying on, though it's worth asking how the visit is organized and where the payment goes before booking one.",
    },
    {
      question: "What does the adumu jumping dance mean?",
      answer: "It's a traditional Maasai dance historically performed by young warriors, where jumping height is a display of strength and skill, and it's a common part of a guided village visit.",
    },
  ],
  "climate-change-and-the-great-migration": [
    {
      question: "Is climate change actually affecting the Great Migration?",
      answer: "Yes — researchers tracking rainfall and herd movement have documented more erratic rainy seasons, which directly affects when herds arrive in the Mara and how predictable river crossings are.",
    },
    {
      question: "Why does the migration follow rainfall instead of a fixed schedule?",
      answer: "Wildebeest and zebra follow fresh grass growth, which is triggered by rain, so the herds' movement across the Serengeti-Mara ecosystem tracks where and when rain has recently fallen rather than a calendar date.",
    },
    {
      question: "Can you still reliably see a river crossing?",
      answer: "Generally yes within the broader July-to-October window, but it's worth building flexibility into a trip and choosing operators who track herd position in real time rather than relying on fixed calendar dates.",
    },
    {
      question: "How do researchers track the migration?",
      answer: "Through GPS collars fitted on a sample of wildebeest combined with satellite data on rainfall and vegetation growth across the ecosystem.",
    },
  ],
  "basic-swahili-phrases-and-kenyan-etiquette": [
    {
      question: "Do I need to speak Swahili to travel in Kenya?",
      answer: "No — English is an official language and widely spoken in tourism, but even a few Swahili greetings are genuinely appreciated and make interactions warmer.",
    },
    {
      question: "What's the easiest Swahili phrase to start with?",
      answer: "\"Jambo\" for hello or \"Asante\" for thank you are the simplest and most universally understood, and both get a warm reaction from locals.",
    },
    {
      question: "How much should I tip guides and lodge staff?",
      answer: "Amounts vary by lodge and region, and most camps post their own suggested tipping guide at check-in, which is the most reliable reference to follow.",
    },
    {
      question: "Is it okay to photograph local people in Kenya?",
      answer: "It's best to ask permission first — a quick request is a normal courtesy, and taking a photo without asking can come across as intrusive rather than friendly.",
    },
  ],
}
