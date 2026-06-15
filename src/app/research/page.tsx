import type { Metadata } from 'next';
import PublicationsGrid from '@/components/research/PublicationsGrid';

export const metadata: Metadata = {
  title: 'Research Outputs — MIRAGE',
  description: 'Datasets, publications, and technical resources developed through the MIRAGE project.',
};

export default function ResearchPage() {
  return (
    <>
      <section className="w-full bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-20 pt-[80px] md:pt-[120px] pb-[80px] md:pb-[160px]">
          <div className="flex flex-col gap-8 w-full max-w-[843px]">
            <h1 className="text-[36px] md:text-[64px] font-bold leading-[1.1] tracking-[-1.2px] text-[#1e1e1e] font-display">
              Research Outputs
            </h1>
            <p className="text-[18px] md:text-[20px] font-normal leading-[1.5] text-[#444]">
              Key outputs including datasets, publications, and technical resources developed through
              the project. Designed to support further analysis, reproducibility, and ongoing
              interdisciplinary research.
            </p>
          </div>
        </div>
      </section>
      <PublicationsGrid />
    </>
  );
}
