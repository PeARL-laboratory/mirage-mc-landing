import type { Metadata } from 'next';
import PrimaryResearcher from '@/components/team/PrimaryResearcher';
import ResearchTeam from '@/components/team/ResearchTeam';
import AffiliatedInstitutions from '@/components/team/AffiliatedInstitutions';
import FundingAndSupport from '@/components/team/FundingAndSupport';

export const metadata: Metadata = {
  title: 'Team & Supporters — MIRAGE',
  description: 'Meet the researchers, developers, and supporting institutions behind the MIRAGE project.',
};

export default function TeamPage() {
  return (
    <>
      <section className="w-full bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-20 pt-[80px] md:pt-[120px] pb-[80px] md:pb-[160px]">
          <div className="flex flex-col gap-8 w-full max-w-[843px]">
            <h1 className="text-[36px] md:text-[64px] font-bold leading-[1.1] tracking-[-1.2px] text-[#1e1e1e] font-display">
              Team &amp; Supporters
            </h1>
            <p className="text-[18px] md:text-[20px] font-normal leading-[1.5] text-[#444]">
              A collaborative effort involving researchers, contributors, and supporting institutions
              across disciplines. Includes individuals and organizations contributing to research,
              development, and project support.
            </p>
          </div>
        </div>
      </section>
      <PrimaryResearcher />
      <ResearchTeam />
      <AffiliatedInstitutions />
      <FundingAndSupport />
    </>
  );
}
