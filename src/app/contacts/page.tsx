import type { Metadata } from 'next';
import { Mail } from 'lucide-react';
import ContactForm from '@/components/contacts/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — MIRAGE',
  description: 'Get in touch with the MIRAGE research team.',
};

export default function ContactsPage() {
  return (
    <>
      <section className="w-full bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-20 pt-[80px] md:pt-[120px] pb-16 md:pb-20 flex flex-col md:flex-row items-start justify-between gap-6">
          <h1 className="text-[36px] md:text-[64px] font-bold leading-[1.1] tracking-[-1.2px] text-[#1e1e1e] font-display w-full max-w-[843px]">
            Have an idea or questions?<br />Let&apos;s discuss it
          </h1>
          <a
            href="mailto:drwsears@umich.edu"
            className="flex items-center gap-2 py-4 shrink-0"
          >
            <Mail className="w-6 h-6 shrink-0 text-[#3b6edc]" />
            <span className="text-[20px] font-normal leading-[1.5] text-[#3b6edc] whitespace-nowrap">
              drwsears@umich.edu
            </span>
          </a>
        </div>
      </section>
      <section className="w-full bg-white pb-16 md:pb-40">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-20">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
