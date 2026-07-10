// Standalone test of the ChatBot local-reply knowledge matching.
// Mirrors replyFor() categories in src/components/ChatBot.tsx

function replyFor(userMessage) {
  const lower = userMessage.toLowerCase();

  if (
    lower.includes("price") ||
    lower.includes("cost") ||
    lower.includes("pricing") ||
    lower.includes("how much") ||
    lower.includes("fee") ||
    lower.includes("charge")
  )
    return "pricing";

  if (
    lower.includes("contact") ||
    lower.includes("reach") ||
    lower.includes("email") ||
    lower.includes("phone") ||
    lower.includes("call") ||
    lower.includes("get in touch")
  )
    return "contact";

  if (
    lower.includes("location") ||
    lower.includes("where are you") ||
    lower.includes("where based") ||
    lower.includes("zimbabwe") ||
    lower.includes("harare")
  )
    return "location";

  if (
    lower.includes("hardware") ||
    lower.includes("manufactur") ||
    lower.includes("device") ||
    lower.includes("embedded")
  )
    return "hardware";

  if (
    lower.includes("infrastructure") ||
    lower.includes("cloud") ||
    lower.includes("network") ||
    lower.includes("edge") ||
    lower.includes("connectivity") ||
    lower.includes("hosting")
  )
    return "infra";

  if (
    lower.includes("roadmap") ||
    lower.includes("road map") ||
    lower.includes("future plan") ||
    lower.includes("what's next") ||
    lower.includes("whats next")
  )
    return "roadmap";

  if (
    lower.includes("solidai") ||
    lower.includes("solid llm") ||
    lower.includes("solidllm") ||
    lower.includes("language model") ||
    lower.includes("chatbot") ||
    /\bai\b/.test(lower) ||
    lower.includes("agent") ||
    lower.includes("llm")
  )
    return "ai";

  if (
    lower.includes("who are you") ||
    lower.includes("what is solid") ||
    lower.includes("about solid") ||
    lower.includes("about you") ||
    lower.includes("mission") ||
    lower.includes("vision") ||
    lower.includes("your story")
  )
    return "about";

  if (
    lower.includes("service") ||
    lower.includes("what do you do") ||
    lower.includes("what can you") ||
    lower.includes("what do you offer") ||
    lower.includes("solutions")
  )
    return "service";

  return "fallback";
}

const cases = [
  ["How do I contact you?", "contact"],
  ["Tell me about your AI services", "ai"],
  ["Do you build hardware?", "hardware"],
  ["What cloud infrastructure do you offer?", "infra"],
  ["What is your roadmap?", "roadmap"],
  ["Who are you?", "about"],
  ["Where are you located?", "location"],
  ["What services do you offer?", "service"],
  ["How much does a website cost?", "pricing"],
  ["asdfghjkl random", "fallback"],
];

let pass = 0;
for (const [input, expected] of cases) {
  const got = replyFor(input);
  const ok = got === expected;
  if (ok) pass++;
  console.log(
    `${ok ? "PASS" : "FAIL"}  "${input}" -> ${got}${ok ? "" : ` (expected ${expected})`}`,
  );
}
console.log(`\n${pass}/${cases.length} passed`);
process.exit(pass === cases.length ? 0 : 1);
