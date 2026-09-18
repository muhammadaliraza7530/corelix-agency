'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Send, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles,
  Check,
  Loader2,
  User,
  Building,
  Globe,
  MessageSquare,
  Layers
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    services: ['Website Development'],
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableServices = [
    'Website Development',
    'App Development',
    'Video Editing',
    'AI Automation',
    'Full Digital Transformation',
  ];

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <main className="pt-6 sm:pt-10 md:pt-14 pb-16 md:pb-20 overflow-hidden bg-[#FAFCFE]">
      {/* Top Breadcrumb */}
      <div className="container mx-auto px-4 max-w-6xl mb-6">
        <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0284c7] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-slate-400" />
          <span className="text-[#0284c7] font-semibold">Contact &amp; Consultation</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 max-w-6xl mb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e0f2fe] text-[#0284c7] text-xs font-semibold uppercase tracking-wider mb-5">
            <Sparkles size={14} />
            Let&apos;s Collaborate
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-tight mb-6">
            Start Your Next Project with Corelix Systems
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            Partner with us for industry-grade <strong>Website Development</strong>, <strong>App Development</strong>, <strong>Video Editing</strong>, and <strong>AI Automation</strong>. We will assess your requirements and deliver a detailed roadmap within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-[#0A2540]">Direct Communication</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect directly with our lead developers and creative directors. No bureaucratic account managers or endless delays.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#f0f9ff] text-[#0284c7] flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Us</div>
                    <div className="text-sm font-semibold text-slate-800">projects@corelixsystems.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#f0f9ff] text-[#0284c7] flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Hotline</div>
                    <div className="text-sm font-semibold text-slate-800">+1 (888) 542-6739</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#f0f9ff] text-[#0284c7] flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Working Hours</div>
                    <div className="text-sm font-semibold text-slate-800">Mon &ndash; Fri, 8:00 AM &ndash; 6:00 PM EST</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#f0f9ff] text-[#0284c7] flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</div>
                    <div className="text-sm font-semibold text-slate-800">New York, NY &amp; Worldwide Remote Delivery</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0A2540] text-white p-7 rounded-2xl">
              <div className="flex items-center gap-2 text-[#38BDF8] text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck size={16} /> Confidentiality &amp; NDA
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Your proprietary concepts, source code, data, and business plans are protected by default under our mutual non-disclosure commitment.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
              {isSubmitted ? (
                <div className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2540]">Project Inquiry Received</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name || 'there'}</strong>! The Corelix Systems team has received your inquiry for <strong>{formData.services.join(', ')}</strong>. Our technical director will review your requirements and reach out within 24 hours.
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#0284C7] hover:bg-[#0369A1] transition-colors shadow-sm cursor-pointer mt-4"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        website: '',
                        services: ['Website Development'],
                        message: '',
                      });
                    }}
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-[#0A2540]">Request Project Estimate</h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Provide details about your project goals. Our technical team will prepare a tailored scope and timeline.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                          <User size={13} className="text-sky-600 shrink-0" />
                          <span>Full Name</span>
                          <span className="text-rose-500 font-bold">*</span>
                        </span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white focus:bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0284c7] focus:ring-4 focus:ring-sky-500/10 transition-all shadow-xs"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                          <Mail size={13} className="text-sky-600 shrink-0" />
                          <span>Work Email</span>
                          <span className="text-rose-500 font-bold">*</span>
                        </span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@yourcompany.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white focus:bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0284c7] focus:ring-4 focus:ring-sky-500/10 transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                          <Building size={13} className="text-sky-600 shrink-0" />
                          <span>Company / Brand Name</span>
                        </span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Corelix Partner Inc."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white focus:bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0284c7] focus:ring-4 focus:ring-sky-500/10 transition-all shadow-xs"
                      />
                    </div>

                    <div>
                      <label htmlFor="website" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                          <Globe size={13} className="text-sky-600 shrink-0" />
                          <span>Current Website (Optional)</span>
                        </span>
                      </label>
                      <input
                        type="url"
                        id="website"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://yourbrand.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white focus:bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0284c7] focus:ring-4 focus:ring-sky-500/10 transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                      <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                        <Layers size={13} className="text-sky-600 shrink-0" />
                        <span>Services Needed</span>
                        <span className="text-slate-400 normal-case font-normal">(Select all that apply)</span>
                      </span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((service) => {
                        const selected = formData.services.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all inline-flex items-center gap-1.5 cursor-pointer ${
                              selected
                                ? 'bg-[#0284c7] text-white shadow-sm shadow-sky-500/25 ring-2 ring-[#0284c7]/30 border border-transparent'
                                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80 hover:border-slate-300'
                            }`}
                          >
                            {selected && <Check size={13} className="stroke-[2.5]" />}
                            <span>{service}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                        <MessageSquare size={13} className="text-sky-600 shrink-0" />
                        <span>Project Scope &amp; Requirements</span>
                        <span className="text-rose-500 font-bold">*</span>
                      </span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your desired website features, mobile app requirements, video creative vision, or AI automation goals..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white focus:bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0284c7] focus:ring-4 focus:ring-sky-500/10 transition-all resize-y shadow-xs"
                    />
                    <p className="text-[11px] text-slate-400 mt-1.5">
                      Tip: Feel free to mention key milestones, tech preferences, or reference links.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 sm:py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#0284C7] via-[#0274B3] to-[#0369A1] hover:from-[#0369A1] hover:to-[#0284C7] shadow-lg shadow-sky-500/20 hover:shadow-xl hover:shadow-sky-500/30 active:scale-[0.99] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2.5 group disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin text-white" />
                          <span className="whitespace-nowrap">Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span className="whitespace-nowrap tracking-wide">Submit Project Inquiry</span>
                          <Send size={16} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>

                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-slate-500 font-medium pt-1">
                      <span className="inline-flex items-center gap-1.5">
                        <ShieldCheck size={13} className="text-emerald-500" />
                        <span>100% Confidential &amp; NDA</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={13} className="text-sky-500" />
                        <span>Response within 24h</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-emerald-500" />
                        <span>Free Consultation</span>
                      </span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
