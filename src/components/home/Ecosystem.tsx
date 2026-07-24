/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Brain, Cloud, Monitor, ArrowRight } from "lucide-react";
import { SectionTitle } from './shared';

export default function Ecosystem() {
  return (
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
  );
}
