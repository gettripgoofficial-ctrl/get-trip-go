"use client"
import React, { useState } from "react"
import Link from "next/link"

const quickLinks = [
  { label: "Discover Kenya", href: "/kenya" },
  { label: "Flights", href: "/flights" },
  { label: "Hotels", href: "/hotels" },
  { label: "Group Departures", href: "/group-departures" },
  { label: "Customized Itineraries", href: "/customized-itineraries" },
  { label: "Popular Destinations", href: "/popular-destinations" },
  { label: "Theme Holidays", href: "/theme-holidays" },
  { label: "Travel Stories", href: "/blog" },
]

const supportLinks = [
  { label: "About Us", href: "/about" },
  { label: "Visa Assistance", href: "/visa" },
  { label: "Help Center", href: "/help" },
  { label: "Why Us", href: "/why-us" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
  { label: "Best Deals", href: null },
  { label: "Explore Coupons", href: null },
]

const travelTools = [
  { name: "Luggage Storage", href: "https://radicalstorage.tpx.lu/1Y7nD48i" },
  { name: "Car Rental", href: "https://localrent.tpx.lu/OJUcblal" },
  { name: "Event Tickets", href: "https://ticketnetwork.tpx.lu/Rqu1Ykpe" },
  { name: "Tours & Activities", href: "https://klook.tpx.lu/T6hgKm7u" },
  { name: "Travel eSIM", href: "https://yesim.tpx.lu/YtLpS5lu" },
  { name: "Airport Transfer", href: "https://gettransfer.tpx.lu/wuqe2IDc" },
  { name: "Holiday Rentals", href: "https://vrbo.com/affiliates/vrbo-home.veP5t0U" },
]

const partners = [
  { name: "Expedia", link: "https://expedia.com/affiliates/expedia-home.w6qCuSl", logoBg: "#FFCC00", logoColor: "#1a1a1a", letter: "↗" },
  { name: "Viator", link: "https://www.viator.com/?pid=P00257641&mcid=42383&medium=link&campaign=gettripgo", logoBg: "#37B249", logoColor: "#fff", letter: "V" },
  { name: "GetYourGuide", link: "https://www.getyourguide.com?partner_id=9X14REW&cmp=share_to_earn", logoBg: "#FF5533", logoColor: "#fff", letter: "G" },
  { name: "Klook", link: "https://klook.tpx.lu/T6hgKm7u", logoBg: "#FF5B00", logoColor: "#fff", letter: "K" },
]

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/gettripgo_official/",
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
    href: "https://www.facebook.com/gettripgo.official",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://x.com/gettripgo",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 4h4l14 16h-4z"/>
        <path d="M4 4l16 16M4 20L20 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@GettripGo",
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

function QuickLinkItem({ link }: { link: typeof quickLinks[0] }) {
  if (link.label === "Best Deals") {
    return (
      <button
        onClick={() => window.dispatchEvent(new CustomEvent("open-deals"))}
        className="text-sm text-gray-500 hover:text-white transition-colors text-left"
      >
        {link.label}
      </button>
    )
  }
  if (link.label === "Explore Coupons") {
    return (
      <button
        onClick={() => window.dispatchEvent(new CustomEvent("open-special-offers"))}
        className="text-sm text-gray-500 hover:text-white transition-colors text-left"
      >
        {link.label}
      </button>
    )
  }
  return (
    <Link href={link.href!} className="text-sm text-gray-500 hover:text-white transition-colors">
      {link.label}
    </Link>
  )
}

/**
 * One column, rendered once. On phones it's a tap-to-expand accordion.
 * On lg+ screens CSS forces it open and disables the toggle — no second
 * copy of the list is ever rendered.
 */
function FooterColumn({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-white/10 lg:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-4 lg:py-0 lg:mb-5 lg:pointer-events-none
                   text-[11px] lg:text-[10px] font-bold uppercase tracking-widest text-gray-400 lg:text-gray-500"
      >
        {title}
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          className={`lg:hidden transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <ul className={`${open ? "block" : "hidden"} lg:block space-y-2.5 lg:space-y-1 pb-4 lg:pb-0`}>
        {children}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0d0d1f" }} className="text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14 pb-4 sm:pb-10">
        <div className="lg:grid lg:grid-cols-5 lg:gap-0 w-full">

          {/* Brand — rendered once */}
          <div className="mb-6 lg:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/logo-icon.png" alt="Get Trip Go icon" className="w-10 h-10 object-contain" />
              <img src="/logo-text.png" alt="Get Trip Go" className="h-7 object-contain" style={{ filter: "brightness(0) invert(1)" }} />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-5 lg:mb-6 max-w-xs">
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

          {/* Quick Links — rendered once */}
          <div className="lg:ml-auto">
            <FooterColumn title="Quick Links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <QuickLinkItem link={link} />
                </li>
              ))}
            </FooterColumn>
          </div>

          {/* Support — rendered once */}
          <div className="lg:ml-auto">
            <FooterColumn title="Support">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <QuickLinkItem link={link} />
                </li>
              ))}
            </FooterColumn>
          </div>

          {/* Travel Tools — rendered once */}
          <div className="lg:ml-auto">
            <FooterColumn title="Travel Tools">
              {travelTools.map((tool) => (
                <li key={tool.name}>
                  <a href={tool.href} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-white transition-colors">
                    {tool.name}
                  </a>
                </li>
              ))}
            </FooterColumn>
          </div>

          {/* App + Partners — rendered once */}
          <div className="border-t border-white/10 lg:border-0 lg:ml-auto pt-4 lg:pt-0 pb-4 lg:pb-0">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2.5">Trusted Partners</p>
            <div className="flex flex-wrap lg:flex-col gap-2 lg:gap-1.5">
              {partners.map((p) => (
                <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-2.5 py-1.5 lg:py-1 transition-all lg:w-36">
                  <span className="w-4 h-4 rounded-md flex items-center justify-center text-[10px] font-black flex-shrink-0"
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
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}