import Image from 'next/image';
import logoSrc from '@/assets/logo.png';

const RESOURCES = [
  { label: 'GitHub Repository', href: 'https://github.com/arishazakry/mirage-library' },
  { label: 'Zenodo Repository', href: 'https://zenodo.org/records/12786202' },
  { label: 'API', href: 'https://github.com/arishazakry/mirage-library' },
];

const LEGAL = ['Privacy Policy', 'Terms of Use', 'Ethical Guidelines'];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1e1e1e]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-20 pt-20 pb-10 flex flex-col gap-20">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 w-full">
          <div className="shrink-0">
            <Image src={logoSrc} alt="MIRAGE" width={126} height={40} className="object-contain" />
          </div>

          <div className="flex gap-10 w-full md:w-[620px]">
            <div className="flex-1 flex flex-col gap-6">
              <p className="text-[20px] font-semibold text-white leading-[1.5] font-display">
                Resources
              </p>
              <div className="flex flex-col gap-4">
                {RESOURCES.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[16px] font-normal text-[#c1c1c1] hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <p className="text-[20px] font-semibold text-white leading-[1.5] font-display">
                Legal
              </p>
              <div className="flex flex-col gap-4">
                {LEGAL.map((item) => (
                  <span key={item} className="text-[16px] font-normal text-[#c1c1c1] cursor-pointer hover:text-white transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-2 w-full">
          <p className="text-[16px] font-normal text-[#c1c1c1]">
            © 2024 MIRAGE Research Project. All rights reserved.
          </p>
          <span className="text-[16px] font-normal text-[#c1c1c1] text-center md:text-right">
            MIRAGE is licensed under a{' '}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Creative Commons Attribution
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
