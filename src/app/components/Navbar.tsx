import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, GraduationCap, BookOpen, Globe, FileText, Briefcase, ArrowRight, Stethoscope, Plane, Languages } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { RedButton } from './ui/RedButton';
import LogoText from '../../assets/logo text.svg';

const programsList = [
  {
    title: "Jalur Mandiri (S1, S2, dan S3)",
    description: "Persiapan lengkap menuju universitas top Tiongkok",
    icon: GraduationCap,
    href: "/program/s1-s2"
  },
  {
    title: "Program Beasiswa",
    description: "Persiapan intensif meloloskan beasiswa CGS/CIS",
    icon: BookOpen,
    href: "/program/beasiswa"
  },
  {
    title: "Program Kedokteran MBBS",
    description: "Bimbingan khusus masuk program studi kedokteran unggulan",
    icon: Stethoscope,
    href: "/program/kedokteran-mbbs"
  },
  {
    title: "Short Program (CAMP)",
    description: "Program pertukaran dan visitasi kampus Tiongkok",
    icon: Plane,
    href: "/program/tur-kampus"
  },
  {
    title: "Program Bahasa Mandarin",
    description: "Kursus intensif bahasa Mandarin bersertifikat HSK",
    icon: Languages,
    href: "/program/kursus-mandarin"
  },
  {
    title: "Jasa Penerjemah Tersumpah",
    description: "Layanan penerjemah resmi bahasa Mandarin",
    icon: FileText,
    href: "/program/jasa-penerjemah"
  }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const [isMobileProgramOpen, setIsMobileProgramOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProgramOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-[#1e1e1e] border border-[#505050] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] w-full max-w-4xl flex items-center justify-between p-2 relative">

        {/* Logo */}
        <Link to="/" className="flex items-center px-3" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={LogoText} alt="Ekselensia Logo" className="h-[22px] w-auto max-w-[140px] object-contain" />
        </Link>

        {/* Desktop Links - Centered Absolutely */}
        <div className="hidden md:flex items-center gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link to="/" className="text-white/80 hover:text-white text-[14px] font-light transition-colors">
            Beranda
          </Link>

          {/* Program Dropdown Container */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsProgramOpen(true)}
            onMouseLeave={() => setIsProgramOpen(false)}
          >
            <a
              href="#program"
              className="text-white/80 hover:text-white text-[14px] font-light transition-colors flex items-center gap-1.5 py-4"
              onClick={(e) => {
                e.preventDefault();
                setIsProgramOpen(!isProgramOpen);
              }}
            >
              Program
              <ChevronDown
                size={14}
                className={`opacity-70 transition-transform duration-300 ${isProgramOpen ? 'rotate-180' : ''}`}
              />
            </a>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 w-[340px] bg-[#1e1e1e] border border-[#505050] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top
                ${isProgramOpen ? 'opacity-100 scale-100 visible translate-y-0' : 'opacity-0 scale-95 invisible -translate-y-2'}`}
            >
              <div className="p-2 flex flex-col gap-1">
                {programsList.map((program, idx) => (
                  <Link
                    key={idx}
                    to={program.href}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                    onClick={() => setIsProgramOpen(false)}
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#7c1318]/20 group-hover:border-[#7c1318]/30 transition-colors">
                      <program.icon size={20} className="text-white/70 group-hover:text-[#7c1318] transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium mb-0.5">{program.title}</div>
                      <div className="text-white/50 text-xs truncate">{program.description}</div>
                    </div>
                    <ArrowRight size={16} className="text-white/30 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/tentang-kami" className="text-white/80 hover:text-white text-[14px] font-light transition-colors">
            Tentang Kami
          </Link>
          <Link to="/artikel" className="text-white/80 hover:text-white text-[14px] font-light transition-colors">
            Artikel & Blog
          </Link>
          <Link to="/kontak" className="text-white/80 hover:text-white text-[14px] font-light transition-colors">
            Kontak
          </Link>
        </div>

        {/* Right: CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <RedButton
            as="a"
            href="https://wa.me/1234567890"
            className="hidden md:flex !px-4 !py-2 !text-[13.89px]"
          >
            Kontak Kami
          </RedButton>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-1 mr-1"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-[#1e1e1e] border border-[#505050] rounded-[16px] p-4 flex flex-col gap-4 shadow-xl md:hidden">
            <Link to="/" className="text-white text-[15px] font-light flex justify-between items-center" onClick={() => setIsOpen(false)}>
              Beranda
            </Link>

            <div className="flex flex-col gap-2">
              <button
                className="text-white text-[15px] font-light flex justify-between items-center w-full"
                onClick={() => setIsMobileProgramOpen(!isMobileProgramOpen)}
              >
                <span>Program</span>
                <ChevronDown size={18} className={`transition-transform duration-300 ${isMobileProgramOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mobile Sub-menu */}
              <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-1 ${isMobileProgramOpen ? 'max-h-[400px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                {programsList.map((program, idx) => (
                  <Link
                    key={idx}
                    to={program.href}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center shrink-0">
                      <program.icon size={14} className="text-white/70" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white text-sm">{program.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/tentang-kami" className="text-white text-[15px] font-light" onClick={() => setIsOpen(false)}>
              Tentang Kami
            </Link>
            <Link to="/artikel" className="text-white text-[15px] font-light flex justify-between items-center" onClick={() => setIsOpen(false)}>
              Artikel & Blog
            </Link>
            <Link to="/kontak" className="text-white text-[15px] font-light" onClick={() => setIsOpen(false)}>
              Kontak
            </Link>
            <div className="h-[1px] bg-[#505050] my-2"></div>
            <RedButton
              as="a"
              href="https://wa.me/1234567890"
              className="w-full !px-4 !py-3 !text-[15px]"
            >
              Kontak Kami
            </RedButton>
          </div>
        )}
      </nav>
    </div>
  );
}
