import { lazy, Suspense, useEffect, useState } from "react";
import { MessageSquare } from "lucide-react";

const ChatBot = lazy(() =>
  import("./ChatBot").then((m) => ({ default: m.ChatBot })),
);

/** Same FAB shell as ChatBot so layout doesn’t jump when the full widget loads. */
function ChatFabShell({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label="Open chat"
      onClick={onClick}
      className="fixed z-[60] grid h-12 w-12 place-items-center rounded-full bg-charcoal text-white shadow-2xl transition hover:scale-105 sm:h-14 sm:w-14 bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] sm:bottom-6 sm:right-6"
    >
      <MessageSquare size={22} />
    </button>
  );
}

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
    return <ChatFabShell onClick={() => setReady(true)} />;
  }

  return (
    <Suspense fallback={<ChatFabShell onClick={() => {}} />}>
      <ChatBot />
    </Suspense>
  );
}
