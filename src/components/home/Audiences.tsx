/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Building2, Code, Heart } from "lucide-react";
import { Reveal } from '../Reveal';
import { SectionTitle } from './shared';

const AUDIENCES = [
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
];

export default function Audiences() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle>Who We Serve</SectionTitle>

        <div className="grid md:grid-cols-3 gap-8">
          {AUDIENCES.map((item, i) => (
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
  );
}
