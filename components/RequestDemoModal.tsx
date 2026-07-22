"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Shield, CheckCircle2, Send } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RequestDemoModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [estateName, setEstateName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Exco / Chairman");
  const [unitsCount, setUnitsCount] = useState("50 - 200 Units");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-lg bg-[#081216] border border-[#C59A4E]/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black overflow-hidden"
        >
          {/* Top Background Glow */}
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#C59A4E]/20 rounded-full blur-2xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full bg-white/5 border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C59A4E]/15 border border-[#C59A4E]/30 text-[#E5C158] text-[11px] font-bold uppercase tracking-wider mb-2">
                  <Shield className="w-3.5 h-3.5 text-[#E5C158]" />
                  <span>BVCL ESTATE CONSULTATION</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Request <span className="text-gold-gradient">iEstate</span> Access Demo
                </h3>
                <p className="text-slate-400 text-xs mt-1">
                  Schedule a custom presentation and physical gate audit for your estate board or management company.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Estate / Property Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={estateName}
                    onChange={(e) => setEstateName(e.target.value)}
                    placeholder="e.g. Imperial Palms Estate, Lekki"
                    className="w-full bg-[#04090C] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#C59A4E]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Contact Representative *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Chief O. Adebayo"
                      className="w-full bg-[#04090C] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C59A4E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 801 234 5678"
                      className="w-full bg-[#04090C] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C59A4E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="info@estateboard.com"
                      className="w-full bg-[#04090C] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C59A4E]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Designation / Role
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full bg-[#04090C] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C59A4E]"
                    >
                      <option value="Exco / Chairman">Estate Exco / Chairman</option>
                      <option value="Security Lead">Security Committee Lead</option>
                      <option value="Facility Manager">Facility Manager</option>
                      <option value="Property Developer">Property Developer</option>
                      <option value="Resident">Resident / Landlord</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Estimated Estate Scale
                  </label>
                  <select
                    value={unitsCount}
                    onChange={(e) => setUnitsCount(e.target.value)}
                    className="w-full bg-[#04090C] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C59A4E]"
                  >
                    <option value="Under 50 Units">Under 50 Residential Units</option>
                    <option value="50 - 200 Units">50 – 200 Residential Units</option>
                    <option value="200 - 500 Units">200 – 500 Residential Units</option>
                    <option value="500+ Units">500+ Mega Gated Community</option>
                    <option value="Commercial HQ">Commercial Corporate HQ</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-[#081216] bg-gold-metallic hover:brightness-110 transition-all shadow-lg shadow-[#C59A4E]/30 flex items-center justify-center gap-2 mt-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Consultation Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit BVCL Demo Request</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">Consultation Requested!</h3>
              <p className="text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="text-[#E5C158] font-semibold">{contactName}</span>. A Beacon VIP Concierge (BVCL) access specialist will reach out to you at <span className="font-mono text-white">{phone}</span> shortly.
              </p>
              <button
                onClick={handleReset}
                className="py-2.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
