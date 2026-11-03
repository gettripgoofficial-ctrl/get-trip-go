"use client";

import { useEffect, useState, FormEvent } from "react";
import { MessageCircle, X } from "lucide-react";

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919667892504";

export default function WhatsAppPopup() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        if (!sessionStorage.getItem("wa-seen")) {
          setOpen(true);
          sessionStorage.setItem("wa-seen", "1");
        }
      } catch {}
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = `Hello, my name is ${name.trim()}.\n${message.trim()}\n\n(Sent from: ${window.location.href})`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    setOpen(false);
    setMessage("");
  }

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="WhatsApp enquiry"
          className="fixed bottom-4 right-4 sm:bottom-20 z-[99999] w-[min(340px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-neutral-200 bg-white text-neutral-900 shadow-2xl"
        >
          <div className="flex items-start justify-between gap-3 bg-[#128c4a] px-4 py-3 text-white">
            <div>
              <p className="text-base font-semibold">Send us an enquiry</p>
              <p className="text-sm opacity-90">We usually reply within minutes.</p>
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
                placeholder="Hi, I'd like to know about a Kenya safari..."
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
        className="fixed right-4 top-1/2 -translate-y-1/2 sm:top-auto sm:bottom-4 sm:translate-y-0 z-[99999] flex items-center gap-2 rounded-full bg-[#128c4a] px-5 py-3 text-[15px] font-semibold text-white shadow-lg hover:bg-[#0b6b37]"
      >
        <MessageCircle size={20} />
        Chat on WhatsApp
      </button>
    </>
  );
}
