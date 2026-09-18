'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Globe, Smartphone, Video, Bot, ArrowUpRight } from 'lucide-react';

export default function About() {
  const services = [
    {
      title: 'Website Development',
      tag: 'Web & Platforms',
      desc: 'High-speed, responsive web applications, modern corporate websites, and scalable e-commerce platforms engineered with Next.js, React, and Tailwind CSS.',
      icon: Globe,
      link: '/about#web',
    },
    {
      title: 'App Development',
      tag: 'iOS & Android',
      desc: 'Intuitive, high-performance iOS and Android mobile apps built with React Native and Flutter, featuring real-time data sync and cloud backends.',
      icon: Smartphone,
      link: '/about#app',
    },
    {
      title: 'Video Editing',
      tag: 'Creative & Ads',
      desc: 'Direct-response video ads, viral reels, shorts, product teasers, and high-retention corporate storytelling tailored for maximum viewer engagement.',
      icon: Video,
      link: '/about#video',
    },
    {
      title: 'AI Automation',
      tag: 'Intelligence & LLM',
      desc: 'Custom intelligent AI agents, automated CRM workflows, smart chatbot assistants, and LLM pipelines that save hundreds of operational hours.',
      icon: Bot,
      link: '/about#ai',
    },
  ];

  return (
    <section className="about" id="about">
      {/* Ambient RGBA light glows for depth */}
      <div className="about-glow about-glow-1" aria-hidden="true"></div>
      <div className="about-glow about-glow-2" aria-hidden="true"></div>

      <div className="container">
        <div className="about-top">
          {/* RGBA Core Services Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="about-badge"
          >
            <span className="about-badge-dot"></span>
            <span>Core Expertise &bull; What We Do</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="h2 section-title"
          >
            Next-Level Digital Services
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="section-text"
          >
            Corelix Systems is your end-to-end technology and creative partner. We engineer transformative digital solutions tailored to accelerate your business growth.
          </motion.p>

          <ul className="about-list">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ 
                    duration: 0.55, 
                    delay: idx * 0.12, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  <div className="about-card group">
                    <div className="card-icon">
                      <Icon size={32} strokeWidth={1.8} />
                    </div>

                    <div className="inline-block px-2.5 py-0.5 mb-2 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-sky-50 text-sky-700 border border-sky-100">
                      {service.tag}
                    </div>

                    <h3 className="h3 card-title">{service.title}</h3>

                    <p className="card-text">{service.desc}</p>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1 text-xs font-semibold text-[#0284c7] group-hover:text-[#0369a1] transition-colors">
                      <Link href={service.link} className="inline-flex items-center gap-1">
                        Learn More <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <div className="about-bottom">
          <motion.figure 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="about-bottom-banner"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://i.postimg.cc/nzjhFvtq/about-banner.png" alt="about banner" className="about-banner" />
          </motion.figure>

          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="about-bottom-content"
          >
            <h2 className="h2 section-title">Obsessed with Quality &amp; Precision</h2>

            <p className="section-text">
              Whether building bespoke software, launching mobile applications, cutting viral videos, or deploying AI agents, we ensure every deliverable meets the highest industry standards.
            </p>

            <Link href="/about" className="btn btn-secondary">
              Explore Our Full Capabilities
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
