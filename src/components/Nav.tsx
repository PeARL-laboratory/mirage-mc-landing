'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Download, ArrowUpRight, Menu, X } from 'lucide-react';
import logoSrc from '@/assets/logo.png';
import arrowDropDown from '@/assets/arrow_drop_down.svg';

const DOWNLOAD_OPTIONS = [
  { label: 'Web App', href: '#' },
  { label: 'Python Library', href: 'https://github.com/arishazakry/mirage-library' },
];

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Research Outputs', href: '/research' },
  { label: 'Team & Supporters', href: '/team' },
  { label: 'Contacts', href: '/contacts' },
];

export default function Nav() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-20 border-b border-[#e0e0e0] bg-white relative z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-20 flex items-center justify-between h-full">

        {/* Logo */}
        <Link href="/" className="h-10 w-[136px] relative overflow-hidden shrink-0 flex items-center">
          <Image src={logoSrc} alt="MIRAGE" width={136} height={40} className="object-contain invert" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7 text-[16px] font-normal leading-[1.5]">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? 'text-[#f74b0e]' : 'text-[#444] hover:text-[#1e1e1e] transition-colors'}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://arxiv.org/html/2502.05250v1"
            target="_blank"
            rel="noreferrer"
            className="text-[#444] flex items-center hover:text-[#1e1e1e] transition-colors"
          >
            Paper
            <ArrowUpRight className="w-4 h-4 ml-1.5" />
          </a>
        </div>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((o) => !o)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
              className="h-10 flex items-center gap-1 pl-4 pr-2 bg-[#f3f3f3] border border-[#e0e0e0] rounded-xl text-sm font-medium text-[#1e1e1e]"
            >
              Download
              <Image
                src={arrowDropDown}
                alt=""
                width={16}
                height={16}
                className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-[#e0e0e0] rounded-xl shadow-lg overflow-hidden z-50">
                {DOWNLOAD_OPTIONS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center justify-between px-4 py-3 text-sm text-[#1e1e1e] hover:bg-[#f3f3f3] transition-colors"
                  >
                    {label}
                    <Download className="w-4 h-4 text-[#8a8a8a] shrink-0" />
                  </a>
                ))}
              </div>
            )}
          </div>
          <a
            href="https://dashboard.mirage-project.org"
            target="_blank"
            rel="noreferrer"
            className="h-10 flex items-center px-4 bg-[#1e1e1e] rounded-xl text-sm font-medium text-white"
          >
            Launch Dashboard
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-[#1e1e1e]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-[#e0e0e0] shadow-md flex flex-col px-6 py-5 gap-5 z-50">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-[16px] leading-[1.5] ${pathname === href ? 'text-[#f74b0e]' : 'text-[#444]'}`}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://arxiv.org/html/2502.05250v1"
            target="_blank"
            rel="noreferrer"
            className="text-[16px] text-[#444] flex items-center"
          >
            Paper <ArrowUpRight className="w-4 h-4 ml-1" />
          </a>
          <div className="flex gap-3 pt-2 flex-wrap">
            {DOWNLOAD_OPTIONS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="h-10 flex items-center gap-2 px-4 bg-[#f3f3f3] border border-[#e0e0e0] rounded-xl text-sm font-medium text-[#1e1e1e]"
              >
                {label}
                <Download className="w-4 h-4 text-[#8a8a8a]" />
              </a>
            ))}
            <a
              href="https://dashboard.mirage-project.org"
              target="_blank"
              rel="noreferrer"
              className="h-10 flex items-center px-4 bg-[#1e1e1e] rounded-xl text-sm font-medium text-white"
            >
              Launch Dashboard
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
