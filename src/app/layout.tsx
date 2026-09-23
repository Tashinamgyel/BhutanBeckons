import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Work_Sans } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bhutanbeckons.com"),
  title: {
    default: "Bhutan Beckons | Curated Journeys Across the Kingdom",
    template: "%s | Bhutan Beckons",
  },
  description:
    "Private, thoughtfully paced journeys through Bhutan, shaped by local knowledge and a deeper sense of place.",
  icons: {
    icon: {
      url: "/brand/bhutan-beckons-raven.png",
      type: "image/png",
      sizes: "542x486",
    },
    shortcut: "/brand/bhutan-beckons-raven.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Bhutan Beckons",
    images: [
      {
        url: "/photos/rimpung-dzong.jpg",
        width: 2560,
        height: 1920,
        alt: "Rinpung Dzong above the Paro valley",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#E7E4DA",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${fraunces.variable} ${workSans.variable} ${ibmPlexMono.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
