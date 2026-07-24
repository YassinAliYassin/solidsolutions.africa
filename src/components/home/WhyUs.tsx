/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BarChart3, Brain, Server, Zap } from "lucide-react";
import { Reveal } from '../Reveal';
import { SectionTitle } from './shared';

const REASONS = [
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
];

export default function WhyUs() {
  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle>Why Choose Solid Solutions</SectionTitle>

        <div className="grid md:grid-cols-2 gap-8">
          {REASONS.map((item, i) => (
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
  );
}
