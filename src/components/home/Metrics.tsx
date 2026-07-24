/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Reveal } from '../Reveal';

const METRICS = [
  { value: "8", label: "SolidAI Sectors Planned" },
  { value: "3", label: "Platforms in Development" },
  { value: "2024", label: "Founded" },
  { value: "24/7", label: "Support" },
];

export default function Metrics() {
  return (
    <section className="py-16 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {METRICS.map((metric, i) => (
            <Reveal key={i} delay={i * 80} className="text-center">
              <div className="text-3xl md:text-4xl font-black mb-2">{metric.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">{metric.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
