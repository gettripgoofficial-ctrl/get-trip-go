"use client"
import { useRef } from "react"

const themes = [
  {
    id: 1,
    name: "Pilgrimage Tours",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=90",
    color: "#7c3aed",
    tagBg: "#f5f3ff",
    tagBorder: "#c4b5fd",
    tags: ["Varanasi", "South India", "Char Dham"],
  },
  {
    id: 2,
    name: "Honeymoon Specials",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=90",
    color: "#be185d",
    tagBg: "#fdf2f8",
    tagBorder: "#fbcfe8",
    tags: ["Maldives", "Bali", "Andaman", "Goa"],
  },
  {
    id: 3,
    name: "Group Tours",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=90",
    color: "#0369a1",
    tagBg: "#f0f9ff",
    tagBorder: "#bae6fd",
    tags: ["Europe", "Australia", "Sri Lanka"],
  },
  {
    id: 4,
    name: "Luxury Escapes",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=90",
    color: "#b45309",
    tagBg: "#fffbeb",
    tagBorder: "#fde68a",
    tags: ["Beach", "Culture", "Hills"],
  },
  {
    id: 5,
    name: "Adventure Trips",
    image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=800&q=90",
    color: "#b45309",
    tagBg: "#fffbeb",
    tagBorder: "#fde68a",
    tags: ["Himalayas", "Ladakh", "Spiti"],
  },
  {
    id: 6,
    name: "Beach Getaways",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=90",
    color: "#0369a1",
    tagBg: "#f0f9ff",
    tagBorder: "#bae6fd",
    tags: ["Goa", "Kerala", "Andaman"],
  },
  {
    id: 7,
    name: "Wildlife & Safari",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=90",
    color: "#166534",
    tagBg: "#f0fdf4",
    tagBorder: "#bbf7d0",
    tags: ["Jim Corbett", "Ranthambore"],
  },
  {
    id: 8,
    name: "Hill Stations",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=90",
    color: "#166534",
    tagBg: "#f0fdf4",
    tagBorder: "#bbf7d0",
    tags: ["Shimla", "Manali", "Ooty"],
  },
]

export default function ThemeHolidays() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "right" ? 350 : -350, behavior: "smooth" })
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white min-h-[340px]">

        {/* LEFT PANEL */}
        <div
          className="flex-shrink-0 relative overflow-hidden border-r border-amber-100"
          style={{
            width: "390px",
            background: "linear-gradient(145deg, #fff7ed 0%, #fef3c7 50%, #fff7ed 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "28px 24px",
          }}
        >
          {/* Mandala SVG */}
          <svg
            style={{
              position: "absolute",
              left: "-30px",
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

          {/* ✅ CHANGE 1: "Curated for you" — centered */}
          <p style={{
            position: "relative", zIndex: 10,
            width: "100%", textAlign: "center",
            fontSize: "10px", fontWeight: 600,
            letterSpacing: "2px", color: "#b45309",
            textTransform: "uppercase", marginBottom: "6px",
          }}>
            Curated for you
          </p>

          {/* ✅ CHANGE 2: Heading — centered, single line, smaller font to fit */}
          <h2 style={{
            position: "relative", zIndex: 10,
            width: "100%", textAlign: "center",
            fontSize: "22px", fontWeight: 800,
            color: "#78350f", lineHeight: 1.2, marginBottom: "8px",
            whiteSpace: "nowrap",
          }}>
            Explore Holidays by Theme
          </h2>

          {/* ✅ CHANGE 3: New tagline */}
          <p style={{
            position: "relative", zIndex: 10,
            width: "100%", textAlign: "center",
            fontSize: "12px", color: "#92400e",
            lineHeight: 1.6, marginBottom: "20px",
          }}>
            Your dream trip, just a theme away
          </p>

          <div style={{
            position: "relative", zIndex: 10,
            width: "100%",
            display: "flex", justifyContent: "center", gap: "8px",
          }}>
            <button
              onClick={() => scroll("left")}
              className="w-8 h-8 rounded-full border-2 border-amber-500 text-amber-600 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all text-sm font-bold"
            >
              ‹
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-8 h-8 rounded-full border-2 border-amber-500 text-amber-600 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all text-sm font-bold"
            >
              ›
            </button>
          </div>
        </div>

        {/* RIGHT SCROLLABLE CARDS */}
        <div className="flex-1 overflow-hidden px-4 py-5">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto pb-1"
            style={{ scrollbarWidth: "none", scrollSnapType: "x mandatory" }}
          >
            {themes.map(theme => (
              <div
                key={theme.id}
                className="flex-shrink-0 w-[155px] rounded-2xl overflow-hidden border border-gray-100 bg-white cursor-pointer hover:-translate-y-1 transition-transform duration-200"
                style={{ scrollSnapAlign: "start" }}
              >
                <img
                  src={theme.image}
                  alt={theme.name}
                  className="w-full h-[140px] object-cover"
                />
                <div className="p-2.5">
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
                  <button
                    className="text-[11px] font-bold uppercase tracking-wide"
                    style={{ color: theme.color }}
                  >
                    View More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}