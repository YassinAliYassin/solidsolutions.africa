import{a as e}from"./rolldown-runtime-CNC7AqOf.js";import{r as t,t as n}from"./react-vendor-cUqUQLF4.js";import{n as r,t as i}from"./AnimatePresence-pJJ2kUc5.js";import{o as a,p as o}from"./index-By5B4va6.js";import{t as s}from"./react-CrkkX5k5.js";var c=o(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),l=e(t(),1),u=n(),d=[`What services do you offer?`,`Pricing?`,`How do I contact you?`,`Tell me about SolidAI`];function f(e){let t=e.toLowerCase();return t.includes(`price`)||t.includes(`cost`)||t.includes(`pricing`)||t.includes(`how much`)||t.includes(`fee`)||t.includes(`charge`)?`We offer scoped, SME-friendly pricing:

• Websites: from $500 for a complete business site
• SolidAI Agents: free trial, then $29/month per agent
• Cloud setup: $200–$500 depending on complexity
• Custom projects: quoted to your requirements

Payment plans available for SMEs. Want a custom quote?`:t.includes(`contact`)||t.includes(`reach`)||t.includes(`email`)||t.includes(`phone`)||t.includes(`call`)||t.includes(`get in touch`)?`Reach Solid Solutions at:

📧 info@solidsolutions.africa
🌐 solidsolutions.africa
📍 Harare, Zimbabwe

We typically reply within 24 hours.`:t.includes(`location`)||t.includes(`where are you`)||t.includes(`where based`)||t.includes(`zimbabwe`)||t.includes(`harare`)?`We're based in Harare, Zimbabwe, and serve SMEs across Africa.

🌐 solidsolutions.africa
📧 info@solidsolutions.africa`:t.includes(`hardware`)||t.includes(`manufactur`)||t.includes(`device`)||t.includes(`embedded`)?`Hardware and embedded work sits in our longer-term roadmap (devices and edge connectivity for African markets).

Today we ship software first: websites, SolidAI agents, cloud, and dashboards. Ask about those or email info@solidsolutions.africa for hardware timelines.`:t.includes(`infrastructure`)||t.includes(`cloud`)||t.includes(`network`)||t.includes(`edge`)||t.includes(`connectivity`)||t.includes(`hosting`)?`We set up practical cloud and infrastructure for SMEs:

• Hosting & secure deployments
• CI/CD pipelines
• Monitoring and backups
• Edge-friendly architectures where bandwidth is limited

Typical setup: $200–$500 depending on scope. Want a walkthrough?`:t.includes(`roadmap`)||t.includes(`road map`)||t.includes(`future plan`)||t.includes(`what's next`)||t.includes(`whats next`)?`Current focus:

1. SolidAI sector agents (free trial live)
2. SME websites & dashboards
3. Cloud / hosting packages
4. Later: hardware and deeper edge tooling

Tell me which track you care about and I’ll point you to the right next step.`:t.includes(`solidai`)||t.includes(`solid llm`)||t.includes(`solidllm`)||t.includes(`language model`)||t.includes(`chatbot`)||/\bai\b/.test(t)||t.includes(`agent`)||t.includes(`llm`)?`SolidAI is our sector-specific agent platform:

• Agriculture — crop planning, markets, logistics
• Health — triage, appointment reminders
• Education — lesson planning, revision
• Finance — invoices, expenses
• Legal, transport, energy, retail — and more

Each agent is built for day-to-day business support. Want to try one?`:t.includes(`who are you`)||t.includes(`what is solid`)||t.includes(`about solid`)||t.includes(`about you`)||t.includes(`mission`)||t.includes(`vision`)||t.includes(`your story`)?`Solid Solutions is an African tech company building practical AI, cloud, and web systems for SMEs.

Our focus: tools that work in real operating conditions — reliable, affordable, and easy to run.

Learn more at solidsolutions.africa or email info@solidsolutions.africa.`:t.includes(`service`)||t.includes(`what do you do`)||t.includes(`what can you`)||t.includes(`what do you offer`)||t.includes(`solutions`)?`Solid Solutions builds practical AI, cloud, and web systems for African SMEs:

1. Websites & brand systems
2. AI business tools (SolidAI)
3. Cloud & infrastructure
4. Dashboards & internal apps

SolidAI agents are on free trial. Which area interests you?`:`Thanks for your message — I'm the Solid Solutions assistant.

I can help with services, pricing, getting started, and our platforms.

For detailed or custom work, email info@solidsolutions.africa (we reply within 24 hours).

What would you like to know?`}var p=`fixed z-[60] grid h-12 w-12 place-items-center rounded-full bg-charcoal text-white shadow-2xl transition-shadow hover:shadow-charcoal/30 sm:h-14 sm:w-14 bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] sm:bottom-6 sm:right-6`;function m(){let[e,t]=(0,l.useState)(!1),[n,o]=(0,l.useState)([{role:`assistant`,content:`Hello! I'm the Solid Solutions assistant. How can I help you today?`}]),[m,h]=(0,l.useState)(``),[g,_]=(0,l.useState)(!1),v=(0,l.useRef)(null),y=(0,l.useRef)(null),b=(0,l.useRef)(null),x=(0,l.useCallback)(()=>t(!1),[]);(0,l.useEffect)(()=>{if(!e)return;let t=v.current;t&&(t.scrollTop=t.scrollHeight)},[n,g,e]),(0,l.useEffect)(()=>{if(!e)return;let t=document.body.style.overflow,n=window.matchMedia(`(max-width: 639px)`),r=()=>{document.body.style.overflow=n.matches?`hidden`:t};return r(),n.addEventListener(`change`,r),()=>{document.body.style.overflow=t,n.removeEventListener(`change`,r)}},[e]),(0,l.useEffect)(()=>{if(!e)return;let t=e=>{e.key===`Escape`&&x()};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e,x]),(0,l.useEffect)(()=>{if(e){let e=window.setTimeout(()=>y.current?.focus(),220);return()=>window.clearTimeout(e)}},[e]),(0,l.useEffect)(()=>{if(!e)return;let t=window.visualViewport,n=b.current;if(!t||!n)return;let r=()=>{if(window.innerWidth>=640){n.style.height=``,n.style.bottom=``;return}let e=Math.max(0,window.innerHeight-t.height-t.offsetTop);n.style.bottom=e>0?`${e}px`:`0px`,n.style.height=`${t.height-12}px`};return r(),t.addEventListener(`resize`,r),t.addEventListener(`scroll`,r),()=>{t.removeEventListener(`resize`,r),t.removeEventListener(`scroll`,r),n.style.height=``,n.style.bottom=``}},[e]);let S=async e=>{if(!(!e.trim()||g)){h(``),o(t=>[...t,{role:`user`,content:e.trim()}]),_(!0);try{await new Promise(e=>setTimeout(e,400)),o(t=>[...t,{role:`assistant`,content:f(e)}])}catch{o(e=>[...e,{role:`assistant`,content:`Sorry — something went wrong. Please try again or email info@solidsolutions.africa.`}])}finally{_(!1)}}},C=()=>void S(m),w=n.length<=1&&!g;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.button,{type:`button`,whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>t(e=>!e),"aria-label":e?`Close chat`:`Open chat`,"aria-expanded":e,className:`${p} ${e?`hidden sm:grid`:`grid`}`,children:e?(0,u.jsx)(r,{size:22}):(0,u.jsx)(a,{size:22})}),(0,u.jsx)(i,{children:e&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.button,{type:`button`,"aria-label":`Dismiss chat`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:x,className:`fixed inset-0 z-[55] bg-black/40 backdrop-blur-[2px] sm:hidden`}),(0,u.jsxs)(s.div,{ref:b,role:`dialog`,"aria-modal":`true`,"aria-label":`Solid Solutions chat`,initial:{opacity:0,y:28,scale:.98},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:28,scale:.98},transition:{type:`spring`,stiffness:380,damping:32},className:`
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
              `,style:{paddingBottom:`env(safe-area-inset-bottom)`},children:[(0,u.jsx)(`div`,{className:`flex shrink-0 justify-center pt-2 sm:hidden`,"aria-hidden":!0,children:(0,u.jsx)(`div`,{className:`h-1 w-10 rounded-full bg-black/15`})}),(0,u.jsxs)(`div`,{className:`flex shrink-0 items-center justify-between gap-3 bg-charcoal px-4 py-3 text-white sm:px-5 sm:py-4`,children:[(0,u.jsxs)(`div`,{className:`min-w-0`,children:[(0,u.jsx)(`h3`,{className:`truncate text-base font-bold tracking-tight sm:text-lg`,children:`Solid Solutions`}),(0,u.jsx)(`p`,{className:`truncate text-[11px] text-white/65 sm:text-xs`,children:`AI assistant · usually replies instantly`})]}),(0,u.jsx)(`button`,{type:`button`,onClick:x,"aria-label":`Close chat`,className:`grid h-10 w-10 shrink-0 place-items-center rounded-lg text-white/90 transition hover:bg-white/15`,children:(0,u.jsx)(r,{size:18})})]}),(0,u.jsxs)(`div`,{ref:v,className:`min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain bg-bg-main px-3 py-3 sm:px-4 sm:py-4`,children:[n.map((e,t)=>(0,u.jsx)(`div`,{className:`flex ${e.role===`user`?`justify-end`:`justify-start`}`,children:(0,u.jsx)(`div`,{className:`max-w-[min(88%,22rem)] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed sm:max-w-[85%] sm:text-sm ${e.role===`user`?`rounded-br-md bg-charcoal text-white`:`rounded-bl-md border border-black/5 bg-white text-slate-800 shadow-sm`}`,children:e.content})},t)),w&&(0,u.jsx)(`div`,{className:`flex flex-wrap gap-2 pt-1`,children:d.map(e=>(0,u.jsx)(`button`,{type:`button`,onClick:()=>void S(e),className:`rounded-full border border-black/10 bg-white px-3 py-1.5 text-left text-[12px] font-medium text-slate-700 shadow-sm transition hover:border-charcoal/25 hover:bg-bg-dark sm:text-[13px]`,children:e},e))}),g&&(0,u.jsx)(`div`,{className:`flex justify-start`,children:(0,u.jsx)(`div`,{className:`rounded-2xl rounded-bl-md border border-black/5 bg-white px-4 py-3 shadow-sm`,children:(0,u.jsxs)(`div`,{className:`flex gap-1.5`,children:[(0,u.jsx)(`span`,{className:`h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:0ms]`}),(0,u.jsx)(`span`,{className:`h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:120ms]`}),(0,u.jsx)(`span`,{className:`h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:240ms]`})]})})})]}),(0,u.jsxs)(`div`,{className:`shrink-0 border-t border-black/5 bg-white px-3 py-3 sm:px-4 sm:py-3.5`,children:[(0,u.jsxs)(`form`,{className:`flex items-end gap-2`,onSubmit:e=>{e.preventDefault(),C()},children:[(0,u.jsx)(`input`,{ref:y,type:`text`,value:m,onChange:e=>h(e.target.value),placeholder:`Type your message…`,disabled:g,enterKeyHint:`send`,autoComplete:`off`,className:`min-w-0 flex-1 rounded-xl border border-black/10 bg-bg-main px-3.5 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-charcoal/30 focus:outline-none focus:ring-2 focus:ring-charcoal/10 disabled:opacity-60 sm:text-sm`}),(0,u.jsx)(`button`,{type:`submit`,disabled:g||!m.trim(),"aria-label":`Send message`,className:`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-charcoal text-white transition enabled:hover:bg-black disabled:cursor-not-allowed disabled:opacity-40`,children:(0,u.jsx)(c,{size:16})})]}),(0,u.jsx)(`p`,{className:`mt-2 text-center text-[10px] text-slate-400 sm:text-[11px]`,children:`For custom work: info@solidsolutions.africa`})]})]})]})})]})}export{m as ChatBot};