/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight } from "lucide-react";
import { Reveal } from '../Reveal';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-pattern bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-main/50 to-bg-main pointer-events-none"></div>

      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-black/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-black/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          <Reveal immediate>
            <span className="inline-block px-3 py-1 bg-black/5 text-charcoal text-[10px] font-bold tracking-[0.2em] uppercase rounded border border-black/10 mb-8 backdrop-blur-sm">
              African SME Technology Studio
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-charcoal mb-6 leading-none uppercase">
              <span className="block">AI, Cloud</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-charcoal to-slate-400">&amp; Web Systems</span>
              <span className="block">for African SMEs</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl font-medium">
              Solid Solutions is an African SME technology studio building practical AI, cloud, and web systems. We operate as a unified ecosystem — not isolated tools — combining strategy, design, automation, and infrastructure under one studio.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#offerings" className="px-8 py-4 bg-charcoal text-white font-bold uppercase tracking-wider text-sm rounded shadow-2xl hover:shadow-black/20 transition-all flex items-center justify-center gap-3 group">
                Our Services <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
              </a>
              <a href="#contact" className="px-8 py-4 bg-black/5 text-charcoal font-bold uppercase tracking-wider text-sm rounded border border-black/10 hover:bg-black/10 transition-all flex items-center justify-center">
                Get in Touch
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
