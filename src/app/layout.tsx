import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import "@/styles/layout.css";
import "@/styles/components.css";

const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID || "G-9J1RVTSWHQ";
const GOOGLE_SITE_VERIFICATION = "cCP8Kw8vPOGAi55eKNzp5ob1QtdHelpWTMyJPSkRCgU";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://karthikshetty.info"),
  title: {
    default: "Karthik Shetty | Full Stack Developer & Web Development Portfolio",
    template: "%s | Karthik Shetty",
  },
  description:
    "Professional portfolio of Karthik Shetty — full-stack developer specializing in Next.js, React, Angular, Java, and modern web development. Available for freelance projects.",
  keywords: [
    "Karthik Shetty", "full stack developer", "web developer", "Next.js",
    "React", "Angular", "Java", "Spring Boot", "freelance developer", "portfolio",
  ],
  openGraph: {
    title: "Karthik Shetty | Full Stack Developer",
    description: "Full-stack developer building fast, modern websites and web apps. Available for freelance work.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Karthik Shetty Portfolio",
    images: [{ url: "/images/sharing/portfolio-og-image.jpg", width: 1200, height: 630, alt: "Karthik Shetty — Full Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthik Shetty | Full Stack Developer",
    description: "Full-stack developer building fast, modern websites and web apps.",
    creator: "@KarthikShettyyy",
    images: ["/images/sharing/portfolio-og-image.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/icons/favicon-16x16.png",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <meta name="google-site-verification" content={GOOGLE_SITE_VERIFICATION} />
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`} />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ANALYTICS_ID}');`}
        </Script>
      </head>
      <body className={`${plusJakarta.variable} ${inter.variable}`}>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
