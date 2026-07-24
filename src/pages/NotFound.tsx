/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowLeft, Home, Search, Mail, MapPin } from "lucide-react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Page Not Found");
  return (
    <div className="min-h-screen font-sans selection:bg-charcoal/10 bg-bg-main flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-bg-main/80 backdrop-blur-lg border-b border-black/5 py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-charcoal rounded flex items-center justify-center transition-transform group-hover:scale-110">
              <div className="w-3 h-3 border-2 border-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-charcoal uppercase">SOLID SOLUTIONS</span>
          </a>
          <a href="/" className="px-5 py-2 bg-charcoal text-white rounded-full text-sm font-medium hover:bg-charcoal/90 transition-all">
            Home
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center pt-24 pb-12 px-6">
        <div className="text-center max-w-2xl">
          {/* 404 Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-12"
          >
            <div className="text-[150px] md:text-[200px] font-black text-charcoal/5 leading-none select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-charcoal/5 flex items-center justify-center">
                <Search size={40} className="text-charcoal/30" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl font-black text-charcoal mb-4 uppercase tracking-tight">
              Page Not Found
            </h1>
            <p className="text-lg text-slate-600 mb-10 font-medium max-w-md mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="/"
                className="px-8 py-4 bg-charcoal text-white font-bold uppercase tracking-wider text-sm rounded shadow-2xl hover:shadow-black/20 transition-all flex items-center justify-center gap-3"
              >
                <Home size={18} /> Back to Homepage
              </a>
              <button
                onClick={() => window.history.back()}
                className="px-8 py-4 bg-black/5 text-charcoal font-bold uppercase tracking-wider text-sm rounded border border-black/10 hover:bg-black/10 transition-all flex items-center justify-center"
              >
                <ArrowLeft size={18} className="mr-2" /> Go Back
              </button>
            </div>

            {/* Quick Links */}
            <div className="border-t border-black/5 pt-12">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "Home", href: "/", icon: Home },
                  { label: "SolidAI", href: "/solidai", icon: Search },
                  { label: "Documentation", href: "/documentation", icon: MapPin },
                  { label: "Contact", href: "/#contact", icon: Mail },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="p-4 glass-card flex flex-col items-center gap-2 hover:bg-black/5 transition-colors"
                  >
                    <link.icon size={20} className="text-slate-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-black/5 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Solid Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
