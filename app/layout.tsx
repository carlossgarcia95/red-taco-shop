import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "sonner";

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
      <body className={inter.variable}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow bg-zinc-50 pt-16">
            {children}
            <Toaster richColors position="top-center" duration={5000}/>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
