// Standalone test of the ChatBot local-reply knowledge matching.
const KNOWLEDGE = [
  { match: /(contact|email|reach|get in touch|phone)/i, answer: "contact" },
  { match: /(ai|llm|solid\s*ai|solidllm|language model|chatbot|assistant)/i, answer: "ai" },
  { match: /(hardware|manufactur|phone|device|embedded)/i, answer: "hardware" },
  { match: /(infrastructure|cloud|network|edge|connectivity)/i, answer: "infra" },
  { match: /(roadmap|plan|phase|future|road map)/i, answer: "roadmap" },
  { match: /(about|who|what is|mission|vision|story)/i, answer: "about" },
  { match: /(location|where|zimbabwe|harare|africa)/i, answer: "location" },
  { match: /(service|offer|do you|help|solution)/i, answer: "service" },
];
function localReply(t){for(const k of KNOWLEDGE) if(k.match.test(t)) return k.answer; return "fallback";}

const cases = [
  ["How do I contact you?", "contact"],
  ["Tell me about your AI services", "ai"],
  ["Do you build hardware?", "hardware"],
  ["What cloud infrastructure do you offer?", "infra"],
  ["What is your roadmap?", "roadmap"],
  ["Who are you?", "about"],
  ["Where are you located?", "location"],
  ["What services do you offer?", "service"],
  ["asdfghjkl random", "fallback"],
];
let pass = 0;
for (const [input, expected] of cases) {
  const got = localReply(input);
  const ok = got === expected;
  if (ok) pass++;
  console.log(`${ok ? "PASS" : "FAIL"}  "${input}" -> ${got}${ok?"":` (expected ${expected})`}`);
}
console.log(`\n${pass}/${cases.length} passed`);
process.exit(pass === cases.length ? 0 : 1);
