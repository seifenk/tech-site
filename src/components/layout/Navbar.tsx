"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Cpu } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { name: "首页", href: "/" },
  { name: "案例", href: "/cases" },
  { name: "服务流程", href: "/services" },
  { name: "关于我们", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface/80 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary p-[1px] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-shadow duration-300">
            <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
              <Cpu className="w-5 h-5 text-primary" />
            </div>
          </div>
          <span className="font-heading font-bold text-xl tracking-wider text-white">
            Nexus <span className="text-gradient">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions (CTA + ThemeToggle) */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden group px-6 py-2.5 rounded-full font-medium text-sm text-white bg-surface border border-primary/50 shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all"
            >
              <span className="relative z-10">获取免费报价</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Toggle & Theme Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            className="text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 glass-card border-t-0 p-6 flex flex-col gap-4"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-primary transition-colors py-2 border-b border-border"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
            <button className="w-full mt-4 px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-primary/80 to-secondary/80 border border-primary/50">
              获取免费报价
            </button>
          </Link>
        </motion.div>
      )}
    </header>
  );
}
