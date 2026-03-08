import React from 'react';
import { Settings, FileText, ArrowRight, Plane, Building, UserCheck, Smartphone, ChevronRight, BookOpen, Globe, Users } from 'lucide-react';

import { RedButton } from './ui/RedButton';
import { BlurRevealText } from './ui/BlurRevealText';

const SubHeader = ({ tag, title, desc, icon: Icon }: any) => (
  <div className="max-w-3xl mb-6 sm:mb-8">
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#252525] border border-white/10 text-gray-300 text-[11px] sm:text-xs font-medium mb-4 sm:mb-6">
      <Icon size={14} />
      {tag}
    </div>
    <BlurRevealText
      text={title}
      as="h2"
      className="text-[28px] leading-tight sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight bg-clip-text text-transparent"
      style={{
        fontFamily: 'Funnel Display, sans-serif',
        backgroundImage: 'linear-gradient(174.955deg, rgb(255, 255, 255) 11.53%, rgba(255, 255, 255, 0.3) 109.53%)'
      }}
    />
    <p className="text-gray-400 text-[14px] sm:text-lg leading-relaxed mb-5 sm:mb-6">
      {desc}
    </p>
    <RedButton className="!px-5 sm:!px-6 !py-2.5 sm:!py-3 !text-[13px] sm:!text-[15px] !rounded-full">
      Pelajari Lebih Lanjut <ArrowRight size={16} className="ml-1 sm:ml-2" />
    </RedButton>
  </div>
);

const SelectionMockup = () => (
  <div className="flex flex-col gap-3 w-full max-w-[260px]">
    <div className="bg-[#2A2A2A] rounded-xl p-4 border border-white/5 flex items-center justify-between shadow-xl">
      <div className="flex items-center gap-4">
        <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
        <div>
          <div className="text-sm font-medium text-white mb-2">Tsinghua University</div>
          <div className="w-32 h-1.5 bg-[#1F1F1F] rounded-full overflow-hidden">
            <div className="w-[85%] h-full bg-[#7c1318]"></div>
          </div>
        </div>
      </div>
      <div className="w-6 h-6 rounded-full bg-[#1F1F1F] flex items-center justify-center">
        <ChevronRight size={14} className="text-gray-400" />
      </div>
    </div>
    <div className="bg-[#2A2A2A] rounded-xl p-4 border border-white/5 flex items-center justify-between shadow-xl">
      <div className="flex items-center gap-4">
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]"></div>
        <div>
          <div className="text-sm font-medium text-white mb-2">Peking University</div>
          <div className="w-32 h-1.5 bg-[#1F1F1F] rounded-full overflow-hidden">
            <div className="w-[60%] h-full bg-yellow-500"></div>
          </div>
        </div>
      </div>
      <div className="w-6 h-6 rounded-full bg-[#1F1F1F] flex items-center justify-center">
        <ChevronRight size={14} className="text-gray-400" />
      </div>
    </div>
  </div>
);

const DocumentMockup = () => (
  <div className="flex flex-col gap-3 w-full max-w-[260px] relative h-[140px] items-center justify-center">
    <div className="absolute top-2 left-2 sm:left-4 bg-[#2A2A2A] rounded-xl p-3 border border-white/5 flex items-center gap-3 shadow-xl transform -rotate-3 z-10 w-[230px] sm:w-[240px]">
      <div className="bg-blue-500/10 p-2 rounded-lg shrink-0">
        <FileText size={18} className="text-blue-400" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-gray-300 font-medium truncate">Transkrip Nilai.pdf</div>
        <div className="text-[10px] text-gray-500 mt-1">2 mins ago</div>
      </div>
      <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded font-medium shrink-0">Verified</span>
    </div>
    <div className="absolute bottom-2 right-2 sm:right-4 bg-[#2A2A2A] rounded-xl p-3 border border-white/5 flex items-center gap-3 shadow-xl transform rotate-2 z-20 w-[230px] sm:w-[240px]">
      <div className="bg-purple-500/10 p-2 rounded-lg shrink-0">
        <FileText size={18} className="text-purple-400" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-gray-300 font-medium truncate">Paspor_Scan.pdf</div>
        <div className="text-[10px] text-gray-500 mt-1">5 hours ago</div>
      </div>
      <span className="text-[10px] bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded font-medium shrink-0">Ready</span>
    </div>
  </div>
);

const TrackingMockup = () => (
  <div className="bg-[#2A2A2A] rounded-xl p-5 border border-white/5 w-full max-w-[260px] shadow-xl">
    <div className="flex justify-between text-[11px] font-medium text-gray-500 border-b border-white/10 pb-3 mb-3">
      <span>TAHAPAN APLIKASI</span>
      <span>STATUS</span>
    </div>
    <div className="flex flex-col gap-2.5">
      <div className="flex justify-between items-center bg-[#1F1F1F] rounded-lg p-3 border border-white/5">
        <span className="text-xs text-gray-300 font-medium">Review Dokumen</span>
        <span className="w-16 text-center text-[10px] bg-green-500/10 text-green-400 border border-green-500/20 px-1.5 py-1 rounded font-medium">Selesai</span>
      </div>
      <div className="flex justify-between items-center bg-[#1F1F1F] rounded-lg p-3 border border-white/5">
        <span className="text-xs text-gray-300 font-medium">Submit Portal UI</span>
        <span className="w-16 text-center text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-1.5 py-1 rounded font-medium">Proses</span>
      </div>
    </div>
  </div>
);

const ScholarshipMockup = () => (
  <div className="flex flex-col gap-3 w-full max-w-[260px]">
    <div className="bg-[#2A2A2A] rounded-xl border border-white/5 w-full p-4 shadow-xl">
      <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500 border border-yellow-500/20">
            <span className="text-sm font-bold">¥</span>
          </div>
          <div className="text-xs font-bold text-white">Chinese Gov Scholarship</div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center bg-[#1F1F1F] p-2.5 rounded-lg border border-white/5">
          <span className="text-[11px] text-gray-400">Biaya Kuliah</span>
          <span className="text-[11px] font-bold text-white flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> 100% Ditanggung
          </span>
        </div>
        <div className="flex justify-between items-center bg-[#1F1F1F] p-2.5 rounded-lg border border-white/5">
          <span className="text-[11px] text-gray-400">Uang Saku</span>
          <span className="text-[11px] font-bold text-white">2.500 RMB/bln</span>
        </div>
      </div>
    </div>

    <div className="bg-green-500/10 text-green-400 border border-green-500/20 px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xl backdrop-blur-sm transform -translate-y-2 z-10 w-11/12 mx-auto">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div> Status: Eligible
    </div>
  </div>
);

const CourseMockup = () => (
  <div className="bg-[#2A2A2A] rounded-xl border border-white/5 w-full max-w-[240px] p-4 flex flex-col gap-3 shadow-xl">
    {[
      { step: 1, text: "HSK 3 Passed", status: "done" },
      { step: 2, text: "HSK 4 Preparation", status: "active" },
      { step: 3, text: "Mock Test Exam", status: "pending" }
    ].map((item, i) => (
      <div key={i} className="flex items-center gap-4 text-xs bg-[#1F1F1F] p-2.5 rounded-lg border border-white/5">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold ${item.status === 'done' ? 'bg-green-500/20 text-green-400' :
          item.status === 'active' ? 'bg-blue-500/20 text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.3)]' :
            'bg-[#2A2A2A] text-gray-500'
          }`}>
          {item.step}
        </div>
        <div className={`flex-1 ${item.status === 'done' ? 'text-gray-400' :
          item.status === 'active' ? 'text-white font-medium' :
            'text-gray-600'
          }`}>
          {item.text}
        </div>
      </div>
    ))}
  </div>
);

const OrientationMockup = () => (
  <div className="bg-[#2A2A2A] rounded-xl border border-white/5 w-full max-w-[240px] p-5 text-center shadow-xl">
    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Upcoming Event</div>
    <div className="bg-[#1F1F1F] border border-white/5 rounded-lg p-3 mb-4">
      <div className="text-white text-sm font-semibold mb-1">Pre-departure Briefing</div>
      <div className="text-gray-400 text-[11px]">Zoom Meeting • 14:00 WIB</div>
    </div>
    <div className="text-green-400 text-xs font-medium bg-green-500/10 inline-flex items-center justify-center px-3 py-1.5 rounded-md mb-4 border border-green-500/20">
      <span className="relative flex h-2 w-2 mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      Starting in 2 days
    </div>
    <div className="flex gap-1.5 justify-center">
      <div className="w-8 h-1.5 rounded-full bg-[#7c1318]"></div>
      <div className="w-8 h-1.5 rounded-full bg-[#7c1318]/40"></div>
      <div className="w-8 h-1.5 rounded-full bg-[#1F1F1F]"></div>
    </div>
  </div>
);

const CommunityMockup = () => (
  <div className="relative w-[220px] h-[160px] flex items-center justify-center">
    {/* Center node */}
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7c1318] to-red-900 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(124,19,24,0.4)] border border-white/20">
      <Users size={20} className="text-white" />
    </div>
    {/* Orbit nodes */}
    <div className="absolute top-4 left-6 w-10 h-10 rounded-full bg-[#2A2A2A] border-2 border-[#1F1F1F] flex items-center justify-center overflow-hidden shadow-lg z-20">
      <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="Alumni" />
    </div>
    <div className="absolute bottom-4 right-6 w-10 h-10 rounded-full bg-[#2A2A2A] border-2 border-[#1F1F1F] flex items-center justify-center overflow-hidden shadow-lg z-20">
      <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="Alumni" />
    </div>
    <div className="absolute bottom-8 left-4 w-8 h-8 rounded-full bg-[#2A2A2A] border-2 border-[#1F1F1F] flex items-center justify-center overflow-hidden shadow-lg z-20">
      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="Alumni" />
    </div>
    <div className="absolute top-8 right-4 w-7 h-7 rounded-full bg-[#2A2A2A] border-2 border-[#1F1F1F] flex items-center justify-center overflow-hidden shadow-lg z-20">
      <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="Alumni" />
    </div>
    {/* Connecting lines - SVG */}
    <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 220 160">
      <path d="M110,80 L60,40" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M110,80 L160,120" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M110,80 L50,110" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M110,80 L180,60" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
    </svg>
  </div>
);

export function WhyUs() {
  return (
    <section id="why-us" className="bg-[#121212] py-16 sm:py-32 text-white relative overflow-hidden mx-3 sm:mx-5 rounded-[16px] sm:rounded-[20px] my-16 sm:my-24 border border-white/5 shadow-2xl">
      {/* Abstract Background Elements */}
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#7c1318]/[0.02] rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Sub-section 1 */}
        <div className="relative pl-6 sm:pl-8 md:pl-16 pb-16 sm:pb-32">
          <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center w-6 sm:w-8">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#1C1C1C] border border-gray-600 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)] text-gray-300 text-[10px] sm:text-xs font-bold leading-none shrink-0 ring-2 sm:ring-4 ring-[#121212] -mt-0.5">
              01
            </div>
            <div className="w-px flex-1 bg-gray-700/50 my-2"></div>
          </div>

          <div className="flex flex-col gap-10">
            <SubHeader
              tag="Platform Terpadu"
              title="Sistem Pendaftaran Lebih Cerdas"
              desc="Daftar ke universitas top Tiongkok tanpa pusing memikirkan birokrasi. Kami mengotomatisasi pengurusan dokumen dan persyaratan rumit menjadi sangat sederhana."
              icon={Settings}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-[#1C1C1C] border border-white/5 rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#202020] hover:border-white/10 group overflow-hidden">
                <div className="flex-1 w-full flex items-center justify-center min-h-[160px] sm:min-h-[220px] mb-6 sm:mb-8 relative transform scale-90 sm:scale-100">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1C1C1C] z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <SelectionMockup />
                </div>
                <h4 className="text-[17px] sm:text-xl font-bold text-white mb-2 sm:mb-3">Pemilihan Universitas Tepat</h4>
                <p className="text-[13px] sm:text-sm text-gray-400 max-w-sm leading-relaxed">Menganalisis minat dan latar belakang untuk mencocokkan Anda dengan universitas dan jurusan paling ideal.</p>
              </div>

              <div className="bg-[#1C1C1C] border border-white/5 rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#202020] hover:border-white/10 group overflow-hidden">
                <div className="flex-1 w-full flex items-center justify-center min-h-[160px] sm:min-h-[220px] mb-6 sm:mb-8 relative transform scale-90 sm:scale-100">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1C1C1C] z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <DocumentMockup />
                </div>
                <h4 className="text-[17px] sm:text-xl font-bold text-white mb-2 sm:mb-3">Manajemen Dokumen</h4>
                <p className="text-[13px] sm:text-sm text-gray-400 max-w-sm leading-relaxed">Sistem kami memastikan seluruh dokumen diterjemahkan, dilegalisir, dan disusun sesuai standar kampus tujuan.</p>
              </div>

              <div className="bg-[#1C1C1C] border border-white/5 rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#202020] hover:border-white/10 group overflow-hidden">
                <div className="flex-1 w-full flex items-center justify-center min-h-[160px] sm:min-h-[220px] mb-6 sm:mb-8 relative transform scale-90 sm:scale-100">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1C1C1C] z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <TrackingMockup />
                </div>
                <h4 className="text-[17px] sm:text-xl font-bold text-white mb-2 sm:mb-3">Pelacakan Real-time</h4>
                <p className="text-[13px] sm:text-sm text-gray-400 max-w-sm leading-relaxed">Pantau status aplikasi, pengiriman dokumen, hingga hasil interview dari satu dasbor yang transparan.</p>
              </div>

              <div className="bg-[#1C1C1C] border border-white/5 rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#202020] hover:border-white/10 group overflow-hidden">
                <div className="flex-1 w-full flex items-center justify-center min-h-[160px] sm:min-h-[220px] mb-6 sm:mb-8 relative transform scale-90 sm:scale-100">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1C1C1C] z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <ScholarshipMockup />
                </div>
                <h4 className="text-[17px] sm:text-xl font-bold text-white mb-2 sm:mb-3">Bimbingan Beasiswa</h4>
                <p className="text-[13px] sm:text-sm text-gray-400 max-w-sm leading-relaxed">Kami membantu menyusun strategi aplikasi beasiswa pemerintah (CGS) maupun beasiswa internal universitas.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-section 2 */}
        <div className="relative pl-6 sm:pl-8 md:pl-16 pb-16 sm:pb-32">
          <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center w-6 sm:w-8">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#1C1C1C] border border-gray-600 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)] text-gray-300 text-[10px] sm:text-xs font-bold leading-none shrink-0 ring-2 sm:ring-4 ring-[#121212] -mt-0.5">
              02
            </div>
            <div className="w-px flex-1 bg-gray-700/50 my-2"></div>
          </div>

          <div className="flex flex-col gap-10 relative">

            <SubHeader
              tag="Persiapan Matang"
              title="Dukungan Akademis & Mental"
              desc="Layanan kami tidak berhenti di surat penerimaan. Kami memastikan Anda siap menghadapi sistem perkuliahan di Tiongkok dengan bekal yang cukup."
              icon={BookOpen}
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-[#1C1C1C] border border-white/5 rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#202020] hover:border-white/10 overflow-hidden">
                <div className="flex-1 w-full flex items-center justify-center min-h-[140px] sm:min-h-[180px] mb-6 sm:mb-8 transform scale-90 sm:scale-100">
                  <CourseMockup />
                </div>
                <h4 className="text-[17px] sm:text-lg font-bold text-white mb-2 sm:mb-3">Kursus Bahasa Mandarin</h4>
                <p className="text-[13px] sm:text-sm text-gray-400 leading-relaxed">Persiapan intensif HSK dan bahasa percakapan sehari-hari sebelum keberangkatan.</p>
              </div>

              <div className="bg-[#1C1C1C] border border-white/5 rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#202020] hover:border-white/10 overflow-hidden">
                <div className="flex-1 w-full flex items-center justify-center min-h-[140px] sm:min-h-[180px] mb-6 sm:mb-8 transform scale-90 sm:scale-100">
                  <OrientationMockup />
                </div>
                <h4 className="text-[17px] sm:text-lg font-bold text-white mb-2 sm:mb-3">Pre-departure Briefing</h4>
                <p className="text-[13px] sm:text-sm text-gray-400 leading-relaxed">Sesi orientasi mendalam tentang budaya, sistem belajar, dan tips adaptasi di kota tujuan.</p>
              </div>

              <div className="bg-[#1C1C1C] border border-white/5 rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#202020] hover:border-white/10 overflow-hidden">
                <div className="flex-1 w-full flex items-center justify-center min-h-[140px] sm:min-h-[180px] mb-6 sm:mb-8 transform scale-90 sm:scale-100">
                  <CommunityMockup />
                </div>
                <h4 className="text-[17px] sm:text-lg font-bold text-white mb-2 sm:mb-3">Jejaring Komunitas</h4>
                <p className="text-[13px] sm:text-sm text-gray-400 leading-relaxed">Terhubung dengan alumni dan senior Indonesia yang sudah lebih dulu berkuliah di kampus Anda.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-section 3 */}
        <div className="relative pl-6 sm:pl-8 md:pl-16 pb-8">
          <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center w-6 sm:w-8">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#1C1C1C] border border-gray-600 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)] text-gray-300 text-[10px] sm:text-xs font-bold leading-none shrink-0 ring-2 sm:ring-4 ring-[#121212] -mt-0.5">
              03
            </div>
            <div className="w-px h-full bg-gradient-to-b from-gray-700/50 to-transparent my-2"></div>
          </div>

          <div className="flex flex-col gap-10">
            <SubHeader
              tag="Aman & Nyaman"
              title="Pendampingan Setiba di Tiongkok"
              desc="Tim lokal kami akan menyambut dan memandu langkah-langkah pertama Anda agar merasa aman di lingkungan yang baru."
              icon={Globe}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { title: "Penjemputan Bandara", desc: "Penjemputan di bandara dan pengantaran langsung hingga ke depan gerbang asrama.", icon: Plane, color: "text-blue-400" },
                { title: "Pengurusan Asrama", desc: "Membantu registrasi kamar, pembayaran deposit, dan penjelasan aturan asrama.", icon: Building, color: "text-purple-400" },
                { title: "Pendaftaran Kampus", desc: "Mendampingi proses daftar ulang, tes kesehatan, dan pengurusan resident permit.", icon: UserCheck, color: "text-green-400" },
                { title: "Kebutuhan Esensial", desc: "Membantu buka rekening bank lokal, beli SIM card, dan instal aplikasi wajib Tiongkok.", icon: Smartphone, color: "text-orange-400" }
              ].map((item, i) => (
                <div key={i} className="bg-[#1C1C1C] border border-white/5 rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 flex flex-col items-start transition-all duration-300 hover:bg-[#202020] hover:border-white/10 hover:-translate-y-1">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#252525] border border-white/5 flex items-center justify-center mb-4 sm:mb-6 shadow-inner ${item.color}`}>
                    <item.icon className="w-5 h-5 sm:w-[26px] sm:h-[26px]" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[17px] sm:text-lg font-bold text-white mb-2 sm:mb-3">{item.title}</h4>
                  <p className="text-[13px] sm:text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}