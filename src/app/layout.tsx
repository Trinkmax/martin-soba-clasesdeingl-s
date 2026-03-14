import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Patrick_Hand } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const chalkHand = Patrick_Hand({
  weight: "400",
  variable: "--font-chalk-hand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martin Soba - Clases de Inglés | B2 Certified",
  description: "Clases de inglés personalizadas para jóvenes de 11 a 19 años. Presencial, online y a domicilio. ¡Crea el futuro de tus hijos hoy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${chalkHand.variable} antialiased bg-[#1a2f24] text-white selection:bg-emerald-500/30 overflow-x-hidden`}
      >
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
