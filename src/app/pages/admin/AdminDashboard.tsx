import React from 'react';
import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { FileText, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router';

export default function AdminDashboard() {
    const articles = useQuery(api.articles.getAll);
    const isLoading = articles === undefined;

    return (
        <div>
            <div className="mb-8">
                <h2
                    className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent"
                    style={{
                        fontFamily: 'Funnel Display, sans-serif',
                        backgroundImage: 'linear-gradient(174.955deg, rgb(255, 255, 255) 11.53%, rgba(255, 255, 255, 0.3) 109.53%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    Ringkasan Dasbor
                </h2>
                <p className="text-gray-400 mt-2">Selamat datang kembali! Berikut adalah statistik konten web Anda.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* Stat Card 1 */}
                <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-500">
                        <FileText size={80} className="text-white" />
                    </div>
                    <div className="relative z-10">
                        <p className="text-gray-400 font-medium mb-1">Total Artikel</p>
                        <h3 className="text-4xl font-bold text-white mb-4">
                            {isLoading ? '-' : articles?.length || 0}
                        </h3>
                        <Link to="/admin/artikel" className="text-[#ff4b55] text-sm hover:underline font-medium">
                            Kelola Semua Artikel →
                        </Link>
                    </div>
                </div>

                {/* Stat Card 2 (Total Views) */}
                <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-500">
                        <TrendingUp size={80} className="text-white" />
                    </div>
                    <div className="relative z-10">
                        <p className="text-gray-400 font-medium mb-1">Total Tayangan Artikel</p>
                        <h3 className="text-4xl font-bold text-white mb-4">
                            {isLoading ? '-' : articles?.reduce((acc, article) => acc + (article.views || 0), 0) || 0}
                        </h3>
                    </div>
                </div>
            </div>

            <div className="bg-[#121212] border border-white/10 rounded-2xl p-6">
                <h3
                    className="text-2xl font-bold tracking-tight bg-clip-text text-transparent mb-6"
                    style={{
                        fontFamily: 'Funnel Display, sans-serif',
                        backgroundImage: 'linear-gradient(174.955deg, rgb(255, 255, 255) 11.53%, rgba(255, 255, 255, 0.3) 109.53%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    Aktivitas Terbaru
                </h3>

                {isLoading ? (
                    <div className="animate-pulse space-y-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-16 bg-white/5 rounded-xl border border-white/5"></div>
                        ))}
                    </div>
                ) : articles && articles.length > 0 ? (
                    <div className="space-y-3">
                        {articles.slice(0, 5).map((article) => (
                            <div key={article._id} className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-[#7c1318]/20 flex items-center justify-center shrink-0">
                                        <FileText size={18} className="text-[#ff4b55]" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium line-clamp-1">{article.title}</p>
                                        <p className="text-sm text-gray-500">{article.date} • {article.tag}</p>
                                    </div>
                                </div>
                                <Link to={`/admin/artikel/edit/${article.slug}`} className="px-3 py-1.5 rounded-lg border border-white/10 text-xs font-medium text-gray-300 hover:bg-white/10 transition-colors shrink-0">
                                    Edit
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 py-4 text-center">Belum ada aktivitas publikasi.</p>
                )}
            </div>
        </div >
    );
}
