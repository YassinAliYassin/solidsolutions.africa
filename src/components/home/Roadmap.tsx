/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle } from "lucide-react";
import { Reveal } from '../Reveal';
import { SectionTitle } from './shared';

const PHASES = [
  {
    phase: "Now",
    title: "Studio & SolidAI",
    status: "Current",
    active: true,
    items: [
      "Public site with clear, consistent brand and copy",
      "SolidAI platform with eight sector agents",
      "AionUI Telegram bot integration",
      "Website and cloud delivery for SMEs"
    ]
  },
  {
    phase: "Next",
    title: "Integration",
    status: "In progress",
    active: false,
    items: [
      "Connecting SolidAI Gateway and WebChat",
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
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 md:py-24 bg-bg-dark border-y border-black/5 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="What the studio is shipping now, wiring next, and piloting after that.">
          Roadmap
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {PHASES.map((item, i) => (
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
                    <CheckCircle size={16} className="text-charcoal mt-0.5 flex-shrink-0" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
