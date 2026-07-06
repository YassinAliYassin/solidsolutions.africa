import { lazy, Suspense, useEffect, useState } from "react";
import { MessageSquare } from "lucide-react";

const ChatBot = lazy(() => import("./ChatBot").then((m) => ({ default: m.ChatBot })));

export function DeferredChatBot() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const enable = () => setReady(true);

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(enable, { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }

    const id = globalThis.setTimeout(enable, 2500);
    return () => globalThis.clearTimeout(id);
  }, []);

  if (!ready) {
    return (
      <button
        type="button"
        aria-label="Open chat"
        onClick={() => setReady(true)}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-charcoal text-white shadow-2xl transition hover:scale-105"
      >
        <MessageSquare size={22} />
      </button>
    );
  }

  return (
    <Suspense fallback={null}>
      <ChatBot />
    </Suspense>
  );
}