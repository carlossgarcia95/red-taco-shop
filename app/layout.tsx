import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";
import GoogleAnalyticsScript from "./GoogleAnalyticsScript";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Red Taco Shop",
  description: "Red Taco Shop website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <GoogleAnalyticsScript />
      <body className={inter.variable}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow bg-zinc-50 pt-16">
            {children}
            <Toaster richColors position="top-center" duration={5000} />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
