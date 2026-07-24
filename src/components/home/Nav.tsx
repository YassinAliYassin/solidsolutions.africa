/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Logo from '../Logo';

interface NavLink {
  label: string;
  href: string;
}

interface NavProps {
  isScrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
  navLinks: NavLink[];
}

export default function Nav({ isScrolled, mobileMenuOpen, setMobileMenuOpen, navLinks }: NavProps) {
  const handleMobileNav = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-main/80 backdrop-blur-lg border-b border-black/5 py-6' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <Logo className="h-11 w-11 md:h-12 md:w-12 shrink-0" />
        </div>
        <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-charcoal transition-colors">{link.label}</a>
          ))}
          <a href="#contact" className="px-5 py-2 bg-charcoal text-white rounded shadow-xl hover:shadow-black/20 transition-all">Contact</a>
        </div>
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-black/10 text-charcoal hover:bg-black/5 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="overflow-hidden border-t border-black/5 bg-white md:hidden mobile-menu">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleMobileNav(link.href)}
                className="flex h-11 items-center rounded-lg px-3 text-left text-sm font-medium text-slate-600 transition hover:bg-black/5 hover:text-charcoal"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleMobileNav("#contact")}
              className="mt-2 flex h-11 items-center justify-center rounded-lg bg-charcoal px-5 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </nav>
  );
}
