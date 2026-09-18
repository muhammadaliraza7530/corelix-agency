import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center pt-8 pb-16 px-4 bg-[#FAFCFE] text-center">
      <div className="max-w-md mx-auto p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
        <div className="text-6xl font-black text-[#0284c7] mb-2 tracking-tight">404</div>
        <h1 className="text-2xl font-bold text-[#0A2540] mb-3">Page Not Found</h1>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          The page you are looking for might have been moved or doesn&apos;t exist. Return to the home page or contact us.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0284c7] text-white font-semibold text-sm hover:bg-[#0369a1] transition-colors"
          >
            <Home size={16} />
            <span>Return Home</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-colors"
          >
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
