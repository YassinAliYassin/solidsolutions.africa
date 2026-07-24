/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Brain, Cloud, MessageSquare, Server } from "lucide-react";
import { Reveal } from '../Reveal';
import { SectionTitle } from './shared';

const PRIORITIES = [
  { icon: Brain, title: "SolidAI Platform", desc: "8 sector-focused agents for practical business support" },
  { icon: Cloud, title: "Solid Cloud Tools", desc: "Personal and business workflow utilities" },
  { icon: MessageSquare, title: "AionUI Telegram Bot", desc: "Connected to the Solid Solutions ecosystem" },
  { icon: Server, title: "NGINX Migration", desc: "cPanel hosting → faster NGINX VPS infrastructure" },
];

export default function Priorities() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle>Current Priorities</SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
