// "Why book with us" section. Server component, no client JS.
// TODO_VERIFY: block 3 claims (free cancellation on most tours, pay later, 24/7 support) must be true for Get Trip Go.
// TODO_OWNER: add a link to the Google reviews page for the 4.6 rating once available.

const iconClass = "h-12 w-12 text-[#1a2b49]"

function CompassIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="2.5" />
      <path d="M31 17l-5 10-10 5 5-10 10-5z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 5l5.5 11.6 12.5 1.7-9.1 8.7 2.3 12.4L24 33.3 12.8 39.4l2.3-12.4L6 18.3l12.5-1.7L24 5z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg className={iconClass} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="6" y="9" width="36" height="33" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <path d="M6 19h36M15 5v8M33 5v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M17 30l5 5 9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const POINTS = [
  {
    Icon: CompassIcon,
    title: "Experiences That Create Memories",
    text: "Discover India's iconic sights and see the country the way locals do.",
  },
  {
    Icon: StarIcon,
    title: "Trusted by Travellers",
    text: "See what travellers say about us in our Google reviews.",
  },
  {
    Icon: CalendarIcon,
    title: "Travel with Complete Peace of Mind",
    text: "Free cancellation on most tours, the option to pay later and 24/7 support.",
  },
]

export default function WhyBookWithUs() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 pb-14 md:px-24">
      <h2 className="mb-8 text-center text-xl font-extrabold text-[#1a2b49] sm:text-2xl">Why Choose Get Trip Go?</h2>
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {POINTS.map(({ Icon, title, text }) => (
          <div
            key={title}
            className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-[0_8px_30px_rgba(26,43,73,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(26,43,73,0.16)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <Icon />
            <h3 className="mt-4 text-lg font-extrabold text-[#1a2b49]">{title}</h3>
            <p className="mt-2 text-base leading-relaxed text-gray-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
