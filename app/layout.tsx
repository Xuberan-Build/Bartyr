import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bartyr — Grow. Share. Thrive.",
  description:
    "Your neighborhood has everything you need. Bartyr connects you with neighbors who grow, make, and share—no money required. Join the waitlist for Spring 2026 launch in Atlanta.",
  openGraph: {
    title: "Bartyr — Grow. Share. Thrive.",
    description:
      "Connect with neighbors who grow, make, and share—no money required. Launching Spring 2026 in Atlanta.",
    url: "https://bartyr.app",
    siteName: "Bartyr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bartyr — Grow. Share. Thrive.",
    description:
      "Connect with neighbors who grow, make, and share—no money required.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${crimsonPro.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
