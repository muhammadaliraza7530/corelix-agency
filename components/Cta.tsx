'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight, Sparkles, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Cta() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 4500);
  };

  return (
    <section className="cta" id="cta">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 36, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="cta-card"
        >
          {/* Ambient RGBA light glows */}
          <div className="cta-glow cta-glow-1" aria-hidden="true"></div>
          <div className="cta-glow cta-glow-2" aria-hidden="true"></div>

          {/* Strategy Session Badge */}
          <div className="cta-badge">
            <span className="cta-badge-dot"></span>
            <Sparkles size={13} />
            <span>Free 30-Min Technical Strategy Session</span>
          </div>

          <h3 className="cta-title">Ready to Build With Corelix Systems?</h3>

          <p className="cta-text">
            Let&apos;s build your next high-converting website, scalable mobile app, viral video campaign, or custom AI automation system.
          </p>

          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 mb-4 rounded-xl bg-white/15 border border-white/30 backdrop-blur-md max-w-md mx-auto flex items-center justify-center gap-3 text-white"
            >
              <CheckCircle2 size={22} className="text-emerald-300 shrink-0" />
              <p className="text-sm font-semibold text-left">
                Thank you! Our technical director will review your project and contact you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form className="cta-form" onSubmit={handleSubmit}>
              <div className="cta-input-group">
                <div className="cta-input-field-wrapper">
                  <Mail size={18} className="text-sky-300 shrink-0" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your business email"
                    aria-label="Your email address"
                  />
                </div>
                <button type="submit" className="cta-submit-btn">
                  <span>Get Consultation</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </form>
          )}

          {/* Trust Guarantees */}
          <div className="cta-trust-bar">
            <div className="cta-trust-item">
              <Zap size={13} className="text-amber-300" />
              <span>Rapid 24h Response</span>
            </div>
            <div className="cta-trust-item">
              <ShieldCheck size={13} className="text-emerald-300" />
              <span>100% NDA Protected</span>
            </div>
            <div className="cta-trust-item">
              <Sparkles size={13} className="text-sky-300" />
              <span>Free Project Roadmap</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
