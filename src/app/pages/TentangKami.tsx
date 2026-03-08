import React, { useState, useCallback, useEffect } from 'react';
import { BlurRevealText } from '../components/ui/BlurRevealText';
import { RedButton } from '../components/ui/RedButton';
import { ArrowRight, Info, ShieldCheck, Users, Target, Rocket, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CTASection } from '../components/CTASection';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const TeamMember = ({ name, role, image, isLeader = false, isActive = true }: { name: string, role: string, image: string, isLeader?: boolean, isActive?: boolean }) => (
    <div className={`w-full bg-white p-5 rounded-xl shadow-xl shadow-gray-200/50 flex flex-col gap-4 border border-gray-100 group transition-all duration-500 ease-out h-full
        ${isActive ? 'scale-100 opacity-100' : 'scale-[0.85] opacity-50 blur-[1px]'}`}>
        <div className="w-full h-64 rounded-lg overflow-hidden relative">
            <ImageWithFallback src={image} alt={name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            {isLeader && (
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-black flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#7c1318]"></div>
                    Founder
                </div>
            )}
        </div>
        <div className="text-left px-1">
            <h3 className="text-xl font-bold text-black">{name}</h3>
            <p className="text-[#7c1318] font-medium text-sm mt-1">{role}</p>
        </div>
    </div>
);
const VisionMockup = () => (
    <div className="flex flex-col gap-3 w-full h-full p-6 justify-center">
        <div className="bg-white rounded-xl p-4 border border-gray-100 flex flex-col items-center justify-center shadow-sm transform transition-transform group-hover:-translate-y-2 duration-500 h-full">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-3">
                <Target size={24} className="text-[#7c1318]" />
            </div>
            <div className="text-xs font-bold text-gray-800 text-center">Global Excellence</div>
            <div className="text-[10px] text-gray-500 text-center mt-1">Leading Educational Consultant</div>
        </div>
    </div>
);

const MissionMockup = () => (
    <div className="flex flex-col gap-2 w-full h-full p-6 justify-center">
        <div className="bg-white rounded-xl p-3 border border-gray-100 flex items-center gap-3 shadow-sm transform transition-transform group-hover:-translate-y-2 duration-500">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <Users size={16} className="text-blue-500" />
            </div>
            <div>
                <div className="text-[10px] font-bold text-gray-800">Layanan Personal</div>
                <div className="text-[9px] text-gray-500">Komprehensif & Transparan</div>
            </div>
        </div>
        <div className="bg-white rounded-xl p-3 border border-gray-100 flex items-center gap-3 shadow-sm transform transition-transform group-hover:-translate-y-2 duration-500 delay-75">
            <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                <Rocket size={16} className="text-green-500" />
            </div>
            <div>
                <div className="text-[10px] font-bold text-gray-800">Kemitraan Luas</div>
                <div className="text-[9px] text-gray-500">Universitas Top Tiongkok</div>
            </div>
        </div>
    </div>
);

const LegalMockup = () => (
    <div className="flex flex-col gap-3 w-full h-full p-6 justify-center">
        <div className="bg-white rounded-xl p-4 border border-gray-100 flex items-center justify-between shadow-sm transform transition-transform group-hover:-translate-y-2 duration-500 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-16 h-16 bg-green-50 rounded-bl-full -z-10"></div>
            <div>
                <div className="text-[10px] font-bold text-gray-800">NIB & Izin Usaha</div>
                <div className="text-[9px] text-gray-500">Tercatat Resmi</div>
            </div>
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <ShieldCheck size={12} className="text-green-600" />
            </div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 flex items-center justify-between shadow-sm transform transition-transform group-hover:-translate-y-2 duration-500 delay-75 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-16 h-16 bg-blue-50 rounded-bl-full -z-10"></div>
            <div>
                <div className="text-[10px] font-bold text-gray-800">Penerjemah</div>
                <div className="text-[9px] text-gray-500">Tersumpah (Sworn)</div>
            </div>
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <Info size={12} className="text-blue-600" />
            </div>
        </div>
    </div>
);

const CARDS = [
    {
        mockup: VisionMockup,
        title: "Visi Kami",
        desc: "Menjadi konsultan pendidikan terkemuka di Indonesia yang menjembatani generasi muda dengan institusi pendidikan internasional di Tiongkok untuk melahirkan SDM unggul."
    },
    {
        mockup: MissionMockup,
        title: "Misi Kami",
        desc: "Memberikan layanan konsultasi personal, menyediakan program persiapan studi berkualitas, serta memperluas jaringan kemitraan strategis dengan universitas papan atas."
    },
    {
        mockup: LegalMockup,
        title: "Legalitas Resmi",
        desc: "Kami adalah entitas hukum terdaftar dengan penerjemah tersumpah resmi. Layanan kami mematuhi standar regulasi nasional dan internasional untuk keamanan Anda."
    }
];

const TEAM_MEMBERS = [
    {
        name: "Budi Santoso",
        role: "Lead Educational Consultant",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256",
        isLeader: true
    },
    {
        name: "Sisi Wei",
        role: "Scholarship Specialist",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256"
    },
    {
        name: "Andi Pratama",
        role: "Senior Mandarin Tutor",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256"
    },
    {
        name: "Linda Wijaya",
        role: "Document Translator & Legal",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256"
    },
    {
        name: "Chen Weihong",
        role: "University Partnership Liaison",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256"
    }
];

export function TentangKami() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'center', skipSnaps: false },
        [Autoplay({ delay: 3000, stopOnInteraction: false })]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback((emblaApi: any) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect(emblaApi);
        emblaApi.on('reInit', onSelect).on('select', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <main className="pt-0 pb-16 min-h-screen">

            {/* Hero Section */}
            <section className="relative w-full mb-16 sm:mb-32 pt-24 sm:pt-32 pb-8 sm:pb-12 overflow-hidden border-b border-gray-100/50">
                {/* Grid Background */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="square-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                                <rect width="80" height="80" fill="none" stroke="rgba(0, 0, 0, 0.04)" strokeWidth="1" />
                            </pattern>
                            <pattern id="stars-pattern" width="400" height="400" patternUnits="userSpaceOnUse">
                                <path d="M0 -4 Q0 0 4 0 Q0 0 0 4 Q0 0 -4 0 Q0 0 0 -4" fill="rgba(0,0,0,0.15)" transform="translate(80, 80) scale(1.2)" />
                                <path d="M0 -4 Q0 0 4 0 Q0 0 0 4 Q0 0 -4 0 Q0 0 0 -4" fill="rgba(0,0,0,0.1)" transform="translate(240, 80) scale(1)" />
                                <path d="M0 -4 Q0 0 4 0 Q0 0 0 4 Q0 0 -4 0 Q0 0 0 -4" fill="rgba(0,0,0,0.2)" transform="translate(160, 240) scale(1.5)" />
                                <path d="M0 -4 Q0 0 4 0 Q0 0 0 4 Q0 0 -4 0 Q0 0 0 -4" fill="rgba(0,0,0,0.12)" transform="translate(320, 320) scale(1.1)" />
                                <path d="M0 -4 Q0 0 4 0 Q0 0 0 4 Q0 0 -4 0 Q0 0 0 -4" fill="rgba(0,0,0,0.08)" transform="translate(80, 320) scale(0.9)" />
                                <path d="M0 -4 Q0 0 4 0 Q0 0 0 4 Q0 0 -4 0 Q0 0 0 -4" fill="rgba(0,0,0,0.15)" transform="translate(320, 160) scale(1.3)" />
                                <path d="M0 -4 Q0 0 4 0 Q0 0 0 4 Q0 0 -4 0 Q0 0 0 -4" fill="rgba(0,0,0,0.1)" transform="translate(0, 240) scale(1)" />
                                <path d="M0 -4 Q0 0 4 0 Q0 0 0 4 Q0 0 -4 0 Q0 0 0 -4" fill="rgba(0,0,0,0.18)" transform="translate(240, 0) scale(1.4)" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#square-grid)" />
                        <rect width="100%" height="100%" fill="url(#stars-pattern)" />
                    </svg>
                    {/* Subtle bottom fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
                </div>

                <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7c1318]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

                    <div className="text-center mb-10 sm:mb-16 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/80 backdrop-blur-sm text-[#7c1318] text-xs font-semibold mb-6 border border-[#7c1318]/10 tracking-wide uppercase shadow-sm">
                            <Info size={14} />
                            Tentang Perusahaan
                        </div>

                        <div
                            className="mb-6 font-bold"
                            style={{
                                WebkitMaskImage: 'linear-gradient(174.955deg, black 11.53%, transparent 109.53%)',
                                maskImage: 'linear-gradient(174.955deg, black 11.53%, transparent 109.53%)'
                            }}
                        >
                            <BlurRevealText
                                text="Mengenal Ekselensia Lebih Dekat"
                                as="h1"
                                className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-[#1a1a1a]"
                                style={{ fontFamily: 'Funnel Display, sans-serif' }}
                            />
                        </div>

                        <p className="text-[15px] sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 relative z-10">
                            Kami adalah konsultan pendidikan terdepan yang berdedikasi membimbing dan mendampingi putra-putri Indonesia meraih pendidikan berkualitas global di Tiongkok.
                        </p>
                    </div>

                    <div className="w-full h-[400px] md:h-[500px] bg-gray-100 rounded-[20px] overflow-hidden border border-gray-200 shadow-2xl relative z-10">
                        <ImageWithFallback
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070"
                            alt="Ekselensia Team"
                            className="w-full h-full object-cover grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 sm:p-10">
                            <div>
                                <RedButton className="pointer-events-none inline-flex !px-4 !py-2 !text-sm !rounded-xl mb-4 tracking-wider !w-auto">
                                    Pengalaman Bertahun-tahun
                                </RedButton>
                                <h3
                                    className="text-3xl md:text-4xl font-bold mb-3 tracking-tight bg-clip-text text-transparent"
                                    style={{
                                        fontFamily: 'Funnel Display, sans-serif',
                                        backgroundImage: 'linear-gradient(174.955deg, rgb(255, 255, 255) 11.53%, rgba(255, 255, 255, 0.3) 109.53%)'
                                    }}
                                >
                                    Mitra Terpercaya Edukasi Global
                                </h3>
                                <p className="text-white/80 text-sm md:text-base max-w-lg leading-relaxed">
                                    Sepak terjang kami terbukti dengan tingkat kelulusan siswa dan jejak kemitraan luas dengan puluhan universitas top di seluruh dataran Tiongkok.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visi, Misi & Legalitas Section */}
            <section className="bg-white py-16 sm:py-24 border-y border-gray-100 mb-16 sm:mb-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-10 sm:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#f5f5f5] border border-gray-200 text-gray-600 text-xs font-medium mb-6">
                            <ShieldCheck size={14} />
                            Fondasi & Legalitas
                        </div>
                        <BlurRevealText
                            text="Visi, Misi & Legalitas"
                            as="h2"
                            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-clip-text text-transparent leading-tight"
                            style={{
                                fontFamily: 'Funnel Display, sans-serif',
                                backgroundImage: 'linear-gradient(174.955deg, rgb(30, 30, 30) 11.53%, rgba(30, 30, 30, 0.6) 109.53%)'
                            }}
                        />
                        <p className="text-gray-600 max-w-2xl mx-auto">Prinsip panduan dan jaminan legalitas yang memastikan layanan kami selalu profesional, aman, dan terpercaya bagi Anda.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {CARDS.map((card, index) => {
                            const MockupComponent = card.mockup;
                            return (
                                <div key={index} className="block w-full">
                                    <div className="bg-[#fafafa] rounded-[24px] h-[450px] relative overflow-hidden flex flex-col group transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:shadow-lg w-full">
                                        <div className="pt-10 px-8 flex flex-col items-center text-center z-10 w-full">
                                            <BlurRevealText
                                                text={card.title}
                                                as="h3"
                                                className="text-xl font-bold text-gray-900 mb-3 tracking-tight"
                                                style={{ fontFamily: 'Funnel Display, sans-serif' }}
                                            />
                                            <p className="text-[14px] text-gray-500 leading-relaxed max-w-[280px]">
                                                {card.desc}
                                            </p>
                                        </div>
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[220px]">
                                            <div className="w-full h-full rounded-t-[16px] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.05)] bg-[#fdfdfd] border border-gray-200/60 border-b-0 transform transition-transform duration-500 group-hover:-translate-y-2 flex items-center justify-center relative">
                                                <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-50 z-0"></div>
                                                <div className="relative z-10 w-full h-full">
                                                    <MockupComponent />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Tim Pengajar & Konsultan */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
                <div className="text-center mb-10 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#f5f5f5] border border-gray-200 text-gray-600 text-xs font-medium mb-6">
                        <Users size={14} />
                        Tim Kami
                    </div>
                    <BlurRevealText
                        text="Kenali Para Ahli Kami"
                        as="h2"
                        className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-clip-text text-transparent leading-tight"
                        style={{
                            fontFamily: 'Funnel Display, sans-serif',
                            backgroundImage: 'linear-gradient(174.955deg, rgb(30, 30, 30) 11.53%, rgba(30, 30, 30, 0.6) 109.53%)'
                        }}
                    />
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Dibimbing langsung oleh para profesional, awardee beasiswa, dan pendidik bersertifikat dengan pengalaman studi bertahun-tahun di Tiongkok.
                    </p>
                </div>

                <div className="relative z-10 w-full max-w-5xl mx-auto">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4 touch-pan-y">
                            {TEAM_MEMBERS.map((member, idx) => (
                                <div
                                    key={idx}
                                    className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333333%]"
                                >
                                    <div className="h-full py-6">
                                        <TeamMember
                                            {...member}
                                            isActive={idx === selectedIndex}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            <ScrollReveal><CTASection /></ScrollReveal>

        </main>
    );
}
