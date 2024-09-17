import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Header } from "./global-components/Header";
import { AnnouncementBar } from "./global-components/AnnouncementBar";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fernet Brance",
  description: "Top liquer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <AnnouncementBar/>
      <Header/>
        {children}
      </body>
    </html>
  );
}
