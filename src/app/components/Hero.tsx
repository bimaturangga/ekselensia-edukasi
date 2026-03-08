import React from 'react';
import { ArrowRight, Plane } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { RedButton } from './ui/RedButton';

const STUDENTS = [
  {
    name: "Ahmad Rizky",
    major: "Teknik Informatika",
    uni: "Tsinghua University",
    image: "https://images.unsplash.com/photo-1706025090996-63717544be2d?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Siti Nurhaliza",
    major: "Bisnis Internasional",
    uni: "Peking University",
    image: "https://images.unsplash.com/photo-1761243892035-c3e13829115a?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Budi Santoso",
    major: "Kedokteran",
    uni: "Fudan University",
    image: "https://images.unsplash.com/photo-1725473823290-8a261fe706a8?auto=format&fit=crop&q=80&w=600"
  }
];

export function Hero() {
  return (
    <section id="beranda" className="relative bg-[#fafafa] pt-20 pb-12 overflow-hidden border-b border-gray-100 min-h-[80vh] flex items-center">

      {/* Top radial gradient light source */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1400px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,1),transparent_80%)] pointer-events-none z-0"></div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="white-rounded-grid" width="80" height="80" patternUnits="userSpaceOnUse" x="50%" y="0">
              <rect x="0" y="0" width="80" height="80" rx="14" fill="none" stroke="rgba(0, 0, 0, 0.04)" strokeWidth="1.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#white-rounded-grid)" />
        </svg>
      </div>

      {/* Floating Glowing Grid Cells */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[
          { r: 1, c: -7, bg: 'bg-white/80', shadow: 'shadow-[0_8px_30px_rgba(0,0,0,0.04)]', display: 'hidden xl:block' },
          { r: 4, c: -8, bg: 'bg-white/60', shadow: 'shadow-[0_4px_20px_rgba(0,0,0,0.02)]', display: 'hidden lg:block' },
          { r: 7, c: -5, bg: 'bg-white/70', shadow: 'shadow-[0_8px_24px_rgba(0,0,0,0.03)]', display: 'hidden md:block' },
          { r: 2, c: -3, bg: 'bg-white/90', shadow: 'shadow-[0_12px_40px_rgba(0,0,0,0.06)]', display: 'hidden sm:block' },
          { r: 8, c: -2, bg: 'bg-white/50', shadow: 'shadow-[0_4px_16px_rgba(0,0,0,0.02)]', display: 'block' },
          { r: 1, c: 3, bg: 'bg-white', shadow: 'shadow-[0_8px_30px_rgba(0,0,0,0.05)]', display: 'hidden sm:block' },
          { r: 5, c: 4, bg: 'bg-white/60', shadow: 'shadow-[0_4px_20px_rgba(0,0,0,0.02)]', display: 'block' },
          { r: 3, c: 7, bg: 'bg-white/80', shadow: 'shadow-[0_8px_28px_rgba(0,0,0,0.04)]', display: 'hidden lg:block' },
          { r: 7, c: 6, bg: 'bg-white/70', shadow: 'shadow-[0_8px_24px_rgba(0,0,0,0.03)]', display: 'hidden xl:block' },
          { r: 9, c: 2, bg: 'bg-white/90', shadow: 'shadow-[0_12px_40px_rgba(0,0,0,0.06)]', display: 'hidden md:block' },
          // Tambahan sel untuk mengisi area kiri, kanan, dan bawah
          { r: 2, c: -10, bg: 'bg-white/50', shadow: 'shadow-[0_4px_16px_rgba(0,0,0,0.02)]', display: 'hidden 2xl:block' },
          { r: 6, c: -11, bg: 'bg-white/70', shadow: 'shadow-[0_8px_24px_rgba(0,0,0,0.03)]', display: 'hidden 2xl:block' },
          { r: 10, c: -8, bg: 'bg-white/60', shadow: 'shadow-[0_4px_20px_rgba(0,0,0,0.02)]', display: 'hidden xl:block' },
          { r: 11, c: -4, bg: 'bg-white/80', shadow: 'shadow-[0_8px_30px_rgba(0,0,0,0.04)]', display: 'hidden lg:block' },
          { r: 12, c: -1, bg: 'bg-white/90', shadow: 'shadow-[0_12px_40px_rgba(0,0,0,0.06)]', display: 'hidden md:block' },
          { r: 11, c: 4, bg: 'bg-white/70', shadow: 'shadow-[0_8px_24px_rgba(0,0,0,0.03)]', display: 'hidden lg:block' },
          { r: 10, c: 8, bg: 'bg-white/50', shadow: 'shadow-[0_4px_16px_rgba(0,0,0,0.02)]', display: 'hidden xl:block' },
          { r: 8, c: 11, bg: 'bg-white/60', shadow: 'shadow-[0_4px_20px_rgba(0,0,0,0.02)]', display: 'hidden 2xl:block' },
          { r: 4, c: 10, bg: 'bg-white/80', shadow: 'shadow-[0_8px_30px_rgba(0,0,0,0.04)]', display: 'hidden 2xl:block' },
          { r: 1, c: 9, bg: 'bg-white/70', shadow: 'shadow-[0_8px_24px_rgba(0,0,0,0.03)]', display: 'hidden xl:block' },
        ].map((cell, i) => (
          <div
            key={i}
            className={`absolute w-[80px] h-[80px] rounded-[14px] border border-white backdrop-blur-sm ${cell.bg} ${cell.shadow} ${cell.display}`}
            style={{
              top: `${cell.r * 80}px`,
              left: `calc(50% ${cell.c >= 0 ? '+' : '-'} ${Math.abs(cell.c * 80)}px)`
            }}
          ></div>
        ))}
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#fafafa] to-transparent z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 relative z-10">

        {/* Left Side: Copy */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start space-y-6 lg:space-y-8 z-10 text-center lg:text-left pt-10 sm:pt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-rose-50 border border-rose-100 text-[#7c1318] text-sm font-semibold tracking-wide shadow-sm mx-auto lg:mx-0">
            <Plane size={16} />
            Jalan Pintas Kuliah di Luar Negeri
          </div>
          <h1
            className="text-[36px] sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] lg:leading-tight bg-clip-text text-transparent w-full"
            style={{ backgroundImage: "linear-gradient(174.955deg, rgb(30, 30, 30) 11.53%, rgba(30, 30, 30, 0) 109.53%)" }}
          >
            Wujudkan Mimpi <br />
            Kuliah di <span className="text-[#7c1318]" style={{ WebkitTextFillColor: '#7c1318' }}>China</span>
          </h1>
          <p className="text-[15px] sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-4 lg:mb-6 px-2 sm:px-0">
            Ekselensia membantu Anda mempersiapkan diri dan memastikan langkah sukses untuk menempuh pendidikan terbaik di universitas top Tiongkok.
          </p>
          <div className="flex flex-col w-full sm:flex-row gap-3 sm:gap-4 sm:w-auto mt-4 lg:mt-0 px-4 sm:px-0">
            <RedButton as="a" href="https://wa.me/1234567890" className="w-full sm:w-auto flex justify-center items-center !text-[15px] !py-3.5 sm:!py-3">
              Mulai Konsultasi
              <ArrowRight className="group-hover:translate-x-1 transition-transform ml-2" size={18} />
            </RedButton>
            <a
              href="#program"
              className="bg-white text-black border-2 border-gray-200 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-[10px] font-medium text-[15px] sm:text-[18px] hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center"
            >
              Lihat Program
            </a>
          </div>
        </div>

        {/* Right Side: Animated Carousel */}
        <div className="lg:w-1/2 w-full relative h-[500px] overflow-hidden rounded-2xl bg-gray-50 flex items-center shadow-[inset_0_0_40px_rgba(0,0,0,0.02)]">

          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          <div className="flex items-center gap-6 pr-6 animate-marquee w-max">
            {[...STUDENTS, ...STUDENTS].map((student, i) => (
              <div
                key={i}
                className="w-72 flex-shrink-0 bg-white p-5 rounded-xl shadow-xl shadow-gray-200/50 flex flex-col gap-4 border border-gray-100"
              >
                <div className="w-full h-64 rounded-lg overflow-hidden relative">
                  <ImageWithFallback
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-black flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    Diterima
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">{student.name}</h3>
                  <p className="text-[#7c1318] font-medium text-sm mt-1">{student.major}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{student.uni}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
