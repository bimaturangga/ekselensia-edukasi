import React from 'react';
import { BlurRevealText } from '../components/ui/BlurRevealText';
import { RedButton } from '../components/ui/RedButton';
import { GraduationCap, ArrowRight, CheckCircle2, Globe, BookOpen, Building, Users } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Testimonials } from '../components/Testimonials';
import { CTASection } from '../components/CTASection';

const SuccessRateMockup = () => (
    <div className="bg-[#2A2A2A] rounded-xl border border-white/5 w-full max-w-[240px] p-5 flex flex-col items-center shadow-xl">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.2)] text-green-400">
            <CheckCircle2 size={32} />
        </div>
        <div className="text-white font-bold text-lg mb-1">98% Accepted</div>
        <div className="bg-[#1F1F1F] text-gray-400 text-[11px] px-3 py-1.5 rounded-md border border-white/5 uppercase tracking-wider font-semibold">Top 50 Universities</div>
    </div>
);

const CampusNetworkMockup = () => (
    <div className="relative w-full max-w-[240px] h-[160px] flex items-center justify-center px-4">
        <div className="absolute inset-0 border border-white/5 rounded-2xl bg-[#2A2A2A] shadow-xl overflow-hidden flex flex-col p-4 justify-between">
            <div className="flex justify-between items-center w-full z-10">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 shadow-[0_0_10px_rgba(239,68,68,0.2)] bg-[#1F1F1F]">
                    <Building size={20} />
                </div>
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.2)] bg-[#1F1F1F]">
                    <Building size={20} />
                </div>
            </div>
            <div className="flex justify-center w-full z-10">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 bg-[#1F1F1F] shadow-inner relative z-10">
                    <Globe size={24} />
                </div>
            </div>
            <div className="flex justify-between items-center w-full z-10">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.2)] bg-[#1F1F1F]">
                    <Building size={20} />
                </div>
                <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.2)] bg-[#1F1F1F]">
                    <Building size={20} />
                </div>
            </div>

            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-50" viewBox="0 0 240 160">
                <path d="M40,40 L120,80" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M200,40 L120,80" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M40,120 L120,80" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M200,120 L120,80" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>
        </div>
    </div>
);

const DocumentMockupS1S2 = () => (
    <div className="bg-[#2A2A2A] rounded-xl border border-white/5 w-full max-w-[240px] p-4 flex flex-col gap-3 shadow-xl">
        <div className="flex items-center gap-3 bg-[#1F1F1F] p-2.5 rounded-lg border border-white/5">
            <div className="w-6 h-6 rounded flex items-center justify-center bg-blue-500/20 text-blue-400">
                <BookOpen size={12} />
            </div>
            <div className="flex-1 text-xs text-white">Study Plan</div>
            <div className="text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">Verified</div>
        </div>
        <div className="flex items-center gap-3 bg-[#1F1F1F] p-2.5 rounded-lg border border-white/5">
            <div className="w-6 h-6 rounded flex items-center justify-center bg-purple-500/20 text-purple-400">
                <BookOpen size={12} />
            </div>
            <div className="flex-1 text-xs text-white">Motivation Letter</div>
            <div className="text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20">Verified</div>
        </div>
        <div className="flex items-center gap-3 bg-[#1F1F1F] p-2.5 rounded-lg border border-[#7c1318]/40 shadow-[0_0_10px_rgba(124,19,24,0.1)]">
            <div className="w-6 h-6 rounded flex items-center justify-center bg-[#7c1318]/20 text-[#7c1318]">
                <BookOpen size={12} />
            </div>
            <div className="flex-1 text-xs text-white font-medium">Recommendation</div>
            <div className="text-[10px] text-[#7c1318] animate-pulse">Review...</div>
        </div>
    </div>
);

const SupportMockup = () => (
    <div className="bg-[#2A2A2A] rounded-xl border border-white/5 w-full max-w-[240px] p-4 flex justify-between shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#7c1318]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="flex flex-col items-center gap-2 z-10 w-full relative">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150" className="w-14 h-14 object-cover rounded-full border-2 border-[#1F1F1F] shadow-lg" alt="Mentor" />
            <div className="text-white text-sm font-bold mt-1">Sisi (Consultant)</div>
            <div className="text-gray-400 text-[11px] mb-2">Dedicated Mentor</div>
            <div className="flex gap-2 w-full mt-1">
                <div className="flex-1 bg-[#1F1F1F] border border-white/5 rounded-md py-1.5 flex items-center justify-center gap-1.5 text-xs text-gray-300">
                    <Users size={12} /> Chat
                </div>
                <div className="w-8 flex-shrink-0 bg-[#7c1318]/20 border border-[#7c1318]/40 rounded-md py-1.5 flex items-center justify-center text-[#7c1318]">
                    <CheckCircle2 size={12} />
                </div>
            </div>
        </div>
    </div>
);

export function BimbinganS1S2() {
    return (
        <main className="pt-0 pb-16 min-h-screen">

            {/* Hero Section for S1 & S2 */}
            <section className="relative w-full mb-32 pt-32 pb-12 overflow-hidden border-b border-gray-100/50">
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
                            <GraduationCap size={14} />
                            Program Unggulan
                        </div>

                        <div
                            className="mb-6 font-bold"
                            style={{
                                WebkitMaskImage: 'linear-gradient(174.955deg, black 11.53%, transparent 109.53%)',
                                maskImage: 'linear-gradient(174.955deg, black 11.53%, transparent 109.53%)'
                            }}
                        >
                            <BlurRevealText
                                text="Bimbingan Komprehensif S1, S2 & S3 Tiongkok"
                                as="h1"
                                className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-[#1a1a1a]"
                                style={{ fontFamily: 'Funnel Display, sans-serif' }}
                            />
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto mb-10">
                            Dapatkan pendampingan penuh dari pemilihan jurusan hingga keberangkatan menuju universitas top di Tiongkok. Masa depan akademik Anda dimulai di sini.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <RedButton as="a" href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                                Konsultasi Gratis <ArrowRight size={18} />
                            </RedButton>
                        </div>
                    </div>

                    {/* Feature Image/Video Mockup Placeholder */}
                    <div className="w-full h-[400px] md:h-[500px] bg-gray-100 rounded-[20px] overflow-hidden border border-gray-200 shadow-2xl relative z-10 text-left">
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2070"
                            alt="Students in China graduating"
                            className="w-full h-full object-cover grayscale"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 sm:p-10">
                            <div>
                                <RedButton className="pointer-events-none inline-flex !px-4 !py-2 !text-sm !rounded-xl mb-4 tracking-wider !w-auto">
                                    98% Success Rate
                                </RedButton>
                                <h3
                                    className="text-3xl md:text-4xl font-bold mb-3 tracking-tight bg-clip-text text-transparent"
                                    style={{
                                        fontFamily: 'Funnel Display, sans-serif',
                                        backgroundImage: 'linear-gradient(174.955deg, rgb(255, 255, 255) 11.53%, rgba(255, 255, 255, 0.3) 109.53%)'
                                    }}
                                >
                                    Persentase Kelulusan Tinggi
                                </h3>
                                <p className="text-white/80 text-sm md:text-base max-w-lg leading-relaxed">
                                    Tingkat kelulusan siswa bimbingan kami ke top 50 universitas target di Tiongkok secara konsisten mencapai 98%.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Keunggulan Program Section */}
            <section id="keunggulan" className="bg-[#121212] py-24 mx-5 rounded-[20px] mb-24 relative overflow-hidden text-white border border-white/5 shadow-2xl">
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#7c1318]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <BlurRevealText
                            text="Mengapa Memilih Kami?"
                            as="h2"
                            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-clip-text text-transparent leading-tight"
                            style={{
                                fontFamily: 'Funnel Display, sans-serif',
                                backgroundImage: 'linear-gradient(174.955deg, rgb(255, 255, 255) 11.53%, rgba(255, 255, 255, 0.3) 109.53%)'
                            }}
                        />
                        <p className="text-gray-400">Keunggulan program persiapan S1, S2 & S3 kami yang membedakan Ekselensia dengan yang lain.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ScrollReveal>
                            <div className="bg-[#1C1C1C] border border-white/5 rounded-[20px] p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#202020] hover:border-white/10 group h-full">
                                <div className="flex-1 w-full flex items-center justify-center min-h-[180px] mb-8">
                                    <SuccessRateMockup />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">Tingkat Lolos Tinggi</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">Strategi aplikasi yang disesuaikan dengan profil dan target masing-masing peserta didik.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal>
                            <div className="bg-[#1C1C1C] border border-white/5 rounded-[20px] p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#202020] hover:border-white/10 delay-100 group h-full">
                                <div className="flex-1 w-full flex items-center justify-center min-h-[180px] mb-8">
                                    <CampusNetworkMockup />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">Jaringan Kampus Luas</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">Kemitraan langsung dengan berbagai universitas papan atas di kota-kota besar Tiongkok.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal>
                            <div className="bg-[#1C1C1C] border border-white/5 rounded-[20px] p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#202020] hover:border-white/10 delay-200 group h-full">
                                <div className="flex-1 w-full flex items-center justify-center min-h-[180px] mb-8">
                                    <DocumentMockupS1S2 />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">Dokumen Eksklusif</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">Bimbingan penulisan esai, rencana studi, dan persiapan wawancara dengan ahlinya.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal>
                            <div className="bg-[#1C1C1C] border border-white/5 rounded-[20px] p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#202020] hover:border-white/10 delay-300 group h-full">
                                <div className="flex-1 w-full flex items-center justify-center min-h-[180px] mb-8">
                                    <SupportMockup />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">Pendampingan Penuh</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">Dari pendaftaran awal, urusan visa, hingga Anda menetap di asrama dan memulai studi.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Tahapan Sekilas */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-24">
                <div className="text-center mb-16 flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#f5f5f5] border border-gray-200 text-gray-600 text-xs font-medium mb-6">
                        <BookOpen size={14} />
                        Tahapan Bimbingan
                    </div>
                    <BlurRevealText
                        text="Langkah Menuju Universitas Impian"
                        as="h2"
                        className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-clip-text text-transparent leading-tight"
                        style={{
                            fontFamily: 'Funnel Display, sans-serif',
                            backgroundImage: 'linear-gradient(174.955deg, rgb(30, 30, 30) 11.53%, rgba(30, 30, 30, 0.6) 109.53%)'
                        }}
                    />
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Kami merancang setiap tahapan persiapan dengan sistematis untuk memastikan peluang penerimaan Anda di universitas dambaan mencapai titik maksimal.
                    </p>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[28px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">

                    <ScrollReveal>
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16 items-center">
                            <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-white border border-gray-200 shadow z-10 text-[#7c1318] font-bold text-lg">
                                1
                            </div>
                            <div className="pl-[5rem] md:pl-0 md:pr-4 col-start-1 md:col-start-1 text-left md:text-right">
                                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-transform duration-300 hover:-translate-y-1 inline-block text-left w-full relative z-20">
                                    <h3 className="font-bold text-xl mb-2 text-gray-800">Konsultasi & Penilaian</h3>
                                    <p className="text-gray-500 text-sm">Menilai kualifikasi akademik, minat, dan menetapkan target universitas serta jurusan yang paling sesuai.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16 items-center">
                            <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-white border border-gray-200 shadow z-10 text-[#7c1318] font-bold text-lg">
                                2
                            </div>
                            <div className="pl-[5rem] md:pl-4 col-start-1 md:col-start-2">
                                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-transform duration-300 hover:-translate-y-1 relative z-20">
                                    <h3 className="font-bold text-xl mb-2 text-gray-800">Persiapan Dokumen</h3>
                                    <p className="text-gray-500 text-sm">Validasi dokumen, penerjemahan resmi, legalisir, dan bimbingan penyusunan essay/Motivation Letter.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16 items-center">
                            <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-white border border-gray-200 shadow z-10 text-[#7c1318] font-bold text-lg">
                                3
                            </div>
                            <div className="pl-[5rem] md:pl-0 md:pr-4 col-start-1 md:col-start-1 text-left md:text-right">
                                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm transition-transform duration-300 hover:-translate-y-1 inline-block text-left w-full relative z-20">
                                    <h3 className="font-bold text-xl mb-2 text-gray-800">Submit & Monitor Aplikasi</h3>
                                    <p className="text-gray-500 text-sm">Pengajuan berkas secara online melalui portal resmi universitas dan pemantauan status penerimaan secara berkala.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16 items-center">
                            <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-[#7c1318] shadow z-10 text-white font-bold text-lg ring-4 ring-white">
                                4
                            </div>
                            <div className="pl-[5rem] md:pl-4 col-start-1 md:col-start-2">
                                <div className="p-6 rounded-2xl bg-red-50 border border-red-100 shadow-sm transition-transform duration-300 hover:-translate-y-1 relative z-20">
                                    <h3 className="font-bold text-xl mb-2 text-[#7c1318]">Penerimaan & Keberangkatan</h3>
                                    <p className="text-gray-700 text-sm">Penerimaan LOA, pengurusan Visa pelajar JW202, logistik penerbangan, hingga kedatangan di kampus.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </section>

            <ScrollReveal><Testimonials /></ScrollReveal>
            <ScrollReveal><CTASection /></ScrollReveal>

        </main>
    );
}
