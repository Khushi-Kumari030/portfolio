import type { Metadata } from "next";
import { DM_Serif_Display, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khushi Kumari | Data Science & Software Engineering Portfolio",
  description: "Personal portfolio of Khushi Kumari — IIT Kharagpur (Civil Engineering Hons. & Master of AI/ML). Specializing in Data Science, Machine Learning, and Software Engineering.",
  keywords: ["Khushi Kumari", "IIT Kharagpur", "Data Science", "Machine Learning", "Software Engineer", "AI", "Computer Vision", "Deep Learning", "Portfolio"],
  authors: [{ name: "Khushi Kumari", url: "https://github.com/Khushi-Kumari030" }],
  openGraph: {
    title: "Khushi Kumari | Data Science & Software Engineering",
    description: "Portfolio of Khushi Kumari — Intelligent & Scalable Solutions across AI/ML and Software Engineering.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
    >
      <body className="bg-[#0B0B0A] text-[#F5EFE6] antialiased selection:bg-[#FF6B35] selection:text-[#0B0B0A] min-h-screen relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
