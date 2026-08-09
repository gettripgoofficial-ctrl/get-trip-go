"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { kenyaJourneys } from "@/data/kenyaData"

export default function KenyaTipsAndRoutes() {
  const [enquiryFor, setEnquiryFor] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setEnquiryFor(null)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-gray-800 font-bold text-lg mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
        Safari Routes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {kenyaJourneys.map(article => (
          <div
            key={article.id}
            className="group h-full flex flex-col rounded-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="relative rounded-lg overflow-hidden h-[180px] mb-3 cursor-pointer">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-yellow-600 text-[10px] font-bold uppercase tracking-wide">
              {article.meta}
            </p>
            <p className="text-gray-800 font-bold text-base mt-1 mb-1 group-hover:text-yellow-600 transition-colors cursor-pointer">
              {article.title}
            </p>

            {/* Always-visible CTAs, pinned to the bottom so they line up across cards */}
            <div className="flex gap-2 mt-auto">
              {article.id === "7-days-through-the-kenya-highlands" ? (
                <Link
                  href={`/kenya/${article.id}`}
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-xs px-3 py-2 rounded-md transition-colors text-center"
                >
                  View Itinerary
                </Link>
              ) : (
                <button
                  disabled
                  className="flex-1 bg-gray-200 text-gray-400 font-bold text-xs px-3 py-2 rounded-md cursor-not-allowed"
                  title="Full itinerary coming soon"
                >
                  Coming Soon
                </button>
              )}
              <button
                onClick={() => setEnquiryFor(article.title)}
                className="flex-1 border border-yellow-500 text-yellow-600 hover:bg-yellow-50 font-bold text-xs px-3 py-2 rounded-md transition-colors"
              >
                Enquiry Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Enquiry form modal */}
      {enquiryFor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setEnquiryFor(null)}
          />

          <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-gray-800 font-bold text-lg">Enquiry Form</h3>
              <button
                onClick={() => setEnquiryFor(null)}
                className="text-gray-400 hover:text-gray-700 text-2xl leading-none"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <p className="text-yellow-600 text-sm font-semibold mb-5">{enquiryFor}</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-xs font-bold mb-1">
                    Full Name
                  </label>
                  <input aria-label="Your full name"
                    type="text"
                    required
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-yellow-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-xs font-bold mb-1">
                    Email
                  </label>
                  <input aria-label="you@example.com"
                    type="email"
                    required
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-yellow-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-xs font-bold mb-1">
                    Phone Number
                  </label>
                  <input aria-label="+1 555 000 0000"
                    type="tel"
                    required
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-yellow-500"
                    placeholder="+1 555 000 0000"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-xs font-bold mb-1">
                    Number of Travelers
                  </label>
                  <input aria-label="2"
                    type="number"
                    min={1}
                    required
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-yellow-500"
                    placeholder="2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-xs font-bold mb-1">
                    Preferred Travel Date
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-xs font-bold mb-1">
                    Budget Range
                  </label>
                  <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-yellow-500">
                    <option value="">Select a range</option>
                    <option value="budget">Budget</option>
                    <option value="mid-range">Mid-Range</option>
                    <option value="luxury">Luxury</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-xs font-bold mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-yellow-500"
                  placeholder="Tell us more about what you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-sm px-4 py-3 rounded-md transition-colors"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
