"use client";
import { useState } from "react";

const cookieTypes = [
  {
    id: "strictly-necessary",
    name: "Strictly Necessary",
    icon: "🔒",
    required: true,
    description:
      "These cookies are essential for the website to function correctly. They enable core features like user authentication, booking sessions, and payment security. You cannot opt out of these cookies.",
    examples: [
      "Session authentication token",
      "CSRF protection cookie",
      "Booking cart data",
      "Secure payment session",
    ],
  },
  {
    id: "performance-analytics",
    name: "Performance & Analytics",
    icon: "📊",
    required: false,
    description:
      "These cookies help us understand how visitors interact with our platform. We use this information to improve the user experience, fix errors, and optimise page performance.",
    examples: [
      "Google Analytics (_ga, _gid)",
      "Page load performance metrics",
      "Error tracking (Sentry)",
      "A/B testing assignments",
    ],
  },
  {
    id: "functional",
    name: "Functional",
    icon: "⚙️",
    required: false,
    description:
      "Functional cookies remember your preferences so you don't have to re-enter them on each visit. This includes language settings, currency preference, and recently searched routes.",
    examples: [
      "Language preference (EN/HI/etc.)",
      "Currency preference (INR/USD)",
      "Recently searched airports",
      "Theme preference",
    ],
  },
  {
    id: "marketing-advertising",
    name: "Marketing & Advertising",
    icon: "📢",
    required: false,
    description:
      "These cookies are used to show you relevant advertisements and travel deals on other websites. They track your browsing across sites to build a profile of your interests.",
    examples: [
      "Facebook Pixel",
      "Google Ads remarketing",
      "Travel intent signals",
      "Ad frequency capping",
    ],
  },
];

const browsers = [
  { name: "Chrome", icon: "🌐", href: "https://support.google.com/chrome/answer/95647" },
  { name: "Firefox", icon: "🦊", href: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" },
  { name: "Safari", icon: "🧭", href: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" },
  { name: "Edge", icon: "🔷", href: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
];

export default function CookiesPage() {
  const [consents, setConsents] = useState<Record<string, boolean>>({
    "Performance & Analytics": true,
    Functional: true,
    "Marketing & Advertising": false,
  });
  const [search, setSearch] = useState("");
  const [saved, setSaved] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [copied, setCopied] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (name: string) =>
    setConsents((prev) => ({ ...prev, [name]: !prev[name] }));

  const acceptAll = () => {
    setConsents({ "Performance & Analytics": true, Functional: true, "Marketing & Advertising": true });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const rejectAll = () => {
    setConsents({ "Performance & Analytics": false, Functional: false, "Marketing & Advertising": false });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const savePrefs = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const copySection = (type: typeof cookieTypes[0]) => {
    const text = `${type.name}\n${"─".repeat(30)}\n${type.description}\n\nExamples:\n${type.examples.map(e => `• ${e}`).join("\n")}`;
    navigator.clipboard.writeText(text);
    setCopied(type.id);
    setTimeout(() => setCopied(null), 2000);
  };

  const downloadPolicy = () => {
    const content = cookieTypes.map(t =>
      `${t.name}\n${"─".repeat(40)}\n${t.description}\n\nExamples:\n${t.examples.map(e => `• ${e}`).join("\n")}`
    ).join("\n\n\n");
    const blob = new Blob([`GET TRIP GO — COOKIE POLICY\nLast updated: June 4, 2025\n\n${content}`], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "GetTripGo-Cookie-Policy.txt"; a.click();
    URL.revokeObjectURL(url);
  };

  const filtered = cookieTypes.filter(t =>
    !search.trim() ||
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.description.toLowerCase().includes(search.toLowerCase()) ||
    t.examples.some(e => e.toLowerCase().includes(search.toLowerCase()))
  );

  const highlight = (text: string) => {
    if (!search.trim()) return <>{text}</>;
    const regex = new RegExp(`(${search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const parts = text.split(regex);
    return <>{parts.map((part, i) => regex.test(part)
      ? <mark key={i} style={{ background: "#fef08a", color: "#0a1628", borderRadius: 3, padding: "0 2px" }}>{part}</mark>
      : part)}</>;
  };

  const activeCount = Object.values(consents).filter(Boolean).length + 1;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .cp { font-family: 'DM Sans', sans-serif; background: #F8F9FF; color: #0a1628; min-height: 100vh; }
        .cp * { box-sizing: border-box; margin: 0; padding: 0; }

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
        .hero h1 { font-family: 'Sora', sans-serif; font-size: clamp(36px, 6vw, 60px); font-weight: 800; letter-spacing: -0.03em; line-height: 1.05; color: #0a1628; margin-bottom: 14px; }
        .hero-sub { font-size: 15px; color: rgba(10,22,40,0.47); max-width: 460px; margin: 0 auto 20px; line-height: 1.65; }
        .hero-meta { display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; margin-bottom: 28px; }
        .hero-chip { display: inline-flex; align-items: center; gap: 6px; font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 600; color: rgba(10,22,40,0.42); background: #fff; border: 1px solid rgba(10,22,40,0.09); padding: 5px 12px; border-radius: 100px; }
        .dl-btn { display: inline-flex; align-items: center; gap: 6px; padding: 8px 18px; font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.04em; color: #fff; background: #0a1628; border: none; border-radius: 8px; cursor: pointer; transition: opacity 0.2s, transform 0.15s; }
        .dl-btn:hover { opacity: 0.87; transform: translateY(-1px); }

        /* Search */
        .search-bar { max-width: 480px; margin: 0 auto; position: relative; }
        .search-bar input { width: 100%; padding: 13px 44px 13px 44px; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #0a1628; background: #fff; border: 1.5px solid rgba(10,22,40,0.1); border-radius: 12px; outline: none; transition: border-color 0.2s, box-shadow 0.2s; box-shadow: 0 2px 10px rgba(10,22,40,0.05); }
        .search-bar input::placeholder { color: rgba(10,22,40,0.3); }
        .search-bar input:focus { border-color: #0a1628; box-shadow: 0 0 0 4px rgba(10,22,40,0.05); }
        .s-icon { position: absolute; left: 15px; top: 50%; transform: translateY(-50%); font-size: 16px; opacity: 0.32; pointer-events: none; }
        .s-clear { position: absolute; right: 13px; top: 50%; transform: translateY(-50%); font-size: 13px; color: rgba(10,22,40,0.35); background: rgba(10,22,40,0.06); border: none; border-radius: 5px; padding: 2px 7px; cursor: pointer; font-family: 'Sora', sans-serif; font-weight: 700; }

        /* Quick actions bar */
        .actions-bar { background: #fff; border-top: 1px solid rgba(10,22,40,0.07); border-bottom: 1px solid rgba(10,22,40,0.07); padding: 14px 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
        .actions-left { display: flex; align-items: center; gap: 10px; }
        .active-count { font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700; color: #0a1628; }
        .active-count span { color: rgba(10,22,40,0.4); font-weight: 500; }
        .actions-right { display: flex; align-items: center; gap: 8px; }
        .act-btn { padding: 8px 16px; font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.04em; border-radius: 8px; cursor: pointer; transition: all 0.15s; border: 1px solid rgba(10,22,40,0.12); background: transparent; color: rgba(10,22,40,0.55); }
        .act-btn:hover { border-color: #0a1628; color: #0a1628; }
        .act-btn.primary { background: #0a1628; color: #fff; border-color: #0a1628; }
        .act-btn.primary:hover { opacity: 0.87; }
        .act-btn.success { background: #059669; color: #fff; border-color: #059669; }

        /* Layout */
        .layout { max-width: 960px; margin: 0 auto; padding: 48px 24px 64px; }

        /* Intro card */
        .intro-card { background: #fff; border: 1px solid rgba(10,22,40,0.08); border-radius: 16px; padding: 24px 28px; margin-bottom: 32px; }
        .intro-title { font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 700; color: #0a1628; margin-bottom: 8px; letter-spacing: -0.01em; }
        .intro-text { font-size: 13.5px; line-height: 1.75; color: rgba(10,22,40,0.52); }

        /* Section heading */
        .sec-heading { font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.13em; text-transform: uppercase; color: rgba(10,22,40,0.35); margin-bottom: 14px; padding-left: 2px; }

        /* Cookie card */
        .cookie-card { background: #fff; border: 1px solid rgba(10,22,40,0.08); border-radius: 16px; margin-bottom: 12px; overflow: hidden; transition: border-color 0.2s, box-shadow 0.2s; }
        .cookie-card:hover { border-color: rgba(10,22,40,0.14); }
        .cookie-card.enabled { border-left: 3px solid #2B3FDE; }
        .cookie-card.required-card { border-left: 3px solid #0a1628; }

        .card-header { display: flex; align-items: center; gap: 14px; padding: 20px 24px; cursor: pointer; transition: background 0.12s; }
        .card-header:hover { background: rgba(10,22,40,0.015); }
        .card-icon { width: 40px; height: 40px; border-radius: 10px; background: #F8F9FF; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
        .card-info { flex: 1; }
        .card-name { font-family: 'Sora', sans-serif; font-size: 14px; font-weight: 700; color: #0a1628; margin-bottom: 3px; display: flex; align-items: center; gap: 8px; }
        .always-active { font-family: 'Sora', sans-serif; font-size: 9px; font-weight: 800; letter-spacing: 0.09em; text-transform: uppercase; padding: 3px 9px; border-radius: 100px; background: rgba(10,22,40,0.07); color: rgba(10,22,40,0.5); }
        .card-desc-short { font-size: 12.5px; color: rgba(10,22,40,0.42); line-height: 1.45; }
        .card-actions { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }

        /* Toggle */
        .tog { position: relative; width: 40px; height: 22px; flex-shrink: 0; }
        .tog input { opacity: 0; width: 0; height: 0; position: absolute; }
        .tog-slider { position: absolute; inset: 0; border-radius: 22px; background: rgba(10,22,40,0.12); cursor: pointer; transition: background 0.2s; }
        .tog input:checked + .tog-slider { background: #2B3FDE; }
        .tog input:disabled + .tog-slider { cursor: not-allowed; opacity: 0.6; }
        .tog-slider::before { content: ''; position: absolute; width: 16px; height: 16px; border-radius: 50%; background: #fff; top: 3px; left: 3px; transition: transform 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.15); }
        .tog input:checked + .tog-slider::before { transform: translateX(18px); }

        /* Expand chevron */
        .chevron { width: 24px; height: 24px; border-radius: 6px; border: 1px solid rgba(10,22,40,0.1); display: flex; align-items: center; justify-content: center; font-size: 12px; color: rgba(10,22,40,0.35); transition: transform 0.25s, background 0.15s; cursor: pointer; background: transparent; }
        .chevron.open { transform: rotate(180deg); background: #F8F9FF; }

        /* Copy btn */
        .copy-btn { display: flex; align-items: center; gap: 4px; padding: 5px 10px; font-family: 'Sora', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.05em; color: rgba(10,22,40,0.38); background: #F8F9FF; border: 1px solid rgba(10,22,40,0.09); border-radius: 6px; cursor: pointer; transition: all 0.15s; }
        .copy-btn:hover { color: #0a1628; border-color: rgba(10,22,40,0.2); }
        .copy-btn.copied { color: #059669; border-color: #059669; background: #f0fdf4; }

        /* Card body */
        .card-body { max-height: 0; overflow: hidden; transition: max-height 0.3s ease, padding 0.25s ease; padding: 0 24px; }
        .card-body.open { max-height: 400px; padding: 0 24px 20px; }
        .card-body-inner { border-top: 1px solid rgba(10,22,40,0.06); padding-top: 16px; }
        .card-full-desc { font-size: 13.5px; line-height: 1.72; color: rgba(10,22,40,0.52); margin-bottom: 14px; }
        .examples-label { font-family: 'Sora', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(10,22,40,0.32); margin-bottom: 8px; }
        .examples-wrap { display: flex; flex-wrap: wrap; gap: 6px; }
        .example-tag { font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 600; padding: 4px 12px; border-radius: 100px; background: #F8F9FF; border: 1px solid rgba(10,22,40,0.08); color: rgba(10,22,40,0.45); }

        /* Browser grid */
        .browser-card { background: #fff; border: 1px solid rgba(10,22,40,0.08); border-radius: 16px; padding: 24px 28px; margin-bottom: 12px; }
        .browser-title { font-family: 'Sora', sans-serif; font-size: 15px; font-weight: 700; color: #0a1628; margin-bottom: 6px; letter-spacing: -0.01em; }
        .browser-sub { font-size: 13px; color: rgba(10,22,40,0.45); line-height: 1.6; margin-bottom: 18px; }
        .browser-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        .browser-item { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 14px 10px; background: #F8F9FF; border: 1px solid rgba(10,22,40,0.07); border-radius: 12px; cursor: pointer; text-decoration: none; transition: border-color 0.15s, transform 0.15s; }
        .browser-item:hover { border-color: rgba(10,22,40,0.18); transform: translateY(-2px); }
        .browser-ico { font-size: 22px; }
        .browser-name { font-family: 'Sora', sans-serif; font-size: 11px; font-weight: 700; color: #0a1628; }
        .browser-link { font-size: 10px; color: rgba(10,22,40,0.35); }

        /* No results */
        .no-results { text-align: center; padding: 48px 0; color: rgba(10,22,40,0.32); font-size: 14px; }
        .no-results span { display: block; font-size: 32px; margin-bottom: 10px; }

        /* CTA */
        .cta-card { background: #fff; border: 1px solid rgba(10,22,40,0.08); border-radius: 20px; padding: 36px 40px; display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 32px; margin-bottom: 20px; }
        .cta-pill { display: inline-flex; align-items: center; gap: 7px; font-family: 'Sora', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.13em; text-transform: uppercase; color: rgba(10,22,40,0.38); border: 1px solid rgba(10,22,40,0.1); background: #F8F9FF; padding: 5px 13px; border-radius: 100px; margin-bottom: 14px; }
        .cta-pill::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #10b981; }
        .cta-title { font-family: 'Sora', sans-serif; font-size: 22px; font-weight: 800; letter-spacing: -0.025em; color: #0a1628; margin-bottom: 8px; }
        .cta-sub { font-size: 13.5px; color: rgba(10,22,40,0.43); line-height: 1.6; max-width: 340px; }
        .cta-sub span { font-weight: 600; color: #0a1628; }
        .cta-btns { display: flex; flex-direction: column; gap: 10px; }
        .cta-btn-p { padding: 12px 26px; font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.04em; color: #fff; background: #0a1628; border: none; border-radius: 10px; cursor: pointer; text-decoration: none; text-align: center; white-space: nowrap; transition: opacity 0.2s, transform 0.15s; display: block; }
        .cta-btn-p:hover { opacity: 0.87; transform: translateY(-1px); }
        .cta-btn-s { padding: 12px 26px; font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.04em; color: #0a1628; background: transparent; border: 1.5px solid rgba(10,22,40,0.14); border-radius: 10px; cursor: pointer; text-decoration: none; text-align: center; white-space: nowrap; transition: border-color 0.2s, transform 0.15s; display: block; }
        .cta-btn-s:hover { border-color: #0a1628; transform: translateY(-1px); }

        /* Footer links */
        .footer-links { display: flex; gap: 20px; justify-content: center; }
        .footer-link { font-family: 'Sora', sans-serif; font-size: 12px; font-weight: 600; color: rgba(10,22,40,0.45); text-decoration: none; transition: color 0.15s; }
        .footer-link:hover { color: #0a1628; }

        @media (max-width: 600px) {
          .browser-grid { grid-template-columns: repeat(2,1fr); }
          .cta-card { grid-template-columns: 1fr; }
          .cta-btns { flex-direction: row; }
          .actions-bar { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="cp">

        {/* Banner */}
        {showBanner && (
          <div className="banner">
            <div className="banner-left">
              <div className="banner-dot" />
              <div>
                <span className="banner-text">Cookie policy updated</span>
                <span className="banner-sub">— Changes effective June 4, 2025. Review your preferences below.</span>
              </div>
            </div>
            <button className="banner-close" onClick={() => setShowBanner(false)}>✕</button>
          </div>
        )}

        {/* Hero */}
        <section className="hero">
          <div className="hero-eyebrow">Legal</div>
          <h1>Cookie Policy</h1>
          <p className="hero-sub">Learn how Get Trip Go uses cookies and manage your preferences below.</p>
          <div className="hero-meta">
            <span className="hero-chip">🕐 3 min read</span>
            <span className="hero-chip">📅 Last updated: June 4, 2025</span>
            <button className="dl-btn" onClick={downloadPolicy}>📥 Download Policy</button>
          </div>
          <div className="search-bar">
            <span className="s-icon">🔍</span>
            <input
              type="text"
              placeholder="Search cookie categories…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {search && <button className="s-clear" onClick={() => setSearch("")}>✕</button>}
          </div>
        </section>

        {/* Quick actions bar */}
        <div className="actions-bar">
          <div className="actions-left">
            <div className="active-count">
              {activeCount} of {cookieTypes.length} active <span>cookie categories</span>
            </div>
          </div>
          <div className="actions-right">
            <button className="act-btn" onClick={rejectAll}>Reject Optional</button>
            <button className="act-btn" onClick={acceptAll}>Accept All</button>
            <button className={`act-btn primary${saved ? " success" : ""}`} onClick={savePrefs}>
              {saved ? "✓ Saved" : "Save Preferences"}
            </button>
          </div>
        </div>

        <div className="layout">

          {/* Intro */}
          <div className="intro-card">
            <div className="intro-title">What are cookies?</div>
            <p className="intro-text">
              Cookies are small text files stored on your device when you visit a website. They help websites
              remember your preferences, keep you signed in, and understand how you use the site. Get Trip Go
              uses cookies to deliver a fast, personalised, and secure travel booking experience.
            </p>
          </div>

          {/* Cookie categories */}
          <div className="sec-heading">Cookie Categories</div>

          {filtered.length === 0 ? (
            <div className="no-results">
              <span>🔍</span>No categories match "{search}"
            </div>
          ) : (
            filtered.map(type => {
              const isEnabled = type.required || consents[type.name];
              const isOpen = expanded === type.id;
              return (
                <div
                  key={type.id}
                  className={`cookie-card${type.required ? " required-card" : isEnabled ? " enabled" : ""}`}
                >
                  <div className="card-header" onClick={() => setExpanded(isOpen ? null : type.id)}>
                    <div className="card-icon">{type.icon}</div>
                    <div className="card-info">
                      <div className="card-name">
                        {type.name}
                        {type.required && <span className="always-active">Always Active</span>}
                      </div>
                      <div className="card-desc-short">
                        {highlight(type.examples.slice(0, 2).join(" · "))}
                      </div>
                    </div>
                    <div className="card-actions" onClick={e => e.stopPropagation()}>
                      <button
                        className={`copy-btn${copied === type.id ? " copied" : ""}`}
                        onClick={() => copySection(type)}
                      >
                        {copied === type.id ? "✓ Copied" : "📋 Copy"}
                      </button>
                      {!type.required && (
                        <label className="tog" onClick={e => e.stopPropagation()}>
                          <input
                            type="checkbox"
                            checked={!!consents[type.name]}
                            onChange={() => toggle(type.name)}
                          />
                          <span className="tog-slider" />
                        </label>
                      )}
                      {type.required && (
                        <label className="tog">
                          <input type="checkbox" checked disabled />
                          <span className="tog-slider" />
                        </label>
                      )}
                    </div>
                    <button className={`chevron${isOpen ? " open" : ""}`}>▾</button>
                  </div>

                  <div className={`card-body${isOpen ? " open" : ""}`}>
                    <div className="card-body-inner">
                      <p className="card-full-desc">{highlight(type.description)}</p>
                      <div className="examples-label">Examples</div>
                      <div className="examples-wrap">
                        {type.examples.map(ex => (
                          <span key={ex} className="example-tag">{highlight(ex)}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {/* Browser management */}
          <div className="browser-card" style={{ marginTop: 32 }}>
            <div className="browser-title">Managing cookies in your browser</div>
            <p className="browser-sub">
              You can also control cookies through your browser settings. Most browsers allow you to block or
              delete cookies. Note that disabling certain cookies may affect the functionality of Get Trip Go.
            </p>
            <div className="browser-grid">
              {browsers.map(b => (
                <a key={b.name} href={b.href} target="_blank" rel="noopener noreferrer" className="browser-item">
                  <span className="browser-ico">{b.icon}</span>
                  <span className="browser-name">{b.name}</span>
                  <span className="browser-link">View guide →</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ marginTop: 32 }}>
            <div className="cta-card">
              <div>
                <div className="cta-pill">Cookie Support</div>
                <div className="cta-title">Questions about cookies?</div>
                <p className="cta-sub">
                  Contact our Data Protection team at{" "}
                  <span>contact@gettripgo.com</span>
                </p>
              </div>
              <div className="cta-btns">
                <a href="/contact" className="cta-btn-p">Contact Us →</a>
                <a href="/privacy" className="cta-btn-s">Privacy Policy</a>
              </div>
            </div>
            <div className="footer-links">
              <a href="/privacy" className="footer-link">Privacy Policy</a>
              <a href="/terms" className="footer-link">Terms of Service</a>
              <a href="/contact" className="footer-link">Contact Us</a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}