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
  centered = false,
}: {
  children: ReactNode;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}) => (
  <div className={`mb-10 md:mb-12 ${centered ? "text-center mx-auto" : ""}`}>
    <h2
      className={`text-3xl md:text-4xl font-black tracking-tight mb-4 ${
        light ? "text-white" : "text-charcoal"
      }`}
    >
      {children}
    </h2>
    {subtitle && (
      <p className={`max-w-2xl font-medium leading-relaxed ${centered ? "mx-auto" : ""} ${light ? "text-white/70" : "text-slate-600"}`}>
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
  cta = "Learn more",
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  highlight?: boolean;
  href?: string;
  onClick?: () => void;
  cta?: string;
}) => {
  const className = `glass-card hover-lift p-8 flex flex-col h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal ${highlight ? "border-charcoal/15 bg-charcoal/5" : "bg-white"}`;
  const body = (
    <>
      <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg ${highlight ? "bg-charcoal text-white shadow-lg" : "bg-black/5 text-slate-500"}`}>
        <Icon size={24} aria-hidden="true" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-charcoal">{title}</h3>
      <p className="flex-grow font-medium leading-relaxed text-slate-600">{description}</p>
      <span className="mt-6 flex w-fit items-center text-sm font-bold text-charcoal">
        {cta} <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </span>
    </>
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`${className} group text-left`}>
        {body}
      </button>
    );
  }

  if (href) {
    return (
      <a href={href} className={`${className} group`}>
        {body}
      </a>
    );
  }

  return <div className={className}>{body}</div>;
};
