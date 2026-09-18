import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, 
  ChevronRight, 
  Star, 
  Briefcase,
  Globe,
  Smartphone,
  Video,
  Bot
} from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollAnimation';

export const metadata: Metadata = {
  title: 'Our Work & Case Studies | Corelix Systems',
  description: 'Explore verified client case studies and outcomes delivered by Corelix Systems across Website Development, App Development, Video Editing, and AI Automation.',
  openGraph: {
    title: 'Our Work & Case Studies | Corelix Systems',
    description: 'Explore verified client case studies and outcomes delivered by Corelix Systems across Website Development, App Development, Video Editing, and AI Automation.',
  },
};

export default function WorkPage() {
  const caseStudies = [
    {
      client: 'Lumina Living',
      serviceType: 'Website Development',
      serviceIcon: Globe,
      period: 'Full-Stack Web Engineering',
      challenge: 'Legacy web storefront suffered from slow loading speeds (4.2s), clunky mobile checkout, and poor SEO rankings.',
      solution: 'Architected a custom headless Next.js 15 e-commerce application with Tailwind CSS, edge caching, and optimized checkout UX.',
      metrics: [
        { label: 'PageSpeed Score', value: '99/100' },
        { label: 'Mobile Conversion', value: '+142%' },
        { label: 'Bounce Rate', value: '-58%' },
      ],
      tags: ['Next.js 15', 'React', 'Tailwind CSS', 'TypeScript', 'Stripe API', 'SEO'],
    },
    {
      client: 'AuraPay Financial',
      serviceType: 'App Development',
      serviceIcon: Smartphone,
      period: 'iOS & Android Mobile App',
      challenge: 'Needed a scalable cross-platform mobile application for personal wealth management with bank-grade security and instant transaction sync.',
      solution: 'Engineered a high-performance React Native mobile app with biometric authentication, WebSocket real-time updates, and Firebase cloud backend.',
      metrics: [
        { label: 'Active Users', value: '120,000+' },
        { label: 'App Store Rating', value: '4.9 ★' },
        { label: 'Crash-Free Rate', value: '99.9%' },
      ],
      tags: ['React Native', 'iOS & Android', 'Firebase', 'Biometrics', 'WebSockets', 'Cloud Run'],
    },
    {
      client: 'Vitality Health & Fitness',
      serviceType: 'Video Editing',
      serviceIcon: Video,
      period: 'Direct-Response & Commercials',
      challenge: 'Ad campaigns were fatigued with low retention (users dropping off in first 3 seconds) leading to soaring cost per acquisition.',
      solution: 'Produced, cut, and animated 40+ direct-response video ads, viral reels, and motion graphic teasers with attention-grabbing hooks and dynamic pacing.',
      metrics: [
        { label: 'Ad Impressions', value: '18M+' },
        { label: 'Average ROAS', value: '3.6x' },
        { label: 'CAC Reduction', value: '-44%' },
      ],
      tags: ['Premiere Pro', 'After Effects', 'Sound Design', 'Kinetic Typography', 'TikTok Ads', 'Meta Reels'],
    },
    {
      client: 'CloudMetrics Global',
      serviceType: 'AI Automation',
      serviceIcon: Bot,
      period: 'Custom AI Agent & Workflow Engine',
      challenge: 'Operations team spent over 50 hours weekly manually copy-pasting CRM data, qualifying leads, and drafting repetitive client responses.',
      solution: 'Built an autonomous AI agent pipeline integrating OpenAI LLMs, Slack, HubSpot CRM, and automated PDF document extraction.',
      metrics: [
        { label: 'Support Automated', value: '74%' },
        { label: 'Time Saved / Wk', value: '48 Hours' },
        { label: 'Response Latency', value: '< 15 sec' },
      ],
      tags: ['Custom AI Agents', 'OpenAI API', 'LangChain', 'Python FastAPI', 'HubSpot CRM', 'Automation'],
    },
  ];

  const testimonials = [
    {
      quote: 'Corelix Systems delivered our Next.js web application 2 weeks ahead of schedule. The site is blazing fast, beautiful, and our conversion rate doubled immediately.',
      author: 'David Sterling',
      role: 'Founder & CEO, Lumina Living',
      service: 'Website Development',
      rating: 5,
    },
    {
      quote: 'Their mobile app team is top tier. Our iOS and Android apps run flawlessly with silky 60fps animations. They handled everything from UI to App Store submission.',
      author: 'Jonathan Hayes',
      role: 'Chief Product Officer, AuraPay',
      service: 'App Development',
      rating: 5,
    },
    {
      quote: 'The direct-response video campaign they produced drove over 18M impressions. The hooks and editing style cut our acquisition costs by nearly half in 30 days.',
      author: 'Marcus Vance',
      role: 'Creative Director, Vitality Health',
      service: 'Video Editing',
      rating: 5,
    },
    {
      quote: 'The AI automation pipeline Corelix built transformed our customer support overnight. It now resolves hundreds of queries automatically with zero human intervention.',
      author: 'Rebecca Thorne',
      role: 'Head of Operations, CloudMetrics',
      service: 'AI Automation',
      rating: 5,
    },
    {
      quote: 'Outstanding technical depth and proactive communication. Corelix re-architected our storefront with headless edge caching and Stripe checkout with zero downtime.',
      author: 'Siddharth Patel',
      role: 'VP of Growth, Quantum Commerce',
      service: 'Full-Stack Web',
      rating: 5,
    },
    {
      quote: 'From biometric security to WebSocket sync, their engineering standard is world-class. It felt like having a Silicon Valley dev team in our corner.',
      author: 'Amara Diallo',
      role: 'Co-Founder & CTO, Stellar Fintech',
      service: 'Mobile Engineering',
      rating: 5,
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
          <span className="text-[#0284c7] font-semibold">Our Work &amp; Case Studies</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 max-w-6xl mb-16 sm:mb-20 text-center">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(2,132,199,0.08)] border border-[rgba(2,132,199,0.22)] text-[#0284c7] text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-5 shadow-[0_2px_10px_rgba(2,132,199,0.08)]">
              <Briefcase size={14} className="text-sky-600" />
              <span>Proven Deliverables &amp; Outcomes</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-[1.25] sm:leading-tight mb-4 sm:mb-6 px-1">
              Featured Projects &amp; Case Studies
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Explore how Corelix Systems engineers excellence across <strong>Website Development</strong>, <strong>App Development</strong>, <strong>Video Editing</strong>, and <strong>AI Automation</strong>.
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
                href="/features" 
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base text-slate-700 bg-white/95 hover:bg-white border border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-md shadow-[rgba(0,0,0,0.03)] active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Why Choose Us</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Case Studies List */}
      <section className="relative z-10 container mx-auto px-4 max-w-6xl mb-20 sm:mb-24">
        <div className="space-y-6 sm:space-y-8">
          {caseStudies.map((study, idx) => {
            const ServiceIcon = study.serviceIcon;
            return (
              <ScrollReveal key={idx} direction="up" delay={0.08}>
                <div 
                  className="bg-white/95 backdrop-blur-sm rounded-2xl border border-[rgba(2,132,199,0.12)] p-5 sm:p-7 md:p-10 shadow-[0_4px_24px_rgba(2,132,199,0.05)] hover:shadow-[0_12px_32px_rgba(2,132,199,0.12)] hover:border-[rgba(2,132,199,0.3)] transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 sm:gap-6 pb-5 sm:pb-6 border-b border-slate-100 mb-5 sm:mb-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0284c7] bg-[rgba(2,132,199,0.08)] border border-[rgba(2,132,199,0.18)] px-3 py-1 rounded-full">
                          <ServiceIcon size={14} /> {study.serviceType}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {study.period}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0A2540]">{study.client}</h2>
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {study.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 border border-slate-200/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
                    <div className="lg:col-span-2 space-y-3 sm:space-y-4">
                      <div>
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">The Challenge</h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-[#0284c7] uppercase tracking-wider mb-1">The Corelix Solution</h3>
                        <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 bg-[rgba(2,132,199,0.04)] p-3 sm:p-4 rounded-xl border border-[rgba(2,132,199,0.14)] text-center">
                      {study.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="p-1">
                          <div className="text-lg sm:text-xl md:text-2xl font-black text-[#0284c7] mb-0.5">{metric.value}</div>
                          <div className="text-[10px] sm:text-[11px] font-semibold text-slate-600 leading-tight">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Testimonials - Infinite Fast Auto-Scroll Single Line with Hover Pause & Resume */}
      <section className="relative z-10 w-full mb-8 sm:mb-12 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0284c7] uppercase tracking-widest mb-3 px-3.5 py-1 rounded-full bg-[rgba(2,132,199,0.08)] border border-[rgba(2,132,199,0.2)] shadow-[0_2px_8px_rgba(2,132,199,0.06)]">
                <span>Client Feedback</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2540] mb-3">
                Trusted by Modern Founders &amp; Operators
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Auto-scrolling verified reviews • <span className="text-[#0284c7] font-semibold">Hover to pause</span>
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Marquee Wrapper with Smooth Left & Right RGBA Fade Masks */}
        <div className="relative w-full overflow-hidden py-3">
          {/* Left Fade Edge */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-28 md:w-40 bg-gradient-to-r from-[#FAFCFE] via-[#FAFCFE]/80 to-transparent z-20 pointer-events-none" />
          {/* Right Fade Edge */}
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-28 md:w-40 bg-gradient-to-l from-[#FAFCFE] via-[#FAFCFE]/80 to-transparent z-20 pointer-events-none" />

          {/* Marquee Track Container (Hover pauses, Hover-out resumes) */}
          <div className="feedback-marquee-container w-full overflow-hidden">
            <div className="feedback-marquee-track flex gap-4 sm:gap-6 py-2 px-4 items-stretch">
              {[...testimonials, ...testimonials].map((t, idx) => {
                const initials = t.author
                  .split(' ')
                  .map((n) => n[0])
                  .join('');
                return (
                  <div
                    key={idx}
                    className="w-[290px] sm:w-[350px] md:w-[380px] shrink-0 bg-white/95 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-[rgba(2,132,199,0.12)] hover:border-[rgba(2,132,199,0.35)] shadow-[0_4px_20px_rgba(2,132,199,0.05)] hover:shadow-[0_12px_32px_rgba(2,132,199,0.14)] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between select-none"
                  >
                    <div>
                      {/* Card Header: Service Tag & Stars */}
                      <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-slate-100">
                        <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0284c7] bg-[rgba(2,132,199,0.08)] border border-[rgba(2,132,199,0.2)] px-2.5 py-0.5 rounded-full">
                          {t.service}
                        </span>
                        <div className="flex gap-0.5 text-amber-400">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" />
                          ))}
                        </div>
                      </div>

                      {/* Quote */}
                      <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed italic mb-5 line-clamp-4">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    {/* Author Profile */}
                    <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#0284C7] to-[#0A2540] text-white flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
                        {initials}
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-xs sm:text-sm text-[#0A2540] truncate">
                          {t.author}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate">
                          {t.role}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="relative z-10 container mx-auto px-4 max-w-5xl">
        <ScrollReveal direction="zoom">
          <div className="relative overflow-hidden bg-gradient-to-r from-[#0A2540] via-[#0284c7] to-[#00C49F] rounded-2xl sm:rounded-3xl pt-6 pb-7 px-5 sm:p-10 md:p-12 text-center text-white shadow-[0_16px_40px_rgba(2,132,199,0.3)] border border-[rgba(255,255,255,0.15)]">
            {/* Inner ambient shine */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_60%)] pointer-events-none" />
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3 sm:mb-4">
              Ready to Build Your Next Masterpiece?
            </h2>
            <p className="text-slate-100 text-sm md:text-base max-w-2xl mx-auto mb-6 sm:mb-8">
              Tell us about your project requirements. Whether you need an enterprise Web app, a mobile application, dynamic Video production, or an AI pipeline, Corelix Systems will deliver.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-[#0A2540] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all shadow-lg shadow-[rgba(0,0,0,0.15)] inline-flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span className="whitespace-nowrap">Get Free Consultation</span>
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1 shrink-0" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
