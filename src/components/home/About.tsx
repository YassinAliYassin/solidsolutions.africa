/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SectionTitle } from './shared';

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg-dark relative overflow-hidden border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle>A Unified Technology Studio</SectionTitle>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
            Solid Solutions is an African SME technology studio building practical AI, cloud, and web systems. It operates as a unified ecosystem — not isolated tools — combining strategy, design, automation, and infrastructure under one studio.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            Based in Harare, Zimbabwe, we serve small and medium enterprises across Africa with focused tools: SolidAI agents, Solid Cloud workspaces, and AionUI command layers — backed by clean infrastructure that helps small teams operate with less friction.
          </p>
        </div>
      </div>
    </section>
  );
}
