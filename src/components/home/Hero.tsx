import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import autoStoriesIcon from '@/assets/auto_stories.svg';
import GlobeWrapper from './GlobeWrapper';

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-20 pt-8 pb-16 md:pt-16 md:pb-40 flex flex-col md:flex-row items-center gap-10">

        {/* Left */}
        <div className="w-full md:w-[623px] shrink-0 flex flex-col gap-12 md:gap-[161px]">
          <div className="pt-0 md:pt-16 flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              <h1 className="text-[36px] md:text-[64px] font-bold leading-[1.1] tracking-[-1.2px] text-[#1e1e1e] font-display">
                Mapping the Global Radio Landscape
              </h1>
              <div className="flex flex-col gap-4">
                <p className="text-[18px] md:text-[20px] font-normal leading-[1.5] text-[#444]">
                  The Music Informatics for Radio Across the GlobE (MIRAGE) project enables users to analyze,
                  visualize, and export metadata from thousands of stations across the globe.
                </p>
                <p className="text-[16px] font-normal leading-[1.5] text-[#6b6b6b]">
                  Explore the dashboard, download the app or Python library, and read the paper.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://dashboard.mirage-project.org"
                target="_blank"
                rel="noreferrer"
                className="h-14 flex items-center pl-6 pr-4 py-4 bg-[#3b6edc] rounded-2xl text-base font-normal text-white shrink-0"
              >
                <span className="pr-2">Launch Dashboard</span>
                <ArrowUpRight className="w-6 h-6" />
              </a>
              <a
                href="https://arxiv.org/html/2502.05250v1"
                target="_blank"
                rel="noreferrer"
                className="h-14 flex items-center pl-4 pr-4 py-4 bg-[#f3f3f3] border border-[#e0e0e0] rounded-2xl text-base font-semibold text-[#1e1e1e] shrink-0"
              >
                <span className="pr-2">Read Paper</span>
                <Image src={autoStoriesIcon} alt="" width={24} height={24} />
              </a>
            </div>
          </div>

          {/* Download links */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-[18px] font-normal leading-[1.5] text-[#444] underline whitespace-nowrap">
              Download Web App
            </a>
            <div className="w-px h-8 bg-[#e0e0e0] shrink-0" />
            <a
              href="https://github.com/arishazakry/mirage-library"
              target="_blank"
              rel="noreferrer"
              className="text-[18px] font-normal leading-[1.5] text-[#444] underline whitespace-nowrap"
            >
              Download Python Library
            </a>
          </div>
        </div>

        {/* Right — Globe, hidden on mobile */}
        <div className="hidden md:flex flex-1 items-center justify-end">
          <div className="w-[620px] h-[640px] shrink-0 relative rounded-full overflow-hidden">
            <GlobeWrapper width={520} height={540} />
          </div>
        </div>
      </div>
    </section>
  );
}
