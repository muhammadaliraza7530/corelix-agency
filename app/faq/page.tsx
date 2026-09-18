'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronRight, 
  Sparkles, 
  HelpCircle, 
  Search, 
  ChevronDown, 
  Globe, 
  Smartphone, 
  Video, 
  Bot, 
  ShieldCheck, 
  ArrowRight,
  MessageSquare,
  Mail,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from '@/components/ScrollAnimation';

interface FAQItem {
  id: string;
  category: 'general' | 'web' | 'app' | 'video' | 'ai' | 'pricing';
  question: string;
  answer: string;
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openId, setOpenId] = useState<string | null>('general-1');

  const faqs: FAQItem[] = [
    {
      id: 'general-1',
      category: 'general',
      question: 'What services does Corelix Systems provide?',
      answer: 'Corelix Systems is a comprehensive digital engineering and creative agency. We specialize in 4 core pillars: (1) High-performance Website Development with Next.js & React, (2) Cross-platform iOS and Android Mobile App Development, (3) High-retention Video Editing & Motion Graphics, and (4) Autonomous AI Automation workflows and custom LLM agents.'
    },
    {
      id: 'general-2',
      category: 'general',
      question: 'Do I own the full intellectual property (IP) and source code?',
      answer: 'Yes, 100%. Upon milestone completion and final invoice clearance, all Git repositories, custom source code, design files (Figma), raw video renders, and trained AI workflow configurations belong entirely to you with zero vendor lock-in or recurring licensing fees.'
    },
    {
      id: 'general-3',
      category: 'general',
      question: 'How fast can our project kick off?',
      answer: 'Once we complete your initial 30-minute discovery call and approve the technical scope and milestone roadmap, we typically initiate sprint development within 48 to 72 hours.'
    },
    {
      id: 'web-1',
      category: 'web',
      question: 'Which tech stacks do you utilize for Website Development?',
      answer: 'We build enterprise-grade modern web systems using Next.js 15+, React 19, TypeScript, Tailwind CSS, Node.js, GraphQL, PostgreSQL, and headless CMS platforms (such as Sanity, Strapi, or Contentful). Every site is engineered with 95+ Core Web Vitals and clean semantic SEO.'
    },
    {
      id: 'web-2',
      category: 'web',
      question: 'Can you migrate our legacy site or slow WordPress to Next.js?',
      answer: 'Absolutely. We specialize in headless migrations—moving outdated, sluggish WordPress, PHP, or Shopify stores onto ultra-fast Next.js architectures while preserving SEO rankings, user accounts, and database schemas.'
    },
    {
      id: 'app-1',
      category: 'app',
      question: 'Do you build native or cross-platform mobile apps?',
      answer: 'We build high-performance cross-platform mobile applications using React Native and Flutter, allowing you to launch unified apps on both iOS (App Store) and Android (Google Play) from a single robust codebase. For specialized hardware needs, we also write native Swift and Kotlin bridge modules.'
    },
    {
      id: 'app-2',
      category: 'app',
      question: 'Do you manage App Store and Google Play submissions?',
      answer: 'Yes. We handle the complete publishing lifecycle, including certificate signing, privacy compliance, App Store review guidelines, screenshots, metadata, and test flight staging distributions.'
    },
    {
      id: 'video-1',
      category: 'video',
      question: 'What video editing formats and creative styles do you offer?',
      answer: 'We produce short-form viral creatives (TikToks, Instagram Reels, YouTube Shorts), direct-response paid social ads (Meta & TikTok Ads), corporate explainer videos, cinematic product commercials, and 2D/3D kinetic typography and motion graphics using Premiere Pro, After Effects, and DaVinci Resolve.'
    },
    {
      id: 'video-2',
      category: 'video',
      question: 'How many rounds of revisions are included for video projects?',
      answer: 'Every video milestone includes up to 2 rounds of precision revisions via Frame.io or timestamped review links to ensure audio mastering, color grading, pacing, and visual hooks match your brand aesthetic.'
    },
    {
      id: 'ai-1',
      category: 'ai',
      question: 'What is AI Automation and how can it help my company?',
      answer: 'AI Automation uses modern Large Language Models (LLMs like Gemini, Claude, and OpenAI) alongside automated orchestration platforms (Make, Zapier, Python webhooks) to perform repetitive business tasks automatically. Examples include automated lead qualification, smart email dispatch, invoice data extraction, CRM syncs, and intelligent 24/7 client support bots.'
    },
    {
      id: 'ai-2',
      category: 'ai',
      question: 'Is our proprietary company data safe when using your AI automations?',
      answer: 'Yes. We implement private enterprise APIs with zero-retention and zero-training policies. Your confidential internal data is never used to train public models, and all transmissions are encrypted end-to-end.'
    },
    {
      id: 'pricing-1',
      category: 'pricing',
      question: 'How does your billing and milestone model work?',
      answer: 'We work on transparent sprint milestones. For fixed-scope projects, payments are split (typically 40% kickoff, 30% intermediate staging demo, 30% final sign-off and IP handover). For ongoing development or creative retainers, we offer dedicated monthly engineering and editing sprints.'
    },
    {
      id: 'pricing-2',
      category: 'pricing',
      question: 'Do you sign Non-Disclosure Agreements (NDAs)?',
      answer: 'Yes. We prioritize strict confidentiality and execute mutual NDAs before reviewing sensitive business data, codebases, or proprietary algorithms.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'web', label: 'Web Development', icon: Globe },
    { id: 'app', label: 'Mobile Apps', icon: Smartphone },
    { id: 'video', label: 'Video Editing', icon: Video },
    { id: 'ai', label: 'AI Automation', icon: Bot },
    { id: 'pricing', label: 'Pricing & NDA', icon: ShieldCheck },
  ];

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <main className="relative pt-6 sm:pt-10 md:pt-14 pb-16 md:pb-24 overflow-hidden bg-[#FAFCFE]">
      {/* Ambient RGBA background glows */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] pointer-events-none z-0" 
        style={{
          background: 'radial-gradient(circle at 50% 10%, rgba(2, 132, 199, 0.16) 0%, rgba(0, 196, 159, 0.08) 40%, transparent 70%)'
        }}
        aria-hidden="true"
      />
      <div 
        className="absolute top-32 -left-24 w-80 h-80 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.14) 0%, transparent 70%)',
          filter: 'blur(70px)'
        }}
        aria-hidden="true"
      />

      {/* Top Breadcrumbs */}
      <div className="container mx-auto px-4 max-w-5xl mb-4 md:mb-6 relative z-10">
        <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 font-medium" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0284c7] transition-colors">Home</Link>
          <ChevronRight size={13} className="text-slate-400" />
          <Link href="/resources" className="hover:text-[#0284c7] transition-colors">Resources</Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="text-[#0284c7] font-semibold">FAQ</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="container mx-auto px-4 max-w-5xl mb-10 md:mb-14 relative z-10 text-center">
        <ScrollReveal direction="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(2,132,199,0.1)] border border-[rgba(2,132,199,0.28)] text-[#0284c7] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] shadow-[0_0_8px_rgba(2,132,199,0.9)]"></span>
            <Sparkles size={13} />
            <span>Frequently Asked Questions</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-tight mb-3 sm:mb-4">
            Everything You Need to Know
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
            Clear, transparent answers regarding our Website Development, Mobile App engineering, Video Editing production, AI Automation pipelines, and sprint billing.
          </p>

          {/* Live Search Input */}
          <div className="max-w-xl mx-auto relative mb-6">
            <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl px-4 py-3 shadow-[0_8px_25px_-5px_rgba(10,37,64,0.06)] focus-within:border-[#0284C7] focus-within:ring-4 focus-within:ring-[rgba(2,132,199,0.12)] transition-all">
              <Search size={18} className="text-slate-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. Next.js, NDA, pricing, revisions)..."
                className="w-full text-xs sm:text-sm text-[#0A2540] bg-transparent outline-none placeholder:text-slate-400"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-slate-400 hover:text-slate-700 font-bold px-1.5"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    isSelected 
                      ? 'bg-[#0284C7] text-white shadow-sm shadow-sky-500/20' 
                      : 'bg-white/80 hover:bg-white text-slate-600 border border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <Icon size={14} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>
      </section>

      {/* Accordion Questions List */}
      <section className="container mx-auto px-4 max-w-4xl relative z-10 mb-16">
        <ScrollReveal direction="up" delay={0.1}>
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <HelpCircle size={40} className="text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-[#0A2540] mb-1">No matching questions found</h3>
              <p className="text-xs text-slate-500 mb-4">Try searching for different keywords or browse all categories.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="px-4 py-2 rounded-xl bg-sky-50 text-[#0284c7] font-semibold text-xs hover:bg-sky-100 transition-colors"
              >
                Reset Search Filter
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div 
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen 
                        ? 'bg-white border-[#0284C7]/50 shadow-sm' 
                        : 'bg-white/90 hover:bg-white border-slate-200/80 shadow-xs'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isOpen ? 'bg-[rgba(2,132,199,0.12)] text-[#0284C7]' : 'bg-slate-100 text-slate-500'
                        }`}>
                          <HelpCircle size={15} />
                        </div>
                        <span className={`text-xs sm:text-sm md:text-base font-bold tracking-tight ${
                          isOpen ? 'text-[#0284C7]' : 'text-[#0A2540]'
                        }`}>
                          {faq.question}
                        </span>
                      </div>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-sky-50 text-[#0284C7]' : 'text-slate-400'
                      }`}>
                        <ChevronDown size={17} />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80">
                            <p>{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}
        </ScrollReveal>
      </section>

      {/* Still Have Questions CTA */}
      <section className="container mx-auto px-4 max-w-4xl relative z-10">
        <ScrollReveal direction="zoom">
          <div className="rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#0A2540] via-[#08213B] to-[#0284C7] p-6 sm:p-10 text-white relative overflow-hidden border border-sky-400/20 shadow-xl">
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-[rgba(0,196,159,0.2)] rounded-full filter blur-2xl pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
              <div className="md:col-span-8 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-semibold mb-2">
                  <Zap size={13} className="text-amber-300" />
                  <span>Got a Unique Project Question?</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                  Speak Directly with Our Technical Leads
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-lg">
                  Have specific architecture, timeline, or security considerations? We offer a free 30-minute consultation with senior engineers.
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col gap-2.5">
                <Link
                  href="/contact"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#00C49F] text-white font-bold text-xs sm:text-sm hover:opacity-95 transition-opacity inline-flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare size={16} />
                  <span>Ask a Question</span>
                </Link>
                <a
                  href="mailto:contact@corelixsystems.com"
                  className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs transition-colors border border-white/20 inline-flex items-center justify-center gap-2 text-center"
                >
                  <Mail size={14} />
                  <span>Email Us Directly</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
