"use client";

import { motion } from "framer-motion";
import { Bot, FileText, Zap, Shield, Sparkles, BrainCircuit } from "lucide-react";

export default function FloatingElements() {
  const elements = [
    { icon: <Bot className="w-8 h-8" />, color: "text-blue-500/35", x: "10%", y: "20%", delay: 0 },
    { icon: <FileText className="w-10 h-10" />, color: "text-purple-500/35", x: "85%", y: "15%", delay: 1 },
    { icon: <Zap className="w-6 h-6" />, color: "text-amber-500/35", x: "5%", y: "70%", delay: 2 },
    { icon: <Shield className="w-8 h-8" />, color: "text-emerald-500/35", x: "90%", y: "75%", delay: 3 },
    { icon: <Sparkles className="w-12 h-12" />, color: "text-cyan-500/35", x: "75%", y: "60%", delay: 1.5 },
    { icon: <BrainCircuit className="w-9 h-9" />, color: "text-indigo-400/35", x: "50%", y: "85%", delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map((el, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: [0, 20, -20, 0],
            y: [0, -30, 30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
          className={`absolute ${el.color}`}
          style={{ left: el.x, top: el.y }}
        >
          {el.icon}
        </motion.div>
      ))}
    </div>
  );
}
