"use client"
import React, { useState } from "react"
import Link from "next/link"
import Logo from "./Logo"

const quickLinks = [
  { label: "Best Deals", href: "/deals" },
  { label: "Special Offers", href: "/special-offers" },
  { label: "Group Departures", href: "/group-departures" },
  { label: "Customized Itineraries", href: "/customized-itineraries" },
  { label: "Popular Destinations", href: "/popular-destinations" },
  { label: "Theme Holidays", href: "/theme-holidays" },
  { label: "Travel Stories", href: "/stories" },
]

const supportLinks = [
  { label: "Help Center", href: "/help" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Why Us", href: "/why-us" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
]

const partners = [
  { name: "Expedia", link: "https://www.expedia.com", logoBg: "#FFCC00", logoColor: "#1a1a1a", letter: "↗" },
  { name: "Viator", link: "https://www.viator.com", logoBg: "#37B249", logoColor: "#fff", letter: "V" },
  { name: "GetYourGuide", link: "https://www.getyourguide.com", logoBg: "#FF5533", logoColor: "#fff", letter: "G" },
]

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 4h4l14 16h-4z"/>
        <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0d0d1f"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
]

function AccordionSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="lg:hidden border-t border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-[11px] font-bold uppercase tracking-widest text-gray-400"
      >
        {title}
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  )
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0d0d1f" }} className="text-gray-400">

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14 pb-4 sm:pb-10">

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-4 gap-0 w-full">

          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/get-trip-go.png" alt="Get Trip Go icon" className="w-9 h-9 object-contain rounded-xl" />
              <Logo variant="light" height="26" />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
              India&apos;s trusted travel booking platform. Flights, hotels, custom holidays &amp; group tours — all at the best prices.
            </p>
            <div className="flex gap-2 flex-wrap">
              {socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="ml-auto">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-5">Quick Links</p>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Support */}
          <div className="ml-auto">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-5">Support</p>
            <ul className="space-y-1">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — App + Partners */}
          <div className="ml-auto">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Get the App</p>
            <div className="flex flex-col gap-1.5 mb-5">
              <a href="#" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-2.5 py-1 transition-all w-36">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 flex-shrink-0">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="text-xs text-gray-400 font-medium">App Store</span>
              </a>
              <a href="#" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-2.5 py-1 transition-all w-36">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 flex-shrink-0">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.49-12.49L13.41 8.2 3.18 23.76zm17.14-10.88L17.49 11l-3.28 3.27 3.28 3.28 2.86-1.61c.81-.46.81-1.63-.03-2.06zM2.06.69C1.73.93 1.5 1.33 1.5 1.84v20.32c0 .51.23.91.56 1.15L14.31 11.5 2.06.69zm11.35 9.49L2.06.69l-.01-.01 12.49 12.49-1.13-3.09z"/>
                </svg>
                <span className="text-xs text-gray-400 font-medium">Google Play</span>
              </a>
            </div>
            <div className="border-t border-white/5 mb-4" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2.5">Trusted Partners</p>
            <div className="flex flex-col gap-1.5">
              {partners.map((p) => (
                <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-2.5 py-1 transition-all w-36">
                  <span className="w-4 h-4 rounded-md flex items-center justify-center text-[10px] font-black flex-shrink-0"
                    style={{ backgroundColor: p.logoBg, color: p.logoColor }}>{p.letter}</span>
                  <span className="text-[11px] font-semibold text-gray-400">{p.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden">

          {/* Brand always visible */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <img src="/get-trip-go.png" alt="Get Trip Go icon" className="w-9 h-9 object-contain rounded-xl" />
              <Logo variant="light" height="24" />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              India&apos;s trusted travel booking platform. Flights, hotels, custom holidays &amp; group tours — all at the best prices.
            </p>
            <div className="flex gap-2 flex-wrap">
              {socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Accordion */}
          <AccordionSection title="Quick Links">
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </AccordionSection>

          {/* Support Accordion */}
          <AccordionSection title="Support">
            <ul className="space-y-2.5">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </AccordionSection>

          {/* Get the App — always visible */}
          <div className="border-t border-white/10 pt-4 pb-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Get the App</p>
            <div className="flex gap-2 flex-wrap mb-4">
              <a href="#" className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 transition-all">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="text-xs text-gray-400 font-medium">App Store</span>
              </a>
              <a href="#" className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 transition-all">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.49-12.49L13.41 8.2 3.18 23.76zm17.14-10.88L17.49 11l-3.28 3.27 3.28 3.28 2.86-1.61c.81-.46.81-1.63-.03-2.06zM2.06.69C1.73.93 1.5 1.33 1.5 1.84v20.32c0 .51.23.91.56 1.15L14.31 11.5 2.06.69zm11.35 9.49L2.06.69l-.01-.01 12.49 12.49-1.13-3.09z"/>
                </svg>
                <span className="text-xs text-gray-400 font-medium">Google Play</span>
              </a>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2.5">Trusted Partners</p>
            <div className="flex gap-2 flex-wrap">
              {partners.map((p) => (
                <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1.5 transition-all">
                  <span className="w-4 h-4 rounded-md flex items-center justify-center text-[10px] font-black"
                    style={{ backgroundColor: p.logoBg, color: p.logoColor }}>{p.letter}</span>
                  <span className="text-[11px] font-semibold text-gray-400">{p.name}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-600 text-center">© 2026 Get Trip Go. All rights reserved.</p>
          <p className="text-xs text-gray-600">
            Designed &amp; developed by{" "}
            <a href="https://useclickads.com" target="_blank" rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400 font-semibold transition-colors">
              ClickAds
            </a>
          </p>
        </div>
      </div>

    </footer>
  )
}