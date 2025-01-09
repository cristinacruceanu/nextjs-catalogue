import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import openGraphImage from "./opengraph-image.jpg";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Books Catalogue",
  description:
    "Explore our curated Books Catalogue with thrilling genres, timeless classics and bestselling favorites. Your next great read awaits! 📚✨",
  openGraph: {
    ...openGraphImage,
    title: "Discover Your Next Favorite Book | Books Catalogue",
  },
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
        {children}
      </body>
    </html>
  );
}
