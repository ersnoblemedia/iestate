"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Shield, Menu, X, PhoneCall, KeyRound } from "lucide-react";

interface NavbarProps {
  onRequestDemo: () => void;
  activePage?: "home" | "about";
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestDemo, activePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isAboutPage = pathname === "/about" || activePage === "about";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (id: string) => {
    setMobileMenuOpen(false);
    if (isAboutPage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#04090C]/50 backdrop-blur-sm border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent backdrop-blur-none border-b border-transparent"
      }`}
    >
      {/* Top Utility Bar */}
      <div
        className={`transition-all duration-300 bg-gradient-to-r from-[#04090C]/80 via-[#0E1C22]/80 to-[#04090C]/80 py-1 px-4 border-b border-white/5 hidden sm:block ${
          scrolled ? "opacity-90 py-0.5 text-[10px]" : "opacity-100 py-1 text-[11px]"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#C59A4E]">
              <Image src="/BVCL_logo.png" alt="BVCL Logo" width={16} height={16} className="object-contain" />
              <span className="font-medium">Powered by Beacon VIP Concierge Limited (BVCL)</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Smarter Estate Security & Visitor Text Pass Matrix</span>
          </div>

          <div className="flex items-center gap-4 font-mono">
            <a href="tel:+2347047001126" className="hover:text-[#C59A4E] transition-colors flex items-center gap-1">
              <PhoneCall className="w-3 h-3 text-[#C59A4E]" />
              <span>+234 704 700 1126</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Brand Logo */}
        <Link 
          href="/"
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#E5C158] via-[#C59A4E] to-[#9A7230] p-[1px] shadow-lg shadow-[#C59A4E]/20 group-hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-full bg-[#081216] rounded-[11px] flex items-center justify-center p-1">
              <Image src="/iEstate_logo1.png" alt="iEstate Logo" width={32} height={32} className="object-contain" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                iEstate
              </span>
              <span className="text-[10px] font-bold tracking-widest text-[#C59A4E] bg-[#C59A4E]/15 px-2 py-0.5 rounded border border-[#C59A4E]/30 uppercase">
                BY BVCL
              </span>
            </div>
            <p className="text-[10px] text-slate-400 tracking-wider uppercase font-mono">GATE ACCESS MATRIX</p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link
            href="/"
            className={`transition-colors hover:text-[#E5C158] ${
              !isAboutPage ? "text-white font-semibold" : "text-slate-400"
            }`}
          >
            Home
          </Link>
          <button
            onClick={() => handleSectionClick("features")}
            className="hover:text-[#E5C158] transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => handleSectionClick("how-it-works")}
            className="hover:text-[#E5C158] transition-colors"
          >
            How It Works
          </button>
          <button
            onClick={() => handleSectionClick("live-demo")}
            className="hover:text-[#00B4D8] transition-colors flex items-center gap-1"
          >
            <span>Live Demo</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8] animate-ping" />
          </button>
          <Link
            href="/about"
            className={`transition-colors flex items-center gap-1.5 ${
              isAboutPage
                ? "text-[#E5C158] font-bold py-1 px-3 rounded-full bg-[#C59A4E]/10 border border-[#C59A4E]/30"
                : "text-slate-300 hover:text-[#E5C158]"
            }`}
          >
            <span>About BVCL</span>
          </Link>
          <button
            onClick={() => handleSectionClick("contact")}
            className="hover:text-[#E5C158] transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onRequestDemo}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold text-white rounded-xl group bg-gradient-to-br from-[#E5C158] via-[#C59A4E] to-[#9A7230] hover:shadow-[0_0_20px_rgba(197,154,78,0.4)] transition-all"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#081216] rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-2">
              <KeyRound className="w-3.5 h-3.5 text-[#E5C158] group-hover:text-white" />
              <span>Request Estate Demo</span>
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#081216] border-b border-white/10 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left py-2 border-b border-white/5 hover:text-[#E5C158]"
            >
              Home Page
            </Link>
            <button
              onClick={() => handleSectionClick("features")}
              className="text-left py-2 border-b border-white/5 hover:text-[#E5C158]"
            >
              Features & Pillars
            </button>
            <button
              onClick={() => handleSectionClick("how-it-works")}
              className="text-left py-2 border-b border-white/5 hover:text-[#E5C158]"
            >
              How It Works
            </button>
            <button
              onClick={() => handleSectionClick("live-demo")}
              className="text-left py-2 border-b border-white/5 hover:text-[#00B4D8]"
            >
              Interactive Text Pass Generator
            </button>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left py-2 border-b border-white/5 text-[#E5C158] font-bold"
            >
              About BVCL & iEstate
            </Link>
            <button
              onClick={() => handleSectionClick("contact")}
              className="text-left py-2 hover:text-[#E5C158]"
            >
              BVCL Contact Credentials
            </button>
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onRequestDemo();
            }}
            className="w-full py-3 px-4 rounded-xl font-bold text-sm text-[#081216] bg-gold-metallic shadow-lg flex items-center justify-center gap-2"
          >
            <KeyRound className="w-4 h-4" />
            <span>Request Estate Demo</span>
          </button>
        </div>
      )}
    </header>
  );
};
