import React from 'react';
import { Building2 } from 'lucide-react';
import { BlurRevealText } from './ui/BlurRevealText';

import Univ1 from '../../assets/univ (1).svg';
import Univ2 from '../../assets/univ (2).svg';
import Univ3 from '../../assets/univ (3).svg';
import Univ4 from '../../assets/univ (4).svg';
import Univ5 from '../../assets/univ (5).svg';
import Univ6 from '../../assets/univ (6).svg';
import Univ7 from '../../assets/univ (7).svg';
import Univ8 from '../../assets/univ (8).svg';
import Univ9 from '../../assets/univ (9).svg';
import Univ10 from '../../assets/univ (10).svg';
import Univ11 from '../../assets/univ (11).svg';
import Univ12 from '../../assets/univ (12).svg';

const univLogos = [
  Univ1, Univ2, Univ3, Univ4,
  Univ5, Univ6, Univ7, Univ8,
  Univ9, Univ10, Univ11, Univ12
];
function UnivLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="h-12 md:h-16 flex items-center justify-center opacity-60 hover:opacity-100 hover:scale-105 hover:grayscale-0 grayscale transition-all duration-300">
      <img src={src} alt={alt} className="max-h-full max-w-[150px] object-contain" />
    </div>
  );
}

// Ensure infinite scroll is seamless by creating 3 sets of the logos
const LOGOS1 = univLogos.slice(0, 4);
const LOGOS2 = univLogos.slice(4, 8);
const LOGOS3 = univLogos.slice(8, 12);

const ROW1 = [...LOGOS1, ...LOGOS1, ...LOGOS1, ...LOGOS1, ...LOGOS1, ...LOGOS1, ...LOGOS1];
const ROW2 = [...LOGOS2, ...LOGOS2, ...LOGOS2, ...LOGOS2, ...LOGOS2, ...LOGOS2, ...LOGOS2];
const ROW3 = [...LOGOS3, ...LOGOS3, ...LOGOS3, ...LOGOS3, ...LOGOS3, ...LOGOS3, ...LOGOS3];

export function Universities() {
  return (
    <section className="bg-gray-50 py-24 border-b border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-gray-200 text-gray-600 text-xs font-medium mb-6 shadow-sm">
            <Building2 size={14} />
            Mitra Global
          </div>
          <BlurRevealText
            text="Mitra Universitas Kami"
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-clip-text text-transparent"
            style={{
              fontFamily: 'Funnel Display, sans-serif',
              backgroundImage: "linear-gradient(174.955deg, rgb(30, 30, 30) 11.53%, rgba(30, 30, 30, 0.6) 109.53%)"
            }}
          />
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Kami bekerja sama dengan universitas-universitas terbaik dan paling bergengsi di seluruh Tiongkok.
          </p>
        </div>
      </div>

      <div className="relative w-full flex flex-col gap-10 lg:gap-14 overflow-hidden">
        {/* Global edge gradients for fading effect */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-gray-50 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-gray-50 to-transparent z-20 pointer-events-none"></div>

        {/* Top Row: Right to Left */}
        <div className="flex items-center w-max animate-marquee" style={{ animationDuration: '40s' }}>
          <div className="flex gap-16 md:gap-24 pr-16 md:pr-24 items-center">
            {ROW1.map((src, i) => (
              <div key={`row1-${i}`} className="flex-shrink-0 flex items-center justify-center">
                <UnivLogo src={src} alt="University Logo" />
              </div>
            ))}
          </div>
        </div>

        {/* Middle Row: Left to Right */}
        <div className="flex items-center w-max animate-marquee" style={{ animationDirection: 'reverse', animationDuration: '45s' }}>
          <div className="flex gap-16 md:gap-24 pr-16 md:pr-24 items-center">
            {ROW2.map((src, i) => (
              <div key={`row2-${i}`} className="flex-shrink-0 flex items-center justify-center">
                <UnivLogo src={src} alt="University Logo" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row: Right to Left */}
        <div className="flex items-center w-max animate-marquee" style={{ animationDuration: '35s' }}>
          <div className="flex gap-16 md:gap-24 pr-16 md:pr-24 items-center">
            {ROW3.map((src, i) => (
              <div key={`row3-${i}`} className="flex-shrink-0 flex items-center justify-center">
                <UnivLogo src={src} alt="University Logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}