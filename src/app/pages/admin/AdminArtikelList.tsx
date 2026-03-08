import React, { useState } from 'react';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { Plus, Edit2, Trash2, Search, ExternalLink, AlertTriangle, Eye } from 'lucide-react';
import { Link } from 'react-router';
import { RedButton } from '../../components/ui/RedButton';

import { AdminAuthContext } from '../../components/admin/AdminLayout';

export default function AdminArtikelList() {
    const articles = useQuery(api.articles.getAll);
    const deleteArticle = useMutation(api.articles.deleteArticle);
    const { token } = React.useContext(AdminAuthContext);

    const [searchTerm, setSearchTerm] = useState('');
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const isLoading = articles === undefined;

    const filteredArticles = articles?.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tag.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

    const handleDelete = async (id: any) => {
        if (!token) return;
        if (window.confirm('Anda yakin ingin menghapus artikel ini secara permanen?')) {
            setDeletingId(id);
            try {
                await deleteArticle({ id, token });
            } catch (error) {
                console.error("Gagal menghapus:", error);
                alert("Gagal menghapus artikel.");
            } finally {
                setDeletingId(null);
            }
        }
    };

    return (
        <div>
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                    <h2
                        className="text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent"
                        style={{
                            fontFamily: 'Funnel Display, sans-serif',
                            backgroundImage: 'linear-gradient(174.955deg, rgb(255, 255, 255) 11.53%, rgba(255, 255, 255, 0.3) 109.53%)'
                        }}
                    >
                        Manajemen Artikel
                    </h2>
                    <p className="text-gray-400 mt-2">Buat, perbarui, dan hapus artikel website Anda di sini.</p>
                </div>

                <RedButton
                    as={Link}
                    to="/admin/artikel/tambah"
                    className="!px-6 !py-3 !text-[15px] shrink-0"
                >
                    <Plus size={18} />
                    Buat Artikel Baru
                </RedButton>
            </div>

            {/* Content Card */}
            <div className="bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-xl">

                {/* Search Bar */}
                <div className="p-4 border-b border-white/10 bg-white/[0.02]">
                    <div className="relative max-w-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                            <Search size={18} />
                        </div>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Cari judul atau kategori..."
                            className="w-full pl-10 pr-4 py-2.5 bg-[#1a1a1a] border border-white/10 rounded-lg focus:outline-none focus:border-[#7c1318] focus:ring-1 focus:ring-[#7c1318]/50 text-white text-sm transition-all"
                        />
                    </div>
                </div>

                {/* Table Area */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-300">
                        <thead className="text-xs text-gray-400 uppercase bg-[#0f0f0f] border-b border-white/10">
                            <tr>
                                <th className="px-6 py-4 font-medium tracking-wider w-[35%]">Judul Artikel</th>
                                <th className="px-6 py-4 font-medium tracking-wider">Kategori</th>
                                <th className="px-6 py-4 font-medium tracking-wider">Penulis</th>
                                <th className="px-6 py-4 font-medium tracking-wider">Tanggal</th>
                                <th className="px-6 py-4 font-medium tracking-wider">Views</th>
                                <th className="px-6 py-4 font-medium tracking-wider text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (
                                // Skeleton Loading Rows
                                Array.from({ length: 4 }).map((_, idx) => (
                                    <tr key={idx} className="border-b border-white/5">
                                        <td className="px-6 py-4"><div className="h-5 bg-white/5 rounded animate-pulse w-3/4"></div></td>
                                        <td className="px-6 py-4"><div className="h-5 bg-white/5 rounded animate-pulse w-1/2"></div></td>
                                        <td className="px-6 py-4"><div className="h-5 bg-white/5 rounded animate-pulse w-1/2"></div></td>
                                        <td className="px-6 py-4"><div className="h-5 bg-white/5 rounded animate-pulse w-1/2"></div></td>
                                        <td className="px-6 py-4"><div className="h-5 bg-white/5 rounded animate-pulse w-1/2"></div></td>
                                        <td className="px-6 py-4"><div className="h-5 bg-white/5 rounded animate-pulse w-full"></div></td>
                                    </tr>
                                ))
                            ) : filteredArticles.length > 0 ? (
                                filteredArticles.map((article) => (
                                    <tr key={article._id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td className="px-6 py-4 font-medium text-white">
                                            <div className="line-clamp-2 leading-snug">{article.title}</div>
                                            <a
                                                href={`/artikel/${article.slug}`}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-[#ff4b55] mt-1 transition-colors group"
                                            >
                                                Lihat Publik <ExternalLink size={10} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                            </a>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="bg-white/5 text-gray-300 border border-white/10 px-2.5 py-1 rounded-md text-xs font-medium">
                                                {article.tag}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-400 text-sm">
                                            {article.author}
                                        </td>
                                        <td className="px-6 py-4 text-gray-400 text-sm">
                                            {article.date}
                                        </td>
                                        <td className="px-6 py-4 text-gray-400 text-sm font-medium">
                                            <div className="flex items-center gap-1.5">
                                                <Eye size={14} />
                                                {article.views || 0}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    to={`/admin/artikel/edit/${article.slug}`}
                                                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                                    title="Edit Artikel"
                                                >
                                                    <Edit2 size={16} />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(article._id)}
                                                    disabled={deletingId === article._id}
                                                    className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                                    title="Hapus Artikel"
                                                >
                                                    {deletingId === article._id ? (
                                                        <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                                                    ) : (
                                                        <Trash2 size={16} />
                                                    )}
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                                        <div className="flex flex-col items-center justify-center">
                                            <AlertTriangle size={32} className="mb-3 text-gray-600" />
                                            <p>Tidak ada artikel yang ditemukan.</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div >
        </div >
    );
}
