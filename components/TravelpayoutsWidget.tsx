'use client'

import { useEffect } from 'react'

export default function TravelpayoutsWidget() {
  useEffect(() => {
    const script = document.createElement('script')
    script.async = true
    script.type = 'module'
    script.src = 'https://tpscr.com/wl_web/main.js?wl_id=18308'
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      {/* Search form renders here */}
      <div id="tpwl-search" />
      {/* Flight results render here after search */}
      <div id="tpwl-tickets" />
    </>
  )
}