import {
  delhiThingsIntro,
  delhiThingsLead,
  delhiThingsToDo,
  delhiThingsTip,
} from "@/data/india/delhiThingsToDo"

export default function DelhiThingsToDo() {
  return (
    <section aria-labelledby="things-title" className="mt-14 bg-[#1a2b49] py-12 sm:py-16">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 md:px-10 lg:grid-cols-[1fr_2fr] lg:gap-12">
        <div>
          <h2 id="things-title" className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Things to Do in Delhi
          </h2>
          <p className="mt-4 text-base leading-7 text-white/85">{delhiThingsIntro}</p>
          <div className="mt-8 rounded-2xl border-l-4 border-yellow-400 bg-white/10 p-5">
            <p className="text-base leading-7 text-white">{delhiThingsTip}</p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-yellow-400">{delhiThingsLead}</p>
          <ol className="grid gap-4 sm:grid-cols-2">
            {delhiThingsToDo.map((item, i) => (
              <li key={item} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-sm font-extrabold text-white"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-6 text-gray-800">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
