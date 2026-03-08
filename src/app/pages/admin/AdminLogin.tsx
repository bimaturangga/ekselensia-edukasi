import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Lock, User, AlertCircle, Loader2 } from 'lucide-react';
import { RedButton } from '../../components/ui/RedButton';
import { useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import LogoText from '../../../assets/logo text.svg';

export default function AdminLogin() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const loginMutation = useMutation(api.auth.login);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMsg('');

        try {
            if (id !== 'admin') {
                throw new Error('ID atau Password tidak valid!');
            }
            const token = await loginMutation({ password });
            sessionStorage.setItem('admin_auth', token);
            navigate('/admin/dashboard');
        } catch (error: any) {
            console.error("Login failed:", error);
            setErrorMsg(error.message || 'ID atau Password tidak valid!');
        }
    };

    return (
        <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Ornaments */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#7c1318]/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-900/5 rounded-full blur-[100px]" />
            </div>

            <div className="w-full max-w-md bg-[#121212]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative z-10 shadow-2xl">
                <div className="flex justify-center mb-6 mt-4">
                    <img src={LogoText} alt="Ekselensia Admin" className="h-[48px] md:h-[56px] w-auto max-w-[280px] object-contain" />
                </div>
                <p className="text-gray-400 text-center text-sm mb-8">
                    Silakan masuk untuk mengelola konten website Ekselensia.
                </p>

                {errorMsg && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm">
                        <AlertCircle size={18} className="shrink-0" />
                        <p>{errorMsg}</p>
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">User ID</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                <User size={18} />
                            </div>
                            <input
                                type="text"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                className="w-full pl-11 pr-4 py-3.5 bg-[#1a1a1a] border border-white/10 rounded-xl focus:outline-none focus:border-[#7c1318] focus:ring-1 focus:ring-[#7c1318]/50 text-white transition-all"
                                placeholder="Masukkan ID admin"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                <Lock size={18} />
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-11 pr-4 py-3.5 bg-[#1a1a1a] border border-white/10 rounded-xl focus:outline-none focus:border-[#7c1318] focus:ring-1 focus:ring-[#7c1318]/50 text-white transition-all tracking-widest"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <RedButton type="submit" className="w-full !rounded-xl !py-4 mt-4 font-semibold text-lg">
                        Mulai Sesi Admin
                    </RedButton>
                </form>

                <div className="mt-8 pt-6 border-t border-white/5 text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="text-gray-500 hover:text-white text-sm transition-colors"
                    >
                        ← Kembali ke Beranda
                    </button>
                </div>
            </div>
        </main>
    );
}
