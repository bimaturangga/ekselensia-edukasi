import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles for Quill
import { ArrowLeft, Save, Image as ImageIcon, Link as LinkIcon, Loader2, ChevronDown } from 'lucide-react';
import { RedButton } from '../../components/ui/RedButton';
import { AdminAuthContext } from '../../components/admin/AdminLayout';

// Quill Editor Toolbar Configuration
const modules = {
    toolbar: [
        [{ 'header': [2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link'],
        ['clean']
    ],
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link'
];

export default function AdminArtikelForm() {
    const { slug } = useParams();
    const isEditMode = Boolean(slug);
    const navigate = useNavigate();
    const { token } = React.useContext(AdminAuthContext);

    // Convex calls
    const articleToEdit = useQuery(api.articles.getBySlug, slug ? { slug } : "skip");
    const createArticle = useMutation(api.articles.createArticle);
    const updateArticle = useMutation(api.articles.updateArticle);
    const generateUploadUrl = useMutation(api.upload.generateUploadUrl);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [imageUploadType, setImageUploadType] = useState<'url' | 'file'>('url');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    // Form Dataset
    const [formData, setFormData] = useState({
        title: '',
        tag: 'Panduan',
        author: 'Tim Ekselensia',
        image: '',
        content: ''
    });

    const PREDEFINED_TAGS = ['Panduan', 'Informasi', 'Tips Belajar', 'Beasiswa', 'Kehidupan Kampus'];
    const [showCustomTag, setShowCustomTag] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Populate Data when Edit Mode
    useEffect(() => {
        if (isEditMode && articleToEdit) {
            setFormData({
                title: articleToEdit.title,
                tag: articleToEdit.tag,
                author: articleToEdit.author,
                image: articleToEdit.image,
                content: articleToEdit.content,
            });
            if (articleToEdit.tag && !PREDEFINED_TAGS.includes(articleToEdit.tag)) {
                setShowCustomTag(true);
            }
            setIsDataLoaded(true);
        } else if (!isEditMode) {
            setIsDataLoaded(true);
        }
    }, [isEditMode, articleToEdit]);

    // Dark Mode Theme Override for Quill via CSS
    // Since Quill is traditionally light, we inject some CSS overrides specifically here
    const darkQuillStyles = `
        .ql-snow .ql-toolbar {
            background-color: #1a1a1a;
            border-color: rgba(255,255,255,0.1);
            border-top-left-radius: 0.75rem;
            border-top-right-radius: 0.75rem;
        }
        .ql-snow .ql-container {
            border-color: rgba(255,255,255,0.1);
            border-bottom-left-radius: 0.75rem;
            border-bottom-right-radius: 0.75rem;
            min-height: 400px;
            font-size: 1rem;
            background-color: #121212;
            color: #ececec;
        }
        .ql-snow.ql-toolbar button, .ql-snow .ql-toolbar button {
            color: #ececec;
        }
        .ql-snow .ql-stroke { stroke: #ececec; }
        .ql-snow .ql-fill { fill: #ececec; }
        .ql-snow .ql-picker { color: #ececec; }
        .ql-snow .ql-picker-options {
            background-color: #1a1a1a;
            border-color: rgba(255,255,255,0.1);
        }
    `;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleContentChange = (content: string) => {
        setFormData(prev => ({ ...prev, content }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            let finalImageUrl = formData.image;

            // Handle File Upload if selected
            if (imageUploadType === 'file' && imageFile) {
                // 1. Get Url
                const postUrl = await generateUploadUrl();
                // 2. Post file
                const result = await fetch(postUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': imageFile.type },
                    body: imageFile
                });
                const { storageId } = await result.json();

                // For MVP: We append the raw storage ID as URL but realistically, 
                // we should serve files from convex URL. 
                // Let's use the convex domain or just store the storage ID.
                // @ts-ignore: Vite env var
                const convexUrl = import.meta.env.VITE_CONVEX_URL;
                finalImageUrl = `${convexUrl}/api/storage/${storageId}`;
            }

            // Generate simple slug (only on create to prevent breaking old links)
            let finalSlug = slug || '';
            if (!isEditMode) {
                finalSlug = formData.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)+/g, '');

                // Add short random string to avoid exact dupes
                finalSlug += '-' + Math.floor(Math.random() * 1000).toString();
            }

            const payload = {
                title: formData.title,
                slug: finalSlug,
                tag: formData.tag,
                author: formData.author,
                image: finalImageUrl,
                content: formData.content,
                date: isEditMode && articleToEdit ? articleToEdit.date : new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
            };

            if (!token) throw new Error("Unauthorized");

            if (isEditMode && articleToEdit) {
                await updateArticle({ id: articleToEdit._id, token, ...payload });
            } else {
                await createArticle({ token, ...payload });
            }

            navigate('/admin/artikel');
        } catch (error) {
            console.error("Gagal menyimpan:", error);
            alert("Terjadi kesalahan saat menyimpan artikel. Periksa koneksi.");
            setIsSubmitting(false);
        }
    };

    if (!isDataLoaded) {
        return <div className="text-white flex items-center justify-center p-20 animate-pulse">Memuat form editor...</div>;
    }

    return (
        <div className="max-w-5xl mx-auto">
            <style>{darkQuillStyles}</style>

            <div className="flex items-center gap-4 mb-8">
                <button
                    onClick={() => navigate('/admin/artikel')}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                    <ArrowLeft size={18} />
                </button>
                <div>
                    <h2
                        className="text-2xl md:text-3xl font-bold tracking-tight bg-clip-text text-transparent leading-tight"
                        style={{
                            fontFamily: 'Funnel Display, sans-serif',
                            backgroundImage: 'linear-gradient(174.955deg, rgb(255, 255, 255) 11.53%, rgba(255, 255, 255, 0.3) 109.53%)'
                        }}
                    >
                        {isEditMode ? 'Sunting Artikel' : 'Tulis Artikel Baru'}
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">{isEditMode ? 'Perbarui konten artikel lama Anda.' : 'Draft artikel akan langsung tayang ke publik.'}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

                {/* Main Content Card */}
                <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Title */}
                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-sm font-medium text-gray-300 mb-2">Judul Artikel *</label>
                            <input
                                type="text"
                                name="title"
                                required
                                value={formData.title}
                                onChange={handleInputChange}
                                placeholder="Masukkan judul..."
                                className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl focus:outline-none focus:border-[#7c1318] focus:ring-1 focus:ring-[#7c1318]/50 text-white text-lg font-medium transition-all"
                            />
                        </div>

                        {/* Author */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Penulis *</label>
                            <input
                                type="text"
                                name="author"
                                required
                                value={formData.author}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl focus:outline-none focus:border-[#7c1318] focus:ring-1 focus:ring-[#7c1318]/50 text-white text-sm transition-all"
                            />
                        </div>

                        {/* Tag/Category */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Kategori *</label>
                            {!showCustomTag ? (
                                <div className="relative" ref={dropdownRef}>
                                    <button
                                        type="button"
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="w-full px-4 py-3 bg-[#1a1a1a] flex justify-between items-center border border-white/10 rounded-xl focus:outline-none focus:border-[#7c1318] focus:ring-1 focus:ring-[#7c1318]/50 text-white text-sm transition-all text-left"
                                    >
                                        <span className={formData.tag ? "text-white" : "text-gray-400"}>
                                            {formData.tag || "Pilih kategori..."}
                                        </span>
                                        <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {/* Dropdown Menu */}
                                    <div
                                        className={`absolute z-10 top-[calc(100%+8px)] left-0 right-0 bg-[#1e1e1e] border border-[#505050] rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 origin-top
                                        ${isDropdownOpen ? 'opacity-100 scale-100 visible translate-y-0' : 'opacity-0 scale-95 invisible -translate-y-2'}`}
                                    >
                                        <div className="p-2 flex flex-col gap-1 max-h-[250px] overflow-y-auto custom-scrollbar">
                                            {PREDEFINED_TAGS.map(tag => (
                                                <button
                                                    key={tag}
                                                    type="button"
                                                    onClick={() => {
                                                        setFormData(prev => ({ ...prev, tag }));
                                                        setIsDropdownOpen(false);
                                                    }}
                                                    className={`px-3 py-2.5 rounded-lg text-left text-sm transition-colors ${formData.tag === tag ? 'bg-[#7c1318]/20 text-[#ff4b55] font-medium' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                                                >
                                                    {tag}
                                                </button>
                                            ))}

                                            {isEditMode && formData.tag && !PREDEFINED_TAGS.includes(formData.tag) && formData.tag !== '_custom_' && (
                                                <button
                                                    type="button"
                                                    className="px-3 py-2.5 rounded-lg text-left text-sm bg-[#7c1318]/20 text-[#ff4b55] font-medium transition-colors"
                                                    onClick={() => setIsDropdownOpen(false)}
                                                >
                                                    {formData.tag}
                                                </button>
                                            )}

                                            <div className="h-[1px] bg-white/10 my-1"></div>

                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setShowCustomTag(true);
                                                    setFormData(prev => ({ ...prev, tag: '' }));
                                                    setIsDropdownOpen(false);
                                                }}
                                                className="px-3 py-2.5 rounded-lg text-left text-sm text-[#ff4b55] hover:bg-[#7c1318]/20 transition-colors flex justify-between items-center group"
                                            >
                                                <span>+ Tambah Kategori Baru...</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        name="tag"
                                        required
                                        value={formData.tag}
                                        onChange={handleInputChange}
                                        placeholder="Ketik kategori baru..."
                                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl focus:outline-none focus:border-[#7c1318] focus:ring-1 focus:ring-[#7c1318]/50 text-white text-sm transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setShowCustomTag(false);
                                            setFormData(prev => ({ ...prev, tag: 'Panduan' }));
                                        }}
                                        className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-gray-400 hover:text-white transition-colors text-sm whitespace-nowrap"
                                    >
                                        Batal
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Image Handling */}
                    <div className="mb-6 p-5 border border-white/5 bg-white/[0.02] rounded-xl">
                        <label className="block text-sm font-medium text-gray-300 mb-3">Gambar Sampul (Thumbnail) *</label>

                        <div className="flex gap-4 mb-4">
                            <button
                                type="button"
                                onClick={() => setImageUploadType('url')}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${imageUploadType === 'url' ? 'bg-[#7c1318] text-white border border-[#7c1318]' : 'bg-transparent text-gray-400 border border-white/10 hover:bg-white/5'}`}
                            >
                                <LinkIcon size={14} /> Link URL
                            </button>
                            <button
                                type="button"
                                onClick={() => setImageUploadType('file')}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${imageUploadType === 'file' ? 'bg-[#7c1318] text-white border border-[#7c1318]' : 'bg-transparent text-gray-400 border border-white/10 hover:bg-white/5'}`}
                            >
                                <ImageIcon size={14} /> Upload File (Storage)
                            </button>
                        </div>

                        {imageUploadType === 'url' ? (
                            <input
                                type="url"
                                name="image"
                                required={!isEditMode || (isEditMode && !formData.image)}
                                value={formData.image}
                                onChange={handleInputChange}
                                placeholder="https://images.unsplash.com/photo-..."
                                className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-xl focus:outline-none focus:border-[#7c1318] focus:ring-1 focus:ring-[#7c1318]/50 text-white text-sm font-mono transition-all"
                            />
                        ) : (
                            <div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    required={!isEditMode && imageUploadType === 'file'}
                                    onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : null)}
                                    className="w-full text-sm text-gray-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-white/10 file:text-white hover:file:bg-white/20 transition-all cursor-pointer"
                                />
                                {isEditMode && formData.image && !imageFile && (
                                    <p className="text-xs text-gray-400 mt-2">Biarkan kosong jika tidak ingin mengubah gambar yang sudah ada.</p>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Rich Text Editor */}
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Isi Konten Artikel *</label>
                        <ReactQuill
                            theme="snow"
                            value={formData.content}
                            onChange={handleContentChange}
                            modules={modules}
                            formats={formats}
                            placeholder="Mulai menulis cerita Anda..."
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-4">
                    <RedButton
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full sm:w-auto !px-8 !py-3.5 !rounded-xl flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 !shadow-none' : ''}`}
                    >
                        {isSubmitting ? (
                            <><Loader2 size={18} className="animate-spin" /> Menyimpan...</>
                        ) : (
                            <><Save size={18} /> {isEditMode ? 'Update Artikel' : 'Publikasikan Sekarang'}</>
                        )}
                    </RedButton>
                </div>

            </form>
        </div>
    );
}
