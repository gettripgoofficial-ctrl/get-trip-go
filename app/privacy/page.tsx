"use client";
import { useState, useEffect, useRef } from "react";

const sections = [
  {
    id: "information-we-collect",
    title: "Information We Collect",
    icon: "📋",
    content: [
      { subtitle: "Personal Information", text: "When you register or make a booking, we collect your name, email address, mobile number, date of birth, passport details (for international travel), and payment information." },
      { subtitle: "Usage Data", text: "We automatically collect information about how you interact with our Platform — including IP address, browser type, pages visited, search queries, and time spent on pages." },
      { subtitle: "Device Information", text: "We collect device identifiers, operating system, and mobile network information to optimise your experience across devices." },
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    icon: "⚙️",
    content: [
      { subtitle: "Booking & Services", text: "We use your personal information to process bookings, send confirmation emails and itineraries, and communicate about changes or updates to your travel." },
      { subtitle: "Personalisation", text: "We analyse your search history and preferences to show relevant deals, destination recommendations, and personalised offers." },
      { subtitle: "Security & Fraud Prevention", text: "We use your information to detect and prevent fraudulent transactions, protect the integrity of our platform, and comply with legal obligations." },
      { subtitle: "Marketing Communications", text: "With your consent, we may send you promotional emails or push notifications about deals and offers. You can opt out at any time via your account settings." },
    ],
  },
  {
    id: "sharing",
    title: "Sharing Your Information",
    icon: "🤝",
    content: [
      { subtitle: "Service Providers", text: "We share necessary booking details with airlines, hotels, and other travel providers to fulfill your bookings. These providers are contractually obligated to protect your data." },
      { subtitle: "Payment Processors", text: "Payment details are securely transmitted to our PCI-DSS compliant payment partners. Get Trip Go does not store full card numbers." },
      { subtitle: "Legal Compliance", text: "We may disclose your information when required by law, regulation, or valid legal process such as a court order or government authority request." },
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    icon: "🔐",
    content: [
      { subtitle: "Access & Correction", text: "You can access, update, or correct your personal information at any time through your account profile or by contacting us." },
      { subtitle: "Data Deletion", text: "You may request deletion of your account and associated personal data. Please note that some data may be retained to comply with legal obligations or for fraud prevention." },
      { subtitle: "Opt-Out", text: "You can opt out of marketing communications at any time by clicking 'Unsubscribe' in our emails or updating your notification preferences in the app." },
    ],
  },
  {
    id: "retention-security",
    title: "Data Retention & Security",
    icon: "🛡️",
    content: [
      { subtitle: "Retention", text: "We retain your personal data for as long as your account is active or as needed to provide services, comply with legal obligations, and resolve disputes." },
      { subtitle: "Security Measures", text: "We use industry-standard encryption (TLS/SSL), secure data centres, and access controls to protect your information. However, no transmission over the internet is 100% secure." },
    ],
  },
];

const READING_TIME = "5 min read";

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("information-we-collect");
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const [showBanner, setShowBanner] = useState(true);
  const [consents, setConsents] = useState({ marketing: true, analytics: true, functional: true });
  const [consentSaved, setConsentSaved] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const highlight = (text: string) => {
    if (!search.trim()) return text;
    const regex = new RegExp(`(${search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, i) =>
      regex.test(part)
        ? <mark key={i} style={{ background: "#fef08a", color: "#0a1628", borderRadius: 3, padding: "0 2px" }}>{part}</mark>
        : part
    );
  };

  const copySection = (s: typeof sections[0]) => {
    const text = `${s.title}\n\n` + s.content.map(c => `${c.subtitle}\n${c.text}`).join("\n\n");
    navigator.clipboard.writeText(text);
    setCopied(s.id);
    setTimeout(() => setCopied(null), 2000);
  };

  const downloadPdf = () => {
    const content = sections.map(s =>
      `${s.title}\n${"─".repeat(40)}\n` + s.content.map(c => `${c.subtitle}\n${c.text}`).join("\n\n")
    ).join("\n\n\n");
    const blob = new Blob([`GET TRIP GO — PRIVACY POLICY\nLast updated: June 4, 2025\n\n${content}`], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "GetTripGo-Privacy-Policy.txt"; a.click();
    URL.revokeObjectURL(url);
  };

  const saveConsents = () => {
    setConsentSaved(true);
    setTimeout(() => setConsentSaved(false), 2500);
  };

  const filteredSections = sections.map(s => ({
    ...s,
    content: s.content.filter(c =>
      !search.trim() ||
      c.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      c.text.toLowerCase().includes(search.toLowerCase()) ||
      s.title.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(s => s.content.length > 0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .pp { font-family: 'DM Sans', sans-serif; background: #F8F9FF; color: #0a1628; min-height: 100vh; }
        .pp * { box-sizing: border-box; margin: 0; padding: 0; }

        /* Banner */
        .banner { background: #fff; border-bottom: 1px solid rgba(10,22,40,0.07); padding: 12px 24px; display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .banner-left { display: flex; align-items: center; gap: 10px; }
        .banner-dot { width: 8px; height: 8px; border-radius: 50%; background: #f59e0b; flex-shrink: 0; }
        .banner-text { font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 600; color: #0a1628; }
        .banner-sub { font-size: 12px; color: rgba(10,22,40,0.45); margin-left: 4px; }
        .banner-close { width: 28px; height: 28px; border-radius: 7px; border: 1px solid rgba(10,22,40,0.1); background: transparent; cursor: pointer; font-size: 14px; color: rgba(10,22,40,0.4); display: flex; align-items: center; justify-content: center; transition: background 0.15s; flex-shrink: 0; }
        .banner-close:hover { background: rgba(10,22,40,0.05); }

        /* Hero */
        .hero { padding: 64px 24px 52px; text-align: center; background: #F8F9FF; }
        .hero-eyebrow { display: inline-flex; align-items: center; gap: 7px; font-family: 'Sora', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(10,22,40,0.38); border: 1px solid rgba(10,22,40,0.1); background: #fff; padding: 5px 14px; border-radius: 100px; margin-bottom: 22px; }
        .hero-eyebrow::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #0a1628; }
        .hero h1 { font-family: 'Sora', sans-serif; font-size: clamp(28px, 4vw, 42px); font-weight: 800; letter-spacing: -0.03em; line-height: 1.05; color: #0a1628; margin-bottom: 14px; }
        .hero-sub { font-size: 15px; color: rgba(10,22,40,0.47); max-width: 460px; margin: 0 auto 20px; line-height: 1.65; }
        .hero-meta { display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap; }
        .hero-chip { display: inline-flex; align-items: center; gap: 6px; font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 600; color: rgba(10,22,40,0.42); background: #fff; border: 1px solid rgba(10,22,40,0.09); padding: 5px 12px; border-radius: 100px; }
        .dl-btn { display: inline-flex; align-items: center; gap: 6px; padding: 8px 18px; font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.04em; color: #fff; background: #0a1628; border: none; border-radius: 8px; cursor: pointer; transition: opacity 0.2s, transform 0.15s; }
        .dl-btn:hover { opacity: 0.87; transform: translateY(-1px); }

        /* Search */
        .search-bar { max-width: 480px; margin: 28px auto 0; position: relative; }
        .search-bar input { width: 100%; padding: 13px 44px 13px 44px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #0a1628; background: #fff; border: 1.5px solid rgba(10,22,40,0.1); border-radius: 12px; outline: none; transition: border-color 0.2s, box-shadow 0.2s; box-shadow: 0 2px 10px rgba(10,22,40,0.05); }
        .search-bar input::placeholder { color: rgba(10,22,40,0.3); }
        .search-bar input:focus { border-color: #0a1628; box-shadow: 0 0 0 4px rgba(10,22,40,0.05); }
        .s-icon { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); font-size: 16px; opacity: 0.32; pointer-events: none; }
        .s-clear { position: absolute; right: 13px; top: 50%; transform: translateY(-50%); font-size: 13px; color: rgba(10,22,40,0.35); background: rgba(10,22,40,0.06); border: none; border-radius: 5px; padding: 2px 7px; cursor: pointer; font-family: 'Sora', sans-serif; font-weight: 700; }

        /* Layout */
        .layout { max-width: 1060px; margin: 0 auto; padding: 48px 24px 64px; display: grid; grid-template-columns: 210px 1fr; gap: 48px; align-items: start; }

        /* Sidebar TOC */
        .toc { position: sticky; top: 24px; }
        .toc-label { font-family: 'Sora', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.13em; text-transform: uppercase; color: rgba(10,22,40,0.32); margin-bottom: 10px; padding-left: 4px; }
        .toc-item { display: flex; align-items: center; gap: 8px; width: 100%; padding: 9px 12px; border-radius: 9px; border: none; background: transparent; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: rgba(10,22,40,0.48); cursor: pointer; transition: all 0.15s; text-align: left; margin-bottom: 2px; }
        .toc-item:hover { background: rgba(10,22,40,0.05); color: #0a1628; }
        .toc-item.active { background: rgba(43,63,222,0.07); color: #2B3FDE; font-weight: 600; }
        .toc-dot { width: 6px; height: 6px; border-radius: 50%; background: rgba(10,22,40,0.15); flex-shrink: 0; transition: background 0.2s; }
        .toc-item.active .toc-dot { background: #2B3FDE; }

        /* Consent box */
        .consent-box { margin-top: 24px; background: #fff; border: 1px solid rgba(10,22,40,0.08); border-radius: 14px; padding: 16px; }
        .consent-title { font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700; color: #0a1628; margin-bottom: 4px; }
        .consent-sub { font-size: 11px; color: rgba(10,22,40,0.4); margin-bottom: 14px; line-height: 1.5; }
        .consent-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
        .consent-row:last-of-type { margin-bottom: 14px; }
        .consent-row-label { font-size: 12px; font-weight: 500; color: #0a1628; }
        .consent-row-sub { font-size: 10px; color: rgba(10,22,40,0.38); }
        .toggle { position: relative; width: 36px; height: 20px; flex-shrink: 0; }
        .toggle input { opacity: 0; width: 0; height: 0; }
        .toggle-slider { position: absolute; inset: 0; border-radius: 20px; background: rgba(10,22,40,0.12); cursor: pointer; transition: background 0.2s; }
        .toggle input:checked + .toggle-slider { background: #2B3FDE; }
        .toggle-slider::before { content: ''; position: absolute; width: 14px; height: 14px; border-radius: 50%; background: #fff; top: 3px; left: 3px; transition: transform 0.2s; }
        .toggle input:checked + .toggle-slider::before { transform: translateX(16px); }
        .consent-save { width: 100%; padding: 9px; font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 700; color: #fff; background: #0a1628; border: none; border-radius: 8px; cursor: pointer; transition: opacity 0.2s; letter-spacing: 0.04em; }
        .consent-save:hover { opacity: 0.85; }
        .consent-save.saved { background: #059669; }

        /* Content */
        .content {}

        /* Intro card */
        .intro-card { background: #fff; border: 1px solid rgba(10,22,40,0.08); border-radius: 16px; padding: 24px 28px; margin-bottom: 20px; }
        .intro-card p { font-size: 14px; line-height: 1.75; color: rgba(10,22,40,0.52); }
        .intro-link { color: #0a1628; font-weight: 600; text-decoration: underline; text-underline-offset: 3px; }

        /* Section card */
        .sec-card { background: #fff; border: 1px solid rgba(10,22,40,0.08); border-radius: 16px; padding: 28px; margin-bottom: 16px; scroll-margin-top: 32px; transition: border-color 0.2s; }
        .sec-card:hover { border-color: rgba(10,22,40,0.14); }
        .sec-card-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 22px; }
        .sec-card-title { font-family: 'Sora', sans-serif; font-size: 18px; font-weight: 700; color: #0a1628; letter-spacing: -0.02em; display: flex; align-items: center; gap: 10px; }
        .sec-icon { font-size: 20px; }
        .copy-btn { display: flex; align-items: center; gap: 5px; padding: 6px 12px; font-family: 'Sora', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(10,22,40,0.38); background: #F8F9FF; border: 1px solid rgba(10,22,40,0.09); border-radius: 7px; cursor: pointer; transition: all 0.15s; flex-shrink: 0; margin-top: 2px; }
        .copy-btn:hover { color: #0a1628; border-color: rgba(10,22,40,0.2); }
        .copy-btn.copied { color: #059669; border-color: #059669; background: #f0fdf4; }

        .sub-item { padding: 14px 0; border-bottom: 1px solid rgba(10,22,40,0.05); }
        .sub-item:last-child { border-bottom: none; padding-bottom: 0; }
        .sub-item:first-child { padding-top: 0; }
        .sub-title { font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(10,22,40,0.38); margin-bottom: 6px; display: flex; align-items: center; gap: 8px; }
        .sub-title::before { content: ''; width: 3px; height: 12px; border-radius: 2px; background: #2B3FDE; display: block; }
        .sub-text { font-size: 13.5px; line-height: 1.72; color: rgba(10,22,40,0.54); }

        .no-results { text-align: center; padding: 56px 0; color: rgba(10,22,40,0.32); font-size: 14px; }
        .no-results span { display: block; font-size: 32px; margin-bottom: 10px; }

        /* CTA */
        .cta-wrap { margin-top: 20px; }
        .cta-card { background: #fff; border: 1px solid rgba(10,22,40,0.08); border-radius: 20px; padding: 36px 40px; display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 32px; }
        .cta-pill { display: inline-flex; align-items: center; gap: 7px; font-family: 'Sora', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.13em; text-transform: uppercase; color: rgba(10,22,40,0.38); border: 1px solid rgba(10,22,40,0.1); background: #F8F9FF; padding: 5px 13px; border-radius: 100px; margin-bottom: 14px; }
        .cta-pill::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #10b981; }
        .cta-title { font-family: 'Sora', sans-serif; font-size: 22px; font-weight: 800; letter-spacing: -0.025em; color: #0a1628; margin-bottom: 8px; }
        .cta-sub { font-size: 13.5px; color: rgba(10,22,40,0.43); line-height: 1.6; max-width: 360px; }
        .cta-sub span { font-weight: 600; color: #0a1628; }
        .cta-btns { display: flex; flex-direction: column; gap: 10px; }
        .cta-btn-p { padding: 12px 26px; font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.04em; color: #fff; background: #0a1628; border: none; border-radius: 10px; cursor: pointer; text-decoration: none; text-align: center; white-space: nowrap; transition: opacity 0.2s, transform 0.15s; display: block; }
        .cta-btn-p:hover { opacity: 0.87; transform: translateY(-1px); }
        .cta-btn-s { padding: 12px 26px; font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.04em; color: #0a1628; background: transparent; border: 1.5px solid rgba(10,22,40,0.14); border-radius: 10px; cursor: pointer; text-decoration: none; text-align: center; white-space: nowrap; transition: border-color 0.2s, transform 0.15s; display: block; }
        .cta-btn-s:hover { border-color: #0a1628; transform: translateY(-1px); }

        /* Footer links */
        .footer-links { display: flex; gap: 20px; justify-content: center; margin-top: 20px; }
        .footer-link { font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 600; color: rgba(10,22,40,0.45); text-decoration: none; transition: color 0.15s; }
        .footer-link:hover { color: #0a1628; }

        @media (max-width: 768px) {
          .layout { grid-template-columns: 1fr; }
          .toc { position: static; display: flex; flex-wrap: wrap; gap: 6px; }
          .toc-item { width: auto; }
          .cta-card { grid-template-columns: 1fr; }
          .cta-btns { flex-direction: row; }
        }
      `}</style>

      <div className="pp">

        {/* Policy change alert banner */}
        {showBanner && (
          <div className="banner">
            <div className="banner-left">
              <div className="banner-dot" />
              <div>
                <span className="banner-text">Policy updated</span>
                <span className="banner-sub">— We've made updates to our Privacy Policy effective June 4, 2025. Please review the changes.</span>
              </div>
            </div>
            <button className="banner-close" onClick={() => setShowBanner(false)}>✕</button>
          </div>
        )}

        {/* Hero */}
        <section className="hero">
          <div className="hero-eyebrow">Legal</div>
          <h1>Privacy Policy</h1>
          <p className="hero-sub">We value your privacy. Here's how Get Trip Go collects, uses, and protects your personal data.</p>
          <div className="hero-meta">
            <span className="hero-chip">🕐 {READING_TIME}</span>
            <span className="hero-chip">📅 Last updated: June 4, 2025</span>
            <button className="dl-btn" onClick={downloadPdf}>📥 Download PDF</button>
          </div>

          {/* Search */}
          <div className="search-bar">
            <span className="s-icon">🔍</span>
            <input aria-label="Search policy…"
              type="text"
              placeholder="Search policy…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && <button className="s-clear" onClick={() => setSearch("")}>✕</button>}
          </div>
        </section>

        {/* Layout */}
        <div className="layout">

          {/* Sidebar TOC */}
          <aside className="toc">
            <div className="toc-label">Contents</div>
            {sections.map(s => (
              <button
                key={s.id}
                className={`toc-item${activeSection === s.id ? " active" : ""}`}
                onClick={() => scrollTo(s.id)}
              >
                <span className="toc-dot" />
                {s.title}
              </button>
            ))}

            {/* Consent Manager */}
            <div className="consent-box">
              <div className="consent-title">✅ Consent Manager</div>
              <div className="consent-sub">Manage your data preferences below.</div>

              {[
                { key: "marketing", label: "Marketing", sub: "Promotional emails & offers" },
                { key: "analytics", label: "Analytics", sub: "Usage & behaviour data" },
                { key: "functional", label: "Functional", sub: "Essential site features" },
              ].map(item => (
                <div className="consent-row" key={item.key}>
                  <div>
                    <div className="consent-row-label">{item.label}</div>
                    <div className="consent-row-sub">{item.sub}</div>
                  </div>
                  <label className="toggle">
                    <input
                      type="checkbox"
                      checked={consents[item.key as keyof typeof consents]}
                      onChange={e => setConsents({ ...consents, [item.key]: e.target.checked })}
                      disabled={item.key === "functional"}
                    />
                    <span className="toggle-slider" />
                  </label>
                </div>
              ))}

              <button
                className={`consent-save${consentSaved ? " saved" : ""}`}
                onClick={saveConsents}
              >
                {consentSaved ? "✓ Preferences Saved" : "Save Preferences"}
              </button>
            </div>
          </aside>

          {/* Content */}
          <div className="content">

            {/* Intro */}
            <div className="intro-card">
              <p>
                Get Trip Go Pvt. Ltd. ("we", "our", "us") is committed to protecting your personal information.
                This Privacy Policy explains what data we collect, how we use it, and your rights regarding your
                data when you use our platform at <a href="https://gettripgo.com" className="intro-link">gettripgo.com</a>.
              </p>
            </div>

            {/* Sections */}
            {filteredSections.length === 0 ? (
              <div className="no-results">
                <span>🔍</span>No results for "{search}"
              </div>
            ) : (
              filteredSections.map(s => (
                <div key={s.id} id={s.id} className="sec-card">
                  <div className="sec-card-header">
                    <h2 className="sec-card-title">
                      <span className="sec-icon">{s.icon}</span>
                      {s.title}
                    </h2>
                    <button
                      className={`copy-btn${copied === s.id ? " copied" : ""}`}
                      onClick={() => copySection(s)}
                    >
                      {copied === s.id ? "✓ Copied" : "📋 Copy"}
                    </button>
                  </div>

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
            <div className="cta-wrap">
              <div className="cta-card">
                <div>
                  <div className="cta-pill">Data Protection</div>
                  <div className="cta-title">Questions about your data?</div>
                  <p className="cta-sub">
                    Contact our Data Protection team at{" "}
                    <span>contact@gettripgo.com</span>
                  </p>
                </div>
                <div className="cta-btns">
                  <a href="/contact" className="cta-btn-p">Contact Us →</a>
                  <a href="mailto:contact@gettripgo.com" className="cta-btn-s">Send Email</a>
                </div>
              </div>

              <div className="footer-links">
                <a href="/terms" className="footer-link">Terms of Service</a>
                <a href="/cookies" className="footer-link">Cookie Policy</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}