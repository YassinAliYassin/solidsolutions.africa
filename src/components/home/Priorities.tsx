/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Globe, Brain, Cloud, LayoutDashboard } from "lucide-react";
import { Reveal } from '../Reveal';
import { SectionTitle } from './shared';

const PRIORITIES = [
  { icon: Globe, title: "A business website", desc: "A fast, credible site we can ship and host for an SME, founder, or NGO." },
  { icon: Brain, title: "A SolidAI sector agent", desc: "Early access to agents scoped to agriculture, health, education, finance, and more." },
  { icon: Cloud, title: "Hosting & cloud cleanup", desc: "Migration, monitoring, and a setup a small team can actually keep running." },
  { icon: LayoutDashboard, title: "An internal dashboard", desc: "A focused app for files, billing, staff, or client work — not a bloated suite." },
];

export default function Priorities() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="If you are an African SME, these are the conversations we can start now.">
          What we can take on
        </SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {PRIORITIES.map((item, i) => (
            <Reveal key={i} delay={i * 80} className="glass-card p-6 bg-slate-50 border-black/5">
              <item.icon size={24} className="text-charcoal mb-4" />
              <h4 className="text-sm font-black text-charcoal mb-2">{item.title}</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
