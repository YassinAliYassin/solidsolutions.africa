/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Globe, Brain, Cloud, LayoutDashboard } from "lucide-react";
import { SectionTitle, Card } from './shared';

export default function Offerings() {
  return (
    <section id="offerings" className="py-20 md:py-24 grid-pattern bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Focused work for African SMEs: a credible site, useful AI, reliable hosting, and internal tools that stay simple.">
          What we build
        </SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <Card
            title="Websites & brand systems"
            description="Fast, clean sites for SMEs, founders, NGOs, and service businesses. A credible presence without bloated tooling."
            icon={Globe}
            href="#contact"
            cta="Request a site"
          />
          <Card
            title="SolidAI business tools"
            description="Sector-specific agents and workflow assistants for drafting, planning, and triage across local markets — with expert review where it matters."
            icon={Brain}
            highlight
            href="/solid-llm"
            cta="Explore SolidAI"
          />
          <Card
            title="Solid Cloud & infrastructure"
            description="Hosting, Cloudflare, NGINX, and cPanel migration. Dashboards, deploy pipelines, and monitoring for cleaner operations."
            icon={Cloud}
            href="#contact"
            cta="Talk infrastructure"
          />
          <Card
            title="Dashboards & internal apps"
            description="Operational interfaces for files, billing, staff, client tasks, reports, and admin workflows — scoped to the team that will use them."
            icon={LayoutDashboard}
            href="#contact"
            cta="Discuss a dashboard"
          />
        </div>
      </div>
    </section>
  );
}
