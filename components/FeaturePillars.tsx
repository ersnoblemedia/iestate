"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  KeyRound,
  ShieldCheck,
  Building2,
  Smartphone,
  Scan,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Shield,
  MessageSquare,
} from "lucide-react";

export const FeaturePillars: React.FC<{ onRequestDemo: () => void }> = ({ onRequestDemo }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      id: 1,
      title: "Visitor Access Codes",
      shortDesc: "Instant secure text access PIN generation for guests sent directly via WhatsApp or SMS.",
      fullDesc: "Eliminate embarrassing gate delays. Residents generate single-use, timed text access PINs for family, delivery riders, contractors, or VIP event guests in seconds. Codes expire automatically after use or upon designated time limits.",
      icon: KeyRound,
      metrics: "Instant PIN Generation (< 3s)",
      badge: "TEXT PIN ACCESS",
      highlights: [
        "Timed pass expirations (1 to 24 hours)",
        "WhatsApp & SMS one-click text pass sharing",
        "Multi-guest event code batching",
        "Vehicle license tag pairing",
      ],
      color: "gold",
    },
    {
      id: 2,
      title: "Fast Gate Verification",
      shortDesc: "Quick, confident guard verification workflow with handheld or tablet barrier integration.",
      fullDesc: "Equip estate security guards with an intuitive, foolproof gate verification app. In less than 1.2 seconds, guards type or verify visitor text PINs, confirm arrival details, vehicle registration, and resident approval without needing to make disruptive intercom calls.",
      icon: Scan,
      metrics: "< 1.2s Gate Verification Speed",
      badge: "GUARD MOBILE SYNC",
      highlights: [
        "Offline-resilient local gate cache",
        "Instant text PIN verification screen",
        "Automated barrier/gate trigger integration",
        "Guard photo audit & entry timestamping",
      ],
      color: "cyan",
    },
    {
      id: 3,
      title: "Better Estate Security",
      shortDesc: "Complete auditability, entry traceability, and real-time blacklisting capabilities.",
      fullDesc: "Gain total visibility into every vehicle and pedestrian crossing your estate gates. Every entry and exit is logged with timestamps, resident approval references, and guard verification records to build an unalterable security audit trail.",
      icon: ShieldCheck,
      metrics: "100% Traceable Audit Log",
      badge: "ENTERPRISE AUDIT",
      highlights: [
        "Real-time resident push notifications upon arrival",
        "Estate exco security oversight dashboard",
        "Instant flag & blacklist alert matrix",
        "Overnight visitor stay reports",
      ],
      color: "gold",
    },
    {
      id: 4,
      title: "Resident Convenience",
      shortDesc: "Eliminate gate calls, endless waiting, and noisy intercom systems for effortless guest entry.",
      fullDesc: "Empower residents with smooth digital access management from their smartphone. Track expected guests, receive instant entry alerts, pre-approve frequent visitors, and manage household staff passes without picking up the intercom.",
      icon: Smartphone,
      metrics: "Zero Intercom Gate Delay",
      badge: "RESIDENT APP",
      highlights: [
        "Frequent visitor auto-pass renewal",
        "Artisan & domestic staff pass management",
        "Quiet hours notification scheduling",
        "Multi-property family access toggle",
      ],
      color: "cyan",
    },
    {
      id: 5,
      title: "Residential & Commercial",
      shortDesc: "Scalable architecture tailored for high-end gated communities, luxury towers, and corporate HQs.",
      fullDesc: "Whether managing a 500-home gated estate, a multi-story luxury apartment tower, or a high-security corporate office headquarters, iEstate adapts seamlessly to complex multi-gate topologies and tiered security permission hierarchies.",
      icon: Building2,
      metrics: "Unlimited Multi-Gate Topology",
      badge: "SCALABLE ARCHITECTURE",
      highlights: [
        "Multi-gate simultaneous coordination",
        "Commercial visitor text pass logs",
        "Custom estate branding & white-labeling",
        "Role-based Exco & Facility Manager controls",
      ],
      color: "gold",
    },
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C59A4E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00B4D8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C59A4E]/10 border border-[#C59A4E]/30 text-[#E5C158] text-xs font-semibold mb-4">
            <Shield className="w-3.5 h-3.5 text-[#E5C158]" />
            <span>THE 5 PILLARS OF MODERN ESTATE ACCESS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed for <span className="text-gold-gradient">Uncompromised Security</span> & Pure Luxury
          </h2>
          <p className="text-slate-400 text-base mt-3 leading-relaxed">
            Engineered by Beacon VIP Concierge Limited (BVCL) to replace chaotic manual gate logbooks with an elegant, digital text pass ecosystem.
          </p>
        </div>

        {/* Feature Cards Grid (5 Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isGold = pillar.color === "gold";

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveTab(idx)}
                className={`glass-panel p-6 rounded-2xl border glass-card-hover cursor-pointer group flex flex-col justify-between relative overflow-hidden ${
                  activeTab === idx
                    ? isGold
                      ? "border-[#C59A4E]/60 bg-[#0E1C22]/90 shadow-lg shadow-[#C59A4E]/15"
                      : "border-[#00B4D8]/60 bg-[#0E1C22]/90 shadow-lg shadow-[#00B4D8]/15"
                    : "border-white/10"
                }`}
              >
                {/* Top Badge & Metric */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center p-[1px] ${
                        isGold
                          ? "bg-gradient-to-br from-[#E5C158] to-[#9A7230]"
                          : "bg-gradient-to-br from-[#00B4D8] to-[#0077B6]"
                      }`}
                    >
                      <div className="w-full h-full bg-[#081216] rounded-[11px] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon
                          className={`w-6 h-6 ${isGold ? "text-[#E5C158]" : "text-[#00B4D8]"}`}
                        />
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${
                        isGold
                          ? "bg-[#C59A4E]/10 text-[#E5C158] border-[#C59A4E]/30"
                          : "bg-[#00B4D8]/10 text-[#00B4D8] border-[#00B4D8]/30"
                      }`}
                    >
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#E5C158] transition-colors mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {pillar.shortDesc}
                  </p>
                </div>

                {/* Highlights list */}
                <div className="pt-4 border-t border-white/10 mt-2 space-y-2">
                  {pillar.highlights.slice(0, 2).map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 ${
                          isGold ? "text-[#C59A4E]" : "text-[#00B4D8]"
                        }`}
                      />
                      <span>{item}</span>
                    </div>
                  ))}

                  <div className="mt-4 flex items-center justify-between pt-2 text-xs font-semibold">
                    <span className="font-mono text-slate-400">{pillar.metrics}</span>
                    <span className="text-[#C59A4E] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Explore Pillar</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Special CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-panel-gold p-6 rounded-2xl border border-[#C59A4E]/40 flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C59A4E]/20 text-[#E5C158] text-[10px] font-bold tracking-widest uppercase mb-3">
                <Shield className="w-3 h-3" />
                <span>EXECUTIVE VIP DEPLOYMENT</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Deploy iEstate for Your Estate Board
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Schedule a private physical or virtual briefing with Beacon VIP Concierge Limited (BVCL) access architects.
              </p>
            </div>

            <button
              onClick={onRequestDemo}
              className="w-full py-3 px-4 rounded-xl font-bold text-xs text-[#081216] bg-gold-metallic hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#C59A4E]/30"
            >
              <span>Schedule BVCL Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
