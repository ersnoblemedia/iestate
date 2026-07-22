"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Shield,
  ArrowRight,
  Play,
  KeyRound,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Keycard3D } from "@/components/3DKeycard";
import { FeaturePillars } from "@/components/FeaturePillars";
import { HowItWorks } from "@/components/HowItWorks";
import { InteractiveTextPassDemo } from "@/components/InteractiveTextPassDemo";
import { RequestDemoModal } from "@/components/RequestDemoModal";
import { FooterContact } from "@/components/FooterContact";

export default function HomePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const scrollToDemo = () => {
    const demoEl = document.getElementById("live-demo");
    if (demoEl) {
      demoEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#04090C] text-slate-100 font-sans selection:bg-[#C59A4E] selection:text-[#081216] relative overflow-x-hidden">
      {/* Background Radial Glow Layer */}
      <div className="fixed inset-0 bg-navy-radial pointer-events-none -z-10" />
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none -z-10" />

      {/* Navigation Bar */}
      <Navbar onRequestDemo={() => setIsDemoModalOpen(true)} />

      {/* HERO SECTION */}
      <section className="relative pt-12 lg:pt-20 pb-16 lg:pb-28 overflow-hidden">
        {/* Subtle Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#C59A4E]/15 via-[#00B4D8]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Text Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Tagline Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C59A4E]/10 border border-[#C59A4E]/30 text-[#E5C158] text-xs sm:text-sm font-semibold tracking-wide shadow-sm"
              >
                <Shield className="w-4 h-4 text-[#E5C158]" />
                <span>Smarter Gate Access for Modern Estates</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] animate-ping" />
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
              >
                Seamless Security &{" "}
                <span className="text-gold-gradient">VIP Access Management.</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
              >
                A digital gate access and visitor management solution for residential estates, luxury apartments, and commercial premises by Beacon VIP Concierge Limited (BVCL).
              </motion.p>

              {/* Hero Call to Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                {/* Primary CTA */}
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="w-full sm:w-auto py-4 px-8 rounded-2xl font-bold text-sm sm:text-base text-[#081216] bg-gold-metallic hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-[#C59A4E]/30 flex items-center justify-center gap-2.5 group"
                >
                  <KeyRound className="w-5 h-5 text-[#081216]" />
                  <span>Get Started for Your Estate</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secondary CTA */}
                <button
                  onClick={scrollToDemo}
                  className="w-full sm:w-auto py-4 px-7 rounded-2xl font-semibold text-sm sm:text-base text-white bg-white/5 hover:bg-white/10 border border-white/15 backdrop-blur-md transition-all flex items-center justify-center gap-2.5 group"
                >
                  <div className="w-7 h-7 rounded-full bg-[#00B4D8]/20 border border-[#00B4D8]/40 flex items-center justify-center text-[#00B4D8] group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                  <span>Test Text Pass Demo</span>
                </button>
              </motion.div>

              {/* Trust Metrics Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center lg:text-left max-w-md mx-auto lg:mx-0"
              >
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-white font-mono">&lt; 1.2s</p>
                  <p className="text-[11px] text-slate-400">Gate Verification Speed</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-[#E5C158] font-mono">100%</p>
                  <p className="text-[11px] text-slate-400">Audit Traceability</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-extrabold text-[#00B4D8] font-mono">Zero</p>
                  <p className="text-[11px] text-slate-400">Gate Intercom Delay</p>
                </div>
              </motion.div>
            </div>

            {/* Hero 3D Keycard Visual Stage (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center"
            >
              <Keycard3D />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURE PILLARS SECTION (5 PILLARS) */}
      <FeaturePillars onRequestDemo={() => setIsDemoModalOpen(true)} />

      {/* HOW IT WORKS WORKFLOW SECTION */}
      <HowItWorks />

      {/* LIVE INTERACTIVE ACCESS DEMO WIDGET SECTION */}
      <section id="live-demo" className="py-20 relative bg-gradient-to-b from-[#081216] via-[#04090C] to-[#081216]">
        <InteractiveTextPassDemo />
      </section>

      {/* FOOTER & CONTACT CARD SECTION */}
      <FooterContact onRequestDemo={() => setIsDemoModalOpen(true)} />

      {/* CONSULTATION DEMO MODAL */}
      <RequestDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}
