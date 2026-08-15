"use client"

import { useState } from "react"

type Props = {
  isOpen: boolean
  onClose: () => void
  packageName?: string
}

export default function EnquiryModal({ isOpen, onClose, packageName }: Props) {
  const [activeTab, setActiveTab] = useState<"form" | "call" | "whatsapp" | "email">("form")
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", date: "", travelers: "2", message: "" })
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const phone = "+919667892504"
  const whatsappMessage = encodeURIComponent(`Hi! I'm interested in the package: ${packageName || "your travel package"}. Please share more details.`)
  const emailSubject = encodeURIComponent(`Enquiry: ${packageName || "Travel Package"}`)
  const emailBody = encodeURIComponent(`Hi GetTripGo Team,\n\nI am interested in the following package:\n${packageName || "Travel Package"}\n\nPlease share more details and availability.\n\nThank you.`)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if ((e.target as HTMLFormElement).dataset.submitting) return
    ;(e.target as HTMLFormElement).dataset.submitting = "true"
    await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...formData, packageName }) })
    setSubmitted(true)
  }

  const tabs = [
    { id: "form", label: "Fill Form", icon: "📋" },
    { id: "call", label: "Call Us", icon: "📞" },
    { id: "whatsapp", label: "WhatsApp", icon: "💬" },
    { id: "email", label: "Email", icon: "✉️" },
  ] as const

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div
          className="bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-blue-600 px-5 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-white font-bold text-lg">Get a Quote</h2>
                {packageName && (
                  <p className="text-blue-200 text-xs mt-0.5 truncate max-w-[260px]">{packageName}</p>
                )}
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center text-lg"
              >
                ✕
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mt-4">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-white text-blue-600"
                      : "bg-white/15 text-white hover:bg-white/25"
                  }`}
                >
                  <span className="text-base">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-5 max-h-[60vh] overflow-y-auto">

            {/* FILL FORM */}
            {activeTab === "form" && (
              <>
                {submitted ? (
                  <div className="text-center py-8">
                    <p className="text-5xl mb-3">🎉</p>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Enquiry Submitted!</h3>
                    <p className="text-sm text-gray-500">Our travel expert will call you within 2 hours.</p>
                    <button
                      onClick={onClose}
                      className="mt-5 bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm"
                    >
                      Done
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label htmlFor="enquiry-name" className="text-xs font-semibold text-gray-600 mb-1 block">Full Name *</label>
                      <input
                        id="enquiry-name"
                        required
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="enquiry-phone" className="text-xs font-semibold text-gray-600 mb-1 block">Phone Number *</label>
                      <input
                        id="enquiry-phone"
                        required
                        type="tel"
                        placeholder="+91 96678 92504"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="enquiry-email" className="text-xs font-semibold text-gray-600 mb-1 block">Email</label>
                      <input
                        id="enquiry-email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-blue-400"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="enquiry-date" className="text-xs font-semibold text-gray-600 mb-1 block">Travel Date</label>
                        <input
                          id="enquiry-date"
                          type="date"
                          value={formData.date}
                          onChange={e => setFormData({ ...formData, date: e.target.value })}
                          className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-blue-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="enquiry-travelers" className="text-xs font-semibold text-gray-600 mb-1 block">Travelers</label>
                        <select
                          id="enquiry-travelers"
                          value={formData.travelers}
                          onChange={e => setFormData({ ...formData, travelers: e.target.value })}
                          className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-blue-400"
                        >
                          {["1", "2", "3", "4", "5", "6+"].map(n => (
                            <option key={n} value={n}>{n} {n === "1" ? "Person" : "Persons"}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="enquiry-message" className="text-xs font-semibold text-gray-600 mb-1 block">Message (Optional)</label>
                      <textarea
                        id="enquiry-message"
                        rows={3}
                        placeholder="Any special requirements or questions..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-blue-400 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors text-sm"
                    >
                      Submit Enquiry
                    </button>
                  </form>
                )}
              </>
            )}

            {/* CALL */}
            {activeTab === "call" && (
              <div className="text-center py-6 space-y-4">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto text-4xl">
                  📞
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Talk to a Travel Expert</h3>
                  <p className="text-sm text-gray-500 mt-1">Available Mon–Sat, 9 AM – 8 PM</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Our travel helpline</p>
                  <p className="text-2xl font-extrabold text-gray-800">+91 96678 92504</p>
                </div>
                <a
                  href={`tel:${phone}`}
                  className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors text-sm"
                >
                  📞 Call Now
                </a>
                <p className="text-xs text-gray-400">
                  Or request a callback — we'll call you within 30 minutes
                </p>
                <button
                  onClick={() => setActiveTab("form")}
                  className="w-full border border-gray-200 text-gray-600 font-semibold py-2.5 rounded-xl text-sm"
                >
                  Request Callback
                </button>
              </div>
            )}

            {/* WHATSAPP */}
            {activeTab === "whatsapp" && (
              <div className="text-center py-6 space-y-4">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto text-4xl">
                  💬
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Chat on WhatsApp</h3>
                  <p className="text-sm text-gray-500 mt-1">Get instant replies from our team</p>
                </div>
                <div className="bg-green-50 rounded-2xl p-4 text-left">
                  <p className="text-xs text-gray-500 font-semibold mb-2">Your message preview:</p>
                  <p className="text-sm text-gray-700 italic">
                    "Hi! I'm interested in <span className="font-semibold text-green-700">{packageName || "your travel package"}</span>. Please share more details."
                  </p>
                </div>
                <a
                  href={`https://wa.me/${phone.replace("+", "")}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3 rounded-xl transition-colors text-sm"
                >
                  💬 Open WhatsApp
                </a>
                <p className="text-xs text-gray-400">Typically replies within 5 minutes</p>
              </div>
            )}

            {/* EMAIL */}
            {activeTab === "email" && (
              <div className="text-center py-6 space-y-4">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto text-4xl">
                  ✉️
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Send us an Email</h3>
                  <p className="text-sm text-gray-500 mt-1">We reply within 4 business hours</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Our email address</p>
                  <p className="text-base font-bold text-gray-800">contact@gettripgo.com</p>
                </div>
                <a
                  href={`mailto:contact@gettripgo.com?subject=${emailSubject}&body=${emailBody}`}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors text-sm"
                >
                  ✉️ Open Email App
                </a>
                <p className="text-xs text-gray-400">
                  Or copy our email: <span className="font-semibold text-gray-600">contact@gettripgo.com</span>
                </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  )
}