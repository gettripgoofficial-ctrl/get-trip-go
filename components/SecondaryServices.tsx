"use client"

import { useState } from "react"
import { X } from "lucide-react"

const WHATSAPP = "919667892504"

const SERVICES = [
  {
    icon: "🛂",
    title: "Visa",
    sub: "For International Trips",
    modalTitle: "Visa Assistance",
    modalDesc: "We help you apply for tourist, business, and transit visas for 150+ countries. Fast processing, document checklist, and expert guidance included.",
    cta: "Apply for Visa",
  },
  {
    icon: "🛡️",
    title: "Travel Insurance",
    sub: "Protect your journey",
    modalTitle: "Travel Insurance",
    modalDesc: "Comprehensive travel insurance covering medical emergencies, trip cancellation, lost baggage, and flight delays. Single trip and annual plans available.",
    cta: "Get Insurance Quote",
  },
  {
    icon: "🚢",
    title: "Cruise",
    sub: "Luxury sea voyages",
    modalTitle: "Cruise Packages",
    modalDesc: "Explore the world's most stunning destinations aboard luxury cruise liners. Mediterranean, Caribbean, Southeast Asia and more.",
    cta: "Explore Cruises",
  },
  {
    icon: "💱",
    title: "Forex & Currency",
    sub: "Best exchange rates",
    modalTitle: "Forex & Currency Exchange",
    modalDesc: "Get the best exchange rates for 30+ currencies. Door delivery, zero hidden charges, and RBI-authorised money changers.",
    cta: "Get Best Rate",
  },
  {
    icon: "🏡",
    title: "Villas",
    sub: "Villas & Home",
    modalTitle: "Villas & Holiday Homes",
    modalDesc: "Handpicked private villas and holiday homes across Goa, Bali, Kerala, and 50+ destinations. Perfect for families and groups.",
    cta: "Get Villa Options",
  },
  {
    icon: "🏢",
    title: "Apartments",
    sub: "Short & long stays",
    modalTitle: "Apartments & Serviced Stays",
    modalDesc: "Fully furnished apartments and serviced residences for short and long stays. Ideal for business travelers, families, and extended holidays.",
    cta: "Get Apartment Options",
  },
]

type Service = typeof SERVICES[number]

// ─── Field config per service ─────────────────────────────────────────────────

type FieldDef =
  | { type: "text"; key: string; label: string; placeholder: string }
  | { type: "select"; key: string; label: string; options: string[] }
  | { type: "date"; key: string; label: string }

function getFields(title: string): FieldDef[] {
  const common: FieldDef[] = [
    { type: "text", key: "name", label: "Full Name", placeholder: "Enter your full name" },
    { type: "text", key: "phone", label: "Phone Number", placeholder: "Enter your phone number" },
    { type: "text", key: "email", label: "Email Address", placeholder: "Enter your email" },
  ]

  switch (title) {
    case "Visa":
      return [
        ...common,
        { type: "text", key: "nationality", label: "Nationality", placeholder: "Enter your nationality" },
        { type: "text", key: "destination", label: "Destination Country", placeholder: "Enter destination country" },
        {
          type: "select", key: "visaType", label: "Visa Type",
          options: ["Tourist", "Business", "Transit", "Student", "Medical"],
        },
        { type: "date", key: "travelDate", label: "Travel Date" },
        { type: "text", key: "passport", label: "Passport Number", placeholder: "Enter passport number" },
      ]
    case "Travel Insurance":
      return [
        ...common,
        { type: "text", key: "destination", label: "Destination", placeholder: "Enter destination" },
        { type: "text", key: "travelDates", label: "Travel Dates", placeholder: "e.g. 15 Jul – 25 Jul 2025" },
        { type: "text", key: "travelers", label: "Number of Travelers", placeholder: "e.g. 2 adults, 1 child" },
        {
          type: "select", key: "planType", label: "Plan Type",
          options: ["Single Trip", "Annual / Multi-trip", "Family Floater"],
        },
      ]
    case "Cruise":
      return [
        ...common,
        { type: "text", key: "departurePort", label: "Departure Port / City", placeholder: "e.g. Mumbai, Singapore" },
        {
          type: "select", key: "duration", label: "Cruise Duration",
          options: ["3–5 Nights", "6–8 Nights", "9–12 Nights", "13+ Nights"],
        },
        { type: "text", key: "travelers", label: "Number of Travelers", placeholder: "e.g. 2 adults" },
        { type: "date", key: "travelDate", label: "Preferred Departure Date" },
      ]
    case "Forex & Currency":
      return [
        ...common,
        { type: "text", key: "currency", label: "Currency Needed", placeholder: "e.g. USD, EUR, AED" },
        { type: "text", key: "amount", label: "Amount (INR)", placeholder: "e.g. ₹50,000" },
        { type: "text", key: "deliveryCity", label: "Delivery City", placeholder: "Enter your city" },
      ]
    case "Villas":
      return [
        ...common,
        { type: "text", key: "destination", label: "Destination", placeholder: "e.g. Goa, Bali, Kerala" },
        { type: "text", key: "checkin", label: "Check-in / Check-out", placeholder: "e.g. 10 Aug – 15 Aug" },
        { type: "text", key: "guests", label: "Number of Guests", placeholder: "e.g. 6 guests" },
      ]
    case "Apartments":
      return [
        ...common,
        { type: "text", key: "city", label: "City or Area", placeholder: "e.g. Dubai Marina, Bandra" },
        { type: "text", key: "checkin", label: "Check-in / Check-out", placeholder: "e.g. 1 Sep – 30 Sep" },
        { type: "text", key: "guests", label: "Number of Guests", placeholder: "e.g. 2 guests" },
        {
          type: "select", key: "stayType", label: "Stay Type",
          options: ["Short Stay (< 1 month)", "Long Stay (1–6 months)", "Extended (6+ months)"],
        },
      ]
    default:
      return common
  }
}

// ─── Build WhatsApp message ───────────────────────────────────────────────────

function buildWhatsAppMessage(service: Service, values: Record<string, string>): string {
  const now = new Date()
  const timestamp = now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata", hour12: true })
  const pageUrl = typeof window !== "undefined" ? window.location.href : "N/A"
  const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "N/A"

  const fieldLines = Object.entries(values)
    .filter(([, v]) => v.trim())
    .map(([k, v]) => {
      const label = k
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, s => s.toUpperCase())
      return `• ${label}: ${v}`
    })
    .join("\n")

  return (
    `*New ${service.modalTitle} Enquiry — Get Trip Go*\n\n` +
    `${fieldLines}\n\n` +
    `──────────────────\n` +
    `🕐 Submitted: ${timestamp}\n` +
    `🔗 Page: ${pageUrl}\n` +
    `📱 Device: ${userAgent.slice(0, 80)}...`
  )
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const fields = getFields(service.title)
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map(f => [f.key, ""]))
  )
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [submitting, setSubmitting] = useState(false)

  const set = (key: string, val: string) => {
    setValues(prev => ({ ...prev, [key]: val }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: false }))
  }

  const handleSubmit = () => {
    // Validate required fields
    const newErrors: Record<string, boolean> = {}
    const required = ["name", "phone"]
    required.forEach(k => { if (!values[k]?.trim()) newErrors[k] = true })
    if (Object.keys(newErrors).length) { setErrors(newErrors); return }

    setSubmitting(true)
    const msg = buildWhatsAppMessage(service, values)
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank")
    setTimeout(() => { setSubmitting(false); onClose() }, 800)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={service.modalTitle}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md z-10 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 p-6 pb-4 shrink-0">
          <span className="text-3xl">{service.icon}</span>
          <div className="flex-1">
            <h2 className="text-[17px] font-bold text-[#0e1f45]">{service.modalTitle}</h2>
            <p className="text-[12px] text-slate-400">{service.sub}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-all shrink-0"
          >
            <X size={15} />
          </button>
        </div>

        <p className="text-[13px] text-slate-500 leading-relaxed px-6 pb-4 shrink-0">{service.modalDesc}</p>

        {/* Scrollable fields */}
        <div className="overflow-y-auto px-6 pb-2 flex flex-col gap-3">
          {fields.map(field => (
            <div
              key={field.key}
              className="border rounded-[10px] px-3.5 py-2.5 transition-colors"
              style={{ borderColor: errors[field.key] ? "#ef4444" : "#e2e8f0" }}
            >
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                {field.label}
                {(field.key === "name" || field.key === "phone") && (
                  <span className="text-red-400 ml-0.5">*</span>
                )}
              </p>

              {field.type === "select" ? (
                <select
                  value={values[field.key]}
                  onChange={e => set(field.key, e.target.value)}
                  className="text-[13px] font-semibold text-[#0e1f45] w-full outline-none bg-transparent"
                >
                  <option value="">Select an option</option>
                  {field.options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              ) : field.type === "date" ? (
                <input
                  type="date"
                  value={values[field.key]}
                  onChange={e => set(field.key, e.target.value)}
                  className="text-[13px] font-semibold text-[#0e1f45] w-full outline-none"
                />
              ) : (
                <input
                  type={field.key === "email" ? "email" : field.key === "phone" ? "tel" : "text"}
                  value={values[field.key]}
                  onChange={e => set(field.key, e.target.value)}
                  placeholder={field.placeholder}
                  className="text-[13px] font-semibold text-[#0e1f45] w-full outline-none placeholder:text-slate-300"
                />
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 pt-4 shrink-0">
          {Object.values(errors).some(Boolean) && (
            <p className="text-xs text-red-500 mb-3">Please fill in Name and Phone Number.</p>
          )}
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="w-full bg-[#1A56F0] hover:bg-blue-700 disabled:opacity-70 text-white font-bold text-[14px] py-3 rounded-[12px] transition-all shadow-md shadow-blue-500/25 flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"/>
                  <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z"/>
                </svg>
                Opening WhatsApp...
              </>
            ) : (
              <>
                {service.cta}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function SecondaryServices() {
  const [active, setActive] = useState<Service | null>(null)

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 relative z-10 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-6 divide-x divide-gray-200">
            {SERVICES.map(service => (
              <button
                key={service.title}
                onClick={() => setActive(service)}
                className="flex-1 flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-3 sm:py-4 hover:bg-blue-50/50 transition-all group"
              >
                <span className="text-xl sm:text-2xl">{service.icon}</span>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-semibold text-gray-800 whitespace-nowrap group-hover:text-[#1A56F0] transition-colors">
                    {service.title}
                  </p>
                  <p className="text-xs text-gray-400 whitespace-nowrap hidden sm:block">{service.sub}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {active && <ServiceModal service={active} onClose={() => setActive(null)} />}
    </>
  )
}