"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Smartphone,
  CheckCircle2,
  Clock,
  UserCheck,
  Share2,
  Copy,
  RefreshCw,
  ShieldCheck,
  Car,
  Check,
  Lock,
  KeyRound,
  MessageSquare,
  SlidersHorizontal,
  Send,
} from "lucide-react";

export const InteractiveTextPassDemo: React.FC = () => {
  // Form State
  const [visitorName, setVisitorName] = useState("Chief Tunde Balogun");
  const [accessType, setAccessType] = useState<"guest" | "delivery" | "vip" | "contractor">("guest");
  const [estate, setEstate] = useState("Victoria Crest Estate IV");
  const [vehicleTag, setVehicleTag] = useState("KJA-892-AA");
  const [expiryHours, setExpiryHours] = useState(6);

  // Simulation State
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPass, setGeneratedPass] = useState<{
    code: string;
    timestamp: string;
    expiryTime: string;
  } | null>({
    code: "PASS-849201",
    timestamp: "Today, 14:30",
    expiryTime: "Valid for 6 hours",
  });

  const [copied, setCopied] = useState(false);
  const [inputGuardPin, setInputGuardPin] = useState("PASS-849201");
  const [isVerifying, setIsVerifying] = useState(false);
  const [gateVerified, setGateVerified] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setGateVerified(false);

    setTimeout(() => {
      const randomPin = Math.floor(100000 + Math.random() * 900000);
      const newCode = `PASS-${randomPin}`;
      const now = new Date();
      const expiry = new Date(now.getTime() + expiryHours * 60 * 60 * 1000);

      const passData = {
        code: newCode,
        timestamp: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        expiryTime: `Expires at ${expiry.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
      };

      setGeneratedPass(passData);
      setInputGuardPin(newCode);
      setIsGenerating(false);
    }, 1000);
  };

  const getPassTextMessage = () => {
    if (!generatedPass) return "";
    return `*iEstate Gate Access Pass*\nHello ${visitorName},\nYour entry code for ${estate} is: *${generatedPass.code}*.\nVehicle Tag: ${vehicleTag || "Walk-in"}\nValid duration: ${expiryHours} hours (${generatedPass.expiryTime}).\nPlease present this PIN to the gate security officer on arrival.`;
  };

  const handleCopy = () => {
    if (!generatedPass) return;
    navigator.clipboard.writeText(getPassTextMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    if (!generatedPass) return;
    const text = encodeURIComponent(getPassTextMessage());
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleSimulateVerify = () => {
    setIsVerifying(true);
    setGateVerified(false);

    setTimeout(() => {
      setIsVerifying(false);
      setGateVerified(true);
    }, 1200);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00B4D8]/10 border border-[#00B4D8]/30 text-[#00B4D8] text-xs font-semibold mb-3">
          <KeyRound className="w-3.5 h-3.5 text-[#00B4D8]" />
          <span>INTERACTIVE TEXT PASS GENERATOR</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Experience <span className="text-gold-gradient">Instant Visitor Text Pass</span> Generation
        </h2>
        <p className="text-slate-400 text-sm mt-2">
          See how residents issue text PIN access codes and how gate security verifies them instantly without QR codes or app downloads for guests.
        </p>
      </div>

      {/* Main Grid: Control Form vs Live Mobile Mockup */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Generator Controls (5 cols) */}
        <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-white/10 space-y-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="font-semibold text-white flex items-center gap-2 text-base">
              <SlidersHorizontal className="w-4 h-4 text-[#C59A4E]" />
              <span>Resident Access Portal</span>
            </h3>
            <span className="text-[10px] bg-[#C59A4E]/10 text-[#C59A4E] px-2 py-0.5 rounded border border-[#C59A4E]/30 font-mono">
              TEXT CODE MODE
            </span>
          </div>

          {/* Visitor Name */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Guest / Visitor Full Name
            </label>
            <input
              type="text"
              value={visitorName}
              onChange={(e) => setVisitorName(e.target.value)}
              className="w-full bg-[#04090C] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C59A4E] transition-colors"
              placeholder="e.g. Chief Tunde Balogun"
            />
          </div>

          {/* Access Type Selection */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Access Category
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "guest", label: "VIP Visitor", icon: UserCheck },
                { id: "delivery", label: "Courier / Food", icon: Car },
                { id: "contractor", label: "Artisan / Staff", icon: ShieldCheck },
                { id: "vip", label: "Event Group", icon: KeyRound },
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = accessType === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setAccessType(item.id as any)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-medium transition-all ${
                      isSelected
                        ? "bg-[#C59A4E]/15 border-[#C59A4E] text-[#E5C158] shadow-sm shadow-[#C59A4E]/20"
                        : "bg-[#04090C]/60 border-white/10 text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-[#E5C158]" : "text-slate-400"}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Target Estate & Vehicle Tag */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Select Estate
              </label>
              <select
                value={estate}
                onChange={(e) => setEstate(e.target.value)}
                className="w-full bg-[#04090C] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C59A4E]"
              >
                <option value="Victoria Crest Estate IV">Victoria Crest IV</option>
                <option value="The Imperial Palms">Imperial Palms</option>
                <option value="Pinewood Royal Courts">Pinewood Royal</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Vehicle Tag (Optional)
              </label>
              <input
                type="text"
                value={vehicleTag}
                onChange={(e) => setVehicleTag(e.target.value)}
                className="w-full bg-[#04090C] border border-white/10 rounded-xl px-3 py-2 text-xs text-white uppercase font-mono focus:outline-none focus:border-[#C59A4E]"
                placeholder="e.g. LAG-892-AA"
              />
            </div>
          </div>

          {/* Expiry Selector */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-medium text-slate-300">
                Pass Duration
              </label>
              <span className="text-xs font-mono text-[#00B4D8]">{expiryHours} Hours</span>
            </div>
            <input
              type="range"
              min="1"
              max="24"
              value={expiryHours}
              onChange={(e) => setExpiryHours(Number(e.target.value))}
              className="w-full accent-[#C59A4E] bg-white/10 rounded-lg cursor-pointer h-1.5"
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-[#081216] bg-gold-metallic hover:brightness-110 active:scale-[0.99] transition-all shadow-lg shadow-[#C59A4E]/25 flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Generating Text PIN...</span>
              </>
            ) : (
              <>
                <KeyRound className="w-4 h-4" />
                <span>Generate Text Access Pass</span>
              </>
            )}
          </button>
        </div>

        {/* Right Side: Simulated Smartphone Text Message Preview (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center w-full">
          {/* Phone Frame */}
          <div className="relative w-full max-w-sm rounded-[38px] p-4 bg-[#081216] border-4 border-[#182C35] shadow-2xl shadow-black/80">
            {/* Phone Speaker Notch */}
            <div className="w-28 h-4 bg-[#182C35] rounded-full mx-auto mb-3 flex items-center justify-center">
              <div className="w-8 h-1 bg-slate-700 rounded-full" />
            </div>

            {/* Inner Mobile Screen Canvas */}
            <div className="relative bg-gradient-to-b from-[#0D181D] via-[#081216] to-[#04090C] rounded-[28px] p-5 border border-white/10 min-h-[460px] flex flex-col justify-between overflow-hidden">
              {/* Header inside Phone */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#C59A4E] flex items-center justify-center text-[#081216] font-bold text-xs">
                    iE
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white tracking-tight">SMS / WhatsApp Pass</p>
                    <p className="text-[9px] text-slate-400">{estate}</p>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Pass Content Body */}
              <AnimatePresence mode="wait">
                {isGenerating ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="my-auto py-12 flex flex-col items-center justify-center text-center space-y-3"
                  >
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-2 border-t-[#C59A4E] border-r-transparent border-b-[#00B4D8] border-l-transparent animate-spin" />
                      <Lock className="w-6 h-6 text-[#C59A4E]" />
                    </div>
                    <p className="text-xs text-slate-300 font-mono tracking-wider">CREATING TEXT ACCESS CODE...</p>
                  </motion.div>
                ) : generatedPass ? (
                  <motion.div
                    key="pass"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4 my-auto pt-2"
                  >
                    {/* Security Code Banner */}
                    <div className="bg-gradient-to-r from-[#C59A4E]/20 via-[#00B4D8]/10 to-[#C59A4E]/20 p-4 rounded-2xl border border-[#C59A4E]/40 text-center relative overflow-hidden">
                      <p className="text-[10px] uppercase font-mono text-slate-400 tracking-widest mb-1">
                        VISITOR GATE ACCESS PIN
                      </p>
                      <h4 className="text-3xl font-mono font-extrabold tracking-wider text-gold-gradient py-1">
                        {generatedPass.code}
                      </h4>
                      <p className="text-[10px] text-emerald-400 font-medium mt-1 flex items-center justify-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>VERIFIED TEXT PASS • SINGLE ENTRY</span>
                      </p>
                    </div>

                    {/* WhatsApp / SMS Formatted Text Card Preview */}
                    <div className="bg-[#04090C] p-3.5 rounded-2xl border border-white/10 space-y-2 text-left">
                      <div className="flex items-center gap-1.5 text-[10px] text-[#C59A4E] font-bold font-mono uppercase">
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Formatted SMS / WhatsApp Message</span>
                      </div>
                      <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-[11px] text-slate-300 font-mono space-y-1.5 leading-relaxed">
                        <p className="font-bold text-white">iEstate Access Pass</p>
                        <p>Guest: <span className="text-white">{visitorName}</span></p>
                        <p>Access Code: <span className="text-[#E5C158] font-bold">{generatedPass.code}</span></p>
                        <p>Vehicle: <span className="text-white">{vehicleTag || "Walk-in"}</span></p>
                        <p className="text-[10px] text-slate-400">Estate: {estate}</p>
                      </div>
                    </div>

                    {/* Expiry Details */}
                    <div className="flex items-center justify-between text-[11px] text-slate-300 bg-white/5 p-2.5 rounded-xl border border-white/10">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#00B4D8]" />
                        <span>{generatedPass.expiryTime}</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#C59A4E]">{generatedPass.timestamp}</span>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              {/* Action Buttons inside Phone */}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleCopy}
                    disabled={!generatedPass}
                    className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#C59A4E]" />
                        <span>Copy Message</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={handleWhatsAppShare}
                    disabled={!generatedPass}
                    className="py-2.5 px-3 rounded-xl bg-emerald-600/30 border border-emerald-500/50 hover:bg-emerald-600/40 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Guard Verification Box */}
          <div className="mt-6 glass-panel p-4 rounded-2xl border border-white/10 w-full max-w-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#00B4D8]" />
                <span>Simulate Guard Verification</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono">GATE GUARD TERMINAL</span>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={inputGuardPin}
                onChange={(e) => setInputGuardPin(e.target.value)}
                className="flex-1 bg-[#04090C] border border-white/10 rounded-xl px-3 py-2 text-xs font-mono font-bold text-white focus:outline-none focus:border-[#00B4D8]"
                placeholder="PASS-XXXXXX"
              />
              <button
                onClick={handleSimulateVerify}
                disabled={isVerifying}
                className="py-2 px-4 rounded-xl bg-[#00B4D8] hover:bg-[#00B4D8]/90 text-[#081216] font-bold text-xs flex items-center gap-1"
              >
                {isVerifying ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <span>Verify PIN</span>
                )}
              </button>
            </div>

            {gateVerified && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-emerald-950/90 border border-emerald-500/50 text-emerald-200 text-xs flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Entry Authorized & Gate Barrier Unlocked!</p>
                  <p className="text-[10px] text-emerald-300/80 mt-0.5">
                    Verified PIN for guest <span className="font-semibold text-white">{visitorName}</span>. Resident notified via instant push alert.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
