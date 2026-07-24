/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Zap, Target, Shield } from "lucide-react";
import { Reveal } from '../Reveal';
import { SectionTitle } from './shared';

const PRINCIPLES = [
  {
    icon: Zap,
    title: "Useful before flashy",
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
];

export default function HowWeBuild() {
  return (
    <section className="py-24 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle light>How We Build</SectionTitle>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PRINCIPLES.map((item, i) => (
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
  );
}
