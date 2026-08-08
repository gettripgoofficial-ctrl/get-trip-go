"use client"
import { useRef } from "react"
import Link from "next/link"

const themes = [
  {
    id: 1,
    name: "Pilgrimage Tours",
    image: "/image/pilgrimage.jpg",
    color: "#7c3aed",
    tagBg: "#f5f3ff",
    tagBorder: "#c4b5fd",
    tags: ["Varanasi", "Tirupathi", "Mathura", "Char Dham"],
    href: "/theme-holidays?theme=Spiritual",
  },
  {
    id: 2,
    name: "Honeymoon Specials",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=90",
    color: "#be185d",
    tagBg: "#fdf2f8",
    tagBorder: "#fbcfe8",
    tags: ["Maldives", "Paris", "Switzerland", "Bali", "Andaman"],
    href: "/theme-holidays?theme=Honeymoon",
  },
  {
    id: 3,
    name: "Wildlife & Safari",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=90",
    color: "#166534",
    tagBg: "#f0fdf4",
    tagBorder: "#bbf7d0",
    tags: ["Maasai Mara", "Jim Corbett", "Ranthambore"],
    href: "/theme-holidays?theme=Wildlife+%26+Safari",
  },
  {
    id: 4,
    name: "Luxury Escapes",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=90",
    color: "#b45309",
    tagBg: "#fffbeb",
    tagBorder: "#fde68a",
    tags: ["Beach", "Culture", "Hills"],
    href: "/theme-holidays?theme=Luxury",
  },
  {
    id: 5,
    name: "Adventure Trips",
    image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800&q=90",
    color: "#b45309",
    tagBg: "#fffbeb",
    tagBorder: "#fde68a",
    tags: ["Himalayas", "Ladakh", "Spiti"],
    href: "/theme-holidays?theme=Adventure",
  },
  {
    id: 6,
    name: "Beach Getaways",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=90",
    color: "#0369a1",
    tagBg: "#f0f9ff",
    tagBorder: "#bae6fd",
    tags: ["Goa", "Kerala", "Andaman"],
    href: "/theme-holidays?theme=Beach",
  },
  {
    id: 7,
    name: "Family Holidays",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=90",
    color: "#0369a1",
    tagBg: "#f0f9ff",
    tagBorder: "#bae6fd",
    tags: ["Europe", "Australia", "Sri Lanka"],
    href: "/theme-holidays?theme=Family",
  },
  {
    id: 8,
    name: "Hill Stations",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=90",
    color: "#166534",
    tagBg: "#f0fdf4",
    tagBorder: "#bbf7d0",
    tags: ["Shimla", "Manali", "Ooty"],
    href: "/theme-holidays?theme=Hill+Stations",
  },
]

export default function ThemeHolidays() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "right" ? 600 : -600, behavior: "smooth" })
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-4">
      <div className="flex rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">

        {/* LEFT — Scrollable Cards */}
        <div className="flex-1 overflow-hidden px-4 pt-5 pb-0 md:pb-5 [&]:pb-0">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto pb-1"
            style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
          >
            {themes.map(theme => (
              <Link
                key={theme.id}
                href={theme.href}
                className="flex-shrink-0 rounded-2xl overflow-hidden border border-gray-100 bg-white hover:-translate-y-1 transition-transform duration-200 block self-start"
                style={{ scrollSnapAlign: "start", width: "100%" }}
              >
                <img
                  src={theme.image}
                  alt={theme.name}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-2.5 pb-0 md:pb-4">
                  <h4 className="text-xs font-bold text-gray-900 mb-2 leading-tight">{theme.name}</h4>
                  <div className="flex flex-wrap gap-1 mb-2.5">
                    {theme.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full border"
                        style={{ color: theme.color, background: theme.tagBg, borderColor: theme.tagBorder }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span
                    className="text-[11px] font-bold uppercase tracking-wide"
                    style={{ color: theme.color }}
                  >
                    VIEW MORE
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div
          className="flex-shrink-0 relative overflow-hidden border-l border-amber-100 p-3 md:p-8"
          style={{
            width: "40%",
            background: "linear-gradient(145deg, #fff7ed 0%, #fef3c7 50%, #fff7ed 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Mandala SVG */}
          <svg
            style={{
              position: "absolute",
              right: "-40px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "200px",
              height: "200px",
              opacity: 0.10,
              pointerEvents: "none",
            }}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="90" stroke="#b45309" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="75" stroke="#b45309" strokeWidth="1" />
            <circle cx="100" cy="100" r="55" stroke="#b45309" strokeWidth="1" />
            <circle cx="100" cy="100" r="35" stroke="#b45309" strokeWidth="1" />
            <circle cx="100" cy="100" r="15" stroke="#b45309" strokeWidth="1.5" />
            <g stroke="#b45309" strokeWidth="0.8">
              <line x1="100" y1="10" x2="100" y2="190" />
              <line x1="10" y1="100" x2="190" y2="100" />
              <line x1="27" y1="27" x2="173" y2="173" />
              <line x1="173" y1="27" x2="27" y2="173" />
              <line x1="100" y1="10" x2="140" y2="45" /><line x1="100" y1="10" x2="60" y2="45" />
              <line x1="190" y1="100" x2="155" y2="140" /><line x1="190" y1="100" x2="155" y2="60" />
              <line x1="100" y1="190" x2="140" y2="155" /><line x1="100" y1="190" x2="60" y2="155" />
              <line x1="10" y1="100" x2="45" y2="60" /><line x1="10" y1="100" x2="45" y2="140" />
            </g>
            <g fill="#b45309">
              <circle cx="100" cy="10" r="3" /><circle cx="100" cy="190" r="3" />
              <circle cx="10" cy="100" r="3" /><circle cx="190" cy="100" r="3" />
              <circle cx="27" cy="27" r="2.5" /><circle cx="173" cy="27" r="2.5" />
              <circle cx="27" cy="173" r="2.5" /><circle cx="173" cy="173" r="2.5" />
              <circle cx="100" cy="45" r="2" /><circle cx="155" cy="100" r="2" />
              <circle cx="100" cy="155" r="2" /><circle cx="45" cy="100" r="2" />
            </g>
          </svg>

          <p className="text-[8px] md:text-sm" style={{
            position: "relative", zIndex: 10,
            width: "100%", textAlign: "center",
            fontWeight: 600,
            letterSpacing: "2px", color: "#b45309", whiteSpace: "nowrap",
            textTransform: "uppercase", marginBottom: "4px",
          }}>
            Curated for you
          </p>

          <h2 className="text-[10px] md:text-xl" style={{
            position: "relative", zIndex: 10,
            width: "100%", textAlign: "center",
            fontWeight: 800,
            color: "#78350f", lineHeight: 1.2, marginBottom: "4px",
          }}>
            Explore Holidays by Theme
          </h2>

          <Link
            href="/theme-holidays"
            className="text-[8px] md:text-sm"
            style={{
              position: "relative", zIndex: 10,
              fontWeight: 700,
              color: "#b45309", textDecoration: "underline",
              marginBottom: "10px",
              letterSpacing: "0.5px",
            }}
          >
            View All Themes
          </Link>

          <div style={{
            position: "relative", zIndex: 10,
            width: "100%",
            display: "flex", justifyContent: "center", gap: "8px",
          }}>
            <button
              onClick={() => scroll("left")}
              className="w-8 h-8 md:w-11 md:h-11 rounded-full border-2 border-amber-500 text-amber-600 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all text-sm md:text-lg font-bold"
            >
              ‹
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-8 h-8 md:w-11 md:h-11 rounded-full border-2 border-amber-500 text-amber-600 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all text-sm md:text-lg font-bold"
            >
              ›
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}