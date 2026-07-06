import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{r as t,t as n}from"./react-vendor-Clmkw7gY.js";import{g as r,s as i}from"./index-CdvIEr2Y.js";import{AnimatePresence as a,motion as o}from"motion/react";var s=r(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),c=r(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),l=e(t(),1),u=n();function d(){let[e,t]=(0,l.useState)(!1),[n,r]=(0,l.useState)([{role:`assistant`,content:`Hello! I'm Solid Solutions AI assistant. How can I help you today?`}]),[d,f]=(0,l.useState)(``),[p,m]=(0,l.useState)(!1),[h,g]=(0,l.useState)(0),_=async()=>{if(!d.trim()||p)return;let e=d.trim();f(``),r(t=>[...t,{role:`user`,content:e}]),m(!0);try{await new Promise(e=>setTimeout(e,1e3));let t=``,n=e.toLowerCase();t=n.includes(`price`)||n.includes(`cost`)||n.includes(`pricing`)||n.includes(`how much`)||n.includes(`fee`)||n.includes(`charge`)?`We offer scoped, SME-friendly pricing:

• **Websites**: Starting from $500 for a complete business site
• **SolidAI Agents**: Free trial available, then $29/month per agent
• **Cloud Setup**: $200-$500 depending on complexity
• **Custom Projects**: Quoted based on requirements

We also offer payment plans for SMEs. Would you like a custom quote for your business?`:n.includes(`service`)||n.includes(`offer`)||n.includes(`what do you do`)||n.includes(`what can you`)?`Solid Solutions offers practical AI, cloud, and web systems for African SMEs. Our core services include:

1. **Websites & Brand Systems** - Fast, clean sites for credible online presence
2. **AI Business Tools (SolidAI)** - Sector-specific agents for agriculture, health, education, finance, and more
3. **Cloud & Infrastructure** - Hosting, deployment pipelines, and monitoring
4. **Dashboards & Internal Apps** - Operational interfaces for business management

We're currently offering free trials of our SolidAI agents. Would you like to learn more about any specific service?`:n.includes(`contact`)||n.includes(`reach`)||n.includes(`email`)||n.includes(`phone`)||n.includes(`call`)?`You can reach Solid Solutions through:

📧 Email: info@solidsolutions.africa
📱 Phone: +263 77 123 4567 (Zimbabwe)
🌐 Website: solidsolutions.africa
📍 Location: Harare, Zimbabwe

We typically respond within 24 hours. For immediate assistance, please email us with your requirements.`:n.includes(`ai`)||n.includes(`agent`)||n.includes(`solidai`)?`SolidAI is our flagship AI platform with sector-specific agents:

🤖 **Available Agents:**
• Agriculture - Crop planning, market prices, logistics
• Health - Patient triage, appointment reminders
• Education - Lesson planning, exam revision
• Finance - Invoice drafting, expense tracking
• Legal - Contract clauses, compliance checklists
• Transport - Fleet coordination, route planning
• Energy - Solar inventory, installation quotes
• Retail - Stock reconciliation, pricing

Each agent is designed for practical business support. Would you like to try one?`:`Thank you for your message! I'm the Solid Solutions AI assistant. 

I can help you with:
• Information about our services (websites, AI tools, cloud systems)
• Pricing and packages
• How to get started
• Technical questions about our platforms

For detailed discussions or custom requirements, please contact us at info@solidsolutions.africa and our team will get back to you within 24 hours.

Is there something specific you'd like to know?`,r(e=>[...e,{role:`assistant`,content:t}])}catch(e){console.error(`Chat error:`,e),r(e=>[...e,{role:`assistant`,content:`I apologize, but I'm having trouble connecting right now. Please try again later or contact us at info@solidsolutions.africa`}])}finally{m(!1)}};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>t(!e),className:`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow`,title:`Chat with Solid Solutions AI`,children:e?(0,u.jsx)(c,{size:24}):(0,u.jsx)(i,{size:24})}),(0,u.jsx)(a,{children:e&&(0,u.jsxs)(o.div,{initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.95},className:`fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col`,children:[(0,u.jsx)(`div`,{className:`bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4`,children:(0,u.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`h3`,{className:`font-bold text-lg`,children:`Solid Solutions AI`}),(0,u.jsx)(`p`,{className:`text-xs text-white/70`,children:`Powered by free AI models`})]}),(0,u.jsx)(`button`,{onClick:()=>t(!1),className:`hover:bg-white/20 rounded-lg p-1 transition`,children:(0,u.jsx)(c,{size:20})})]})}),(0,u.jsxs)(`div`,{className:`flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50`,children:[n.map((e,t)=>(0,u.jsx)(`div`,{className:`flex ${e.role===`user`?`justify-end`:`justify-start`}`,children:(0,u.jsx)(`div`,{className:`max-w-[80%] p-3 rounded-lg text-sm ${e.role===`user`?`bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-br-none`:`bg-white text-gray-800 rounded-bl-none shadow-sm`}`,children:e.content})},t)),p&&(0,u.jsx)(`div`,{className:`flex justify-start`,children:(0,u.jsx)(`div`,{className:`bg-white text-gray-800 rounded-lg rounded-bl-none p-3 shadow-sm`,children:(0,u.jsxs)(`div`,{className:`flex gap-1`,children:[(0,u.jsx)(`span`,{className:`w-2 h-2 bg-gray-400 rounded-full animate-bounce`}),(0,u.jsx)(`span`,{className:`w-2 h-2 bg-gray-400 rounded-full animate-bounce`,style:{animationDelay:`0.1s`}}),(0,u.jsx)(`span`,{className:`w-2 h-2 bg-gray-400 rounded-full animate-bounce`,style:{animationDelay:`0.2s`}})]})})})]}),(0,u.jsxs)(`div`,{className:`p-4 border-t border-gray-200 bg-white`,children:[(0,u.jsxs)(`div`,{className:`flex gap-2`,children:[(0,u.jsx)(`input`,{type:`text`,value:d,onChange:e=>f(e.target.value),onKeyPress:e=>e.key===`Enter`&&!e.shiftKey&&_(),placeholder:`Type your message...`,disabled:p,className:`flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100`}),(0,u.jsx)(`button`,{onClick:_,disabled:p||!d.trim(),className:`px-4 py-2 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2`,children:(0,u.jsx)(s,{size:16})})]}),(0,u.jsx)(`p`,{className:`text-xs text-gray-400 mt-2 text-center`,children:`Using free AI models via OpenRouter`})]})]})})]})}export{d as ChatBot};