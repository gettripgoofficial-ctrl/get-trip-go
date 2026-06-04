/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval'
    https://tpscr.com
    https://*.travelpayouts.com
    https://www.googletagmanager.com
    https://www.google-analytics.com
    https://*.crisp.chat
    https://client.crisp.chat
    https://*.sentry.io
    https://*.contentsquare.net
    https://assets.calendly.com
    https://vercel.live;
  script-src-elem 'self' 'unsafe-inline'
    https://tpscr.com
    https://*.travelpayouts.com
    https://www.googletagmanager.com
    https://www.google-analytics.com
    https://*.crisp.chat
    https://client.crisp.chat
    https://*.contentsquare.net
    https://assets.calendly.com
    https://vercel.live;
  style-src 'self' 'unsafe-inline'
    https://tpscr.com
    https://*.travelpayouts.com
    https://fonts.googleapis.com
    https://*.crisp.chat
    https://assets.calendly.com;
  font-src 'self'
    https://fonts.gstatic.com
    https://*.crisp.chat
    https://*.travelpayouts.com;
  img-src 'self' data: blob:
    https://images.unsplash.com
    https://tpscr.com
    https://*.travelpayouts.com
    https://www.google-analytics.com
    https://www.googletagmanager.com
    https://*.crisp.chat
    https://image.crisp.chat
    https://*.contentsquare.net
    https://assets.calendly.com;
  connect-src 'self'
    https://tpscr.com
    https://*.travelpayouts.com
    https://www.google-analytics.com
    https://analytics.google.com
    https://*.crisp.chat
    wss://*.crisp.chat
    https://*.sentry.io
    https://*.contentsquare.net
    https://ace-shiner-107105.upstash.io
    https://api.resend.com
    https://assets.calendly.com;
  frame-src 'self'
    https://*.travelpayouts.com
    https://calendly.com
    https://assets.calendly.com
    https://*.crisp.chat;
  worker-src 'self' blob:;
  media-src 'self' https://*.travelpayouts.com;
`

const securityHeaders = [
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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig