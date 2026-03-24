"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/i18n/context";
import { languages, type Locale } from "@/i18n/translations";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === locale)!;

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border border-[var(--color-border)] hover:border-[#3b82f6]/50 transition"
        style={{ background: "rgba(30, 41, 59, 0.6)" }}
      >
        <span className="text-base">{current.flag}</span>
        <span className="text-[#94a3b8] hidden sm:inline">{current.code.toUpperCase()}</span>
        <svg
          className={`w-3 h-3 text-[#64748b] transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 z-50 min-w-[160px] py-1 rounded-xl border border-[var(--color-border)] overflow-hidden"
            style={{
              background: "rgba(15, 23, 42, 0.95)",
              backdropFilter: "blur(16px)",
            }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLocale(lang.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition hover:bg-white/5 ${
                  locale === lang.code ? "text-[#60a5fa] bg-white/5" : "text-[#94a3b8]"
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.label}</span>
                {locale === lang.code && (
                  <svg className="w-4 h-4 ml-auto text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
