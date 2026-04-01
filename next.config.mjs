const ANALYTICS_SCRIPT_SOURCES = [
  "https://www.googletagmanager.com",
];

const ANALYTICS_CONNECT_SOURCES = [
  "https://www.google-analytics.com",
  "https://*.google-analytics.com",
];

const ANALYTICS_IMAGE_SOURCES = [
  "https://www.google-analytics.com",
  "https://*.google-analytics.com",
];

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${ANALYTICS_SCRIPT_SOURCES.join(" ")}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  `img-src 'self' data: ${ANALYTICS_IMAGE_SOURCES.join(" ")}`,
  `connect-src 'self' ${ANALYTICS_CONNECT_SOURCES.join(" ")}`,
].join("; ");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable the "X-Powered-By: Next.js" header for security
  poweredByHeader: false,

  // Define security headers for all routes
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            // Keep CSP strict while explicitly allowing approved analytics providers.
            // Add new providers to the ANALYTICS_*_SOURCES arrays above.
            value: CONTENT_SECURITY_POLICY
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
    ];
  },
};

export default nextConfig;
