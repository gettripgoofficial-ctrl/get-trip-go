import React from "react"

export default function TrustedPartners() {
  const partners = [
    {
      name: "Expedia",
      link: "https://expedia.com/affiliates/expedia-home.w6qCuSl",
      logoBg: "#FFCC00",
      tagline: "Flights, hotels & packages",
      logo: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      ),
    },
    {
      name: "Viator",
      link: "https://www.viator.com/?pid=P00257641&mcid=42383&medium=link&campaign=gettripgo",
      logoBg: "#37B249",
      tagline: "Tours & skip-the-line tickets",
      logo: (
        <span style={{ fontSize: "16px", fontWeight: 900, color: "#ffffff", fontFamily: "sans-serif" }}>V</span>
      ),
    },
    {
      name: "GetYourGuide",
      link: "https://www.getyourguide.com?partner_id=9X14REW&cmp=share_to_earn",
      logoBg: "#FF5533",
      tagline: "Local experiences & guided tours",
      logo: (
        <span style={{ fontSize: "16px", fontWeight: 900, color: "#ffffff", fontFamily: "sans-serif" }}>G</span>
      ),
    },
    {
      name: "Klook",
      link: "https://klook.tpx.lu/T6hgKm7u",
      logoBg: "#FF5B00",
      tagline: "Tours, activities & travel deals",
      logo: (
        <span style={{ fontSize: "16px", fontWeight: 900, color: "#ffffff", fontFamily: "sans-serif" }}>K</span>
      ),
    },
  ]

  return (
    <section className="bg-[#f5f5f5] py-10 px-4">
      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <p className="text-lg font-extrabold tracking-[0.2em] uppercase text-orange-500 mb-1">
          Travel Platform Partners
        </p>
        <p className="text-sm font-semibold text-gray-700 mb-7">
          We partner with the world&apos;s most trusted travel platforms
        </p>

        {/* Pills — stack on mobile, row on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 bg-white border border-gray-100 rounded-2xl px-4 py-4 sm:px-6 sm:py-4 shadow-sm hover:shadow-md hover:border-gray-200 transition-all"
            >
              {/* Logo + name row */}
              <div className="flex items-center gap-3 justify-center">
                <span
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: partner.logoBg }}
                >
                  {partner.logo}
                </span>
                <span className="text-sm font-bold text-gray-800">
                  {partner.name}
                </span>
              </div>

              {/* Tagline */}
              <p className="text-[11px] text-gray-500 font-medium text-center">
                {partner.tagline}
              </p>
            </a>
          ))}
        </div>

        {/* Bottom tagline */}
        <p className="text-sm font-bold text-gray-800 mt-5">
          Book through our partners &amp; get the best deals guaranteed
        </p>

      </div>
    </section>
  )
}