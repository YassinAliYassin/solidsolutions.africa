/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Footer from '../components/Footer';
import Nav from '../components/home/Nav';
import Hero from '../components/home/Hero';
import Metrics from '../components/home/Metrics';
import About from '../components/home/About';
import Offerings from '../components/home/Offerings';
import Ecosystem from '../components/home/Ecosystem';
import Sectors from '../components/home/Sectors';
import Stack from '../components/home/Stack';
import Priorities from '../components/home/Priorities';
import HowWeBuild from '../components/home/HowWeBuild';
import WhyUs from '../components/home/WhyUs';
import Roadmap from '../components/home/Roadmap';
import Audiences from '../components/home/Audiences';
import Contact from '../components/home/Contact';
import LegalModals, { type LegalModal } from '../components/home/LegalModals';

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#offerings" },
  { label: "Sectors", href: "#sectors" },
  { label: "Why Us", href: "#why" },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState<LegalModal>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const savedPos = sessionStorage.getItem('home_scroll_pos');
    if (savedPos) {
      requestAnimationFrame(() => {
        window.scrollTo(0, parseInt(savedPos, 10));
      });
    }

    return () => {
      sessionStorage.setItem('home_scroll_pos', window.scrollY.toString());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-charcoal/10">
      <div className="fade-page">
        <Nav
          isScrolled={isScrolled}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          navLinks={NAV_LINKS}
        />
        <Hero />
        <Metrics />
        <About />
        <Offerings />
        <Ecosystem />
        <Sectors />
        <Stack />
        <Priorities />
        <HowWeBuild />
        <WhyUs />
        <Roadmap />
        <Audiences />
        <Contact />
        <Footer setActiveModal={setActiveModal} />
      </div>

      <LegalModals activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}
