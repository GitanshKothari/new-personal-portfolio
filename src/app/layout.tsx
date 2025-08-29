import type { Metadata } from "next";
import "./globals.css";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });


export const metadata: Metadata = {
  title: "Gitansh Kothari — Portfolio",
  description: "Portfolio website of Gitansh Kothari",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`min-h-screen bg-noir-900 text-zinc-100 bg-purple-noir ${sora.className}`}>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
