"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  Shield,
  Eye,
  Zap,
  Lock,
  Building2,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  KeyRound,
  Award,
  ChevronRight,
  Compass,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { FooterContact } from "@/components/FooterContact";
import { RequestDemoModal } from "@/components/RequestDemoModal";

export default function AboutPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Mouse tilt tracking for 3D Crest
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    damping: 20,
    stiffness: 150,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), {
    damping: 20,
    stiffness: 150,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="min-h-screen bg-[#04090C] text-slate-100 font-sans selection:bg-[#C59A4E] selection:text-[#081216] relative overflow-x-hidden">
      {/* Background Radial Glow Layer */}
      <div className="fixed inset-0 bg-navy-radial pointer-events-none -z-10" />
      <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none -z-10" />

      {/* Reusable Navbar with activePage="about" */}
      <Navbar onRequestDemo={() => setIsDemoModalOpen(true)} activePage="about" />

      {/* HERO SECTION */}
      <section className="relative pt-12 lg:pt-20 pb-16 lg:pb-24 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#C59A4E]/15 via-[#00B4D8]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Text Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C59A4E]/10 border border-[#C59A4E]/30 text-[#E5C158] text-xs sm:text-sm font-semibold tracking-wide shadow-sm"
              >
                <Shield className="w-4 h-4 text-[#E5C158]" />
                <span>ABOUT iESTATE BY BVCL</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] animate-ping" />
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
              >
                Where Luxury Hospitality Meets{" "}
                <span className="text-gold-gradient">Modern Gate Security.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
              >
                Designed by Beacon VIP Concierge Limited (BVCL) to redefine how residents, guests, and estate managers experience gate access—replacing manual congestion with effortless, encrypted text PIN pass generation.
              </motion.p>

              {/* Hero Action CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="w-full sm:w-auto py-4 px-8 rounded-2xl font-bold text-sm sm:text-base text-[#081216] bg-gold-metallic hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-[#C59A4E]/30 flex items-center justify-center gap-2.5"
                >
                  <KeyRound className="w-5 h-5 text-[#081216]" />
                  <span>Schedule BVCL Executive Briefing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>

            {/* Hero 3D Floating Metallic BVCL Crest Visual (5 cols) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center perspective-1000 py-6"
            >
              <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="relative w-full max-w-sm aspect-square rounded-3xl p-8 glass-panel border border-[#C59A4E]/40 shadow-2xl shadow-black flex flex-col items-center justify-between overflow-hidden cursor-pointer group"
              >
                {/* Metallic Mesh Background Overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#C59A4E]/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#00B4D8]/20 rounded-full blur-2xl pointer-events-none" />

                {/* Top Badge */}
                <div className="relative z-10 w-full flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E5C158] bg-[#C59A4E]/10 px-2.5 py-1 rounded-full border border-[#C59A4E]/30">
                    BVCL VIP MATRIX
                  </span>
                  <ShieldCheck className="w-5 h-5 text-[#00B4D8]" />
                </div>

                {/* Center Floating Crest Icon */}
                <div className="relative z-10 my-auto flex flex-col items-center text-center space-y-3">
                  <div className="relative w-28 h-28 rounded-3xl bg-gradient-to-br from-[#E5C158] via-[#C59A4E] to-[#9A7230] p-[2px] shadow-2xl shadow-[#C59A4E]/30 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                    <div className="w-full h-full bg-[#081216] rounded-[22px] flex items-center justify-center p-3 relative overflow-hidden">
                      <Image src="/BVCL_logo.png" alt="BVCL Official Logo" width={88} height={88} className="object-contain drop-shadow-[0_0_15px_rgba(229,193,88,0.5)]" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-shimmer pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight font-sans">
                      BEACON VIP
                    </h2>
                    <p className="text-xs font-mono font-semibold text-[#C59A4E] tracking-widest uppercase">
                      CONCIERGE LIMITED
                    </p>
                  </div>
                </div>

                {/* Bottom Matrix Indicator */}
                <div className="relative z-10 w-full pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>AES-256 SECURED</span>
                  <span className="text-emerald-400 font-bold">100% AUDIT TRACEABLE</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE ORIGIN & PURPOSE (2-COLUMN GLASS SECTION) */}
      <section className="py-20 relative bg-[#04090C]/90 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Brand Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00B4D8]/10 border border-[#00B4D8]/30 text-[#00B4D8] text-xs font-semibold">
                <Compass className="w-3.5 h-3.5 text-[#00B4D8]" />
                <span>OUR ORIGIN & PHILOSOPHY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Evolving Estate Security from <span className="text-gold-gradient">Congested Logbooks</span> to Pure VIP Discretion.
              </h2>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  For years, luxury gated residential communities, commercial hubs, and high-rise apartment towers relied on outdated, manual paper logbooks and noisy gate intercom calls. The result? Long queues at the gate, frustrated guests, security vulnerabilities, and zero audit traceability.
                </p>
                <p>
                  Recognizing this fundamental friction, <strong className="text-white">Beacon VIP Concierge Limited (BVCL)</strong> engineered <strong className="text-[#E5C158]">iEstate</strong>. We approached access control not merely as a gate barrier system, but as an extension of premier VIP hospitality and bulletproof security.
                </p>
                <p>
                  By standardizing <strong className="text-white">text-based access codes (PINs)</strong> delivered directly via SMS and WhatsApp, iEstate eliminates guest friction, respects visitor privacy, and gives estate management boards 100% real-time audit control over every entry.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-xs text-slate-400">Target Resolution</p>
                  <p className="text-base font-bold text-white font-mono mt-0.5">&lt; 1.2s Verification</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-xs text-slate-400">Pass Delivery</p>
                  <p className="text-base font-bold text-[#E5C158] font-mono mt-0.5">WhatsApp / SMS</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                  <p className="text-xs text-slate-400">Gate Audit Trail</p>
                  <p className="text-base font-bold text-[#00B4D8] font-mono mt-0.5">100% Real-time</p>
                </div>
              </div>
            </div>

            {/* Right Column: Core Values 3D Glass Card Stack */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono font-bold text-[#C59A4E] uppercase tracking-widest mb-2">
                CORE GUIDING VALUES
              </div>

              {[
                {
                  title: "1. Absolute Discretion",
                  desc: "Quiet, non-intrusive access management that preserves resident and VIP visitor privacy without broadcast intercom calls.",
                  icon: Eye,
                  color: "gold",
                },
                {
                  title: "2. Instant Verification Speed",
                  desc: "Sub-1.2 second text code validation on guard handheld terminals to ensure zero gate queue buildup.",
                  icon: Zap,
                  color: "cyan",
                },
                {
                  title: "3. Unalterable Traceability",
                  desc: "Every visitor PIN generation, timestamp, and guard verification is logged permanently in real-time security audit trails.",
                  icon: Lock,
                  color: "gold",
                },
              ].map((value, idx) => {
                const Icon = value.icon;
                const isGold = value.color === "gold";

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-[#C59A4E]/50 transition-all group flex items-start gap-4"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isGold
                          ? "bg-[#C59A4E]/15 border border-[#C59A4E]/40 text-[#E5C158]"
                          : "bg-[#00B4D8]/15 border border-[#00B4D8]/40 text-[#00B4D8]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#E5C158] transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">{value.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM CAPABILITIES GRID (STAKEHOLDERS) */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#E5C158] font-mono text-xs tracking-widest uppercase font-semibold bg-[#C59A4E]/10 px-3.5 py-1 rounded-full border border-[#C59A4E]/30">
              TRIPARTITE ACCESS MATRIX
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
              Engineered for <span className="text-gold-gradient">Every Stakeholder</span> in the Estate
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              iEstate provides specialized, intuitive interfaces for property managers, residents, and gate security personnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* For Estate Managers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#C59A4E]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#C59A4E]/15 border border-[#C59A4E]/40 flex items-center justify-center text-[#E5C158] mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>

                <div className="inline-block text-[10px] font-mono font-bold text-[#E5C158] bg-[#C59A4E]/10 px-2.5 py-0.5 rounded border border-[#C59A4E]/30 uppercase mb-2">
                  FOR ESTATE MANAGERS & EXCOS
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  Administrative Oversight & Complete Traffic Visibility
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  Estate executive committees gain central command over gate operations. Audit visitor entry patterns, monitor guard shift performance, blacklist unverified entities, and review historical entry logs effortlessy.
                </p>

                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C59A4E] shrink-0" />
                    <span>Real-time traffic analytics dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C59A4E] shrink-0" />
                    <span>Instant security blacklist broadcast</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C59A4E] shrink-0" />
                    <span>Automated monthly visitor audit exports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C59A4E] shrink-0" />
                    <span>Facility manager & Exco permission tiers</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-semibold text-[#E5C158]">
                <span>Executive Command</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>

            {/* For Residents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#00B4D8]/30 bg-[#0E1C22]/80 hover:border-[#00B4D8]/60 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#00B4D8]/15 border border-[#00B4D8]/40 flex items-center justify-center text-[#00B4D8] mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>

                <div className="inline-block text-[10px] font-mono font-bold text-[#00B4D8] bg-[#00B4D8]/10 px-2.5 py-0.5 rounded border border-[#00B4D8]/30 uppercase mb-2">
                  FOR RESIDENTS & TENANTS
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  Effortless Guest Text PIN Pass Generation
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  Residents issue visitor access passes in seconds directly from their phone. Text codes are dispatched via WhatsApp or SMS, eliminating awkward gate phone calls and keeping home arrivals peaceful.
                </p>

                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0" />
                    <span>WhatsApp / SMS text pass dispatch</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0" />
                    <span>Instant push notifications on guest entry</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0" />
                    <span>Timed code expirations (1–24 hours)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0" />
                    <span>Domestic staff & artisan pass management</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-semibold text-[#00B4D8]">
                <span>Resident Convenience</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>

            {/* For Security Personnel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#C59A4E]/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#C59A4E]/15 border border-[#C59A4E]/40 flex items-center justify-center text-[#E5C158] mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>

                <div className="inline-block text-[10px] font-mono font-bold text-[#E5C158] bg-[#C59A4E]/10 px-2.5 py-0.5 rounded border border-[#C59A4E]/30 uppercase mb-2">
                  FOR GATE SECURITY OFFICERS
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  Fast, Confident Text Code Gate Verification
                </h3>

                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  Gate security guards use handheld terminals or tablets to type and verify text PINs in under 1.2 seconds. No friction, no argument—instant visual confirmation of resident pre-approval.
                </p>

                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C59A4E] shrink-0" />
                    <span>Simple 6-digit text PIN input interface</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C59A4E] shrink-0" />
                    <span>Offline-resilient local cache sync</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C59A4E] shrink-0" />
                    <span>Automated barrier/gate trigger integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C59A4E] shrink-0" />
                    <span>Vehicle plate tag match verification</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-semibold text-[#E5C158]">
                <span>Guard Efficiency</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST & LEADERSHIP BANNER */}
      <section className="py-16 relative bg-[#060E12] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C59A4E]/15 text-[#E5C158] text-xs font-bold uppercase">
                <Award className="w-3.5 h-3.5" />
                <span>BEACON VIP COMMITMENT</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Backed by Uncompromising Concierge Standards
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Beacon VIP Concierge Limited (BVCL) brings decades of combined security engineering, luxury hospitality management, and technology deployment across Nigeria.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-panel p-5 rounded-2xl border border-white/10 text-center">
                <p className="text-3xl font-extrabold text-[#E5C158] font-mono">99.99%</p>
                <p className="text-xs font-bold text-white mt-1">Platform Uptime SLA</p>
                <p className="text-[10px] text-slate-400 mt-1">Cloud redundant gate synchronization</p>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-white/10 text-center">
                <p className="text-3xl font-extrabold text-[#00B4D8] font-mono">AES-256</p>
                <p className="text-xs font-bold text-white mt-1">Data Confidentiality</p>
                <p className="text-[10px] text-slate-400 mt-1">Bank-grade encrypted audit trails</p>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-white/10 text-center">
                <p className="text-3xl font-extrabold text-white font-mono">24/7/365</p>
                <p className="text-xs font-bold text-white mt-1">Dedicated Client Care</p>
                <p className="text-[10px] text-slate-400 mt-1">Direct BVCL concierge response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT CARD SECTION */}
      <FooterContact onRequestDemo={() => setIsDemoModalOpen(true)} />

      {/* DEMO REQUEST MODAL */}
      <RequestDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}
