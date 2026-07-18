/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Cpu,
  Database,
  Microscope,
  Smartphone,
  Globe,
  ArrowRight,
  Mail,
  MapPin,
  ChevronRight,
  Layers,
  Users,
  Code,
  Shield,
  Brain,
  Cloud,
  LayoutDashboard,
  CheckCircle,
  Zap,
  Target,
  Heart,
  Monitor,
  Server,
  BarChart3,
  MessageSquare,
  Building2
} from "lucide-react";
import { useState, useEffect, type ReactNode } from "react";
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import { Reveal } from '../components/Reveal';


const SectionTitle = ({
  children,
  subtitle,
  light = false,
}: {
  children: ReactNode;
  subtitle?: string;
  light?: boolean;
}) => (
  <div className="mb-12">
    <h2
      className={`text-3xl md:text-4xl font-black tracking-tight mb-4 ${
        light ? "text-white" : "text-charcoal"
      }`}
    >
      {children}
    </h2>
    {subtitle && (
      <p className={`max-w-2xl font-medium ${light ? "text-white/70" : "text-slate-600"}`}>
        {subtitle}
      </p>
    )}
  </div>
);

const Card = ({ title, description, icon: Icon, highlight = false, href, onClick }: { title: string, description: string, icon: any, highlight?: boolean, href?: string, onClick?: () => void }) => (
  <div
    className={`glass-card hover-lift p-8 flex flex-col h-full ${highlight ? 'border-charcoal/5 bg-charcoal/5' : ''}`}
  >
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${highlight ? 'bg-charcoal text-white shadow-lg' : 'bg-black/5 text-slate-500'}`}>
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-charcoal mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed flex-grow font-medium">{description}</p>
    {onClick ? (
      <button
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        className="mt-6 flex items-center text-charcoal text-sm font-bold group cursor-pointer hover:opacity-100 transition-opacity w-fit"
      >
        Learn more <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </button>
    ) : href ? (
      <a href={href} className="mt-6 flex items-center text-charcoal text-sm font-bold group cursor-pointer hover:opacity-100 transition-opacity">
        Learn more <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </a>
    ) : (
      <div className="mt-6 flex items-center text-charcoal text-sm font-bold group cursor-pointer hover:opacity-100 transition-opacity">
        Learn more <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </div>
    )}
  </div>
);

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDetail, setActiveDetail] = useState<string | null>(null);
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNav = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#offerings" },
    { label: "Sectors", href: "#sectors" },
    { label: "Why Us", href: "#why" },
  ];

  const testimonials = [
    {
      quote: "Solid Solutions helped us build a clean, professional website that actually converts visitors into customers. The process was smooth and the result exceeded expectations.",
      name: "Tendai M.",
      role: "Founder, Harare Retail Co.",
    },
    {
      quote: "We needed practical AI tools for our agricultural supply chain. SolidAI gave us a sector-specific agent that helps with planning and triage — no hype, just useful.",
      name: "Grace K.",
      role: "Operations Lead, AgriConnect",
    },
    {
      quote: "The migration from our old cPanel hosting to a faster NGINX setup was seamless. Our site loads faster and we have better control over our infrastructure.",
      name: "David N.",
      role: "CTO, EduTech Zimbabwe",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const savedPos = sessionStorage.getItem('home_scroll_pos');
    if (savedPos && !activeDetail) {
      requestAnimationFrame(() => {
        window.scrollTo(0, parseInt(savedPos, 10));
      });
    }

    return () => {
      if (!activeDetail) {
        sessionStorage.setItem('home_scroll_pos', window.scrollY.toString());
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeDetail]);

  const handleOpenDetail = (id: string) => {
    setLastScrollPos(window.scrollY);
    setActiveDetail(id);
    window.scrollTo(0, 0);
  };

  const handleCloseDetail = () => {
    setActiveDetail(null);
    setTimeout(() => {
      window.scrollTo({
        top: lastScrollPos,
        behavior: 'smooth'
      });
    }, 50);
  };

  const detailContent: Record<string, { title: string, icon: any, content: string, points: string[] }> = {
    systems: {
      title: "Core Systems Architecture",
      icon: Layers,
      content: "Our systems are built on a foundation of resilience, scalability, and efficiency. We focus on creating integrated environments where software and hardware work in perfect harmony to solve complex African challenges.",
      points: [
        "Distributed Cloud Infrastructure",
        "Edge Computing Optimization",
        "Automated System Recovery",
        "Hardware-Software Co-design"
      ]
    },
    community: {
      title: "Developer & Builder Community",
      icon: Users,
      content: "Innovation doesn't happen in a vacuum. We are building a vibrant ecosystem of developers, engineers, and creators who are passionate about building the future of African technology. Connect with us at info@solidsolutions.africa to learn more about our initiatives and how you can get involved.",
      points: [
        "Open Source Collaboration: Contributing to and maintaining critical infrastructure projects.",
        "Technical Mentorship Programs: Guiding the next generation of African engineers.",
        "Builder Workshops & Hackathons: Hands-on learning and rapid prototyping events.",
        "Cross-border Knowledge Sharing: Connecting tech hubs across the continent."
      ]
    },
    research: {
      title: "Advanced Technology Research",
      icon: Microscope,
      content: "Our research initiatives push the boundaries of what's possible. From AI-driven insights to sustainable hardware manufacturing, we use data to drive long-term technological progress.",
      points: [
        "Applied AI & Machine Learning",
        "Sustainable Materials Science",
        "Digital Economy Impact Studies",
        "Next-Gen Hardware Prototyping"
      ]
    },
    ai_hub: {
      title: "AI Research & Development Hub",
      icon: Cpu,
      content: "The AI Hub is our dedicated center for exploring the practical applications of artificial intelligence in the African context. We are moving beyond theoretical models to build AI that understands local languages, optimizes agricultural yields, and powers the next generation of African fintech.",
      points: [
        "Hyper-local NLP: Developing language models for diverse African dialects.",
        "Agri-Tech Intelligence: Computer vision for real-time crop disease detection.",
        "Fintech Optimization: Predictive models for inclusive financial services.",
        "Edge-AI Deployment: Running complex models on low-power hardware."
      ]
    },
    hardware: {
      title: "Hardware Innovation & Assembly",
      icon: Smartphone,
      content: "We are building the foundation for a robust hardware ecosystem in Africa. Our mission is to transition from consumers to creators, designing and assembling high-performance devices that are optimized for local conditions—from heat resilience to energy efficiency.",
      points: [
        "Next-Gen Assembly: Establishing high-precision local assembly lines.",
        "Embedded Systems: Custom PCB design for industrial IoT applications.",
        "Sustainable Design: Using modular components to extend device lifecycles.",
        "Silicon Collaboration: Researching specialized chips for edge computing."
      ]
    },
    infrastructure: {
      title: "Scalable Digital Infrastructure",
      icon: Database,
      content: "Digital infrastructure is the backbone of the modern economy. We develop the systems, networks, and platforms that enable seamless connectivity and data management across the continent, ensuring that African businesses can compete on a global scale.",
      points: [
        "Distributed Cloud: Building resilient, localized data center networks.",
        "Low-Latency Mesh: Innovative connectivity solutions for remote areas.",
        "Secure Data Vaults: Advanced encryption and sovereign data management.",
        "API Ecosystems: Standardized protocols for cross-platform integration."
      ]
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-charcoal/10">
      {activeDetail ? (
          <div className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto fade-page">
            <button
              onClick={handleCloseDetail}
              className="mb-12 flex items-center gap-2 text-slate-500 hover:text-charcoal transition-colors group"
            >
              <ArrowRight className="rotate-180" size={20} />
              <span className="font-bold uppercase tracking-widest text-xs">Back to Overview</span>
            </button>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-20 h-20 rounded-2xl bg-charcoal text-white flex items-center justify-center shadow-2xl mb-8">
                  {(() => {
                    const Icon = detailContent[activeDetail].icon;
                    return <Icon size={40} />;
                  })()}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-charcoal">
                  {detailContent[activeDetail].title}
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium">
                  {detailContent[activeDetail].content}
                </p>
              </div>
              <div className="glass-card p-10 border-black/5 bg-white shadow-xl">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-slate-500">Key Focus Areas</h3>
                <div className="space-y-6">
                  {detailContent[activeDetail].points.map((point, i) => (
                    <div key={i} className="flex items-start gap-4 text-slate-700">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-charcoal"></div>
                      <span className="text-lg font-bold text-charcoal">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="fade-page">
      {/* Navigation */}
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-black/10 text-charcoal hover:bg-black/5 transition-colors"
            aria-label="Toggle menu"
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-pattern bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-main/50 to-bg-main pointer-events-none"></div>

        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-black/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-black/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <Reveal immediate>
              <span className="inline-block px-3 py-1 bg-black/5 text-charcoal text-[10px] font-bold tracking-[0.2em] uppercase rounded border border-black/10 mb-8 backdrop-blur-sm">
                African SME Technology Studio
              </span>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-charcoal mb-6 leading-none uppercase">
                <span className="block">AI, Cloud</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-charcoal to-slate-400">&amp; Web Systems</span>
                <span className="block">for African SMEs</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl font-medium">
                Solid Solutions is an African SME technology studio building practical AI, cloud, and web systems. We operate as a unified ecosystem — not isolated tools — combining strategy, design, automation, and infrastructure under one studio.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#offerings" className="px-8 py-4 bg-charcoal text-white font-bold uppercase tracking-wider text-sm rounded shadow-2xl hover:shadow-black/20 transition-all flex items-center justify-center gap-3 group">
                  Our Services <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                </a>
                <a href="#contact" className="px-8 py-4 bg-black/5 text-charcoal font-bold uppercase tracking-wider text-sm rounded border border-black/10 hover:bg-black/10 transition-all flex items-center justify-center">
                  Get in Touch
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { value: "7+", label: "AI Sector Agents" },
              { value: "28+", label: "Solid Cloud Tools" },
              { value: "3", label: "Connected Channels" },
              { value: "50+", label: "SMEs Served" },
              { value: "<2s", label: "Page Load Target" },
              { value: "24/7", label: "Support" },
            ].map((metric, i) => (
              <Reveal key={i} delay={i * 80} className="text-center">
                <div className="text-3xl md:text-4xl font-black mb-2">{metric.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">{metric.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-bg-dark relative overflow-hidden border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle>A Unified Technology Studio</SectionTitle>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
              Solid Solutions is an African SME technology studio building practical AI, cloud, and web systems. It operates as a unified ecosystem — not isolated tools — combining strategy, design, automation, and infrastructure under one studio.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Based in Harare, Zimbabwe, we serve small and medium enterprises across Africa with focused tools: SolidAI agents, Solid Cloud workspaces, and AionUI command layers — backed by clean infrastructure that helps small teams operate with less friction.
            </p>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section id="offerings" className="py-24 grid-pattern bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="We build focused tools that help African SMEs look credible, respond faster, and run cleaner operations.">
            Core Offerings
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              title="Websites & Brand Systems"
              description="Fast, clean sites for African SMEs, founders, NGOs, and service businesses. Focus on credible online presence without bloated tooling."
              icon={Globe}
              highlight
              href="#contact"
            />
            <Card
              title="AI Business Tools (SolidAI)"
              description="Sector-specific agents, workflow assistants, and automations designed for practical business support across local markets."
              icon={Brain}
              highlight
              href="/solid-llm"
            />
            <Card
              title="Cloud & Infrastructure"
              description="Cloudflare, NGINX, cPanel migration. Hosting dashboards, deployment pipelines, and monitoring for cleaner operations."
              icon={Cloud}
              highlight
              href="#contact"
            />
            <Card
              title="Dashboards & Internal Apps"
              description="Operational interfaces for files, billing, staff, client tasks, reports, and admin workflows."
              icon={LayoutDashboard}
              highlight
              href="#contact"
            />
          </div>
        </div>
      </section>

      {/* Platform Ecosystem */}
      <section className="py-24 bg-bg-dark border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Three integrated platforms working together under one studio.">
            Platform Ecosystem
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card hover-lift p-8 bg-white border-black/5">
              <div className="w-14 h-14 rounded-xl bg-charcoal text-white flex items-center justify-center mb-6 shadow-lg">
                <Brain size={28} />
              </div>
              <h3 className="text-xl font-black text-charcoal mb-3">SolidAI</h3>
              <p className="text-slate-600 leading-relaxed font-medium mb-4">
                Sector-specific agents for agriculture, health, education, finance, legal, transport, energy, retail, and governance workflows.
              </p>
              <a href="/solid-llm" className="text-charcoal text-sm font-bold flex items-center gap-1 group">
                Explore SolidAI <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="glass-card hover-lift p-8 bg-white border-black/5">
              <div className="w-14 h-14 rounded-xl bg-charcoal text-white flex items-center justify-center mb-6 shadow-lg">
                <Cloud size={28} />
              </div>
              <h3 className="text-xl font-black text-charcoal mb-3">Solid Cloud</h3>
              <p className="text-slate-600 leading-relaxed font-medium mb-4">
                A private cloud workspace for files, tools, hosting utilities, AI helpers, team workflows, billing, and mobile-to-computer sync.
              </p>
              <span className="text-slate-400 text-sm font-bold">Coming Soon</span>
            </div>

            <div className="glass-card hover-lift p-8 bg-white border-black/5">
              <div className="w-14 h-14 rounded-xl bg-charcoal text-white flex items-center justify-center mb-6 shadow-lg">
                <Monitor size={28} />
              </div>
              <h3 className="text-xl font-black text-charcoal mb-3">AionUI</h3>
              <p className="text-slate-600 leading-relaxed font-medium mb-4">
                A desktop and Telegram-connected interface for managing agents, project actions, and Solid Solutions workflows from one place.
              </p>
              <span className="text-slate-400 text-sm font-bold">In Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* SolidAI Sectors */}
      <section id="sectors" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="SolidAI provides sector-specific agents designed for practical business support across local markets.">
            SolidAI Sectors
          </SectionTitle>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { emoji: "🌾", name: "Agriculture", desc: "Crop planning, weather schedules, market prices, logistics" },
              { emoji: "🏥", name: "Health", desc: "Patient triage, appointment reminders, inventory, multilingual info" },
              { emoji: "🎓", name: "Education", desc: "Lesson planning, exam revision, parent comms, admin reports" },
              { emoji: "💰", name: "Finance", desc: "Invoice drafting, expense categorisation, cash-flow, client templates" },
              { emoji: "⚖️", name: "Legal", desc: "Contract clauses, compliance checklists, client intake, case summaries" },
              { emoji: "🚛", name: "Transport", desc: "Fleet coordination, route planning, driver logs, delivery tracking" },
              { emoji: "⚡", name: "Energy", desc: "Solar inventory, installation quotes, maintenance scheduling" },
              { emoji: "🏪", name: "Retail", desc: "Stock reconciliation, supplier orders, pricing, customer service" },
            ].map((sector, i) => (
              <Reveal key={i} delay={i * 50} className="glass-card p-6 bg-white border-black/5 text-center group cursor-default hover-lift">
                <div className="text-3xl mb-3">{sector.emoji}</div>
                <h4 className="text-sm font-black text-charcoal mb-2">{sector.name}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{sector.desc}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 font-medium italic max-w-2xl mx-auto">
              "The right positioning is practical, not hype: SolidAI should help people draft, compare, plan, triage, and make better operational decisions while keeping expert review where it matters."
            </p>
          </div>
        </div>
      </section>

      {/* Operating Stack */}
      <section className="py-24 bg-bg-dark border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionTitle>Operating Stack</SectionTitle>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto">
              We prefer systems that can be inspected, deployed, automated, and improved. Simple frontends, clear APIs, and open AI tooling.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React", "Vite", "Tailwind", "Node.js", "NGINX", "Cloudflare",
              "OpenRouter", "Hugging Face", "Ollama", "Telegram"
            ].map((tech, i) => (
              <Reveal key={i} as="span" delay={i * 40} className="px-5 py-2.5 bg-white border border-black/5 rounded-lg text-xs font-bold uppercase tracking-widest text-charcoal shadow-sm">
                {tech}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Current Priorities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle>Current Priorities</SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: "SolidAI Platform", desc: "7 sector-focused agents for practical business support" },
              { icon: Cloud, title: "Solid Cloud Tools", desc: "Personal and business workflow utilities" },
              { icon: MessageSquare, title: "AionUI Telegram Bot", desc: "Connected to the Solid Solutions ecosystem" },
              { icon: Server, title: "NGINX Migration", desc: "cPanel hosting → faster NGINX VPS infrastructure" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 80} className="glass-card p-6 bg-slate-50 border-black/5">
                <item.icon size={24} className="text-charcoal mb-4" />
                <h4 className="text-sm font-black text-charcoal mb-2">{item.title}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Build */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionTitle light>How We Build</SectionTitle>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Useful before flashly",
                desc: "The first version must help someone do work: answer faster, organize files, publish a site, manage tasks, or understand a business decision."
              },
              {
                icon: Target,
                title: "Local context matters",
                desc: "Tools designed for patchy connectivity, power cuts, informal workflows, and fast-moving teams."
              },
              {
                icon: Shield,
                title: "Own the stack",
                desc: "Prefer systems that can be inspected, deployed, automated, and improved. Simple frontends, clear APIs, Cloudflare, NGINX, and open AI tooling."
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-lg font-black mb-3 uppercase tracking-wide">{item.title}</h3>
                <p className="text-white/60 font-medium leading-relaxed">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Solid Solutions */}
      <section id="why" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle>Why Choose Solid Solutions</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: BarChart3,
                title: "SME-first delivery",
                desc: "Scoped around real budgets, small teams, and immediate operational value."
              },
              {
                icon: Brain,
                title: "AI with practical guardrails",
                desc: "Automation supports drafting, triage, and workflow speed without replacing expert review."
              },
              {
                icon: Server,
                title: "Cloud-ready foundations",
                desc: "Prepared for cleaner hosting, monitoring, migration, and long-term maintenance."
              },
              {
                icon: Zap,
                title: "Fast iteration loops",
                desc: "Web, cloud, and agent workflows improve together."
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 80} className="glass-card p-8 bg-slate-50 border-black/5 flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-charcoal text-white flex items-center justify-center flex-shrink-0 shadow-lg">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-charcoal mb-2">{item.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-bg-main border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-charcoal/60 mb-4">What clients say</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-charcoal">
              Trusted by African businesses building with practical tech.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} as="article" delay={index * 80} className="glass-card p-8 bg-white border-black/5 shadow-sm">
                <p className="text-sm leading-relaxed text-slate-600 font-medium">"{item.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-charcoal text-sm font-bold text-white">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-charcoal">{item.name}</p>
                    <p className="text-xs text-slate-500 font-medium">{item.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-24 bg-bg-dark border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle>Roadmap</SectionTitle>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                phase: "Now",
                title: "Polishing & Alignment",
                status: "Current",
                active: true,
                items: [
                  "Polishing public site and aligning copy",
                  "Keeping brand clear and consistent",
                  "SolidAI platform with 7 sector agents",
                  "AionUI Telegram bot integration"
                ]
              },
              {
                phase: "Next",
                title: "Integration",
                status: "In Progress",
                active: false,
                items: [
                  "Connecting SolidAI Gateway & WebChat",
                  "Telegram + AionUI + Solid Cloud loop",
                  "cPanel → NGINX VPS migration path",
                  "Client onboarding workflows"
                ]
              },
              {
                phase: "Pilot",
                title: "Prototyping",
                status: "Upcoming",
                active: false,
                items: [
                  "Dashboards for mesh connectivity",
                  "Power-aware operations tools",
                  "Sector-specific SME workflows",
                  "Cross-border collaboration features"
                ]
              },
            ].map((item, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                className={`glass-card p-8 ${item.active ? 'border-charcoal/20 bg-charcoal/5' : 'bg-white border-black/5'}`}
              >
                <div className={`inline-block px-3 py-1 rounded text-[10px] font-black uppercase tracking-[0.2em] mb-4 ${item.active ? 'bg-charcoal text-white' : 'bg-black/5 text-slate-500'}`}>
                  {item.phase}
                </div>
                <h3 className="text-xl font-black text-charcoal mb-2">{item.title}</h3>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">{item.status}</p>
                <ul className="space-y-3">
                  {item.items.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                      <CheckCircle size={16} className="text-charcoal mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle>Who We Serve</SectionTitle>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "For SMEs",
                desc: "Practical systems to look credible, respond faster, and run cleaner operations."
              },
              {
                icon: Code,
                title: "For Builders",
                desc: "Developer-friendly workflows, reusable components, and evolving agent tooling."
              },
              {
                icon: Heart,
                title: "For Ownership",
                desc: "Infrastructure choices that reduce dependency, keep data closer, and support long-term control."
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100} className="text-center glass-card p-8 bg-slate-50 border-black/5">
                <div className="w-16 h-16 rounded-2xl bg-charcoal text-white flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-black text-charcoal mb-3">{item.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <SectionTitle subtitle="Solid Solutions welcomes collaboration with developers, engineers, researchers, institutions, and investors interested in advancing Africa's technology ecosystem.">
                Get in Touch
              </SectionTitle>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center text-charcoal flex-shrink-0 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-charcoal font-black uppercase tracking-widest text-xs mb-1">Email</h4>
                    <p className="text-slate-600 font-bold">info@solidsolutions.africa</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center text-charcoal flex-shrink-0 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-charcoal font-black uppercase tracking-widest text-xs mb-1">Location</h4>
                    <p className="text-slate-600 font-bold">Harare, Zimbabwe</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card p-8 bg-slate-50 border-black/5 shadow-2xl">
              {formStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-charcoal font-black uppercase tracking-widest text-sm mb-2">Message Sent!</h3>
                  <p className="text-slate-600 font-medium">Thank you! We'll respond to <strong>info@solidsolutions.africa</strong> soon.</p>
                </div>
              ) : (
                <form
                  action="https://formspree.io/f/xzdoprej"
                  method="POST"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setFormStatus('submitting');

                    const formData = new FormData(e.currentTarget);

                    try {
                      const response = await fetch('https://formspree.io/f/xzdoprej', {
                        method: 'POST',
                        body: formData,
                        headers: {
                          'Accept': 'application/json'
                        }
                      });

                      if (response.ok) {
                        setFormStatus('success');
                      } else {
                        setFormStatus('error');
                      }
                    } catch (error) {
                      setFormStatus('error');
                    }
                  }}
                  className="space-y-6"
                >
                  <input type="hidden" name="_to" value="info@solidsolutions.africa" />
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-charcoal focus:outline-none focus:border-charcoal/30 transition-colors font-medium shadow-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-charcoal focus:outline-none focus:border-charcoal/30 transition-colors font-medium shadow-sm"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-charcoal focus:outline-none focus:border-charcoal/30 transition-colors font-medium shadow-sm"
                      placeholder="How can we help?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 bg-charcoal text-white font-black uppercase tracking-widest text-xs rounded shadow-xl hover:shadow-black/20 transition-all disabled:opacity-50"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                  {formStatus === 'error' && (
                    <p className="text-red-600 text-xs font-bold text-center">Something went wrong. Please email info@solidsolutions.africa directly.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer setActiveModal={setActiveModal} />

          </div>
        )}

      {/* Modals */}
      {activeModal && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-charcoal/40 backdrop-blur-sm modal-overlay"
            onClick={() => setActiveModal(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] border border-black/10 modal-panel"
            >
              <div className="p-6 border-b border-black/5 flex justify-between items-center bg-bg-dark sticky top-0 z-10">
                <h2 className="text-xl font-bold text-charcoal">
                  {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
                </h2>
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors text-slate-500 hover:text-charcoal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              </div>
              <div className="p-8 overflow-y-auto">
                {activeModal === 'privacy' ? (
                  <div className="space-y-6 text-slate-600 leading-relaxed">
                    <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
                    <p>At Solid Solutions, we are committed to protecting your privacy. This short Privacy Policy outlines how we handle your information.</p>

                    <h3 className="text-charcoal font-bold text-lg mt-6 mb-2">1. Information We Collect</h3>
                    <p>We may collect basic contact information (such as your name and email address) when you voluntarily submit it through our contact forms or when you reach out to us at info@solidsolutions.africa.</p>

                    <h3 className="text-charcoal font-bold text-lg mt-6 mb-2">2. How We Use Your Information</h3>
                    <p>We use the information you provide solely to respond to your inquiries, facilitate collaboration, and keep you updated on our initiatives. We do not sell or share your personal information with third parties for marketing purposes.</p>

                    <h3 className="text-charcoal font-bold text-lg mt-6 mb-2">3. Data Security</h3>
                    <p>We implement reasonable security measures to protect your information from unauthorized access or disclosure.</p>

                    <h3 className="text-charcoal font-bold text-lg mt-6 mb-2">4. Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy, please contact us at info@solidsolutions.africa.</p>
                  </div>
                ) : (
                  <div className="space-y-6 text-slate-600 leading-relaxed">
                    <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
                    <p>Welcome to Solid Solutions. By accessing our website and engaging with our initiatives, you agree to these simple Terms of Service.</p>

                    <h3 className="text-charcoal font-bold text-lg mt-6 mb-2">1. Use of Our Website</h3>
                    <p>Our website is provided for informational purposes to share our vision for Africa's technology future. You agree to use the site responsibly and not for any unlawful activities.</p>

                    <h3 className="text-charcoal font-bold text-lg mt-6 mb-2">2. Intellectual Property</h3>
                    <p>The content, design, and concepts presented on this website are the property of Solid Solutions unless otherwise noted. Please do not reproduce our materials without permission.</p>

                    <h3 className="text-charcoal font-bold text-lg mt-6 mb-2">3. Collaborations</h3>
                    <p>Any ideas, proposals, or feedback submitted to us (e.g., via info@solidsolutions.africa) are welcomed, but submission does not create a binding partnership or obligation unless explicitly agreed upon in writing.</p>

                    <h3 className="text-charcoal font-bold text-lg mt-6 mb-2">4. Limitation of Liability</h3>
                    <p>Solid Solutions provides this website "as is" and makes no warranties regarding its completeness or accuracy. We are not liable for any damages arising from your use of the site.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
    </div>
  );
}
