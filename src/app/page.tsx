'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { 
  Upload, FileText, Settings, Shield, Users, Zap, 
  ChevronRight, Github, Cpu, CheckCircle2, Clock 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <LiveProcessingSection />
      <FeaturesSection />
      <WorkflowSection />
      <TrustSection />
      <CTASection />
      <Footer />
    </div>
  );
}

// --- COMPONENTS ---

function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0B1120]/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-white text-lg">CV Extractor</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#workflow" className="hover:text-white transition-colors">Workflow</a>
          <a href="http://localhost:8501" className="hover:text-white transition-colors">Sign In</a>
          <a href="http://localhost:8501" className="hover:text-white transition-colors px-4 py-2 border border-slate-700 rounded-lg hover:border-blue-500 transition-all">Sign Up</a>
        </div>

        {/* React Bits added: MagneticButton wraps Deploy */}
        <MagneticButton strength={40}>
          <a href="http://localhost:8501" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-all flex items-center gap-2">
            Get Started <ChevronRight className="w-4 h-4" />
          </a>
        </MagneticButton>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Now with Ollama Support
          </motion.div>
          
          {/* React Bits added: DecryptedText on hero headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
          >
            <DecryptedText text="From " className="" />
            <span className="text-blue-400"><DecryptedText text="Lebenslauf" className="text-blue-400" /></span>
            <DecryptedText text=" to placed candidate in seconds" className="" />
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-lg"
          >
            AI-powered CV extraction and template population for recruitment agencies. 
            Process candidates like <span className="text-slate-200">Khasanov Yusuf</span> automatically.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="http://localhost:8501">
              <ShinyButton className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-blue-600/25">
                Start Processing <Zap className="w-5 h-5" />
              </ShinyButton>
            </a>
            <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all border border-slate-700">
              View Documentation
            </button>
          </motion.div>
          
          {/* AI Provider Marquee */}
          <div className="pt-8 border-t border-slate-800">
            <p className="text-xs text-slate-500 mb-4 uppercase tracking-wider">Supported AI Providers</p>
            <ProviderMarquee />
          </div>
        </div>

        {/* Right: App Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <SpotlightCard className="bg-slate-900/50 border-slate-800 p-6 rounded-2xl">
            {/* React Bits added: Particles as background layer */}
            <Particles className="absolute inset-0 pointer-events-none opacity-30" quantity={40} color="#3b82f6" />
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs text-slate-500 font-mono">CV Extractor & Template Populator</span>
            </div>
            
            {/* Mock UI */}
            <div className="space-y-4">
              <div className="flex gap-2 border-b border-slate-800 pb-4">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full border border-blue-600/20">Process CV</span>
                <span className="px-3 py-1 text-slate-500 text-xs">Templates</span>
                <span className="px-3 py-1 text-slate-500 text-xs">Settings</span>
                <span className="px-3 py-1 text-slate-500 text-xs">Identcheck</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <label className="text-xs text-slate-400">AI Provider</label>
                  <div className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white flex justify-between items-center">
                    Kimi K2 <ChevronRight className="w-4 h-4 rotate-90 text-slate-500" />
                  </div>
                  
                  <label className="text-xs text-slate-400">Job Profile</label>
                  <div className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white flex justify-between items-center">
                    Schweißer <ChevronRight className="w-4 h-4 rotate-90 text-slate-500" />
                  </div>
                </div>
                
                <div className="border-2 border-dashed border-slate-700 rounded-lg p-4 flex flex-col items-center justify-center bg-slate-800/30">
                  <Upload className="w-8 h-8 text-slate-600 mb-2" />
                  <span className="text-xs text-slate-500">Drop CV here</span>
                </div>
              </div>
              
              <a href="http://localhost:8501" className="w-full">
                <ShinyButton className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all">
                  <Zap className="w-4 h-4" /> Process CV
                </ShinyButton>
              </a>
            </div>
          </SpotlightCard>
          
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="text-white font-medium text-sm">Khasanov Yusuf</div>
                <div className="text-xs text-slate-400">Processed in 8.2s</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

interface Candidate {
  id: number;
  name: string;
  status: 'completed' | 'processing' | 'pending';
  time: string;
  role: string;
}

function LiveProcessingSection() {
  const [candidates, setCandidates] = useState<Candidate[]>([
    { id: 1, name: 'Khasanov Yusuf', status: 'completed', time: '24.03.2026 16:55', role: 'Schweißer' },
    { id: 2, name: 'Marina Schmidt', status: 'processing', time: 'Just now', role: 'Projektleiter' },
    { id: 3, name: 'Thomas Weber', status: 'pending', time: 'Queued', role: 'Bauleiter' },
  ]);

  // Simulate live processing
  useEffect(() => {
    const interval = setInterval(() => {
      setCandidates(prev => {
        const newCandidates = [...prev];
        // Update processing to completed
        const processing = newCandidates.find(c => c.status === 'processing');
        if (processing) {
          processing.status = 'completed';
          processing.time = new Date().toLocaleString('de-DE');
        }
        // Add new candidate occasionally
        if (Math.random() > 0.7) {
          const names = ['Elena Müller', 'Stefan Hoffmann', 'Anna Klein', 'Markus Bauer'];
          const roles = ['Schweißer', 'Ingenieur', 'Konstrukteur', 'Monteur'];
          newCandidates.unshift({
            id: Date.now(),
            name: names[Math.floor(Math.random() * names.length)],
            status: 'processing',
            time: 'Just now',
            role: roles[Math.floor(Math.random() * roles.length)]
          });
          if (newCandidates.length > 5) newCandidates.pop();
        }
        return newCandidates;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-slate-900/30 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">Real-time Candidate Processing</h2>
          <p className="text-slate-400 mb-6">
            Watch as CVs are automatically extracted, analyzed, and matched to job profiles. 
            Your recent candidates appear instantly with full audit trail.
          </p>
          <div className="flex gap-4 text-sm flex-wrap">
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-4 h-4" /> Average processing time: 8.2s
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Shield className="w-4 h-4" /> GDPR Compliant
            </div>
          </div>
        </div>

        {/* Animated List - Mimicking Your Sidebar */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-semibold flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" /> Recent Candidates
            </h3>
            <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">Live</span>
          </div>
          
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {candidates.map((candidate) => (
                <motion.div
                  key={candidate.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center justify-between p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-blue-500/30 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      candidate.status === 'completed' ? 'bg-green-500/20' : 
                      candidate.status === 'processing' ? 'bg-blue-500/20' : 'bg-slate-700'
                    }`}>
                      {candidate.status === 'completed' ? (
                        <FileText className="w-5 h-5 text-green-400" />
                      ) : candidate.status === 'processing' ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                          <Cpu className="w-5 h-5 text-blue-400" />
                        </motion.div>
                      ) : (
                        <Clock className="w-5 h-5 text-slate-500" />
                      )}
                    </div>
                    <div>
                      <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                        {candidate.name}
                      </div>
                      <div className="text-xs text-slate-500 flex items-center gap-2">
                        <span className="px-1.5 py-0.5 bg-slate-700 rounded text-slate-300">{candidate.role}</span>
                        <span>{candidate.time}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`text-xs font-medium ${
                    candidate.status === 'completed' ? 'text-green-400' : 
                    candidate.status === 'processing' ? 'text-blue-400' : 'text-slate-500'
                  }`}>
                    {candidate.status === 'completed' ? 'Ready' : 
                     candidate.status === 'processing' ? 'Extracting...' : 'Queued'}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <button className="w-full mt-4 py-3 text-sm text-slate-500 hover:text-white border border-dashed border-slate-700 hover:border-slate-500 rounded-lg transition-all flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" /> Clear Local History
          </button>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      title: "Multi-AI Engine",
      desc: "Choose from OpenAI, Gemini, Kimi K2, DeepSeek, or local Ollama models"
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: "Identcheck Ready",
      desc: "Built-in identity verification and compliance checks for German market"
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-400" />,
      title: "Template Population",
      desc: "Auto-fill your existing DOCX templates. No reformatting needed."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Job Profile Matching",
      desc: "Match candidates to specific roles like Schweißer, Bauleiter, or Ingenieur"
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Built for Recruitment Agencies</h2>
          <p className="text-slate-400">Everything you need to process CVs at scale</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <SpotlightCard key={i} className="p-6 bg-slate-900/50 border-slate-800">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 border border-blue-500/20">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400">{feature.desc}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  const steps = [
    { step: "01", title: "Upload", desc: "Drop CV PDF or DOCX. 50MB limit." },
    { step: "02", title: "Configure", desc: "Select AI model and Job Profile." },
    { step: "03", title: "Process", desc: "AI extracts structured data." },
    { step: "04", title: "Export", desc: "Populated template ready for download." }
  ];

  return (
    <section id="workflow" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-16">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-5xl font-bold text-slate-800 mb-4">{s.step}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm">{s.desc}</p>
              {i < 3 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-blue-600/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section id="security" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Self-hosted. Private. Compliant.</h2>
          <p className="text-slate-400">
            Deploy on your own infrastructure. Use your own API keys. 
            All data stays within your environment. Perfect for German recruitment 
            compliance requirements.
          </p>
          <div className="space-y-4">
            {[
              "Bring your own API keys (OpenAI, Gemini, etc.)",
              "Local Ollama support for air-gapped environments",
              "GDPR compliant data processing",
              "Deploy to Vercel, Docker, or Firebase"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 font-mono text-sm">
          <div className="flex items-center gap-2 mb-4 text-slate-500 border-b border-slate-800 pb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2">terminal</span>
          </div>
          <div className="space-y-2 text-slate-400">
            <p><span className="text-green-400">$</span> git clone https://github.com/yourname/cv-extractor.git</p>
            <p><span className="text-green-400">$</span> cd cv-extractor</p>
            <p><span className="text-green-400">$</span> pip install -r requirements.txt</p>
            <p><span className="text-green-400">$</span> cp .settings.json.example .settings.json</p>
            <p><span className="text-blue-400"># Add your API keys</span></p>
            <p><span className="text-green-400">$</span> streamlit run app.py</p>
            <p className="text-slate-500 mt-4">Ready on http://localhost:8501</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-blue-900/20 to-slate-900/50 border border-blue-500/20 rounded-3xl p-12">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to automate your CV processing?</h2>
        <p className="text-slate-400 mb-8 text-lg">
          Join recruitment agencies saving 20+ hours per week on candidate data entry.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="http://localhost:8501">
            <ShinyButton className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/25 cta-pulse">
              Launch Local App
            </ShinyButton>
          </a>
          <a href="http://localhost:8501" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all border border-slate-700">
            Sign In
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-white">CV Extractor</span>
        </div>
        <div className="text-slate-500 text-sm">
          © 2026 CV Extractor. Built for recruitment professionals.
        </div>
        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Impressum</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

// --- UTILITY COMPONENTS ---

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 ${className}`}
    >
      {isHovering && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
          }}
        />
      )}
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}

function ProviderMarquee() {
  const providers = ['OpenAI', 'Gemini', 'Anthropic', 'Mistral', 'DeepSeek', 'Grok', 'Kimi K2', 'Qwen', 'Ollama'];
  
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        className="flex gap-4 pr-4"
      >
        {[...providers, ...providers].map((provider, i) => (
          <div 
            key={i} 
            className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm whitespace-nowrap hover:bg-blue-500/20 transition-colors cursor-default"
          >
            {provider}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ─── REACT BITS COMPONENTS (inline implementations) ──────────────────────────

// React Bits added: DecryptedText — scramble-to-reveal animation on mount
function DecryptedText({ text, className = '' }: { text: string; className?: string }) {
  const [displayed, setDisplayed] = useState(text);
  const [done, setDone] = useState(false);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';

  useEffect(() => {
    if (done) return;
    let iteration = 0;
    const totalFrames = text.length * 4;
    const interval = setInterval(() => {
      setDisplayed(
        text
          .split('')
          .map((char, idx) => {
            if (char === ' ') return ' ';
            if (idx < Math.floor(iteration / 4)) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      iteration++;
      if (iteration > totalFrames) {
        clearInterval(interval);
        setDisplayed(text);
        setDone(true);
      }
    }, 30);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return <span className={className}>{displayed}</span>;
}

// React Bits added: MagneticButton — cursor-attracted magnetic hover effect
function MagneticButton({ children, strength = 40 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * (strength / 100)}px, ${y * (strength / 100)}px)`;
  }, [strength]);

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0, 0)';
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block', transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)' }}
    >
      {children}
    </div>
  );
}

// React Bits added: Particles — floating dot canvas background layer
function Particles({
  className = '',
  quantity = 50,
  color = '#3b82f6',
}: {
  className?: string;
  quantity?: number;
  color?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth * dpr;
      canvas.height = parent.offsetHeight * dpr;
      canvas.style.width = parent.offsetWidth + 'px';
      canvas.style.height = parent.offsetHeight + 'px';
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const dots = Array.from({ length: quantity }, () => ({
      x: Math.random() * (canvas.width / dpr),
      y: Math.random() * (canvas.height / dpr),
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width / dpr) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height / dpr) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [quantity, color]);

  return <canvas ref={canvasRef} className={className} />;
}

// React Bits added: ShinyButton — shimmer sweep animation on hover
function ShinyButton({
  children,
  className = '',
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative overflow-hidden ${className}`}
      whileHover="hover"
    >
      <motion.span
        variants={{
          hover: { x: ['-200%', '200%'], transition: { duration: 0.6, ease: 'easeInOut' } },
        }}
        className="pointer-events-none absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
      {children}
    </motion.button>
  );
}
