import { Manrope } from "next/font/google"

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "800"] })

export default function NewsletterSignup() {
  return (
    <div className={`${manrope.className} max-w-7xl mx-auto px-4 py-6`}>
      <div
        className="rounded-2xl px-4 sm:px-8 py-8 flex flex-col items-center text-center gap-5"
        style={{ backgroundColor: "#1A56F0" }}
      >

        {/* Text */}
        <div>
          <p className="text-blue-200 text-xs font-normal uppercase tracking-widest mb-2">
            Newsletter
          </p>
          <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
            Get the best travel deals straight to your inbox.
          </h3>
          <p className="text-blue-200 text-sm leading-relaxed max-w-md mx-auto">
            Flight deals, visa updates, destination guides and exclusive offers — delivered weekly. No spam, ever.
          </p>
        </div>

        {/* Input */}
        <div className="w-full max-w-sm px-2 sm:px-0">
          <div className="flex items-center bg-white rounded-full shadow-xl overflow-hidden p-1">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-3 sm:px-4 py-2 text-sm text-gray-700 outline-none bg-transparent min-w-0"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-4 sm:px-5 py-2 rounded-full transition-all whitespace-nowrap flex-shrink-0">
              Subscribe →
            </button>
          </div>
          <p className="text-blue-300 text-xs mt-2">
            🔒 We respect your privacy. Unsubscribe anytime.
          </p>
        </div>

      </div>
    </div>
  )
}