import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const bgtype = req.nextUrl.searchParams.get("bgtype") ?? "Car"

  const html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      html, body { width: 468px; height: 60px; overflow: hidden; background: transparent; }
    </style>
  </head>
  <body>
    <ins
      class="klk-aff-widget"
      data-wid="123778"
      data-bgtype="${bgtype}"
      data-adid="1299937"
      data-lang="en-BS"
      data-prod="banner"
      data-width="468"
      data-height="60"
    ><a href="//www.klook.com/?aid=">Klook.com</a></ins>
    <script src="https://affiliate.klook.com/widget/fetch-iframe-init.js" async></script>
  </body>
</html>`

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}