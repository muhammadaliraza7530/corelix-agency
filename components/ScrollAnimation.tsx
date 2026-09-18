'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none' | 'zoom';
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  distance = 32,
  once = true,
}: ScrollRevealProps) {
  let initialX = 0;
  let initialY = 0;
  let initialScale = 1;

  if (direction === 'up') initialY = distance;
  if (direction === 'down') initialY = -distance;
  if (direction === 'left') initialX = distance;
  if (direction === 'right') initialX = -distance;
  if (direction === 'zoom') initialScale = 0.92;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialX,
        y: initialY,
        scale: initialScale,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom smooth cubic-bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollStaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function ScrollStaggerContainer({
  children,
  className = '',
  staggerDelay = 0.12,
  once = true,
}: ScrollStaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollStaggerItem({
  children,
  className = '',
  yOffset = 24,
}: {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset, scale: 0.96 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Interactive Hover & Scroll Card Wrapper
export function ScrollCard({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Gentle Ambient Floating Animation
export function FloatingElement({
  children,
  className = '',
  duration = 5,
  yOffset = 10,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  yOffset?: number;
}) {
  return (
    <motion.div
      animate={{
        y: [-yOffset / 2, yOffset / 2, -yOffset / 2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Top-of-the-page Scroll Progress Bar
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0284c7] via-[#38bdf8] to-[#00c49f] origin-left z-50 pointer-events-none shadow-[0_0_10px_rgba(2,132,199,0.5)]"
    />
  );
}
