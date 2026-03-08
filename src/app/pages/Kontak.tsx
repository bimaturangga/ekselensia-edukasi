import * as React from 'react';
import { BlurRevealText } from '../components/ui/BlurRevealText';
import { RedButton } from '../components/ui/RedButton';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export function Kontak() {
    return (
        <main className="pt-0 pb-16 min-h-screen bg-[#fafafa]">

            {/* Hero Section */}
            <section className="relative w-full mb-8 sm:mb-16 pt-24 sm:pt-32 pb-8 sm:pb-12 overflow-hidden border-b border-gray-100/50">
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
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#fafafa] to-transparent"></div>
                </div>

                <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
                    <div className="text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/80 backdrop-blur-sm text-[#7c1318] text-xs font-semibold mb-6 border border-[#7c1318]/10 tracking-wide uppercase shadow-sm">
                            <Mail size={14} />
                            Hubungi Kami
                        </div>

                        <div
                            className="mb-6 font-bold"
                            style={{
                                WebkitMaskImage: 'linear-gradient(174.955deg, black 11.53%, transparent 109.53%)',
                                maskImage: 'linear-gradient(174.955deg, black 11.53%, transparent 109.53%)'
                            }}
                        >
                            <BlurRevealText
                                text="Mari Mulai Perjalanan Studi Anda"
                                as="h1"
                                className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-[#1a1a1a]"
                                style={{ fontFamily: 'Funnel Display, sans-serif' }}
                            />
                        </div>

                        <p className="text-[15px] sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 relative z-10">
                            Tim konsultan kami siap membantu menjawab pertanyaan Anda dan merencanakan strategi terbaik untuk studi di Tiongkok.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 sm:mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-stretch">

                    {/* Left Column: Contact Info */}
                    <div className="lg:col-span-2 flex flex-col gap-5">
                        <ScrollReveal className="flex-1">
                            <div className="bg-white p-8 rounded-[20px] border border-gray-200 shadow-xl overflow-hidden relative h-full flex flex-col justify-between">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10"></div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-['Funnel_Display',sans-serif]">Informasi Kontak</h3>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0 border border-red-100 text-[#7c1318]">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900 mb-1">Kantor Pusat</div>
                                            <div className="text-sm text-gray-600 leading-relaxed">Jl. Jend. Sudirman Kav. 52-53, Senayan, Kebayoran Baru, Jakarta Selatan, 12190</div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 text-blue-600">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900 mb-1">Nomor Telepon</div>
                                            <div className="text-sm text-gray-600 leading-relaxed">+62 812 3456 7890<br />(021) 555-0198</div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0 border border-green-100 text-green-600">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900 mb-1">Email Resmi</div>
                                            <div className="text-sm text-gray-600 leading-relaxed">info@ekselensia.com<br />konsultasi@ekselensia.com</div>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center shrink-0 border border-purple-100 text-purple-600">
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900 mb-1">Jam Operasional</div>
                                            <div className="text-sm text-gray-600 leading-relaxed">Senin - Jumat: 09:00 - 17:00 WIB<br />Sabtu: 09:00 - 14:00 WIB</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="bg-[#1C1C1C] p-8 rounded-[20px] border border-white/10 shadow-xl overflow-hidden relative">
                                <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#7c1318]/20 blur-2xl rounded-full"></div>
                                <h3 className="text-xl font-bold text-white mb-2 relative z-10">Butuh respons cepat?</h3>
                                <p className="text-sm text-gray-400 mb-6 relative z-10">Hubungi langsung konsultan kami melalui WhatsApp untuk diskusi lebih efisien.</p>
                                <RedButton as="a" href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="w-full !py-3 !text-[15px] relative z-10">
                                    Chat via WhatsApp
                                </RedButton>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-3">
                        <ScrollReveal className="h-full">
                            <div className="bg-white p-8 md:p-10 rounded-[20px] border border-gray-200 shadow-xl h-full flex flex-col justify-between">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-['Funnel_Display',sans-serif]">Kirimkan Pesan</h3>
                                <p className="text-gray-500 mb-8 text-sm">Isi formulir di bawah ini dan tim kami akan merespons dalam waktu selambat-lambatnya 1x24 jam.</p>

                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Nama Lengkap *</label>
                                            <input
                                                type="text"
                                                placeholder="Contoh: Budi Santoso"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7c1318] focus:ring-1 focus:ring-[#7c1318] outline-none transition-colors bg-gray-50 focus:bg-white"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Nomor WhatsApp *</label>
                                            <input
                                                type="tel"
                                                placeholder="Contoh: 081234567890"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7c1318] focus:ring-1 focus:ring-[#7c1318] outline-none transition-colors bg-gray-50 focus:bg-white"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Email Utama *</label>
                                            <input
                                                type="email"
                                                placeholder="budi@example.com"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7c1318] focus:ring-1 focus:ring-[#7c1318] outline-none transition-colors bg-gray-50 focus:bg-white"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Layanan yang Diminati</label>
                                            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7c1318] focus:ring-1 focus:ring-[#7c1318] outline-none transition-colors bg-gray-50 focus:bg-white text-gray-700">
                                                <option>Pilih Layanan</option>
                                                <option>Jalur Mandiri (S1/S2/S3)</option>
                                                <option>Program Beasiswa</option>
                                                <option>Program Kedokteran MBBS</option>
                                                <option>Short Program (CAMP)</option>
                                                <option>Kursus Bahasa Mandarin</option>
                                                <option>Jasa Penerjemah Tersumpah</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Pesan & Pertanyaan</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Tuliskan pertanyaan atau informasi rinci tentang rencana studi Anda..."
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#7c1318] focus:ring-1 focus:ring-[#7c1318] outline-none transition-colors bg-gray-50 focus:bg-white resize-none"
                                        ></textarea>
                                    </div>

                                    <div className="pt-2">
                                        <RedButton type="submit" className="w-full sm:w-auto !py-3 !px-8 !rounded-xl">
                                            Kirim Pesan
                                            <Send size={16} className="ml-2" />
                                        </RedButton>
                                    </div>
                                </form>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>


        </main>
    );
}
