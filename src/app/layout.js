import Script from "next/script";
// Components
import NavbarUi from '@/components/navbar_ui/navbar_ui'
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
export const metadata = {
  metadataBase: new URL('https://karthikshetty.info'),
  title: "Karthik Shetty | Full Stack Developer & Web Development Portfolio",
  description: "Professional portfolio of Karthik Shetty, experienced Full Stack Developer specializing in Next.js, React, Angular, Java, MySQL, Git, HTML, CSS, JavaScript, TypeScript and modern web development. View my projects, skills, and development experience.",
  keywords: "Karthik Shetty, full stack developer, web developer, portfolio, React developer, Next.js developer, JavaScript engineer, frontend development, backend development, responsive web design, Next.js, React, Angular, Java, MySQL, Git, HTML, CSS, JavaScript, TypeScript",
  openGraph: {
    title: "Karthik Shetty | Full Stack Developer Portfolio",
    description: "Experienced Full Stack Developer specializing in creating modern, responsive web applications with modern web development",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Karthik Shetty Portfolio",
    images: [
      {
        url: "/images/sharing/portfolio-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Karthik Shetty - Full Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthik Shetty | Full Stack Developer",
    description: "Check out my portfolio showcasing web development projects and full stack expertise",
    creator: "@karthikshettyyy",
    images: ["/images/sharing/portfolio-og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      {
        url: '/icons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/icons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      }
    ],
    apple: [
      {
        url: '/icons/apple-touch-icon.png',
        sizes: '180x180'
      }
    ],
    shortcut: '/icons/favicon-16x16.png'
  },
  alternates: {
    canonical: "/"
  }
};

// Application RootLayout
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Pre-hydration theme script: runs synchronously before paint to prevent flash */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();` }} />

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-9J1RVTSWHQ" />
        <Script id='google-analytics' strategy='afterInteractive'>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-9J1RVTSWHQ');
        `}</Script>
        <meta name="google-site-verification" content="cCP8Kw8vPOGAi55eKNzp5ob1QtdHelpWTMyJPSkRCgU" />
      </head>
      <body className={`${poppins.variable} ${roboto.variable}`}>
        <NavbarUi />
        {children}
      </body>
    </html>
  );
}
