/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SectionTitle } from './shared';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 bg-bg-dark relative overflow-hidden border-y border-black/5 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle subtitle="Strategy, design, automation, and infrastructure under one roof — so African SMEs are not buying a website from one vendor and a chatbot from another.">
            One studio, not a pile of tools
          </SectionTitle>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            From Harare, we ship SolidAI agents, Solid Cloud workspaces, and the AionUI command layer as a single ecosystem. The aim is simple: help small teams look credible online, respond faster, and run day-to-day work with less friction.
          </p>
        </div>
      </div>
    </section>
  );
}
