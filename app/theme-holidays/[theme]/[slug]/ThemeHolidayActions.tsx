"use client"
import { useState } from "react"
import { Tag, Sparkles, Check, Copy, Mail, Heart } from "lucide-react"
import { usePrice } from "@/hooks/usePrice"
import EnquiryModal from "@/components/EnquiryModal"

const WA_NUMBER = "919667892504"

function WhatsAppIcon({ size = 18, color = "#25D366" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

export default function ThemeHolidayActions({ packageName, priceINR, themeColor }: { packageName: string; priceINR: number; themeColor: string }) {
  const { convert } = usePrice()
  const [showModal, setShowModal] = useState(false)
  const [saved, setSaved] = useState(false)
  const [shareCopied, setShareCopied] = useState(false)
  const [couponCode, setCouponCode] = useState("")
  const [couponApplied, setCouponApplied] = useState(false)
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  const priceText = convert(priceINR)
  const totalPrice = convert(priceINR * (adults + children))

  function openDirectWhatsApp() {
    const msg = encodeURIComponent(`Hi, I'm interested in *${packageName}* (${priceText} per person). Could you share more details?`)
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank")
  }
  function openCustomizeWhatsApp() {
    const msg = encodeURIComponent(`Hi, I'd like to customize *${packageName}* — could you help me modify the itinerary, hotels, or meals?`)
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank")
  }
  async function handleCopyLink() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href)
      setShareCopied(true)
      setTimeout(() => setShareCopied(false), 2000)
    }
  }
  function handleApplyCoupon() {
    if (couponCode.trim().length > 0) setCouponApplied(true)
  }

  return (
    <div className="space-y-3">

      {/* Travelers & Cost Summary */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4">
          <p className="text-xs font-bold text-gray-800 mb-3 flex items-center gap-1.5">
            <span className="w-5 h-5 bg-purple-100 rounded-lg flex items-center justify-center text-[11px]">👥</span>
            Travelers
          </p>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-gray-50 rounded-xl p-2 text-center">
              <p className="text-[10px] text-gray-400 mb-1">Adults</p>
              <div className="flex items-center justify-center gap-2">
                <button onClick={() => setAdults(Math.max(1, adults - 1))} disabled={adults <= 1}
                  className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 disabled:opacity-40 text-xs">−</button>
                <span className="text-sm font-bold text-gray-900 w-4 text-center">{adults}</span>
                <button onClick={() => setAdults(adults + 1)}
                  className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 text-xs">+</button>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-2 text-center">
              <p className="text-[10px] text-gray-400 mb-1">Children</p>
              <div className="flex items-center justify-center gap-2">
                <button onClick={() => setChildren(Math.max(0, children - 1))} disabled={children <= 0}
                  className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 disabled:opacity-40 text-xs">−</button>
                <span className="text-sm font-bold text-gray-900 w-4 text-center">{children}</span>
                <button onClick={() => setChildren(children + 1)}
                  className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 text-xs">+</button>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-2 text-center">
              <p className="text-[10px] text-gray-400 mb-1">Infants</p>
              <div className="flex items-center justify-center gap-2">
                <button onClick={() => setInfants(Math.max(0, infants - 1))} disabled={infants <= 0}
                  className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 disabled:opacity-40 text-xs">−</button>
                <span className="text-sm font-bold text-gray-900 w-4 text-center">{infants}</span>
                <button onClick={() => setInfants(infants + 1)}
                  className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 text-xs">+</button>
              </div>
            </div>
          </div>
          {(children > 0 || infants > 0 || couponApplied) && (
            <div className="mt-3 pt-3 border-t border-gray-50 space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">{priceText} × {adults} adult{adults > 1 ? "s" : ""}</span>
                <span className="font-semibold text-gray-700">{convert(priceINR * adults)}</span>
              </div>
              {children > 0 && (
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">{priceText} × {children} child{children > 1 ? "ren" : ""}</span>
                  <span className="font-semibold text-gray-700">{convert(priceINR * children)}</span>
                </div>
              )}
              {infants > 0 && (
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">{infants} infant{infants > 1 ? "s" : ""}</span>
                  <span className="font-semibold text-gray-700">Free</span>
                </div>
              )}
              {couponApplied && (
                <div className="flex justify-between text-xs text-green-600">
                  <span>Coupon &quot;{couponCode}&quot;</span>
                  <span className="font-semibold">Applied ✓</span>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex items-center justify-between px-4 py-2.5 border-t" style={{ background: `linear-gradient(to right, ${themeColor}10, ${themeColor}18)`, borderColor: `${themeColor}25` }}>
          <span className="text-sm font-bold" style={{ color: themeColor }}>Total <span className="text-[11px] font-normal opacity-70">({adults} adult{adults > 1 ? "s" : ""}{children > 0 ? ` + ${children} child${children > 1 ? "ren" : ""}` : ""})</span></span>
          <span className="text-lg font-extrabold" style={{ color: themeColor }}>{totalPrice}</span>
        </div>
      </div>

      {/* CTAs */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-2.5">
        <button onClick={() => setShowModal(true)}
          className="w-full text-white font-bold py-3.5 rounded-xl transition-all shadow-md text-sm"
          style={{ backgroundColor: themeColor }}>
          🎟️ Book Now
        </button>
        <button onClick={openDirectWhatsApp}
          className="w-full flex items-center justify-center gap-2 border-2 border-green-500 text-green-600 font-bold py-3 rounded-xl hover:bg-green-50 transition-all text-sm">
          Enquire on WhatsApp
        </button>
      </div>

      {/* Coupon */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-dashed border-gray-200">
        <p className="text-xs font-bold text-gray-700 mb-2 flex items-center gap-1.5">
          <Tag size={13} className="text-orange-400" /> Have a coupon?
        </p>
        {couponApplied ? (
          <div className="flex items-center gap-2 bg-green-50 rounded-xl px-3 py-2">
            <Check size={13} className="text-green-600" />
            <span className="text-xs font-semibold text-green-700">Coupon &quot;{couponCode}&quot; applied!</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2 border border-gray-100">
            <input type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter coupon code"
              className="flex-1 text-xs outline-none placeholder:text-gray-400 bg-transparent" />
            <button onClick={handleApplyCoupon} className="text-xs font-bold text-blue-600 hover:underline flex-shrink-0">Apply</button>
          </div>
        )}
      </div>

      {/* Share */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <p className="text-xs font-bold text-gray-700 mb-3">Share this package</p>
        <div className="grid grid-cols-4 gap-2">
          <button onClick={openDirectWhatsApp}
            className="flex flex-col items-center gap-1 bg-green-50 border border-green-100 rounded-xl py-2.5 hover:bg-green-100 transition-colors">
            <WhatsAppIcon size={18} color="#16a34a" />
            <span className="text-[10px] font-semibold text-gray-500">WhatsApp</span>
          </button>
          <button onClick={handleCopyLink}
            className="flex flex-col items-center gap-1 bg-blue-50 border border-blue-100 rounded-xl py-2.5 hover:bg-blue-100 transition-colors">
            {shareCopied ? <Check size={16} className="text-green-600" /> : <Copy size={16} className="text-blue-500" />}
            <span className="text-[10px] font-semibold text-gray-500">{shareCopied ? "Copied!" : "Copy Link"}</span>
          </button>
          <button onClick={() => window.open(`mailto:?subject=${encodeURIComponent(packageName)}&body=${encodeURIComponent(window.location.href)}`, "_blank")}
            className="flex flex-col items-center gap-1 bg-purple-50 border border-purple-100 rounded-xl py-2.5 hover:bg-purple-100 transition-colors">
            <Mail size={16} className="text-purple-500" />
            <span className="text-[10px] font-semibold text-gray-500">Email</span>
          </button>
          <button onClick={() => setSaved(s => !s)}
            className="flex flex-col items-center gap-1 bg-red-50 border border-red-100 rounded-xl py-2.5 hover:bg-red-100 transition-colors">
            <Heart size={16} className={saved ? "fill-red-500 text-red-500" : "text-red-400"} />
            <span className="text-[10px] font-semibold text-gray-500">{saved ? "Saved" : "Save"}</span>
          </button>
        </div>
      </div>

      {/* Customize */}
      <button onClick={openCustomizeWhatsApp}
        className="w-full flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-green-50 border border-green-100 rounded-2xl p-4 text-left hover:shadow-md transition-all">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-sm">
          <Sparkles size={18} className="text-white" />
        </div>
        <div>
          <p className="text-sm font-bold text-green-700">Customize This Package</p>
          <p className="text-[11px] text-green-500 mt-0.5">Modify itinerary, hotels, meals & more</p>
        </div>
      </button>

      <EnquiryModal isOpen={showModal} onClose={() => setShowModal(false)} packageName={packageName} />
    </div>
  )
}
