import React from 'react';

interface BrandLogoProps {
  className?: string;
  showTagline?: boolean;
  symbolOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function BrandLogo({
  className = '',
  showTagline = true,
  symbolOnly = false,
  size = 'md',
}: BrandLogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Geometric Folding Z with Electric Cyan Beacon Dot */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconSizes[size]} shrink-0 drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="zinviqLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="50%" stopColor="#00A3FF" />
            <stop offset="100%" stopColor="#0066FF" />
          </linearGradient>
          <linearGradient id="zinviqFoldAccent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <filter id="beaconNeonGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Top Horizontal Bar */}
        <path
          d="M18 20 H82 V34 H38 Z"
          fill="url(#zinviqLogoGrad)"
        />

        {/* Diagonal Dynamic Ribbon */}
        <path
          d="M82 22 L20 78 L26 84 L88 28 Z"
          fill="url(#zinviqLogoGrad)"
        />

        {/* Fold Ribbon Accent */}
        <path
          d="M20 78 L34 64 L48 78 Z"
          fill="url(#zinviqFoldAccent)"
          opacity="0.95"
        />

        {/* Bottom Horizontal Bar */}
        <path
          d="M26 66 H82 V80 H18 Z"
          fill="url(#zinviqLogoGrad)"
        />

        {/* Beacon Light Dot (Top Right) */}
        <circle
          cx="82"
          cy="22"
          r="4.8"
          fill="#00F0FF"
          filter="url(#beaconNeonGlow)"
        />
        <circle
          cx="82"
          cy="22"
          r="2.2"
          fill="#FFFFFF"
        />
      </svg>

      {!symbolOnly && (
        <div className="flex flex-col justify-center text-left">
          <span className={`font-bold tracking-[0.24em] text-white ${textSizes[size]} leading-tight drop-shadow-sm`}>
            ZINVIQ
          </span>
          {showTagline && (
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#00F0FF] uppercase mt-0.5 font-medium opacity-90">
              Precision in Motion
            </span>
          )}
        </div>
      )}
    </div>
  );
}
