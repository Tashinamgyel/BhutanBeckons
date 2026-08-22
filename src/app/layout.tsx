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
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Bhutan Beckons",
    images: [
      {
        url: "/images/bhutan-valley-dawn.jpg",
        width: 1672,
        height: 938,
        alt: "A Bhutanese dzong above a Himalayan valley at dawn",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#E7E4DA",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
