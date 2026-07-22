"use client";

import React from "react";
import { motion } from "motion/react";
import { Smartphone, ShieldCheck, Bell, CheckCircle2, KeyRound } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Resident Generates Text Code",
      role: "Resident Action",
      desc: "Resident opens iEstate on their phone, selects guest category (VIP, Delivery, Event), and taps 'Generate Pass'. The formatted text PIN is sent to the guest via WhatsApp or SMS in one tap.",
      icon: Smartphone,
      color: "gold",
    },
    {
      num: "02",
      title: "Visitor Arrives at Gate",
      role: "Guest Arrival",
      desc: "Visitor presents the text access PIN code (e.g. PASS-849201) to the estate gate security guard at the entry point.",
      icon: KeyRound,
      color: "cyan",
    },
    {
      num: "03",
      title: "Guard Types & Verifies PIN",
      role: "Security Guard Action",
      desc: "Guard inputs the 6-digit text PIN on their handheld terminal. iEstate verifies pass validity, vehicle tag, and resident authorization in under 1.2 seconds.",
      icon: ShieldCheck,
      color: "gold",
    },
    {
      num: "04",
      title: "Gate Opens & Resident Alerted",
      role: "System Action",
      desc: "Automated barrier lifts or guard approves entry. The resident instantly receives a mobile push notification confirming guest arrival with exact timestamp.",
      icon: Bell,
      color: "cyan",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 relative bg-[#04090C]/80 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#00B4D8] font-mono text-xs tracking-widest uppercase font-semibold bg-[#00B4D8]/10 px-3 py-1 rounded-full border border-[#00B4D8]/30">
            EFFORTLESS TEXT ACCESS WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            How <span className="text-gold-gradient">iEstate</span> Works in 4 Simple Steps
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Seamlessly bridging residents, visitors, and gate security with instant text PIN verification.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isGold = step.color === "gold";

            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="glass-panel p-6 rounded-2xl border border-white/10 relative flex flex-col justify-between group hover:border-[#C59A4E]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-extrabold text-[#C59A4E]/60 group-hover:text-[#E5C158] transition-colors">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      {step.role}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white group-hover:bg-[#C59A4E]/20 group-hover:border-[#C59A4E] transition-all">
                    <Icon className={`w-5 h-5 ${isGold ? "text-[#E5C158]" : "text-[#00B4D8]"}`} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">{step.desc}</p>
                </div>

                <div className="pt-4 border-t border-white/10 mt-6 flex items-center text-xs text-emerald-400 font-medium gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified & Encrypted</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
