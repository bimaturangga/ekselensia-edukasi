import React from 'react';
import { BookOpen, GraduationCap, Plane, FileText, Compass, School } from 'lucide-react';
import { BlurRevealText } from './ui/BlurRevealText';
import { Link } from 'react-router';

const SubHeader = ({ tag, title, desc, icon: Icon }: any) => (
  <div className="text-center max-w-2xl mx-auto mb-16">
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#f5f5f5] border border-gray-200 text-gray-600 text-xs font-medium mb-6">
      <Icon size={14} />
      {tag}
    </div>
    <BlurRevealText
      text={title}
      className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-clip-text text-transparent"
      style={{
        fontFamily: 'Funnel Display, sans-serif',
        backgroundImage: "linear-gradient(174.955deg, rgb(30, 30, 30) 11.53%, rgba(30, 30, 30, 0.6) 109.53%)"
      }}
    />
    <p className="text-lg text-gray-600 leading-relaxed mb-6">
      {desc}
    </p>
  </div>
);

// Custom Mockup Components for each Program
const BachelorMockup = () => (
  <div className="flex flex-col gap-3 w-full h-full p-6 justify-center">
    <div className="bg-white rounded-xl p-4 border border-gray-100 flex flex-col gap-3 shadow-sm transform transition-transform group-hover:-translate-y-2 duration-500">
      <div className="flex items-center gap-3 border-b border-gray-50 pb-3">
        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
          <GraduationCap size={16} className="text-blue-500" />
        </div>
        <div>
          <div className="text-xs font-bold text-gray-800">Master's Degree</div>
          <div className="text-[10px] text-gray-400">Peking University</div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="w-[80%] h-full bg-blue-500"></div>
        </div>
        <div className="flex justify-between text-[10px] text-gray-500 font-medium">
          <span>Application Progress</span>
          <span className="text-blue-500">80%</span>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-xl p-3 border border-gray-100 flex items-center justify-between shadow-sm opacity-80 transform transition-transform group-hover:translate-x-2 duration-500">
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
        <span className="text-[10px] font-medium text-gray-600">Document Verified</span>
      </div>
    </div>
  </div>
);

const MandarinMockup = () => (
  <div className="flex flex-col gap-3 w-full h-full p-6 justify-center">
    <div className="bg-white rounded-xl border border-gray-100 w-full p-4 flex flex-col gap-3 shadow-sm transform transition-transform group-hover:-translate-y-2 duration-500">
      <div className="flex items-center justify-between">
        <div className="text-xs font-bold text-gray-800">HSK Preparation</div>
        <span className="text-[9px] bg-red-50 text-red-500 px-2 py-0.5 rounded-full font-medium">Level 4</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { text: "Listening", score: "85/100", color: "bg-green-500" },
          { text: "Reading", score: "92/100", color: "bg-blue-500" },
          { text: "Writing", score: "78/100", color: "bg-yellow-500" }
        ].map((item, i) => (
          <div key={i} className="bg-gray-50 rounded p-2 text-center">
            <div className="text-[9px] text-gray-500 mb-1">{item.text}</div>
            <div className="text-[10px] font-bold text-gray-800">{item.score}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SummerCampMockup = () => (
  <div className="flex flex-col gap-2 w-full h-full p-6 justify-center relative">
    <div className="absolute right-4 top-8 bg-white p-2 rounded-xl border border-gray-100 shadow-sm z-20 transform rotate-6 group-hover:rotate-12 transition-transform duration-500">
      <Plane size={20} className="text-[#7c1318]" />
    </div>
    <div className="bg-white rounded-xl p-4 border border-gray-100 flex flex-col gap-3 shadow-sm z-10 transform transition-transform group-hover:-translate-y-2 duration-500">
      <div className="text-xs font-bold text-gray-800 border-b border-gray-50 pb-2">Beijing Summer Camp 2024</div>
      <div className="flex gap-2">
        <div className="flex-1 bg-gray-50 p-2 rounded flex flex-col items-center justify-center">
          <span className="text-[10px] text-gray-500">Duration</span>
          <span className="text-xs font-bold text-gray-800">14 Days</span>
        </div>
        <div className="flex-1 bg-gray-50 p-2 rounded flex flex-col items-center justify-center">
          <span className="text-[10px] text-gray-500">Activities</span>
          <span className="text-xs font-bold text-gray-800">12+</span>
        </div>
      </div>
      <div className="flex -space-x-2 justify-center mt-1">
        <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-200"></div>
        <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-300"></div>
        <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-400"></div>
        <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[8px] font-bold text-gray-600">+15</div>
      </div>
    </div>
  </div>
);

const ScholarshipMockup = () => (
  <div className="flex flex-col gap-3 w-full h-full p-6 justify-center">
    <div className="bg-white rounded-xl border border-gray-100 w-full p-4 shadow-sm transform transition-transform group-hover:-translate-y-2 duration-500">
      <div className="flex items-center justify-between mb-3 border-b border-gray-50 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-yellow-50 flex items-center justify-center text-yellow-500">
            <span className="text-xs font-bold">¥</span>
          </div>
          <div className="text-xs font-bold text-gray-800">CGS Type A</div>
        </div>
        <span className="text-[9px] bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-bold">Fully Funded</span>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
          <span className="text-[10px] text-gray-500">Biaya Kuliah</span>
          <span className="text-[10px] font-bold text-gray-800">100% Ditanggung</span>
        </div>
        <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
          <span className="text-[10px] text-gray-500">Uang Saku</span>
          <span className="text-[10px] font-bold text-gray-800">2.500 RMB/bln</span>
        </div>
      </div>
    </div>
  </div>
);

const MedicalMockup = () => (
  <div className="flex flex-col gap-3 w-full h-full p-6 justify-center">
    <div className="bg-white rounded-xl border border-gray-100 w-full p-4 shadow-sm transform transition-transform group-hover:-translate-y-2 duration-500">
      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-3 text-center">MBBS Admission</div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg">
          <div className="w-6 h-6 rounded bg-red-100 flex items-center justify-center text-red-600 text-xs font-bold">+</div>
          <div className="flex-1">
            <div className="text-[10px] font-bold text-gray-800">Clinical Hospital</div>
            <div className="text-[8px] text-gray-500">Internship Prepared</div>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg">
          <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">W</div>
          <div className="flex-1">
            <div className="text-[10px] font-bold text-gray-800">WHO Recognized</div>
            <div className="text-[8px] text-gray-500">Global Medical Standard</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TranslationMockup = () => (
  <div className="flex flex-col gap-3 w-full h-full p-6 justify-center relative">
    <div className="bg-white rounded-xl p-3 border border-gray-100 flex items-center gap-3 shadow-sm z-10 transform group-hover:-translate-y-1 transition-transform duration-500">
      <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
        <FileText size={16} className="text-green-500" />
      </div>
      <div>
        <div className="text-[10px] font-bold text-gray-800">Ijazah & Transkrip</div>
        <div className="text-[9px] text-gray-500">Sworn Translator ID-ZH</div>
      </div>
    </div>

    <div className="w-px h-6 bg-gray-200 ml-8 z-0"></div>

    <div className="bg-white rounded-xl p-3 border border-gray-100 flex items-center gap-3 shadow-sm z-10 transform group-hover:-translate-y-1 transition-transform duration-500 delay-75">
      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
        <FileText size={16} className="text-blue-500" />
      </div>
      <div>
        <div className="text-[10px] font-bold text-gray-800">Akte Kelahiran</div>
        <div className="text-[9px] text-gray-500">Legalized by Embassy</div>
      </div>
    </div>
  </div>
);

const PROGRAMS: { mockup: React.FC; title: string; desc: string; href?: string }[] = [
  {
    mockup: BachelorMockup,
    title: "Jalur Mandiri (S1, S2, dan S3)",
    desc: "Pendampingan penuh mulai dari pemilihan jurusan, aplikasi dokumen, hingga pengurusan visa pelajar. Kami pastikan Anda diterima di universitas impian.",
    href: "/program/s1-s2"
  },
  {
    mockup: ScholarshipMockup,
    title: "Program Beasiswa",
    desc: "Kami membantu Anda meraih peluang beasiswa penuh CGS dan parsial dari pemerintah Tiongkok maupun persetujuan universitas.",
    href: "/program/beasiswa"
  },
  {
    mockup: MedicalMockup,
    title: "Program Kedokteran MBBS",
    desc: "Jalur khusus klinis kedokteran MBBS di universitas dengan standar internasional yang diakui oleh WHO.",
    href: "/program/kedokteran-mbbs"
  },
  {
    mockup: SummerCampMockup,
    title: "Short Program (CAMP)",
    desc: "Program singkat 2-4 minggu untuk merasakan budaya, visitasi tur kampus, dan suasana belajar langsung di Tiongkok.",
    href: "/program/tur-kampus"
  },
  {
    mockup: MandarinMockup,
    title: "Program Bahasa Mandarin",
    desc: "Persiapan intensif bahasa mandarin tertarget bersertifikasi jenjang HSK dengan kurikulum komprehensif.",
    href: "/program/kursus-mandarin"
  },
  {
    mockup: TranslationMockup,
    title: "Jasa Penerjemah Tersumpah",
    desc: "Layanan translasi dokumen keabsahan akademik dan kependudukan oleh penerjemah tersumpah resmi Indonesia-Mandarin.",
    href: "/program/jasa-penerjemah"
  }
];

export function Programs() {
  return (
    <section id="program" className="bg-white py-16 lg:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SubHeader
          tag="Program Unggulan"
          title="Program Pilihan Kami"
          desc="Rencanakan masa depan Anda dengan program komprehensif yang dirancang untuk membantu Anda sukses di universitas top Tiongkok."
          icon={BookOpen}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PROGRAMS.map((program, index) => {
            const MockupComponent = program.mockup;
            const CardContent = (
              <div
                className="bg-[#fafafa] rounded-[20px] sm:rounded-[24px] h-[380px] sm:h-[450px] relative overflow-hidden flex flex-col group transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:shadow-lg w-full cursor-pointer"
              >
                {/* Top Text Content */}
                <div className="pt-6 sm:pt-10 px-5 sm:px-8 flex flex-col items-center text-center z-10 w-full">
                  <BlurRevealText
                    text={program.title}
                    as="h3"
                    className="text-[17px] sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 tracking-tight"
                    style={{
                      fontFamily: 'Funnel Display, sans-serif'
                    }}
                  />
                  <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed max-w-[280px]">
                    {program.desc}
                  </p>
                </div>

                {/* Bottom Mockup Container */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] h-[180px] sm:h-[220px]">
                  <div className="w-full h-full rounded-t-[14px] sm:rounded-t-[16px] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.05)] bg-[#fdfdfd] border border-gray-200/60 border-b-0 transform transition-transform duration-500 group-hover:-translate-y-2 flex items-center justify-center">
                    {/* Abstract background gradient inside mockup box */}
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-50"></div>
                    <div className="relative z-10 w-full h-full transform scale-90 sm:scale-100 origin-bottom">
                      <MockupComponent />
                    </div>
                  </div>
                </div>
              </div>
            );

            // Use 'to' prop if it exists, otherwise just render the card without link
            if (program.href) {
              return (
                <Link to={program.href} key={index} className="block w-full">
                  {CardContent}
                </Link>
              );
            }

            return (
              <div key={index} className="block w-full">
                {CardContent}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}