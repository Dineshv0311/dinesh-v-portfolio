import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { CustomCursor } from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Dinesh V | Full-Stack Web Developer & AI Solutions Developer",
  description:
    "Portfolio of Dinesh V — Full-Stack Web Developer & AI Solutions Developer based in Chennai, India. Specializing in Next.js, React, Node.js, Python, Gemini & OpenAI APIs, Docker, and Cloud Deployments.",
  keywords: [
    "Dinesh V",
    "Full-Stack Web Developer",
    "AI Solutions Developer",
    "Freelance Web Developer Chennai",
    "Next.js Developer India",
    "Gemini API Developer",
    "Python Flask Developer",
    "DevOps VPS Engineer",
    "VIT Chennai",
  ],
  authors: [{ name: "Dinesh V", url: "https://github.com/Dineshv0311" }],
  creator: "Dinesh V",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dineshv.dev",
    title: "Dinesh V | Full-Stack Web Developer & AI Solutions Developer",
    description:
      "From idea to deployed product — clean code, fast delivery, real results. Available for freelance projects.",
    siteName: "Dinesh V Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinesh V | Full-Stack Web Developer & AI Solutions Developer",
    description:
      "From idea to deployed product — clean code, fast delivery, real results.",
    creator: "@dinesh_v",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0A0A0F] text-[#F3F4F6] selection:bg-primary selection:text-white min-h-screen`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
