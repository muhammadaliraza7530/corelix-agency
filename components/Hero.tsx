'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Video, 
  Bot 
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Decorative ambient RGBA glows with floating motion */}
      <motion.div 
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.7, 0.9, 0.7]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="hero-glow hero-glow-1" 
        aria-hidden="true" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.12, 1],
          opacity: [0.6, 0.85, 0.6]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hero-glow hero-glow-2" 
        aria-hidden="true" 
      />

      <div className="container">
        <div className="hero-content">
          {/* Top pill badge */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hero-badge"
          >
            <span className="hero-badge-dot"></span>
            <Sparkles size={14} />
            <span>Digital Product &amp; AI Studio</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="h1 hero-title"
          >
            Next-Gen Digital Solutions by <span className="hero-title-highlight">Corelix Systems</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hero-text"
          >
            Empowering modern enterprises with high-performance <strong>Website Development</strong>, intuitive <strong>App Development</strong>, high-retention <strong>Video Editing</strong>, and intelligent <strong>AI Automation</strong>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hero-btn-group"
          >
            <Link href="/contact" className="btn btn-primary hero-btn-main">
              <span>Start Your Project</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="/about" className="btn btn-secondary hero-btn-sub">
              Our Services
            </Link>
          </motion.div>

          {/* Quick service pills with stagger */}
          <motion.div 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hero-services-bar"
          >
            <Link href="/about#web" className="hero-service-pill">
              <Globe size={13} className="text-[#0284c7]" />
              <span>Website Dev</span>
            </Link>
            <Link href="/about#app" className="hero-service-pill">
              <Smartphone size={13} className="text-[#0284c7]" />
              <span>App Dev</span>
            </Link>
            <Link href="/about#video" className="hero-service-pill">
              <Video size={13} className="text-[#0284c7]" />
              <span>Video Editing</span>
            </Link>
            <Link href="/about#ai" className="hero-service-pill">
              <Bot size={13} className="text-[#0284c7]" />
              <span>AI Automation</span>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="hero-banner" 
          aria-hidden="true"
        ></motion.div>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://i.postimg.cc/HLrpzpKz/bg.png" alt="shape" className="shape-content" />
    </section>
  );
}
