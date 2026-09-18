import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  ChevronRight, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  ArrowRight,
  EyeOff,
  Server,
  Database
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Corelix Systems',
  description: 'Learn how Corelix Systems protects client data, code confidentiality, proprietary IP, and zero AI model training policies.',
  openGraph: {
    title: 'Privacy Policy | Corelix Systems',
    description: 'Learn how Corelix Systems protects client data, code confidentiality, proprietary IP, and zero AI model training policies.',
  },
};

export default function PrivacyPage() {
  const policies = [
    {
      icon: EyeOff,
      title: 'Zero AI Training On Your Private Data',
      desc: 'When we build custom AI automations or LLM agents for your organization, we exclusively interface through enterprise API agreements that prohibit provider model training on your inputs, outputs, customer data, or code repositories.'
    },
    {
      icon: Lock,
      title: 'Proprietary Source Code & Secret Confidentiality',
      desc: 'All environment variables, API keys, database credentials, server secrets, and private Git repositories are managed through encrypted vaults. We never commit secrets or share access beyond cleared project engineers.'
    },
    {
      icon: Database,
      title: 'Information Collection & Usage',
      desc: 'We collect only the business contact details (name, email, phone, and project scope) necessary to communicate, execute sprint roadmaps, and issue milestone invoices. We do not sell, rent, or trade client information to any third parties.'
    },
    {
      icon: Server,
      title: 'Infrastructure & Data Transmission Security',
      desc: 'All communications, staging servers, and live preview deployments enforce TLS 1.3 encryption in transit and AES-256 encryption at rest. We follow industry best practices for secure cloud hosting on AWS, Google Cloud, and Vercel.'
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
        className="absolute top-40 -right-20 w-80 h-80 rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(0, 196, 159, 0.14) 0%, transparent 70%)',
          filter: 'blur(70px)'
        }}
        aria-hidden="true"
      />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 max-w-4xl mb-4 md:mb-6 relative z-10">
        <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-500 font-medium" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#0284c7] transition-colors">Home</Link>
          <ChevronRight size={13} className="text-slate-400" />
          <Link href="/resources" className="hover:text-[#0284c7] transition-colors">Resources</Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="text-[#0284c7] font-semibold">Privacy Policy</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="container mx-auto px-4 max-w-4xl mb-10 md:mb-14 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(2,132,199,0.1)] border border-[rgba(2,132,199,0.28)] text-[#0284c7] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
          <Lock size={13} />
          <span>Data Sovereignty &amp; Confidentiality</span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-tight mb-3">
          Privacy Policy
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-4">
          How Corelix Systems safeguards client proprietary code, user databases, AI automation pipelines, and communication privacy.
        </p>

        <div className="text-xs font-medium text-slate-400">
          Last Updated: March 2025 &bull; Compliant with global data privacy standards
        </div>
      </section>

      {/* Policy Pillars */}
      <section className="container mx-auto px-4 max-w-4xl mb-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {policies.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[rgba(2,132,199,0.12)] to-[rgba(0,196,159,0.08)] text-[#0284C7] flex items-center justify-center mb-3.5 border border-[rgba(2,132,199,0.2)]">
                  <Icon size={20} className="stroke-[2.2]" />
                </div>
                <h3 className="text-base font-bold text-[#0A2540] mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional Details */}
      <section className="container mx-auto px-4 max-w-4xl mb-16 relative z-10">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <h2 className="text-lg font-bold text-[#0A2540]">
            Client Rights &amp; Code Deposition
          </h2>
          <p>
            You possess full rights to request complete deletion of any staging data, mock database records, or temporary development logs generated during sprint executions once the final production release has been confirmed.
          </p>
          <p>
            We enforce two-factor authentication (2FA) on all developer workstations, GitHub organization teams, and cloud hosting consoles to ensure impenetrable operational safety.
          </p>
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-500">
              For privacy inquiries: <strong className="text-slate-700">privacy@corelixsystems.com</strong>
            </span>
            <Link href="/terms" className="text-[#0284C7] font-semibold hover:underline">
              View Terms &amp; Conditions &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
