import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WalkMate – Walk Together, Arrive Happier",
  description:
    "WalkMate connects commuters in Kochi who share walking routes. Find walking buddies near Infopark, CUSAT, Palarivattom, MG Road, and Marine Drive. Walk safer, together.",
  keywords: [
    "WalkMate",
    "walking buddy",
    "Kochi",
    "Infopark",
    "CUSAT",
    "safe walking",
    "walk together",
    "Kerala",
  ],
  openGraph: {
    title: "WalkMate – Walk Together, Arrive Happier",
    description:
      "Find walking companions for your daily commute in Kochi. Safe, social, and fun.",
    type: "website",
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
        className={`${syne.variable} ${dmSans.variable} font-dm bg-dark text-cream antialiased overflow-x-hidden`}
      >
        {/* Grain overlay */}
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
