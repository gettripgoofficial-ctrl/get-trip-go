export default function DoYouNeedCashOrCardOnSafariArticle() {
  return (
    <>
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        Cards work at most lodges, but small purchases and tips still run on cash. The realistic
        answer for a Kenya safari is that you need both — cards cover the big-ticket items, and
        cash handles everything that happens outside a formal checkout counter.
      </p>

      <div className="bg-gray-50 border-l-4 border-yellow-500 rounded-r-lg p-6 mb-10">
        <h2 className="text-gray-900 font-bold text-base mb-3">Quick Facts</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><span className="font-semibold text-gray-900">Where cards work well:</span> Lodge bills, higher-end hotels, larger tour operator payments, curio shops in main tourist areas.</li>
          <li><span className="font-semibold text-gray-900">Where you need cash:</span> Tips, small curio purchases, local markets, remote fuel stops, informal transactions.</li>
          <li><span className="font-semibold text-gray-900">Card fees:</span> Some lodges and vendors add a surcharge (often 3–5%) for card payments — worth asking before you tap.</li>
          <li><span className="font-semibold text-gray-900">Backup plan:</span> Carry a mix of small-denomination shillings and some dollars as a buffer for connectivity issues or card declines.</li>
        </ul>
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Where Cards Are Reliable
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Established safari lodges, hotels, and larger tour operators generally accept Visa and
          Mastercard without much fuss, and settling a full lodge bill or package payment by card
          is common and expected. Larger curio shops and galleries in main tourist hubs like
          Nairobi, the Mara gateway towns, and coastal resort areas typically take cards too,
          especially for higher-value purchases.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          It's worth noting that some lodges and vendors add a card processing surcharge, often in
          the 3–5% range, to cover transaction fees — asking upfront whether a cash payment gets a
          better rate is a reasonable question and sometimes saves a meaningful amount on a larger
          bill.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Where You Genuinely Need Cash
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          Tips are almost always handled in cash — for guides, drivers, and lodge staff — since
          card tipping infrastructure isn't standard practice in the safari industry. Small
          purchases at local markets, roadside curio stalls, and informal vendors run on cash
          because card machines and reliable network connectivity aren't a given outside larger
          establishments. Fuel stops and small transactions in more remote areas also tend to
          default to cash, particularly once you're well outside Nairobi or major towns.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Even at lodges that accept cards, connectivity in remote areas can be unreliable enough
          that a card transaction occasionally fails or takes a frustratingly long time to
          process — having enough cash on hand as a backup avoids being caught out in that
          situation.
        </p>
      </section>

      <div className="relative rounded-lg overflow-hidden h-[280px] mb-10">
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80"
          alt="Traveler paying with cash at a Kenyan market stall"
          className="w-full h-full object-cover"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          A Practical Split for Your Trip
        </h2>
        <p className="text-gray-700 leading-relaxed mt-4">
          A workable approach is settling lodge and larger package payments by card wherever
          possible, and carrying a mix of small-denomination shillings for tips, curios, and
          incidental purchases, plus some dollars for park fees and larger cash needs. Withdrawing
          shillings from an ATM in a major town before heading into remote safari areas is more
          reliable than expecting to find a working machine once you're deep in a conservancy or
          national park.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Notifying your bank of international travel dates ahead of time is also worth doing, so
          a card isn't unexpectedly flagged and declined mid-trip in an area where fixing that
          quickly isn't straightforward.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-gray-800 font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 inline-block">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 space-y-5">
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Can I pay for my entire Kenya safari by card?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Larger payments like lodge bills and tour packages can generally be settled by card,
              but tips, small purchases, and remote-area transactions still require cash.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Do lodges charge extra for card payments?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Some do, typically a surcharge of around 3–5% to cover processing fees, so it's worth
              asking whether cash gets a better rate before paying.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              How should I tip guides and staff — cash or card?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Cash — tipping by card isn't standard practice in the safari industry, so carrying
              small-denomination bills for this purpose is essential.
            </p>
          </div>
          <div>
            <h3 className="text-gray-900 font-semibold text-base mb-1">
              Should I tell my bank I'm traveling to Kenya?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Yes — notifying your bank of your travel dates ahead of time helps avoid your card
              being declined or flagged for suspicious activity mid-trip.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
