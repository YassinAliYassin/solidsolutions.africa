import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrain,
  faRocket,
  faShieldAlt,
  faCode,
  faChartLine,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import AgentStatusBadge from '../components/solidai/AgentStatusBadge';
import TaskProgressBar from '../components/solidai/TaskProgressBar';
import QuickAgentSwitcher from '../components/solidai/QuickAgentSwitcher';
import MobileNav from '../components/MobileNav';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function SolidAI() {
  const heroRef = useRef(null);
  useDocumentTitle("SolidAI Platform");

  useEffect(() => {
    // Gradient animation for text
    const style = document.createElement('style');
    style.textContent = `
      .gradient-text {
        background: linear-gradient(90deg, #165dff 0%, #7b61ff 25%, #a855f7 50%, #ec4899 75%, #ef4444 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        background-size: 200% auto;
        animation: gradient 5s ease infinite;
      }
      @keyframes gradient {
        0% { background-position: 0% center; }
        50% { background-position: 100% center; }
        100% { background-position: 0% center; }
      }
      .glass-card {
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
      }
      .glass-card:hover {
        background: rgba(255, 255, 255, 0.06);
        border-color: rgba(22, 93, 255, 0.5);
        transform: translateY(-4px);
      }
      .glow {
        box-shadow: 0 0 40px rgba(22, 93, 255, 0.15);
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); return; };
  }, []);

  const features = [
    {
      icon: faBrain,
      title: 'Sector-Specific Agents',
      desc: 'Agents scoped to real African SME workflows — agriculture, health, education, finance, and more — not general-purpose chat.'
    },
    {
      icon: faRocket,
      title: 'Built for Local Conditions',
      desc: 'Designed to stay useful on patchy connectivity and modest hardware, starting lightweight and adding capability as it’s validated.'
    },
    {
      icon: faShieldAlt,
      title: 'Privacy-Conscious by Design',
      desc: 'Data handling built around minimal collection and local control. Formal compliance certifications are on the roadmap, not yet in place.'
    },
    {
      icon: faCode,
      title: 'Developer First',
      desc: 'Clear APIs and documentation planned alongside the platform, so integrations stay simple as agents mature.'
    },
    {
      icon: faChartLine,
      title: 'Grows With Demand',
      desc: 'Infrastructure choices made to scale sensibly as usage grows, rather than over-provisioning for numbers we don’t have yet.'
    },
    {
      icon: faUsers,
      title: 'Team Collaboration',
      desc: 'Shared workspaces and role-based access planned for teams once the core agents are live.'
    }
  ];

  const agents = [
    { id: 'agriculture', name: 'Agriculture Agent' },
    { id: 'health', name: 'Health Agent' },
    { id: 'education', name: 'Education Agent' },
    { id: 'finance', name: 'Finance Agent' },
  ];

  const [selectedAgent, setSelectedAgent] = useState('agriculture');
  const [progress, setProgress] = useState(65);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 0 : prev + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faBrain} className="text-white text-sm" />
            </div>
            <span className="text-xl font-bold gradient-text">SolidAI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-300 hover:text-white transition">Features</a>
            <a href="#agents" className="text-sm text-gray-300 hover:text-white transition">Agents</a>
            <a href="/solidai/docs" className="text-sm text-gray-300 hover:text-white transition">Docs</a>
            <a href="/solid-llm/about" className="text-sm text-gray-300 hover:text-white transition">About</a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/beta"
              className="hidden md:block px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm font-medium transition"
            >
              Get Started
            </a>
            <MobileNav
              dark
              links={[
                { label: "Features", href: "#features" },
                { label: "Agents", href: "#agents" },
                { label: "Docs", href: "/solidai/docs" },
                { label: "About", href: "/solid-llm/about" },
              ]}
              cta={{ label: "Get Started", href: "/beta" }}
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 mb-8">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              In Active Development
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The Future of AI in<br />
              <span className="gradient-text">Africa & Beyond</span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              We're building sector-specific AI agents for African SMEs — practical
              tools for agriculture, health, education, finance, and beyond.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a href="/beta" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition glow">
                Request Early Access
              </a>
              <a href="/solidai/docs" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 rounded-full text-lg font-semibold transition">
                View Documentation
              </a>
            </div>

            <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faShieldAlt} />
                <span>Privacy-Conscious Design</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faRocket} />
                <span>Edge-First Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faUsers} />
                <span>8 Sectors Targeted</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Built for <span className="gradient-text">Modern AI</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to integrate cutting-edge AI into your applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={feature.icon} className="text-blue-400 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Demo Section */}
      <section id="agents" className="py-20 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Preview: <span className="gradient-text">SolidAI Agents</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A working preview of the interface — sector agents are still in development.
            </p>
          </motion.div>

          <div className="glass-card rounded-2xl p-8 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Agent Status</h3>
              <div className="flex flex-wrap gap-6">
                <AgentStatusBadge status="online" agentName="Agriculture Agent" />
                <AgentStatusBadge status="busy" agentName="Health Agent" />
                <AgentStatusBadge status="online" agentName="Education Agent" />
                <AgentStatusBadge status="offline" agentName="Finance Agent" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Task Progress</h3>
              <div className="space-y-4 max-w-2xl">
                <TaskProgressBar taskName="Processing farm data" progress={progress} status="active" />
                <TaskProgressBar taskName="Generating health report" progress={100} status="completed" />
                <TaskProgressBar taskName="Analyzing education patterns" progress={45} status="active" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Switch Agent</h3>
              <QuickAgentSwitcher
                agents={agents}
                selectedAgentId={selectedAgent}
                onSelect={setSelectedAgent}
              />
              <p className="text-sm text-gray-400 mt-2">
                Currently selected: {agents.find(a => a.id === selectedAgent)?.name}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 glow"
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to build the <span className="gradient-text">future</span>?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Join our early access list and help shape which SolidAI agents we
              build and ship first.
            </p>
            <a
              href="/beta"
              className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition glow"
            >
              Request Early Access
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md flex items-center justify-center">
                <FontAwesomeIcon icon={faBrain} className="text-white text-xs" />
              </div>
              <span className="font-bold gradient-text">SolidAI</span>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Solid Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="/" className="text-sm text-gray-400 hover:text-white transition">Home</a>
              <a href="/solidai/docs" className="text-sm text-gray-400 hover:text-white transition">Docs</a>
              <a href="/#contact" className="text-sm text-gray-400 hover:text-white transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
