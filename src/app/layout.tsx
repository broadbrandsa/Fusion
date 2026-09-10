import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

import { ScrollProgress } from "@/components/blocks/scroll-progress";
import { AccentPicker } from "@/components/dev/accent-picker";
import { site } from "@/content/site";

import "./globals.css";

/* Archivo carries headlines and display, 600 to 800. */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

/* IBM Plex Sans carries running text on the web and in documents. */
const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/* IBM Plex Mono carries money and figures, tabular numerals always. */
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - ${site.tagline}`,
    template: `%s - ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: site.url,
    siteName: site.name,
    title: `${site.name} - ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - ${site.tagline}`,
    description: site.description,
  },
};

/* The splash and the browser chrome both open on graphite, so nothing
   flashes on first paint. */
export const viewport: Viewport = {
  themeColor: "#191C20",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-ZA"
      className={`dark ${archivo.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ScrollProgress />
        {/* TEMPORARY, for sign-off. Delete this line and the [data-accent]
            block in globals.css once the accent is chosen. */}
        <AccentPicker />
        {children}
      </body>
    </html>
  );
}
