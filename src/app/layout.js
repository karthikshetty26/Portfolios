import Script from "next/script";
// Components
import NavbarUi from '@/components/navbar/navbar'
// Config
import { ANALYTICS_ID, SEO_METADATA, GOOGLE_SITE_VERIFICATION } from '@/config/site';
// CSS
import "./globals.css";
import "./projects/projects.css"
// Google Fonts
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

// Google Fonts | Font Optimization
// Display font — headings, names, key display text
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800"],
  variable: '--font-display'
})

// Body font — paragraphs, labels, descriptions
const interSans = Inter({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: '--font-body'
})

// Global metadata
export const metadata = SEO_METADATA;

// Application RootLayout
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Pre-hydration theme script: runs synchronously before paint to prevent flash */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();` }} />

        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`} />
        <Script id='google-analytics' strategy='afterInteractive'>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', '${ANALYTICS_ID}');
        `}</Script>
        <meta name="google-site-verification" content={GOOGLE_SITE_VERIFICATION} />
      </head>
      <body className={`${plusJakarta.variable} ${interSans.variable}`}>
        <NavbarUi />
        {children}
      </body>
    </html>
  );
}
