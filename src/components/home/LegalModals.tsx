/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const LEGAL_EFFECTIVE_DATE = "January 1, 2026";

export type LegalModal = 'privacy' | 'terms' | null;

interface LegalModalsProps {
  activeModal: LegalModal;
  onClose: () => void;
}

export default function LegalModals({ activeModal, onClose }: LegalModalsProps) {
  if (!activeModal) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-charcoal/40 backdrop-blur-sm modal-overlay"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] border border-black/10 modal-panel"
      >
        <div className="p-6 border-b border-black/5 flex justify-between items-center bg-bg-dark sticky top-0 z-10">
          <h2 className="text-xl font-bold text-charcoal">
            {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors text-slate-500 hover:text-charcoal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <div className="p-8 overflow-y-auto">
          {activeModal === 'privacy' ? (
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p><strong>Effective Date:</strong> {LEGAL_EFFECTIVE_DATE}</p>
              <p>At Solid Solutions, we are committed to protecting your privacy. This short Privacy Policy outlines how we handle your information.</p>

              <h3 className="text-charcoal font-bold text-lg mt-6 mb-2">1. Information We Collect</h3>
              <p>We may collect basic contact information (such as your name and email address) when you voluntarily submit it through our contact forms or when you reach out to us at info@solidsolutions.africa.</p>

              <h3 className="text-charcoal font-bold text-lg mt-6 mb-2">2. How We Use Your Information</h3>
              <p>We use the information you provide solely to respond to your inquiries, facilitate collaboration, and keep you updated on our initiatives. We do not sell or share your personal information with third parties for marketing purposes.</p>

              <h3 className="text-charcoal font-bold text-lg mt-6 mb-2">3. Data Security</h3>
              <p>We implement reasonable security measures to protect your information from unauthorized access or disclosure.</p>

              <h3 className="text-charcoal font-bold text-lg mt-6 mb-2">4. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us at info@solidsolutions.africa.</p>
            </div>
          ) : (
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p><strong>Effective Date:</strong> {LEGAL_EFFECTIVE_DATE}</p>
              <p>Welcome to Solid Solutions. By accessing our website and engaging with our initiatives, you agree to these simple Terms of Service.</p>

              <h3 className="text-charcoal font-bold text-lg mt-6 mb-2">1. Use of Our Website</h3>
              <p>Our website is provided for informational purposes to share our vision for Africa's technology future. You agree to use the site responsibly and not for any unlawful activities.</p>

              <h3 className="text-charcoal font-bold text-lg mt-6 mb-2">2. Intellectual Property</h3>
              <p>The content, design, and concepts presented on this website are the property of Solid Solutions unless otherwise noted. Please do not reproduce our materials without permission.</p>

              <h3 className="text-charcoal font-bold text-lg mt-6 mb-2">3. Collaborations</h3>
              <p>Any ideas, proposals, or feedback submitted to us (e.g., via info@solidsolutions.africa) are welcomed, but submission does not create a binding partnership or obligation unless explicitly agreed upon in writing.</p>

              <h3 className="text-charcoal font-bold text-lg mt-6 mb-2">4. Limitation of Liability</h3>
              <p>Solid Solutions provides this website "as is" and makes no warranties regarding its completeness or accuracy. We are not liable for any damages arising from your use of the site.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
