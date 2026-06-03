"use client";
import { useState } from "react";

const cookieTypes = [
  {
    name: "Strictly Necessary",
    icon: "🔒",
    required: true,
    description:
      "These cookies are essential for the website to function correctly. They enable core features like user authentication, booking sessions, and payment security. You cannot opt out of these cookies.",
    examples: [
      "Session authentication token",
      "CSRF protection cookie",
      "Booking cart data",
      "Secure payment session",
    ],
  },
  {
    name: "Performance & Analytics",
    icon: "📊",
    required: false,
    description:
      "These cookies help us understand how visitors interact with our platform. We use this information to improve the user experience, fix errors, and optimise page performance.",
    examples: [
      "Google Analytics (_ga, _gid)",
      "Page load performance metrics",
      "Error tracking (Sentry)",
      "A/B testing assignments",
    ],
  },
  {
    name: "Functional",
    icon: "⚙️",
    required: false,
    description:
      "Functional cookies remember your preferences so you don't have to re-enter them on each visit. This includes language settings, currency preference, and recently searched routes.",
    examples: [
      "Language preference (EN/HI/etc.)",
      "Currency preference (INR/USD)",
      "Recently searched airports",
      "Theme preference",
    ],
  },
  {
    name: "Marketing & Advertising",
    icon: "📢",
    required: false,
    description:
      "These cookies are used to show you relevant advertisements and travel deals on other websites. They track your browsing across sites to build a profile of your interests.",
    examples: [
      "Facebook Pixel",
      "Google Ads remarketing",
      "Travel intent signals",
      "Ad frequency capping",
    ],
  },
];

export default function CookiesPage() {
  const [consents, setConsents] = useState<Record<string, boolean>>({
    "Performance & Analytics": true,
    Functional: true,
    "Marketing & Advertising": false,
  });

  const toggle = (name: string) =>
    setConsents((prev) => ({ ...prev, [name]: !prev[name] }));

  return (
    <main className="min-h-screen bg-[#f5f7ff]">
      {/* Header */}
      <section className="bg-[#2B3FDE] text-white py-16 px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3">
          Legal
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-blue-100 max-w-xl mx-auto">
          Learn how Get Trip Go uses cookies and manage your preferences below.
        </p>
        <p className="text-blue-200 text-sm mt-4">Last updated: June 4, 2025</p>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 space-y-8">
        {/* Intro */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            What are cookies?
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Cookies are small text files stored on your device when you visit a
            website. They help websites remember your preferences, keep you
            signed in, and understand how you use the site. Get Trip Go uses
            cookies to deliver a fast, personalised, and secure travel booking
            experience.
          </p>
        </div>

        {/* Cookie types with toggles */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 px-1">
            Cookie Categories
          </h2>
          {cookieTypes.map((type) => {
            const isEnabled = type.required || consents[type.name];
            return (
              <div
                key={type.name}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{type.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900">{type.name}</h3>
                      {type.required && (
                        <span className="text-xs font-semibold text-[#2B3FDE] uppercase tracking-wide">
                          Always Active
                        </span>
                      )}
                    </div>
                  </div>
                  {!type.required && (
                    <button
                      onClick={() => toggle(type.name)}
                      className={`relative inline-flex h-7 w-12 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${
                        isEnabled ? "bg-[#2B3FDE]" : "bg-gray-200"
                      }`}
                      aria-label={`Toggle ${type.name}`}
                    >
                      <span
                        className={`inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          isEnabled ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  )}
                  {type.required && (
                    <div className="h-7 w-12 rounded-full bg-[#2B3FDE] opacity-50 relative flex-shrink-0">
                      <span className="inline-block h-6 w-6 transform rounded-full bg-white shadow absolute top-0.5 right-0.5" />
                    </div>
                  )}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {type.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((ex) => (
                    <span
                      key={ex}
                      className="bg-gray-50 border border-gray-100 text-gray-400 text-xs px-3 py-1 rounded-full"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* How to manage */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            Managing cookies in your browser
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            You can also control cookies through your browser settings. Most
            browsers allow you to block or delete cookies. Note that disabling
            certain cookies may affect the functionality of Get Trip Go.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            {["Chrome", "Firefox", "Safari", "Edge"].map((browser) => (
              <div
                key={browser}
                className="bg-gray-50 rounded-xl px-4 py-3 text-center text-gray-600 font-medium"
              >
                {browser}
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 justify-center text-sm text-[#2B3FDE]">
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}