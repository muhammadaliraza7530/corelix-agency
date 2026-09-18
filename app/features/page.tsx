import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Check, 
  X, 
  ArrowRight, 
  ChevronRight, 
  Globe, 
  Smartphone, 
  Video, 
  Bot, 
  Layers, 
  Clock, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';
import { ScrollReveal, ScrollCard } from '@/components/ScrollAnimation';

export const metadata: Metadata = {
  title: 'Why Corelix | Corelix Systems - Web, App, Video & AI Automation',
  description: 'Discover why innovative businesses partner with Corelix Systems for Website Development, App Development, Video Editing, and AI Automation.',
  openGraph: {
    title: 'Why Corelix | Corelix Systems',
    description: 'Discover why innovative businesses partner with Corelix Systems for Website Development, App Development, Video Editing, and AI Automation.',
  },
};

export default function FeaturesPage() {
  const capabilities = [
    {
      icon: Globe,
      title: 'Modern Website Architecture',
      desc: 'Next.js 15, React, and TypeScript web development engineered with sub-second page loads, responsive UX, and optimized conversion architecture.',
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform Mobile Apps',
      desc: 'High-performing iOS and Android applications built with React Native and Flutter, featuring real-time offline sync and enterprise cloud backends.',
    },
    {
      icon: Video,
      title: 'High-Retention Video Editing',
      desc: 'Commercials, direct-response video ads, viral reels, and kinetic motion graphics designed to hook attention and drive customer action.',
    },
    {
      icon: Bot,
      title: 'Intelligent AI Automation',
      desc: 'Autonomous AI agents, customer support chatbots, and multi-step CRM/ERP automations that save hundreds of operational hours each month.',
    },
    {
      icon: Zap,
      title: 'All-In-One Unified Studio',
      desc: 'No need to coordinate 4 different contractors. We synchronize software development, mobile engineering, video creation, and AI under one team.',
    },
    {
      icon: ShieldCheck,
      title: '100% Asset & Code Ownership',
      desc: 'You receive complete Git repository rights, source code, production project files, and full administrative autonomy upon delivery.',
    },
  ];

  const comparison = [
    {
      feature: 'Unified Services (Web, App, Video & AI)',
      corelix: true,
      traditional: 'Web only or video only',
      inhouse: 'Requires 4+ separate hires',
    },
    {
      feature: 'Full-Stack Modern Tech (Next.js, Flutter, React)',
      corelix: true,
      traditional: 'Legacy WordPress or templates',
      inhouse: 'High developer salary overhead',
    },
    {
      feature: 'Custom AI Agent & Pipeline Integrations',
      corelix: true,
      traditional: false,
      inhouse: 'Rare specialized talent',
    },
    {
      feature: 'Direct-Response Video & Motion Graphics Studio',
      corelix: true,
      traditional: 'Outsourced to third-party studios',
      inhouse: 'Costly dedicated video editor',
    },
    {
      feature: 'Agile Milestone Sprints & Direct Slack/Email',
      corelix: true,
      traditional: 'Slow bureaucratic ticketing',
      inhouse: 'Complex internal project management',
    },
    {
      feature: 'Full Source Code & Production Files Handoff',
      corelix: true,
      traditional: 'Vendor lock-in contracts',
      inhouse: true,
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Discovery & Blueprinting',
      time: 'Days 1 – 3',
      desc: 'We map out your technical requirements, wireframes, video storyboards, or AI workflow architecture with clear milestone deliverables.',
    },
    {
      num: '02',
      title: 'Design & Agile Development',
      time: 'Days 4 – 14',
      desc: 'Rapid sprint execution: frontend & backend coding, mobile app builds, video editing cuts, or LLM agent configuration with iterative client previews.',
    },
    {
      num: '03',
      title: 'Rigorous Testing & Polish',
      time: 'Days 15 – 20',
      desc: 'Comprehensive cross-device QA, Core Web Vitals optimization, sound mastering, audio color passes, and automated test suite validation.',
    },
    {
      num: '04',
      title: 'Deployment & Ongoing Scaling',
      time: 'Day 21 and beyond',
      desc: 'Smooth production launch to production domains, App Store / Google Play submissions, video distribution, and continuous AI monitoring.',
    },
  ];

  return (
    <main className="relative pt-6 sm:pt-10 md:pt-14 pb-16 md:pb-20 overflow-hidden bg-[#FAFCFE]">
      {/* Ambient RGBA Decorative Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[560px] pointer-events-none overflow-hidden z-0">
        {/* Top Center Sky Glow */}
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[340px] sm:w-[620px] h-[340px] sm:h-[460px] rounded-full bg-[radial-gradient(circle,rgba(2,132,199,0.18)_0%,rgba(56,189,248,0.08)_45%,rgba(255,255,255,0)_70%)] blur-3xl" />
        {/* Top Left Teal Glow */}
        <div className="absolute top-10 -left-16 sm:-left-24 w-[260px] sm:w-[420px] h-[260px] sm:h-[420px] rounded-full bg-[radial-gradient(circle,rgba(0,196,159,0.14)_0%,rgba(2,132,199,0.05)_50%,rgba(255,255,255,0)_70%)] blur-3xl" />
        {/* Top Right Deep Navy Glow */}
        <div className="absolute top-16 -right-16 sm:-right-24 w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] rounded-full bg-[radial-gradient(circle,rgba(10,37,64,0.09)_0%,rgba(2,132,199,0.06)_50%,rgba(255,255,255,0)_70%)] blur-3xl" />
      </div>

      {/* Top Breadcrumb */}
      <div className="relative z-10 container mx-auto px-4 max-w-6xl mb-6">
        <nav className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-medium bg-white/70 backdrop-blur-xs border border-[rgba(2,132,199,0.12)] px-3.5 py-1.5 rounded-full shadow-[0_2px_10px_rgba(2,132,199,0.04)]" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0284c7] transition-colors">Home</Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="text-[#0284c7] font-semibold">Why Us &amp; Capabilities</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 max-w-6xl mb-16 sm:mb-20 text-center">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(2,132,199,0.08)] border border-[rgba(2,132,199,0.22)] text-[#0284c7] text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-5 shadow-[0_2px_10px_rgba(2,132,199,0.08)]">
              <Layers size={14} className="text-sky-600" />
              <span>The Corelix Advantage</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.25] sm:leading-tight mb-4 sm:mb-6 px-1">
              Engineered For Excellence. Designed to Scale.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Discover why businesses trust Corelix Systems to build high-performance websites, mobile applications, compelling video creatives, and game-changing AI automations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#0284C7] via-[#0274B3] to-[#0369A1] hover:from-[#0369A1] hover:to-[#0284C7] shadow-lg shadow-[rgba(2,132,199,0.28)] hover:shadow-xl hover:shadow-[rgba(2,132,199,0.38)] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span className="whitespace-nowrap tracking-wide">Start Your Project</span>
                <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
              </Link>
              <Link 
                href="/work" 
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base text-slate-700 bg-white/95 hover:bg-white border border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-md shadow-[rgba(0,0,0,0.03)] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>View Our Work</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 6 Capabilities Cards */}
      <section className="relative z-10 container mx-auto px-4 max-w-6xl mb-20 sm:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollCard key={idx} delay={idx * 0.08}>
                <div 
                  className="group bg-white/90 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-[rgba(2,132,199,0.1)] hover:border-[rgba(2,132,199,0.35)] shadow-[0_4px_20px_rgba(2,132,199,0.05)] hover:shadow-[0_12px_32px_rgba(2,132,199,0.12)] transition-all duration-300 h-full flex flex-col relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgba(2,132,199,0)] via-[rgba(2,132,199,0.4)] to-[rgba(0,196,159,0.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-12 h-12 rounded-xl bg-[rgba(2,132,199,0.08)] border border-[rgba(2,132,199,0.15)] text-[#0284c7] flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 group-hover:bg-[rgba(2,132,199,0.14)] transition-all">
                    <Icon size={22} />
                  </div>
                  <h2 className="text-lg font-bold text-[#0A2540] mb-2">{item.title}</h2>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollCard>
            );
          })}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative z-10 container mx-auto px-4 max-w-6xl mb-20 sm:mb-24">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-block text-xs font-bold text-[#0284c7] uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[rgba(2,132,199,0.08)] border border-[rgba(2,132,199,0.18)]">
              Objective Comparison
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#0A2540] mb-3 sm:mb-4">
              How Corelix Systems Compares
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              See how our integrated approach delivers superior velocity, craftsmanship, and cost efficiency.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.15}>
          {/* Mobile View: Zero horizontal scrolling - all comparison points fully visible in cards */}
          <div className="md:hidden space-y-3.5">
            {comparison.map((row, idx) => (
              <div 
                key={idx} 
                className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-[rgba(2,132,199,0.14)] shadow-[0_4px_18px_rgba(2,132,199,0.06)]"
              >
                <div className="mb-3 pb-2.5 border-b border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Capability {idx + 1}</span>
                  <h3 className="font-bold text-[#0A2540] text-sm leading-snug">
                    {row.feature}
                  </h3>
                </div>

                <div className="space-y-2">
                  {/* Corelix Systems Advantage */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[rgba(2,132,199,0.08)] border border-[rgba(2,132,199,0.22)]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#0284c7] shrink-0" />
                      <span className="text-xs font-bold text-[#0A2540]">Corelix Systems</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284c7]">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-br from-[#0284C7] to-[#0369A1] text-white shadow-xs">
                        <Check size={12} className="stroke-[3]" />
                      </span>
                      <span>Included</span>
                    </span>
                  </div>

                  {/* Traditional Agencies */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/70 text-xs">
                    <span className="font-medium text-slate-500">Traditional Agencies</span>
                    <span className="font-medium text-slate-600 text-right ml-2 max-w-[55%]">
                      {typeof row.traditional === 'boolean' ? (
                        row.traditional ? (
                          <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
                            <Check size={13} /> Yes
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-rose-500 font-medium">
                            <X size={13} /> Not Offered
                          </span>
                        )
                      ) : (
                        <span className="text-slate-600">{row.traditional}</span>
                      )}
                    </span>
                  </div>

                  {/* Freelancers / Inhouse */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/70 text-xs">
                    <span className="font-medium text-slate-500">Freelancers / Hiring</span>
                    <span className="font-medium text-slate-600 text-right ml-2 max-w-[55%]">
                      {typeof row.inhouse === 'boolean' ? (
                        row.inhouse ? (
                          <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
                            <Check size={13} /> Yes
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-rose-500 font-medium">
                            <X size={13} /> Not Standard
                          </span>
                        )
                      ) : (
                        <span className="text-slate-600">{row.inhouse}</span>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tablet & Desktop View: Clean full width table with no scrolling */}
          <div className="hidden md:block bg-white/95 backdrop-blur-sm rounded-2xl border border-[rgba(2,132,199,0.12)] shadow-[0_8px_30px_rgba(2,132,199,0.06)] overflow-hidden">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200/80 bg-[rgba(2,132,199,0.04)]">
                  <th className="p-4 md:p-5 font-bold text-slate-700 w-2/5">Deliverable / Capability</th>
                  <th className="p-4 md:p-5 font-bold text-[#0284c7] bg-[rgba(2,132,199,0.08)] w-1/5 text-center">Corelix Systems</th>
                  <th className="p-4 md:p-5 font-bold text-slate-600 w-1/5 text-center">Traditional Agencies</th>
                  <th className="p-4 md:p-5 font-bold text-slate-600 w-1/5 text-center">Freelancers / Hiring</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="p-4 md:p-5 font-medium text-slate-800">{row.feature}</td>
                    <td className="p-4 md:p-5 bg-[rgba(2,132,199,0.04)] text-center">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-[#0284C7] to-[#0369A1] text-white shadow-[0_2px_8px_rgba(2,132,199,0.35)]">
                        <Check size={16} />
                      </span>
                    </td>
                    <td className="p-4 md:p-5 text-center text-xs text-slate-500 font-medium">
                      {typeof row.traditional === 'boolean' ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-400">
                          <X size={14} />
                        </span>
                      ) : (
                        row.traditional
                      )}
                    </td>
                    <td className="p-4 md:p-5 text-center text-xs text-slate-500 font-medium">
                      {typeof row.inhouse === 'boolean' ? (
                        row.inhouse ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600">
                            <Check size={14} />
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-400">
                            <X size={14} />
                          </span>
                        )
                      ) : (
                        row.inhouse
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </section>

      {/* 4-Step Process */}
      <section className="relative z-10 container mx-auto px-4 max-w-6xl mb-8 sm:mb-12">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-block text-xs font-bold text-[#0284c7] uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[rgba(2,132,199,0.08)] border border-[rgba(2,132,199,0.18)]">
              Our Delivery Blueprint
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#0A2540] mb-3 sm:mb-4">
              How We Take Your Project from Concept to Scale
            </h2>
            <p className="text-slate-600 text-sm md:text-base">
              A battle-tested production process that guarantees punctual delivery, crystal-clear milestones, and zero surprises.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((step, idx) => (
            <ScrollCard key={idx} delay={idx * 0.1}>
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-[rgba(2,132,199,0.1)] hover:border-[rgba(2,132,199,0.3)] shadow-[0_4px_20px_rgba(2,132,199,0.04)] hover:shadow-[0_12px_28px_rgba(2,132,199,0.1)] relative flex flex-col justify-between h-full transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-[#0284c7] drop-shadow-[0_2px_4px_rgba(2,132,199,0.2)]">{step.num}</span>
                    <span className="text-xs font-bold text-sky-700 bg-[rgba(2,132,199,0.08)] border border-[rgba(2,132,199,0.18)] px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Clock size={12} /> {step.time}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-[#0A2540] mb-2">{step.title}</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </ScrollCard>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="relative z-10 container mx-auto px-4 max-w-5xl">
        <ScrollReveal direction="zoom">
          <div className="relative overflow-hidden bg-gradient-to-r from-[#0A2540] via-[#0284c7] to-[#00C49F] rounded-2xl sm:rounded-3xl pt-6 pb-7 px-5 sm:p-10 md:p-12 text-center text-white shadow-[0_16px_40px_rgba(2,132,199,0.3)] border border-[rgba(255,255,255,0.15)]">
            {/* Inner ambient shine */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_60%)] pointer-events-none" />
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3 sm:mb-4">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="text-slate-100 text-sm md:text-base max-w-2xl mx-auto mb-6 sm:mb-8">
              Tell us about your requirements for Website Development, App Development, Video Editing, or AI Automation. Our technical directors will prepare a detailed project proposal.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-[#0A2540] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all shadow-lg shadow-[rgba(0,0,0,0.15)] inline-flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span className="whitespace-nowrap">Get Free Project Proposal</span>
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1 shrink-0" />
              </Link>
              <Link 
                href="/about" 
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.22)] text-white font-bold text-sm sm:text-base transition-colors border border-[rgba(255,255,255,0.25)] backdrop-blur-xs inline-flex items-center justify-center"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
