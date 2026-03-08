import React from 'react';
import { Phone } from 'lucide-react';
import { BlurRevealText } from './ui/BlurRevealText';

export function CTASection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* The CTA Container */}
        <div className="relative w-full rounded-[24px] overflow-hidden shadow-2xl flex flex-col items-center text-center px-6 py-16 sm:px-12 sm:py-24 border border-red-800/60 bg-[#240606]">

          {/* Top radial gradient light source */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] bg-[radial-gradient(ellipse_at_top,rgba(235,50,50,0.5),transparent_75%)] pointer-events-none z-0"></div>

          {/* Noise texture overlay */}
          <div className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

          {/* Grid Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="red-rounded-grid" width="80" height="80" patternUnits="userSpaceOnUse" x="50%" y="0">
                  <rect x="0" y="0" width="80" height="80" rx="14" fill="none" stroke="rgba(255, 90, 90, 0.12)" strokeWidth="1.2" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#red-rounded-grid)" />
            </svg>
          </div>

          {/* Floating Glowing Grid Cells */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {[
              { r: 1, c: -6, bg: 'bg-gradient-to-br from-red-500/35 to-red-500/5', border: 'border-red-400/40', shadow: 'shadow-[inset_0_0_15px_rgba(255,100,100,0.2)]', display: 'hidden xl:block' },
              { r: 2, c: -4, bg: 'bg-gradient-to-br from-red-400/25 to-transparent', border: 'border-red-400/30', shadow: '', display: 'hidden lg:block' },
              { r: 0, c: -2, bg: 'bg-gradient-to-br from-red-500/20 to-transparent', border: 'border-red-400/20', shadow: '', display: 'hidden sm:block' },
              { r: 3, c: 2, bg: 'bg-gradient-to-br from-red-500/40 to-red-500/10', border: 'border-red-300/40', shadow: 'shadow-[inset_0_0_20px_rgba(255,80,80,0.25)]', display: 'hidden sm:block' },
              { r: 1, c: 4, bg: 'bg-gradient-to-br from-red-500/30 to-transparent', border: 'border-red-400/30', shadow: '', display: 'hidden md:block' },
              { r: 4, c: -3, bg: 'bg-gradient-to-br from-red-500/25 to-transparent', border: 'border-red-400/25', shadow: '', display: 'block' },
              { r: 2, c: 5, bg: 'bg-gradient-to-br from-red-500/35 to-transparent', border: 'border-red-400/30', shadow: '', display: 'hidden lg:block' },
              { r: 5, c: 3, bg: 'bg-gradient-to-br from-red-400/20 to-transparent', border: 'border-red-400/20', shadow: '', display: 'block' },
              // Tambahan sel untuk mengisi area kiri, kanan, dan bawah
              { r: 1, c: -9, bg: 'bg-gradient-to-br from-red-500/30 to-transparent', border: 'border-red-400/30', shadow: '', display: 'hidden 2xl:block' },
              { r: 4, c: -10, bg: 'bg-gradient-to-br from-red-500/20 to-transparent', border: 'border-red-400/20', shadow: '', display: 'hidden 2xl:block' },
              { r: 6, c: -7, bg: 'bg-gradient-to-br from-red-500/40 to-red-500/10', border: 'border-red-300/40', shadow: 'shadow-[inset_0_0_20px_rgba(255,80,80,0.25)]', display: 'hidden xl:block' },
              { r: 7, c: -4, bg: 'bg-gradient-to-br from-red-500/25 to-transparent', border: 'border-red-400/25', shadow: '', display: 'hidden lg:block' },
              { r: 8, c: 0, bg: 'bg-gradient-to-br from-red-500/35 to-red-500/5', border: 'border-red-400/40', shadow: 'shadow-[inset_0_0_15px_rgba(255,100,100,0.2)]', display: 'hidden md:block' },
              { r: 7, c: 5, bg: 'bg-gradient-to-br from-red-500/20 to-transparent', border: 'border-red-400/20', shadow: '', display: 'hidden lg:block' },
              { r: 5, c: 8, bg: 'bg-gradient-to-br from-red-500/30 to-transparent', border: 'border-red-400/30', shadow: '', display: 'hidden xl:block' },
              { r: 2, c: 10, bg: 'bg-gradient-to-br from-red-500/40 to-red-500/10', border: 'border-red-300/40', shadow: 'shadow-[inset_0_0_20px_rgba(255,80,80,0.25)]', display: 'hidden 2xl:block' },
              { r: 0, c: 8, bg: 'bg-gradient-to-br from-red-500/25 to-transparent', border: 'border-red-400/25', shadow: '', display: 'hidden xl:block' },
            ].map((cell, i) => (
              <div
                key={i}
                className={`absolute w-[80px] h-[80px] rounded-[14px] border backdrop-blur-sm ${cell.bg} ${cell.border} ${cell.shadow} ${cell.display}`}
                style={{
                  top: `${cell.r * 80}px`,
                  left: `calc(50% ${cell.c >= 0 ? '+' : '-'} ${Math.abs(cell.c * 80)}px)`
                }}
              ></div>
            ))}
          </div>

          {/* Typography Content */}
          <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 border border-white/20 text-white text-xs font-medium mb-6 backdrop-blur-sm">
              <Phone size={14} />
              Hubungi Kami
            </div>
            <BlurRevealText
              text="Siap Memulai Perjalanan<br className='hidden sm:block' /> Akademis Anda?"
              className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-center bg-clip-text text-transparent"
              style={{
                fontFamily: 'Funnel Display, sans-serif',
                backgroundImage: 'linear-gradient(174.955deg, rgb(255, 255, 255) 11.53%, rgba(255, 255, 255, 0.3) 109.53%)'
              }}
            />
            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-xl text-center">
              Jangan tunda lagi impian Anda. Hubungi konsultan kami hari ini untuk konsultasi gratis mengenai peluang kuliah dan beasiswa di Tiongkok. Bangun masa depan Anda bersama ahlinya.
            </p>

            {/* Button */}
            <a
              href="https://wa.me/1234567890"
              className="bg-white text-[#11023b] px-6 py-3 rounded-xl font-medium text-[15px] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shadow-lg w-auto"
            >
              Hubungi Kami Sekarang
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}