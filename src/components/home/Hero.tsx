/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal";

const STARTS = [
  { label: "Websites & brand", detail: "A credible site for an SME, founder, NGO, or service business.", href: "#offerings" },
  { label: "SolidAI", detail: "Sector agents for drafting, planning, and triage.", href: "/solid-llm" },
  { label: "Cloud & hosting", detail: "Deployments, monitoring, and a cleaner place to run.", href: "#contact" },
  { label: "Dashboards", detail: "Internal tools for the team that will actually use them.", href: "#contact" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-white pt-24 grid-pattern md:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-bg-main/40 to-bg-main" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.8fr)] lg:gap-16">
          <Reveal immediate>
            <span className="mb-8 inline-block rounded border border-black/10 bg-black/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal backdrop-blur-sm">
              African SME Technology Studio · Harare
            </span>

            <h1 className="mb-6 text-[2.5rem] font-black uppercase leading-[0.95] tracking-tight text-charcoal sm:text-5xl md:text-7xl lg:text-8xl">
              <span className="block">AI, Cloud</span>
              <span className="block bg-gradient-to-r from-charcoal to-slate-400 bg-clip-text text-transparent dark:from-zinc-100 dark:to-zinc-500">
                &amp; Web Systems
              </span>
              <span className="block">for African SMEs</span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg font-medium leading-relaxed text-slate-600 md:mb-10 md:text-xl">
              Practical tools for small teams that need a credible site, faster replies, and cleaner operations — built for African conditions, not bloated software.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <a href="#contact" className="group flex items-center justify-center gap-3 rounded bg-charcoal px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-2xl transition-all hover:shadow-black/20">
                Request a quote <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
              </a>
              <a href="#offerings" className="flex items-center justify-center rounded border border-black/10 bg-black/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-charcoal transition-all hover:bg-black/10">
                See our services
              </a>
            </div>
            <p className="mt-5 text-sm font-medium text-slate-500">
              Harare, Zimbabwe ·{" "}
              <a href="mailto:info@solidsolutions.africa" className="font-bold text-charcoal underline-offset-2 hover:underline">
                info@solidsolutions.africa
              </a>
            </p>
          </Reveal>

          <div className="rounded-2xl border border-black/10 bg-white/90 p-6 shadow-xl backdrop-blur-sm md:p-8">
            <p className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Ways to start</p>
            <h2 className="mb-6 text-xl font-black tracking-tight text-charcoal">What we can take on</h2>
            <ul className="space-y-3">
              {STARTS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="group flex items-start justify-between gap-4 rounded-xl border border-black/5 bg-bg-main px-4 py-3 transition hover:border-charcoal/20 hover:bg-white">
                    <span>
                      <span className="block text-sm font-bold text-charcoal">{item.label}</span>
                      <span className="mt-0.5 block text-xs font-medium leading-relaxed text-slate-500">{item.detail}</span>
                    </span>
                    <ArrowRight size={16} className="mt-1 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-charcoal" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <a href="/solid-llm" className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-charcoal">
              Explore the SolidAI platform <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
