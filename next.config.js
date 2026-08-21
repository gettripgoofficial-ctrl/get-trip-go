/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval'
    https://tpscr.com
    https://*.travelpayouts.com
    https://www.googletagmanager.com
    https://www.google-analytics.com
    https://vercel.live
    https://widget.getyourguide.com
    https://www.viator.com
    https://affiliate.klook.com
    https://*.klook.com;
  script-src-elem 'self' 'unsafe-inline'
    https://tpscr.com
    https://*.travelpayouts.com
    https://www.googletagmanager.com
    https://www.google-analytics.com
    https://vercel.live
    https://widget.getyourguide.com
    https://www.viator.com
    https://affiliate.klook.com
    https://*.klook.com;
  style-src 'self' 'unsafe-inline'
    https://tpscr.com
    https://*.travelpayouts.com
    https://fonts.googleapis.com
    https://*.getyourguide.com
    https://*.viator.com
    https://www.viator.com;
  font-src 'self'
    https://fonts.gstatic.com
    https://*.travelpayouts.com;
  img-src 'self' data: blob:
    https://images.unsplash.com
    https://plus.unsplash.com
    https://tpscr.com
    https://*.travelpayouts.com
    https://www.google-analytics.com
    https://www.googletagmanager.com
    https://*.getyourguide.com
    https://*.viator.com
    https://www.viator.com
    https://affiliate.klook.com
    https://*.klook.com
    https://*.supabase.co
    https://www.google.co.in;
  connect-src 'self'
    https://tpscr.com
    https://*.travelpayouts.com
    https://www.google-analytics.com
    https://analytics.google.com
    https://www.google.com
    https://api.resend.com
    https://*.getyourguide.com
    https://*.viator.com
    https://www.viator.com
    https://stats.g.doubleclick.net;
  frame-src 'self'
    https://widget.getyourguide.com
    https://www.viator.com
    https://affiliate.klook.com
    https://*.klook.com;
  worker-src 'self' blob:;
  media-src 'self' https://*.travelpayouts.com;
`
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin-allow-popups",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, " ").trim(),
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
]
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.gettripgo.com" }],
        destination: "https://gettripgo.com/:path*",
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
