/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChevronRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export const SectionTitle = ({
  children,
  subtitle,
  light = false,
}: {
  children: ReactNode;
  subtitle?: string;
  light?: boolean;
}) => (
  <div className="mb-12">
    <h2
      className={`text-3xl md:text-4xl font-black tracking-tight mb-4 ${
        light ? "text-white" : "text-charcoal"
      }`}
    >
      {children}
    </h2>
    {subtitle && (
      <p className={`max-w-2xl font-medium ${light ? "text-white/70" : "text-slate-600"}`}>
        {subtitle}
      </p>
    )}
  </div>
);

export const Card = ({
  title,
  description,
  icon: Icon,
  highlight = false,
  href,
  onClick,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  highlight?: boolean;
  href?: string;
  onClick?: () => void;
}) => (
  <div
    className={`glass-card hover-lift p-8 flex flex-col h-full ${highlight ? 'border-charcoal/5 bg-charcoal/5' : ''}`}
  >
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${highlight ? 'bg-charcoal text-white shadow-lg' : 'bg-black/5 text-slate-500'}`}>
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-charcoal mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed flex-grow font-medium">{description}</p>
    {onClick ? (
      <button
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        className="mt-6 flex items-center text-charcoal text-sm font-bold group cursor-pointer hover:opacity-100 transition-opacity w-fit"
      >
        Learn more <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </button>
    ) : href ? (
      <a href={href} className="mt-6 flex items-center text-charcoal text-sm font-bold group cursor-pointer hover:opacity-100 transition-opacity">
        Learn more <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </a>
    ) : (
      <div className="mt-6 flex items-center text-charcoal text-sm font-bold group cursor-pointer hover:opacity-100 transition-opacity">
        Learn more <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </div>
    )}
  </div>
);
