import Image from "next/image"
export default function WhatCurrencyShouldYouCarryInKenyaArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Both US dollars and Kenyan shillings work in Kenya, but not everywhere accepts both, and
        knowing when to use which one saves you from awkward moments and bad exchange rates. The
        short version: carry both, use shillings for everyday spending, and keep dollars for
        specific bigger payments.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Local currency:</span> Kenyan shilling (KES) — used for everyday purchases, markets, tips, and small transactions.</li>
          <li><span className="font-semibold text-gray-900">US dollars:</span> Widely accepted for park fees, safari packages, and some hotel bills, but often only newer, undamaged bills.</li>
          <li><span className="font-semibold text-gray-900">Best exchange approach:</span> Withdraw shillings from ATMs on arrival rather than exchanging cash at the airport, which usually has worse rates.</li>
          <li><span className="font-semibold text-gray-900">Cards:</span> Widely accepted at hotels and lodges, but small vendors, markets, and rural areas run on cash.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          When to Use Shillings vs Dollars
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Kenyan shillings are the practical everyday currency — markets, local restaurants,
          small shops, taxis, and tips to individual staff members are all typically handled in
          shillings. US dollars are more commonly used for larger, pre-arranged payments: national
          park entry fees are often quoted and paid in dollars, and many safari operators and
          higher-end lodges price their packages in dollars even if final settlement can be in
          shillings.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          If you're bringing dollars, note that many businesses and park gates in Kenya are
          strict about bill condition — notes older than roughly 2009, or with tears, marks, or
          significant wear, are frequently rejected outright. It's worth requesting clean, newer
          bills from your bank before the trip specifically for this reason.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Getting Local Currency
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Withdrawing shillings from an ATM after arrival, rather than exchanging cash at your
          home airport or at Nairobi's airport currency counters, generally gets a noticeably
          better exchange rate. ATMs are widely available in Nairobi and other major towns,
          though far less common once you're out in remote safari areas, so it's worth
          withdrawing what you'll need for the trip before heading into the bush rather than
          counting on finding a machine at a rural stop.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Forex bureaus in cities also tend to offer competitive rates for exchanging cash, often
          better than hotel front desks, if you'd rather exchange physical currency than withdraw
          from an ATM.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <Image
          src="https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=1200&q=80"
          alt="Kenyan shilling notes and coins"
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="w-full h-full object-cover"
          />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Cards and Mobile Money
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Credit and debit cards are widely accepted at safari lodges, hotels, and higher-end
          restaurants, generally without issue. Once you're outside those settings — local
          markets, small shops, tips for individual staff — cash is essential, since card
          machines and reliable connectivity aren't a given in more remote or informal settings.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          M-Pesa, Kenya's widely used mobile money system, is the dominant way locals pay for
          almost everything day to day, but it generally requires a Kenyan phone number and
          local registration to set up, so it's not typically practical for a short visit —
          cash and cards remain the realistic options for most travelers.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Should I bring US dollars or Kenyan shillings?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Both — shillings for everyday spending like markets and tips, and dollars for larger
              pre-arranged payments like park fees and some safari packages.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Why are some US dollar bills rejected in Kenya?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Many businesses and park gates only accept newer, undamaged bills, typically printed
              after around 2009, so it's worth requesting clean bills from your bank before
              traveling.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Is it better to withdraw cash or exchange currency in Kenya?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Withdrawing shillings from an ATM after arrival generally gets a better exchange
              rate than exchanging cash at the airport.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Are credit cards widely accepted in Kenya?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes, at most lodges, hotels, and higher-end restaurants, but cash is still needed for
              markets, small vendors, and tips.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
