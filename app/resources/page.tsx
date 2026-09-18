'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  Sparkles, 
  BookOpen, 
  HelpCircle, 
  FileText, 
  ShieldCheck, 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Video, 
  Bot, 
  CheckCircle2, 
  Calculator, 
  ExternalLink,
  Lock,
  Layers,
  Zap,
  Download
} from 'lucide-react';
import { ScrollReveal, ScrollCard } from '@/components/ScrollAnimation';

export default function ResourcesPage() {
  const [calcService, setCalcService] = useState<'web' | 'app' | 'video' | 'ai'>('web');
  const [calcComplexity, setCalcComplexity] = useState<'mvp' | 'growth' | 'enterprise'>('growth');

  const guides = [
    {
      title: 'Modern Next.js 15 & React Architecture Guide',
      category: 'Web Development',
      badge: 'Technical Whitepaper',
      icon: Globe,
      desc: 'How we engineer sub-second page loads, headless CMS pipelines, and conversion-optimized architectures with 95+ Core Web Vitals.',
      href: '/about#web',
      linkText: 'Explore Web Pillar',
    },
    {
      title: 'Cross-Platform Mobile App Launch Blueprint',
      category: 'App Development',
      badge: 'Engineering Framework',
      icon: Smartphone,
      desc: 'Step-by-step checklist for building and deploying React Native & Flutter apps with offline sync and App Store compliance.',
      href: '/about#app',
      linkText: 'Explore Mobile Pillar',
    },
    {
      title: 'High-Retention Video Editing & Creative Playbook',
      category: 'Video Production',
      badge: 'Creative Guide',
      icon: Video,
      desc: 'Pacing strategies, dynamic kinetic typography, and direct-response hooks proven to maximize viewer watch-time on Reels and TikTok.',
      href: '/about#video',
      linkText: 'Explore Video Pillar',
    },
    {
      title: 'Enterprise AI Agent & Workflow Automation Roadmap',
      category: 'AI Automation',
      badge: 'Implementation Blueprint',
      icon: Bot,
      desc: 'How to automate repetitive operations, customer support, and lead triage with LLM agents while ensuring 100% private data sovereignty.',
      href: '/about#ai',
      linkText: 'Explore AI Pillar',
    },
  ];

  const quickLinks = [
    {
      title: 'Frequently Asked Questions',
      subtitle: 'Clear answers on timelines, pricing, code ownership & tech stack',
      icon: HelpCircle,
      href: '/faq',
      badge: 'FAQ Hub',
      btnText: 'View All FAQs',
    },
    {
      title: 'Client Case Studies & Proof',
      subtitle: 'Real-world digital products, apps, and automated systems launched',
      icon: Layers,
      href: '/work',
      badge: 'Case Studies',
      btnText: 'Browse Portfolio',
    },
    {
      title: 'Terms & Service Level Agreement',
      subtitle: '100% IP ownership, sprint milestones, NDA & code handover terms',
      icon: FileText,
      href: '/terms',
      badge: 'Legal & SLA',
      btnText: 'Read Terms',
    },
    {
      title: 'Confidentiality & Privacy Policy',
      subtitle: 'Strict mutual NDA enforcement and private data governance standards',
      icon: ShieldCheck,
      href: '/privacy',
      badge: 'Privacy Policy',
      btnText: 'Read Privacy',
    },
  ];

  // Quick estimator lookup
  const estimates = {
    web: {
      mvp: { time: '2-3 Weeks', sprints: '1-2 Sprints', deliverable: 'High-converting Landing Page or Next.js Web App with CMS' },
      growth: { time: '4-6 Weeks', sprints: '2-3 Sprints', deliverable: 'Full-stack Web Platform with User Auth, Dashboard & API Integrations' },
      enterprise: { time: '8-12 Weeks', sprints: '4+ Sprints', deliverable: 'Scalable Microservices, Multi-tenant SaaS, or Headless E-commerce' },
    },
    app: {
      mvp: { time: '3-4 Weeks', sprints: '2 Sprints', deliverable: 'Core iOS & Android Cross-Platform Mobile App on TestFlight' },
      growth: { time: '6-8 Weeks', sprints: '3-4 Sprints', deliverable: 'Full Production App with Push Notifications, Cloud Sync & App Store Deployment' },
      enterprise: { time: '10-14 Weeks', sprints: '5+ Sprints', deliverable: 'Complex Multi-role Mobile Ecosystem with Realtime Websockets & Offline Engine' },
    },
    video: {
      mvp: { time: '3-5 Days', sprints: 'Quick Sprint', deliverable: 'Set of 3-5 High-Retention Short-form Ads or Reels with Kinetic Motion' },
      growth: { time: '1-2 Weeks', sprints: 'Bi-weekly', deliverable: '10-15 Commercial Creatives, YouTube Video Suite & Brand Motion Assets' },
      enterprise: { time: 'Monthly Retainer', sprints: 'Ongoing', deliverable: 'Full Creative Post-production Pipeline with Dedicated Senior Editors' },
    },
    ai: {
      mvp: { time: '1-2 Weeks', sprints: '1 Sprint', deliverable: 'Targeted Multi-step Automation (e.g., CRM Sync, Email Triage, or Document Parser)' },
      growth: { time: '3-4 Weeks', sprints: '2 Sprints', deliverable: 'Custom Autonomous AI Chatbot with Knowledge Base & Live System Webhooks' },
      enterprise: { time: '6-8 Weeks', sprints: '3-4 Sprints', deliverable: 'End-to-End Enterprise AI Pipeline with Custom Vector DB & Multi-agent Orchestration' },
    }
  };

  const currentEst = estimates[calcService][calcComplexity];

  return (
    <main className="relative pt-6 sm:pt-10 md:pt-14 pb-16 md:pb-24 overflow-hidden bg-[#FAFCFE]">
      {/* Background RGBA Ambient Light Effects */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[520px] pointer-events-none z-0" 
        style={{
          background: 'radial-gradient(circle at 50% 10%, rgba(2, 132, 199, 0.16) 0%, rgba(0, 196, 159, 0.08) 40%, transparent 70%)'
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute top-32 -right-24 w-80 h-80 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(0, 196, 159, 0.14) 0%, transparent 70%)',
          filter: 'blur(70px)'
        }}
        aria-hidden="true"
      />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 max-w-6xl mb-4 md:mb-6 relative z-10">
        <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 font-medium" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0284c7] transition-colors">Home</Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="text-[#0284c7] font-semibold">Resources</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="container mx-auto px-4 max-w-6xl mb-12 md:mb-16 relative z-10 text-center">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(2,132,199,0.1)] border border-[rgba(2,132,199,0.28)] text-[#0284c7] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0284c7] shadow-[0_0_8px_rgba(2,132,199,0.9)]"></span>
              <Sparkles size={13} />
              <span>Corelix Knowledge &amp; Client Hub</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-tight mb-4">
              Resources, Guides &amp; Project Toolkits
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6">
              Access our technical architecture guides, interactive project estimators, FAQs, legal SLAs, and client resources to help you plan and execute your next digital product.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Quick Navigation Cards */}
      <section className="container mx-auto px-4 max-w-6xl mb-16 md:mb-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollCard key={idx} delay={idx * 0.08}>
                <Link
                  href={item.href}
                  className="group p-5 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 hover:border-sky-400/60 shadow-[0_8px_25px_-5px_rgba(10,37,64,0.06)] hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[rgba(2,132,199,0.12)] to-[rgba(0,196,159,0.08)] text-[#0284C7] flex items-center justify-center border border-[rgba(2,132,199,0.2)]">
                        <Icon size={20} className="stroke-[2.2]" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-50 text-[#0284C7] border border-sky-100">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#0A2540] group-hover:text-[#0284C7] transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0284C7] group-hover:translate-x-0.5 transition-transform">
                    <span>{item.btnText}</span>
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </ScrollCard>
            );
          })}
        </div>
      </section>

      {/* Interactive Project Estimator */}
      <section className="container mx-auto px-4 max-w-6xl mb-16 md:mb-24 relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="rounded-2xl md:rounded-3xl bg-white/95 backdrop-blur-md p-5 sm:p-8 md:p-12 border border-slate-200/90 shadow-[0_15px_40px_-10px_rgba(10,37,64,0.08)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#00C49F]"></div>

            <div className="max-w-2xl mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(2,132,199,0.08)] border border-[rgba(2,132,199,0.2)] text-[#0284c7] text-xs font-bold uppercase tracking-wider mb-2">
                <Calculator size={13} />
                <span>Interactive Sprint Estimator</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0A2540] tracking-tight mb-2">
                Calculate Your Project Timeline &amp; Sprints
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Select your service requirement and complexity level to view expected turnaround and sprint structure.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Controls */}
              <div className="lg:col-span-7 space-y-6">
                {/* Service Select */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    1. Select Core Service
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'web', label: 'Website Dev', icon: Globe },
                      { id: 'app', label: 'Mobile App', icon: Smartphone },
                      { id: 'video', label: 'Video Editing', icon: Video },
                      { id: 'ai', label: 'AI Automation', icon: Bot },
                    ].map((s) => {
                      const Icon = s.icon;
                      const isSelected = calcService === s.id;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setCalcService(s.id as any)}
                          className={`p-3 rounded-xl border text-center flex flex-col items-center gap-1.5 transition-all ${
                            isSelected 
                              ? 'bg-[rgba(2,132,199,0.08)] border-[#0284C7] text-[#0284C7] font-bold shadow-xs' 
                              : 'bg-slate-50/70 hover:bg-slate-100 border-slate-200 text-slate-700'
                          }`}
                        >
                          <Icon size={18} />
                          <span className="text-xs">{s.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Complexity Select */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    2. Select Project Scope &amp; Complexity
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'mvp', title: 'MVP / Fast Launch', desc: 'Core feature set & quick go-to-market' },
                      { id: 'growth', title: 'Growth / Scale', desc: 'Full custom product with API sync' },
                      { id: 'enterprise', title: 'Enterprise Suite', desc: 'High-concurrency, complex pipelines' },
                    ].map((c) => {
                      const isSelected = calcComplexity === c.id;
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setCalcComplexity(c.id as any)}
                          className={`p-3.5 rounded-xl border text-left transition-all ${
                            isSelected 
                              ? 'bg-[rgba(2,132,199,0.08)] border-[#0284C7] shadow-xs' 
                              : 'bg-slate-50/70 hover:bg-slate-100 border-slate-200'
                          }`}
                        >
                          <div className={`text-xs font-bold ${isSelected ? 'text-[#0284C7]' : 'text-[#0A2540]'}`}>
                            {c.title}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            {c.desc}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Output Display Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-gradient-to-br from-[#0A2540] via-[#08213B] to-[#0284C7] p-6 sm:p-7 text-white shadow-lg relative overflow-hidden border border-sky-400/20">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[rgba(0,196,159,0.2)] rounded-full filter blur-2xl pointer-events-none"></div>

                  <div className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] mb-1">
                    Estimated Sprint Architecture
                  </div>
                  <div className="text-xl sm:text-2xl font-black mb-4 flex items-center gap-2">
                    <span>{currentEst.time}</span>
                    <span className="text-xs font-normal px-2.5 py-0.5 rounded-full bg-white/10 text-sky-200 border border-white/20">
                      {currentEst.sprints}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-xs text-slate-200 leading-relaxed mb-5">
                    <div className="font-bold text-white mb-1">Primary Milestone Deliverables:</div>
                    <p>{currentEst.deliverable}</p>
                  </div>

                  <div className="space-y-2 text-xs text-slate-200 mb-6">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                      <span>Dedicated senior engineer &amp; technical lead</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                      <span>100% IP &amp; Git repository ownership</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                      <span>Free 30-day post-launch warranty &amp; QA</span>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#00C49F] text-white font-bold text-xs hover:opacity-95 transition-opacity inline-flex items-center justify-center gap-2 shadow"
                  >
                    <span>Request Custom Technical Quote</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Engineering Guides & Frameworks */}
      <section className="container mx-auto px-4 max-w-6xl mb-16 md:mb-20 relative z-10">
        <ScrollReveal direction="up">
          <div className="max-w-2xl mb-8 md:mb-12">
            <div className="inline-block text-xs font-bold text-[#0284c7] uppercase tracking-widest mb-2">
              Engineering &amp; Creative Methodologies
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0A2540] tracking-tight mb-2">
              Technical Frameworks &amp; Deep Dives
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Read how our technical teams execute high-speed web apps, cross-platform mobile deployments, viral video editing, and autonomous AI agents.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {guides.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollCard key={idx} delay={idx * 0.1}>
                <div 
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-sky-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold text-[#0284C7] uppercase tracking-wider bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-100">
                        {item.category}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    </div>

                    <div className="flex items-start gap-3.5 mb-2">
                      <div className="w-9 h-9 rounded-xl bg-[rgba(2,132,199,0.1)] text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-base font-bold text-[#0A2540] tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 pl-12">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 pl-12">
                    <Link 
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0284C7] hover:text-[#0369a1] transition-colors"
                    >
                      <span>{item.linkText}</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </ScrollCard>
            );
          })}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="container mx-auto px-4 max-w-5xl relative z-10">
        <ScrollReveal direction="zoom">
          <div className="rounded-2xl md:rounded-3xl bg-gradient-to-r from-[#0A2540] via-[#08213B] to-[#0284C7] p-6 sm:p-10 text-center text-white relative overflow-hidden border border-sky-400/20 shadow-xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-3">
              Ready to Plan Your Next Release?
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto mb-6 leading-relaxed">
              Schedule a confidential 30-minute discovery session with our technical team to discuss architecture, timeline, and exact deliverables.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#00C49F] text-white font-bold text-xs sm:text-sm hover:opacity-95 transition-opacity shadow inline-flex items-center justify-center gap-2"
              >
                <span>Schedule Free Strategy Call</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/faq"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm transition-colors border border-white/20 inline-flex items-center justify-center"
              >
                <span>Explore FAQs First</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
