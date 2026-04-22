import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nexus AI Dev",
    default: "Nexus AI Dev - AI驱动软件快速交付",
  },
  description: "初创企业首选软件外包开发团队，基于AI极速构建MVP，2周上线，预算省半。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className={`${syne.variable} ${manrope.variable} dark`}>
      <body className="min-h-screen flex flex-col antialiased relative selection:bg-primary/30 selection:text-white">
        {/* Background Decorative Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] opacity-60">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen animate-blob" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/20 blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: "2s" }} />
        </div>
        
        <Navbar />
        <main className="flex-1 w-full relative z-10 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
