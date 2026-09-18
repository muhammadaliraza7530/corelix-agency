import React from 'react';
import Link from 'next/link';
import CorelixLogo from './CorelixLogo';

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <Link href="/" className="logo" aria-label="Corelix Systems Home">
              <CorelixLogo />
            </Link>
            <p className="footer-text mt-3 text-sm text-slate-400 max-w-xs leading-relaxed">
              Engineering high-performance web systems, mobile apps, video production, and autonomous AI automation.
            </p>
          </div>

          <div className="footer-link-box">
            <ul className="footer-link-list">
              <li>
                <h3 className="h4 link-title">Company</h3>
              </li>
              <li><Link href="/about" className="footer-link">About Us</Link></li>
              <li><Link href="/features" className="footer-link">Why Us</Link></li>
              <li><Link href="/contact" className="footer-link">Pricing</Link></li>
            </ul>

            <ul className="footer-link-list">
              <li>
                <h3 className="h4 link-title">Services</h3>
              </li>
              <li><Link href="/about" className="footer-link">Website Development</Link></li>
              <li><Link href="/about" className="footer-link">App Development</Link></li>
              <li><Link href="/about" className="footer-link">Video Editing</Link></li>
              <li><Link href="/about" className="footer-link">AI Automation</Link></li>
            </ul>

            <ul className="footer-link-list">
              <li>
                <h3 className="h4 link-title">Resources</h3>
              </li>
              <li><Link href="/resources" className="footer-link">Resources Hub</Link></li>
              <li><Link href="/faq" className="footer-link">FAQ&apos;s</Link></li>
              <li><Link href="/work" className="footer-link">Case Studies</Link></li>
              <li><Link href="/terms" className="footer-link">Terms &amp; Conditions</Link></li>
              <li><Link href="/privacy" className="footer-link">Privacy Policy</Link></li>
            </ul>

            <ul className="footer-link-list">
              <li>
                <h3 className="h4 link-title">Relevant</h3>
              </li>
              <li><Link href="/features" className="footer-link">Capabilities</Link></li>
              <li><Link href="/work" className="footer-link">Our Work</Link></li>
              <li><Link href="/contact" className="footer-link">Consultation</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <p className="copyright">&copy; {new Date().getFullYear()} Corelix Systems. All rights reserved.</p>
        <div className="flex items-center gap-4 text-slate-400">
          <Link href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          <span>&bull;</span>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

