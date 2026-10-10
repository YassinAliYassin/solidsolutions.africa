/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import Logo from "../Logo";
import ThemeToggle from "../ThemeToggle";

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
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [setMobileMenuOpen]);

  useEffect(() => {
    const ids = navLinks
      .map((link) => (link.href.startsWith("#") ? link.href.slice(1) : ""))
      .filter(Boolean);
    let observer: IntersectionObserver | null = null;

    const connect = () => {
      const nodes = ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el instanceof HTMLElement);
      if (nodes.length < ids.length) return false;
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible) setActiveId(visible.target.id);
        },
        { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
      );
      nodes.forEach((node) => observer?.observe(node));
      return true;
    };

    if (connect()) return () => observer?.disconnect();
    const poll = window.setInterval(() => {
      if (connect()) window.clearInterval(poll);
    }, 200);
    return () => {
      window.clearInterval(poll);
      observer?.disconnect();
    };
  }, [navLinks]);

  const close = () => setMobileMenuOpen(false);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled || mobileMenuOpen ? "border-b border-black/5 bg-bg-main/90 py-3 backdrop-blur-lg md:py-4" : "bg-transparent py-5 md:py-8"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
        <a href="/" className="flex min-w-0 items-center gap-3">
          <Logo className="h-10 w-10 shrink-0 md:h-11 md:w-11" aria-hidden="true" />
          <span className="truncate text-sm font-black uppercase leading-none tracking-tight text-charcoal md:text-base">
            Solid Solutions
          </span>
        </a>
        <div className="hidden items-center gap-6 text-xs font-black uppercase tracking-widest text-slate-600 lg:flex">
          {navLinks.map((link) => {
            const current = link.href === `#${activeId}`;
            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={current ? "true" : undefined}
                className={`transition-colors hover:text-charcoal ${current ? "text-charcoal" : ""}`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#contact" className="hidden rounded bg-charcoal px-5 py-2 text-xs font-black uppercase tracking-widest text-white shadow-xl transition-all hover:shadow-black/20 md:inline-flex">
            Request a quote
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-black/10 text-charcoal transition-colors hover:bg-black/5 lg:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div id="mobile-nav" className="mobile-menu overflow-hidden border-t border-black/5 bg-white lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={close}
                className="flex h-11 items-center rounded-lg px-3 text-left text-sm font-medium text-slate-700 transition hover:bg-black/5 hover:text-charcoal"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={close}
              className="mt-2 flex h-11 items-center justify-center rounded-lg bg-charcoal px-5 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Request a quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
