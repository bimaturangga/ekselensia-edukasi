import React from 'react';
import { BlurRevealText } from '../components/ui/BlurRevealText';
import { RedButton } from '../components/ui/RedButton';
import { Stethoscope, ArrowRight, Globe, Hospital, Activity } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Testimonials } from '../components/Testimonials';
import { CTASection } from '../components/CTASection';

const WHOMockup = () => (
    <div className="bg-[#2A2A2A] rounded-xl border border-white/5 w-full max-w-[240px] p-5 flex flex-col items-center shadow-xl">
        <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)] text-blue-400">
            <Globe size={32} />
        </div>
        <div className="text-white font-bold text-lg mb-1">Diakui WHO</div>
        <div className="bg-[#1F1F1F] text-gray-400 text-[11px] px-3 py-1.5 rounded-md border border-white/5 uppercase tracking-wider font-semibold">Standar Global</div>
    </div>
);

const ClinicalMockup = () => (
    <div className="bg-[#2A2A2A] rounded-xl border border-white/5 w-full max-w-[240px] p-4 flex flex-col gap-3 shadow-xl">
        <div className="flex items-center gap-3 bg-[#1F1F1F] p-2.5 rounded-lg border border-white/5">
            <div className="w-6 h-6 rounded flex items-center justify-center bg-red-500/20 text-red-400">
                <Hospital size={12} />
            </div>
            <div className="flex-1 text-xs text-white">Praktik Klinis</div>
            <div className="text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">Siap</div>
        </div>
        <div className="flex items-center gap-3 bg-[#1F1F1F] p-2.5 rounded-lg border border-white/5">
            <div className="w-6 h-6 rounded flex items-center justify-center bg-blue-500/20 text-blue-400">
                <Activity size={12} />
            </div>
            <div className="flex-1 text-xs text-white">Fasilitas Medis</div>
            <div className="text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">Lengkap</div>
        </div>
    </div>
);

export function KedokteranMBBS() {
    return (
        <main className="pt-0 pb-16 min-h-screen">

            {/* Hero Section */}
            <section className="relative w-full mb-16 sm:mb-32 pt-24 sm:pt-32 pb-8 sm:pb-12 overflow-hidden border-b border-gray-100/50">
                {/* Dotted Grid Background */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="dot-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1.5" fill="rgba(0, 0, 0, 0.08)" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dot-grid)" />
                    </svg>
                    {/* Subtle bottom fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
                    <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
                </div>

                <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7c1318]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

                    <div className="text-center mb-16 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/80 backdrop-blur-sm text-[#7c1318] text-xs font-semibold mb-6 border border-[#7c1318]/10 tracking-wide uppercase shadow-sm">
                            <Stethoscope size={14} />
                            Program Medis
                        </div>

                        <div
                            className="mb-6 font-bold"
                            style={{
                                WebkitMaskImage: 'linear-gradient(174.955deg, black 11.53%, transparent 109.53%)',
                                maskImage: 'linear-gradient(174.955deg, black 11.53%, transparent 109.53%)'
                            }}
                        >
                            <BlurRevealText
                                text="Program Kedokteran Klinis MBBS"
                                as="h1"
                                className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-[#1a1a1a]"
                                style={{ fontFamily: 'Funnel Display, sans-serif' }}
                            />
                        </div>

                        <p className="text-[15px] sm:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto mb-8 sm:mb-10">
                            Raih gelar dokter bertaraf global dari universitas-universitas kedokteran elit berbahasa Inggris di Tiongkok.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <RedButton as="a" href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                                Tanya Program Kedokteran <ArrowRight size={18} />
                            </RedButton>
                        </div>
                    </div>

                    {/* Feature Image Mockup Placeholder */}
                    <div className="w-full h-[400px] md:h-[500px] bg-gray-100 rounded-[20px] overflow-hidden border border-gray-200 shadow-2xl relative z-10 text-left">
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2070"
                            alt="Medical students studying"
                            className="w-full h-full object-cover grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 sm:p-10">
                            <div>
                                <RedButton className="pointer-events-none inline-flex !px-4 !py-2 !text-sm !rounded-xl mb-4 tracking-wider !w-auto">
                                    Standar Internasional
                                </RedButton>
                                <h3
                                    className="text-3xl md:text-4xl font-bold mb-3 tracking-tight bg-clip-text text-transparent"
                                    style={{
                                        fontFamily: 'Funnel Display, sans-serif',
                                        backgroundImage: 'linear-gradient(174.955deg, rgb(255, 255, 255) 11.53%, rgba(255, 255, 255, 0.3) 109.53%)'
                                    }}
                                >
                                    Persiapan Karir Medis Global
                                </h3>
                                <p className="text-white/80 text-sm md:text-base max-w-lg leading-relaxed">
                                    Universitas mitra kami memiliki afiliasi dengan rumah sakit premier di Tiongkok untuk memastikan praktik klinis yang memadai.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="keunggulan" className="bg-[#121212] py-16 sm:py-24 mx-3 sm:mx-5 rounded-[16px] sm:rounded-[20px] mb-16 sm:mb-24 relative overflow-hidden text-white border border-white/5 shadow-2xl">
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#7c1318]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-10 sm:mb-16">
                        <BlurRevealText
                            text="Keunggulan Program MBBS Kami"
                            as="h2"
                            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-clip-text text-transparent leading-tight"
                            style={{
                                fontFamily: 'Funnel Display, sans-serif',
                                backgroundImage: 'linear-gradient(174.955deg, rgb(255, 255, 255) 11.53%, rgba(255, 255, 255, 0.3) 109.53%)'
                            }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ScrollReveal>
                            <div className="bg-[#1C1C1C] border border-white/5 rounded-[20px] p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#202020] hover:border-white/10 group h-full">
                                <div className="flex-1 w-full flex items-center justify-center min-h-[180px] mb-8">
                                    <WHOMockup />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">Pengakuan Global (WHO)</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">Gelar medis diakui oleh World Health Organization, memungkinkan Anda berkarir di berbagai negara.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal>
                            <div className="bg-[#1C1C1C] border border-white/5 rounded-[20px] p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#202020] hover:border-white/10 delay-100 group h-full">
                                <div className="flex-1 w-full flex items-center justify-center min-h-[180px] mb-8">
                                    <ClinicalMockup />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">Fasilitas Praktik Klinis</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">Rumah sakit afiliasi bertaraf internasional yang memberikan pengalaman langsung ke mahasiswa.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <ScrollReveal><Testimonials /></ScrollReveal>
            <ScrollReveal><CTASection /></ScrollReveal>
        </main>
    );
}
