"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Shield, Zap, Users } from 'lucide-react';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, redirect to the Streamlit app after "signup"
    window.location.href = "http://localhost:8501";
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-200 flex flex-col justify-center items-center px-6 py-12">
      <Link href="/" className="mb-8 flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <span className="font-bold text-white text-2xl tracking-tight">CV Extractor</span>
      </Link>

      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Benefits */}
        <div className="hidden lg:block space-y-8">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Stop wasting hours on <span className="text-blue-400">manual data entry</span>.
          </h1>
          <p className="text-xl text-slate-400">
            Join 500+ recruitment agencies using AI to automate their candidate pipeline.
          </p>
          
          <div className="space-y-6">
            {[
              { icon: Zap, title: "10x Faster Processing", desc: "Extract full CV data in under 3 seconds per document." },
              { icon: Shield, title: "Bank-Grade Security", desc: "Your candidate data is encrypted and remains strictly private." },
              { icon: Users, title: "Collaborative Workspace", desc: "Share candidate profiles across your entire recruitment team." }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/50"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{benefit.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
            <p className="text-slate-400 text-sm">Start your 14-day free trial today</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white"
                placeholder="Cris Doe"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Work Email</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white"
                placeholder="cris@cd-international.de"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider ml-1">Password</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-start gap-2 px-1">
              <input type="checkbox" className="mt-1 rounded bg-slate-950 border-slate-800 text-blue-600 focus:ring-blue-500" required />
              <span className="text-xs text-slate-400">
                I agree to the <Link href="#" className="text-blue-400 hover:underline">Terms of Service</Link> and <Link href="#" className="text-blue-400 hover:underline">Privacy Policy</Link>
              </span>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group mt-2"
            >
              Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="text-center mt-8 text-sm text-slate-400">
            Already have an account? <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">Sign In</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
