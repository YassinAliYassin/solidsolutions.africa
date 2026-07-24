/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Reveal } from '../Reveal';
import { SectionTitle } from './shared';

const SECTORS = [
  { emoji: "🌾", name: "Agriculture", desc: "Crop planning, weather schedules, market prices, logistics" },
  { emoji: "🏥", name: "Health", desc: "Patient triage, appointment reminders, inventory, multilingual info" },
  { emoji: "🎓", name: "Education", desc: "Lesson planning, exam revision, parent comms, admin reports" },
  { emoji: "💰", name: "Finance", desc: "Invoice drafting, expense categorisation, cash-flow, client templates" },
  { emoji: "⚖️", name: "Legal", desc: "Contract clauses, compliance checklists, client intake, case summaries" },
  { emoji: "🚛", name: "Transport", desc: "Fleet coordination, route planning, driver logs, delivery tracking" },
  { emoji: "⚡", name: "Energy", desc: "Solar inventory, installation quotes, maintenance scheduling" },
  { emoji: "🏪", name: "Retail", desc: "Stock reconciliation, supplier orders, pricing, customer service" },
];

export default function Sectors() {
  return (
    <section id="sectors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="SolidAI provides sector-specific agents designed for practical business support across local markets.">
          SolidAI Sectors
        </SectionTitle>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SECTORS.map((sector, i) => (
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
  );
}
