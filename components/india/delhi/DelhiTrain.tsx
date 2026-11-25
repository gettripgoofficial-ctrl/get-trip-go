import {
  delhiTrainAdvice,
  delhiTrainBooking,
  delhiTrainClasses,
  delhiTrainClassesLead,
  delhiTrainIntro,
  delhiTrainTitle,
  delhiTrainWebsiteLabel,
  delhiTrainWebsiteUrl,
} from "@/data/india/delhiTrainBus"

export default function DelhiTrain() {
  return (
    <section aria-labelledby="train-title" className="mx-auto max-w-[1200px] px-4 pt-16 md:px-10">
      <h2 id="train-title" className="text-2xl font-extrabold text-[#1a2b49] sm:text-3xl">
        {delhiTrainTitle}
      </h2>
      <div className="mt-3 max-w-3xl space-y-3">
        {delhiTrainIntro.map((p) => (
          <p key={p.slice(0, 24)} className="text-base leading-7 text-gray-700">{p}</p>
        ))}
      </div>

      <p className="mt-8 text-sm font-bold uppercase tracking-wide text-orange-600">{delhiTrainClassesLead}</p>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {delhiTrainClasses.map((c) => (
          <li key={c.code} className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
            <span className="flex h-14 w-fit min-w-[3.5rem] items-center justify-center rounded-xl bg-[#1a2b49] px-3 text-lg font-extrabold tracking-wide text-white">
              {c.code}
            </span>
            <h3 className="mt-4 text-base font-extrabold text-[#1a2b49]">{c.name}</h3>
            <p className="mt-1 text-sm leading-6 text-gray-700">{c.text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-5 rounded-3xl bg-gradient-to-r from-[#1a2b49] to-sky-800 p-6 text-white sm:p-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-base leading-7 text-white/90">{delhiTrainBooking}</p>
          <p className="mt-3 text-base leading-7">
            <span className="font-bold">{delhiTrainWebsiteLabel}</span>{" "}
            <a href={delhiTrainWebsiteUrl} target="_blank" rel="noopener noreferrer" className="break-all underline">
              {delhiTrainWebsiteUrl}
            </a>
          </p>
          <p className="mt-3 text-base font-medium leading-7 text-yellow-300">{delhiTrainAdvice}</p>
        </div>
        <a
          href={delhiTrainWebsiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit shrink-0 items-center rounded-full bg-yellow-400 px-6 py-3 font-bold text-gray-900 transition hover:brightness-95"
        >
          Visit IRCTC
        </a>
      </div>
    </section>
  )
}
