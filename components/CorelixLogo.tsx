import React from 'react';

interface CorelixLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function CorelixLogo({ className = '', variant = 'light' }: CorelixLogoProps) {
  const isDark = variant === 'dark';
  const coreColor = isDark ? '#ffffff' : '#0A2540';
  const systemsColor = isDark ? '#94a3b8' : '#475569';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 3D Helix / Infinity Twist Logo Mark */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        aria-label="Corelix Systems Logo Icon"
      >
        <defs>
          {/* Top Loop Gradient */}
          <linearGradient id="helixTop" x1="20%" y1="10%" x2="90%" y2="80%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="45%" stopColor="#00B4D8" />
            <stop offset="100%" stopColor="#00C49F" />
          </linearGradient>

          {/* Central Crossing Ribbon */}
          <linearGradient id="helixCross" x1="10%" y1="20%" x2="90%" y2="90%">
            <stop offset="0%" stopColor="#00C49F" />
            <stop offset="50%" stopColor="#00B4D8" />
            <stop offset="100%" stopColor="#0369A1" />
          </linearGradient>

          {/* Bottom Loop & Rear Twist */}
          <linearGradient id="helixBottom" x1="80%" y1="20%" x2="10%" y2="90%">
            <stop offset="0%" stopColor="#00B4D8" />
            <stop offset="50%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0A2540" />
          </linearGradient>

          {/* Outer Left Curve */}
          <linearGradient id="helixLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B4D8" />
            <stop offset="100%" stopColor="#0A2540" />
          </linearGradient>

          {/* Drop shadow for 3D depth */}
          <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="130%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#0284C7" floodOpacity="0.25" />
          </filter>
        </defs>

        <g filter="url(#logoShadow)">
          {/* Left / Back connector ribbon */}
          <path
            d="M 36 38 C 22 42, 14 54, 25 68 C 32 76, 46 76, 52 68 C 45 66, 36 62, 33 54 C 30 46, 33 41, 36 38 Z"
            fill="url(#helixLeft)"
          />

          {/* Top spiral ribbon loop */}
          <path
            d="M 33 34 C 30 20, 52 10, 70 18 C 82 23, 83 36, 73 44 C 62 52, 44 46, 33 34 Z"
            fill="url(#helixTop)"
          />

          {/* Inner hole cut of top loop for crisp 3D rim */}
          <path
            d="M 44 32 C 40 25, 52 19, 64 24 C 71 27, 71 33, 64 37 C 56 42, 47 38, 44 32 Z"
            fill={isDark ? '#0b192c' : '#ffffff'}
            opacity="0.95"
          />

          {/* Center diagonal descending helix ribbon */}
          <path
            d="M 68 28 C 76 34, 76 43, 62 55 L 40 73 C 33 79, 24 82, 28 89 C 32 94, 44 94, 52 87 L 74 67 C 82 60, 84 49, 78 40 Z"
            fill="url(#helixCross)"
          />

          {/* Bottom forward swoosh & twist loop */}
          <path
            d="M 28 88 C 24 78, 38 68, 54 62 C 72 55, 80 67, 76 77 C 72 86, 56 94, 38 92 C 32 91, 29 90, 28 88 Z"
            fill="url(#helixBottom)"
          />

          {/* Bottom loop inner negative space */}
          <path
            d="M 42 84 C 48 85, 60 83, 64 77 C 67 73, 63 68, 54 70 C 46 72, 39 78, 42 84 Z"
            fill={isDark ? '#0b192c' : '#ffffff'}
            opacity="0.95"
          />
        </g>
      </svg>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline tracking-tight font-extrabold text-[22px] sm:text-[24px]">
          <span style={{ color: coreColor }} className="tracking-tight">
            CORE
          </span>
          <span className="text-[#0284C7] tracking-tight ml-[1px]">
            LiX
          </span>
        </div>
        <span
          style={{ color: systemsColor }}
          className="text-[9px] sm:text-[10px] font-semibold tracking-[0.38em] uppercase mt-[3px]"
        >
          SYSTEMS
        </span>
      </div>
    </div>
  );
}
