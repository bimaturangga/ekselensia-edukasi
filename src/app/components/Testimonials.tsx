import React from 'react';
import { MessageSquare } from 'lucide-react';
import { BlurRevealText } from './ui/BlurRevealText';
import { ImageWithFallback } from './figma/ImageWithFallback';

const COL_1 = [
  {
    name: "Rizky Firmansyah",
    role: "Mahasiswa S1, Tsinghua University",
    image: "https://images.unsplash.com/photo-1621962366578-7364ccb3352b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI3NDg3OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Ekselensia membantu saya menyusun rencana belajar yang solid, mulai dari kursus bahasa Mandarin hingga persiapan wawancara. Timnya sangat responsif dan informatif. Semua proses terasa sangat lancar.",
  },
  {
    name: "Ahmad Fauzi",
    role: "Penerima Beasiswa, Fudan University",
    image: "https://images.unsplash.com/photo-1617355453845-6996ffeee4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGd1eSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjgyODg2NXww&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Jujur, awalnya saya bingung mencari agen pendidikan yang bisa dipercaya untuk pendaftaran beasiswa di China. Untungnya bertemu Ekselensia! Dokumen saya ditangani dengan teliti sampai akhirnya saya diterima.",
  },
  {
    name: "Nadia Maharani",
    role: "Mahasiswa S2, Zhejiang University",
    image: "https://images.unsplash.com/photo-1634451784126-b9f7282edb1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwc3R1ZGVudCUyMGdpcmwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI4Mjg4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Pendampingannya sangat profesional. Mulai dari pengurusan visa, pendaftaran asrama, hingga orientasi sebelum keberangkatan, semuanya dijelaskan dengan sangat baik. Sangat merekomendasikan Ekselensia!",
  }
];

const COL_2 = [
  {
    name: "Budi Santoso",
    role: "Alumni, Peking University",
    image: "https://images.unsplash.com/photo-1710563849800-73af5bfc9f36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwbWFuJTIwc21pbGluZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjgyODg3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Berkat bimbingan dari mentor-mentor Ekselensia, saya berhasil meraih nilai HSK yang memadai untuk menembus universitas impian. Terasa sekali kalau timnya memang ahli di bidang pendidikan Tiongkok.",
  },
  {
    name: "Siti Nurhaliza",
    role: "Mahasiswa S1, Shanghai Jiao Tong",
    image: "https://images.unsplash.com/photo-1620263484951-8fc062f90180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGluZG9uZXNpYW4lMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjgyODg2OXww&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Ekselensia mempermudah hidup saya! Tidak perlu pusing mengurus berbagai legalisir dan terjemahan dokumen. Mereka menangani semuanya dengan cepat dan transparan.",
  },
  {
    name: "Hendra Wijaya",
    role: "Mahasiswa Kedokteran, Sun Yat-sen Uni",
    image: "https://images.unsplash.com/photo-1633177188754-980c2a6b6266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjgyODg4NXww&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Banyak agen lain yang menjanjikan hal tak masuk akal, tapi Ekselensia realistis dan jujur tentang peluang saya. Berkat mereka, saya bisa masuk fakultas kedokteran impian saya.",
  }
];

const COL_3 = [
  {
    name: "Laila Fitriani",
    role: "Mahasiswa Bisnis, Nanjing University",
    image: "https://images.unsplash.com/photo-1672390933634-6ccb1da5fa40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzI4MTE0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Fasilitas konsultasinya top! Saya mendapat penjelasan mendalam mengenai setiap universitas dan jurusan, yang membuat saya semakin mantap memilih Tiongkok sebagai tujuan studi.",
  },
  {
    name: "Kevin Pratama",
    role: "Mahasiswa S1, Harbin Institute",
    image: "https://images.unsplash.com/photo-1601277161746-88c97f548738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWFuJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjgyODg1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Proses pendaftarannya begitu mudah berkat platform Ekselensia. Saya bisa memantau status aplikasi saya secara real-time. Rasanya aman dan tenang menyerahkan masa depan pendidikan saya kepada mereka.",
  },
  {
    name: "Sarah Amalia",
    role: "Mahasiswa S2, Wuhan University",
    image: "https://images.unsplash.com/photo-1722263147569-fa8873772867?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0dWRlbnQlMjBncmFkdWF0aW9uJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyODI4ODgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    text: "Hal yang paling saya suka adalah komunitas alumninya. Melalui Ekselensia, saya bisa berjejaring dengan senior yang sudah duluan kuliah di Tiongkok, jadi pas tiba di sana tidak canggung sama sekali.",
  }
];

function TestimonialCard({ item }: { item: any }) {
  return (
    <div className="border border-gray-200/60 rounded-[20px] sm:rounded-3xl p-5 sm:p-6 bg-white/50 backdrop-blur-sm flex flex-col items-center text-center sm:items-start sm:text-left gap-4 sm:gap-5 mb-4 sm:mb-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 border border-gray-100">
          <ImageWithFallback src={item.image} alt={item.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-[#1f2937] font-medium text-[13px] sm:text-sm">{item.name}</p>
          <p className="text-[#6b7280] text-[12px] sm:text-sm">{item.role}</p>
        </div>
      </div>
      <p className="text-[#4b5563] text-[13px] sm:text-[14px] leading-relaxed sm:leading-[22px] font-normal">
        {item.text}
      </p>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-white py-16 lg:py-24 border-b border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-16 max-w-2xl mx-auto relative z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#f5f5f5] border border-gray-200 text-gray-600 text-[11px] sm:text-xs font-medium mb-4 sm:mb-6">
            <MessageSquare size={14} />
            Testimoni Siswa
          </div>
          <BlurRevealText
            text="Dipercaya oleh Ratusan Pelajar"
            className="text-[28px] sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight bg-clip-text text-transparent"
            style={{
              fontFamily: 'Funnel Display, sans-serif',
              backgroundImage: "linear-gradient(174.955deg, rgb(30, 30, 30) 11.53%, rgba(30, 30, 30, 0.6) 109.53%)"
            }}
          />
          <p className="text-[14px] sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
            Mendengar langsung pengalaman mereka yang telah berhasil mewujudkan mimpi kuliah di Tiongkok.
          </p>
        </div>

        {/* Masonry / Carousel Container */}
        <div className="relative w-full h-[450px] sm:h-[600px] overflow-hidden">

          {/* Top/Bottom Gradient Fades */}
          <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 h-full relative z-0">

            {/* Column 1 - All items on Mobile, only Col 1 on Desktop */}
            <div className="flex flex-col relative h-full overflow-hidden">
              <div className="animate-scroll-up w-full">
                {/* On mobile, show all mixed. On desktop, show only COL_1 */}
                <div className="md:hidden">
                  {[...COL_1, ...COL_2, ...COL_3, ...COL_1, ...COL_2, ...COL_3].map((item, i) => (
                    <TestimonialCard key={`all-${i}`} item={item} />
                  ))}
                </div>
                <div className="hidden md:block">
                  {[...COL_1, ...COL_1, ...COL_1, ...COL_1].map((item, i) => (
                    <TestimonialCard key={`col1-${i}`} item={item} />
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2 - Scrolls Down (Desktop Only) */}
            <div className="flex flex-col relative h-full overflow-hidden hidden md:flex">
              <div className="animate-scroll-down w-full">
                {[...COL_2, ...COL_2, ...COL_2, ...COL_2].map((item, i) => (
                  <TestimonialCard key={`col2-${i}`} item={item} />
                ))}
              </div>
            </div>

            {/* Column 3 - Scrolls Up (Desktop Only) */}
            <div className="flex flex-col relative h-full overflow-hidden hidden md:flex">
              <div className="animate-scroll-up w-full" style={{ animationDelay: '-15s' }}>
                {[...COL_3, ...COL_3, ...COL_3, ...COL_3].map((item, i) => (
                  <TestimonialCard key={`col3-${i}`} item={item} />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}