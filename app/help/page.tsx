"use client";

import { useState, useRef } from "react";

const BG = "#F8F9FF";

const categories = [
  { id: "all", label: "All Topics", icon: "🗂️" },
  { id: "bookings", label: "Bookings", icon: "✈️" },
  { id: "cancellations", label: "Cancellations & Refunds", icon: "↩️" },
  { id: "payments", label: "Payments", icon: "💳" },
  { id: "visa", label: "Visa & Documents", icon: "🛂" },
  { id: "insurance", label: "Travel Insurance", icon: "🛡️" },
  { id: "hotels", label: "Hotels & Stays", icon: "🏨" },
  { id: "account", label: "Account & Profile", icon: "👤" },
];

const faqs = [
  // Bookings
  { category: "bookings", q: "How do I book a flight on Get Trip Go?", a: "Select 'Flights' on the homepage, enter your origin, destination, and travel dates, choose your fare type, and click SEARCH. Pick a flight from the results and follow the checkout steps to confirm your booking." },
  { category: "bookings", q: "Can I book for multiple travellers?", a: "Yes! Click 'Travellers & Class' in the search box to add adults, children, or infants. Each traveller's details can be entered during checkout." },
  { category: "bookings", q: "What are the available fare types?", a: "We offer Regular fares, Student fares (up to ₹500 off), Armed Forces fares (up to ₹1000 off), and Senior Citizen fares (up to ₹1200 off). Discounted fares require valid ID at check-in." },
  { category: "bookings", q: "Can I book international flights?", a: "Yes! We support international flight bookings to 150+ countries. You can compare fares across airlines and book multi-city itineraries all in one go." },
  { category: "bookings", q: "Do you offer group booking discounts?", a: "Absolutely. Groups of 10+ travellers qualify for exclusive pricing and dedicated support. Contact our Group Departures desk for a custom quote." },
  { category: "bookings", q: "How do I add baggage to my booking?", a: "After selecting your flight, you can add extra baggage during the checkout process under 'Add-ons'. You can also add baggage later from 'My Trip' if the airline allows it." },
  { category: "bookings", q: "Can I select my seat during booking?", a: "Yes, seat selection is available for most airlines during or after booking. Go to 'My Trip' → select your booking → click 'Select Seat'. Some airlines may charge a fee." },
  { category: "bookings", q: "How do I get my e-ticket?", a: "Your e-ticket is sent to your registered email within minutes of booking. You can also download it anytime from 'My Trip' in the navigation bar." },
  { category: "bookings", q: "Can I book a round trip?", a: "Yes! Select 'Round Trip' on the search form, enter your travel dates for both outbound and return, and we'll show you the best combined fares." },
  { category: "bookings", q: "What is a multi-city booking?", a: "A multi-city booking lets you book multiple flights with different origins and destinations in one transaction. Great for complex itineraries like Delhi → Dubai → London → Delhi." },

  // Cancellations
  { category: "cancellations", q: "How do I cancel my booking?", a: "Go to 'My Trip' in the top navigation, find your booking, and select 'Cancel Booking'. Refund eligibility depends on the airline's cancellation policy." },
  { category: "cancellations", q: "How long does a refund take?", a: "Refunds are typically processed within 7–10 business days to your original payment method. UPI refunds may arrive within 2–3 business days." },
  { category: "cancellations", q: "What is the cancellation fee?", a: "Cancellation fees vary by airline and fare type. The exact fee is displayed before you confirm cancellation. Some promotional fares may be non-refundable." },
  { category: "cancellations", q: "What if my flight gets cancelled by the airline?", a: "If an airline cancels your flight, you're entitled to a full refund or free rebooking. Get Trip Go will notify you via email/SMS and our support team will proactively reach out." },
  { category: "cancellations", q: "Can I reschedule instead of cancelling?", a: "Yes! Many airlines allow date changes for a fee. Go to 'My Trip' → select your booking → click 'Change Date'. The fare difference and change fee (if any) will be shown." },
  { category: "cancellations", q: "What is a partial cancellation?", a: "If you've booked for multiple travellers, you can cancel for one or more travellers without cancelling the entire booking. Select specific travellers during the cancellation process." },

  // Payments
  { category: "payments", q: "What payment methods are accepted?", a: "We accept all major credit/debit cards, UPI (GPay, PhonePe, Paytm), net banking, and EMI options. All transactions are secured with 256-bit SSL encryption." },
  { category: "payments", q: "Why was my payment declined?", a: "Payments can fail due to incorrect card details, insufficient balance, bank restrictions on online transactions, or a timeout. Please retry or try a different payment method." },
  { category: "payments", q: "Do you offer EMI or pay-later options?", a: "Yes! We support EMI through major credit cards (3, 6, 12 months) and buy-now-pay-later via partners like LazyPay and ZestMoney. Look for the EMI option at checkout." },
  { category: "payments", q: "How do I apply a promo code?", a: "During checkout, you'll see an 'Apply Coupon' field. Enter your code there before making payment. Some codes are user-specific or valid only on certain routes." },
  { category: "payments", q: "Is it safe to pay on Get Trip Go?", a: "Absolutely. We use 256-bit SSL encryption for all transactions. Your card details are never stored on our servers. All payments are processed through PCI-DSS compliant gateways." },
  { category: "payments", q: "I was charged but didn't get a confirmation. What do I do?", a: "This can happen if the transaction timed out. Please wait 30 minutes and check your email. If no confirmation arrives, contact support with your transaction ID and we'll resolve it immediately." },
  { category: "payments", q: "Can I pay in foreign currency?", a: "Yes, you can pay in USD, AED, EUR, GBP and other major currencies using an international card. Select your currency from the currency switcher in the navbar before checkout." },

  // Visa
  { category: "visa", q: "Does Get Trip Go help with visa applications?", a: "Yes! We offer visa assistance for 50+ countries including UAE, Thailand, Singapore, UK, USA, Schengen and more. Select 'Visa' from the homepage services to get started." },
  { category: "visa", q: "How long does visa processing take?", a: "Processing times vary by country. UAE e-visa takes 3–5 working days, Schengen takes 10–15 days, and US visa depends on appointment availability. We'll guide you through the timeline." },
  { category: "visa", q: "What documents are needed for a visa?", a: "Typically you need a valid passport (6 months validity), recent photographs, flight itinerary, hotel bookings, bank statements, and travel insurance. Requirements vary by destination." },
  { category: "visa", q: "Do you offer visa on arrival assistance?", a: "Yes, we provide information and documentation support for countries offering visa on arrival or e-visa like Thailand, Indonesia, Sri Lanka, Egypt, and more." },
  { category: "visa", q: "What if my visa gets rejected?", a: "We'll help you understand the reason for rejection and guide you on reapplication. Our success rate is 97%+. Service fees are non-refundable, but we'll support you through the process." },
  { category: "visa", q: "Can you get visa for the entire family?", a: "Yes! We handle individual and group/family visa applications. All family members can apply together through our portal with a single point of contact." },

  // Insurance
  { category: "insurance", q: "What travel insurance plans do you offer?", a: "We offer Individual, Family Floater, and Senior Citizen plans. Coverage includes trip cancellation, medical emergencies, lost baggage, flight delays, and personal accidents." },
  { category: "insurance", q: "How do I buy travel insurance on Get Trip Go?", a: "Click 'Travel Insurance' on the homepage, choose your destination and travel dates, compare plans, and buy in under 5 minutes. Your policy document is emailed instantly." },
  { category: "insurance", q: "Does insurance cover COVID-19?", a: "Yes, our premium plans cover COVID-19 related medical expenses, trip cancellations due to positive test results, and quarantine costs. Check plan details before purchase." },
  { category: "insurance", q: "How do I make an insurance claim?", a: "Call our 24/7 claims helpline or visit the insurance section in 'My Trip'. Submit required documents (medical bills, police report, etc.) and claims are typically settled within 7–14 days." },
  { category: "insurance", q: "Is pre-existing medical condition covered?", a: "Some plans offer limited coverage for pre-existing conditions. Declare all pre-existing conditions accurately at the time of purchase to ensure your claim is not rejected." },

  // Hotels
  { category: "hotels", q: "How do I book a hotel on Get Trip Go?", a: "Click 'Hotels' on the homepage, enter your destination, check-in/check-out dates, and number of guests. Browse results and book your preferred hotel in a few clicks." },
  { category: "hotels", q: "Is breakfast included in hotel bookings?", a: "Meal inclusions depend on the room type selected. Look for 'Breakfast Included' or 'All Inclusive' tags on the hotel listing. You can also filter hotels by meal plan." },
  { category: "hotels", q: "Can I cancel a hotel booking?", a: "Yes, most hotels allow free cancellation up to 24–48 hours before check-in. The exact policy is shown on the booking page. Non-refundable rates are cheaper but cannot be cancelled." },
  { category: "hotels", q: "How do I get my hotel voucher?", a: "Your hotel voucher is sent to your registered email after booking. You can also download it from 'My Trip'. Present this voucher at the hotel during check-in." },

  // Account
  { category: "account", q: "How do I create an account?", a: "Click 'Sign Up' on the top right, enter your email or mobile number, and verify with an OTP. You can also sign in with Google or Facebook." },
  { category: "account", q: "How do I view my past bookings?", a: "Log in and click 'My Trip' in the navigation bar. All your upcoming and past bookings will be listed there with full details." },
  { category: "account", q: "How do I update my profile details?", a: "Go to 'My Account' → 'Edit Profile'. You can update your name, email, phone number, and travel preferences. Some fields may require OTP verification." },
  { category: "account", q: "How do I reset my password?", a: "Click 'Forgot Password' on the login page, enter your registered email, and follow the reset link sent to your inbox. Links expire in 30 minutes." },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HelpCenterPage() {
  const [activeCat, setActiveCat] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [helpful, setHelpful] = useState<Record<number, "yes" | "no">>({});

  // Callback form
  const [callbackForm, setCallbackForm] = useState({ name: "", phone: "", time: "" });
  const [callbackDone, setCallbackDone] = useState(false);

  // Message form
  const [msgForm, setMsgForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [msgSent, setMsgSent] = useState(false);

  // Sidebar ref for height sync
  const sidebarRef = useRef<HTMLDivElement>(null);

  const filtered = faqs.filter(f => {
    const matchCat = activeCat === "all" || f.category === activeCat;
    const q = search.toLowerCase();
    const matchSearch = q === "" || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const submitCallback = () => {
    if (!callbackForm.name || !callbackForm.phone) return;
    setCallbackDone(true);
  };

  const submitMsg = () => {
    if (!msgForm.name || !msgForm.email || !msgForm.message) return;
    setMsgSent(true);
    setTimeout(() => {
      setMsgSent(false);
      setMsgForm({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div style={{ backgroundColor: BG, minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ── */}
      <div style={{ backgroundColor: BG }} className="py-16 sm:py-24 px-4 text-center border-b border-gray-200">
        <p className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-3">Help Center</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          How can we help you?
        </h1>
        <p className="text-gray-500 text-base max-w-lg mx-auto mb-8">
          Find instant answers about bookings, refunds, payments and more — or reach our team directly.
        </p>
        <div className="max-w-xl mx-auto relative">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search for answers…"
            className="w-full bg-white border border-gray-200 rounded-2xl pl-12 pr-5 py-4 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          />
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ── SIDEBAR ── */}
          <aside className="lg:w-64 flex-shrink-0 lg:sticky lg:top-4" ref={sidebarRef}>

            {/* Category buttons */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 px-2">Browse by topic</p>
              {categories.map(cat => {
                const count = cat.id === "all" ? faqs.length : faqs.filter(f => f.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => { setActiveCat(cat.id); setOpenFaq(null); }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all mb-1 ${
                      activeCat === cat.id
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{cat.icon}</span>
                      <span>{cat.label}</span>
                    </span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      activeCat === cat.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                    }`}>{count}</span>
                  </button>
                );
              })}
            </div>

            {/* Callback box */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
              <p className="text-sm font-bold text-gray-900 mb-1">🔔 Request a Callback</p>
              <p className="text-xs text-gray-500 mb-4">We'll call you at your preferred time.</p>
              {callbackDone ? (
                <div className="text-center py-3 text-sm font-semibold text-green-600">✓ Scheduled! We'll call you soon.</div>
              ) : (
                <div className="space-y-2">
                  <input aria-label="Your name" type="text" placeholder="Your name" value={callbackForm.name}
                    onChange={e => setCallbackForm({ ...callbackForm, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400" />
                  <input aria-label="+91 phone number" type="text" placeholder="+91 phone number" value={callbackForm.phone}
                    onChange={e => setCallbackForm({ ...callbackForm, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400" />
                  <select value={callbackForm.time}
                    onChange={e => setCallbackForm({ ...callbackForm, time: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 text-gray-600">
                    <option value="">Preferred time</option>
                    <option>9 AM – 12 PM</option>
                    <option>12 PM – 3 PM</option>
                    <option>3 PM – 6 PM</option>
                    <option>6 PM – 9 PM</option>
                  </select>
                  <button onClick={submitCallback}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors">
                    Schedule Callback →
                  </button>
                </div>
              )}
            </div>
          </aside>

          {/* ── FAQ Panel — scrolls to match sidebar height ── */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-gray-900">
                {categories.find(c => c.id === activeCat)?.label}
              </h2>
              <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                {filtered.length} articles
              </span>
            </div>

            {/* FAQ scrollable — height matches sidebar */}
            <div
              className="overflow-y-auto pr-1"
              style={{
                height: "670px",
                scrollbarWidth: "thin",
                scrollbarColor: "#e5e7eb transparent"
              }}
            >
              {filtered.length === 0 ? (
                <div className="text-center py-16 text-gray-400">
                  <div className="text-4xl mb-3">🔎</div>
                  <p className="font-semibold">No results for "{search}"</p>
                </div>
              ) : (
                <div className="space-y-2 pb-4">
                  {filtered.map((faq, i) => {
                    const isOpen = openFaq === i;
                    return (
                      <div key={i}
                        className={`bg-white rounded-2xl border transition-all ${
                          isOpen ? "border-blue-200 shadow-md" : "border-gray-100 shadow-sm"
                        }`}
                      >
                        <button
                          className="w-full flex items-center gap-3 px-5 py-4 text-left"
                          onClick={() => setOpenFaq(isOpen ? null : i)}
                        >
                          <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all ${
                            isOpen ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400"
                          }`}>{i + 1}</span>
                          <span className="flex-1 text-sm font-medium text-gray-800">{faq.q}</span>
                          <span
                            className={`w-6 h-6 rounded-md border flex items-center justify-center text-sm flex-shrink-0 transition-all ${
                              isOpen ? "bg-blue-600 border-blue-600 text-white" : "border-gray-200 text-gray-400"
                            }`}
                            style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                          >+</span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pl-[60px]">
                            <div className="text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                              {faq.a}
                              <div className="flex items-center gap-2 mt-3">
                                {helpful[i] ? (
                                  <span className="text-xs font-semibold text-green-600">
                                    {helpful[i] === "yes" ? "👍 Thanks for the feedback!" : "👎 We'll improve this."}
                                  </span>
                                ) : (
                                  <>
                                    <span className="text-xs text-gray-400">Was this helpful?</span>
                                    <button onClick={() => setHelpful({ ...helpful, [i]: "yes" })}
                                      className="text-xs font-bold px-3 py-1 rounded-full border border-gray-200 text-gray-500 hover:bg-green-50 hover:border-green-400 hover:text-green-600 transition-all">Yes</button>
                                    <button onClick={() => setHelpful({ ...helpful, [i]: "no" })}
                                      className="text-xs font-bold px-3 py-1 rounded-full border border-gray-200 text-gray-500 hover:bg-red-50 hover:border-red-400 hover:text-red-600 transition-all">No</button>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTACT CARDS ── */}
      <div style={{ backgroundColor: BG }} className="border-t border-gray-200 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Get in touch</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Still need help?</h2>
          <p className="text-sm text-gray-500 mb-8">Our support team is available Mon–Sat, 9 AM – 9 PM IST.</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { icon: "📞", badge: "Live", badgeColor: "bg-green-100 text-green-700", label: "Call Us", value: "+91 96 6789 2504", sub: "Mon–Sat · 9 AM – 9 PM" },
              { icon: "✉️", badge: "2hr reply", badgeColor: "bg-orange-100 text-orange-700", label: "Email", value: "contact@gettripgo.com", sub: "Reply within 2 hours" },
              { icon: "💬", badge: "24/7", badgeColor: "bg-blue-100 text-blue-700", label: "WhatsApp", value: "Chat instantly", sub: "Available 24/7" },
              { icon: "📍", badge: "HQ", badgeColor: "bg-purple-100 text-purple-700", label: "Office", value: "102, Vijay Block", sub: "Laxmi Nagar, New Delhi" },
            ].map(c => (
              <div key={c.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
                <span className="text-2xl block mb-3">{c.icon}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c.badgeColor} mb-2 inline-block`}>{c.badge}</span>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{c.label}</p>
                <p className="text-sm font-semibold text-gray-900 mb-1">{c.value}</p>
                <p className="text-xs text-gray-400">{c.sub}</p>
              </div>
            ))}
          </div>

          {/* Send message form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-xl">📝</div>
              <div>
                <p className="text-sm font-bold text-gray-900">Send us a message</p>
                <p className="text-xs text-gray-400">We'll reply within 2 hours on business days</p>
              </div>
            </div>
            {msgSent ? (
              <div className="text-center py-6 text-green-600 font-semibold">✓ Message sent! We'll reply within 2 hours.</div>
            ) : (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 block">Full Name</label>
                    <input aria-label="Rahul Sharma" type="text" placeholder="Rahul Sharma" value={msgForm.name}
                      onChange={e => setMsgForm({ ...msgForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 block">Email Address</label>
                    <input aria-label="rahul@example.com" type="email" placeholder="rahul@example.com" value={msgForm.email}
                      onChange={e => setMsgForm({ ...msgForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 block">Subject</label>
                  <input aria-label="e.g. Refund for booking GTG-2024-XXX" type="text" placeholder="e.g. Refund for booking GTG-2024-XXX" value={msgForm.subject}
                    onChange={e => setMsgForm({ ...msgForm, subject: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400" />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 block">Message</label>
                  <textarea rows={4} placeholder="Describe your issue in detail…" value={msgForm.message}
                    onChange={e => setMsgForm({ ...msgForm, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 resize-none" />
                </div>
                <button onClick={submitMsg}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors">
                  Send Message →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── CTA STRIP ── */}
      <div style={{ backgroundColor: BG }} className="border-t border-gray-200 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-gray-900 font-bold text-lg mb-1">Travel with confidence</p>
            <p className="text-gray-500 text-sm">50,000+ travellers trust us every month. We're always here when you need us.</p>
          </div>
          <div className="flex gap-3">
            <a href="tel:+919667892504"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors whitespace-nowrap">
              📞 Call Now
            </a>
            <a href="https://wa.me/919667892504"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold text-sm px-5 py-3 rounded-xl transition-colors whitespace-nowrap">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}