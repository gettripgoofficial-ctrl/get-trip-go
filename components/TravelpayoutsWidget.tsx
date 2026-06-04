'use client'

import { useEffect, useRef } from 'react'

export default function TravelpayoutsWidget() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const doc = iframe.contentDocument || iframe.contentWindow?.document
    if (!doc) return

    doc.open()
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            html, body { width: 100%; background: transparent; }
          </style>
        </head>
        <body>
          <div id="tpwl-search"></div>
          <div id="tpwl-tickets"></div>
          <script type="module" src="https://tpscr.com/wl_web/main.js?wl_id=18308"><\/script>
        </body>
      </html>
    `)
    doc.close()

    // Auto-resize iframe to fit widget content
    const resizeObserver = new ResizeObserver(() => {
      if (iframe && doc.body) {
        iframe.style.height = doc.body.scrollHeight + 'px'
      }
    })
    resizeObserver.observe(doc.body)

    return () => resizeObserver.disconnect()
  }, [])

  return (
    <iframe
      ref={iframeRef}
      style={{
        width: '100%',
        minHeight: '120px',
        border: 'none',
        background: 'transparent',
        display: 'block',
        overflow: 'hidden',
      }}
      scrolling="no"
      title="Flight Search"
    />
  )
}