"use client";

import React from "react";
import Image from "next/image";
import { Shield, PhoneCall, Mail, Building, MapPin, ArrowRight, Lock } from "lucide-react";

interface FooterProps {
  onRequestDemo: () => void;
}

export const FooterContact: React.FC<FooterProps> = ({ onRequestDemo }) => {
  return (
    <footer id="contact" className="relative bg-[#04090C] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-72 bg-gradient-to-b from-[#C59A4E]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Section Banner */}
        <div className="glass-panel-gold rounded-3xl p-8 sm:p-12 border border-[#C59A4E]/40 mb-16 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C59A4E]/20 text-[#E5C158] text-xs font-bold uppercase tracking-wider mb-3">
              <Shield className="w-3.5 h-3.5 text-[#E5C158]" />
              <span>TRANSFORM YOUR ESTATE SECURITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Elevate Your Estate Security Today.
            </h2>
            <p className="text-slate-300 text-sm mt-3 leading-relaxed">
              Join leading luxury residential gated communities and corporate developments powered by iEstate by BVCL. Zero gate congestion, 100% visitor auditability.
            </p>
          </div>

          <button
            onClick={onRequestDemo}
            className="shrink-0 py-4 px-8 rounded-2xl font-bold text-sm text-[#081216] bg-gold-metallic hover:brightness-110 transition-all shadow-xl shadow-[#C59A4E]/30 flex items-center gap-2"
          >
            <span>Request Estate Briefing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Credentials Grid & Contact Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E5C158] via-[#C59A4E] to-[#9A7230] p-[1px] shadow-lg shadow-[#C59A4E]/20 overflow-hidden">
                <div className="w-full h-full bg-[#081216] rounded-[11px] flex items-center justify-center p-1">
                  <Image src="/iEstate_logo1.png" alt="iEstate Logo" width={32} height={32} className="object-contain" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-extrabold text-white">iEstate</span>
                  <span className="text-[10px] font-bold text-[#C59A4E] bg-[#C59A4E]/15 px-2 py-0.5 rounded border border-[#C59A4E]/30">
                    BY BVCL
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 tracking-wider font-mono">BEACON VIP CONCIERGE LIMITED</p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              iEstate is a proprietary digital gate access, visitor management, and VIP security matrix engineered exclusively by Beacon VIP Concierge Limited (BVCL) for modern residential estates, luxury apartments, and commercial headquarters.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <Lock className="w-3.5 h-3.5" />
              <span>AES-256 SECURED GATE PROTOCOL</span>
            </div>
          </div>

          {/* Contact Card (7 cols) */}
          <div className="md:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Building className="w-4 h-4 text-[#C59A4E]" />
              <span>Beacon VIP Concierge Client Care Desk</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {/* Phone Card */}
              <a
                href="tel:+2347047001126"
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#C59A4E] transition-colors group flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-[#C59A4E]/15 border border-[#C59A4E]/30 flex items-center justify-center text-[#E5C158] shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono">DIRECT CONCIERGE PHONE</p>
                  <p className="text-sm font-bold text-white group-hover:text-[#E5C158] transition-colors mt-0.5 font-mono">
                    +234 704 700 1126
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:client-care@beaconvipng.com"
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00B4D8] transition-colors group flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-[#00B4D8]/15 border border-[#00B4D8]/30 flex items-center justify-center text-[#00B4D8] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-mono">OFFICIAL CLIENT EMAIL</p>
                  <p className="text-xs font-bold text-white group-hover:text-[#00B4D8] transition-colors mt-1 font-mono break-all">
                    client-care@beaconvipng.com
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C59A4E]" />
                <span>Primary Coverage: Lagos • Abuja • Port Harcourt & Nationwide Nigeria</span>
              </div>
              <span className="font-mono text-[#C59A4E]">24/7 SUPPORT</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} iEstate by Beacon VIP Concierge Limited (BVCL). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Security Matrix</span>
            <span>Terms of Access</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
