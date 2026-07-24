/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Globe, Brain, Cloud, LayoutDashboard } from "lucide-react";
import { SectionTitle, Card } from './shared';

export default function Offerings() {
  return (
    <section id="offerings" className="py-24 grid-pattern bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="We build focused tools that help African SMEs look credible, respond faster, and run cleaner operations.">
          Core Offerings
        </SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card
            title="Websites & Brand Systems"
            description="Fast, clean sites for African SMEs, founders, NGOs, and service businesses. Focus on credible online presence without bloated tooling."
            icon={Globe}
            highlight
            href="#contact"
          />
          <Card
            title="AI Business Tools (SolidAI)"
            description="Sector-specific agents, workflow assistants, and automations designed for practical business support across local markets."
            icon={Brain}
            highlight
            href="/solid-llm"
          />
          <Card
            title="Cloud & Infrastructure"
            description="Cloudflare, NGINX, cPanel migration. Hosting dashboards, deployment pipelines, and monitoring for cleaner operations."
            icon={Cloud}
            highlight
            href="#contact"
          />
          <Card
            title="Dashboards & Internal Apps"
            description="Operational interfaces for files, billing, staff, client tasks, reports, and admin workflows."
            icon={LayoutDashboard}
            highlight
            href="#contact"
          />
        </div>
      </div>
    </section>
  );
}
