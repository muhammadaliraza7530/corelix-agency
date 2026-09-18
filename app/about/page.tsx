import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Smartphone, 
  Video, 
  Bot, 
  Sparkles,
  Zap,
  Code2,
  ChevronRight,
  ShieldCheck,
  Rocket
} from 'lucide-react';
import { ScrollReveal, ScrollCard } from '@/components/ScrollAnimation';

export const metadata: Metadata = {
  title: 'About Us | Corelix Systems - Web, App, Video & AI Automation Agency',
  description: 'Learn about Corelix Systems, our mission, capabilities, and how we empower modern businesses with Website Development, App Development, Video Editing, and AI Automation.',
  openGraph: {
    title: 'About Us | Corelix Systems',
    description: 'Learn about Corelix Systems, our mission, capabilities, and how we empower modern businesses with Website Development, App Development, Video Editing, and AI Automation.',
  },
};

export default function AboutPage() {
  const milestones = [
    { label: 'Web & Mobile Projects Delivered', value: '140+', icon: Code2 },
    { label: 'Video Creatives & Commercials', value: '2,500+', icon: Video },
    { label: 'Work Hours Saved via AI', value: '45,000+', icon: Bot },
    { label: 'Client Satisfaction Rate', value: '99.4%', icon: Sparkles },
  ];

  const services = [
    {
      id: 'web',
      title: 'Website Development',
      subtitle: 'Modern, High-Speed Web Applications & Portals',
      desc: 'We architect enterprise-grade websites, full-stack Next.js and React web applications, custom e-commerce systems, and high-conversion landing pages engineered for speed, SEO, and flawless mobile responsiveness.',
      icon: Globe,
      features: [
        'Next.js 15+, React, and TypeScript architecture',
        'Custom headless CMS and API-first architectures',
        'Lightning-fast Core Web Vitals and 95+ PageSpeed scores',
        'Conversion-optimized user flows & checkout systems',
      ],
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL', 'Headless CMS'],
    },
    {
      id: 'app',
      title: 'App Development',
      subtitle: 'Native & Cross-Platform iOS & Android Apps',
      desc: 'From initial wireframes and interactive prototypes to app store launch and scale, we craft smooth, high-performing mobile applications using React Native and Flutter with real-time sync and robust cloud infrastructure.',
      icon: Smartphone,
      features: [
        'Cross-platform iOS and Android codebase efficiency',
        'Offline-first synchronization and real-time websockets',
        'Secure cloud backend, Firebase, and PostgreSQL integrations',
        'App Store and Google Play deployment & maintenance',
      ],
      tags: ['React Native', 'Flutter', 'iOS & Swift', 'Android & Kotlin', 'Firebase', 'Cloud Run'],
    },
    {
      id: 'video',
      title: 'Video Editing',
      subtitle: 'High-Retention Commercials, Reels & Motion Graphics',
      desc: 'Our creative post-production studio crafts attention-grabbing video assets tailored for social feeds, advertising campaigns, and corporate brand storytelling. We combine narrative psychology with pacing that hooks viewers.',
      icon: Video,
      features: [
        'Direct-response video ads for Meta, TikTok, and YouTube',
        'Short-form viral content (Instagram Reels & TikToks)',
        'Cinematic color grading, sound design, and audio mastering',
        'Custom 2D/3D motion graphics and animated kinetic typography',
      ],
      tags: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Motion Graphics', 'Shorts/Reels', 'UGC Ads'],
    },
    {
      id: 'ai',
      title: 'AI Automation',
      subtitle: 'Intelligent Workflows, Agents & Autonomous Systems',
      desc: 'We build tailored AI pipelines and autonomous agents that handle repetitive tasks, customer support, lead qualification, and data processing—allowing your team to focus on high-leverage strategic growth.',
      icon: Bot,
      features: [
        'Custom LLM agents and multi-step automated workflows',
        'Intelligent 24/7 customer support and lead-qualification chatbots',
        'Seamless CRM, ERP, Slack, and database automations',
        'Document parsing, semantic search, and predictive business intelligence',
      ],
      tags: ['OpenAI & Claude', 'LangChain', 'Python & FastAPI', 'Make & Zapier', 'Vector Databases', 'Custom Bots'],
    },
  ];

  const values = [
    {
      step: '01',
      title: 'Engineering Craftsmanship',
      subtitle: 'Zero Bloat, Pure Performance',
      desc: 'We write clean, modular, and maintainable code, cut pristine video frames, and design fault-tolerant AI pipelines with obsessive attention to detail.',
      icon: Code2,
      badge: 'Architecture',
    },
    {
      step: '02',
      title: 'Speed & Iterative Agility',
      subtitle: 'Rapid Sprints & Quick Deployments',
      desc: 'We move fast without cutting corners. Rapid prototyping and bi-weekly staging releases ensure your product reaches users faster than competitors.',
      icon: Zap,
      badge: 'Fast Turnaround',
    },
    {
      step: '03',
      title: 'Future-Proof Scalability',
      subtitle: 'Engineered to Handle Millions',
      desc: 'Every web app, mobile system, video creative, and autonomous AI workflow is architected to scale effortlessly as your traffic and revenue grow.',
      icon: Rocket,
      badge: 'Enterprise Scale',
    },
    {
      step: '04',
      title: 'Transparent Collaboration',
      subtitle: 'Direct Access & 100% IP Ownership',
      desc: 'No middle managers. You get direct Slack or WhatsApp access to lead engineers, daily updates, full code ownership, and zero lock-in contracts.',
      icon: ShieldCheck,
      badge: 'Client First',
    },
  ];

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
        className="absolute top-20 -left-20 w-72 h-72 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute top-40 -right-20 w-80 h-80 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(0, 196, 159, 0.14) 0%, transparent 70%)',
          filter: 'blur(70px)'
        }}
        aria-hidden="true"
      />

      {/* Top Breadcrumb */}
      <div className="container mx-auto px-4 max-w-6xl mb-4 md:mb-6 relative z-10">
        <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 font-medium" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0284c7] transition-colors">Home</Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="text-[#0284c7] font-semibold">About Us</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 max-w-6xl mb-12 md:mb-20 relative z-10">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-3xl mx-auto text-center">
            {/* Mobile-Friendly Glassmorphic Card Container for Hero */}
            <div className="bg-white/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-6 sm:p-8 md:p-0 rounded-2xl md:rounded-none border border-slate-200/80 md:border-none shadow-sm md:shadow-none">
              
              {/* RGBA Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(2,132,199,0.1)] border border-[rgba(2,132,199,0.28)] text-[#0284c7] text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#0284c7] shadow-[0_0_8px_rgba(2,132,199,0.9)]"></span>
                <Sparkles size={13} />
                <span>About Corelix Systems</span>
              </div>

              {/* Main Title with responsive clamping */}
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.2] mb-4 md:mb-6">
                Building Digital Products, Content &amp; Intelligent Automation
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto">
                Corelix Systems is a modern technology and digital creative studio. We specialize in high-performance <span className="font-semibold text-slate-800">Website Development</span>, intuitive <span className="font-semibold text-slate-800">App Development</span>, high-converting <span className="font-semibold text-slate-800">Video Editing</span>, and scalable <span className="font-semibold text-slate-800">AI Automation</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#00C49F] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <span>Start Your Project</span>
                  <ArrowRight size={16} />
                </Link>
                <Link 
                  href="/work" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#0A2540] border border-slate-200 font-semibold text-sm hover:bg-slate-50 transition-colors shadow-xs"
                >
                  <span>View Case Studies</span>
                </Link>
              </div>

              {/* Trust Chips Bar on Mobile */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mt-6 pt-5 border-t border-slate-100/90 text-xs text-slate-500">
                <div className="inline-flex items-center gap-1.5">
                  <Zap size={13} className="text-amber-500" />
                  <span>Rapid Delivery</span>
                </div>
                <span className="text-slate-300">&bull;</span>
                <div className="inline-flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-emerald-500" />
                  <span>Senior Engineers</span>
                </div>
                <span className="text-slate-300">&bull;</span>
                <div className="inline-flex items-center gap-1.5">
                  <Rocket size={13} className="text-[#0284c7]" />
                  <span>Proven Scale</span>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Stats / Milestone Bar */}
      <section className="container mx-auto px-4 max-w-6xl mb-14 md:mb-24 relative z-10">
        <ScrollReveal direction="up" delay={0.15}>
          <div className="relative rounded-2xl md:rounded-3xl bg-white/95 backdrop-blur-md p-4 sm:p-7 md:p-10 border border-slate-200/90 shadow-[0_12px_36px_-8px_rgba(10,37,64,0.08)] overflow-hidden">
            {/* Subtle Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#00C49F]"></div>

            {/* Mobile Micro Header */}
            <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100 text-xs text-slate-500">
              <span className="font-bold text-[#0A2540] tracking-wide uppercase text-[11px]">
                Key Performance Benchmarks
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0284C7] bg-[rgba(2,132,199,0.08)] px-2.5 py-0.5 rounded-full border border-[rgba(2,132,199,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] animate-pulse"></span>
                Live Metrics
              </span>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {milestones.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <ScrollCard key={idx} delay={idx * 0.08}>
                    <div 
                      className="group relative flex flex-col items-center text-center p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[rgba(248,250,252,0.85)] hover:bg-white border border-[rgba(226,232,240,0.9)] hover:border-[rgba(56,189,248,0.5)] shadow-xs hover:shadow-md transition-all duration-200"
                    >
                      {/* Subtle inner top glow */}
                      <div className="absolute top-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-sky-300/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                      {/* Icon Container with RGBA gradient */}
                      <div className="w-11 h-11 sm:w-13 sm:h-13 mx-auto mb-2.5 sm:mb-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[rgba(2,132,199,0.12)] to-[rgba(0,196,159,0.08)] text-[#0284c7] flex items-center justify-center border border-[rgba(2,132,199,0.2)] shadow-xs group-hover:scale-105 transition-transform">
                        <Icon size={22} className="stroke-[2.2]" />
                      </div>

                      {/* Value */}
                      <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A2540] tracking-tight leading-none mb-1.5">
                        {item.value}
                      </div>

                      {/* Label */}
                      <div className="text-[11px] sm:text-xs md:text-sm font-semibold text-slate-600 leading-snug px-1">
                        {item.label}
                      </div>
                    </div>
                  </ScrollCard>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="container mx-auto px-4 max-w-6xl mb-16 md:mb-24 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(2,132,199,0.08)] border border-[rgba(2,132,199,0.2)] text-[#0284c7] text-xs font-bold uppercase tracking-widest mb-3">
              <span>What We Do</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2540] mb-3">
              Our Four Core Service Pillars
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Everything your brand needs to build modern software, launch mobile products, engage audiences with video, and automate operations with artificial intelligence.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8 md:space-y-12">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isEven = idx % 2 === 1;
            return (
              <ScrollReveal key={idx} direction="up" delay={0.05}>
                <div 
                  id={service.id}
                  className="bg-white rounded-2xl md:rounded-3xl border border-slate-200/80 p-5 sm:p-8 md:p-12 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  {/* Subtle top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0284C7] to-[#00C49F]"></div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
                    <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : ''} space-y-3.5 md:space-y-4`}>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 text-[#0284c7] text-xs font-bold uppercase tracking-wider border border-sky-100">
                        <Icon size={15} /> Service 0{idx + 1}
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0A2540]">
                        {service.title}
                      </h3>
                      <div className="text-xs sm:text-sm font-semibold text-[#0284c7]">
                        {service.subtitle}
                      </div>
                      <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                        {service.desc}
                      </p>

                      <div className="space-y-2 pt-1">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-[#0284c7] shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm font-medium text-slate-700">{feat}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3">
                        {service.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : ''}`}>
                      <div className="rounded-2xl bg-gradient-to-br from-[#0A2540] via-[#08213B] to-[#0284c7] p-6 sm:p-8 text-white text-center flex flex-col items-center justify-center min-h-[220px] sm:min-h-[260px] shadow-sm relative overflow-hidden">
                        {/* Ambient card light */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[rgba(2,132,199,0.3)] rounded-full filter blur-2xl pointer-events-none"></div>

                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 sm:mb-5 border border-white/20 shadow-inner">
                          <Icon size={38} className="text-white" />
                        </div>
                        <div className="text-lg sm:text-xl font-bold mb-1.5">{service.title}</div>
                        <div className="text-xs text-sky-200 mb-5">Engineered by Corelix Systems</div>
                        <Link 
                          href="/contact" 
                          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white text-[#0A2540] font-bold text-xs hover:bg-slate-100 transition-all inline-flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          <span>Request Quote</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 max-w-6xl mb-16 md:mb-24 relative z-10">
        <ScrollReveal direction="up">
          <div className="relative rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#0A2540] via-[#08213B] to-[#051525] text-white p-5 sm:p-8 md:p-14 overflow-hidden border border-sky-500/30 shadow-[0_20px_50px_-10px_rgba(2,132,199,0.3)]">
            {/* Ambient RGBA light glows */}
            <div 
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none z-0"
              style={{
                background: 'radial-gradient(circle, rgba(2, 132, 199, 0.35) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
              aria-hidden="true"
            />
            <div 
              className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full pointer-events-none z-0"
              style={{
                background: 'radial-gradient(circle, rgba(0, 196, 159, 0.25) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
              aria-hidden="true"
            />

            <div className="max-w-2xl mb-8 md:mb-12 relative z-10 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(56,189,248,0.12)] border border-[rgba(56,189,248,0.3)] text-[#38BDF8] text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_8px_rgba(56,189,248,0.9)]"></span>
                <Sparkles size={13} />
                <span>Our Core Principles</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-2.5">
                Why Companies Trust Corelix Systems
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Our engineering standards, transparent delivery practices, and relentless focus on client ROI ensure your technology succeeds long-term.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative z-10">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <ScrollCard key={idx} delay={idx * 0.1}>
                    <div 
                      className="group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-sky-400/20 hover:border-sky-400/50 backdrop-blur-md transition-all duration-300 hover:shadow-[0_10px_30px_-5px_rgba(2,132,199,0.3)] hover:-translate-y-0.5"
                    >
                      {/* Top card metadata strip */}
                      <div className="flex items-center justify-between gap-2 mb-3.5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#38BDF8] bg-[rgba(2,132,199,0.25)] border border-[rgba(56,189,248,0.35)] px-2.5 py-0.5 rounded-md">
                          Pillar {val.step}
                        </span>
                        <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/10">
                          {val.badge}
                        </span>
                      </div>

                      {/* Header with Icon and Title */}
                      <div className="flex items-start gap-3.5 mb-2.5">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[rgba(2,132,199,0.35)] to-[rgba(0,196,159,0.2)] text-[#38BDF8] flex items-center justify-center shrink-0 border border-[rgba(56,189,248,0.3)] shadow-xs group-hover:scale-105 transition-transform">
                          <Icon size={20} className="stroke-[2.2]" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                            {val.title}
                          </h3>
                          <div className="text-xs font-medium text-[#38BDF8]">
                            {val.subtitle}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 pt-2 border-t border-white/10">
                        {val.desc}
                      </p>
                    </div>
                  </ScrollCard>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Call to Action Bar */}
      <section className="container mx-auto px-4 max-w-5xl relative z-10">
        <ScrollReveal direction="zoom">
          <div className="bg-gradient-to-br from-[#0A2540] via-[#08213B] to-[#0284c7] rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden border border-sky-500/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgba(0,196,159,0.2)] rounded-full filter blur-3xl pointer-events-none"></div>

            <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-3 sm:mb-4 tracking-tight">
              Have a Project in Mind? Let&apos;s Build It.
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              Whether you need a full-stack Web Application, a mobile App, high-impact Video Editing, or custom AI Automation, Corelix Systems has the expertise to execute your vision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#00C49F] text-white font-bold text-sm hover:opacity-95 transition-opacity shadow-md inline-flex items-center justify-center gap-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={16} />
              </Link>
              <Link 
                href="/work" 
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/20 inline-flex items-center justify-center"
              >
                <span>Explore Our Work</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
