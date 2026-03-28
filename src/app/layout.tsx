import type { Metadata } from "next";
import { Cormorant_Garamond, M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

const sans = M_PLUS_Rounded_1c({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Xcccy | AI Researcher",
  description:
    "A dynamic personal site for Xcccy, featuring research, writing, and experimental AI systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
