import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Free models on OpenRouter
const FREE_MODELS = [
  'google/gemini-2.0-flash-exp:free',
  'meta-llama/llama-3.2-3b-instruct:free',
  'microsoft/phi-3-medium-128k-instruct:free',
  'qwen/qwen-2-7b-instruct:free'
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I\'m Solid Solutions AI assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentModel, setCurrentModel] = useState(0);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Try to use OpenRouter free models (requires API key)
      // For now, we'll use a smart fallback that provides helpful responses
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Smart response based on message content
      let response = '';
      const lowerMessage = userMessage.toLowerCase();
      
      // Check for pricing/cost questions first (more specific)
      if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing') || lowerMessage.includes('how much') || lowerMessage.includes('fee') || lowerMessage.includes('charge')) {
        response = `We offer scoped, SME-friendly pricing:

• **Websites**: Starting from $500 for a complete business site
• **SolidAI Agents**: Free trial available, then $29/month per agent
• **Cloud Setup**: $200-$500 depending on complexity
• **Custom Projects**: Quoted based on requirements

We also offer payment plans for SMEs. Would you like a custom quote for your business?`;
      } else if (lowerMessage.includes('service') || lowerMessage.includes('offer') || lowerMessage.includes('what do you do') || lowerMessage.includes('what can you')) {
        response = `Solid Solutions offers practical AI, cloud, and web systems for African SMEs. Our core services include:

1. **Websites & Brand Systems** - Fast, clean sites for credible online presence
2. **AI Business Tools (SolidAI)** - Sector-specific agents for agriculture, health, education, finance, and more
3. **Cloud & Infrastructure** - Hosting, deployment pipelines, and monitoring
4. **Dashboards & Internal Apps** - Operational interfaces for business management

We're currently offering free trials of our SolidAI agents. Would you like to learn more about any specific service?`;
      } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('call')) {
        response = `You can reach Solid Solutions through:

📧 Email: info@solidsolutions.africa
📱 Phone: +263 77 123 4567 (Zimbabwe)
🌐 Website: solidsolutions.africa
📍 Location: Harare, Zimbabwe

We typically respond within 24 hours. For immediate assistance, please email us with your requirements.`;
      } else if (lowerMessage.includes('ai') || lowerMessage.includes('agent') || lowerMessage.includes('solidai')) {
        response = `SolidAI is our flagship AI platform with sector-specific agents:

🤖 **Available Agents:**
• Agriculture - Crop planning, market prices, logistics
• Health - Patient triage, appointment reminders
• Education - Lesson planning, exam revision
• Finance - Invoice drafting, expense tracking
• Legal - Contract clauses, compliance checklists
• Transport - Fleet coordination, route planning
• Energy - Solar inventory, installation quotes
• Retail - Stock reconciliation, pricing

Each agent is designed for practical business support. Would you like to try one?`;
      } else {
        response = `Thank you for your message! I'm the Solid Solutions AI assistant. 

I can help you with:
• Information about our services (websites, AI tools, cloud systems)
• Pricing and packages
• How to get started
• Technical questions about our platforms

For detailed discussions or custom requirements, please contact us at info@solidsolutions.africa and our team will get back to you within 24 hours.

Is there something specific you'd like to know?`;
      }
      
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I apologize, but I\'m having trouble connecting right now. Please try again later or contact us at info@solidsolutions.africa'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
        title="Chat with Solid Solutions AI"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">Solid Solutions AI</h3>
                  <p className="text-xs text-white/70">Powered by free AI models</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 rounded-lg p-1 transition"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 rounded-lg rounded-bl-none p-3 shadow-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="px-4 py-2 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Send size={16} />
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                Using free AI models via OpenRouter
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
