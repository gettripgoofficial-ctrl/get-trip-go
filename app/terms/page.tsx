"use client";
import { useState, useEffect, useRef } from "react";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    icon: "✅",
    plain: "By using Get Trip Go, you agree to follow these rules. If you don't agree, please don't use the platform.",
    content: [
      { subtitle: "Agreement to Terms", text: "By accessing or using the Get Trip Go platform, website, or mobile application, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services." },
      { subtitle: "Eligibility", text: "You must be at least 18 years of age and capable of entering into a legally binding agreement to use our services. By using our platform, you represent that you meet these requirements." },
      { subtitle: "Modifications", text: "Get Trip Go reserves the right to modify these Terms at any time. We will notify users of significant changes via email or a prominent notice on our platform. Continued use after changes constitutes acceptance." },
    ],
  },
  {
    id: "user-accounts",
    title: "User Accounts",
    icon: "👤",
    plain: "You're responsible for keeping your account secure. Don't share your password, and tell us immediately if something looks wrong.",
    content: [
      { subtitle: "Account Registration", text: "To access certain features, you must create an account. You agree to provide accurate, current, and complete information during registration and to keep your account information updated." },
      { subtitle: "Account Security", text: "You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorised use of your account. Get Trip Go is not liable for losses resulting from unauthorised account access." },
      { subtitle: "Account Termination", text: "We reserve the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activity, or are inactive for an extended period, with or without prior notice." },
    ],
  },
  {
    id: "booking-payments",
    title: "Booking & Payments",
    icon: "💳",
    plain: "A ₹20,000 booking deposit confirms your spot. Land costs are paid in three instalments before your trip; flights and visas are paid in full by their own deadlines.",
    content: [
      { subtitle: "Booking Confirmation", text: "Bookings are confirmed only upon receipt of the required booking deposit or full payment, depending on the service type. All bookings are subject to availability and final confirmation by the relevant supplier. Clients are responsible for providing a valid passport and all required travel documentation at the time of booking." },
      { subtitle: "Booking Deposit", text: "A booking amount of INR 20,000/- is payable upon confirmation to secure your reservation." },
      { subtitle: "Airline Tickets", text: "Full payment must be made before ticket issuance and within the applicable airline fare/ticketing deadline." },
      { subtitle: "Visa Services", text: "Full payment for visa services must be made prior to submission of the application to the relevant embassy, consulate, or visa processing centre." },
      { subtitle: "Land Arrangements", text: "Payment for land arrangements is due in three instalments: 50% of the Land Part is payable 60 days prior to arrival, 40% is payable 30 days prior to arrival, and the remaining 10% is payable 7 days prior to arrival." },
      { subtitle: "Pricing & Taxes", text: "All prices are displayed inclusive of applicable taxes and fees unless stated otherwise. Prices are subject to change until payment is completed and confirmation is issued." },
      { subtitle: "Payment Processing", text: "Payments are processed securely through our PCI-DSS compliant payment partners. By submitting payment, you authorise Get Trip Go to charge the stated amount to your selected payment method." },
    ],
  },
  {
    id: "cancellations-refunds",
    title: "Cancellations & Refunds",
    icon: "🔄",
    plain: "Cancellation fees depend on what you're cancelling and when. The ₹20,000 booking amount is never refundable. Approved refunds typically take 30–90 days.",
    content: [
      { subtitle: "Cancellation Charges", text: "Cancellation charges may apply and will vary depending on the travel component, supplier terms, and the date of cancellation." },
      { subtitle: "Non-Refundable Amounts", text: "Service fees and the INR 20,000/- booking amount are non-refundable under any circumstances." },
      { subtitle: "Refund Eligibility", text: "Any eligible refund is subject to the cancellation and refund policies of the respective suppliers, including airlines, hotels, tour operators, and other service providers." },
      { subtitle: "Refund Processing Time", text: "Refund processing may take approximately 30–90 days, depending on the relevant supplier's processing timelines." },
      { subtitle: "Peak Season Variations", text: "Cancellation terms may differ during national holidays and peak/high-season periods, particularly around Christmas and New Year. Any such variations will be communicated and handled on a case-by-case basis." },
    ],
  },
  {
    id: "quotation-availability",
    title: "Quotations & Availability",
    icon: "📋",
    plain: "A quote is not a booking — nothing is held for you until you actually confirm and pay. Prices and hotel availability can change right up until then.",
    content: [
      { subtitle: "Reference Only", text: "All quotations provided are for reference purposes only and do not constitute a confirmed booking. No flights, hotels, rooms, tours, or other services are being held or blocked based on a quotation." },
      { subtitle: "Subject to Confirmation", text: "All services remain subject to availability and applicable supplier confirmation at the time of actual booking. The quoted hotel and room category are not guaranteed until the booking has been confirmed and the relevant supplier has accepted the reservation." },
      { subtitle: "Prices May Change", text: "Prices and availability may change without prior notice until the booking is confirmed." },
    ],
  },
  {
    id: "hotel-policies",
    title: "Hotel Check-in & Check-out",
    icon: "🏨",
    plain: "Standard check-in is 3 PM and check-out is 12 PM. Earlier or later timing isn't guaranteed and depends on the hotel.",
    content: [
      { subtitle: "Check-in", text: "Standard hotel check-in time is 15:00 hrs. Requests for early check-in are subject to hotel availability and cannot be guaranteed." },
      { subtitle: "Check-out", text: "Standard hotel check-out time is 12:00 hrs. Requests for late check-out are subject to hotel availability and may be subject to additional charges." },
    ],
  },
  {
    id: "visa-assistance",
    title: "Visa Assistance",
    icon: "🛢️",
    plain: "We help with the visa paperwork and application, but the embassy makes the final call — we can't guarantee approval, and visa fees usually aren't refundable if it's refused.",
    content: [
      { subtitle: "Scope of Assistance", text: "We assist clients with visa applications for various countries by providing documentation guidance, application submission, and liaison services with embassies or visa processing centers where applicable." },
      { subtitle: "No Guarantee of Approval", text: "Final approval is solely at the discretion of the embassy or consulate. Get Trip Go does not guarantee visa approval under any circumstances." },
      { subtitle: "Non-Refundable Fees", text: "Visa fees and service charges may be non-refundable in the event of refusal, withdrawal, or cancellation, subject to the applicable terms of the relevant embassy or consulate." },
    ],
  },
  {
    id: "prohibited-use",
    title: "Prohibited Use",
    icon: "🚫",
    plain: "Don't misuse the platform. No fake bookings, no scraping, no fraud. Violations can get your account permanently banned.",
    content: [
      { subtitle: "Prohibited Activities", text: "You may not use Get Trip Go for any unlawful purpose, to submit false or misleading information, to impersonate others, to conduct unauthorised data scraping, or to interfere with platform security." },
      { subtitle: "Fraudulent Bookings", text: "Any attempt to make fraudulent bookings, use stolen payment methods, or exploit pricing errors will result in immediate account termination and may be reported to relevant authorities." },
      { subtitle: "Automated Access", text: "Use of bots, crawlers, or automated tools to access or extract data from our platform without prior written consent is strictly prohibited." },
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    icon: "⚖️",
    plain: "We do our best, but we can't guarantee everything goes perfectly. Our liability is limited to what you paid us — not the full trip cost.",
    content: [
      { subtitle: "Service Availability", text: "Get Trip Go does not guarantee uninterrupted or error-free service. We are not liable for losses arising from platform downtime, data loss, or technical failures beyond our control." },
      { subtitle: "Third-Party Providers", text: "Get Trip Go acts as an intermediary and is not liable for the actions, errors, omissions, or negligence of third-party travel providers, including airlines, hotels, and tour operators." },
      { subtitle: "Liability Cap", text: "To the maximum extent permitted by applicable law, Get Trip Go's total liability for any claim arising from use of our services shall not exceed the amount paid by you for the specific booking in question." },
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    icon: "🏛️",
    plain: "These terms are governed by Indian law. Any disputes will be handled in New Delhi courts.",
    content: [
      { subtitle: "Jurisdiction", text: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of New Delhi." },
      { subtitle: "Dispute Resolution", text: "Before initiating legal proceedings, both parties agree to attempt resolution through good-faith negotiation. If unresolved within 30 days, disputes may be referred to arbitration under the Arbitration and Conciliation Act, 1996." },
    ],
  },
  {
    id: "contact",
    title: "Contact & Notices",
    icon: "📬",
    plain: "Questions? Reach us at contact@gettripgo.com or write to our New Delhi office.",
    content: [
      { subtitle: "Legal Notices", text: "All legal notices to Get Trip Go should be sent in writing to: Get Trip Go Pvt. Ltd., 102, 52A, Vijay Block, Laxmi Nagar, New Delhi – 110092, or via email to legal@gettripgo.com." },
      { subtitle: "Customer Support", text: "For general support queries, please contact us at contact@gettripgo.com or call +91 96 6789 2504 (Mon–Sat, 9 AM – 9 PM IST)." },
    ],
  },
];

export default function TermsPage() {
  const [plainMode, setPlainMode] = useState<Record<string, boolean>>({});
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [agreeTime, setAgreeTime] = useState<string | null>(null);
  const [clauseQuery, setClauseQuery] = useState("");
  const [activeSection, setActiveSection] = useState("acceptance");
  const [progress, setProgress] = useState(0);
  const [showPrint, setShowPrint] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = contentRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.scrollHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      setProgress(Math.min(100, Math.round((scrolled / total) * 100)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach(s => { const el = document.getElementById(s.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const togglePlain = (id: string) => setPlainMode(p => ({ ...p, [id]: !p[id] }));

  const toggleBookmark = (id: string) => {
    setBookmarks(b => b.includes(id) ? b.filter(x => x !== id) : [...b, id]);
  };

  const handleAgree = () => {
    setAgreed(true);
    setAgreeTime(new Date().toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }));
  };

  const download = () => {
    const text = sections.map(s =>
      `${s.title}\n${"─".repeat(40)}\n` + s.content.map(c => `${c.subtitle}\n${c.text}`).join("\n\n")
    ).join("\n\n\n");
    const blob = new Blob([`GET TRIP GO — TERMS OF SERVICE\nLast updated: August 16, 2026\n\n${text}`], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "GetTripGo-Terms.txt"; a.click();
    URL.revokeObjectURL(url);
  };

  const highlight = (text: string) => {
    if (!clauseQuery.trim()) return <>{text}</>;
    const regex = new RegExp(`(${clauseQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    return <>{text.split(regex).map((p, i) => regex.test(p)
      ? <mark key={i} style={{ background: "#fef08a", color: "#0a1628", borderRadius: 3, padding: "0 2px" }}>{p}</mark>
      : p)}</>;
  };

  const matchedSections = clauseQuery.trim()
    ? sections.filter(s =>
        s.title.toLowerCase().includes(clauseQuery.toLowerCase()) ||
        s.content.some(c => c.text.toLowerCase().includes(clauseQuery.toLowerCase()) || c.subtitle.toLowerCase().includes(clauseQuery.toLowerCase()))
      )
    : sections;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .tp { font-family: 'DM Sans', sans-serif; background: #F8F9FF; color: #0a1628; min-height: 100vh; }
        .tp * { box-sizing: border-box; margin: 0; padding: 0; }

        /* Progress bar */
        .progress-bar { position: fixed; top: 0; left: 0; height: 3px; background: #2B3FDE; transition: width 0.1s linear; z-index: 100; }

        /* Banner */
        .banner { background: #fff; border-bottom: 1px solid rgba(10,22,40,0.07); padding: 12px 24px; display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .banner-dot { width: 8px; height: 8px; border-radius: 50%; background: #f59e0b; flex-shrink: 0; }
        .banner-left { display: flex; align-items: center; gap: 10px; }
        .banner-text { font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 600; color: #0a1628; }
        .banner-sub { font-size: 12px; color: rgba(10,22,40,0.45); margin-left: 4px; }
        .banner-close { width: 28px; height: 28px; border-radius: 7px; border: 1px solid rgba(10,22,40,0.1); background: transparent; cursor: pointer; font-size: 14px; color: rgba(10,22,40,0.4); display: flex; align-items: center; justify-content: center; transition: background 0.15s; }
        .banner-close:hover { background: rgba(10,22,40,0.05); }

        /* Hero */
        .hero { padding: 64px 24px 52px; text-align: center; background: #F8F9FF; }
        .hero-eyebrow { display: inline-flex; align-items: center; gap: 7px; font-family: 'Sora', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(10,22,40,0.38); border: 1px solid rgba(10,22,40,0.1); background: #fff; padding: 5px 14px; border-radius: 100px; margin-bottom: 22px; }
        .hero-eyebrow::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #0a1628; display: inline-block; }
        .hero h1 { font-family: 'Sora', sans-serif; font-size: clamp(36px, 6vw, 52px); font-weight: 800; letter-spacing: -0.03em; line-height: 1.05; color: #0a1628; margin-bottom: 14px; }
        .hero-sub { font-size: 15px; color: rgba(10,22,40,0.47); max-width: 460px; margin: 0 auto 20px; line-height: 1.65; }
        .hero-meta { display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
        .hero-chip { display: inline-flex; align-items: center; gap: 6px; font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 600; color: rgba(10,22,40,0.42); background: #fff; border: 1px solid rgba(10,22,40,0.09); padding: 5px 12px; border-radius: 100px; }
        .dl-btn { display: inline-flex; align-items: center; gap: 6px; padding: 8px 18px; font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 700; color: #fff; background: #0a1628; border: none; border-radius: 8px; cursor: pointer; transition: opacity 0.2s; }
        .dl-btn:hover { opacity: 0.87; }

        /* Clause finder */
        .clause-bar { max-width: 560px; margin: 0 auto; display: grid; grid-template-columns: 1fr auto; gap: 10px; }
        .clause-input-wrap { position: relative; }
        .clause-input-wrap input { width: 100%; padding: 13px 40px 13px 44px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #0a1628; background: #fff; border: 1.5px solid rgba(10,22,40,0.1); border-radius: 12px; outline: none; transition: border-color 0.2s, box-shadow 0.2s; box-shadow: 0 2px 10px rgba(10,22,40,0.05); }
        .clause-input-wrap input::placeholder { color: rgba(10,22,40,0.3); }
        .clause-input-wrap input:focus { border-color: #0a1628; box-shadow: 0 0 0 4px rgba(10,22,40,0.05); }
        .s-icon { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); font-size: 16px; opacity: 0.32; pointer-events: none; }
        .s-clear { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); font-size: 12px; color: rgba(10,22,40,0.35); background: rgba(10,22,40,0.06); border: none; border-radius: 5px; padding: 2px 7px; cursor: pointer; font-family: 'Sora', sans-serif; font-weight: 700; }
        .jump-btn { padding: 0 20px; font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700; color: #fff; background: #0a1628; border: none; border-radius: 12px; cursor: pointer; transition: opacity 0.2s; white-space: nowrap; }
        .jump-btn:hover { opacity: 0.87; }
        .match-count { text-align: center; margin-top: 10px; font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 600; color: rgba(10,22,40,0.38); }

        /* Layout */
        .layout { max-width: 1060px; margin: 0 auto; padding: 48px 24px 64px; display: grid; grid-template-columns: 210px 1fr; gap: 48px; align-items: start; }

        /* Sidebar */
        .sidebar { position: sticky; top: 24px; }
        .sb-label { font-family: 'Sora', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.13em; text-transform: uppercase; color: rgba(10,22,40,0.32); margin-bottom: 10px; padding-left: 4px; }
        .toc-item { display: flex; align-items: center; gap: 8px; width: 100%; padding: 9px 12px; border-radius: 9px; border: none; background: transparent; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: rgba(10,22,40,0.48); cursor: pointer; transition: all 0.15s; text-align: left; margin-bottom: 2px; }
        .toc-item:hover { background: rgba(10,22,40,0.05); color: #0a1628; }
        .toc-item.active { background: rgba(43,63,222,0.07); color: #2B3FDE; font-weight: 600; }
        .toc-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(10,22,40,0.15); flex-shrink: 0; transition: background 0.2s; }
        .toc-item.active .toc-dot { background: #2B3FDE; }

        /* Progress tracker in sidebar */
        .progress-box { margin-top: 20px; background: #fff; border: 1px solid rgba(10,22,40,0.08); border-radius: 14px; padding: 16px; }
        .pb-label { font-family: 'Sora', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(10,22,40,0.35); margin-bottom: 10px; }
        .pb-track { height: 6px; background: rgba(10,22,40,0.07); border-radius: 6px; overflow: hidden; margin-bottom: 8px; }
        .pb-fill { height: 100%; background: #2B3FDE; border-radius: 6px; transition: width 0.2s; }
        .pb-pct { font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 700; color: #0a1628; }
        .pb-sub { font-size: 11px; color: rgba(10,22,40,0.38); margin-top: 2px; }

        /* Agree box in sidebar */
        .agree-box { margin-top: 16px; background: #fff; border: 1px solid rgba(10,22,40,0.08); border-radius: 14px; padding: 16px; }
        .agree-title { font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700; color: #0a1628; margin-bottom: 4px; }
        .agree-sub { font-size: 11px; color: rgba(10,22,40,0.4); margin-bottom: 12px; line-height: 1.5; }
        .agree-btn { width: 100%; padding: 10px; font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.04em; color: #fff; background: #0a1628; border: none; border-radius: 8px; cursor: pointer; transition: opacity 0.2s; }
        .agree-btn:hover { opacity: 0.87; }
        .agree-btn.done { background: #059669; cursor: default; }
        .agree-timestamp { margin-top: 10px; font-size: 10px; color: rgba(10,22,40,0.4); line-height: 1.5; font-family: 'Sora', sans-serif; }
        .agree-timestamp strong { color: #059669; font-weight: 700; display: block; margin-bottom: 2px; }

        /* Bookmarks panel */
        .bm-toggle { display: flex; align-items: center; justify-content: space-between; margin-top: 16px; background: #fff; border: 1px solid rgba(10,22,40,0.08); border-radius: 14px; padding: 12px 14px; cursor: pointer; transition: background 0.12s; }
        .bm-toggle:hover { background: #F8F9FF; }
        .bm-toggle-title { font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700; color: #0a1628; }
        .bm-count { font-family: 'Sora', sans-serif; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 100px; background: rgba(10,22,40,0.07); color: rgba(10,22,40,0.45); }
        .bm-list { background: #fff; border: 1px solid rgba(10,22,40,0.08); border-top: none; border-radius: 0 0 14px 14px; padding: 8px; }
        .bm-item { display: flex; align-items: center; justify-content: space-between; padding: 8px 10px; border-radius: 8px; cursor: pointer; transition: background 0.12s; }
        .bm-item:hover { background: #F8F9FF; }
        .bm-item-name { font-size: 12px; font-weight: 500; color: #0a1628; }
        .bm-item-remove { font-size: 10px; color: rgba(10,22,40,0.3); cursor: pointer; padding: 2px 6px; border-radius: 4px; transition: background 0.12s; }
        .bm-item-remove:hover { background: rgba(10,22,40,0.06); color: #0a1628; }
        .bm-empty { font-size: 12px; color: rgba(10,22,40,0.35); padding: 8px 10px; }

        /* Section cards */
        .sec-card { background: #fff; border: 1px solid rgba(10,22,40,0.08); border-radius: 16px; padding: 28px; margin-bottom: 14px; scroll-margin-top: 32px; transition: border-color 0.2s; }
        .sec-card:hover { border-color: rgba(10,22,40,0.14); }
        .sec-card.bookmarked { border-left: 3px solid #2B3FDE; }
        .sec-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 20px; }
        .sec-title-row { display: flex; align-items: center; gap: 10px; }
        .sec-icon { font-size: 20px; }
        .sec-title { font-family: 'Sora', sans-serif; font-size: 17px; font-weight: 700; color: #0a1628; letter-spacing: -0.02em; }
        .sec-actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
        .plain-btn { display: flex; align-items: center; gap: 5px; padding: 6px 12px; font-family: 'Sora', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; border-radius: 7px; border: 1px solid rgba(10,22,40,0.1); background: transparent; color: rgba(10,22,40,0.4); cursor: pointer; transition: all 0.15s; }
        .plain-btn:hover { border-color: #0a1628; color: #0a1628; }
        .plain-btn.active { background: #0a1628; color: #fff; border-color: #0a1628; }
        .bm-btn { width: 30px; height: 30px; border-radius: 7px; border: 1px solid rgba(10,22,40,0.1); background: transparent; font-size: 14px; cursor: pointer; transition: all 0.15s; display: flex; align-items: center; justify-content: center; }
        .bm-btn:hover { border-color: #0a1628; }
        .bm-btn.active { background: rgba(43,63,222,0.08); border-color: #2B3FDE; }

        /* Plain mode */
        .plain-box { background: #F8F9FF; border: 1px solid rgba(10,22,40,0.08); border-radius: 10px; padding: 14px 16px; margin-bottom: 16px; }
        .plain-label { font-family: 'Sora', sans-serif; font-size: 9px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(10,22,40,0.35); margin-bottom: 6px; }
        .plain-text { font-size: 14px; font-weight: 500; color: #0a1628; line-height: 1.6; }

        /* Sub items */
        .sub-item { padding: 14px 0; border-bottom: 1px solid rgba(10,22,40,0.05); }
        .sub-item:last-child { border-bottom: none; padding-bottom: 0; }
        .sub-item:first-child { padding-top: 0; }
        .sub-title { font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: rgba(10,22,40,0.38); margin-bottom: 6px; display: flex; align-items: center; gap: 8px; }
        .sub-title::before { content: ''; width: 3px; height: 12px; border-radius: 2px; background: #2B3FDE; display: block; }
        .sub-text { font-size: 13.5px; line-height: 1.72; color: rgba(10,22,40,0.54); }

        .no-results { text-align: center; padding: 56px 0; color: rgba(10,22,40,0.32); font-size: 14px; }
        .no-results span { display: block; font-size: 32px; margin-bottom: 10px; }

        /* CTA */
        .cta-card { background: #fff; border: 1px solid rgba(10,22,40,0.08); border-radius: 20px; padding: 36px 40px; display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 32px; margin-bottom: 20px; }
        .cta-pill { display: inline-flex; align-items: center; gap: 7px; font-family: 'Sora', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.13em; text-transform: uppercase; color: rgba(10,22,40,0.38); border: 1px solid rgba(10,22,40,0.1); background: #F8F9FF; padding: 5px 13px; border-radius: 100px; margin-bottom: 14px; }
        .cta-pill::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #10b981; display: inline-block; }
        .cta-title { font-family: 'Sora', sans-serif; font-size: 22px; font-weight: 800; letter-spacing: -0.025em; color: #0a1628; margin-bottom: 8px; }
        .cta-sub { font-size: 13.5px; color: rgba(10,22,40,0.43); line-height: 1.6; max-width: 340px; }
        .cta-sub span { font-weight: 600; color: #0a1628; }
        .cta-btns { display: flex; flex-direction: column; gap: 10px; }
        .cta-btn-p { padding: 12px 26px; font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.04em; color: #fff; background: #0a1628; border: none; border-radius: 10px; cursor: pointer; text-decoration: none; text-align: center; white-space: nowrap; transition: opacity 0.2s, transform 0.15s; display: block; }
        .cta-btn-p:hover { opacity: 0.87; transform: translateY(-1px); }
        .cta-btn-s { padding: 12px 26px; font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.04em; color: #0a1628; background: transparent; border: 1.5px solid rgba(10,22,40,0.14); border-radius: 10px; cursor: pointer; text-decoration: none; text-align: center; white-space: nowrap; transition: border-color 0.2s, transform 0.15s; display: block; }
        .cta-btn-s:hover { border-color: #0a1628; transform: translateY(-1px); }
        .footer-links { display: flex; gap: 20px; justify-content: center; }
        .footer-link { font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 600; color: rgba(10,22,40,0.45); text-decoration: none; transition: color 0.15s; }
        .footer-link:hover { color: #0a1628; }

        @media (max-width: 768px) {
          .layout { grid-template-columns: 1fr; }
          .sidebar { position: static; }
          .cta-card { grid-template-columns: 1fr; }
          .clause-bar { grid-template-columns: 1fr; }
        }

        @media print {
          .banner, .hero-meta, .clause-bar, .sidebar, .sec-actions, .cta-card, .footer-links, .progress-bar { display: none !important; }
          .layout { grid-template-columns: 1fr; }
          .sec-card { border: none; padding: 0; margin-bottom: 24px; break-inside: avoid; }
        }
      `}</style>

      <div className="tp" ref={contentRef}>
        {/* Progress bar */}
        <div className="progress-bar" style={{ width: `${progress}%` }} />

        {/* Banner */}
        {showBanner && (
          <div className="banner">
            <div className="banner-left">
              <div className="banner-dot" />
              <div>
                <span className="banner-text">Terms updated</span>
                <span className="banner-sub">— Revised Terms of Service effective August 16, 2026. Updated booking deposit, payment schedule, visa, and cancellation terms.</span>
              </div>
            </div>
            <button className="banner-close" onClick={() => setShowBanner(false)}>✕</button>
          </div>
        )}

        {/* Hero */}
        <section className="hero">
          <div className="hero-eyebrow">Legal</div>
          <h1>Terms of Service</h1>
          <p className="hero-sub">Please read these terms carefully before using Get Trip Go's platform, services, or mobile application.</p>
          <div className="hero-meta">
            <span className="hero-chip">🕐 8 min read</span>
            <span className="hero-chip">📅 Last updated: August 16, 2026</span>
            <span className="hero-chip">📋 {sections.length} sections</span>
            <button className="dl-btn" onClick={download}>📥 Download Terms</button>
            <button className="dl-btn" style={{ background: "rgba(10,22,40,0.08)", color: "#0a1628" }} onClick={() => window.print()}>🖨️ Print</button>
          </div>

          {/* Clause finder */}
          <div className="clause-bar">
            <div className="clause-input-wrap">
              <span className="s-icon">🔍</span>
              <input aria-label="Find a clause… e.g. refund, liability, cancellation"
                type="text"
                placeholder="Find a clause… e.g. refund, liability, cancellation"
                value={clauseQuery}
                onChange={e => setClauseQuery(e.target.value)}
              />
              {clauseQuery && <button className="s-clear" onClick={() => setClauseQuery("")}>✕</button>}
            </div>
            <button className="jump-btn" onClick={() => {
              if (matchedSections.length > 0) scrollTo(matchedSections[0].id);
            }}>Jump →</button>
          </div>
          {clauseQuery && (
            <div className="match-count">
              {matchedSections.length} section{matchedSections.length !== 1 ? "s" : ""} matched
            </div>
          )}
        </section>

        {/* Layout */}
        <div className="layout">

          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sb-label">Contents</div>
            {sections.map(s => (
              <button key={s.id} className={`toc-item${activeSection === s.id ? " active" : ""}`} onClick={() => scrollTo(s.id)}>
                <span className="toc-dot" />
                {s.title}
              </button>
            ))}

            {/* Progress tracker */}
            <div className="progress-box">
              <div className="pb-label">📊 Reading Progress</div>
              <div className="pb-track"><div className="pb-fill" style={{ width: `${progress}%` }} /></div>
              <div className="pb-pct">{progress}% read</div>
              <div className="pb-sub">{progress < 100 ? `${Math.ceil((100 - progress) / 10)} min remaining` : "Fully read ✓"}</div>
            </div>

            {/* Agree & timestamp */}
            <div className="agree-box">
              <div className="agree-title">🔔 Agree to Terms</div>
              <div className="agree-sub">Confirm you have read and accept these Terms of Service.</div>
              <button className={`agree-btn${agreed ? " done" : ""}`} onClick={handleAgree} disabled={agreed}>
                {agreed ? "✓ Agreed" : "I Agree to These Terms"}
              </button>
              {agreeTime && (
                <div className="agree-timestamp">
                  <strong>✓ Agreement recorded</strong>
                  {agreeTime}
                </div>
              )}
            </div>

            {/* Bookmarks */}
            <div>
              <div className="bm-toggle" onClick={() => setShowBookmarks(!showBookmarks)}>
                <span className="bm-toggle-title">🔖 My Bookmarks</span>
                <span className="bm-count">{bookmarks.length}</span>
              </div>
              {showBookmarks && (
                <div className="bm-list">
                  {bookmarks.length === 0
                    ? <div className="bm-empty">No bookmarks yet. Click 🔖 on any section.</div>
                    : bookmarks.map(id => {
                        const s = sections.find(x => x.id === id);
                        return s ? (
                          <div key={id} className="bm-item">
                            <span className="bm-item-name" onClick={() => scrollTo(id)}>{s.icon} {s.title}</span>
                            <span className="bm-item-remove" onClick={() => toggleBookmark(id)}>✕</span>
                          </div>
                        ) : null;
                      })
                  }
                </div>
              )}
            </div>
          </aside>

          {/* Content */}
          <div>
            {matchedSections.length === 0 ? (
              <div className="no-results"><span>🔍</span>No clauses matched "{clauseQuery}"</div>
            ) : (
              matchedSections.map(s => (
                <div key={s.id} id={s.id} className={`sec-card${bookmarks.includes(s.id) ? " bookmarked" : ""}`}>
                  <div className="sec-header">
                    <div className="sec-title-row">
                      <span className="sec-icon">{s.icon}</span>
                      <h2 className="sec-title">{s.title}</h2>
                    </div>
                    <div className="sec-actions">
                      <button className={`plain-btn${plainMode[s.id] ? " active" : ""}`} onClick={() => togglePlain(s.id)}>
                        {plainMode[s.id] ? "⚖️ Legal" : "💬 Plain"}
                      </button>
                      <button className={`bm-btn${bookmarks.includes(s.id) ? " active" : ""}`} onClick={() => toggleBookmark(s.id)} title="Bookmark">
                        {bookmarks.includes(s.id) ? "🔖" : "🏷️"}
                      </button>
                    </div>
                  </div>

                  {plainMode[s.id] && (
                    <div className="plain-box">
                      <div className="plain-label">Plain English</div>
                      <div className="plain-text">{s.plain}</div>
                    </div>
                  )}

                  <div>
                    {s.content.map(item => (
                      <div key={item.subtitle} className="sub-item">
                        <div className="sub-title">{item.subtitle}</div>
                        <p className="sub-text">{highlight(item.text)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}

            {/* CTA */}
            <div style={{ marginTop: 8 }}>
              <div className="cta-card">
                <div>
                  <div className="cta-pill">Legal Support</div>
                  <div className="cta-title">Questions about these terms?</div>
                  <p className="cta-sub">Contact our legal team at <span>legal@gettripgo.com</span> or reach support for general queries.</p>
                </div>
                <div className="cta-btns">
                  <a href="/contact" className="cta-btn-p">Contact Us →</a>
                  <a href="/privacy" className="cta-btn-s">Privacy Policy</a>
                </div>
              </div>
              <div className="footer-links">
                <a href="/privacy" className="footer-link">Privacy Policy</a>
                <a href="/cookies" className="footer-link">Cookie Policy</a>
                <a href="/contact" className="footer-link">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}