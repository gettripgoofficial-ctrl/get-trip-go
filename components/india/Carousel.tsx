"use client"

import { Children, useCallback, useEffect, useRef, useState } from "react"
import type { KeyboardEvent, ReactNode } from "react"

type CarouselProps = {
  /** Accessible name for the carousel region, e.g. "Cities in India". */
  label: string
  children: ReactNode
  /** Width and snap classes applied to each slide wrapper. */
  itemClassName?: string
}

const DEFAULT_ITEM_CLASS = "w-[72%] sm:w-[44%] md:w-[31%] lg:w-[23.5%]"
const DOT_PAGE_COUNT = 3

export default function Carousel({ label, children, itemClassName = DEFAULT_ITEM_CLASS }: CarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [pageCount, setPageCount] = useState(1)
  const [activePage, setActivePage] = useState(0)

  const update = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth)
    const count = maxScroll > 2 ? DOT_PAGE_COUNT : 1
    setPageCount(count)

    let nearestPage = 0
    let nearestDistance = Number.POSITIVE_INFINITY
    for (let page = 0; page < count; page++) {
      const target = count === 1 ? 0 : (maxScroll * page) / (count - 1)
      const distance = Math.abs(el.scrollLeft - target)
      if (distance < nearestDistance) {
        nearestDistance = distance
        nearestPage = page
      }
    }
    setActivePage(nearestPage)
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    update()
    el.addEventListener("scroll", update, { passive: true })
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => {
      el.removeEventListener("scroll", update)
      ro.disconnect()
    }
  }, [update])

  function scrollByPage(direction: 1 | -1) {
    const el = scrollerRef.current
    if (!el) return
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth)
    const count = maxScroll > 2 ? DOT_PAGE_COUNT : 1
    let nearestPage = 0
    let nearestDistance = Number.POSITIVE_INFINITY
    for (let page = 0; page < count; page++) {
      const target = count === 1 ? 0 : (maxScroll * page) / (count - 1)
      const distance = Math.abs(el.scrollLeft - target)
      if (distance < nearestDistance) {
        nearestDistance = distance
        nearestPage = page
      }
    }
    const targetPage = Math.max(0, Math.min(count - 1, nearestPage + direction))
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    el.scrollTo({
      left: count === 1 ? 0 : (maxScroll * targetPage) / (count - 1),
      behavior: reduce ? "auto" : "smooth",
    })
  }

  function scrollToPage(page: number) {
    const el = scrollerRef.current
    if (!el) return
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth)
    const count = maxScroll > 2 ? DOT_PAGE_COUNT : 1
    const targetPage = Math.max(0, Math.min(count - 1, page))
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    el.scrollTo({
      left: count === 1 ? 0 : (maxScroll * targetPage) / (count - 1),
      behavior: reduce ? "auto" : "smooth",
    })
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight") {
      e.preventDefault()
      scrollByPage(1)
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      scrollByPage(-1)
    }
  }

  return (
    <div>
      <div
        ref={scrollerRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 motion-reduce:scroll-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {Children.toArray(children).map((child, i) => (
          <div key={i} className={`shrink-0 snap-start ${itemClassName}`}>
            {child}
          </div>
        ))}
      </div>
      {pageCount > 1 && (
        <div className="mt-4 flex justify-center">
          <div
            className="inline-flex items-center gap-0 rounded-full border border-[#1a2b49]/10 bg-[#f8f9ff]/70 px-2 py-1 shadow-[0_6px_18px_rgba(26,43,73,0.12)] backdrop-blur-xl"
            role="group"
            aria-label={`${label} pages`}
          >
            {Array.from({ length: pageCount }, (_, page) => {
              const isActive = page === activePage
              return (
                <button
                  key={page}
                  type="button"
                  aria-label={`Go to ${label} page ${page + 1}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => scrollToPage(page)}
                  className="flex h-[34px] w-[34px] items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a2b49] focus-visible:ring-offset-2"
                >
                  <span
                    aria-hidden="true"
                    className={`h-3 w-3 rounded-full border-2 border-[#1a2b49] backdrop-blur-sm ${
                      isActive
                        ? "bg-[#1a2b49] ring-2 ring-[#1a2b49] ring-offset-2 ring-offset-[#f8f9ff]"
                        : "bg-white/35"
                    }`}
                  />
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
