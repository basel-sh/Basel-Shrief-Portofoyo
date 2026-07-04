import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/layout/CursorGlow";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://baselshrief.dev"),
  title: {
    default: "Basel Shrief — Embedded Systems & Digital Design Engineer",
    template: "%s · Basel Shrief",
  },
  description:
    "Basel Shrief is an Electronics & Communication Engineering student at Cairo University building STM32 firmware, RTOS systems, custom PCBs, and RTL/analog IC designs for real racing cars and IoT products.",
  keywords: [
    "Basel Shrief",
    "Embedded Systems Engineer",
    "Firmware Engineer",
    "STM32",
    "FreeRTOS",
    "Digital Design",
    "Verilog",
    "VHDL",
    "FPGA",
    "PCB Design",
    "RISC-V",
    "Cairo University",
  ],
  authors: [{ name: "Basel Shrief" }],
  openGraph: {
    title: "Basel Shrief — Embedded Systems & Digital Design Engineer",
    description:
      "Firmware, RTOS, PCB, and digital/analog IC design work from an Electronics & Communication Engineering student at Cairo University.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basel Shrief — Embedded Systems & Digital Design Engineer",
    description:
      "Firmware, RTOS, PCB, and digital/analog IC design work from an Electronics & Communication Engineering student at Cairo University.",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void" suppressHydrationWarning>
        <SmoothScroll>
          <CursorGlow />
          <Navbar />
          <main className="relative z-10 flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
