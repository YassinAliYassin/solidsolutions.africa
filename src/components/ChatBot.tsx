import { useState, useRef, useEffect, useCallback } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QUICK_PROMPTS = [
  "What services do you offer?",
  "Pricing?",
  "How do I contact you?",
  "Tell me about SolidAI",
] as const;

/** Local knowledge-base replies (works offline, no API key required).
 *  Match more specific intents before broad ones (service/help/etc.).
 */
export function replyFor(userMessage: string): string {
  const lower = userMessage.toLowerCase();

  if (
    lower.includes("price") ||
    lower.includes("cost") ||
    lower.includes("pricing") ||
    lower.includes("how much") ||
    lower.includes("fee") ||
    lower.includes("charge")
  ) {
    return `We offer scoped, SME-friendly pricing:

• Websites: from $500 for a complete business site
• SolidAI Agents: free trial, then $29/month per agent
• Cloud setup: $200–$500 depending on complexity
• Custom projects: quoted to your requirements

Payment plans available for SMEs. Want a custom quote?`;
  }

  if (
    lower.includes("contact") ||
    lower.includes("reach") ||
    lower.includes("email") ||
    lower.includes("phone") ||
    lower.includes("call") ||
    lower.includes("get in touch")
  ) {
    return `Reach Solid Solutions at:

📧 info@solidsolutions.africa
🌐 solidsolutions.africa
📍 Harare, Zimbabwe

We typically reply within 24 hours.`;
  }

  if (
    lower.includes("location") ||
    lower.includes("where are you") ||
    lower.includes("where based") ||
    lower.includes("zimbabwe") ||
    lower.includes("harare")
  ) {
    return `We're based in Harare, Zimbabwe, and serve SMEs across Africa.

🌐 solidsolutions.africa
📧 info@solidsolutions.africa`;
  }

  if (
    lower.includes("hardware") ||
    lower.includes("manufactur") ||
    lower.includes("device") ||
    lower.includes("embedded")
  ) {
    return `Hardware and embedded work sits in our longer-term roadmap (devices and edge connectivity for African markets).

Today we ship software first: websites, SolidAI agents, cloud, and dashboards. Ask about those or email info@solidsolutions.africa for hardware timelines.`;
  }

  if (
    lower.includes("infrastructure") ||
    lower.includes("cloud") ||
    lower.includes("network") ||
    lower.includes("edge") ||
    lower.includes("connectivity") ||
    lower.includes("hosting")
  ) {
    return `We set up practical cloud and infrastructure for SMEs:

• Hosting & secure deployments
• CI/CD pipelines
• Monitoring and backups
• Edge-friendly architectures where bandwidth is limited

Typical setup: $200–$500 depending on scope. Want a walkthrough?`;
  }

  if (
    lower.includes("roadmap") ||
    lower.includes("road map") ||
    lower.includes("future plan") ||
    lower.includes("what's next") ||
    lower.includes("whats next")
  ) {
    return `Current focus:

1. SolidAI sector agents (free trial live)
2. SME websites & dashboards
3. Cloud / hosting packages
4. Later: hardware and deeper edge tooling

Tell me which track you care about and I’ll point you to the right next step.`;
  }

  if (
    lower.includes("solidai") ||
    lower.includes("solid llm") ||
    lower.includes("solidllm") ||
    lower.includes("language model") ||
    lower.includes("chatbot") ||
    /\bai\b/.test(lower) ||
    lower.includes("agent") ||
    lower.includes("llm")
  ) {
    return `SolidAI is our sector-specific agent platform:

• Agriculture — crop planning, markets, logistics
• Health — triage, appointment reminders
• Education — lesson planning, revision
• Finance — invoices, expenses
• Legal, transport, energy, retail — and more

Each agent is built for day-to-day business support. Want to try one?`;
  }

  if (
    lower.includes("who are you") ||
    lower.includes("what is solid") ||
    lower.includes("about solid") ||
    lower.includes("about you") ||
    lower.includes("mission") ||
    lower.includes("vision") ||
    lower.includes("your story")
  ) {
    return `Solid Solutions is an African tech company building practical AI, cloud, and web systems for SMEs.

Our focus: tools that work in real operating conditions — reliable, affordable, and easy to run.

Learn more at solidsolutions.africa or email info@solidsolutions.africa.`;
  }

  if (
    lower.includes("service") ||
    lower.includes("what do you do") ||
    lower.includes("what can you") ||
    lower.includes("what do you offer") ||
    lower.includes("solutions")
  ) {
    return `Solid Solutions builds practical AI, cloud, and web systems for African SMEs:

1. Websites & brand systems
2. AI business tools (SolidAI)
3. Cloud & infrastructure
4. Dashboards & internal apps

SolidAI agents are on free trial. Which area interests you?`;
  }

  return `Thanks for your message — I'm the Solid Solutions assistant.

I can help with services, pricing, getting started, and our platforms.

For detailed or custom work, email info@solidsolutions.africa (we reply within 24 hours).

What would you like to know?`;
}

const FAB_CLASS =
  "fixed z-[60] grid h-12 w-12 place-items-center rounded-full bg-charcoal text-white shadow-2xl transition-shadow hover:shadow-charcoal/30 sm:h-14 sm:w-14 bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] sm:bottom-6 sm:right-6";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm the Solid Solutions assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setIsOpen(false), []);

  // Keep latest message in view
  useEffect(() => {
    if (!isOpen) return;
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isLoading, isOpen]);

  // Lock body scroll on small screens while open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    const mq = window.matchMedia("(max-width: 639px)");
    const apply = () => {
      document.body.style.overflow = mq.matches ? "hidden" : prev;
    };
    apply();
    mq.addEventListener("change", apply);
    return () => {
      document.body.style.overflow = prev;
      mq.removeEventListener("change", apply);
    };
  }, [isOpen]);

  // Escape closes the panel
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen) {
      const t = window.setTimeout(() => inputRef.current?.focus(), 220);
      return () => window.clearTimeout(t);
    }
  }, [isOpen]);

  // Keep panel above mobile keyboard using visualViewport
  useEffect(() => {
    if (!isOpen) return;
    const vv = window.visualViewport;
    const panel = panelRef.current;
    if (!vv || !panel) return;

    const sync = () => {
      // Only adjust on narrow viewports (mobile sheet)
      if (window.innerWidth >= 640) {
        panel.style.height = "";
        panel.style.bottom = "";
        return;
      }
      const keyboardOffset = Math.max(0, window.innerHeight - vv.height - vv.offsetTop);
      panel.style.bottom = keyboardOffset > 0 ? `${keyboardOffset}px` : "0px";
      panel.style.height = `${vv.height - 12}px`;
    };

    sync();
    vv.addEventListener("resize", sync);
    vv.addEventListener("scroll", sync);
    return () => {
      vv.removeEventListener("resize", sync);
      vv.removeEventListener("scroll", sync);
      panel.style.height = "";
      panel.style.bottom = "";
    };
  }, [isOpen]);

  const sendText = async (userMessage: string) => {
    if (!userMessage.trim() || isLoading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage.trim() }]);
    setIsLoading(true);

    try {
      await new Promise((r) => setTimeout(r, 400));
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: replyFor(userMessage) },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry — something went wrong. Please try again or email info@solidsolutions.africa.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => void sendText(input);

  const showQuickPrompts = messages.length <= 1 && !isLoading;

  return (
    <>
      {/* FAB — hidden on mobile while open (header has close); visible on sm+ as toggle */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
        className={`${FAB_CLASS} ${isOpen ? "hidden sm:grid" : "grid"}`}
      >
        {isOpen ? <X size={22} /> : <MessageSquare size={22} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile scrim */}
            <motion.button
              type="button"
              aria-label="Dismiss chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-[2px] sm:hidden"
            />

            {/* Panel: full-bleed sheet on phones, floating card on sm+ */}
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Solid Solutions chat"
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
              className="
                fixed z-[60] flex flex-col overflow-hidden bg-white shadow-2xl
                /* mobile: nearly full viewport sheet */
                inset-x-0 bottom-0
                top-[max(0.5rem,env(safe-area-inset-top))]
                max-h-[100dvh] rounded-t-2xl
                /* sm+: floating card above FAB */
                sm:inset-auto
                sm:bottom-[calc(5.5rem+env(safe-area-inset-bottom))]
                sm:right-[max(1.5rem,env(safe-area-inset-right))]
                sm:top-auto
                sm:w-[min(24rem,calc(100vw-2rem))]
                sm:h-[min(34rem,calc(100dvh-8rem))]
                sm:max-h-[calc(100dvh-8rem)]
                sm:rounded-2xl sm:border sm:border-black/5
                /* md+: slightly roomier card */
                md:w-[min(26rem,calc(100vw-3rem))]
              "
              style={{
                paddingBottom: "env(safe-area-inset-bottom)",
              }}
            >
              {/* Mobile drag hint */}
              <div className="flex shrink-0 justify-center pt-2 sm:hidden" aria-hidden>
                <div className="h-1 w-10 rounded-full bg-black/15" />
              </div>

              {/* Header */}
              <div className="flex shrink-0 items-center justify-between gap-3 bg-charcoal px-4 py-3 text-white sm:px-5 sm:py-4">
                <div className="min-w-0">
                  <h3 className="truncate text-base font-bold tracking-tight sm:text-lg">
                    Solid Solutions
                  </h3>
                  <p className="truncate text-[11px] text-white/65 sm:text-xs">
                    AI assistant · usually replies instantly
                  </p>
                </div>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close chat"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-white/90 transition hover:bg-white/15"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Messages */}
              <div
                ref={listRef}
                className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain bg-bg-main px-3 py-3 sm:px-4 sm:py-4"
              >
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[min(88%,22rem)] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed sm:max-w-[85%] sm:text-sm ${
                        msg.role === "user"
                          ? "rounded-br-md bg-charcoal text-white"
                          : "rounded-bl-md border border-black/5 bg-white text-slate-800 shadow-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {showQuickPrompts && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {QUICK_PROMPTS.map((prompt) => (
                      <button
                        key={prompt}
                        type="button"
                        onClick={() => void sendText(prompt)}
                        className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-left text-[12px] font-medium text-slate-700 shadow-sm transition hover:border-charcoal/25 hover:bg-bg-dark sm:text-[13px]"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                )}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl rounded-bl-md border border-black/5 bg-white px-4 py-3 shadow-sm">
                      <div className="flex gap-1.5">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:0ms]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:120ms]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:240ms]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Composer */}
              <div className="shrink-0 border-t border-black/5 bg-white px-3 py-3 sm:px-4 sm:py-3.5">
                <form
                  className="flex items-end gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message…"
                    disabled={isLoading}
                    enterKeyHint="send"
                    autoComplete="off"
                    // 16px on mobile avoids iOS input zoom
                    className="min-w-0 flex-1 rounded-xl border border-black/10 bg-bg-main px-3.5 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-charcoal/30 focus:outline-none focus:ring-2 focus:ring-charcoal/10 disabled:opacity-60 sm:text-sm"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    aria-label="Send message"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-charcoal text-white transition enabled:hover:bg-black disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Send size={16} />
                  </button>
                </form>
                <p className="mt-2 text-center text-[10px] text-slate-400 sm:text-[11px]">
                  For custom work: info@solidsolutions.africa
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
