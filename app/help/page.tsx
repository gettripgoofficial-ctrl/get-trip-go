"use client";
import { useState } from "react";

const faqs = [
  {
    category: "Bookings",
    icon: "✈️",
    questions: [
      {
        q: "How do I book a flight on Get Trip Go?",
        a: "Select 'Flights' on the homepage, enter your origin, destination, and travel dates, choose your fare type, and click SEARCH. Pick a flight from the results and follow the checkout steps to confirm your booking.",
      },
      {
        q: "Can I book for multiple travellers?",
        a: "Yes! Click 'Travellers & Class' in the search box to add adults, children, or infants. Each traveller's details can be entered during checkout.",
      },
      {
        q: "What are the available fare types?",
        a: "We offer Regular fares, Student fares (up to ₹500 off), Armed Forces fares (up to ₹1000 off), and Senior Citizen fares (up to ₹1200 off). Discounted fares require valid ID at check-in.",
      },
    ],
  },
  {
    category: "Cancellations & Refunds",
    icon: "🔄",
    questions: [
      {
        q: "How do I cancel my booking?",
        a: "Go to 'My Trip' in the top navigation, find your booking, and select 'Cancel Booking'. Refund eligibility depends on the airline's cancellation policy.",
      },
      {
        q: "How long does a refund take?",
        a: "Refunds are typically processed within 7–10 business days to your original payment method. UPI refunds may arrive within 2–3 business days.",
      },
      {
        q: "What is the cancellation fee?",
        a: "Cancellation fees vary by airline and fare type. The exact fee is displayed before you confirm cancellation. Some promotional fares may be non-refundable.",
      },
    ],
  },
  {
    category: "Payments",
    icon: "💳",
    questions: [
      {
        q: "What payment methods are accepted?",
        a: "We accept all major credit/debit cards, UPI (GPay, PhonePe, Paytm), net banking, and EMI options. All transactions are secured with 256-bit SSL encryption.",
      },
      {
        q: "Why was my payment declined?",
        a: "Payments can fail due to incorrect card details, insufficient balance, bank restrictions on online transactions, or a timeout. Please retry or try a different payment method.",
      },
    ],
  },
  {
    category: "Account & Profile",
    icon: "👤",
    questions: [
      {
        q: "How do I create an account?",
        a: "Click 'Sign Up' on the top right, enter your email or mobile number, and verify with an OTP. You can also sign in with Google or Facebook.",
      },
      {
        q: "How do I view my past bookings?",
        a: "Log in and click 'My Trip' in the navigation bar. All your upcoming and past bookings will be listed there with full details.",
      },
    ],
  },
];

export default function HelpCenterPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [search, setSearch] = useState("");

  const toggle = (key: string) =>
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));

  const filtered = faqs
    .map((cat) => ({
      ...cat,
      questions: cat.questions.filter(
        (item) =>
          search === "" ||
          item.q.toLowerCase().includes(search.toLowerCase()) ||
          item.a.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.questions.length > 0);

  return (
    <main className="min-h-screen bg-[#f5f7ff]">
      {/* Hero */}
      <section className="bg-[#2B3FDE] text-white py-20 px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3">
          Help Center
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          How can we help you?
        </h1>
        <p className="text-blue-100 mb-10 max-w-lg mx-auto">
          Find answers to common questions about bookings, payments, refunds,
          and more.
        </p>
        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your question…"
            className="w-full rounded-2xl px-6 py-4 text-gray-800 text-base shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
            🔍
          </span>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 text-lg py-20">
            No results found for "{search}". Try a different keyword or{" "}
            <a href="/contact" className="text-[#2B3FDE] underline">
              contact support
            </a>
            .
          </p>
        )}
        {filtered.map((cat) => (
          <div key={cat.category} className="mb-10">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>{cat.icon}</span> {cat.category}
            </h2>
            <div className="space-y-3">
              {cat.questions.map((item, i) => {
                const key = `${cat.category}-${i}`;
                const isOpen = !!openItems[key];
                return (
                  <div
                    key={key}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                  >
                    <button
                      onClick={() => toggle(key)}
                      className="w-full text-left px-6 py-5 flex justify-between items-center font-medium text-gray-800 hover:bg-blue-50 transition-colors"
                    >
                      <span>{item.q}</span>
                      <span className="ml-4 text-[#2B3FDE] text-xl flex-shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* Still need help CTA */}
      <section className="text-center pb-20 px-4">
        <div className="inline-block bg-white rounded-3xl shadow-md border border-gray-100 px-10 py-10 max-w-md">
          <p className="text-2xl mb-2">🙋</p>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Still need help?
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Our support team is available Mon–Sat, 9 AM – 9 PM IST.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#2B3FDE] text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Support →
          </a>
        </div>
      </section>
    </main>
  );
}