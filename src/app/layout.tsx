import type { Metadata } from "next";
import { Inter, Open_Sans, Raleway } from "next/font/google";
import type React from "react";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simulador de Investimento - Grupo Primo",
  description:
    "Descubra o quanto você pode economizar com nosso simulador de investimentos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${raleway.variable} ${inter.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
