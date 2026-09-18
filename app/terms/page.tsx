import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  Lock, 
  CheckCircle2, 
  ArrowRight,
  HelpCircle,
  Mail
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Corelix Systems',
  description: 'Read the terms of engagement, 100% intellectual property handover, mutual NDA guidelines, sprint milestones, and SLAs for Corelix Systems.',
  openGraph: {
    title: 'Terms & Conditions | Corelix Systems',
    description: 'Read the terms of engagement, 100% intellectual property handover, mutual NDA guidelines, sprint milestones, and SLAs for Corelix Systems.',
  },
};

export default function TermsPage() {
  const sections = [
    {
      id: 'scope',
      num: '01',
      title: 'Scope of Services & Sprint Execution',
      content: `Corelix Systems provides digital product engineering, technical consulting, and digital creative production services. These include Website Development (Next.js, React, Node.js), Mobile App Development (iOS & Android via React Native and Flutter), Video Editing & Motion Graphics, and AI Automation engineering. All work is conducted under mutually agreed sprint roadmaps or formal Statement of Work (SOW) documents detailing milestones, deliverables, and target timelines.`
    },
    {
      id: 'ip-rights',
      num: '02',
      title: '100% Intellectual Property & Source Code Ownership',
      content: `We operate on a strict Client-First ownership model. Upon full settlement of corresponding milestone invoices, all custom software source code, Git repositories, Figma design assets, raw and rendered video files, and customized AI automation workflows belong 100% to the Client. Corelix Systems retains zero proprietary lock-in, recurring licensing demands, or residual ownership over Client custom assets.`
    },
    {
      id: 'nda',
      num: '03',
      title: 'Confidentiality & Mutual Non-Disclosure (NDA)',
      content: `Confidentiality is fundamental to our client partnerships. Both parties agree to protect all proprietary business logic, product roadmaps, trade secrets, customer databases, and financial data with utmost security. Corelix Systems will not disclose, reverse-engineer, or distribute Client confidential information to third parties. Mutual standalone NDAs are executed prior to reviewing sensitive production codebases upon request.`
    },
    {
      id: 'milestones',
      num: '04',
      title: 'Milestone Payments & Invoicing',
      content: `Standard project engagements are structured around clear sprint deliverables. Fixed-price contracts typically involve an initial deposit prior to kickoff, milestone review disbursements, and a final balance due upon staging sign-off and production deployment. Ongoing retainer arrangements are billed at the beginning of each monthly cycle.`
    },
    {
      id: 'revisions',
      num: '05',
      title: 'Revisions & 30-Day Post-Launch Warranty',
      content: `Every deliverable includes dedicated revision rounds to guarantee alignment with technical specifications. Furthermore, all software and mobile projects include a complimentary 30-day post-launch warranty period during which any critical bugs, functional defects, or runtime anomalies directly attributable to our codebase are rectified promptly without additional cost.`
    },
    {
      id: 'third-party',
      num: '06',
      title: 'Third-Party Services, APIs & Hosting',
      content: `Client digital products may interface with third-party providers (such as Vercel, AWS, Google Cloud, Firebase, Stripe, OpenAI, or App Stores). The Client remains responsible for establishing and financing their respective third-party developer accounts and infrastructure bills. Corelix Systems provides full architectural assistance in configuring these accounts under the Client's direct administrative ownership.`
    },
    {
      id: 'liability',
      num: '07',
      title: 'Governing Standards & Limitation of Liability',
      content: `Corelix Systems exercises senior engineering standards and rigorous QA testing. In no event shall Corelix Systems be liable for indirect, incidental, or consequential damages resulting from third-party server outages, third-party API policy shifts, or client modifications made to the production code subsequent to formal handover.`
    }
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
        className="absolute top-40 -left-20 w-80 h-80 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.14) 0%, transparent 70%)',
          filter: 'blur(70px)'
        }}
        aria-hidden="true"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 max-w-4xl mb-4 md:mb-6 relative z-10">
        <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 font-medium" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0284c7] transition-colors">Home</Link>
          <ChevronRight size={13} className="text-slate-400" />
          <Link href="/resources" className="hover:text-[#0284c7] transition-colors">Resources</Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="text-[#0284c7] font-semibold">Terms &amp; Conditions</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="container mx-auto px-4 max-w-4xl mb-10 md:mb-14 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(2,132,199,0.1)] border border-[rgba(2,132,199,0.28)] text-[#0284c7] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
          <ShieldCheck size={14} />
          <span>Client Engagement &amp; SLA Standards</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-tight mb-3">
          Terms &amp; Conditions
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-4">
          Transparent, fair, and comprehensive terms governing our Website, Mobile App, Video Production, and AI Automation engineering engagements.
        </p>

        <div className="text-xs font-medium text-slate-400">
          Last Updated: March 2025 &bull; Effective for all active SOWs &amp; engagements
        </div>
      </section>

      {/* Core Principles Highlights */}
      <section className="container mx-auto px-4 max-w-4xl mb-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xs">
          <div className="flex items-center gap-3 p-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0A2540]">100% IP Handover</div>
              <div className="text-[11px] text-slate-500">You own full code &amp; Git rights</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 border-t sm:border-t-0 sm:border-l border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0">
              <Lock size={16} />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0A2540]">Mutual NDA Guaranteed</div>
              <div className="text-[11px] text-slate-500">Strict data confidentiality</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 border-t sm:border-t-0 sm:border-l border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0A2540]">30-Day QA Warranty</div>
              <div className="text-[11px] text-slate-500">Post-launch bug protection</div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="container mx-auto px-4 max-w-4xl mb-16 relative z-10">
        <div className="space-y-4">
          {sections.map((sec) => (
            <div 
              key={sec.id}
              id={sec.id}
              className="p-5 sm:p-7 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <span className="text-xs font-mono font-bold text-[#0284C7] bg-[rgba(2,132,199,0.1)] px-2.5 py-0.5 rounded-md">
                  Section {sec.num}
                </span>
                <h2 className="text-base sm:text-lg font-bold text-[#0A2540] tracking-tight">
                  {sec.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-1 sm:pl-2">
                {sec.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Clarifications */}
      <section className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0A2540] via-[#08213B] to-[#0284C7] text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 border border-sky-400/20">
          <div>
            <h3 className="text-base sm:text-xl font-bold mb-1">
              Have Questions Regarding Terms or SOWs?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-md">
              We are pleased to review specific legal provisions, custom enterprise NDAs, or milestone billing agreements with your legal counsel.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#00C49F] text-white font-bold text-xs hover:opacity-95 transition-opacity inline-flex items-center justify-center gap-1.5 shadow"
            >
              <span>Contact Legal Team</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/faq"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors border border-white/20 inline-flex items-center justify-center"
            >
              <span>View FAQs</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
