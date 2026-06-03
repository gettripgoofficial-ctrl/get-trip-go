"use client"

const secondaryServices = [
  { icon: "🛂", title: "Visa", sub: "For International Trips" },
  { icon: "🛡️", title: "Travel Insurance", sub: "Protect your journey" },
  { icon: "🚢", title: "Cruise", sub: "Luxury sea voyages" },
  { icon: "💱", title: "Forex & Currency", sub: "Best exchange rates" },
  { icon: "🏡", title: "Villas", sub: "Villas & Home" },
]

export default function SecondaryServices() {
  return (
    <div className="max-w-7xl mx-auto px-4 relative z-10 -mt-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-x-auto">
        <div className="flex divide-x divide-gray-200 min-w-max sm:min-w-0">
          {secondaryServices.map(service => (
            <button
              key={service.title}
              className="flex-1 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-4 hover:bg-gray-50 transition-all"
            >
              <span className="text-xl sm:text-2xl">{service.icon}</span>
              <div className="text-left">
                <p className="text-xs sm:text-sm font-semibold text-gray-800 whitespace-nowrap">{service.title}</p>
                <p className="text-xs text-gray-400 whitespace-nowrap hidden sm:block">{service.sub}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}