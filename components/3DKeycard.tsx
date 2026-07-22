"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Shield, Cpu, Lock, Building, RefreshCw, RotateCw, Wifi, KeyRound, CheckCircle2 } from "lucide-react";

interface KeycardProps {
  estateName?: string;
  residentName?: string;
  permitType?: string;
  code?: string;
  unitNo?: string;
}

export const Keycard3D: React.FC<KeycardProps> = ({
  estateName = "VICTORIA CREST ESTATE IV",
  residentName = "CHIEF A. O. ADENIJI",
  permitType = "VIP GATE ACCESS • DUPLEX 14B",
  code = "PASS-849201",
  unitNo = "PH-14B",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeEstateIndex, setActiveEstateIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [glowColor, setGlowColor] = useState<"gold" | "cyan">("gold");

  const estates = [
    { name: "VICTORIA CREST ESTATE IV", code: "PASS-849201", location: "Lekki Phase 1, Lagos" },
    { name: "THE IMPERIAL PALMS", code: "PASS-309182", location: "Ikoyi, Lagos" },
    { name: "PINEWOOD ROYAL COURTS", code: "PASS-441290", location: "Maitama, Abuja" },
  ];

  const currentEstate = estates[activeEstateIndex];

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [18, -18]), {
    damping: 20,
    stiffness: 150,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-22, 22]), {
    damping: 20,
    stiffness: 150,
  });

  const glareX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const nextEstate = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveEstateIndex((prev) => (prev + 1) % estates.length);
  };

  return (
    <div className="relative w-full max-w-md mx-auto perspective-1000 py-6 px-2">
      {/* Background Ambient Glow */}
      <div 
        className={`absolute -inset-4 rounded-3xl blur-2xl transition-all duration-700 opacity-60 ${
          glowColor === "gold" 
            ? "bg-gradient-to-tr from-[#C59A4E]/30 via-[#00B4D8]/20 to-[#E5C158]/30" 
            : "bg-gradient-to-tr from-[#00B4D8]/40 via-[#0077B6]/20 to-[#C59A4E]/30"
        }`} 
      />

      {/* Outer Floating Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Interactive 3D Card Stage */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateY: isFlipped ? 180 : 0,
          }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[1.586/1] rounded-2xl cursor-pointer group select-none shadow-2xl"
        >
          {/* Card Face: FRONT */}
          <div
            className={`absolute inset-0 w-full h-full rounded-2xl p-6 flex flex-col justify-between overflow-hidden border backdrop-blur-xl transition-colors duration-500 ${
              isFlipped ? "pointer-events-none opacity-0" : "opacity-100"
            } ${
              glowColor === "gold"
                ? "border-[#C59A4E]/40 bg-gradient-to-br from-[#0E1C22]/90 via-[#081216]/95 to-[#04090C]/98 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                : "border-[#00B4D8]/40 bg-gradient-to-br from-[#0B1A22]/90 via-[#081216]/95 to-[#03080A]/98"
            }`}
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            {/* Holographic Mesh Background Overlay */}
            <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br from-[#C59A4E]/20 to-transparent rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-gradient-to-tr from-[#00B4D8]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

            {/* Dynamic Interactive Glare / Metallic Reflection Layer */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 rounded-2xl"
                style={{
                  background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,243,209,0.9) 0%, rgba(255,255,255,0.1) 40%, transparent 80%)`,
                }}
              />
            )}

            {/* Top Bar: Brand Logo, Gold Badge, Live Status */}
            <div className="relative z-10 flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E5C158] via-[#C59A4E] to-[#9A7230] p-[1px] shadow-md shadow-[#C59A4E]/20 overflow-hidden">
                  <div className="w-full h-full bg-[#081216] rounded-[11px] flex items-center justify-center p-1">
                    <Image src="/iEstate_logo1.png" alt="iEstate Logo" width={28} height={28} className="object-contain" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold tracking-tight text-white text-base">iEstate</span>
                    <span className="text-[9px] font-semibold tracking-widest text-[#C59A4E] bg-[#C59A4E]/10 px-1.5 py-0.5 rounded border border-[#C59A4E]/30 uppercase">
                      BVCL
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">TEXT ACCESS PASS</p>
                </div>
              </div>

              {/* Live Status Pill */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0E221B] border border-emerald-500/30 text-emerald-400 text-[10px] font-semibold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>ACTIVE PASS</span>
              </div>
            </div>

            {/* Middle Section: Estate Name & NFC Chip */}
            <div className="relative z-10 my-auto pt-2">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5 text-xs text-[#C59A4E] font-semibold tracking-wider uppercase">
                  <Building className="w-3.5 h-3.5" />
                  <span>{currentEstate.name}</span>
                </div>
                <button
                  onClick={nextEstate}
                  className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 bg-white/5 hover:bg-white/10 px-2 py-0.5 rounded border border-white/10 transition-colors"
                  title="Switch Estate Preview"
                >
                  <RefreshCw className="w-2.5 h-2.5" />
                  <span>Switch</span>
                </button>
              </div>

              <h3 className="text-lg font-bold text-white tracking-wide drop-shadow-sm font-mono">
                {residentName}
              </h3>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-[11px] text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                  {permitType}
                </span>
                <span className="text-[10px] text-[#00B4D8] font-mono tracking-widest">
                  SMS / WHATSAPP PASS
                </span>
              </div>
            </div>

            {/* Bottom Section: Chip + Text Access Code */}
            <div className="relative z-10 flex items-end justify-between pt-2 border-t border-white/10">
              <div className="flex items-center gap-3">
                {/* Gold Chip Icon */}
                <div className="w-10 h-8 rounded bg-gradient-to-tr from-[#E5C158] via-[#C59A4E] to-[#9A7230] p-[1px] shadow-sm">
                  <div className="w-full h-full bg-[#182C35] rounded-[3px] flex items-center justify-center relative overflow-hidden">
                    <Cpu className="w-5 h-5 text-[#E5C158]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
                </div>

                <div>
                  <p className="text-[9px] text-slate-400 font-mono tracking-wider">TEXT ACCESS PIN</p>
                  <p className="text-base font-mono font-bold text-[#E5C158] tracking-wider">{currentEstate.code}</p>
                </div>
              </div>

              {/* Text Pass Indicator Box */}
              <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-lg border border-[#C59A4E]/30">
                <KeyRound className="w-5 h-5 text-[#E5C158]" />
                <div className="text-right">
                  <p className="text-[9px] text-slate-400 font-mono">GATE PIN</p>
                  <p className="text-[10px] font-bold text-emerald-400 font-mono">6-DIGIT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card Face: BACK */}
          <div
            className={`absolute inset-0 w-full h-full rounded-2xl p-6 flex flex-col justify-between border backdrop-blur-xl transition-colors duration-500 bg-gradient-to-br from-[#060D10] via-[#081216] to-[#0D181D] border-[#C59A4E]/30 text-slate-200 ${
              !isFlipped ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {/* Magnetic Stripe Effect */}
            <div className="w-full h-9 -mx-6 bg-gradient-to-r from-black via-slate-900 to-black border-y border-white/10 flex items-center px-6 justify-between">
              <span className="text-[8px] font-mono text-slate-500 tracking-widest">BEACON VIP CONCIERGE ACCESS MATRIX</span>
              <Wifi className="w-3.5 h-3.5 text-[#00B4D8]" />
            </div>

            {/* Back Card Details */}
            <div className="my-auto space-y-2 text-xs">
              <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-white/10 pb-1.5">
                <span>SECURITY ENCRYPTION:</span>
                <span className="font-mono text-[#E5C158]">AES-256-GCM / SHA-512</span>
              </div>
              <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-white/10 pb-1.5">
                <span>ISSUED BY:</span>
                <span className="text-white font-medium">Beacon VIP Concierge Ltd (BVCL)</span>
              </div>
              <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-white/10 pb-1.5">
                <span>GATE VERIFICATION SPEED:</span>
                <span className="text-emerald-400 font-bold">&lt; 1.2 SECONDS</span>
              </div>
              <div className="flex justify-between items-center text-[10px] text-slate-400">
                <span>AUDIT LOG TRACKING:</span>
                <span className="text-[#00B4D8] font-mono">REAL-TIME PUSH ALERTS</span>
              </div>
            </div>

            {/* Signature & Security Indicator */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <div className="bg-white/10 px-3 py-1 rounded text-[9px] font-mono text-slate-300">
                AUTH SIGNATURE: BVCL-SEC-OFFICER-APPROVED
              </div>
              <Lock className="w-4 h-4 text-[#C59A4E]" />
            </div>
          </div>
        </motion.div>

        {/* Card Controls Bar */}
        <div className="mt-4 flex items-center gap-3 bg-[#0D181D]/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs">
          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#E5C158] transition-colors"
          >
            <RotateCw className="w-3.5 h-3.5 text-[#C59A4E]" />
            <span>{isFlipped ? "Show Front Pass" : "Flip Pass"}</span>
          </button>

          <span className="text-slate-600">|</span>

          <button
            onClick={() => setGlowColor(glowColor === "gold" ? "cyan" : "gold")}
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#00B4D8] transition-colors"
          >
            <Shield className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>Theme: {glowColor.toUpperCase()}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
