import { Globe, Code, Network, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  setActiveModal?: (modal: 'privacy' | 'terms' | null) => void;
}

export default function Footer({ setActiveModal }: FooterProps) {
  return (
    <footer className="py-16 border-t border-black/5 bg-bg-main">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="sm:col-span-2 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Logo size={32} className="shrink-0" />
              <span className="text-lg font-black tracking-tight text-charcoal uppercase">SOLID SOLUTIONS</span>
            </div>
            <p className="text-slate-500 max-w-sm font-medium leading-relaxed mb-4">
              An African SME technology studio building practical AI, cloud, and web systems. Based in Harare, Zimbabwe.
            </p>
            <div className="flex items-center gap-4 text-slate-500 text-sm font-medium">
              <span className="flex items-center gap-1.5"><MapPin size={14} /> Harare, Zimbabwe</span>
              <span className="flex items-center gap-1.5"><Mail size={14} /> info@solidsolutions.africa</span>
            </div>
          </div>
          <div>
            <h4 className="text-charcoal font-black uppercase text-xs tracking-widest mb-6">Site</h4>
            <ul className="space-y-6 text-sm text-slate-500 font-bold uppercase tracking-wider">
              <li><a href="/#offerings" className="hover:text-charcoal transition-colors">Services</a></li>
              <li><a href="/#sectors" className="hover:text-charcoal transition-colors">Sectors</a></li>
              <li><a href="/#roadmap" className="hover:text-charcoal transition-colors">Roadmap</a></li>
              <li><a href="/#contact" className="hover:text-charcoal transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-charcoal font-black uppercase text-xs tracking-widest mb-6">Legal</h4>
            <ul className="space-y-6 text-sm text-slate-500 font-bold uppercase tracking-wider">
              {setActiveModal ? (
                <>
                  <li><button onClick={() => setActiveModal('privacy')} className="hover:text-charcoal transition-colors">Privacy Policy</button></li>
                  <li><button onClick={() => setActiveModal('terms')} className="hover:text-charcoal transition-colors">Terms of Service</button></li>
                </>
              ) : (
                <>
                  <li><a href="/solid-llm/about" className="hover:text-charcoal transition-colors">Privacy Policy</a></li>
                  <li><a href="/solid-llm/about" className="hover:text-charcoal transition-colors">Terms of Service</a></li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
            © {new Date().getFullYear()} Solid Solutions. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6 text-slate-400 font-bold uppercase tracking-widest text-[10px] items-center">
            <a href="/documentation" title="Documentation" className="flex items-center gap-2 hover:text-charcoal transition-colors"><Globe size={18} /> DOCS</a>
            <a href="/beta" title="Developer Beta" className="flex items-center gap-2 hover:text-charcoal transition-colors"><Code size={18} /> BETA</a>
            <a href="/solid-llm" title="Solid AI" className="flex items-center gap-2 hover:text-charcoal transition-colors"><Network size={18} /> SOLID AI</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
