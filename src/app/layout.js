import Script from "next/script";
// Components
import NavbarUi from '@/components/navbar_ui/navbar_ui'
// Config
import { ANALYTICS_ID, SEO_METADATA, GOOGLE_SITE_VERIFICATION } from '@/config/site';
// CSS
import "./globals.css";
import "./projects/projects.css"
// Google Fonts
import { Poppins, Roboto } from 'next/font/google'

// Google Fonts | Font Optimization
// Font primary
const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-family-primary'
})

// Font secondary
const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-family-secondary'
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
      <body className={`${poppins.variable} ${roboto.variable}`}>
        <NavbarUi />
        {children}
      </body>
    </html>
  );
}
