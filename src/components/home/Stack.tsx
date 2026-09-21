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
    <section className="py-20 md:py-24 bg-bg-dark border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Simple frontends, clear APIs, and infrastructure we can inspect, deploy, and improve.">
          What we ship with
        </SectionTitle>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
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
