"use client";

import { useState } from "react";

const faqs = [
  { q: "How do I cancel or modify my booking?", a: "You can cancel or modify your booking from 'My Trip' in the navbar. Cancellation charges vary by airline or hotel policy. Reach us within 24 hours of booking for free changes on most tickets." },
  { q: "When will I receive my refund?", a: "Refunds are processed within 5–7 business days after cancellation is confirmed. The amount will be credited back to your original payment method. UPI/wallet refunds are usually faster — within 2–3 business days." },
  { q: "Is travel insurance available on GetTripGo?", a: "Yes! We partner with leading insurers offering coverage for medical emergencies, trip cancellations, flight delays, and lost luggage. You can add it during checkout." },
  { q: "Do you offer group booking discounts?", a: "Absolutely. Groups of 10+ travellers qualify for exclusive pricing and dedicated support. Contact our Group Departures desk for a custom quote tailored to your itinerary." },
  { q: "How do I apply a promo code or coupon?", a: "During checkout, you'll see an 'Apply Coupon' field. Enter your code there before making payment. Some codes are user-specific or valid only on certain routes — check the offer terms." },
  { q: "Can I book international flights on GetTripGo?", a: "Yes! We support international flight bookings to 150+ countries. You can compare fares across airlines and book multi-city itineraries all in one go." },
  { q: "What documents are required for visa assistance?", a: "Requirements vary by destination. Generally you'll need a valid passport (6+ months validity), recent photographs, travel itinerary, hotel bookings, and bank statements. Our visa team will guide you through the exact list." },
  { q: "How do I check my booking status?", a: "Go to 'My Trip' in the navbar and log in with your registered email. You'll see all active and past bookings with their current status, e-tickets, and hotel vouchers." },
  { q: "Do you offer EMI or pay-later options?", a: "Yes! We support EMI through major credit cards (3, 6, 12 months) and buy-now-pay-later via partners like LazyPay and ZestMoney. Look for the EMI option at checkout." },
  { q: "What if my flight gets cancelled by the airline?", a: "If an airline cancels your flight, you're entitled to a full refund or free rebooking. GetTripGo will notify you via email/SMS and our support team will proactively reach out to help rebook or refund." },
];

const contactOptions = [
  {
    icon: "📞",
    title: "Call Us",
    desc: "Speak directly with a travel expert",
    action: "Call +91 96 6789 2504",
    href: "tel:+919667892504",
    lightBg: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    icon: "💬",
    title: "WhatsApp",
    desc: "Chat with us on WhatsApp instantly",
    action: "Open WhatsApp",
    href: "https://wa.me/919667892504",
    lightBg: "bg-green-50",
    textColor: "text-green-600",
    borderColor: "border-green-200",
  },
  {
    icon: "✉️",
    title: "Email Us",
    desc: "Send us an email, reply within 2 hrs",
    action: "contact@gettripgo.com",
    href: "mailto:contact@gettripgo.com",
    lightBg: "bg-yellow-50",
    textColor: "text-yellow-600",
    borderColor: "border-yellow-200",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeOption, setActiveOption] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FF]">

      {/* ── Hero ── */}
      <section className="bg-[#F8F9FF] px-6 py-24 text-center">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#1A56F0] mb-5">
          Contact at Get Trip Go
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] mb-5 tracking-tight text-gray-900">
          Get In Touch With<br />Our Team
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
          Whether it&apos;s a booking query, refund request, or travel advice — we&apos;re just a message away.
        </p>
      </section>

      {/* ── Info Cards ── */}
      <div className="max-w-5xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-3 gap-5">
          {[
            {
              icon: "📞",
              iconBg: "bg-blue-100",
              accent: "border-t-[3px] border-[#1A56F0]",
              label: "Call Us",
              value: "+91 96 6789 2504",
              sub: "Mon–Sat · 9 AM – 9 PM IST",
              badge: "Available Now",
              badgeBg: "bg-emerald-50 text-emerald-600",
            },
            {
              icon: "✉️",
              iconBg: "bg-yellow-100",
              accent: "border-t-[3px] border-yellow-400",
              label: "Email Us",
              value: "contact@gettripgo.com",
              sub: "Reply within 2 hours",
              badge: "2hr Response",
              badgeBg: "bg-yellow-50 text-yellow-600",
            },
            {
              icon: "📍",
              iconBg: "bg-purple-100",
              accent: "border-t-[3px] border-purple-500",
              label: "Visit Us",
              value: "102, 52A, Vijay Block",
              sub: "Laxmi Nagar, New Delhi – 110092",
              badge: "Head Office",
              badgeBg: "bg-purple-50 text-purple-600",
            },
          ].map((card) => (
            <div
              key={card.label}
              className={`bg-white rounded-2xl p-6 shadow-md border border-gray-100 ${card.accent} flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-200`}
            >
              <div className="flex items-start justify-between">
                <div className={`w-11 h-11 ${card.iconBg} rounded-xl flex items-center justify-center text-xl`}>
                  {card.icon}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${card.badgeBg}`}>
                  {card.badge}
                </span>
              </div>
              <div>
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest mb-1">{card.label}</p>
                <p className="text-[#0a1628] font-bold text-[15px] mb-0.5">{card.value}</p>
                <p className="text-gray-400 text-xs">{card.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Contact Options ── */}
      <div className="max-w-5xl mx-auto px-6 mt-14">
        <div className="text-center mb-8">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#1A56F0] mb-2">✦ Reach Out</p>
          <h2 className="text-3xl font-extrabold text-[#0a1628] mb-2">How Would You Like to Connect?</h2>
          <p className="text-gray-500 text-sm">Choose the way that works best for you.</p>
        </div>

        <div className="grid grid-cols-3 gap-5 mb-5">
          {contactOptions.map((opt) => (
            <a
              key={opt.title}
              href={opt.href}
              target={opt.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`group bg-white rounded-2xl p-6 border ${opt.borderColor} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col gap-4 cursor-pointer`}
            >
              <div className={`w-12 h-12 ${opt.lightBg} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200`}>
                {opt.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-[#0a1628] font-extrabold text-base mb-1">{opt.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{opt.desc}</p>
              </div>
              <div className={`inline-flex items-center gap-2 text-xs font-bold ${opt.textColor} mt-auto`}>
                {opt.action}
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Write a Form option */}
        <div className="bg-white rounded-2xl border border-[#1A56F0]/20 shadow-sm overflow-hidden">
          <button
            onClick={() => setActiveOption(activeOption === "form" ? null : "form")}
            className="w-full flex items-center justify-between px-8 py-5 hover:bg-blue-50/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl">📝</div>
              <div className="text-left">
                <h3 className="text-[#0a1628] font-extrabold text-base">Write Us a Message</h3>
                <p className="text-gray-400 text-xs">Fill out the form and we'll get back to you within 2 hours</p>
              </div>
            </div>
            <span className={`text-[#1A56F0] text-2xl font-bold transition-transform duration-300 ${activeOption === "form" ? "rotate-45" : ""}`}>+</span>
          </button>

          {activeOption === "form" && (
            <div className="px-8 pb-8 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-5 mt-6">
                {[
                  { key: "name", label: "Full Name", placeholder: "Rahul Sharma", type: "text" },
                  { key: "email", label: "Email Address", placeholder: "rahul@example.com", type: "email" },
                  { key: "phone", label: "Phone Number", placeholder: "+91 96 6789 2504", type: "tel" },
                  { key: "subject", label: "Subject", placeholder: "e.g. Refund for booking GTG-2024-XXX", type: "text" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="block text-[11px] font-bold text-[#0a1628] uppercase tracking-wider mb-1.5">{f.label}</label>
                    <input aria-label={f.placeholder}
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-xl bg-gray-50 text-sm text-[#0a1628] placeholder-gray-400 focus:outline-none focus:border-[#1A56F0] focus:bg-white transition-all"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <label className="block text-[11px] font-bold text-[#0a1628] uppercase tracking-wider mb-1.5">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Describe your issue or question in detail…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 border-[1.5px] border-gray-200 rounded-xl bg-gray-50 text-sm text-[#0a1628] placeholder-gray-400 focus:outline-none focus:border-[#1A56F0] focus:bg-white transition-all resize-none leading-relaxed"
                />
              </div>
              <button
                onClick={handleSubmit}
                className={`mt-5 px-10 py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-300 ${submitted ? "bg-emerald-500" : "bg-[#1A56F0] hover:bg-[#0a1628] hover:-translate-y-0.5 hover:shadow-lg"}`}
              >
                {submitted ? "✓ Message Sent! We'll reply within 2 hours." : "Send Message →"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="max-w-5xl mx-auto px-6 mt-16 mb-16">
        <div className="text-center mb-10">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#1A56F0] mb-2">✦ FAQ</p>
          <h2 className="text-3xl font-extrabold text-[#0a1628] mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">Quick answers so you don&apos;t have to wait. Can&apos;t find what you need? We&apos;re one message away.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${openFaq === i ? "border-[#1A56F0]/30 shadow-md" : "border-gray-100 shadow-sm"}`}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-start text-left px-5 py-4 gap-3"
              >
                <div className="flex items-start gap-3">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5 transition-colors ${openFaq === i ? "bg-[#1A56F0] text-white" : "bg-gray-100 text-gray-500"}`}>
                    {i + 1}
                  </span>
                  <span className="text-[#0a1628] text-sm font-semibold leading-snug">{faq.q}</span>
                </div>
                <span className={`text-lg leading-none flex-shrink-0 transition-all duration-200 mt-0.5 ${openFaq === i ? "text-[#1A56F0] rotate-45" : "text-gray-400"}`}>+</span>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-4">
                  <div className="ml-9 text-gray-500 text-sm leading-relaxed border-l-2 border-[#1A56F0]/20 pl-3">
                    {faq.a}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="bg-gradient-to-r from-[#1A56F0] via-[#1e40af] to-[#0a1628] px-8 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-4 divide-x divide-white/10">
          {[
            { num: "4.9", unit: "★", label: "Customer Rating", icon: "🏆" },
            { num: "2", unit: " hrs", label: "Avg. Response Time", icon: "⚡" },
            { num: "24", unit: "/7", label: "Support Available", icon: "🌐" },
            { num: "50K", unit: "+", label: "Happy Travellers", icon: "✈️" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center px-8 py-2">
              <span className="text-2xl mb-2">{s.icon}</span>
              <div className="flex items-end gap-0.5 mb-1">
                <span className="text-white text-4xl font-extrabold leading-none">{s.num}</span>
                <span className="text-yellow-400 text-xl font-bold mb-0.5">{s.unit}</span>
              </div>
              <p className="text-white/50 text-[11px] uppercase tracking-widest font-semibold">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}