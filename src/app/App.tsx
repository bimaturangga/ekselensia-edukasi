import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash link (e.g. /#tentang-kami), we let standard behaviour or a timeout scroll to it.
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Otherwise scroll to the top of the page smoothly whenever the route changes
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname, hash]);

  return null;
}
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';
import { Home } from './pages/Home';
import { BimbinganS1S2 } from './pages/BimbinganS1S2';
import { BimbinganBeasiswa } from './pages/BimbinganBeasiswa';
import { KursusMandarin } from './pages/KursusMandarin';
import { TurKampus } from './pages/TurKampus';
import { KedokteranMBBS } from './pages/KedokteranMBBS';
import { JasaPenerjemah } from './pages/JasaPenerjemah';
import { TentangKami } from './pages/TentangKami';
import { Kontak } from './pages/Kontak';
import { Artikel } from './pages/Artikel';
import { ArtikelDetail } from './pages/ArtikelDetail';

// Admin CMS Components
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminArtikelList from './pages/admin/AdminArtikelList';
import AdminArtikelForm from './pages/admin/AdminArtikelForm';

const AppContent = () => {
  const { pathname } = useLocation();
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <>
      <ScrollToTop />
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program/s1-s2" element={<BimbinganS1S2 />} />
        <Route path="/program/beasiswa" element={<BimbinganBeasiswa />} />
        <Route path="/program/kedokteran-mbbs" element={<KedokteranMBBS />} />
        <Route path="/program/kursus-mandarin" element={<KursusMandarin />} />
        <Route path="/program/tur-kampus" element={<TurKampus />} />
        <Route path="/program/jasa-penerjemah" element={<JasaPenerjemah />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/artikel/:slug" element={<ArtikelDetail />} />
        <Route path="/kontak" element={<Kontak />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="artikel" element={<AdminArtikelList />} />
          <Route path="artikel/tambah" element={<AdminArtikelForm />} />
          <Route path="artikel/edit/:slug" element={<AdminArtikelForm />} />
        </Route>
      </Routes>

      {!isAdminRoute && <ScrollReveal><Footer /></ScrollReveal>}

      {/* Floating WhatsApp Button */}
      {!isAdminRoute && (
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-[60px] h-[60px] rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(124,19,24,0.4)] transition-all duration-300 hover:-translate-y-1 focus:outline-none group"
        >
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-full overflow-hidden">
            <div className="absolute bg-[#7c1318] group-hover:bg-[#8b151b] transition-colors inset-0" />
            <div className="absolute inset-0 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 180 64\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.44999998807907104\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-1.1095e-15 10.453 -29.4 1.2705e-7 90 64)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(191,191,191,0.75)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(128,128,128,0.5)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(64,64,64,0.25)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'1\\'/><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
          </div>

          <div aria-hidden="true" className="absolute border border-[#5a0e11] inset-0 pointer-events-none rounded-full shadow-[0px_10px_19px_0px_rgba(124,19,24,0.28)]" />
          <div aria-hidden="true" className="absolute border border-[#a61f26] inset-[1px] pointer-events-none rounded-full" />

          <div className="relative z-10 text-white flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[32px] h-[32px]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.47-1.761-1.643-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
          </div>
        </a>
      )}
    </>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#7c1318] selection:text-white overflow-x-hidden w-full relative">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        @keyframes scrollUp {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }

        @keyframes scrollDown {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }

        .animate-scroll-up {
          animation: scrollUp 30s linear infinite;
        }
        .animate-scroll-up:hover {
          animation-play-state: paused;
        }

        .animate-scroll-down {
          animation: scrollDown 30s linear infinite;
        }
        .animate-scroll-down:hover {
          animation-play-state: paused;
        }
      `}</style>

      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
};

export default App;
