"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[64px] h-[32px] rounded-full bg-surface/50 border border-border shrink-0" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center w-[64px] h-[32px] rounded-full p-1 bg-surface border border-border transition-all hover:border-primary/50 focus:outline-none overflow-hidden shrink-0 group"
      aria-label="Toggle theme"
    >
      {/* Background track for the slider */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-amber-200/20 to-orange-400/20 transition-opacity duration-500 ${isDark ? 'opacity-0' : 'opacity-100'}`} />
      <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'}`} />
      
      {/* Sliding thumb */}
      <motion.div
        className="absolute w-[24px] h-[24px] rounded-full shadow-md flex items-center justify-center z-10 glow-border"
        animate={{
          x: isDark ? 32 : 0,
          backgroundColor: isDark ? "#0a0f19" : "#ffffff", 
          borderColor: isDark ? "rgba(0,240,255,0.3)" : "rgba(245,158,11,0.3)"
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        style={{ borderWidth: "1px" }}
      >
        <motion.div
          animate={{ rotate: isDark ? -90 : 0 }}
          transition={{ duration: 0.5, ease: "backOut" }}
        >
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-primary" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-amber-500" />
          )}
        </motion.div>
      </motion.div>

      {/* Decorative icons in the background */}
      <div className="relative w-full flex justify-between px-1.5 z-0 pointer-events-none">
        <Sun className={`w-3.5 h-3.5 transition-colors ${isDark ? 'text-slate-500/50' : 'text-amber-500/0'}`} />
        <Moon className={`w-3.5 h-3.5 transition-colors ${isDark ? 'text-primary/0' : 'text-slate-500/50'}`} />
      </div>
    </button>
  );
}
