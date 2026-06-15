import Image from 'next/image';
import imgLogoNEH from '@/assets/logo-n-e-h.png';
import imgLogoCH from '@/assets/logo-c-h.png';
import imgLogoTTU from '@/assets/logo-t-t-u.png';

const funders = [
  { logo: imgLogoNEH, name: 'National Endowment for the Humanities', href: 'https://www.neh.gov/', imgHeight: 96 },
  { logo: imgLogoCH, name: 'The CH Foundation', href: 'https://www.chfoundationlubbock.com/', imgHeight: 140 },
  { logo: imgLogoTTU, name: 'J.T. & Margaret Talkington College of Visual and Performing Arts, Texas Tech University', href: 'https://www.depts.ttu.edu/visual-performing-arts/', imgHeight: 140 },
];

export default function FundingAndSupport() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-20 py-16 md:py-40 flex flex-col gap-12">
        <h2 className="text-[28px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.8px] text-[#1e1e1e] font-display">
          Funding &amp; Support
        </h2>
        <div className="flex flex-col sm:flex-row flex-wrap gap-10 items-start">
          {funders.map((funder) => (
            <div key={funder.name} className="flex-1 min-w-[200px] flex flex-col gap-6">
              <div className="h-[200px] rounded-lg bg-[#edeee9] flex items-center justify-center overflow-hidden">
                <Image
                  src={funder.logo}
                  alt={funder.name}
                  width={500}
                  height={funder.imgHeight}
                  className="max-w-full object-contain"
                  style={{ maxHeight: funder.imgHeight }}
                />
              </div>
              <a
                href={funder.href}
                target="_blank"
                rel="noreferrer"
                className="text-[24px] font-bold leading-[1.3] text-[#1e1e1e] underline hover:text-[#3b6edc] transition-colors font-display"
              >
                {funder.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
