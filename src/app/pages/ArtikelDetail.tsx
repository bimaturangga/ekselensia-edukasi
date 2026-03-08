import { BlurRevealText } from '../components/ui/BlurRevealText';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Copy, Eye } from 'lucide-react';
import { useParams, Link } from 'react-router';
import { useEffect } from 'react';

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

export function ArtikelDetail() {
    const { slug } = useParams();

    // Fetch data from Convex based on slug
    const article = useQuery(api.articles.getBySlug, { slug: slug || "" });
    const incrementViews = useMutation(api.articles.incrementViews);

    // Track views
    useEffect(() => {
        if (article && article._id) {
            // Kita menyimpan status kunjungan di localStorage agar tidak menambah views berkali-kali jika di-refresh berulang
            const viewedKey = `viewed_${article._id}`;
            if (!localStorage.getItem(viewedKey)) {
                incrementViews({ id: article._id }).catch(console.error);
                localStorage.setItem(viewedKey, 'true');
            }
        }
    }, [article?._id, incrementViews]);

    // Loading state
    if (article === undefined) {
        return (
            <main className="min-h-screen bg-[#fafafa] flex items-center justify-center">
                <div className="text-gray-500 font-medium">Memuat artikel...</div>
            </main>
        );
    }

    // Not found state
    if (article === null) {
        return (
            <main className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center pt-24 pb-16">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Artikel Tidak Ditemukan</h1>
                <Link to="/artikel" className="px-6 py-2 bg-[#7c1318] text-white rounded-lg hover:bg-[#8b151b]">
                    Kembali ke Daftar Artikel
                </Link>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#fafafa] pb-16 md:pb-24">

            {/* Header / Hero Area */}
            <section className="relative w-full pt-32 pb-8 overflow-hidden">
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

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/artikel" className="inline-flex items-center text-gray-500 hover:text-[#7c1318] transition-colors mb-8 text-sm font-medium">
                        <ArrowLeft size={16} className="mr-2" />
                        Kembali ke Semua Artikel
                    </Link>

                    <div className="flex flex-col items-center mb-10 text-center">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-rose-50 text-[#7c1318] text-xs font-bold tracking-wide uppercase">
                                {article.tag}
                            </span>
                            <span className="text-gray-400 text-sm flex items-center gap-1.5">
                                <Calendar size={14} />
                                {article.date}
                            </span>
                            <span className="text-gray-400 text-sm flex items-center gap-1.5">
                                <Eye size={14} />
                                {article.views || 0} x Dilihat
                            </span>
                        </div>

                        <div
                            className="font-bold flex justify-center w-full"
                            style={{
                                WebkitMaskImage: 'linear-gradient(174.955deg, black 11.53%, transparent 109.53%)',
                                maskImage: 'linear-gradient(174.955deg, black 11.53%, transparent 109.53%)'
                            }}
                        >
                            <BlurRevealText
                                text={article.title}
                                as="h1"
                                className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1a1a1a] leading-[1.2] max-w-4xl"
                                style={{ fontFamily: 'Funnel Display, sans-serif' }}
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between border-y border-gray-100 py-4 mt-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                <User size={20} />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-gray-900">{article.author}</div>
                                <div className="text-xs text-gray-500">Editor Ekselensia</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#7c1318] hover:border-[#7c1318] hover:bg-rose-50 transition-all">
                                <Facebook size={14} />
                            </button>
                            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#7c1318] hover:border-[#7c1318] hover:bg-rose-50 transition-all">
                                <Twitter size={14} />
                            </button>
                            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#7c1318] hover:border-[#7c1318] hover:bg-rose-50 transition-all">
                                <Linkedin size={14} />
                            </button>
                            <div className="w-[1px] h-4 bg-gray-200 mx-1"></div>
                            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#7c1318] hover:border-[#7c1318] hover:bg-rose-50 transition-all" title="Copy Link">
                                <Copy size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="w-full h-[300px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Article Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        <article className="w-full text-[15px]
                            [&_h2]:font-['Inter',sans-serif] [&_h2]:font-bold [&_h2]:text-[#1a1a1a] [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:text-xl
                            [&_h3]:font-['Inter',sans-serif] [&_h3]:font-bold [&_h3]:text-[#1a1a1a] [&_h3]:mb-4 [&_h3]:mt-8 [&_h3]:text-lg
                            [&_p]:font-['Inter',sans-serif] [&_p]:text-[#878e9a] [&_p]:leading-relaxed [&_p]:mb-8 [&_p]:text-justify
                            [&_a]:text-[#7c1318] [&_a]:font-semibold [&_a]:no-underline hover:[&_a]:underline
                            [&_strong]:text-gray-900 [&_strong]:font-bold
                            [&_ul]:font-['Inter',sans-serif] [&_ul]:text-[#878e9a] [&_ul]:text-justify [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-8 [&_li]:mb-2
                            [&_ol]:font-['Inter',sans-serif] [&_ol]:text-[#878e9a] [&_ol]:text-justify [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-8 [&_li]:mb-2
                            [&_blockquote]:border-l-4 [&_blockquote]:border-[#7c1318] [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-[#878e9a] [&_blockquote]:bg-rose-50/50 [&_blockquote]:py-4 [&_blockquote]:rounded-r-lg
                            space-y-6"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />

                        {/* Article Footer Tags */}
                        <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-gray-900">Topik Terkait:</span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium cursor-pointer hover:bg-gray-200 transition-colors">Visa Pelajar</span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium cursor-pointer hover:bg-gray-200 transition-colors">Persiapan Kuliah</span>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:w-1/3">
                        <div className="sticky top-32">
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 font-['Funnel_Display',sans-serif]">Butuh Bantuan Studi?</h3>
                                <p className="text-sm text-gray-600 mb-6 leading-relaxed">Jangan biarkan proses rumit pendaftaran dan visa menghambat impian Anda. Tim konselor kami siap mendampingi Anda dari A sampai Z.</p>
                                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-4 bg-[#7c1318] text-white text-center rounded-xl font-bold text-sm hover:bg-[#8b151b] transition-colors shadow-md">
                                    Konsultasi Gratis Sekarang
                                </a>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4 font-['Funnel_Display',sans-serif] pb-2 border-b border-gray-100">Artikel Populer</h3>
                                <div className="space-y-4">
                                    <Link to="/artikel/contoh-slug-1" className="group flex gap-3 items-center">
                                        <div className="w-16 h-16 rounded-lg bg-gray-200 overflow-hidden shrink-0">
                                            <img src="https://images.unsplash.com/photo-1559402387-f51005cd23c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWtpbmclMjB1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc3MjgyOTk2M3ww&ixlib=rb-4.1.0&q=80&w=200" alt="thumb" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#7c1318] transition-colors line-clamp-2">10 Universitas Terbaik di Tiongkok Berdasarkan Ranking</h4>
                                            <div className="text-xs text-gray-500 mt-1">10 Mar 2026</div>
                                        </div>
                                    </Link>
                                    <Link to="/artikel/contoh-slug-2" className="group flex gap-3 items-center">
                                        <div className="w-16 h-16 rounded-lg bg-gray-200 overflow-hidden shrink-0">
                                            <img src="https://images.unsplash.com/photo-1646716000935-12ac7ead4070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbGFuZ3VhZ2UlMjBzdHVkeSUyMGJvb2t8ZW58MXx8fHwxNzcyODI5OTY3fDA&ixlib=rb-4.1.0&q=80&w=200" alt="thumb" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#7c1318] transition-colors line-clamp-2">Tips Cepat Lulus Ujian HSK 4 dalam 6 Bulan</h4>
                                            <div className="text-xs text-gray-500 mt-1">05 Mar 2026</div>
                                        </div>
                                    </Link>
                                    <Link to="/artikel/contoh-slug-3" className="group flex gap-3 items-center">
                                        <div className="w-16 h-16 rounded-lg bg-gray-200 overflow-hidden shrink-0">
                                            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwZ3JhZHVhdGlvbnxlbnwwfHx8fDE3NzI4Mjk5NzB8MA&ixlib=rb-4.1.0&q=80&w=200" alt="thumb" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#7c1318] transition-colors line-clamp-2">Membongkar Rahasia Lolos Beasiswa CGS 2026</h4>
                                            <div className="text-xs text-gray-500 mt-1">28 Feb 2026</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>

        </main>
    );
}
