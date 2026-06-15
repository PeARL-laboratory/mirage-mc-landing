import Image from 'next/image';
import imgLogoUMich from '@/assets/logo-u-mich.png';
import imgLogoPearl from '@/assets/logo-pearl.png';
import imgLogoVNU from '@/assets/logo-v-n-u.png';
import imgLogoIDVL from '@/assets/logo-i-d-v-l.png';

const institutions = [
  { logo: imgLogoUMich, name: 'Music Cognition and Computation Lab (MCCL), University of Michigan', location: 'Ann Arbor, Michigan, USA', href: null },
  { logo: imgLogoPearl, name: 'Performing Arts Research Lab, Texas Tech University', location: 'Lubbock, Texas, USA', href: '#' },
  { logo: imgLogoVNU, name: 'Vietnam National University', location: 'Ho Chi Minh City, Vietnam', href: null },
  { logo: imgLogoIDVL, name: 'Interactive Data Visualization Lab, Texas Tech University', location: 'Lubbock, Texas, USA', href: null },
];

export default function AffiliatedInstitutions() {
  return (
    <section className="w-full bg-[#edeee9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-20 py-16 md:py-40 flex flex-col gap-16">
        <h2 className="text-[28px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.8px] text-[#1e1e1e] font-display">
          Affiliated Institutions
        </h2>
        <div className="flex flex-col sm:flex-row flex-wrap gap-10 items-start">
          {institutions.map((inst) => (
            <div key={inst.name} className="flex-1 min-w-[200px] flex flex-col gap-6">
              <div className="bg-white h-[200px] rounded-lg flex items-center justify-center overflow-hidden">
                <Image src={inst.logo} alt={inst.name} width={192} height={160} className="object-contain" />
              </div>
              <div className="flex flex-col gap-1">
                {inst.href ? (
                  <a href={inst.href} target="_blank" rel="noreferrer"
                     className="text-[24px] font-bold leading-[1.3] text-[#1e1e1e] font-display">
                    {inst.name}
                  </a>
                ) : (
                  <p className="text-[24px] font-bold leading-[1.3] text-[#1e1e1e] font-display">{inst.name}</p>
                )}
                <p className="text-[18px] font-normal leading-[1.5] text-[#444]">{inst.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
