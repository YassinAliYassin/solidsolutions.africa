/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Reveal } from '../Reveal';
import { SectionTitle } from './shared';

const TECHNOLOGIES = [
  "React", "Vite", "Tailwind", "Node.js", "NGINX", "Cloudflare",
  "OpenRouter", "Hugging Face", "Ollama", "Telegram"
];

export default function Stack() {
  return (
    <section className="py-24 bg-bg-dark border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle>Operating Stack</SectionTitle>
          <p className="text-slate-600 font-medium max-w-2xl mx-auto">
            We prefer systems that can be inspected, deployed, automated, and improved. Simple frontends, clear APIs, and open AI tooling.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {TECHNOLOGIES.map((tech, i) => (
            <Reveal key={i} as="span" delay={i * 40} className="px-5 py-2.5 bg-white border border-black/5 rounded-lg text-xs font-bold uppercase tracking-widest text-charcoal shadow-sm">
              {tech}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
