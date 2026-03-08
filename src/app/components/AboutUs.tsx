import React from 'react';
import { ArrowRight, Info } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { RedButton } from './ui/RedButton';
import { BlurRevealText } from './ui/BlurRevealText';
import { Link } from 'react-router';

export function AboutUs() {
  return (
    <section id="tentang-kami" className="bg-white py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-stretch gap-16">

        {/* Left Side: Supporting Image */}
        <div className="lg:w-1/2 w-full relative flex">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200"
              alt="Ekselensia Team"
              className="w-full h-full object-cover grayscale"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 sm:p-10">
              <div>
                <RedButton className="pointer-events-none inline-flex !px-4 !py-2 !text-sm !rounded-xl mb-4 tracking-wider !w-auto">
                  10+ Tahun Pengalaman
                </RedButton>
                <h3
                  className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-clip-text text-transparent"
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
        <div className="lg:w-1/2 flex flex-col justify-center items-start z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#f5f5f5] border border-gray-200 text-gray-600 text-xs font-medium mb-6">
            <Info size={14} />
            Tentang Kami
          </div>
          <BlurRevealText
            text="Lebih dari Sekedar <br/> Agen Pendidikan"
            className="text-3xl md:text-4xl font-bold mb-8 leading-tight tracking-tight bg-clip-text text-transparent"
            style={{
              fontFamily: 'Funnel Display, sans-serif',
              backgroundImage: "linear-gradient(174.955deg, rgb(30, 30, 30) 11.53%, rgba(30, 30, 30, 0.6) 109.53%)"
            }}
          />
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Ekselensia adalah konsultan pendidikan yang berdedikasi membimbing dan mendampingi putra-putri Indonesia meraih pendidikan berkualitas global di Tiongkok. Kami memastikan setiap siswa mendapatkan pendampingan yang personal dan profesional.
          </p>

          <div className="space-y-6 mb-12 w-full">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-[#1e1e1e] font-bold text-xl">
                1
              </div>
              <div>
                <h4 className="text-xl font-bold text-black mb-2">Visi Kami</h4>
                <p className="text-gray-500 font-medium">Menjadi jembatan pendidikan terbaik untuk generasi muda.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 text-[#1e1e1e] font-bold text-xl">
                2
              </div>
              <div>
                <h4 className="text-xl font-bold text-black mb-2">Misi Kami</h4>
                <p className="text-gray-500 font-medium">Memberikan pendampingan dari awal hingga akhir studi.</p>
              </div>
            </div>
          </div>

          <RedButton
            as={Link}
            to="/tentang-kami"
            className="!px-6 !py-3 !text-[15px] !rounded-full"
          >
            Kenali Kami Lebih Lanjut
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </RedButton>
        </div>

      </div>
    </section>
  );
}
