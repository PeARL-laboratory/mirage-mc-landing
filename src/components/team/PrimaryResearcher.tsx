import Image from 'next/image';
import { GraduationCap, Mail } from 'lucide-react';
import primaryResearcherSrc from '@/assets/primary-researcher.jpg';

export default function PrimaryResearcher() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-20">
        <div className="bg-[#edeee9] rounded-3xl p-8 md:p-14 flex flex-col md:flex-row gap-10 items-start overflow-hidden">

          {/* Photo */}
          <div className="relative w-full md:w-[320px] h-[280px] md:h-[400px] rounded-2xl overflow-hidden border border-black/10 shrink-0">
            <Image src={primaryResearcherSrc} alt="David R.W. Sears" fill className="object-cover" />
          </div>

          {/* Info */}
          <div className="flex-1 flex flex-col justify-between self-stretch py-2">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-[32px] font-bold leading-[1.1] tracking-[0.38px] text-[#1e1e1e] font-display">
                  David R.W. Sears
                </h2>
                <div className="flex flex-col text-[20px] leading-[1.5] text-[#444]">
                  <p className="font-semibold">Principle Investigator of MIRAGE Project</p>
                  <p className="font-normal">Associate Professor of Music Theory at the University of Michigan</p>
                </div>
              </div>
              <p className="text-[18px] font-normal leading-[1.5] text-[#444]">
                Dr. Sears leads the MIRAGE project at the intersection of music cognition, computational
                analysis, and global radio studies. His work explores how large-scale listening data reveals
                patterns in musical perception and contemporary global listening. Through MIRAGE, he develops
                open-access tools and datasets to support interdisciplinary research.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 md:gap-12 items-center mt-8 md:mt-0">
              <a
                href="https://scholar.google.com/citations?user=yuphd6EAAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <GraduationCap className="w-6 h-6 text-[#3b6edc]" />
                <span className="text-[18px] font-normal leading-[1.5] text-[#3b6edc]">Google Scholar</span>
              </a>
              <a href="mailto:drwsears@umich.edu" className="flex items-center gap-2">
                <Mail className="w-6 h-6 text-[#3b6edc]" />
                <span className="text-[18px] font-normal leading-[1.5] text-[#3b6edc]">drwsears@umich.edu</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
