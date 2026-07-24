/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowLeft, Globe, Mail } from "lucide-react";
import { useState, useEffect, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import Lenis from "lenis";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function ComingSoon() {
  useDocumentTitle("Coming Soon");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleBack = (e: MouseEvent) => {
    e.preventDefault();
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg-main text-charcoal font-sans selection:bg-charcoal/10 flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-main/80 backdrop-blur-lg border-b border-black/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="/" onClick={handleBack} className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-charcoal rounded flex items-center justify-center transition-transform group-hover:scale-110">
              <ArrowLeft className="text-white" size={16} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-black tracking-tight text-charcoal uppercase">SOLID</span>
              <span className="text-[8px] font-black tracking-[0.3em] text-slate-400 -mt-0.5 ml-0.5">SOLUTIONS</span>
            </div>
          </a>
        </div>
      </nav>

      <div className="flex-grow flex items-center justify-center px-6 pt-20">
        <div className="max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-black/5 border border-black/10 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-sm"
          >
            <Globe className="text-charcoal animate-pulse" size={40} />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-8 uppercase text-charcoal"
          >
            Coming <span className="text-slate-400">Soon</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 mb-12 leading-relaxed font-medium"
          >
            We're currently building our digital presence across various platforms. Our official social channels and specialized portals will be launching shortly.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 text-slate-400"
          >
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" className="group-hover:text-charcoal transition-colors" aria-label="Twitter">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
              </svg>
              <span className="text-[10px] uppercase tracking-widest font-black">Twitter</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" className="group-hover:text-charcoal transition-colors" aria-label="GitHub">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 6.844c1.02 0 2.04.136 2.995.408 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span className="text-[10px] uppercase tracking-widest font-black">GitHub</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" className="group-hover:text-charcoal transition-colors" aria-label="LinkedIn">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
              </svg>
              <span className="text-[10px] uppercase tracking-widest font-black">LinkedIn</span>
            </div>
            <div className="flex flex-col items-center gap-2 group cursor-default">
              <Mail size={24} className="group-hover:text-charcoal transition-colors" />
              <span className="text-[10px] uppercase tracking-widest font-black">Email</span>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="py-12 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <a href="/" onClick={handleBack} className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-charcoal transition-colors">Return to Homepage</a>
        </div>
      </footer>
    </div>
  );
}
