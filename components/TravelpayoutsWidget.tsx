'use client'

import { useEffect, useRef } from 'react'

export default function TravelpayoutsWidget() {
  const scriptLoaded = useRef(false)

  useEffect(() => {
    if (scriptLoaded.current) return
    scriptLoaded.current = true

    document.querySelectorAll('script[src*="tpscr.com"]').forEach(el => el.remove())

    const script = document.createElement('script')
    script.async = true
    script.type = 'module'
    script.src = 'https://tpscr.com/wl_web/main.js?wl_id=18308'
    document.head.appendChild(script)

    return () => {
      scriptLoaded.current = false
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <div
      style={{
        isolation: 'isolate',
        contain: 'style layout',
        width: '100%',
        display: 'block',
      }}
    >
      <div id="tpwl-search" />
      <div id="tpwl-tickets" />
    </div>
  )
}