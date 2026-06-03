export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      icon: "📋",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you register or make a booking, we collect your name, email address, mobile number, date of birth, passport details (for international travel), and payment information.",
        },
        {
          subtitle: "Usage Data",
          text: "We automatically collect information about how you interact with our Platform — including IP address, browser type, pages visited, search queries, and time spent on pages.",
        },
        {
          subtitle: "Device Information",
          text: "We collect device identifiers, operating system, and mobile network information to optimise your experience across devices.",
        },
      ],
    },
    {
      title: "How We Use Your Information",
      icon: "⚙️",
      content: [
        {
          subtitle: "Booking & Services",
          text: "We use your personal information to process bookings, send confirmation emails and itineraries, and communicate about changes or updates to your travel.",
        },
        {
          subtitle: "Personalisation",
          text: "We analyse your search history and preferences to show relevant deals, destination recommendations, and personalised offers.",
        },
        {
          subtitle: "Security & Fraud Prevention",
          text: "We use your information to detect and prevent fraudulent transactions, protect the integrity of our platform, and comply with legal obligations.",
        },
        {
          subtitle: "Marketing Communications",
          text: "With your consent, we may send you promotional emails or push notifications about deals and offers. You can opt out at any time via your account settings.",
        },
      ],
    },
    {
      title: "Sharing Your Information",
      icon: "🤝",
      content: [
        {
          subtitle: "Service Providers",
          text: "We share necessary booking details with airlines, hotels, and other travel providers to fulfill your bookings. These providers are contractually obligated to protect your data.",
        },
        {
          subtitle: "Payment Processors",
          text: "Payment details are securely transmitted to our PCI-DSS compliant payment partners. Get Trip Go does not store full card numbers.",
        },
        {
          subtitle: "Legal Compliance",
          text: "We may disclose your information when required by law, regulation, or valid legal process such as a court order or government authority request.",
        },
      ],
    },
    {
      title: "Your Rights",
      icon: "🔐",
      content: [
        {
          subtitle: "Access & Correction",
          text: "You can access, update, or correct your personal information at any time through your account profile or by contacting us.",
        },
        {
          subtitle: "Data Deletion",
          text: "You may request deletion of your account and associated personal data. Please note that some data may be retained to comply with legal obligations or for fraud prevention.",
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt out of marketing communications at any time by clicking 'Unsubscribe' in our emails or updating your notification preferences in the app.",
        },
      ],
    },
    {
      title: "Data Retention & Security",
      icon: "🛡️",
      content: [
        {
          subtitle: "Retention",
          text: "We retain your personal data for as long as your account is active or as needed to provide services, comply with legal obligations, and resolve disputes.",
        },
        {
          subtitle: "Security Measures",
          text: "We use industry-standard encryption (TLS/SSL), secure data centres, and access controls to protect your information. However, no transmission over the internet is 100% secure.",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f7ff]">
      {/* Header */}
      <section className="bg-[#2B3FDE] text-white py-16 px-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3">
          Legal
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-blue-100 max-w-xl mx-auto">
          We value your privacy. Here's how Get Trip Go collects, uses, and
          protects your personal data.
        </p>
        <p className="text-blue-200 text-sm mt-4">Last updated: June 4, 2025</p>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 py-16 space-y-8">
        {/* Intro card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <p className="text-gray-500 text-sm leading-relaxed">
            Get Trip Go Pvt. Ltd. ("we", "our", "us") is committed to
            protecting your personal information. This Privacy Policy explains
            what data we collect, how we use it, and your rights regarding your
            data when you use our platform at{" "}
            <span className="text-[#2B3FDE]">gettripgo.com</span>.
          </p>
        </div>

        {sections.map((s) => (
          <div
            key={s.title}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span>{s.icon}</span> {s.title}
            </h2>
            <div className="space-y-5">
              {s.content.map((item) => (
                <div key={item.subtitle}>
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">
                    {item.subtitle}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Contact */}
        <div className="bg-[#2B3FDE] rounded-3xl p-8 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Questions about your data?</h3>
          <p className="text-blue-100 text-sm mb-6">
            Contact our Data Protection team at{" "}
            <span className="font-semibold">contact@gettripgo.com</span>
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#2B3FDE] font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Contact Us →
          </a>
        </div>

        <div className="flex flex-wrap gap-4 justify-center text-sm text-[#2B3FDE]">
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
          <a href="/cookies" className="hover:underline">
            Cookie Policy
          </a>
        </div>
      </section>
    </main>
  );
}