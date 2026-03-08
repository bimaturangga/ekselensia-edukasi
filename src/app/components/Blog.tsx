import React from 'react';
import { ArrowRight, Newspaper } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { RedButton } from './ui/RedButton';
import { BlurRevealText } from './ui/BlurRevealText';
import { Link } from 'react-router';

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export function Blog() {
  const articles = useQuery(api.articles.getLatest, { limit: 3 });

  return (
    <section id="blog" className="bg-white py-16 lg:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4 sm:gap-8">
          <div className="max-w-2xl w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#f5f5f5] border border-gray-200 text-gray-600 text-[11px] sm:text-xs font-medium mb-4 sm:mb-6">
              <Newspaper size={14} />
              Wawasan & Berita
            </div>
            <BlurRevealText
              text="Artikel & Informasi Terkini"
              className="text-[28px] sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight bg-clip-text text-transparent w-full"
              style={{
                fontFamily: 'Funnel Display, sans-serif',
                backgroundImage: "linear-gradient(174.955deg, rgb(30, 30, 30) 11.53%, rgba(30, 30, 30, 0.6) 109.53%)"
              }}
            />
            <p className="text-[14px] sm:text-lg text-gray-600 leading-relaxed w-full">
              Temukan berbagai tips belajar, informasi universitas, dan update terbaru seputar studi di Tiongkok.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto md:pb-2 mt-2 sm:mt-0">
            <Link to="/artikel" className="inline-block w-full sm:w-auto">
              <RedButton
                className="!px-5 sm:!px-6 !py-2.5 sm:!py-3 !text-[13px] sm:!text-[15px] !rounded-full w-full sm:w-auto flex justify-center items-center"
              >
                Lihat Semua Artikel <ArrowRight size={16} className="ml-1 sm:ml-2" />
              </RedButton>
            </Link>
          </div>
        </div>

        {articles === undefined && (
          <div className="w-full flex justify-center items-center py-10 text-gray-500 text-[14px] sm:text-base">
            Memuat sekilas artikel...
          </div>
        )}

        {articles !== undefined && (

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {articles?.map((post, index) => (
              <Link
                key={post._id || index}
                to={`/artikel/${post.slug}`}
                className="bg-white rounded-[16px] p-4 sm:p-6 flex flex-col group transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:shadow-lg outline-none"
              >
                {/* Top Image Container */}
                <div className="w-full h-[180px] sm:h-[200px] mb-6 relative">
                  <div className="w-full h-full rounded-[8px] overflow-hidden bg-[#f5f5f5] border border-gray-100/60 transform transition-transform duration-500 group-hover:translate-y-2 flex items-center justify-center">
                    <div className="relative z-10 w-full h-full">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Text Content */}
                <div className="flex flex-col items-start text-left z-10 flex-grow">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-rose-50 text-[#7c1318] text-[10px] font-bold tracking-wide mb-4 uppercase shrink-0">
                    {post.tag}
                  </div>
                  <h3 className="text-lg sm:text-[19px] leading-[26px] font-medium text-[#282735] mb-3 tracking-tight shrink-0 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[14px] leading-[22px] text-[#818498] line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.content.replace(/<[^>]*>?/gm, '').substring(0, 150) + "..." }}
                  />
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}