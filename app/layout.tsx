import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shashi-raj.dev"),
  title: {
    default: "Shashi Raj | Full Stack MERN Developer",
    template: "%s | Shashi Raj"
  },
  description:
    "Personal portfolio of Shashi Raj, a Full Stack MERN Developer and final year undergraduate at IIIT Ranchi building scalable products with MERN, Next.js, APIs, and AI integrations.",
  keywords: [
    "Shashi Raj",
    "Full Stack MERN Developer",
    "IIIT Ranchi",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer"
  ],
  openGraph: {
    title: "Shashi Raj | Full Stack MERN Developer",
    description:
      "Modern portfolio showcasing MERN projects, scalable APIs, AI integrations, DSA practice, and product-focused engineering.",
    url: "https://shashi-raj.dev",
    siteName: "Shashi Raj Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashi Raj | Full Stack MERN Developer",
    description:
      "Full Stack MERN Developer building modern web applications with Next.js, scalable APIs, and AI-powered integrations."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
