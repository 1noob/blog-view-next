import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import { cx } from "@/app/utils";
import { Analytics } from "./analytics";
import { Providers } from "./providers";
import React from "react";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Song",
    template: "%s - Song",
  },
  description: "Software Engineer",
  openGraph: {
    title: "Song",
    description: "Software Engineer",
    url: "https://song.jackey.love",
    images: "/opengraph-image.jpg",
    siteName: "Song",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "zhousongjie",
    description: "Software Engineer",
    card: "summary",
  },
  icons: [
    // 直接按它格式命名文件就行
  ],
  appleWebApp: {
    capable: true,
    title: "Song",
    statusBarStyle: "black-translucent",
  },
  metadataBase: new URL("https://song.jackey.love"),
  alternates: {
    types: {
      "application/rss+xml": "https://song.jackey.love/atom",
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
              <Link
                href="https://github.com/1noob/next-song"
                className="rounded-md hover:bg-neutral-100 p-1.5 text-sm text-blue dark:hover:bg-neutral-700 duration-300 tracking-tight"
              >
                <div className="gap-1.5 flex items-center word-space font-medium">
                  <span className="status-indicator block">
                  </span>
                  Prod Next.js
                </div>
              </Link>
            </div>

            <p className="font-semibold text-primary">
              <Link href="/">Song</Link>&nbsp;&not;
            </p>
            <p className="text-secondary">
              Software Engineer at{" "}
              <a
                href="https://github.com/1noob"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
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
