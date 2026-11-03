"use client";

import { useEffect, useMemo, useState, FormEvent } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, X } from "lucide-react";

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919667892504";

type Ctx = {
  heading: string;
  sub: string;
  placeholder: string;
  intro: string;
  includePage: boolean;
  autoOpen: boolean;
};

const DEFAULT_CTX: Ctx = {
  heading: "Send us an enquiry",
  sub: "We usually reply within minutes.",
  placeholder: "Hi, I'd like to know about...",
  intro: "I have an enquiry.",
  includePage: false,
  autoOpen: true,
};

// First match wins. "detail" is used when the page is a single tour/article (path has 2+ parts).
const RULES: { prefix: string; list: Partial<Ctx>; detail?: Partial<Ctx> }[] = [
  {
    prefix: "/kenya",
    list: {
      heading: "Planning a Kenya safari?",
      sub: "Ask our Kenya team anything.",
      placeholder: "Dates, budget, parks you want to see...",
      intro: "I'm interested in a Kenya safari.",
    },
    detail: {
      heading: "Questions about this guide?",
      sub: "Our Kenya team can help plan your trip.",
      placeholder: "Tell us what you'd like to know or plan...",
      intro: "I was reading your Kenya guide and have a question.",
      includePage: true,
    },
  },
  {
    prefix: "/group-departures",
    list: {
      heading: "Join a group tour",
      sub: "Ask about dates, prices and availability.",
      placeholder: "Which tour and month are you looking at?",
      intro: "I'd like details about your group departures.",
    },
    detail: {
      heading: "Interested in this tour?",
      sub: "Ask about dates, price and seats.",
      placeholder: "Number of travellers and preferred date...",
      intro: "I'm interested in this group tour.",
      includePage: true,
    },
  },
  {
    prefix: "/popular-destinations",
    list: {
      heading: "Find your destination",
      sub: "Tell us where you want to go.",
      placeholder: "Destination, dates and number of travellers...",
      intro: "I'd like help choosing a holiday package.",
    },
    detail: {
      heading: "Like this package?",
      sub: "Get a quote for your dates.",
      placeholder: "Travel dates and number of travellers...",
      intro: "I'm interested in this holiday package.",
      includePage: true,
    },
  },
  {
    prefix: "/theme-holidays",
    list: {
      heading: "Plan a theme holiday",
      sub: "Honeymoon, family, adventure and more.",
      placeholder: "What kind of trip are you planning?",
      intro: "I'd like help planning a theme holiday.",
    },
    detail: {
      heading: "Interested in this holiday?",
      sub: "We'll tailor it to your dates and budget.",
      placeholder: "Travel dates, budget and group size...",
      intro: "I'm interested in this theme holiday.",
      includePage: true,
    },
  },
  {
    prefix: "/customized-itineraries",
    list: {
      heading: "Build your own trip",
      sub: "We'll design it around you.",
      placeholder: "Where, when and what you want to do...",
      intro: "I'd like a customised itinerary.",
    },
    detail: {
      heading: "Want to customise this trip?",
      sub: "Change days, hotels or activities.",
      placeholder: "What would you like to change?",
      intro: "I'd like to customise this itinerary.",
      includePage: true,
    },
  },
  {
    prefix: "/flights",
    list: {
      heading: "Need help with flights?",
      sub: "Fares, changes and group bookings.",
      placeholder: "From, to and travel dates...",
      intro: "I need help with a flight booking.",
    },
  },
  {
    prefix: "/hotels",
    list: {
      heading: "Need a hotel?",
      sub: "Tell us the city and dates.",
      placeholder: "City, dates and number of guests...",
      intro: "I need help with a hotel booking.",
    },
  },
  {
    prefix: "/visa",
    list: {
      heading: "Visa questions?",
      sub: "We help with applications and documents.",
      placeholder: "Which country and when are you travelling?",
      intro: "I need help with a visa.",
    },
  },
  {
    prefix: "/offers",
    list: {
      heading: "Interested in an offer?",
      sub: "Ask before the deal ends.",
      placeholder: "Which offer are you looking at?",
      intro: "I'd like to know about your current offers.",
      includePage: true,
    },
  },
  {
    prefix: "/contact",
    list: {
      heading: "Talk to us now",
      sub: "Faster than filling in a form.",
      placeholder: "How can we help?",
      intro: "I'd like to get in touch.",
    },
  },
  // Legal and utility pages: show the button but don't pop open on its own.
  { prefix: "/privacy", list: { autoOpen: false } },
  { prefix: "/terms", list: { autoOpen: false } },
  { prefix: "/cookies", list: { autoOpen: false } },
];

function getContext(pathname: string): Ctx {
  const parts = pathname.split("/").filter(Boolean);
  const rule = RULES.find((r) => pathname === r.prefix || pathname.startsWith(r.prefix + "/"));
  if (!rule) return DEFAULT_CTX;
  const isDetail = parts.length >= 2;
  return { ...DEFAULT_CTX, ...rule.list, ...(isDetail && rule.detail ? rule.detail : {}) };
}

export default function WhatsAppPopup() {
  const pathname = usePathname() || "/";
  const ctx = useMemo(() => getContext(pathname), [pathname]);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // New page: close the form and clear the message.
  useEffect(() => {
    setOpen(false);
    setMessage("");
  }, [pathname]);

  // Auto-open once per visit after 8 seconds, only on pages that allow it.
  useEffect(() => {
    if (!ctx.autoOpen) return;
    const timer = setTimeout(() => {
      try {
        if (!sessionStorage.getItem("wa-seen")) {
          setOpen(true);
          sessionStorage.setItem("wa-seen", "1");
        }
      } catch {
        /* storage unavailable */
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, [ctx.autoOpen, pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const title = document.title.replace(/\s*[|\-–—]\s*Get Trip Go\s*$/i, "").trim();
    const lines = [`Hello, my name is ${name.trim()}.`, ctx.intro];
    if (ctx.includePage && title) lines.push(`Page: ${title}`);
    lines.push("", message.trim(), "", `(Sent from: ${window.location.href})`);
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank",
      "noopener"
    );
    setOpen(false);
    setMessage("");
  }

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="WhatsApp enquiry"
          className="fixed bottom-36 right-4 md:bottom-20 z-[99999] w-[min(340px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-neutral-200 bg-white text-neutral-900 shadow-2xl"
        >
          <div className="flex items-start justify-between gap-3 bg-[#128c4a] px-4 py-3 text-white">
            <div>
              <p className="text-base font-semibold">{ctx.heading}</p>
              <p className="text-sm opacity-90">{ctx.sub}</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="rounded p-1 hover:bg-white/20">
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="grid gap-3 p-4">
            <label className="grid gap-1 text-sm text-neutral-600">
              Your name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
                className="rounded-lg border border-neutral-300 px-3 py-2 text-base text-neutral-900"
              />
            </label>
            <label className="grid gap-1 text-sm text-neutral-600">
              Your enquiry
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={3}
                placeholder={ctx.placeholder}
                className="resize-y rounded-lg border border-neutral-300 px-3 py-2 text-base text-neutral-900"
              />
            </label>
            <button type="submit" className="rounded-lg bg-[#128c4a] px-4 py-2.5 font-semibold text-white hover:bg-[#0b6b37]">
              Continue to WhatsApp
            </button>
          </form>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="fixed right-4 bottom-[calc(5rem+env(safe-area-inset-bottom))] md:bottom-4 z-[99999] flex items-center gap-2 rounded-full bg-[#128c4a] px-5 py-3 text-[15px] font-semibold text-white shadow-lg hover:bg-[#0b6b37]"
      >
        <MessageCircle size={20} />
        Chat on WhatsApp
      </button>
    </>
  );
}
