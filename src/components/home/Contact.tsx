/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { SectionTitle } from './shared';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzdoprej";

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  return (
    <section id="contact" className="py-20 md:py-24 bg-white border-y border-black/5 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <SectionTitle subtitle="Tell us what you need — a site, a SolidAI agent, or cleaner operations. We work with African SMEs from Harare, and we are open to builders and partners too.">
              Start a conversation
            </SectionTitle>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center text-charcoal flex-shrink-0 shadow-sm">
                  <Mail size={24} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-charcoal font-black uppercase tracking-widest text-xs mb-1">Email</h4>
                  <a href="mailto:info@solidsolutions.africa" className="text-slate-600 font-bold hover:text-charcoal transition-colors break-all">
                    info@solidsolutions.africa
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center text-charcoal flex-shrink-0 shadow-sm">
                  <MapPin size={24} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-charcoal font-black uppercase tracking-widest text-xs mb-1">Location</h4>
                  <p className="text-slate-600 font-bold">Harare, Zimbabwe</p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card p-6 sm:p-8 bg-slate-50 border-black/5 shadow-2xl">
            {formStatus === 'success' ? (
              <div className="text-center py-8" role="status">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-charcoal font-black uppercase tracking-widest text-sm mb-2">Message sent</h3>
                <p className="text-slate-600 font-medium mb-6">
                  Thanks — we will reply to the email you provided, usually within a working day.
                </p>
                <button
                  type="button"
                  onClick={() => setFormStatus('idle')}
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
                  setFormStatus('submitting');

                  const formData = new FormData(e.currentTarget);

                  try {
                    const response = await fetch(FORMSPREE_ENDPOINT, {
                      method: 'POST',
                      body: formData,
                      headers: {
                        'Accept': 'application/json'
                      }
                    });

                    if (response.ok) {
                      setFormStatus('success');
                    } else {
                      setFormStatus('error');
                    }
                  } catch {
                    setFormStatus('error');
                  }
                }}
                className="space-y-6"
              >
                <input type="hidden" name="_to" value="info@solidsolutions.africa" />
                <input type="hidden" name="_subject" value="Solid Solutions website enquiry" />
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-xs font-black uppercase tracking-widest text-slate-500">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-charcoal focus:outline-none focus:border-charcoal/40 focus:ring-2 focus:ring-charcoal/10 transition-colors font-medium shadow-sm"
                      placeholder="Tendai Moyo"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs font-black uppercase tracking-widest text-slate-500">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-charcoal focus:outline-none focus:border-charcoal/40 focus:ring-2 focus:ring-charcoal/10 transition-colors font-medium shadow-sm"
                      placeholder="tendai@business.co.zw"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-xs font-black uppercase tracking-widest text-slate-500">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-charcoal focus:outline-none focus:border-charcoal/40 focus:ring-2 focus:ring-charcoal/10 transition-colors font-medium shadow-sm"
                    placeholder="What are you trying to run more smoothly?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-4 bg-charcoal text-white font-black uppercase tracking-widest text-xs rounded shadow-xl hover:shadow-black/20 transition-all disabled:opacity-50"
                >
                  {formStatus === 'submitting' ? 'Sending…' : 'Send message'}
                </button>
                {formStatus === 'error' && (
                  <p className="text-red-600 text-xs font-bold text-center" role="alert">
                    Something went wrong. Please email info@solidsolutions.africa directly.
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
