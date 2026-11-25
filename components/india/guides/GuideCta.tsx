type LinkItem = { label: string; href: string };

type Props = {
  title: string;
  text: string;
  destinations: LinkItem[];
  primary: LinkItem;
  secondary: LinkItem;
};

export default function GuideCta({ title, text, destinations, primary, secondary }: Props) {
  return (
    <section className="relative isolate overflow-hidden rounded-[28px] border border-orange-100 bg-gradient-to-br from-[#fff7ed] via-[#fffbf5] to-[#fff1e6] text-slate-900">
      <div className="pointer-events-none absolute -left-24 -top-24 -z-10 h-96 w-96 rounded-full bg-orange-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 -z-10 h-96 w-96 rounded-full bg-amber-200/50 blur-3xl" />

      <div className="grid items-center gap-6 px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:px-12">
        <div>
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">{text}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={primary.href}
              className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:brightness-110"
            >
              {primary.label}
            </a>
            <a
              href={secondary.href}
              className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-orange-400 hover:text-orange-600"
            >
              {secondary.label}
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-orange-100 bg-white/80 p-5 shadow-sm backdrop-blur sm:p-6">
          <p className="text-sm font-semibold text-slate-600">Popular India holidays</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {destinations.map((d) => (
              <li key={d.href}>
                <a
                  href={d.href}
                  className="block rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  {d.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
