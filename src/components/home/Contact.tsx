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
    <section id="contact" className="py-24 bg-white border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <SectionTitle subtitle="Solid Solutions welcomes collaboration with developers, engineers, researchers, institutions, and investors interested in advancing Africa's technology ecosystem.">
              Get in Touch
            </SectionTitle>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center text-charcoal flex-shrink-0 shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-charcoal font-black uppercase tracking-widest text-xs mb-1">Email</h4>
                  <p className="text-slate-600 font-bold">info@solidsolutions.africa</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center text-charcoal flex-shrink-0 shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-charcoal font-black uppercase tracking-widest text-xs mb-1">Location</h4>
                  <p className="text-slate-600 font-bold">Harare, Zimbabwe</p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card p-8 bg-slate-50 border-black/5 shadow-2xl">
            {formStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-charcoal font-black uppercase tracking-widest text-sm mb-2">Message Sent!</h3>
                <p className="text-slate-600 font-medium">Thank you! We'll respond to <strong>info@solidsolutions.africa</strong> soon.</p>
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
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-xs font-black uppercase tracking-widest text-slate-500">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-charcoal focus:outline-none focus:border-charcoal/30 transition-colors font-medium shadow-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-xs font-black uppercase tracking-widest text-slate-500">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-charcoal focus:outline-none focus:border-charcoal/30 transition-colors font-medium shadow-sm"
                      placeholder="john@example.com"
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
                    className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-charcoal focus:outline-none focus:border-charcoal/30 transition-colors font-medium shadow-sm"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-4 bg-charcoal text-white font-black uppercase tracking-widest text-xs rounded shadow-xl hover:shadow-black/20 transition-all disabled:opacity-50"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
                {formStatus === 'error' && (
                  <p className="text-red-600 text-xs font-bold text-center">Something went wrong. Please email info@solidsolutions.africa directly.</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
