import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";
import { analytics } from "@/utils/data";

export const metadata: Metadata = {
  title: "Global Sumud Flotilla",
  description: "Global Sumud Flotilla Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      {analytics.domain && analytics.websiteId && (
        <Script
          defer
          src={`${analytics.domain}/script.js`}
          data-website-id={analytics.websiteId}
        />
      )}
    </html>
  );
}
