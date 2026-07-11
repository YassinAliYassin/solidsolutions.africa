import { useState } from 'react';

interface XMainContentProps {
  onLaunchSolidLLM: () => void;
}

export default function XMainContent({ onLaunchSolidLLM }: XMainContentProps) {
  const [showMore, setShowMore] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  return (
    <main className="flex-1 ml-72 max-w-3xl border-r border-[#eff3f4] min-h-screen overflow-y-auto">
      {/* Top bar */}
      <div className="sticky top-0 bg-white/90 backdrop-blur-lg border-b border-[#eff3f4] z-50 px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Home</h1>
        <div className="flex items-center gap-2 bg-[#f7f9f9] rounded-3xl px-6 py-2 text-sm font-medium">
          <i className="fa-solid fa-globe-africa text-[#1D9BF0]"></i>
          <span>Africa Rising • Harare • Cape Town • Nairobi</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 bg-[#f7f9f9] rounded-2xl flex items-center justify-center cursor-pointer hover:bg-[#eff3f4]">
            <i className="fa-solid fa-bell"></i>
          </div>
          <div className="w-9 h-9 bg-[#f7f9f9] rounded-2xl flex items-center justify-center cursor-pointer hover:bg-[#eff3f4]">
            <i className="fa-solid fa-envelope"></i>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-8 pt-8 pb-12 bg-gradient-to-br from-white via-[#f0f9ff] to-white border-b border-[#eff3f4]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white border border-[#1D9BF0]/20 text-[#1D9BF0] text-sm font-semibold px-5 py-2 rounded-3xl mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9BF0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#1D9BF0]"></span>
            </span>
            NOW IN 12 AFRICAN COUNTRIES
          </div>
          <h1 className="text-6xl font-black leading-none tracking-tighter mb-4">
            Solid tech.<br />
            For a <span className="text-[#1D9BF0]">solid Africa</span>.
          </h1>
          <p className="text-2xl text-[#536471] mb-10">
            Enterprise-grade AI, cloud, and digital infrastructure built by Africans, for Africans.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/solid-llm/"
              className="px-10 py-4 bg-[#1D9BF0] hover:bg-[#1a8cd8] text-white font-bold text-xl rounded-3xl flex items-center gap-3 transition-all"
            >
              <i className="fa-solid fa-robot"></i>
              Try SolidLLM Free
            </a>
            <button
              onClick={() => setShowDemoModal(true)}
              className="px-10 py-4 border-2 border-[#1D9BF0] text-[#1D9BF0] font-bold text-xl rounded-3xl flex items-center gap-3 hover:bg-[#f0f9ff]"
            >
              <i className="fa-solid fa-play"></i>
              Watch 87-second demo
            </button>

            {showDemoModal && (
              <div
                role="dialog"
                aria-modal="true"
                aria-label="Demo video"
                onClick={() => setShowDemoModal(false)}
                className="fixed inset-0 z-[70] grid place-items-center bg-black/60 p-4"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-2xl"
                >
                  <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-[#f0f9ff] text-[#1D9BF0] text-2xl">
                    <i className="fa-solid fa-film"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-[#0f1419]">87-second demo — coming soon</h2>
                  <p className="mt-3 text-[#536471] leading-relaxed">
                    Our Africa-first product demo is being finalised. Drop your email at
                    <span className="font-semibold text-[#1D9BF0]"> info@solidsolutions.africa</span> and we'll
                    send it the moment it's live.
                  </p>
                  <button
                    onClick={() => setShowDemoModal(false)}
                    className="mt-6 px-8 py-3 bg-[#1D9BF0] hover:bg-[#1a8cd8] text-white font-bold rounded-3xl transition-all"
                  >
                    Got it
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="mt-8 flex items-center gap-8 text-sm">
            <div className="flex -space-x-4">
              <div className="w-8 h-8 bg-[#1D9BF0] text-white rounded-2xl flex items-center justify-center ring-2 ring-white">
                🇿🇼
              </div>
              <div className="w-8 h-8 bg-[#1D9BF0] text-white rounded-2xl flex items-center justify-center ring-2 ring-white">
                🇿🇦
              </div>
              <div className="w-8 h-8 bg-[#1D9BF0] text-white rounded-2xl flex items-center justify-center ring-2 ring-white">
                🇿🇬
              </div>
            </div>
            <p className="text-[#536471]">Trusted by 184 African enterprises • 4.98/5 average rating</p>
          </div>
        </div>
      </div>

      {/* Feed-style Sections */}
      <div className="px-8 py-8 space-y-8">
        {/* Card 1 */}
        <div className="bg-white border border-[#eff3f4] rounded-3xl p-8 hover:border-[#1D9BF0]/30 transition-all">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl flex-shrink-0 flex items-center justify-center text-3xl">
              🌍
            </div>
            <div className="flex-1">
              <div className="font-semibold text-xl">Pan-African Data Sovereignty Platform</div>
              <p className="text-[#536471] mt-2 leading-relaxed">
                Our new sovereign cloud now live in 7 countries. Zero US or EU data routing. Built on open-source infrastructure that actually respects African laws.
              </p>
              <div className="flex gap-6 mt-6 text-[#1D9BF0] text-sm font-semibold">
                <div className="flex items-center gap-1">
                  <i className="fa-solid fa-arrow-trend-up"></i> 214% YoY growth
                </div>
                <div>Read the whitepaper →</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-[#eff3f4] rounded-3xl p-8 hover:border-[#1D9BF0]/30 transition-all">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-[#1D9BF0] font-semibold">NEW PRODUCT</div>
              <div className="text-2xl font-bold mt-1">SolidEdge • Edge AI for offline farms</div>
              <p className="mt-3 text-[#536471]">
                Runs 70B-parameter models on a Raspberry Pi 5. Perfect for rural Zimbabwe, Kenya & Nigeria.
              </p>
            </div>
            <button className="bg-[#1D9BF0] text-white px-6 py-3 rounded-3xl text-sm font-bold">
              Get it for $299
            </button>
          </div>
        </div>

        {showMore && (
          <div className="bg-white border border-[#eff3f4] rounded-3xl p-8 hover:border-[#1D9BF0]/30 transition-all">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex-shrink-0 flex items-center justify-center text-3xl">
                🤖
              </div>
              <div className="flex-1">
                <div className="font-semibold text-xl">SolidAI Enterprise Now Available</div>
                <p className="text-[#536471] mt-2 leading-relaxed">
                  Deploy private LLMs on your company data. SOC2 ready, 27 African languages supported.
                </p>
              </div>
            </div>
          </div>
        )}

        <div
          onClick={() => setShowMore(!showMore)}
          className="text-center text-[#1D9BF0] font-medium py-4 cursor-pointer hover:underline"
        >
          {showMore ? 'Show less' : 'Show more updates from the Solid team →'}
        </div>
      </div>
    </main>
  );
}
