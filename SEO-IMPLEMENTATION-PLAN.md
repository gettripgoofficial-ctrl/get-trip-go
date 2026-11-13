# Get Trip Go SEO and UX implementation plan

**Scope:** Improve organic discovery, clarity, mobile usability, and enquiry/booking confidence while retaining the current Get Trip Go logo, colours, typography, and travel-brand look. This is an incremental cleanup, not a redesign.

**Audit snapshot:** 13 November 2026. Findings below combine the current repository and a live homepage/sitemap inspection. A technical SEO score is tool-dependent and rankings cannot be guaranteed; use the same audit tool and settings before and after the work.

## 1. Executive summary

The site already has a useful base: App Router pages for flights, hotels, visas, packages and tours; per-page metadata on several routes; HTTPS security headers; a `www` to non-`www` redirect; image optimisation configuration; and reusable trip-schema helpers.

The highest-value work is to make the pages that already exist reliably discoverable, ensure search engines receive the same useful page content as people, and reduce repetitive homepage content. Specific findings:

- The live sitemap contained 65 URLs with no exact duplicate URL in the fetched file, but did not include existing `/flights`, `/hotels`, `/visa`, or `/about` routes. The sitemap is assembled in `app/sitemap.ts` from a hand-maintained static list and data arrays.
- `/blog/[slug]` generates a title and description from the URL slug and returns a client component. Its own source notes that article content is held client-side/localStorage. Render published article content and metadata on the server before treating these URLs as dependable search landing pages. Only add genuinely published posts to the sitemap.
- Root metadata supplies `alternates.canonical: "./"` globally. Give every indexable page an explicit canonical and verify the resolved canonical on live routes, especially filtered URLs.
- The homepage currently has one source-level instance of each section, but the live page exposes repeated “Explore Coupons” and “Discover Kenya” headings from responsive variants; `TravelStories` also has separate desktop/mobile article markup. Consolidate the content model and keep one meaningful version of each section.
- The homepage H1 is visually hidden. Replace it with a visible, useful value proposition, then keep one H1 per page.
- There are existing service routes, but dedicated routes are not present for travel insurance, cruises, forex, or villas. Build these only where the business has a real, supportable service and unique content; do not publish thin doorway pages.
- The organization JSON-LD references `/logo.png`, while the repository assets include `public/Logo-icon.png` and `public/logo-text.png`. Verify and correct the canonical logo asset. The current WebSite `SearchAction` points to `/search`, which is not an app route in this repository; remove it unless a working search endpoint is implemented.
- The homepage uses a desktop hero and a separate mobile hero and preloads an image for a mobile offer card. Measure the actual mobile LCP element and preload only the image that becomes the LCP. Do not infer Core Web Vitals from a lab score alone.

## 2. Priority list

Impact and effort are relative: **High / Medium / Low**. Expected results are targets to verify, not guarantees.

| Priority | Issue / action | Impact | Effort | Owner | Expected result |
|---|---|---:|---:|---|---|
| P0 | Add all intended, indexable service and company routes to the sitemap; exclude private, utility, filter-only and unpublished URLs. Use real `lastModified` values or omit them rather than assigning a changing date to every URL. | High | Low | Developer | Search engines discover the existing `/flights`, `/hotels`, `/visa`, `/about` and other approved landing pages from the sitemap. |
| P0 | Give every indexable route an exact self-canonical. Give parameter/filter variants a deliberate canonical/noindex policy; do not rely on the inherited `"./"` value. | High | Medium | Developer | One preferred URL per page; fewer duplicate or competing search URLs. |
| P0 | Render published blog articles and their title, description, headings, body, author and modified date in server HTML. Replace the slug-only metadata fallback with content-backed metadata. | High | Medium | Developer + Editorial | Blog pages are crawlable without browser storage or post-hydration fetches and have useful snippets. |
| P0 | Confirm one-hop permanent redirects to `https://gettripgo.com` for HTTP, `www`, and slash variants; inventory legacy paths and broken links before changing URLs. | High | Low–Medium | Developer | One HTTPS host and one URL per resource, without redirect chains or lost links. |
| P1 | Reduce duplicate responsive homepage modules and repeated offer/story sections; make each article card link to its article, not only `/blog`. | High | Medium | Design + Developer | Cleaner page hierarchy, less repeated copy, better mobile navigation and stronger link paths to content. |
| P1 | Add visible answer-first introductory copy, clear page-specific H1s, and unique H2 content to service and destination pages. | High | Medium | SEO + Editorial | Better relevance for non-brand queries and clearer landing pages for visitors and answer engines. |
| P1 | Audit mobile CWV using field data and a repeatable lab test; optimise the actual LCP image, image dimensions, third-party scripts, fonts and interaction work. | High | Medium–High | Developer | Better field CWV at the 75th percentile and fewer slow/unstable visits. |
| P1 | Standardise package price labels, inclusions/exclusions, dates, occupancy basis, cancellation terms and support details. | High | Medium | Product + Operations | Fewer price misunderstandings; more qualified enquiries and booking starts. |
| P1 | Add stable destination hubs for Bali, Thailand, Kerala, Maldives, Dubai, Georgia, Bhutan, Vietnam, Kashmir and Northeast India, linked to relevant packages. | High | Medium–High | SEO + Editorial + Developer | Searchable destination pages instead of query-only filters and disconnected package detail pages. |
| P2 | Add BreadcrumbList to visible breadcrumbs; use TouristTrip for a genuine itinerary and Product/Offer only for a real, purchasable package with matching visible pricing. | Medium | Low–Medium | Developer | Better entity/context signals and valid structured data; no promise of a rich result. |
| P2 | Validate business facts, logo URL, phone, address, operating hours, service area and support promises; align on-site details and structured data. | Medium | Low | Operations + SEO | Consistent business entity signals and stronger trust. |
| P2 | Add genuine author/reviewer credentials, sources and review provenance to destination and editorial pages. | Medium | Medium | Editorial + Operations | More useful, attributable content for people and AI answer systems. |

## 3. Homepage copy and incremental wireframe

### Ready-to-use homepage metadata and introduction

- **Title:** `Flights, Hotels & Holiday Packages from India | Get Trip Go`
- **Meta description:** `Plan your next trip with Get Trip Go. Compare flights and hotels, explore holiday packages and group tours, or request a custom itinerary with support from our India-based travel team.`
- **H1:** `Plan your next trip with flights, stays and holidays that fit.`
- **Intro paragraph:** `Compare flight and hotel options, explore ready-made holiday packages, or tell us what you have in mind and get a trip plan tailored to your dates, budget and travel style. Get Trip Go helps travellers from India plan domestic and international trips, with clear inclusions and support before you book.`

Use the above only if the business can substantiate its service and support claims. Put the H1 in visible hero text, not in a screen-reader-only element. Keep the hero visual style and existing search widget; change hierarchy and copy, not the brand.

### Homepage wireframe

1. **Header:** Existing logo and colours. Keep primary navigation short: Flights, Hotels, Holiday packages, Group tours, Destinations, Travel guides. Put Visa assistance and other services in a clearly named “Travel services” menu. Keep “Plan a trip” as a restrained CTA. On mobile, expose the important service links in the menu rather than only in desktop-only sections.
2. **Hero:** Existing imagery and search interaction; visible H1, one-sentence introduction, flight/hotel/package search tabs, one primary action (“Search flights” / “Find a stay” / “Explore holiday packages” according to the active tab), and one secondary “Plan a custom trip” link.
3. **Trust strip:** Only verifiable signals, for example secure payment provider logos, verified review source and count/date, company address/contact, and actual support hours. Do not use unsupported “best”, “guaranteed”, “24/7” or review claims.
4. **Main services:** One compact tile row/grid for Flights, Hotels, Holiday packages, Customized itineraries, Group tours, Visa assistance, Travel insurance, Cruises, Forex and Villas. Link only to live services. Visually distinguish unavailable services rather than linking to empty pages.
5. **Popular destinations:** 6–8 destination cards with descriptive links to stable destination hubs. A single “View all destinations” link leads to the directory.
6. **Featured packages:** 3–4 current packages with duration, destination, next departure (if applicable), “from” price basis and a link such as “View the 6-day Bali holiday itinerary”. Avoid repeating the same offer cards elsewhere on the page.
7. **Planning support / trust:** Brief booking steps, inclusions and cancellation links, real reviews, company credentials and a clear support channel.
8. **Travel guides:** 3 recent, genuinely published articles with unique article URLs and descriptive titles. Do not repeat the same story cards in a second mobile/desktop content block.
9. **FAQ:** A short, visible set of homepage questions about planning and support. Keep service-specific questions on their service pages.
10. **Contact and footer:** Phone, email, WhatsApp, business address/hours, policy links, service links and destination links. Ensure mobile tap targets and correct `tel:`/`mailto:` URLs.

**Remove or consolidate:** repeated coupon blocks; duplicate “More Services” blocks; repeated Kenya promotion; repeated Travel Stories headings/cards; and overlapping package carousels. If offers are commercially important, show one small, current offer strip with clear expiry and terms, and link to the offer detail page.

## 4. Page-by-page SEO briefs

### 4.1 Service pages

The currently implemented service routes include `/flights`, `/hotels`, `/customized-itineraries`, `/group-departures` and `/visa`. Use existing routes rather than creating duplicate equivalents. The remaining service pages are proposed only if Get Trip Go actually supplies those services.

#### Flights — `/flights`

- **Primary keyword:** flight booking from India
- **Secondary keywords:** domestic flight booking, international flight tickets, compare flight fares, flight booking support
- **Intent:** Transactional / comparison
- **Title:** `Book Domestic & International Flights from India | Get Trip Go`
- **Description:** `Compare domestic and international flight options from India with Get Trip Go. Search routes and dates, review fare rules, and get help with booking changes.`
- **H1:** `Book domestic and international flights from India`
- **H2 outline:** Search flights by route and date; Popular routes from India; Compare fare rules and baggage; Changes, cancellations and support; Flight booking FAQs.
- **FAQs:** How can I compare flight options on Get Trip Go? What determines baggage and cancellation rules? Can I request help changing a ticket?
- **Internal links:** Hotels, holiday package directory, customized itineraries, visa assistance, contact/booking support; link route examples to actual searches only if the destination/date search resolves correctly.
- **Schema:** WebPage + BreadcrumbList; FAQPage only for visible FAQs. Do not mark the page as a Product. Do not claim real-time availability unless the search integration provides it.

#### Hotels — `/hotels`

- **Primary keyword:** hotel booking in India and worldwide
- **Secondary keywords:** book hotels online, hotels by destination, family hotels, hotel cancellation policy
- **Intent:** Transactional / comparison
- **Title:** `Book Hotels in India & Worldwide | Get Trip Go`
- **Description:** `Compare hotel stays in India and worldwide with Get Trip Go. Check room details, location, price, cancellation terms and payment conditions before booking.`
- **H1:** `Find a stay that fits your trip`
- **H2 outline:** Search stays by destination and dates; Choose a location and room type; Rates, taxes and cancellation terms; Popular destinations; Hotel booking FAQs.
- **FAQs:** What details should I check before confirming a hotel? How can I check the cancellation deadline? Are taxes and meal plans included in the displayed rate?
- **Internal links:** Destination hubs, flights, holiday packages, customized itineraries, contact/support.
- **Schema:** WebPage + BreadcrumbList + visible FAQPage. Do not assert “verified guest reviews” unless reviews are actually tied to completed stays and substantiated.

#### Holiday packages — current directory `/popular-destinations`

- **Primary keyword:** holiday packages from India
- **Secondary keywords:** international holiday packages, domestic tour packages, family holiday packages, honeymoon packages
- **Intent:** Commercial investigation / transactional
- **Title:** `Holiday Packages from India | Domestic & International Trips`
- **Description:** `Explore domestic and international holiday packages from India. Compare destinations, trip duration, inclusions and starting prices, then request dates and a final quote.`
- **H1:** `Explore holiday packages for your next trip`
- **H2 outline:** Choose a destination; Featured holiday packages; Packages by travel style; What's included and how pricing works; Plan a custom alternative; Holiday package FAQs.
- **FAQs:** What does a holiday package price include? Are flights included in every package? How do I confirm dates and the final per-person price?
- **Internal links:** Destination hubs, package details, group departures, custom itineraries, flights, hotels and contact.
- **Schema:** CollectionPage + ItemList for visible package links + BreadcrumbList. Product/Offer belongs on eligible individual package pages, not a generic directory.

#### Customized itineraries — `/customized-itineraries`

- **Primary keyword:** customized holiday packages from India
- **Secondary keywords:** tailor-made travel itinerary, private holiday planning, custom international trip, personalized travel package
- **Intent:** Commercial investigation / enquiry
- **Title:** `Customized Holiday Itineraries from India | Get Trip Go`
- **Description:** `Plan a trip around your dates, pace and budget with a customized itinerary from Get Trip Go. Share your destination and preferences to request a tailored plan.`
- **H1:** `A holiday itinerary planned around you`
- **H2 outline:** How custom trip planning works; Tell us your dates and travel style; Sample itineraries and destinations; What a quote includes; Booking and change process; Custom itinerary FAQs.
- **FAQs:** What information do I need to request an itinerary? Can I change the suggested hotels or pace? When is the final price confirmed?
- **Internal links:** Destination hubs, relevant package examples, flights, hotels, visa assistance, travel insurance (if live) and contact form.
- **Schema:** Service + BreadcrumbList + visible FAQPage. Use TouristTrip on a specific itinerary page when it describes a real trip.

#### Group tours — current route `/group-departures`

- **Primary keyword:** group tours from India
- **Secondary keywords:** fixed departure group tours, escorted international tours, small group holidays, group tour dates
- **Intent:** Commercial investigation / transactional
- **Title:** `Fixed-Departure Group Tours from India | Get Trip Go`
- **Description:** `Compare fixed-departure group tours from India by destination, dates, duration and inclusions. Check seat availability and the full price basis before enquiring.`
- **H1:** `Travel together on a fixed-departure tour`
- **H2 outline:** Upcoming departures; Destinations and trip styles; What's included; How group booking works; Payment and cancellation terms; Group tour FAQs.
- **FAQs:** How do fixed departure dates work? What is included in the displayed price? What happens if a departure is changed or cancelled?
- **Internal links:** Individual group tour pages, destination hubs, package directory, visa/insurance services (if live), contact/support.
- **Schema:** CollectionPage + ItemList + BreadcrumbList. Individual real departures may use TouristTrip and Product/Offer if dates, availability and displayed prices are current.

#### Visa assistance — `/visa`

- **Primary keyword:** visa assistance from India
- **Secondary keywords:** tourist visa application help, visa document checklist, visa processing guidance, visa services by country
- **Intent:** Commercial / informational
- **Title:** `Visa Assistance for Indian Travellers | Get Trip Go`
- **Description:** `Get help preparing visa applications and document checklists for eligible destinations. Requirements, fees and processing times depend on nationality and the relevant authority.`
- **H1:** `Visa application guidance for your next trip`
- **H2 outline:** Destinations and visa types supported; Document checklist by destination; How our assistance works; Fees and processing-time caveats; Official embassy links; Visa assistance FAQs.
- **FAQs:** What documents may be needed for a tourist visa? How long does processing take? Does Get Trip Go issue or guarantee visas?
- **Internal links:** Country/destination hubs, flights, package detail pages, insurance (if live), contact/visa enquiry.
- **Schema:** Service + BreadcrumbList + visible FAQPage. Explicitly state that visa decisions are made by the relevant government/consulate; don't imply approval is guaranteed or that the agency is an authority.

#### Travel insurance — proposed `/travel-insurance`

- **Primary keyword:** travel insurance for trips from India
- **Secondary keywords:** international travel insurance, family travel insurance, trip cancellation cover, travel medical cover
- **Intent:** Commercial investigation
- **Title:** `Travel Insurance for Domestic & International Trips | Get Trip Go`
- **Description:** `Compare travel insurance options for your trip. Review medical, baggage, delay and cancellation benefits, exclusions, limits and insurer terms before purchase.`
- **H1:** `Choose travel insurance with cover that fits your trip`
- **H2 outline:** Types of cover; Compare benefits, limits and exclusions; How to choose by destination and trip; Claims and insurer contact; Travel insurance FAQs.
- **FAQs:** What does travel insurance commonly cover? Are pre-existing conditions or adventure activities covered? Who handles claims and what documents are required?
- **Internal links:** Destination hubs, package pages, flights, visa assistance and contact.
- **Schema:** Service + BreadcrumbList + FAQPage when the FAQs are visible. Link to insurer terms. Do not imply Get Trip Go underwrites policies unless it does.

#### Cruises — proposed `/cruises`

- **Primary keyword:** cruise holidays from India
- **Secondary keywords:** cruise packages, cruise itineraries, cruise cabin types, cruise departure dates
- **Intent:** Commercial investigation / transactional
- **Title:** `Cruise Holidays & Itineraries from India | Get Trip Go`
- **Description:** `Explore available cruise holidays by itinerary, sailing date, cabin type and inclusions. Check taxes, port fees, deposit and cancellation conditions before booking.`
- **H1:** `Explore cruise holidays and sailing itineraries`
- **H2 outline:** Available cruises and dates; Compare routes and cabin types; What's included in the fare; Deposits, taxes and cancellation; Cruise FAQs.
- **FAQs:** What is included in a cruise fare? Which documents and visas may be needed? What are the deposit and cancellation conditions?
- **Internal links:** Destination hubs, package pages, visa assistance, insurance and contact.
- **Schema:** CollectionPage + ItemList; individual purchasable sailing offers only when exact and current. Don't add a page until inventory/booking support exists.

#### Forex — proposed `/forex`

- **Primary keyword:** foreign currency exchange for travellers in India
- **Secondary keywords:** travel forex, currency exchange rates, international travel money, forex card
- **Intent:** Commercial / transactional
- **Title:** `Travel Forex & Currency Services | Get Trip Go`
- **Description:** `Review available foreign-currency and travel-money options, current rates, fees, delivery or pickup terms and required documents before placing a request.`
- **H1:** `Plan your travel money before you go`
- **H2 outline:** Available currency services; How rates and fees are shown; Documents and delivery; Safety and provider credentials; Forex FAQs.
- **FAQs:** When is an exchange rate locked? What fees and documents apply? Which regulated partner supplies the service?
- **Internal links:** Destination hubs, flights, package pages, visa assistance and contact.
- **Schema:** Service + BreadcrumbList + FAQPage if visible. Verify actual authorised-provider and regulatory disclosures with compliance before publication.

#### Villas — proposed `/villas`

- **Primary keyword:** holiday villa rentals for Indian travellers
- **Secondary keywords:** private villa stays, family villas, Bali villas, villa booking with support
- **Intent:** Commercial / transactional
- **Title:** `Holiday Villas for Your Next Trip | Get Trip Go`
- **Description:** `Explore available holiday villas by destination, dates, guest capacity and amenities. Review location, house rules, total price and cancellation terms before booking.`
- **H1:** `Find a holiday villa for your group`
- **H2 outline:** Available villa destinations; Compare capacity and amenities; Location, house rules and fees; Booking and cancellation; Villa FAQs.
- **FAQs:** How is the total villa price calculated? What deposit and house rules apply? How can I verify amenities and cancellation terms?
- **Internal links:** Destination hubs, hotel search, holiday packages, contact.
- **Schema:** CollectionPage + ItemList; use LodgingBusiness only for a specific real property with accurate property details. Don't publish an empty category page.

### 4.2 Destination hubs

Create stable, indexable destination hubs at `/destinations/{slug}` and keep existing package-detail URLs such as `/popular-destinations/bali-honeymoon-delight` unchanged. The current `/popular-destinations?destination=...` filter may remain for user filtering, but should not compete with destination hubs: canonicalize or noindex filter variants according to the final routing decision. Do not redirect established URLs until traffic/backlinks are checked and a one-to-one mapping is ready.

Every destination hub should include an original answer-first summary, who the destination suits, best time to visit with sources/date, practical arrival and local transport details, a realistic itinerary, budget basis, visa/entry guidance with official links, relevant live packages, author/reviewer and update date. Use first-party trip knowledge, not near-identical country templates. Never publish invented hotel availability, prices, visa rules or review counts.

#### Bali — `/destinations/bali`

- **Primary:** Bali holiday packages from India
- **Secondary / intent:** Bali itinerary, Bali honeymoon and family packages, Bali best time to visit; commercial investigation / booking
- **Title:** `Bali Holiday Packages & Itineraries from India | Get Trip Go`
- **Description:** `Plan a Bali trip from India with destination advice, sample itineraries and available holiday packages. Compare trip length, inclusions and current price basis.`
- **H1:** `Plan a Bali holiday from India`
- **H2s:** Where to stay: Ubud, Seminyak and the coast; Best time to visit Bali; 5–7 day Bali itinerary; Bali trip budget and package inclusions; Entry requirements for Indian travellers; Bali packages.
- **FAQs:** How many days are enough for Bali? Which Bali areas suit first-time visitors? What should Indian travellers check before departure?
- **Links:** Bali packages, flights, hotels, visa guidance, insurance (if live), custom itinerary, contact.
- **Schema:** TouristDestination/Place + BreadcrumbList + ItemList for linked packages; FAQPage only for visible Q&A.

#### Thailand — `/destinations/thailand`

- **Primary:** Thailand tour packages from India
- **Secondary / intent:** Bangkok and Pattaya packages, Phuket and Krabi itinerary, Thailand trip cost; commercial / transactional
- **Title:** `Thailand Tour Packages & Itineraries from India | Get Trip Go`
- **Description:** `Compare Thailand itineraries for Bangkok, Pattaya, Phuket and Krabi. See travel-time guidance, package inclusions and current departure options.`
- **H1:** `Plan a Thailand trip from India`
- **H2s:** Choose your Thailand route; Bangkok, Pattaya and beach itineraries; Best time to visit; Budget and what packages include; Current entry requirements; Thailand packages.
- **FAQs:** How many days should I plan for Thailand? Can Bangkok and Phuket fit in one trip? Which entry rules should Indian travellers verify?
- **Links:** Thailand packages, flights, hotels, visa page, insurance, custom trip and contact.
- **Schema:** TouristDestination/Place + BreadcrumbList + ItemList + visible FAQPage.

#### Kerala — `/destinations/kerala`

- **Primary:** Kerala tour packages
- **Secondary / intent:** Kerala backwater and houseboat packages, Kerala family itinerary, Munnar and Alleppey trip; commercial / transactional
- **Title:** `Kerala Tour Packages & Backwater Trips | Get Trip Go`
- **Description:** `Explore Kerala itineraries covering backwaters, hill country and coastal stops. Compare trip duration, transport, accommodation and package inclusions.`
- **H1:** `Plan a Kerala holiday around the places you want to see`
- **H2s:** Kerala routes from Kochi; Backwaters and houseboat stays; Munnar and hill-country days; Best season and monsoon planning; Kerala package options; Getting around.
- **FAQs:** How many days are good for a Kerala trip? Which places pair well with Alleppey? What should I know before booking a houseboat?
- **Links:** Kerala packages, flights, hotels, customized itinerary, relevant domestic tours, contact.
- **Schema:** TouristDestination/Place + BreadcrumbList + ItemList + visible FAQPage.

#### Maldives — `/destinations/maldives`

- **Primary:** Maldives holiday packages from India
- **Secondary / intent:** Maldives resort packages, Maldives budget and luxury stays, Maldives transfers; commercial / transactional
- **Title:** `Maldives Holiday Packages from India | Get Trip Go`
- **Description:** `Compare Maldives stays and packages by island, transfer type and meal plan. Check taxes, transfers, resort inclusions and the total price before booking.`
- **H1:** `Choose a Maldives stay that fits your trip`
- **H2s:** Resort islands and local islands; Seaplane and speedboat transfers; Meal plans and resort inclusions; Budget and total trip costs; Best time to visit; Maldives packages.
- **FAQs:** What is included in a Maldives package? Are transfers included in the displayed price? What extra taxes or resort fees should I check?
- **Links:** Maldives packages, flights, hotel search, insurance, custom trip, contact.
- **Schema:** TouristDestination/Place + BreadcrumbList + ItemList; Product/Offer only on qualifying package detail pages.

#### Dubai — `/destinations/dubai`

- **Primary:** Dubai holiday packages from India
- **Secondary / intent:** Dubai itinerary, Dubai family packages, Dubai visa guidance, Dubai trip cost; commercial / transactional
- **Title:** `Dubai Holiday Packages & Itineraries from India | Get Trip Go`
- **Description:** `Plan a Dubai trip with itinerary ideas, available holiday packages and clear inclusions. Check current entry rules, activity costs and travel dates.`
- **H1:** `Plan a Dubai holiday from India`
- **H2s:** Dubai in 3–6 days; Areas and attractions; Best time and event planning; Package inclusions and optional activities; Entry requirements; Dubai packages.
- **FAQs:** How many days should I spend in Dubai? Are attraction tickets included in a package? Which visa and entry rules should I check?
- **Links:** Dubai package, flights, hotels, visa assistance, insurance, custom itinerary and contact.
- **Schema:** TouristDestination/Place + BreadcrumbList + ItemList + visible FAQPage.

#### Georgia — `/destinations/georgia`

- **Primary:** Georgia tour packages from India
- **Secondary / intent:** Tbilisi and Kazbegi itinerary, Georgia holiday package, Georgia travel season; commercial / informational
- **Title:** `Georgia Tour Packages & Itineraries from India | Get Trip Go`
- **Description:** `Explore Georgia trip ideas for Tbilisi, mountain regions and historic stops. Compare available itineraries, travel time, inclusions and entry guidance.`
- **H1:** `Plan a Georgia trip from India`
- **H2s:** Tbilisi and regional routes; Sample 5–7 day itinerary; Best season and mountain conditions; Getting around; Entry requirements to verify; Georgia packages.
- **FAQs:** How many days are enough for Georgia? Can I visit Kazbegi as a day trip? What entry requirements apply to my passport?
- **Links:** Georgia package, flights, hotels, visa guidance, insurance, custom itinerary and contact.
- **Schema:** TouristDestination/Place + BreadcrumbList + ItemList + visible FAQPage.

#### Bhutan — `/destinations/bhutan`

- **Primary:** Bhutan tour packages from India
- **Secondary / intent:** Bhutan itinerary, Paro and Thimphu trip, Bhutan travel permit and fees; commercial / informational
- **Title:** `Bhutan Tour Packages & Travel Guide from India | Get Trip Go`
- **Description:** `Plan a Bhutan trip with route ideas, travel logistics and available packages. Verify current entry, permit and applicable fee requirements before travel.`
- **H1:** `Plan a Bhutan holiday with the right route and travel details`
- **H2s:** Paro, Thimphu and Punakha route; Tiger's Nest planning; Best time and altitude preparation; Entry permits and current fees; Package inclusions; Bhutan packages.
- **FAQs:** How many days should I plan for Bhutan? What should I know before the Tiger's Nest hike? Which permits and fees should I verify?
- **Links:** Bhutan package, flights, hotels, custom itinerary, insurance and contact.
- **Schema:** TouristDestination/Place + BreadcrumbList + ItemList + visible FAQPage. Date-stamp and source policy/fee statements.

#### Vietnam — `/destinations/vietnam`

- **Primary:** Vietnam tour packages from India
- **Secondary / intent:** Vietnam north to south itinerary, Hanoi and Ho Chi Minh City tour, Vietnam trip budget; commercial / transactional
- **Title:** `Vietnam Tour Packages & Itineraries from India | Get Trip Go`
- **Description:** `Compare Vietnam routes from Hanoi and Ha Long Bay to central and southern Vietnam. Review travel times, package inclusions and entry guidance.`
- **H1:** `Plan a Vietnam trip from north to south—or focus on one region`
- **H2s:** North, central and south Vietnam; 7–10 day route options; Travel times between regions; Best time by region; Visa and entry rules to verify; Vietnam packages.
- **FAQs:** How many days are needed for Vietnam? Is it practical to visit north and south in one trip? What visa requirements apply to Indian travellers?
- **Links:** Vietnam package, flights, hotels, visa assistance, insurance, custom itinerary and contact.
- **Schema:** TouristDestination/Place + BreadcrumbList + ItemList + visible FAQPage.

#### Kashmir — `/destinations/kashmir`

- **Primary:** Kashmir tour packages
- **Secondary / intent:** Kashmir itinerary, Srinagar and Gulmarg packages, Kashmir family trip, Kashmir winter travel; commercial / transactional
- **Title:** `Kashmir Tour Packages & Itineraries | Get Trip Go`
- **Description:** `Explore Kashmir trip ideas for Srinagar, Gulmarg and nearby valleys. Compare season, road transfers, hotel basis and package inclusions.`
- **H1:** `Plan a Kashmir trip by season, route and travel pace`
- **H2s:** Srinagar, Gulmarg and route options; Summer and winter planning; Road transfers and weather contingencies; Package pricing and inclusions; Kashmir packages.
- **FAQs:** How many days are enough for Kashmir? When is the best season for snow or gardens? Can weather change local transport plans?
- **Links:** Kashmir packages, flights, hotels, customized itinerary, insurance, contact.
- **Schema:** TouristDestination/Place + BreadcrumbList + ItemList + visible FAQPage.

#### Northeast India — `/destinations/northeast-india`

- **Primary:** Northeast India tour packages
- **Secondary / intent:** Northeast India itinerary, Assam and Meghalaya tours, Northeast India family trip, regional permits; commercial / informational
- **Title:** `Northeast India Tour Packages & Travel Routes | Get Trip Go`
- **Description:** `Explore Northeast India route ideas and available tours. Compare states, road travel time, seasonal conditions and any current permit requirements.`
- **H1:** `Plan a Northeast India trip one region at a time`
- **H2s:** Choose a state or route; Assam and Meghalaya sample itinerary; Road distances and travel pace; Best season and weather; Permit and local guidance to verify; Northeast India tours.
- **FAQs:** How many days are needed for Northeast India? Which states can be combined in one itinerary? What permits or local travel rules should I check?
- **Links:** Northeast India package, flights, hotels, customized itineraries, insurance, contact.
- **Schema:** TouristDestination/Place + BreadcrumbList + ItemList + visible FAQPage. Avoid treating the broad region as a single factual destination where state-specific rules differ.

### Content and page-quality rules for all briefs

1. Write unique page content from actual trip, product and support knowledge. Don't create near-duplicate destination pages by swapping place names.
2. Put a concise direct answer near the top, then the detail and caveats. Date-stamp details that change (prices, visa rules, fees, schedules) and link to authoritative primary sources.
3. Add a named author and, where useful, a real reviewer with relevant experience. Link to an author profile. Use factual experience, not invented credentials.
4. Use FAQs that answer real questions not already repeated verbatim in every page. Keep visible FAQ text and FAQ structured data identical.
5. Keep prices, inclusions, availability, cancellation terms and structured data synchronized from the same authoritative package record.

## 5. URL, navigation and internal linking

### Recommended structure (preserve established routes)

```text
/
├── flights/
├── hotels/
├── popular-destinations/                 (current package directory; keep)
│   └── {package-slug}/                   (current package detail; keep)
├── destinations/{destination-slug}/      (new destination hubs)
├── customized-itineraries/
│   └── {itinerary-slug}/                 (current)
├── group-departures/
│   └── {tour-slug}/                      (current)
├── visa/
├── travel-insurance/                     (only if service is live)
├── cruises/                              (only if service is live)
├── forex/                                (only if service is live)
├── villas/                               (only if service is live)
├── blog/{article-slug}/
└── contact/
```

Use lowercase, hyphenated, stable slugs. Keep one canonical trailing-slash convention (currently the site emits non-trailing-slash paths in many links). Do not rename live package URLs just to fit a new hierarchy; if migration is later justified, map every old URL to its closest replacement with one permanent 301 and update internal links, canonicals and sitemap together.

### Navigation and footer

- **Primary nav:** Flights, Hotels, Holiday packages, Group tours, Destinations, Travel guides.
- **Travel services menu:** Customized itineraries, Visa assistance, and only the other live services.
- **Persistent but secondary:** Help, My Trip, Contact. Do not treat account/transaction pages as SEO landing pages.
- **Footer columns:** Book travel; Destinations; Plan your trip; Company and support; Legal. Link only to live, indexable destinations and service pages. Link legal pages in a separate legal column.
- Add breadcrumbs on package, group tour, itinerary, destination and article pages. Breadcrumb text should match visible hierarchy and links.

### Internal-link rules

1. Home → service hubs and destination directory → destination hubs → relevant packages → booking/enquiry or contact.
2. Every package links back to its destination hub and to related flights/hotels or custom planning. Each destination hub links to at least one relevant, available package and back to the main package directory.
3. Editorial guides link contextually to relevant destination, service and package pages; product pages link to genuinely useful guides. Avoid sitewide exact-match anchor spam.
4. Replace generic labels with a meaningful destination/task, e.g. “Explore” → “Explore Bali holiday packages”; “Book” → “Request dates for the 6-day Bali package”; “View Tours” → “View fixed-departure Europe group tours”. Keep link text concise and accurate.
5. Use crawlable `<a href>` links for navigation. Buttons are for actions, not route navigation. Ensure mobile carousels do not hide the only links to important pages.
6. Audit every internal link for 200 destination, correct canonical host and useful anchor; remove or update links to 404/410 pages.

## 6. Technical SEO checklist for developers

### Crawl and index control

- [ ] Keep `https://gettripgo.com` as the preferred host. Test HTTP, `www`, non-`www`, trailing slash and case variants on representative URLs. Each non-canonical version should make one 301 hop to the final 200 URL. Existing `next.config.js` includes a `www` redirect and HSTS; verify the deployment edge also redirects initial HTTP requests.
- [ ] Confirm `robots.txt` is served as `text/plain` and includes `Sitemap: https://gettripgo.com/sitemap.xml`. Current `app/robots.ts` allows `/` and disallows `/api/`, `/blog/admin` and `/blog/write`. Add private route patterns such as `/admin/` only if applicable; robots is not access control.
- [ ] Keep the generated `robots.txt` equivalent to this policy, adjusting only after checking routes and authentication:

```text
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /blog/admin
Disallow: /blog/write

Sitemap: https://gettripgo.com/sitemap.xml
```

Do not add `Disallow: /*?*` or block CSS/JS required for rendering. Query filtering is handled with canonicals/robots meta, not a blanket robots rule.
- [ ] Never disallow a URL in robots if Google must crawl it to see a `noindex`. Protect private pages with authentication and `noindex`; disallowing does not secure them.
- [ ] Sitemap must contain only canonical, public, indexable 200 URLs. Add current `/flights`, `/hotels`, `/visa` and `/about` routes, plus other intended static pages and all published packages, tours, itineraries, destinations and articles. Exclude API, admin, account/booking lookup, filter/sort/tracking URLs, expired offers and unpublished content.
- [ ] Query the blog store for published posts only; confirm stable slug, canonical URL, real `lastModified`, and pagination if the list can exceed API limits. Do not silently lose all blog URLs when the store is unavailable: report the failure to monitoring and use an explicit operational fallback.
- [ ] Use actual content update dates for sitemap `lastModified`; omit the field when the date is unknown. Don't use `new Date()` for every unchanged page.
- [ ] Every public indexable page returns 200, has a self-canonical absolute URL, unique title/description, one descriptive H1 and crawlable body copy in server HTML. Use `noindex,follow` on internal search/filter-only variants where appropriate, and set canonical behavior explicitly.
- [ ] For `/popular-destinations?destination=...`, decide whether filter variants remain user-only. Prefer stable `/destinations/{slug}` hubs for organic landing pages; canonicalize/noindex the parameter variant consistently and keep it out of the sitemap.
- [ ] Apply a URL policy: clean content pages and package detail pages self-canonical; tracking-only parameters canonical to the clean URL; non-landing sort/filter variants `noindex,follow` and excluded from the sitemap; destination-filter URLs point users to the stable destination hub and are not separate index targets. Preserve crawlable pagination only where each page has unique, useful products and a stable URL.
- [ ] Audit soft 404s, redirect loops/chains, broken external links, 404/410/5xx responses and orphan pages with a crawler. Return real 404 for nonexistent slugs. Expired offers should be updated, redirected only to a close replacement, or return 410/404—not left as stale indexable offers.
- [ ] Submit the sitemap in Google Search Console and Bing Webmaster Tools; inspect representative URLs and rendered HTML after deployment.

### Rendering, duplication and crawl waste

- [ ] Server-render the content for `/blog/[slug]`; don't require localStorage, client-only fetches or post-hydration JS for article text and metadata.
- [ ] Inspect each client-heavy listing/filter and third-party widget in raw HTML and rendered HTML. Primary text, internal links, titles, canonical and robots directives must not depend on a click or an unexecuted script.
- [ ] Keep a single source of meaningful content for each responsive section. The current homepage's repeated “Explore Coupons” / “Discover Kenya” headings and desktop/mobile Travel Stories markup should not become repeated crawlable sections.
- [ ] Review query parameters, sort/filter combinations, UTM/tracking links, pagination and external-widget URLs in crawl logs. Preserve useful analytics parameters but canonicalize or noindex non-landing variants; avoid infinite crawl spaces.
- [ ] Use a consistent `<main>` landmark. The root layout currently wraps route children in a `<main>` while the homepage and several pages render their own `<main>`; remove nested/duplicate landmarks as components are touched.
- [ ] Remove or correct the WebSite `SearchAction` pointing at `/search` unless that endpoint exists and returns meaningful results. Use the actual logo file in Organization/TravelAgency structured data (`public/Logo-icon.png` or the verified official asset), not the currently referenced `/logo.png` unless that file is added.

### Canonicals, redirects and metadata

- [ ] Set `metadataBase` once, but set `alternates.canonical` for each public page from its exact route/data. Confirm canonical output on home, service, package, blog, destination and query-variant pages in rendered source.
- [ ] Use unique titles and descriptions that reflect the actual page; avoid keyword lists as a substitute for useful content. A title/description must not promise live comparison, lowest rates, verified reviews or guaranteed service unless true.
- [ ] Add Open Graph and social image metadata for key pages with a real, crawlable image. Check image URL status, dimensions and descriptive alt text.
- [ ] Redirect only changed/retired URLs. Keep a versioned redirect map, update internal links and sitemap, and validate one hop to a 200 final URL.
- [ ] Confirm 404 pages are not accidentally canonicalized to the homepage and noindex transactional pages such as `/my-trip` where they contain personal/account state.

### Mobile and Core Web Vitals

- [ ] Record field CWV at the 75th percentile for mobile and desktop in Search Console/PageSpeed Insights/CrUX where available: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1. Track URL groups and dates; lab Lighthouse is diagnostic, not field proof.
- [ ] Identify the actual LCP element on the homepage and representative package pages. Use a correctly sized responsive image, modern format, priority/preload only for that LCP image, and avoid competing mobile/desktop/offer preloads.
- [ ] Keep below-the-fold images lazy-loaded; specify image dimensions/aspect ratios; use `next/image` sizes that match rendered widths. Compress oversized uploads and verify the logo/hero aren't fetched at unnecessarily large dimensions.
- [ ] Profile JavaScript and third-party tags. Delay nonessential affiliate, ad, chat, analytics and map scripts until consent/interaction where appropriate. Remove unused widgets and fix or intentionally document CSP violations (a live browser session logged a blocked DoubleClick request); don't broadly weaken CSP.
- [ ] Reduce long main-thread tasks and hydration work; avoid mounting duplicate responsive sliders or content trees when a CSS layout can present one data set. Test search controls, mobile menu, carousel, modal and sticky booking CTA on a real narrow viewport.
- [ ] Prevent layout shifts by reserving space for images, embeds, fonts and banners. Test cookie/offer/WhatsApp overlays so they do not obscure primary mobile actions.
- [ ] Verify keyboard use, focus states, contrast, labels, touch target size, form errors and useful alt text. Do not put important copy solely in images.

### Validation after release

- [ ] Run a representative mobile/desktop crawl (home, all service hubs, one package of each type, destination hub, blog article, contact, expired/unknown slug).
- [ ] Validate sitemap XML, robots response, redirect matrix, canonicals, rendered HTML and structured data.
- [ ] Test JSON-LD with Schema.org Validator and Google Rich Results Test where a supported rich result applies. Fix warnings/errors that affect eligibility; don't add types solely to chase an enhancement.
- [ ] Compare mobile CWV field data after enough visits accumulate. Annotate deployments and don't judge SEO by a single Lighthouse number.
- [ ] Recheck Search Console index coverage, sitemap processing, canonical selection, crawl stats, page experience, manual actions and security issues after release.

## 7. Schema markup: ready-to-adapt JSON-LD

Use JSON-LD rendered in server HTML. Replace placeholders with values from the page's actual data, escape serialized values safely, and do not output empty or fabricated fields. `TravelAgency` is a Schema.org subtype of `LocalBusiness`; one accurate business node is preferable to duplicate conflicting LocalBusiness/Organization records.

### Organization / TravelAgency

Use verified public details only. The address and contact information below reflect the current site implementation; confirm them with the business before deployment. Ensure `logo` resolves to the actual official asset and `sameAs` profiles are controlled by the company.

```json
{
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": "https://gettripgo.com/#travel-agency",
  "name": "Get Trip Go",
  "url": "https://gettripgo.com/",
  "logo": "https://gettripgo.com/Logo-icon.png",
  "image": "https://gettripgo.com/Logo-icon.png",
  "telephone": "+91-96678-92504",
  "email": "contact@gettripgo.com",
  "foundingDate": "2016",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "First Floor, Office No.102, 52A, Vijay Block, Laxmi Nagar",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110092",
    "addressCountry": "IN"
  },
  "areaServed": [
    { "@type": "Country", "name": "India" }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-96678-92504",
    "contactType": "customer service",
    "email": "contact@gettripgo.com",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://www.instagram.com/gettripgo_official/",
    "https://www.facebook.com/gettripgo.official",
    "https://x.com/gettripgo",
    "https://www.youtube.com/@GettripGo"
  ]
}
```

If accurate and consistently displayed, add `geo`, `openingHoursSpecification` and a Google Business Profile `hasMap` URL. Do not use a street address or hours unless customers can verify them. Keep one authoritative entity ID across pages.

### BreadcrumbList

Generate names and links from the same breadcrumb data shown on the page.

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://gettripgo.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Bali holidays",
      "item": "https://gettripgo.com/destinations/bali"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "__VISIBLE_PACKAGE_NAME__",
      "item": "https://gettripgo.com/popular-destinations/__PACKAGE_SLUG__"
    }
  ]
}
```

### FAQPage

Include only questions and full answers visible on the same page. This is structured data, not a promise of FAQ rich results; Google limits FAQ rich-result display and can ignore otherwise valid markup.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many days are enough for Bali?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "__A_CURRENT, SPECIFIC_ANSWER_VISIBLE_ON_THIS_PAGE__"
      }
    },
    {
      "@type": "Question",
      "name": "Which Bali areas suit first-time visitors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "__A_CURRENT, SPECIFIC_ANSWER_VISIBLE_ON_THIS_PAGE__"
      }
    }
  ]
}
```

### TouristTrip

Use for a real itinerary with named locations and an actual provider. TouristTrip adds semantic context but does not itself guarantee a Google rich result.

```json
{
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "@id": "__CANONICAL_PACKAGE_URL__#trip",
  "name": "__VISIBLE_TRIP_NAME__",
  "description": "__UNIQUE_VISIBLE_PACKAGE_DESCRIPTION__",
  "url": "__CANONICAL_PACKAGE_URL__",
  "touristType": ["Families", "Couples"],
  "itinerary": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": { "@type": "Place", "name": "__REAL_STOP_1__" }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": { "@type": "Place", "name": "__REAL_STOP_2__" }
      }
    ]
  },
  "provider": {
    "@id": "https://gettripgo.com/#travel-agency"
  }
}
```

Use actual itinerary stops, not broad destination keywords in place of places. Add dates only when actual dates are available.

### Product and Offer

Use on a specific package page only when the package is genuinely purchasable, the price and availability are current, and the same terms appear visibly. A “from” price must identify its basis (such as date/room/occupancy) and must not be presented as a fixed final price. Do not apply Product markup to generic service/category pages.

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "__CANONICAL_PACKAGE_URL__#product",
  "name": "__VISIBLE_PACKAGE_NAME__",
  "description": "__VISIBLE_PACKAGE_DESCRIPTION__",
  "image": ["__ABSOLUTE_IMAGE_URL__"],
  "sku": "__STABLE_PACKAGE_ID__",
  "brand": {
    "@type": "Brand",
    "name": "Get Trip Go"
  },
  "offers": {
    "@type": "Offer",
    "url": "__CANONICAL_PACKAGE_URL__",
    "priceCurrency": "INR",
    "price": "__CURRENT_NUMERIC_PRICE__",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@id": "https://gettripgo.com/#travel-agency"
    }
  }
}
```

Set `availability` accurately (`InStock`, `PreOrder`, or `SoldOut`) and remove an expired Offer or price. Include `priceValidUntil` only when there is a real validity date. Do not imply instant online booking where the CTA is only an enquiry.

### Review / AggregateRating — only with genuine reviews

Do not emit this unless the rating/count come from real, traceable reviews, the same rating and review count are visible on the page, and the review source/terms permit reuse. Never mark up fabricated, imported without rights, or staff-written reviews. Google does not generally show self-serving review snippets for an Organization/LocalBusiness about itself. A rating on an individual product must refer to that product, not the company overall.

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "__VISIBLE_PACKAGE_NAME__",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "__REAL_VISIBLE_AVERAGE__",
    "reviewCount": "__REAL_VISIBLE_REVIEW_COUNT__"
  }
}
```

## 8. Conversion, trust and AI-search readiness

### Price and booking clarity

- Label each package card and detail page `From ₹X per person` only when the displayed amount really is a starting price. Directly state the basis: travel date/season, room category, occupancy, minimum travellers, flight inclusion and applicable taxes.
- Show an inclusions list, exclusions list, optional add-ons, taxes/fees, departure dates and availability near the price. Use the same package record for page copy, enquiry summary and schema.
- Explain the booking steps: enquiry/selection → quote and availability confirmation → payment schedule → documents/vouchers. Make clear when an enquiry is not yet a confirmed booking.
- Provide cancellation/change rules with time cut-offs and supplier-specific exceptions. Link terms next to the CTA, not only in the footer.
- Show real contact hours and response expectations. Reconcile any “24/7 support” promise with the published business hours before using it.
- Put one clear action beside price: “Request dates and final price” for enquiry-led packages, or “Continue to booking” only when a working checkout exists. Use a visible phone/WhatsApp alternative without stacking competing promotional CTAs.
- Add reviews only with source, date/context and permission. Make payment providers/secure-payment claims verifiable.

### AI search and answer engines

- Make essential facts and answers available in server-rendered text; no special AI-only page or hidden keyword block.
- Start key guides with a concise, direct answer, then explain method, caveats, dates and sources. Use descriptive headings, short lists, tables for comparisons and stable page citations.
- Add real author/reviewer names, experience and an accessible profile; use `datePublished`/`dateModified` when truthful.
- Publish first-hand advice, actual itineraries, inclusions and operational expertise that can be cited. Link to primary visa/transport/official destination sources and state when details were last checked.
- Keep Organization, service, destination and package entities consistent across visible text, internal links and schema. Schema is a description of visible facts, not a shortcut to AI citations.
- Allow reputable search crawlers in `robots.txt`; monitor Google Search Console and Bing Webmaster Tools. Do not promise citations or rankings in ChatGPT, Perplexity or AI Overviews, and do not assume `llms.txt` improves Google rankings.

## 9. Delivery schedule

### Quick wins (days 1–7)

- Record baselines: Search Console 28-day clicks/impressions/indexing; GA4 organic landing page/enquiry/booking data; mobile PSI/Lighthouse for home, service, package and blog; crawl export of status, canonical, title, H1, links and indexability.
- Add `/flights`, `/hotels`, `/visa`, `/about` and other approved existing indexable URLs to the sitemap; remove private/utility URLs and filter variants. Check sitemap submission and URL counts.
- Confirm each main route's final host, status code, canonical, title, description, H1, robots and rendered content.
- Update homepage title, description, visible H1 and introductory copy; keep existing theme/hero.
- Remove duplicate responsive homepage headings/sections and correct story cards to link to actual articles.
- Correct the logo URL and remove the nonexistent SearchAction unless `/search` is implemented.
- Add accurate package price basis labels, booking CTA wording and support hours to the highest-traffic packages.

### 30-day plan

- Fix blog article server rendering and metadata; publish only real posts and filter sitemap to published status.
- Implement stable destination hubs for the first four highest-demand destinations, selected using Search Console/booking data. Add unique content, sources, breadcrumbs, links and FAQs.
- Set explicit canonicals and query/filter indexation behavior on all current route types.
- Audit HTTP/www/slash redirects, broken links, sitemap/robots, 404s, orphan pages and expired offers; repair high-impact failures.
- Reorder homepage sections to the wireframe, retain brand components and remove duplicated coupons/offers. Ensure core services remain discoverable on mobile.
- Establish real price, inclusions, exclusions, cancellation and support content on all active package templates.
- Add and validate breadcrumbs, FAQPage and Product/Offer/TouristTrip selectively using only eligible/current data.
- Diagnose field and lab CWV; fix the top mobile LCP/CLS/INP issue before general visual polish.

### 60-day plan

- Publish remaining six destination hubs using query demand and inventory/support capacity; interlink every hub with relevant live packages.
- Create service content pages for insurance, cruises, forex or villas only after product/operations confirms each service is live, legally supportable and bookable.
- Improve service page depth, internal links, title/H1/FAQ copy and mobile conversion path.
- Add author profiles, editorial review dates and primary-source references to travel guides.
- Tune images, font loading, third-party widgets and client-side interactions against field CWV. Re-test booking/search journeys on mobile.
- Review sitemap indexation, canonical selection, crawl stats, query URL coverage and organic landing page engagement; adjust content priority based on evidence.

### 90-day plan

- Refresh pages using actual search query and conversion data; consolidate overlapping or low-value pages and redirect only where there is a close equivalent.
- Expand the most successful destination hubs into useful sub-guides (season, itinerary, travel logistics) where unique expertise exists; link them back to destination and package pages.
- Run controlled CTA/price clarity tests without changing brand identity; compare qualified enquiry and booking conversion, not clicks alone.
- Review expired package/departure handling, stale visa/destination claims and author/reviewer accuracy on a scheduled cadence.
- Re-run technical crawl and CWV review; compare to the baseline and close remaining P0/P1 issues. Target the agreed SEO audit score of 80+ in the same scoring tool, but use Search Console organic visibility and GA4 qualified conversions as the business outcome.

## 10. Measurement plan

### Google Search Console

| KPI | Segment / view | Frequency | Success signal |
|---|---|---|---|
| Organic clicks and impressions | Non-brand vs brand; page type; destination/service query; country/device | Weekly, 28-day comparison | More qualified non-brand clicks to intended landing pages without losing brand traffic. |
| CTR and average position | By query and landing page; compare similar position bands | Weekly/monthly | Better CTR after titles/snippets and improved position for priority terms; do not judge CTR without position/context. |
| Index coverage and sitemap status | Submitted vs indexed; discovered/crawled not indexed; excluded; canonical selected | Weekly during rollout, then monthly | Intended canonical pages indexed; duplicate/filter/utility URLs excluded for the right reason. |
| CWV field status | Mobile and desktop URL groups; LCP, INP, CLS | Monthly / after sufficient field data | More URLs pass all CWV thresholds at the 75th percentile. |
| Crawl and technical signals | Crawl stats, 404/5xx, robots, duplicate/canonical issues, manual/security actions | Monthly and after releases | Fewer errors, no unexpected blocks, stable crawl of important pages. |

### GA4

- Track events with clear names and parameters: `flight_search_submitted`, `hotel_search_submitted`, `package_view`, `enquiry_started`, `enquiry_submitted`, `whatsapp_click`, `phone_click`, `booking_started`, `booking_completed`, `newsletter_signup`.
- Attach `page_type`, `destination`, `package_id`, `currency`, `displayed_price_basis`, `source/medium` and consent-compliant campaign data where applicable. Do not send personally identifiable information in analytics.
- Report organic landing sessions, engaged sessions, qualified enquiries, booking starts/completions, revenue (if transaction data is accurate), conversion rate and cancellation/refund rate by service/destination/page type.
- Separate click intent from completed lead/booking. A rising organic click count with no qualified enquiries is not a successful outcome.
- Use a 28-day pre-change baseline and comparable post-release periods; annotate deployments, campaigns and seasonality.

## 11. Definition of done

The first release is complete when the sitemap and robots responses are valid; every intended landing page has a 200 response, unique metadata, explicit canonical and server-rendered primary content; private/filter URLs are controlled; homepage repetition is reduced without changing brand identity; core mobile navigation and booking actions are usable; schema validates and matches visible facts; and the release has a Search Console/GA4/CWV baseline for follow-up.
