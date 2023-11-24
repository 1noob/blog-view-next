import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { cx } from "@/app/utils";
import { Analytics } from "./analytics";
import { Providers } from "./providers";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Song",
    template: "%s // Song",
  },
  description: "Web Engineer",
  openGraph: {
    title: "Song",
    description: "Web Engineer",
    url: "https://blog.jackey.love",
    siteName: "Song",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Song",
    description: "Web Engineer",
    card: "summary",
  },
  icons: {
    shortcut: "/icon.png",
  },
  verification: {
    other: {
    },
  },
  metadataBase: new URL("https://blog.jackey.love"),
  alternates: {
    types: {
      "application/rss+xml": "https://blog.jackey.love/atom",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cx(
          "mx-auto flex min-h-[100svh] max-w-prose flex-col bg-page px-4 pb-16 pt-8 font-mono text-primary antialiased",
          jetbrainsMono.variable
        )}
      >
        <Providers>
          <header className="mb-6 flex flex-col">
            <div className="mb-4 ml-auto flex gap-1">
              <abbr
                title="Production"
                className="rounded-sm border border-transparent bg-highlight px-1.5 py-0.5 text-sm text-white no-underline"
              >
                PROD
              </abbr>
              <Link
                href="https://github.com/1noob/blog-view-next"
                className="rounded-sm border bg-neutral-100 px-1.5 py-0.5 text-sm text-primary dark:bg-neutral-800"
              >
                v2
              </Link>
            </div>

            <p className="font-semibold text-primary">
              <Link href="/">Song</Link>&nbsp;&not;
            </p>
            <p className="text-secondary">
              Web Engineer at{" "}
              <a
                href=""
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Home
              </a>
            </p>
          </header>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
