import React from 'react';

interface ScalesLogoProps {
  className?: string;
  size?: number;
}

export const JusticeScalesLogo: React.FC<ScalesLogoProps> = ({ className = "w-6 h-6", size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="شعار ميزان العدالة"
    >
      {/* Central Pillar Finial Top */}
      <circle cx="12" cy="3" r="1.5" fill="currentColor" />
      
      {/* Central Pillar Column */}
      <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      
      {/* Horizontal Balance Beam */}
      <path
        d="M3.5 7.5L12 5.5L20.5 7.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left Scale Strings & Pan */}
      <path d="M3.5 7.5L1.5 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M3.5 7.5L5.5 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path
        d="M1 12C1 14.5 6 14.5 6 12"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.2"
        strokeLinecap="round"
      />

      {/* Right Scale Strings & Pan */}
      <path d="M20.5 7.5L18.5 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M20.5 7.5L22.5 12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path
        d="M18 12C18 14.5 23 14.5 23 12"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="currentColor"
        fillOpacity="0.2"
        strokeLinecap="round"
      />

      {/* Solid Base Pedestal */}
      <path
        d="M8 21H16"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
    </svg>
  );
};
