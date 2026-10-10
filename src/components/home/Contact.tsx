/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, MapPin } from "lucide-react";
import { useMemo, useState } from "react";
import { SectionTitle } from "./shared";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdoprej";
const INBOX = "info@solidsolutions.africa";

const NEEDS = [
  "Website & brand system",
  "SolidAI agent",
  "Cloud & infrastructure",
  "Dashboard or internal app",
  "Not sure yet",
] as const;

function mailtoFor(name: string, email: string, need: string, message: string) {
  const subject = encodeURIComponent("Solid Solutions quote request");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nNeed: ${need}\n\n${message}`,
  );
  return `mailto:${INBOX}?subject=${subject}&body=${body}`;
}

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [need, setNeed] = useState<string>(NEEDS[0]);
  const [message, setMessage] = useState("");

  const mailto = useMemo(() => mailtoFor(name, email, need, message), [name, email, need, message]);

  return (
    <section id="contact" className="scroll-mt-28 border-y border-black/5 bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <SectionTitle subtitle="Tell us what you need — a site, a SolidAI agent, or cleaner operations. We work with African SMEs from Harare, and we are open to builders and partners too. We quote to the work; there is no public price list.">
              Request a quote
            </SectionTitle>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-black/5 text-charcoal shadow-sm">
                  <Mail size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-1 text-xs font-black uppercase tracking-widest text-charcoal">Email</h3>
                  <a href={`mailto:${INBOX}`} className="break-all font-bold text-slate-600 transition-colors hover:text-charcoal">
                    {INBOX}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-black/5 text-charcoal shadow-sm">
                  <MapPin size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-1 text-xs font-black uppercase tracking-widest text-charcoal">Location</h3>
                  <p className="font-bold text-slate-600">Harare, Zimbabwe</p>
                </div>
              </div>
              <p className="text-sm font-medium leading-relaxed text-slate-600">
                The form goes to the same inbox. If it does not send, the email link below opens your mail app with what you already typed.
              </p>
            </div>
          </div>
          <div className="glass-card border-black/5 bg-slate-50 p-6 shadow-2xl sm:p-8">
            {formStatus === "success" ? (
              <div className="py-8 text-center" role="status">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 text-sm font-black uppercase tracking-widest text-charcoal">Message sent</h3>
                <p className="mb-6 font-medium text-slate-600">
                  Thanks — we will reply to the email you provided, usually within a working day.
                </p>
                <button
                  type="button"
                  onClick={() => setFormStatus("idle")}
                  className="text-xs font-black uppercase tracking-widest text-charcoal hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                action={FORMSPREE_ENDPOINT}
                method="POST"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setFormStatus("submitting");
                  const formData = new FormData(e.currentTarget);
                  try {
                    const response = await fetch(FORMSPREE_ENDPOINT, {
                      method: "POST",
                      body: formData,
                      headers: { Accept: "application/json" },
                    });
                    setFormStatus(response.ok ? "success" : "error");
                  } catch {
                    setFormStatus("error");
                  }
                }}
                className="space-y-6"
              >
                <input type="hidden" name="_subject" value="Solid Solutions quote request" />
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-xs font-black uppercase tracking-widest text-slate-600">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 font-medium text-charcoal shadow-sm transition-colors focus:border-charcoal/40 focus:outline-none focus:ring-2 focus:ring-charcoal/10"
                      placeholder="Tendai Moyo"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs font-black uppercase tracking-widest text-slate-600">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 font-medium text-charcoal shadow-sm transition-colors focus:border-charcoal/40 focus:outline-none focus:ring-2 focus:ring-charcoal/10"
                      placeholder="tendai@business.co.zw"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-need" className="text-xs font-black uppercase tracking-widest text-slate-600">What do you need?</label>
                  <select
                    id="contact-need"
                    name="need"
                    value={need}
                    onChange={(e) => setNeed(e.target.value)}
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 font-medium text-charcoal shadow-sm focus:border-charcoal/40 focus:outline-none focus:ring-2 focus:ring-charcoal/10"
                  >
                    {NEEDS.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-xs font-black uppercase tracking-widest text-slate-600">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 font-medium text-charcoal shadow-sm transition-colors focus:border-charcoal/40 focus:outline-none focus:ring-2 focus:ring-charcoal/10"
                    placeholder="What are you trying to run more smoothly?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full rounded bg-charcoal py-4 text-xs font-black uppercase tracking-widest text-white shadow-xl transition-all hover:shadow-black/20 disabled:opacity-50"
                >
                  {formStatus === "submitting" ? "Sending…" : "Send quote request"}
                </button>
                <p className="text-center text-xs font-medium text-slate-600">
                  Or{" "}
                  <a href={mailto} className="font-bold text-charcoal underline underline-offset-2">
                    email {INBOX} with this message
                  </a>
                </p>
                {formStatus === "error" && (
                  <p className="text-center text-xs font-bold text-red-600" role="alert">
                    The form did not send. Use the email link above — it already includes what you typed.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
