import * as React from 'react';
import { BlurRevealText } from '../components/ui/BlurRevealText';
import { ScrollReveal } from '../components/ScrollReveal';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Newspaper, ChevronRight, User, Calendar, ArrowRight } from 'lucide-react';
import { RedButton } from '../components/ui/RedButton';
import { Link } from 'react-router';

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

const CATEGORIES = ["Semua", "Panduan", "Informasi", "Tips Belajar", "Beasiswa", "Kehidupan Kampus"];

export function Artikel() {
    const [activeCategory, setActiveCategory] = React.useState("Semua");

    // Fetch articles from Convex
    const articles = useQuery(api.articles.getAll);

    // Filter them based on Category
    const filteredArticles = articles
        ? (activeCategory === "Semua" ? articles : articles.filter(a => a.tag === activeCategory))
        : [];

    return (
        <main className="pt-0 pb-16 min-h-screen bg-[#fafafa]">
            {/* Hero Section */}
            <section className="relative w-full mb-12 flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden border-b border-gray-100/50">
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
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#square-grid)" />
                        <rect width="100%" height="100%" fill="url(#stars-pattern)" />
                    </svg>
                    {/* Subtle bottom fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#fafafa] to-transparent"></div>
                </div>

                <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 text-center flex flex-col items-center w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/80 backdrop-blur-sm text-[#7c1318] text-xs font-semibold mb-6 border border-[#7c1318]/10 tracking-wide uppercase shadow-sm">
                        <Newspaper size={14} />
                        Artikel & Blog
                    </div>

                    <div
                        className="mb-6 font-bold flex justify-center w-full"
                        style={{
                            WebkitMaskImage: 'linear-gradient(174.955deg, black 11.53%, transparent 109.53%)',
                            maskImage: 'linear-gradient(174.955deg, black 11.53%, transparent 109.53%)'
                        }}
                    >
                        <BlurRevealText
                            text="Eksplorasi Dunia Pendidikan Tiongkok"
                            as="h1"
                            className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-[#1a1a1a] max-w-4xl"
                            style={{ fontFamily: 'Funnel Display, sans-serif' }}
                        />
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto relative z-10">
                        Dari panduan aplikasi hingga cerita kampus — temukan informasi terkini untuk mempersiapkan diri Anda menuju universitas terbaik.
                    </p>
                </div>
            </section>

            {/* Articles Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Category Filter */}
                <ScrollReveal>
                    <div className="flex items-center justify-center sm:justify-start gap-3 mb-12 overflow-x-auto pb-4 scrollbar-hide">
                        {CATEGORIES.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveCategory(cat)}
                                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-[#7c1318] text-white shadow-md'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#7c1318] hover:text-[#7c1318]'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Data Loading State */}
                {articles === undefined && (
                    <div className="w-full flex justify-center items-center py-20 text-gray-500">
                        Memuat artikel utama...
                    </div>
                )}

                {/* Empty State */}
                {articles !== undefined && filteredArticles.length === 0 && (
                    <div className="w-full flex flex-col items-center justify-center py-20 px-4 text-center">
                        <div className="w-20 h-20 mb-6 text-gray-300">
                            <Newspaper strokeWidth={1.5} className="w-full h-full" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-medium text-[#282735] mb-3">Belum ada artikel</h3>
                        <p className="text-gray-500 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                            Saat ini belum ada artikel yang diterbitkan. Silakan periksa kembali nanti untuk mendapatkan informasi dan pembaruan terbaru.
                        </p>
                    </div>
                )}

                {/* Grid */}
                {articles !== undefined && filteredArticles.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map((post, index) => (
                            <ScrollReveal key={post._id || index} className="h-full">
                                <Link
                                    to={`/artikel/${post.slug}`}
                                    className="bg-white rounded-[16px] p-5 sm:p-6 flex flex-col group transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:shadow-lg outline-none h-full"
                                >
                                    {/* Top Image Container */}
                                    <div className="w-full h-[180px] sm:h-[200px] mb-6 relative">
                                        <div className="w-full h-full rounded-[8px] overflow-hidden bg-[#f5f5f5] border border-gray-100/60 transform transition-transform duration-500 group-hover:translate-y-2 flex items-center justify-center">
                                            <div className="relative z-10 w-full h-full">
                                                <ImageWithFallback
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Text Content */}
                                    <div className="flex flex-col items-start text-left z-10 flex-grow">
                                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-rose-50 text-[#7c1318] text-[10px] font-bold tracking-wide mb-4 uppercase shrink-0">
                                            {post.tag}
                                        </div>
                                        <h3 className="text-lg sm:text-[19px] leading-[26px] font-medium text-[#282735] mb-3 tracking-tight shrink-0 line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-[14px] leading-[22px] text-[#818498] line-clamp-3 mb-4"
                                            // Strip out HTML tags for description preview since the content in DB now contains rich text
                                            dangerouslySetInnerHTML={{ __html: post.content.replace(/<[^>]*>?/gm, '').substring(0, 150) + "..." }}
                                        />

                                        <div className="mt-auto flex items-center gap-4 text-xs font-medium text-gray-400">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar size={14} className="text-gray-400" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <User size={14} className="text-gray-400" />
                                                {post.author}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                )}

                {/* Pagination / Load More */}
                {filteredArticles.length > 0 && (
                    <div className="mt-16 w-full flex justify-center">
                        <ScrollReveal>
                            <RedButton
                                className="!px-8 !py-3.5 !rounded-full shadow-lg hover:shadow-xl"
                                onClick={() => alert("Load more functionality would go here.")}
                            >
                                Muat Lebih Banyak
                            </RedButton>
                        </ScrollReveal>
                    </div>
                )}
            </section>
        </main>
    );
}
