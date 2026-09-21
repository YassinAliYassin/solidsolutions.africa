/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Brain, Cloud, Monitor, ArrowRight } from "lucide-react";
import { SectionTitle } from './shared';

export default function Ecosystem() {
  return (
    <section id="platforms" className="py-20 md:py-24 bg-bg-dark border-y border-black/5 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="SolidAI, Solid Cloud, and AionUI — three platforms, one studio.">
          Platform ecosystem
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="glass-card hover-lift p-8 bg-white border-black/5 flex flex-col">
            <div className="w-14 h-14 rounded-xl bg-charcoal text-white flex items-center justify-center mb-6 shadow-lg">
              <Brain size={28} />
            </div>
            <h3 className="text-xl font-black text-charcoal mb-3">SolidAI</h3>
            <p className="text-slate-600 leading-relaxed font-medium mb-6 flex-grow">
              Sector-specific agents for agriculture, health, education, finance, legal, transport, energy, and retail — built for day-to-day SME work.
            </p>
            <a href="/solid-llm" className="text-charcoal text-sm font-bold flex items-center gap-1 group w-fit">
              Explore SolidAI <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="glass-card hover-lift p-8 bg-white border-black/5 flex flex-col">
            <div className="w-14 h-14 rounded-xl bg-charcoal text-white flex items-center justify-center mb-6 shadow-lg">
              <Cloud size={28} />
            </div>
            <h3 className="text-xl font-black text-charcoal mb-3">Solid Cloud</h3>
            <p className="text-slate-600 leading-relaxed font-medium mb-6 flex-grow">
              A private workspace for files, hosting utilities, team workflows, billing, and mobile-to-computer sync — still taking shape.
            </p>
            <a href="#contact" className="text-charcoal text-sm font-bold flex items-center gap-1 group w-fit">
              Ask about Solid Cloud <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="mt-3 text-[10px] font-black uppercase tracking-widest text-slate-400">Coming soon</span>
          </div>

          <div className="glass-card hover-lift p-8 bg-white border-black/5 flex flex-col">
            <div className="w-14 h-14 rounded-xl bg-charcoal text-white flex items-center justify-center mb-6 shadow-lg">
              <Monitor size={28} />
            </div>
            <h3 className="text-xl font-black text-charcoal mb-3">AionUI</h3>
            <p className="text-slate-600 leading-relaxed font-medium mb-6 flex-grow">
              A desktop and Telegram-connected interface for managing agents, project actions, and Solid Solutions workflows from one place.
            </p>
            <a href="#contact" className="text-charcoal text-sm font-bold flex items-center gap-1 group w-fit">
              Ask about AionUI <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="mt-3 text-[10px] font-black uppercase tracking-widest text-slate-400">In development</span>
          </div>
        </div>
      </div>
    </section>
  );
}
