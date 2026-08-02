"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

const TOP_OFFSET = 100

interface SidebarArticle {
  id: string
  title: string
  image: string
  meta: string
}

export function SidebarGroup({ title, articles }: { title: string; articles: SidebarArticle[] }) {
  return (
    <div className="mb-8 last:mb-0">
      <h3 className="text-gray-800 font-bold text-sm uppercase tracking-wide mb-4 pb-2 border-b-2 border-yellow-500 inline-block">
        {title}
      </h3>
      <div className="space-y-4 mt-4">
        {articles.map(article => (
          <Link key={article.id} href="/kenya" className="flex gap-3 group">
            <div className="relative w-14 h-14 flex-shrink-0 rounded-md overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="56px"
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div>
              <p className="text-gray-800 font-semibold text-xs leading-snug group-hover:text-yellow-600 transition-colors line-clamp-3">
                {article.title}
              </p>
              <p className="text-gray-400 text-[10px] mt-1">{article.meta}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

// JS-driven sticky, rendered via a portal to document.body so it's immune to
// any ancestor with transform/filter/will-change breaking position: fixed.
// Includes a bottom boundary so it stops at the end of its column instead of
// floating over the footer.
export function Sidebar({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const naturalHeightRef = useRef<number>(0)
  const isFixedRef = useRef(false)
  const [fixed, setFixed] = useState(false)
  const [coords, setCoords] = useState({ left: 0, width: 0, top: TOP_OFFSET })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    function handleScroll() {
      const wrapper = wrapperRef.current
      const inner = innerRef.current
      if (!wrapper || !inner) return

      if (!isFixedRef.current) {
        naturalHeightRef.current = inner.offsetHeight
      }

      const rect = wrapper.getBoundingClientRect()
      const parent = wrapper.parentElement
      const parentRect = parent ? parent.getBoundingClientRect() : rect

      // Only fix while there's room between TOP_OFFSET and the bottom of the
      // column (grid row) for the sidebar's full natural height — otherwise
      // it would float past the end of the column, over the footer.
      const hasRoom = parentRect.bottom > TOP_OFFSET + naturalHeightRef.current
      const shouldFix = rect.top <= TOP_OFFSET && hasRoom

      if (shouldFix !== isFixedRef.current) {
        isFixedRef.current = shouldFix
        setFixed(shouldFix)
      }

      if (shouldFix) {
        const maxTop = parentRect.bottom - naturalHeightRef.current
        const top = Math.min(TOP_OFFSET, maxTop)
        setCoords({ left: rect.left, width: rect.width, top })
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const staticContent = (
    <div ref={innerRef} className="overflow-y-auto pr-2">
      {children}
    </div>
  )

  return (
    <div
      ref={wrapperRef}
      data-sticky-sidebar={fixed ? "fixed" : "static"}
      className="hidden lg:block"
      style={fixed ? { height: naturalHeightRef.current } : undefined}
    >
      {fixed && mounted
        ? createPortal(
            <div
              ref={innerRef}
              style={{
                position: "fixed",
                top: coords.top,
                left: coords.left,
                width: coords.width,
                maxHeight: "calc(100vh - 120px)",
                zIndex: 30,
              }}
              className="overflow-y-auto pr-2"
            >
              {children}
            </div>,
            document.body
          )
        : staticContent}
    </div>
  )
}
