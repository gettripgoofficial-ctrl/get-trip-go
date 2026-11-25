export default function GuideFaq({ faqs }: { faqs: string[][] }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <h2>Frequently Asked Questions</h2>
      <div className="grid items-start gap-3 !space-y-0 !text-base md:grid-cols-2">
        {faqs.map(([q, a]) => (
          <details
            key={q}
            className="group rounded-xl border border-slate-200 bg-white px-4 py-3 open:bg-slate-50"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[0.95rem] font-semibold leading-snug text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden">
              {q}
              <span className="text-xl leading-none text-orange-500 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-2 text-sm leading-6">{a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
