import React from 'react';
import { ArrowRight, Info } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { RedButton } from './ui/RedButton';
import { BlurRevealText } from './ui/BlurRevealText';
import { Link } from 'react-router';

export function AboutUs() {
  return (
    <section id="tentang-kami" className="bg-white py-16 lg:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">

        {/* Left Side: Supporting Image */}
        <div className="lg:w-1/2 w-full relative block">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200"
              alt="Ekselensia Team"
              className="w-full h-full object-cover grayscale"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-4 sm:p-8 lg:p-10">
              <div className="w-full">
                <RedButton className="pointer-events-none inline-flex !px-2.5 sm:!px-4 !py-1 sm:!py-2 !text-[10px] sm:!text-sm !rounded-md sm:!rounded-xl mb-1.5 sm:mb-4 tracking-wider !w-auto">
                  10+ Tahun Pengalaman
                </RedButton>
                <h3
                  className="text-[18px] sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug tracking-tight bg-clip-text text-transparent w-full"
                  style={{
                    fontFamily: 'Funnel Display, sans-serif',
                    backgroundImage: 'linear-gradient(174.955deg, rgb(255, 255, 255) 11.53%, rgba(255, 255, 255, 0.3) 109.53%)'
                  }}
                >
                  Mendampingi Ribuan Pelajar Indonesia
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Copy & CTA */}
        <div className="lg:w-1/2 flex flex-col justify-center items-start z-10 w-full mt-4 lg:mt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#f5f5f5] border border-gray-200 text-gray-600 text-[11px] sm:text-xs font-medium mb-4 sm:mb-6">
            <Info size={14} />
            Tentang Kami
          </div>
          <BlurRevealText
            text="Lebih dari Sekedar <br className='hidden sm:block' /> Agen Pendidikan"
            className="text-[28px] sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8 leading-tight tracking-tight bg-clip-text text-transparent w-full"
            style={{
              fontFamily: 'Funnel Display, sans-serif',
              backgroundImage: "linear-gradient(174.955deg, rgb(30, 30, 30) 11.53%, rgba(30, 30, 30, 0.6) 109.53%)"
            }}
          />
          <p className="text-[14px] sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 w-full">
            Ekselensia adalah konsultan pendidikan yang berdedikasi membimbing dan mendampingi putra-putri Indonesia meraih pendidikan berkualitas global di Tiongkok. Kami memastikan setiap siswa mendapatkan pendampingan yang personal dan profesional.
          </p>

          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12 w-full">
            <div className="flex items-start gap-3 sm:gap-4 w-full">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-[#1e1e1e] font-bold text-lg sm:text-xl">
                1
              </div>
              <div className="flex-1">
                <h4 className="text-[17px] sm:text-xl font-bold text-black mb-1 sm:mb-2">Visi Kami</h4>
                <p className="text-[13px] sm:text-base text-gray-500 font-medium leading-snug">Menjadi jembatan pendidikan terbaik untuk generasi muda.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 w-full">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-[#1e1e1e] font-bold text-lg sm:text-xl">
                2
              </div>
              <div className="flex-1">
                <h4 className="text-[17px] sm:text-xl font-bold text-black mb-1 sm:mb-2">Misi Kami</h4>
                <p className="text-[13px] sm:text-base text-gray-500 font-medium leading-snug">Memberikan pendampingan dari awal hingga akhir studi.</p>
              </div>
            </div>
          </div>

          <RedButton
            as={Link}
            to="/tentang-kami"
            className="!px-5 sm:!px-6 !py-3 !text-[14px] sm:!text-[15px] !rounded-full w-full lg:w-auto flex justify-center items-center"
          >
            Kenali Kami Lebih Lanjut
            <ArrowRight className="group-hover:translate-x-1 transition-transform ml-2" size={16} />
          </RedButton>
        </div>

      </div>
    </section>
  );
}
