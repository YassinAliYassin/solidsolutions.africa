/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/home/Nav";
import Hero from "../components/home/Hero";
import LegalModals, { type LegalModal } from "../components/home/LegalModals";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const BelowFold = lazy(() => import("../components/home/BelowFold"));

const NAV_LINKS = [
  { label: "Services", href: "#offerings" },
  { label: "Platforms", href: "#platforms" },
  { label: "Sectors", href: "#sectors" },
  { label: "FAQ", href: "#faq" },
  { label: "SolidAI", href: "/solid-llm" },
];

const HOME_DESCRIPTION =
  "Solid Solutions is an African SME technology studio building practical AI, cloud, and web systems. Based in Harare, Zimbabwe.";

export default function Home() {
  useDocumentTitle("AI, Cloud & Web Systems for African SMEs", { description: HOME_DESCRIPTION });
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState<LegalModal>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-charcoal/10">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="fade-page">
        <Nav
          isScrolled={isScrolled}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          navLinks={NAV_LINKS}
        />
        <main id="main">
          <Hero />
          <Suspense fallback={<div className="min-h-[40vh]" aria-hidden="true" />}>
            <BelowFold />
          </Suspense>
        </main>
        <Footer setActiveModal={setActiveModal} />
      </div>

      <LegalModals activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}
