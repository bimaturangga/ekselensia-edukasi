import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router';
import { LayoutDashboard, FileText, LogOut } from 'lucide-react';
import LogoIcon from '../../../assets/logo.svg';
import { useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';

export const AdminAuthContext = React.createContext<{ token: string | null }>({ token: null });

export default function AdminLayout() {
    const navigate = useNavigate();

    const token = sessionStorage.getItem('admin_auth');
    const validateMutation = useMutation(api.auth.validateSession);
    const logoutMutation = useMutation(api.auth.logout);

    // Check if authenticated on load
    React.useEffect(() => {
        const checkAuth = async () => {
            if (!token) {
                navigate('/admin');
                return;
            }
            try {
                const isValid = await validateMutation({ token });
                if (!isValid) {
                    sessionStorage.removeItem('admin_auth');
                    navigate('/admin');
                }
            } catch (err) {
                navigate('/admin');
            }
        };
        checkAuth();
    }, [navigate, token, validateMutation]);

    const handleLogout = async () => {
        if (token) {
            try {
                await logoutMutation({ token });
            } catch (e) { }
        }
        sessionStorage.removeItem('admin_auth');
        navigate('/admin');
    };

    if (!token) return null; // Avoid flashing Admin UI before redirect

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex">

            {/* Sidebar */}
            <aside className="w-64 border-r border-white/10 bg-[#0f0f0f] flex flex-col hidden sm:flex">
                <div className="p-6 border-b border-white/10">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center p-1">
                            <img src={LogoIcon} alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <h1 className="text-lg font-bold tracking-widest text-[#ececec] font-['Funnel_Display',sans-serif]">
                            CMS ADMIN
                        </h1>
                    </div>
                </div>

                <nav className="flex-1 px-4 py-8 space-y-2">
                    <NavLink
                        to="/admin/dashboard"
                        end
                        className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive ? 'bg-[#7c1318]/20 text-[#ff4b55] border border-[#7c1318]/30 font-semibold' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                    >
                        <LayoutDashboard size={18} />
                        Ringkasan
                    </NavLink>

                    <NavLink
                        to="/admin/artikel"
                        className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive ? 'bg-[#7c1318]/20 text-[#ff4b55] border border-[#7c1318]/30 font-semibold' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                    >
                        <FileText size={18} />
                        Manajemen Artikel
                    </NavLink>
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-gray-400 transition-all duration-300 hover:bg-[#7c1318]/20 hover:text-white group"
                    >
                        <LogOut size={18} className="transition-transform group-hover:-translate-x-1" />
                        Keluar
                    </button>
                </div>
            </aside >

            {/* Mobile Sidebar (Hidden on large, shown as bottom bar or top dropdown if MVP) -> Skipping complex mobile layout for MVP dashboard, let's assume desktop usage for admin mostly */}

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#141414] pb-20 sm:pb-0">

                {/* Decorative Red Accent */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7c1318]/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="flex-1 overflow-y-auto w-full p-4 md:p-8 lg:p-10 relative z-10">
                    <AdminAuthContext.Provider value={{ token }}>
                        <Outlet />
                    </AdminAuthContext.Provider>
                </div>
            </main>

            {/* Mobile Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-[#0f0f0f] border-t border-white/10 flex justify-around items-center p-3 sm:hidden z-50">
                <NavLink
                    to="/admin/dashboard"
                    end
                    className={({ isActive }) => `flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${isActive ? 'text-[#ff4b55]' : 'text-gray-400 hover:text-white'}`}
                >
                    <LayoutDashboard size={20} />
                    <span className="text-[10px] font-medium">Ringkasan</span>
                </NavLink>

                <NavLink
                    to="/admin/artikel"
                    className={({ isActive }) => `flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${isActive ? 'text-[#ff4b55]' : 'text-gray-400 hover:text-white'}`}
                >
                    <FileText size={20} />
                    <span className="text-[10px] font-medium">Artikel</span>
                </NavLink>

                <button
                    onClick={handleLogout}
                    className="flex flex-col items-center gap-1 p-2 rounded-lg text-gray-400 hover:text-white transition-colors"
                >
                    <LogOut size={20} />
                    <span className="text-[10px] font-medium">Keluar</span>
                </button>
            </nav>

        </div >
    );
}
