import React from 'react';
import { Facebook, Instagram, Twitter, GraduationCap } from 'lucide-react';
import clsx from 'clsx';
import { Link } from 'react-router';
import LogoText from '../../assets/logo text.svg';

function ItemText({ text, href = "#" }: { text: string; href?: string }) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-start pb-[2px] w-full group">
        <span className="text-[13px] sm:text-[16px] text-white/70 font-normal tracking-[-0.05px] group-hover:text-white transition-colors leading-[20px] sm:leading-[24px] whitespace-nowrap">
          {text}
        </span>
      </a>
    );
  }
  return (
    <Link to={href} className="flex items-start pb-[2px] w-full group">
      <span className="text-[13px] sm:text-[16px] text-white/70 font-normal tracking-[-0.05px] group-hover:text-white transition-colors leading-[20px] sm:leading-[24px] whitespace-nowrap">
        {text}
      </span>
    </Link>
  );
}

function Heading({ text }: { text: string }) {
  return (
    <div className="text-[15px] sm:text-[18px] font-semibold text-white tracking-[0.1px] leading-[20px] sm:leading-[22px] mb-3 sm:mb-[15px]">
      {text}
    </div>
  );
}

export function Footer() {
  return (
    <footer id="kontak" className="bg-[#101010] relative overflow-hidden flex justify-center pt-8 sm:pt-12 lg:pt-[48px] mx-3 sm:mx-5 rounded-[16px] sm:rounded-[20px] mb-3 sm:mb-5">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col relative">

        {/* Top Content Area */}
        <div className="flex flex-col lg:flex-row pb-8 sm:pb-12 lg:pb-24 lg:pt-12 relative gap-6 sm:gap-8 lg:gap-16">

          {/* Logo Section */}
          <div className="lg:w-[280px] flex-shrink-0 flex flex-col items-start pt-2">
            <Link to="/" className="inline-block" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src={LogoText} alt="Ekselensia Logo" className="h-[28px] sm:h-[32px] w-auto max-w-[150px] sm:max-w-[180px] object-contain mb-4 sm:mb-6" />
            </Link>
            <p className="text-white/60 text-[13px] sm:text-sm leading-relaxed max-w-[250px]">
              Membantu mewujudkan impian Anda untuk belajar di universitas terbaik di Tiongkok dengan bimbingan komprehensif.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex-1 flex flex-wrap justify-between gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-12 w-full items-start">

            {/* Navigasi Group */}
            <div className="flex flex-col flex-1 min-w-[140px] sm:min-w-[150px]">
              <Heading text="Navigasi" />
              <div className="flex flex-col gap-2 sm:gap-3">
                <ItemText text="Beranda" href="/" />
                <ItemText text="Tentang Kami" href="/tentang-kami" />
                <ItemText text="Artikel & Blog" href="/#blog" />
                <ItemText text="Kontak Kami" href="/kontak" />
              </div>
            </div>

            {/* Program Kami Group */}
            <div className="flex flex-col flex-1 min-w-[240px]">
              <Heading text="Program Kami" />
              <div className="flex flex-col gap-2 sm:gap-3">
                <ItemText text="Jalur Mandiri (S1, S2, dan S3)" href="/program/s1-s2" />
                <ItemText text="Program Beasiswa" href="/program/beasiswa" />
                <ItemText text="Program Kedokteran MBBS" href="/program/kedokteran-mbbs" />
                <ItemText text="Short Program (CAMP)" href="/program/tur-kampus" />
                <ItemText text="Program Bahasa Mandarin" href="/program/kursus-mandarin" />
                <ItemText text="Jasa Penerjemah Tersumpah" href="/program/jasa-penerjemah" />
              </div>
            </div>

            {/* Lainnya Group */}
            <div className="flex flex-col flex-1 min-w-[140px] sm:min-w-[150px]">
              <Heading text="Lainnya" />
              <div className="flex flex-col gap-2 sm:gap-3">
                <ItemText text="Bantuan & Dukungan" />
                <ItemText text="Syarat & Ketentuan" />
                <ItemText text="Kebijakan Privasi" />
                <ItemText text="Rekan Kerja" />
              </div>
            </div>

            {/* Follow Us Group */}
            <div className="flex flex-col flex-1 min-w-[150px]">
              <Heading text="Ikuti Kami" />
              <div className="flex items-center gap-4 mt-1">
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center">
                  <Twitter size={18} strokeWidth={1.5} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center">
                  <Facebook size={18} strokeWidth={1.5} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center">
                  <Instagram size={18} strokeWidth={1.5} />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 sm:py-[36px] border-t border-[rgba(255,255,255,0.2)] gap-3 sm:gap-4">
          <span className="text-[12px] sm:text-[14px] text-white/70 tracking-[-0.15px] font-normal leading-[16px] sm:leading-[18px]">
            © {new Date().getFullYear()} Ekselensia. Hak Cipta Dilindungi.
          </span>
          <span className="text-[12px] sm:text-[14px] text-white/70 tracking-[-0.15px] font-normal leading-[16px] sm:leading-[18px] text-left md:text-right">
            Seluruh merek dagang adalah milik masing-masing pemiliknya.
          </span>
        </div>

      </div>
    </footer>
  );
}
