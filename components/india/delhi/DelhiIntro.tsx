import { delhiIntro } from "@/data/india/delhiIntro"

export default function DelhiIntro() {
  const [lead, ...rest] = delhiIntro
  return (
    <section aria-label="About Delhi" className="mx-auto max-w-[1200px] px-4 pt-10 md:px-10 md:pt-12">
      <div className="rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgba(26,43,73,0.10)] sm:p-10">
        <div className="flex gap-4 sm:gap-6">
          <span aria-hidden="true" className="w-1.5 shrink-0 rounded-full bg-gradient-to-b from-orange-500 to-red-500" />
          <p className="text-lg font-medium leading-8 text-[#1a2b49] sm:text-xl sm:leading-9">{lead}</p>
        </div>
        <div className="mt-6 space-y-4 sm:pl-8">
          {rest.map((para) => (
            <p key={para.slice(0, 24)} className="text-base leading-7 text-gray-700">{para}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
