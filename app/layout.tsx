"use client"
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { useState } from "react";
import { Refresh } from "@/components/mobileNav/Refresh";
import Menus from "@/components/mobileNav/pages";
import MobileNav from "@/components/MobileNav";
const jetbrainMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainMono",
});

// export const metadata = {
//   title: "Web Portofolio",
//   description: "Web Portofolio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  return (

    
    <html lang="en">
      <body className={jetbrainMono.variable}>
        <Header />
        {/* <StairTransition /> */}
        {/* {children} */}
        <PageTransition>{children}</PageTransition>
        {/* <Refresh onClick={() => setCount(count + 1)} /> */}
        {/* <MobileNav/> */}
        {/* <Menus  key={count}/> */}
      </body>
    </html>
  );
}
