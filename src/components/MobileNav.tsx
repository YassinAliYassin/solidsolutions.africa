import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  links: NavItem[];
  cta?: { label: string; href: string };
  /** Use on dark page backgrounds (e.g. SolidAI). */
  dark?: boolean;
}

export default function MobileNav({ links, cta, dark = false }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen((v) => !v)}
        className={
          dark
            ? "w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-white border border-white/20"
            : "w-10 h-10 flex items-center justify-center rounded-lg bg-black/5 text-charcoal"
        }
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className={
              dark
                ? "absolute top-full inset-x-0 z-40 bg-[#0a0a0f]/95 backdrop-blur-lg border-b border-white/10 shadow-xl"
                : "absolute top-full inset-x-0 z-40 bg-bg-main/95 backdrop-blur-lg border-b border-black/5 shadow-xl"
            }
          >
            <div className="px-6 py-6 space-y-1">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={
                    dark
                      ? "block px-4 py-3 text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      : "block px-4 py-3 text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-charcoal hover:bg-black/5 rounded-lg transition-colors"
                  }
                >
                  {link.label}
                </a>
              ))}
              {cta && (
                <a
                  href={cta.href}
                  onClick={() => setIsOpen(false)}
                  className={
                    dark
                      ? "block mt-4 px-4 py-3 bg-white text-black text-sm font-black uppercase tracking-widest text-center rounded-lg shadow-lg"
                      : "block mt-4 px-4 py-3 bg-charcoal text-white text-sm font-black uppercase tracking-widest text-center rounded-lg shadow-lg"
                  }
                >
                  {cta.label}
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
