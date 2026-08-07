// FAQ Q&A pairs per article slug, used to generate FAQPage JSON-LD schema.
// Keep these in sync with the visible "Frequently Asked Questions" section
// rendered inside each article component in components/kenya-articles/.
export const kenyaArticleFaqs: Record<string, { question: string; answer: string }[]> = {
  "elsas-kopje-built-into-the-rock": [
    {
      question: "Is Elsa's Kopje named after a real lioness?",
      answer: "Yes -- Elsa, the lioness raised by George and Joy Adamson, whose story became the book and film Born Free. The lodge sits above the site of the Adamsons' original camp.",
    },
    {
      question: "How do I get to Elsa's Kopje?",
      answer: "Daily flights connect Nairobi's Wilson Airport to Mughwango Airstrip, five minutes from the lodge. By road, it's roughly a 4.5-hour drive from Nairobi.",
    },
    {
      question: "Is Meru National Park worth visiting over the classic Mara circuit?",
      answer: "It offers something different rather than better -- genuinely uncrowded game viewing, rare species like Grevy's zebra, and activities like walking safaris and night drives that busier parks often restrict.",
    },
    {
      question: "Is Elsa's Kopje accessible for travelers with mobility issues?",
      answer: "Worth confirming directly -- the lodge is built into rocky terrain with a number of steps between cottages and the main areas, a deliberate design choice to preserve the natural landscape.",
    },
  ],

  "giraffes-of-kenya": [
    {
      question: "How many giraffe species are in Kenya?",
      answer: "Three -- Masai, reticulated, and Rothschild's -- more than any other country in the world.",
    },
    {
      question: "What's the easiest way to tell giraffe species apart?",
      answer: "Check the legs: spots to the hooves means Masai, a clean net pattern with sharp white lines means reticulated, and bare, unmarked lower legs mean Rothschild's.",
    },
    {
      question: "Where can I see reticulated giraffes in Kenya?",
      answer: "Samburu, Buffalo Springs, Shaba, and the Laikipia conservancies in northern Kenya are the most reliable locations.",
    },
    {
      question: "Are all Kenyan giraffe species endangered?",
      answer: "Yes -- Masai, reticulated, and Rothschild's giraffes are all currently classified as Endangered, driven mainly by habitat loss and poaching.",
    },
  ],

  "rare-sightings-black-rhinos": [
    {
      question: "How many black rhinos live at Ol Pejeta?",
      answer: "Over 165, making it the largest black rhino sanctuary in East and Central Africa.",
    },
    {
      question: "Are there any northern white rhinos left in the world?",
      answer: "Only two, Najin and Fatu, both female, both living at Ol Pejeta Conservancy under round-the-clock protection.",
    },
    {
      question: "Can you get close to the rhinos at Ol Pejeta?",
      answer: "Yes -- guided visits to see Najin and Fatu are available, along with rhino tracking on foot and the chance to feed Baraka, a blind black rhino, from a viewing platform.",
    },
    {
      question: "How far is Ol Pejeta from Nairobi?",
      answer: "Roughly 3.5 to 4.5 hours by road, making it a feasible stop within a Kenya highlands or Mount Kenya-area itinerary rather than a standalone trip.",
    },
  ],

  "lake-nakuru-park-birds-rhinos": [
    {
      question: "Are there still flamingos at Lake Nakuru?",
      answer: "Yes, but in far smaller numbers than the park's historical reputation suggests. Since 2012, rising water levels have pushed most large flocks to other Rift Valley lakes like Bogoria, so visitors focused specifically on flamingos may want to check current conditions or consider Bogoria instead.",
    },
    {
      question: "Does Lake Nakuru have elephants?",
      answer: "No — the park is one of the few major Kenyan reserves that doesn't support elephants, making it a Big Four rather than Big Five destination.",
    },
    {
      question: "Is Lake Nakuru a good place to see rhinos?",
      answer: "Yes — it's one of Kenya's most reliable rhino sanctuaries, with healthy populations of both black and white rhino and consistently good sighting odds.",
    },
    {
      question: "How long should I spend at Lake Nakuru?",
      answer: "One day is enough to cover the rhino sanctuary and main viewpoints; two days allows for deeper exploration and better photography conditions.",
    },
  ],

  "amboseli-national-park-guide": [
    {
      question: "Can I see Mount Kilimanjaro every day at Amboseli?",
      answer: "No guarantee — cloud cover is common, especially later in the day. Early mornings during the dry season, roughly June through October and January through February, give the best odds of a clear view.",
    },
    {
      question: "Does Amboseli have the Big Five?",
      answer: "Four of the five — elephant, lion, leopard, and buffalo are present, but black rhino are not commonly resident, making Amboseli one Big Five species short.",
    },
    {
      question: "How far is Amboseli from Nairobi?",
      answer: "About a 4-hour drive, or roughly 45 minutes by small aircraft from Wilson Airport, making it one of the more accessible parks for a shorter Kenya safari.",
    },
    {
      question: "How many days should I spend in Amboseli?",
      answer: "A minimum of two nights is recommended, giving at least one full day of game driving plus one Kilimanjaro-watching morning, rather than a rushed single-day visit.",
    },
  ],

  "masai-mara-reserve-vs-conservancies": [
    {
      question: "Which is better, the Masai Mara Reserve or a private conservancy?",
      answer: "Neither is universally better — the Reserve is the only place to see river crossings, while conservancies offer fewer vehicles, night drives, and walking safaris that the Reserve doesn't allow.",
    },
    {
      question: "Can I see the river crossings if I stay in a conservancy?",
      answer: "Only by traveling into the Reserve itself and paying its separate daily entry fee — no conservancy includes any of the actual crossing points.",
    },
    {
      question: "Can I do a night drive in the Masai Mara National Reserve?",
      answer: "No — the Reserve keeps fixed daytime gate hours with no night drives, off-road driving, or walking safaris. Those activities are only available in the private conservancies.",
    },
    {
      question: "Can I combine both the Reserve and a conservancy in one trip?",
      answer: "Yes, and it's a common approach — many conservancy camps sit close enough to the Reserve boundary to make a day visit for a crossing straightforward.",
    },
  ],

  "masai-mara-vs-serengeti": [
    {
      question: "Is Masai Mara part of the Serengeti?",
      answer: "Not officially — they're separate protected areas in different countries — but they form one continuous ecosystem, and wildlife, including the migrating herds, moves freely between them.",
    },
    {
      question: "Which is better for first-time safari-goers, Mara or Serengeti?",
      answer: "Neither is objectively better — the Mara suits shorter trips built around river crossings, while the Serengeti suits travelers with more time who want a larger, quieter landscape.",
    },
    {
      question: "Can I visit both the Masai Mara and the Serengeti on one trip?",
      answer: "Yes, and many multi-week itineraries do exactly that, though it requires crossing an international border and adds meaningful transfer time.",
    },
    {
      question: "When is the migration in the Masai Mara versus the Serengeti?",
      answer: "Roughly July through October in the Mara, and the rest of the year spread across the Serengeti, though exact timing shifts annually with rainfall patterns.",
    },
  ],

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
  "common-eta-mistakes-travelers-denied-boarding": [
    {
      question: "Why was my Kenya eTA application rejected?",
      answer: "Most rejections come from blurry document uploads, mismatched personal details between the application and passport, or applying through an unofficial third-party site with different processing standards.",
    },
    {
      question: "Can I be denied boarding even with an approved eTA?",
      answer: "Yes — if your passport doesn't meet the six-month validity requirement at check-in, airlines can deny boarding regardless of eTA approval status.",
    },
    {
      question: "How early should I apply for my Kenya eTA?",
      answer: "At least a week before departure, to leave time to fix any document or detail errors if the application is flagged or rejected on the first attempt.",
    },
  ],
  "overstay-kenya-eta-what-happens": [
    {
      question: "What happens if I overstay my Kenya eTA by one day?",
      answer: "A daily fine applies starting the day after your authorized stay ends. A single-day overstay is usually a minor, easily resolved cost if paid promptly before departure.",
    },
    {
      question: "Where do I pay an overstay fine in Kenya?",
      answer: "At an immigration office (Nairobi or another major city) before your departure date, or at the airport itself if the issue is only discovered at check-in.",
    },
    {
      question: "Will an overstay affect my ability to visit Kenya again?",
      answer: "A single short overstay resolved properly rarely causes long-term issues, but repeated or extended overstays can be flagged and complicate future applications.",
    },
  ],
  "visa-on-arrival-vs-eta-which-applies-to-you": [
    {
      question: "Can I still get a visa on arrival in Kenya?",
      answer: "For almost all travelers, no — Kenya has shifted to the eTA system, which must be approved before you travel. Visa-on-arrival is not a reliable option to plan around.",
    },
    {
      question: "How do I know if I need an eTA for Kenya?",
      answer: "Check Kenya's official immigration eTA portal directly with your nationality — this is the only reliably current source, since requirements have changed recently.",
    },
    {
      question: "What happens if I arrive without an approved eTA?",
      answer: "Airlines verify eTA status at check-in, so you risk being denied boarding before your flight even departs, not just facing an issue after landing in Kenya.",
    },
  ],
  "how-much-does-a-kenya-safari-cost": [
    {
      question: "What's the difference between a budget and luxury Kenya safari?",
      answer: "Budget safaris use group camping or basic lodges with road transfers, while luxury safaris offer high-end camps, often fly-in transfers, private guiding, and all-inclusive rates — the core wildlife experience is available at every tier.",
    },
    {
      question: "What's usually not included in a safari package price?",
      answer: "International flights, visa or eTA fees, travel insurance, guide and staff tips, and alcoholic drinks are typically extra unless the package is specifically marketed as fully all-inclusive.",
    },
    {
      question: "Is it cheaper to travel during a specific season?",
      answer: "Yes — shoulder seasons like November and April through May generally cost less than peak migration season (July to October) or the December holiday period.",
    },
    {
      question: "Does a longer trip cost proportionally more?",
      answer: "Not always — accommodation tier and internal flights affect the total cost more than trip length alone, so a shorter luxury trip can cost more than a longer budget one.",
    },
  ],
  "can-you-drink-the-water-in-kenya": [
    {
      question: "Is tap water safe anywhere in Kenya?",
      answer: "No — the standard advice is to avoid tap water for drinking throughout the country, including in Nairobi and at upscale hotels, and to rely on bottled or filtered water instead.",
    },
    {
      question: "Do safari lodges provide drinking water?",
      answer: "Yes — most established camps supply bottled or filtered water in rooms, often included in the rate, and increasingly use refillable bottles and filtered stations to reduce plastic waste.",
    },
    {
      question: "Is ice safe to have in drinks in Kenya?",
      answer: "At reputable lodges and hotels, yes — ice is typically made with filtered water, but it's worth being more cautious at very basic guesthouses or street vendors.",
    },
    {
      question: "Should I bring a water purifier to Kenya?",
      answer: "Not necessary for a standard lodge-based safari, since bottled and filtered water is widely available, but it can be a useful backup for longer overland or remote trips.",
    },
  ],
  "what-currency-should-you-carry-in-kenya": [
    {
      question: "Should I bring US dollars or Kenyan shillings?",
      answer: "Both — shillings for everyday spending like markets and tips, and dollars for larger pre-arranged payments like park fees and some safari packages.",
    },
    {
      question: "Why are some US dollar bills rejected in Kenya?",
      answer: "Many businesses and park gates only accept newer, undamaged bills, typically printed after around 2009, so it's worth requesting clean bills from your bank before traveling.",
    },
    {
      question: "Is it better to withdraw cash or exchange currency in Kenya?",
      answer: "Withdrawing shillings from an ATM after arrival generally gets a better exchange rate than exchanging cash at the airport.",
    },
    {
      question: "Are credit cards widely accepted in Kenya?",
      answer: "Yes, at most lodges, hotels, and higher-end restaurants, but cash is still needed for markets, small vendors, and tips.",
    },
  ],
  "do-you-need-cash-or-card-on-safari": [
    {
      question: "Can I pay for my entire Kenya safari by card?",
      answer: "Larger payments like lodge bills and tour packages can generally be settled by card, but tips, small purchases, and remote-area transactions still require cash.",
    },
    {
      question: "Do lodges charge extra for card payments?",
      answer: "Some do, typically a surcharge of around 3–5% to cover processing fees, so it's worth asking whether cash gets a better rate before paying.",
    },
    {
      question: "How should I tip guides and staff — cash or card?",
      answer: "Cash — tipping by card isn't standard practice in the safari industry, so carrying small-denomination bills for this purpose is essential.",
    },
    {
      question: "Should I tell my bank I'm traveling to Kenya?",
      answer: "Yes — notifying your bank of your travel dates ahead of time helps avoid your card being declined or flagged for suspicious activity mid-trip.",
    },
  ],
  "kenya-time-zone-and-jet-lag-tips": [
    {
      question: "Does Kenya observe daylight saving time?",
      answer: "No — Kenya stays on East Africa Time (UTC+3) year-round with no seasonal clock changes, so the time difference from home stays constant.",
    },
    {
      question: "How big is the time difference from the US to Kenya?",
      answer: "Roughly seven hours from the US East Coast and closer to ten hours from the West Coast, depending on the specific city and time of year in the US.",
    },
    {
      question: "Should I plan a rest day before starting my safari?",
      answer: "It's a good idea, especially for longer-haul travelers, since game drives often start before sunrise and a night in Nairobi first helps you adjust before those early mornings begin.",
    },
    {
      question: "What's the fastest way to adjust to Kenya's time zone?",
      answer: "Switching to destination time on the flight, getting sunlight soon after arrival, and staying hydrated all help your body adjust faster than fighting the new schedule.",
    },
  ],
  "internet-and-phone-signal-in-the-bush": [
    {
      question: "Will I have phone signal on a game drive?",
      answer: "Generally no — cell signal typically disappears once you leave camp, since most conservancies and remote park areas have no cellular infrastructure at all.",
    },
    {
      question: "Do safari lodges have WiFi?",
      answer: "Most established camps offer WiFi in common areas via satellite internet, usually sufficient for messaging and light browsing, though video calls can be unreliable.",
    },
    {
      question: "Should I buy a local SIM card for a Kenya safari?",
      answer: "It's useful for time spent in Nairobi or coastal towns, but it won't extend coverage into remote conservancies where no cellular network exists to connect to.",
    },
    {
      question: "What happens in an emergency with no phone signal?",
      answer: "Camps maintain their own radio networks and can coordinate emergency response, including flying-doctor evacuation, entirely independent of commercial cell coverage.",
    },
  ],
  "what-happens-if-you-get-sick-during-a-safari": [
    {
      question: "What happens if I get seriously injured on safari?",
      answer: "Camps coordinate flying-doctor evacuation to a Nairobi hospital using radio communication, even in areas with no cell signal, often getting a patient airlifted within a few hours.",
    },
    {
      question: "Do I need special insurance for a Kenya safari?",
      answer: "Travel insurance that specifically includes medical evacuation is strongly recommended, since standard medical coverage alone may not cover an airlift from a remote camp.",
    },
    {
      question: "What are the most common health issues on safari?",
      answer: "Mild stomach upset, sunburn, and dehydration are the most frequent complaints — serious injuries or wildlife-related incidents are rare.",
    },
    {
      question: "Should I bring my own first aid supplies?",
      answer: "Yes — a basic kit with any prescription medications, pain relief, and rehydration salts covers common needs that camps may not specifically stock for you.",
    },
  ],
  "what-to-wear-on-a-kenya-safari": [
    {
      question: "What colors should I avoid on a Kenya safari?",
      answer: "Avoid white (shows dust), black (absorbs heat and attracts tsetse flies), and bright colors (unnatural against the landscape and can startle wildlife at close range).",
    },
    {
      question: "Do I really need a warm layer if I'm visiting in dry season?",
      answer: "Yes — early morning game drives are cold even in peak dry season, especially at higher-elevation camps, regardless of how hot the afternoon gets.",
    },
    {
      question: "Is cotton or synthetic fabric better for safari?",
      answer: "Lightweight cotton or cotton-blend fabric generally performs better across a multi-day safari than synthetic athletic wear, which tends to trap heat and odor.",
    },
  ],
  "tsetse-flies-blue-and-black-clothing": [
    {
      question: "Why do tsetse flies prefer blue and black clothing?",
      answer: "Tsetse flies hunt visually and are measurably drawn to dark blue and black over lighter, neutral colors — the same principle used in blue-and-black cloth traps for fly-control programs.",
    },
    {
      question: "Are tsetse fly bites dangerous in Kenya's main safari parks?",
      answer: "The bite itself is painful but the disease-transmission risk in Kenya's main tourist circuit is low; it's more of a comfort issue than a serious health concern for most travelers.",
    },
    {
      question: "Does insect repellent work against tsetse flies?",
      answer: "Standard mosquito repellent has limited effectiveness against tsetse flies — clothing color and covering exposed skin matter more.",
    },
  ],
  "sun-protection-hats-spf-sunglasses": [
    {
      question: "Is sun exposure really stronger in Kenya than at home?",
      answer: "Yes, generally — equatorial location combined with the altitude of many safari areas increases UV intensity compared to most travelers' home climates.",
    },
    {
      question: "How often should I reapply sunscreen on a game drive?",
      answer: "Roughly every two to three hours during extended sun exposure, and sooner if you're sweating heavily or the drive runs through the middle of the day.",
    },
    {
      question: "Do I need polarized sunglasses specifically?",
      answer: "Not strictly required, but polarized lenses noticeably cut glare off open grassland and dry ground, making it easier to spot wildlife as well as protecting your eyes.",
    },
  ],
  "packing-list-for-a-10-day-kenya-safari": [
    {
      question: "Do I need to pack clothes for all 10 days?",
      answer: "No — most camps offer laundry service, so packing for 5 to 6 days and refreshing your rotation is enough for a 10-day trip.",
    },
    {
      question: "What kind of bag should I bring?",
      answer: "A soft-sided duffel bag — hard-shell suitcases usually aren't accepted on light aircraft transfers between camps.",
    },
    {
      question: "Should I bring my own binoculars?",
      answer: "Most camps have a few to share, but a personal pair is worth packing if birding or detailed wildlife viewing is a priority for you.",
    },
  ],
  "duffel-bags-only-safari-luggage-restrictions": [
    {
      question: "Can I bring a regular wheeled suitcase on safari?",
      answer: "Only if your entire itinerary stays on road transfers — if any leg involves a light aircraft, you'll need a soft duffel instead.",
    },
    {
      question: "What happens if my bag is overweight?",
      answer: "You'll typically be charged a per-kilo excess fee on the spot, or in some cases the excess weight is held back for a later flight.",
    },
    {
      question: "Can I store extra luggage somewhere during my safari?",
      answer: "Yes — most tour operators can arrange luggage storage in Nairobi for bags that don't need to travel with you on internal light-aircraft flights.",
    },
  ],
  "angama-mara-suites-on-the-escarpment": [
    {
      question: "Where exactly is Angama Mara located?",
      answer: "On the Oloololo Escarpment, overlooking the Mara Triangle within the greater Masai Mara ecosystem, roughly 1,000 feet above the valley floor.",
    },
    {
      question: "What's the difference between Angama Mara and Angama Safari Camp?",
      answer: "Angama Mara is the original, more design-forward property, while Angama Safari Camp nearby offers a slightly more classic tented style — both share the same escarpment setting and game drive access.",
    },
    {
      question: "Do the game drives reach the Mara Triangle from the escarpment?",
      answer: "Yes — vehicles descend into the valley for game drives, giving full access to the same wildlife and migration territory as camps based on the plains below.",
    },
    {
      question: "How do you get to Angama Mara?",
      answer: "Most guests fly in via a nearby airstrip; the camp is also reachable by road up the escarpment from the Mara Triangle valley floor.",
    },
  ],
  "giraffe-manor-breakfast-with-giraffes": [
    {
      question: "Where is Giraffe Manor located?",
      answer: "In Nairobi, adjacent to the Giraffe Centre, roughly 20 minutes from the city center — making it easy to combine with an arrival or departure day.",
    },
    {
      question: "Do the giraffes really put their heads through the windows?",
      answer: "Yes — resident Rothschild's giraffes regularly approach the dining room windows during breakfast and other meals looking for pellets from guests.",
    },
    {
      question: "How far in advance should I book Giraffe Manor?",
      answer: "Well in advance — often a year or more for peak periods, given the limited number of rooms and high demand from travelers building it into their Kenya itinerary.",
    },
    {
      question: "Is Giraffe Manor connected to a conservation program?",
      answer: "Yes — it's linked to the neighboring Giraffe Centre's Rothschild's giraffe breeding and rehabilitation program, which the resident giraffes descend from.",
    },
  ],
  "finch-hattons-out-of-africa-reimagined": [
    {
      question: "Where is Finch Hattons located?",
      answer: "In Tsavo West National Park, built around a cluster of natural freshwater springs that draw wildlife directly to the camp.",
    },
    {
      question: "Who was Finch Hatton, and why is the camp named after him?",
      answer: "Denys Finch Hatton was a safari guide and aviator central to the \"Out of Africa\" story, and the camp's vintage 1920s aesthetic is a deliberate nod to that era of East African safari travel.",
    },
    {
      question: "Can you see wildlife directly from the camp?",
      answer: "Yes — the surrounding springs and forest regularly draw elephants, buffalo, and birdlife right to the edge of the property.",
    },
    {
      question: "What is Tsavo West known for?",
      answer: "A volcanic landscape, the Mzima Springs ecosystem, and elephants known for their reddish tint from dust-bathing in the park's distinctive red soil.",
    },
  ],
  "ilora-retreats-design-led-luxury-in-the-mara": [
    {
      question: "What makes Ilora Retreats different from other Mara camps?",
      answer: "A contemporary, design-led aesthetic rather than the traditional colonial-style safari look most Mara camps use, combined with an intentionally intimate scale.",
    },
    {
      question: "Is Ilora Retreats a good fit for a first Mara safari?",
      answer: "Yes — it offers full access to the Mara ecosystem's wildlife and migration territory, suited to travelers who also want a more design-conscious, boutique atmosphere.",
    },
    {
      question: "Why does camp size matter for the guest experience?",
      answer: "A smaller camp typically means higher staff-to-guest ratios, more personalized game drive planning, and a quieter, less crowded overall pace.",
    },
    {
      question: "What wildlife can you see from a camp based in the Mara ecosystem?",
      answer: "Big cats, resident plains game, and, seasonally, the Great Migration herds — the same headline sightings most Mara-area properties offer access to.",
    },
  ],
  "loldia-house-a-colonial-farmhouse": [
    {
      question: "Where is Loldia House located?",
      answer: "On the shores of Lake Naivasha in Kenya's Great Rift Valley, roughly a two-hour drive from Nairobi.",
    },
    {
      question: "What makes Loldia House different from a typical safari camp?",
      answer: "It's part of a genuine working farm with a colonial-era farmhouse character, rather than a purpose-built lodge, set on lakeshore and farmland rather than open savannah.",
    },
    {
      question: "What activities are available at Lake Naivasha?",
      answer: "Boat safaris for hippo and bird viewing, fishing, horseback riding, and general birdwatching across the lake's rich surrounding habitat.",
    },
    {
      question: "Is Lake Naivasha a good stop to combine with a Mara safari?",
      answer: "Yes — many travelers use it as a lower-key transition stop early or late in a Kenya itinerary, given its proximity to Nairobi and different pace from a game-drive-heavy schedule.",
    },
  ],
  "sasaab-a-moroccan-style-lodge": [
    {
      question: "Where is Sasaab located?",
      answer: "Above the Ewaso Nyiro River in the Samburu region of northern Kenya, a drier and more remote landscape than the Mara or Amboseli.",
    },
    {
      question: "What is the Samburu Special Five?",
      answer: "Grevy's zebra, reticulated giraffe, Somali ostrich, gerenuk, and beisa oryx — species adapted to Samburu's arid landscape that aren't typically found in Kenya's southern parks.",
    },
    {
      question: "What's distinctive about Sasaab's design?",
      answer: "A Moroccan-influenced style with white domed architecture and open, airy rooms, each with a private plunge pool overlooking the river valley — a notable contrast to the canvas-tent look common elsewhere in Kenya.",
    },
    {
      question: "Is Sasaab a good addition after visiting the Mara?",
      answer: "Yes — Samburu's arid ecosystem and species list are genuinely different from the Mara's, making it a strong second stop for travelers who want variety across their trip.",
    },
  ],
  "ol-donyo-lodge-under-kilimanjaros-shadow": [
    {
      question: "Where is Ol Donyo Lodge located?",
      answer: "In the Chyulu Hills, on 100,000 private hectares positioned between Tsavo and Amboseli national parks.",
    },
    {
      question: "Can you actually see Kilimanjaro from Ol Donyo?",
      answer: "Yes, on clear days, particularly early in the morning before cloud cover builds up over the mountain.",
    },
    {
      question: "What is a star-bed room?",
      answer: "A bed that rolls out onto a private outdoor deck, letting guests sleep under the open night sky with unobstructed stargazing.",
    },
    {
      question: "Why does the conservancy see so many elephants?",
      answer: "The land functions as a natural wildlife corridor between Tsavo and Amboseli, so large elephant herds regularly move through the property.",
    },
  ],
  "segera-retreat-conservancy-and-infinity-pool": [
    {
      question: "Where is Segera Retreat located?",
      answer: "In Laikipia, a private conservancy region north of the Mara known for lower visitor density and diverse landscapes.",
    },
    {
      question: "What wildlife can you see at Segera and around Laikipia?",
      answer: "Classic savannah species alongside rarer sightings like the reticulated giraffe and Grevy's zebra, which are less common in Kenya's southern parks.",
    },
    {
      question: "What makes Segera's conservancy model distinctive?",
      answer: "It combines tourism with sustainable agriculture and arts programming alongside wildlife conservation, funding a broader working conservancy rather than operating as a standalone lodge.",
    },
    {
      question: "What activities are available beyond game drives?",
      answer: "Night drives, walking safaris, and horseback riding are typically available through Laikipia's private conservancies, activities that most national parks restrict.",
    },
  ],
  "wildebeest-crossing-2026-migration-forecast": [
    {
      question: "Can you predict the exact date of a Mara River crossing?",
      answer: "No — crossings depend on herd movement and rainfall patterns that shift year to year, so the reliable window is a season (roughly July–September), not a specific date months in advance.",
    },
    {
      question: "Where can I find the most current migration updates?",
      answer: "Your camp or ground operator, who typically receives regular updates from guides actively tracking the herds, is a far more current source than a general seasonal forecast.",
    },
    {
      question: "Should I book a longer stay to improve my chances of seeing a crossing?",
      answer: "Yes — staying multiple nights near the Mara River during the broad crossing season improves your odds far more than a single night timed to one predicted date.",
    },
  ],
  "kenyas-rainy-season-what-changes": [
    {
      question: "Does it rain all day during Kenya's rainy season?",
      answer: "Rarely — rain is typically a concentrated downpour, often in the afternoon, rather than a fully washed-out day, especially during the shorter November rains.",
    },
    {
      question: "How much cheaper is a rainy-season safari?",
      answer: "Rates during the long rains, particularly April, are often 30–40% below July–September peak pricing at comparable camps.",
    },
    {
      question: "Do all camps stay open during the rains?",
      answer: "No — some remote or rustic camps close briefly during the heaviest weeks of April for maintenance, so it's worth checking a specific property's calendar before booking.",
    },
  ],
  "solar-eclipse-and-stargazing-safaris": [
    {
      question: "Will the 2026 eclipse be visible on a normal Kenya safari?",
      answer: "No — the eclipse path crosses far northern Kenya only. Nairobi and the main safari circuit (Mara, Amboseli, Tsavo) will not see it.",
    },
    {
      question: "Is the 2026 Kenya eclipse a total eclipse?",
      answer: "No — it's a partial eclipse, with up to roughly 18% of the sun covered at maximum in the highest-coverage areas near Kakuma and Lodwar.",
    },
    {
      question: "Do I need special equipment to view a partial eclipse safely?",
      answer: "Yes — proper eclipse glasses or a solar filter are required for safe direct viewing, even at partial coverage.",
    },
  ],
  "kenyas-new-conservation-fees": [
    {
      question: "Why did Kenya raise its national park fees?",
      answer: "It was the first comprehensive fee review in roughly 18 years, aimed at funding conservation efforts and park infrastructure that old, largely static fees no longer covered adequately.",
    },
    {
      question: "How much have non-resident park fees increased?",
      answer: "Increases vary by park and category, generally in the range of 80–160%, with premium parks like Amboseli and Lake Nakuru seeing some of the steepest rises.",
    },
    {
      question: "Where should I check current park fees before booking?",
      answer: "KWS's official eCitizen KWSPay portal is the most reliable source, since many third-party sites and older guides may still show outdated pre-revision pricing.",
    },
  ],
  "hot-air-balloon-safaris-over-the-mara": [
    {
      question: "How early do I need to wake up for a balloon safari?",
      answer: "Pickup from camp is typically between 4:30 and 5:30am, to reach the launch site before sunrise.",
    },
    {
      question: "Is a hot air balloon safari included in a standard package?",
      answer: "No — it's typically a separate, additional paid activity booked on top of your regular safari itinerary.",
    },
    {
      question: "Can a balloon flight be cancelled?",
      answer: "Yes — flights are weather-dependent and can be postponed or cancelled if wind conditions aren't safe for flying.",
    },
  ],
  "new-direct-flights-cutting-kenya-travel-time": [
    {
      question: "What's the most significant new route into Nairobi in 2026?",
      answer: "Emirates' third daily Dubai–Nairobi flight, launched March 2026, bringing total weekly frequency on that route to 21 flights.",
    },
    {
      question: "Are there more flight options for combining Kenya with a coastal or regional trip?",
      answer: "Yes — new Mombasa–Doha flights and additional Johannesburg–Nairobi frequency both expanded in 2026, useful for multi-destination itineraries.",
    },
    {
      question: "Should I book flights based on this article's specific schedule details?",
      answer: "Treat this as a general trend rather than a fixed timetable — always confirm current routes and frequencies directly with your airline or a booking platform.",
    },
  ],
  "kenya-safari-faqs-everything-first-timers-ask": [
    {
      question: "What does a typical day on safari look like?",
      answer: "An early morning game drive before sunrise, a midday rest at camp, and a second game drive in the late afternoon heading into sunset, with meals and downtime filling the gaps.",
    },
    {
      question: "Is Kenya a good destination for solo travelers?",
      answer: "Yes — solo travelers are common on both scheduled group departures and private itineraries, and most reputable operators handle solo bookings well.",
    },
    {
      question: "Are safari vehicles comfortable for long drives?",
      answer: "Most are open-sided 4x4s with pop-up roofs for good visibility, though drives can be bumpy on rougher terrain, so an active, physical ride is worth expecting.",
    },
    {
      question: "Is Kenya safe and suitable for families with children?",
      answer: "Many lodges are well set up for families with dedicated suites and activities, though age minimums vary by camp, so it's worth confirming directly when traveling with younger children.",
    },
  ],
  "is-it-ethical-to-go-on-safari": [
    {
      question: "Does safari tourism actually help conservation?",
      answer: "Yes — park entry fees and conservancy lease payments are a direct funding source for ranger salaries, anti-poaching efforts, and keeping land protected as wildlife habitat rather than converted to other uses.",
    },
    {
      question: "What should I look for in a responsible safari operator?",
      answer: "Transparency about community lease payments and employment, clear vehicle policies at sightings, and camps operating within conservancies that cap visitor and vehicle numbers.",
    },
    {
      question: "Is it more ethical to visit a conservancy than a national reserve?",
      answer: "Conservancies generally offer more direct community benefit through lease payments and lower vehicle crowding at sightings, though well-run operators exist in both settings.",
    },
    {
      question: "What guide behaviors should raise concern during a game drive?",
      answer: "Off-road driving to approach animals, excessive vehicle crowding at a single sighting, and pursuing an animal that's clearly trying to move away are all signs of poor wildlife etiquette.",
    },
  ],
  "plastic-bag-ban-whats-illegal-to-bring": [
    {
      question: "Will my plastic bags be confiscated at the Kenya border?",
      answer: "Plastic carrier and shopping bags found in luggage are typically confiscated at customs, so it's worth checking your bags for any loose plastic bags before arrival.",
    },
    {
      question: "Are ziplock bags and other plastic packaging banned too?",
      answer: "No — the ban targets flat, handled plastic carrier and shopping bags specifically, not general plastic packaging like ziplock bags for toiletries or electronics.",
    },
    {
      question: "Are single-use plastics banned in national parks too?",
      answer: "Yes — a separate, stricter policy restricts single-use plastics like water bottles, straws, and cutlery within national parks, reserves, and protected areas.",
    },
    {
      question: "What should I pack instead of plastic bags?",
      answer: "A couple of reusable fabric or woven bags cover most needs, like laundry or wet swimwear, and most hotels and shops already offer paper or reusable alternatives.",
    },
  ],
  "booking-through-a-local-tour-operator-vs-diy": [
    {
      question: "Is it cheaper to book a Kenya safari myself?",
      answer: "Sometimes, but not always — local operators often have access to rates and availability that aren't publicly listed, which can offset or exceed any savings from booking direct.",
    },
    {
      question: "When does a local operator make the most sense?",
      answer: "For multi-park circuits requiring internal flights, peak-season travel, or complex coordination between remote camps and transfers.",
    },
    {
      question: "Can I really book a safari entirely on my own?",
      answer: "Yes, particularly for a simpler single-region trip with flexible dates and a traveler comfortable managing their own logistics directly with camps.",
    },
    {
      question: "What should I ask a local operator before booking?",
      answer: "How they're compensated, what happens if plans need to change mid-trip, and whether they can provide references from past travelers.",
    },
  ],
  "bumpy-roads-and-motion-sickness": [
    {
      question: "Are Kenya safari game drives really that bumpy?",
      answer: "Yes — most tracks are unpaved dirt or grass, and vehicles regularly go off-track following sightings, making the terrain genuinely rough at times.",
    },
    {
      question: "Will I get motion sick on a game drive?",
      answer: "If you're prone to motion sickness on winding roads or boats, there's a reasonable chance game drives will affect you similarly, though travelers without that history usually find it manageable.",
    },
    {
      question: "Where should I sit to minimize motion sickness?",
      answer: "Toward the front of the vehicle tends to be smoother than the back, and keeping your eyes on the horizon rather than a screen helps reduce nausea.",
    },
    {
      question: "Should I bring motion sickness medication?",
      answer: "Yes, if it's been an issue for you before — standard over-the-counter remedies work the same way on a game drive, and remote camps won't necessarily have it available.",
    },
  ],
}
