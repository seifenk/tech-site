"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { flushSync } from "react-dom";

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

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newTheme = isDark ? "light" : "dark";
    const doc = document as any;

    if (!doc.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    // Get the click position, or fallback to top right
    const x = e.clientX ?? window.innerWidth - 32;
    const y = e.clientY ?? 32;
    
    // Calculate the distance to the farthest corner
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Add a class to disable default CSS transitions during the View Transition
    document.documentElement.classList.add("view-transitioning");

    const transition = doc.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      
      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 500,
          easing: "ease-out",
          // Animate the new view coming in over the old view
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });

    transition.finished.then(() => {
      document.documentElement.classList.remove("view-transitioning");
    });
  };

  return (
    <button
      onClick={toggleTheme}
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
