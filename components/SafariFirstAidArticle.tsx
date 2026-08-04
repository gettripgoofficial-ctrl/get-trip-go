import Image from "next/image"
import Link from "next/link"

const kitTable = [
  { category: "Pain & fever", items: "Paracetamol, ibuprofen" },
  { category: "Stomach", items: "Anti-diarrheal (e.g. loperamide), oral rehydration salts, antacid" },
  { category: "Allergies", items: "Antihistamine tablets and cream" },
  { category: "Wounds", items: "Plasters/bandages of a few sizes, antiseptic wipes or cream, small scissors" },
  { category: "Motion sickness", items: "Tablets — bush roads and light aircraft are rougher than they look" },
  { category: "Prescriptions", items: "Full trip supply plus a spare few days, in original packaging, with a copy of the prescription" },
  { category: "Sun & bites", items: "SPF 50+ sunscreen, DEET or picaridin repellent, aloe or after-sun gel" },
]

export default function SafariFirstAidArticle() {
  return (
    <article className="bg-white">
      <div className="relative w-full h-[360px] sm:h-[440px] md:mt-[68px]">
        <Image
          src="https://images.unsplash.com/photo-1779216175784-a67b6da108bb?w=1600&q=80"
          alt="Compact first aid kit packed for a Kenya safari"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 pb-8">
          <span className="inline-block bg-yellow-500 text-gray-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded mb-3">
            Health &amp; Safety
          </span>
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold leading-tight mb-2">
            Safari First Aid: What to Pack in Your Kit
          </h1>
          <p className="text-gray-200 text-sm">GetTripGo Travel Desk · 4 min read</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Most camps and lodges carry basic medical supplies for genuine emergencies, but that's
          not the same as having what you personally need for the small, ordinary stuff — a
          headache, a scraped knuckle, an upset stomach after a long day of dust and game drives.
          A compact kit of your own covers the gap.
        </p>

        <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
          <h2 className="text-gray-900 font-bold text-base mb-3">Quick Answer</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><span className="font-semibold text-gray-900">Keep it compact:</span> most camps handle anything serious — your kit only needs to cover minor, common issues.</li>
            <li><span className="font-semibold text-gray-900">Non-negotiable:</span> prescription medication in original packaging, with a copy of the prescription.</li>
            <li><span className="font-semibold text-gray-900">Most-used item on safari:</span> motion sickness tablets — bush roads and light aircraft are rougher than most people expect.</li>
            <li><span className="font-semibold text-gray-900">Pack in your daypack:</span> not checked luggage, since bush flights sometimes separate you from your main bag for a few hours.</li>
          </ul>
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What Camps Already Have — and What They Don't
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Reputable lodges and camps carry first-aid supplies and know the nearest clinic or
            evacuation protocol for anything serious, so you're not on your own for a genuine
            emergency. What they don't carry is a personal supply tailored to you — your specific
            prescriptions, your preferred pain reliever, or enough of any single item to draw from
            freely across a group of guests. That's the gap your own compact kit is meant to fill,
            not a replacement for camp medical support.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What to Pack
          </h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-2 pr-4 font-semibold text-gray-900">Category</th>
                  <th className="py-2 font-semibold text-gray-900">Items</th>
                </tr>
              </thead>
              <tbody>
                {kitTable.map((row) => (
                  <tr key={row.category} className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-800 font-medium align-top">{row.category}</td>
                    <td className="py-2 text-gray-600">{row.items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            If your doctor has prescribed malaria tablets for the trip, keep those with your first
            aid items too, alongside anything discussed for your specific health history. For a
            fuller breakdown of malaria prevention specifically, see our{" "}
            <Link href="/kenya/malaria-prevention-tablets-repellents" className="text-yellow-600 hover:text-yellow-700 font-semibold">
              malaria prevention guide
            </Link>.
          </p>
        </section>

        <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
          <Image
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80"
            alt="Daypack packed for a game drive with essentials inside"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Where to Keep It
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Pack your kit in your daypack or carry-on, not your main checked bag. Multi-day
            safaris often involve light aircraft transfers between camps, and luggage can
            occasionally lag a few hours behind you on a separate flight — not the moment you want
            to discover your medication is in the bag that hasn't landed yet. A small zip pouch
            that fits easily into your daypack alongside your camera and water bottle is usually
            all the space you need.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Prescription Medication: Do This Before You Fly
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            Bring more than you think you'll need — a few spare days' worth in case of delays —
            and keep everything in its original packaging with the pharmacy label intact. Carry a
            copy of your prescription, ideally in English, in case a question comes up at
            customs or you need a refill locally. This is worth sorting out weeks before you
            travel, not the night before you pack.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            What People Get Wrong
          </h2>
          <p className="text-gray-700 leading-relaxed mt-4">
            The most common mistake is over-packing a full home medicine cabinet's worth of
            supplies, when a genuinely compact kit — covering pain relief, stomach issues,
            allergies, and minor wounds — handles nearly everything that actually comes up on a
            standard safari. The item people forget most often isn't medical at all: motion
            sickness tablets. Game drive tracks and bush flights are bumpier than most first-time
            travelers expect, and it's an easy one to leave off the list until it's too late.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Do I need to bring my own first aid kit if the camp has one?</h3>
              <p className="text-gray-700 leading-relaxed">
                Camps handle genuine emergencies well, but a compact personal kit covers the
                everyday, minor stuff — headaches, upset stomachs, small cuts — without relying on
                shared camp supplies.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">What's the most commonly forgotten item on a safari packing list?</h3>
              <p className="text-gray-700 leading-relaxed">
                Motion sickness tablets. Bush roads and light aircraft transfers are rougher than
                most travelers anticipate.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Should I pack my medication in checked luggage or my daypack?</h3>
              <p className="text-gray-700 leading-relaxed">
                Your daypack. Bush flights between camps can occasionally separate you from
                checked luggage for a few hours, so keep essentials with you.
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-base mb-1">Do I need a copy of my prescription for Kenya?</h3>
              <p className="text-gray-700 leading-relaxed">
                It's good practice. Keep medication in its original packaging with a prescription
                copy in case a question comes up at customs or you need a local refill.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10 pt-6 border-t border-gray-200">
          <h2 className="text-gray-800 font-bold text-base mb-4">Related Reads</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/kenya/malaria-prevention-tablets-repellents" className="text-yellow-600 hover:text-yellow-700 font-semibold">Malaria Prevention: Tablets, Repellents and Risk Areas</Link></li>
            <li><Link href="/kenya/drinking-water-and-food-safety-on-safari" className="text-yellow-600 hover:text-yellow-700 font-semibold">Drinking Water and Food Safety on Safari</Link></li>
            <li><Link href="/kenya/travel-insurance-for-safari-what-it-should-cover" className="text-yellow-600 hover:text-yellow-700 font-semibold">Travel Insurance for Safari: What It Should Cover</Link></li>
          </ul>
        </section>

        <div className="border-t border-gray-200 pt-6">
          <Link href="/kenya" className="text-yellow-600 font-semibold text-sm hover:text-yellow-700 transition-colors">
            Back to the Kenya travel guide
          </Link>
        </div>
      </div>
    </article>
  )
}
