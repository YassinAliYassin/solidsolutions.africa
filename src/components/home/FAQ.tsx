/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SectionTitle } from "./shared";

/** Answers are taken from copy already published on the site and in the on-site assistant. */
const FAQS = [
  {
    q: "What does Solid Solutions do?",
    a: "We are an African SME technology studio based in Harare. The work is websites and brand systems, SolidAI agents, cloud and hosting setup, and dashboards or internal apps — one studio rather than a pile of separate tools.",
  },
  {
    q: "Who is it for?",
    a: "Small and medium enterprises that need a credible site, faster replies, and cleaner operations. We also work with builders, and with teams that want infrastructure they can keep closer and control over time.",
  },
  {
    q: "What is SolidAI?",
    a: "SolidAI is a set of sector agents for agriculture, health, education, finance, legal, transport, energy, and retail. They help teams draft, compare, plan, and triage, with expert review where it matters. The platform is in active development. Early access is requested on the beta page.",
  },
  {
    q: "What about Solid Cloud and AionUI?",
    a: "Solid Cloud is a private workspace for files, hosting utilities, team workflows, and billing. It is still taking shape. AionUI is a desktop and Telegram-connected interface for agents and workflows, and it is in development. Ask us about either from the quote form.",
  },
  {
    q: "How much does it cost?",
    a: "We quote to the work. Websites, SolidAI agents, and cloud setup are scoped to your team and budget. Payment plans are available for SMEs. Email info@solidsolutions.africa and we will send a clear quote. There is no public price list.",
  },
  {
    q: "How do I reach you?",
    a: "Email info@solidsolutions.africa or use the form on this page. We are in Harare, Zimbabwe, and typically reply within a working day. Telegram is @solidsolutionsafrica. The GitHub account is github.com/YassinAliYassin.",
  },
  {
    q: "Do you build hardware?",
    a: "Hardware and embedded devices sit on the longer-term roadmap. Today we ship software first: websites, SolidAI agents, cloud, and dashboards.",
  },
  {
    q: "What happens to information I send?",
    a: "We collect basic contact details only when you submit them, and we use them to reply to your enquiry and share updates you asked for. We do not sell or share personal information for marketing.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-24 bg-bg-dark border-y border-black/5 scroll-mt-28">
      <div className="max-w-3xl mx-auto px-6">
        <SectionTitle subtitle="Straight answers from the work we already describe on this site. If yours is not here, send a note.">
          Questions we already answer
        </SectionTitle>
        <div className="divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
          {FAQS.map((item) => (
            <details key={item.q} className="group px-5 py-1 open:bg-black/[0.02]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-bold text-charcoal [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-black/10 text-lg leading-none text-slate-500 transition group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-slate-600 font-medium">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
