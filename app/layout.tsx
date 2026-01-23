import { JetBrains_Mono } from "next/font/google";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const jetbrainMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainMono",
});

export const metadata: Metadata = {
  title: {
    default: "Ahmad Riyo - Full Stack Developer Portfolio",
    template: "%s | Ahmad Riyo",
  },
  description:
    "Personal portfolio website of Ahmad Riyo, a Full Stack Developer from Banjarmasin, Indonesia. Showcasing web development projects, skills in Next.js, React, TypeScript, and more.",
  keywords: [
    "Ahmad Riyo",
    "Full Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Portfolio",
    "Banjarmasin",
    "Indonesia",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [
    {
      name: "Ahmad Riyo",
      url: "https://drive.google.com/drive/folders/1l5kMiaBAmzvIqE0yyexBJ_PbbfZcfLxL",
    },
  ],
  creator: "Ahmad Riyo",
  publisher: "Ahmad Riyo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://web-porto-ahmadriyo.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: "Ahmad Riyo - Full Stack Developer Portfolio",
    description:
      "Personal portfolio website showcasing web development projects and skills in Next.js, React, TypeScript, and modern web technologies.",
    siteName: "Ahmad Riyo Portfolio",
    images: [
      {
        url: "/assets/profile.png",
        width: 1200,
        height: 630,
        alt: "Ahmad Riyo - Full Stack Developer",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/icon.png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#1c1c22" },
    { media: "(prefers-color-scheme: light)", color: "#1c1c22" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ahmad Riyo",
    url: "https://web-porto-ahmadriyo.vercel.app/",
    image: "/assets/profile.png",
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, and TypeScript",
    email: "ahmadriyo.tbn@gmail.com",
    telephone: "+62-821-5494-0857",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Banjarmasin",
      addressRegion: "Kalimantan Selatan",
      addressCountry: "Indonesia",
    },
    sameAs: [
      "https://github.com/ahmdriyo",
      "https://www.linkedin.com/in/ahmd-riyo/",
      "https://www.instagram.com/ahmd_riyo",
    ],
  };

  return (
    <html lang="id">
      <body className={jetbrainMono.variable}>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
