'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, ShieldCheck, Zap, Layers, Rocket } from 'lucide-react';

export default function Features() {
  return (
    <section className="features" id="features">
      {/* Ambient RGBA light glows for depth */}
      <div className="features-glow features-glow-1" aria-hidden="true"></div>
      <div className="features-glow features-glow-2" aria-hidden="true"></div>

      <div className="container">
        {/* RGBA Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="features-badge"
        >
          <span className="features-badge-dot"></span>
          <Sparkles size={13} className="text-[#0284c7]" />
          <span>The Corelix Advantage</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="h2 section-title"
        >
          Why Modern Brands Partner With Corelix Systems
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="section-text"
        >
          We bring together senior software engineers, mobile app developers, creative video editors, and AI architects under one roof to build cohesive, high-impact digital solutions.
        </motion.p>

        {/* Micro-metrics strip with RGBA borders and stagger on scroll */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700 hover:border-amber-300 transition-colors">
            <Zap size={14} className="text-amber-500" />
            <span>99.8% On-Time Delivery</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700 hover:border-emerald-300 transition-colors">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span>100% In-House Senior Talent</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700 hover:border-sky-300 transition-colors">
            <Rocket size={14} className="text-[#0284c7]" />
            <span>50+ Successful Launches</span>
          </div>
        </motion.div>

        <ul className="features-list">
          <motion.li 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="features-item features-card"
          >
            <figure className="features-item-banner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://i.postimg.cc/yYjd16Z6/feature-1.png" 
                alt="Engineering and Design Excellence" 
                loading="lazy"
              />
            </figure>

            <div className="feature-item-content">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mb-2.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-sky-50 text-sky-700 border border-sky-100">
                <Layers size={12} />
                <span>Full-Stack Architecture</span>
              </div>

              <h3 className="h2 item-title">End-to-End Digital Engineering</h3>

              <p className="item-text">
                From responsive web applications and cross-platform mobile apps to viral video creatives and autonomous AI pipelines, we manage every phase from concept to deployment.
              </p>

              <div className="features-card-points">
                <div className="features-card-point">
                  <CheckCircle2 size={16} className="text-[#0284c7] shrink-0 mt-0.5" />
                  <span>Custom React / Next.js web applications with zero bloated templates</span>
                </div>
                <div className="features-card-point">
                  <CheckCircle2 size={16} className="text-[#0284c7] shrink-0 mt-0.5" />
                  <span>High-performance iOS &amp; Android native-feel mobile deployments</span>
                </div>
                <div className="features-card-point">
                  <CheckCircle2 size={16} className="text-[#0284c7] shrink-0 mt-0.5" />
                  <span>Intelligent automated AI agent workflows saving operational costs</span>
                </div>
              </div>
            </div>
          </motion.li>

          <motion.li 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="features-item features-card"
          >
            <figure className="features-item-banner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://i.postimg.cc/4N21KGCZ/feature-2.png" 
                alt="Agile Sprints and Transparent Delivery" 
                loading="lazy"
              />
            </figure>

            <div className="feature-item-content">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 mb-2.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100">
                <Zap size={12} />
                <span>Rapid Turnaround</span>
              </div>

              <h3 className="h2 item-title">Agile Delivery with Direct Communication</h3>

              <p className="item-text">
                We work in fast iterative sprints with transparent milestone reporting, clean source code handoffs, and ongoing support to ensure your technology scales effortlessly.
              </p>

              <div className="features-card-points">
                <div className="features-card-point">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Direct Slack / WhatsApp channel with senior technical leads</span>
                </div>
                <div className="features-card-point">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>Bi-weekly live staging demos with sprint milestone sign-offs</span>
                </div>
                <div className="features-card-point">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>100% IP and source code ownership with zero lock-in contracts</span>
                </div>
              </div>
            </div>
          </motion.li>
        </ul>
      </div>
    </section>
  );
}
