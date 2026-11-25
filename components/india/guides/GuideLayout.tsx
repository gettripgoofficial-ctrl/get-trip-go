import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  tag: string;
  title: string;
  image?: string;
  children: ReactNode;
  cta?: ReactNode;
};

export default function GuideLayout({ tag, title, image, children, cta }: Props) {
  return (
    <main className="bg-white pb-16 pt-[84px] sm:pt-[92px]">
      <header className="mx-auto max-w-[1600px] px-4 sm:px-9">
        <div className="relative isolate flex min-h-[240px] items-center justify-center overflow-hidden rounded-[28px] bg-gradient-to-br from-slate-600 to-slate-900 sm:min-h-[300px]">
          {image && (
            <Image
              src={image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="-z-10 object-cover"
            />
          )}
          <div className="absolute inset-0 -z-10 bg-black/45" />
          <div className="relative mx-auto max-w-[1200px] px-4 pb-16 pt-14 text-center sm:pb-20 sm:pt-20">
            <span className="inline-block rounded-md bg-[#f5c518] px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-black">
              {tag}
            </span>
            <h1 className="mx-auto mt-4 max-w-3xl text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
              {title}
            </h1>
          </div>
        </div>
      </header>

      <article
        className="mx-auto mt-8 grid max-w-6xl grid-flow-dense grid-cols-1 gap-4 px-4 text-base leading-7 text-slate-700
          md:grid-cols-2 md:[&>*]:col-span-2
          [&_h2]:mt-6 [&_h2]:scroll-mt-24 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-slate-900
          [&_strong]:font-semibold [&_strong]:text-slate-900
          [&_a]:font-medium [&_a]:text-orange-600 [&_a]:underline [&_a]:decoration-orange-300 [&_a]:underline-offset-4 hover:[&_a]:decoration-orange-600
          [&_li]:marker:text-orange-500
          [&>div]:space-y-3 [&>div]:text-lg
          [&>ul]:space-y-2 [&>ul]:rounded-2xl [&>ul]:border [&>ul]:border-slate-200 [&>ul]:bg-slate-50 [&>ul]:py-5 [&>ul]:pl-10 [&>ul]:pr-5
          [&>p.bg-orange-50]:rounded-2xl [&>p.bg-orange-50]:border [&>p.bg-orange-50]:border-orange-200 [&>p.bg-orange-50]:p-4 [&>p.bg-orange-50]:text-sm [&>p.bg-orange-50]:text-slate-800"
      >
        {children}
      </article>

      {cta && (
        <div className="mx-auto mt-10 max-w-[1600px] px-4 sm:px-9">{cta}</div>
      )}
    </main>
  );
}
