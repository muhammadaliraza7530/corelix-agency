'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Phone, 
  Mail, 
  Layers, 
  MessageSquare, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Website Development',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', service: 'Website Development', message: '' });
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="contact-content"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-3 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={13} className="text-[#0284c7]" />
            <span>Get in Touch</span>
          </div>

          <h2 className="h2 contact-title">Let&apos;s Build Your Digital Vision</h2>

          <p className="text-slate-600 text-sm mt-2 mb-6 max-w-md leading-relaxed">
            Partner with Corelix Systems for world-class Website Development, Mobile Apps, Video Editing, and AI Automation. Get a tailored roadmap and quote within 24 hours.
          </p>

          <figure className="contact-banner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://i.postimg.cc/4dmYSY4F/contact.png" alt="Corelix Systems consultation" />
          </figure>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="contact-form" 
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <h3 className="text-lg font-bold text-[#0A2540] tracking-tight">Send Us a Message</h3>
            <p className="text-xs text-slate-500 mt-0.5">Fill in your details and our technical team will contact you promptly.</p>
          </div>

          {isSubmitted && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-5 p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-800 text-xs flex items-center gap-2.5"
            >
              <CheckCircle2 size={18} className="text-[#0284c7] shrink-0" />
              <span>
                Thank you, <strong>{formData.name || 'there'}</strong>! Your inquiry for <strong>{formData.service}</strong> has been received. Our team will contact you shortly.
              </span>
            </motion.div>
          )}

          <div className="input-wrapper">
            <label htmlFor="name" className="input-label">
              <span>Full Name</span>
              <span className="input-label-required">*Required</span>
            </label>
            <div className="input-box">
              <User size={17} className="input-icon text-sky-600 shrink-0" />
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
              />
            </div>
          </div>

          <div className="input-wrapper">
            <label htmlFor="phone" className="input-label">
              <span>Phone Number</span>
              <span className="input-label-required">*Required</span>
            </label>
            <div className="input-box">
              <Phone size={17} className="input-icon text-sky-600 shrink-0" />
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="input-wrapper">
            <label htmlFor="email" className="input-label">
              <span>Business Email</span>
              <span className="input-label-required">*Required</span>
            </label>
            <div className="input-box">
              <Mail size={17} className="input-icon text-sky-600 shrink-0" />
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
              />
            </div>
          </div>

          <div className="input-wrapper">
            <label htmlFor="service" className="input-label">
              <span>Primary Service Needed</span>
              <span className="text-slate-400 text-xs font-normal">Select one</span>
            </label>
            <div className="input-box">
              <Layers size={17} className="input-icon text-sky-600 shrink-0" />
              <select
                name="service"
                id="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="Website Development">Website Development (Next.js / React)</option>
                <option value="App Development">App Development (iOS &amp; Android)</option>
                <option value="Video Editing">Video Editing &amp; Motion Graphics</option>
                <option value="AI Automation">AI Automation &amp; Smart Agents</option>
                <option value="Full Digital Solution">Full Digital Transformation Suite</option>
              </select>
            </div>
          </div>

          <div className="input-wrapper">
            <label htmlFor="message" className="input-label">
              <span>Project Details</span>
              <span className="input-label-required">*Required</span>
            </label>
            <div className="input-box input-box-textarea">
              <MessageSquare size={17} className="input-icon text-sky-600 shrink-0" />
              <textarea
                name="message"
                id="message"
                placeholder="Briefly describe your project requirements, scope, or timeline..."
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <button type="submit" className="contact-submit-btn">
            <span>Send Project Inquiry</span>
            <Send size={15} />
          </button>

          <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 text-center">
            <ShieldCheck size={13} className="text-emerald-500 shrink-0" />
            <span>100% Confidential. We respect your privacy and never spam.</span>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
