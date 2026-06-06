"use client"
import { useState } from "react"
import { Manrope } from "next/font/google"
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "800"] })

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubscribe() {
    if (!email || !email.includes("@")) return
    setStatus("loading")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className={`${manrope.className} max-w-7xl mx-auto px-4 py-6`}>
      <div
        className="rounded-2xl px-4 sm:px-8 py-8 flex flex-col items-center text-center gap-5"
        style={{ backgroundColor: "#1A56F0" }}
      >
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

        {status === "success" ? (
          <div className="bg-white/10 rounded-2xl px-6 py-4 text-white text-sm font-semibold">
            🎉 You're subscribed! Check your inbox for a welcome email.
          </div>
        ) : (
          <div className="w-full max-w-sm px-2 sm:px-0">
            <div className="flex items-center bg-white rounded-full shadow-xl overflow-hidden p-1">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSubscribe()}
                className="flex-1 px-3 sm:px-4 py-2 text-sm text-gray-700 outline-none bg-transparent min-w-0"
              />
              <button
                onClick={handleSubscribe}
                disabled={status === "loading"}
                className="bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white text-xs font-bold px-4 sm:px-5 py-2 rounded-full transition-all whitespace-nowrap flex-shrink-0"
              >
                {status === "loading" ? "..." : "Subscribe →"}
              </button>
            </div>
            {status === "error" && (
              <p className="text-red-300 text-xs mt-2">Something went wrong. Please try again.</p>
            )}
            <p className="text-blue-300 text-xs mt-2">
              🔒 We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
