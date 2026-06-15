import CiteButton from './CiteButton';

const pub = {
  title: 'Exploring internet radio across the globe with the MIRAGE online dashboard',
  authors: 'Ngan V.T. Nguyen, Elizabeth A.M. Acosta, Tommy Dang, David R.W. Sears',
  href: 'https://www.researchgate.net/publication/388883730_Exploring_internet_radio_across_the_globe_with_the_MIRAGE_online_dashboard',
  abstract: 'This study presents the Music Informatics for Radio Across the GlobE (MIRAGE) online dashboard, which allows users to access, interact with, and export metadata (e.g., artist name, track title) and musicological features (e.g., instrument list, voice type, key/mode) for 1 million events streaming on 10,000 internet radio stations across the globe. Users can search for stations or events according to several criteria, display, analyze, and listen to the selected station/event lists using interactive visualizations that include embedded links to streaming services, and finally export relevant metadata and visualizations for further study.',
};

export default function PublicationsGrid() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-20 pb-16 md:pb-40">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* PDF viewer — hidden on mobile */}
          <div className="hidden lg:block w-[608px] h-[843px] rounded-lg border-[12px] border-[#edeee9] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),0px_4px_8px_0px_rgba(0,0,0,0.06)] overflow-hidden shrink-0">
            <iframe
              src="https://arxiv.org/pdf/2502.05250"
              title={pub.title}
              className="w-full h-full"
            />
          </div>

          {/* Paper details */}
          <div className="w-full lg:w-[608px] flex flex-col items-start justify-between py-4 self-stretch">
            <div className="flex flex-col gap-12 w-full">
              <div className="flex flex-col gap-4 w-full">
                <h3 className="text-[28px] md:text-[32px] font-bold leading-[1.1] tracking-[0.4px] text-[#1e1e1e] w-full font-display">
                  {pub.title}
                </h3>
                <p className="text-[16px] font-normal leading-[1.5] text-[#6b6b6b] w-full">{pub.authors}</p>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <h4 className="text-[24px] font-bold leading-[1.3] text-[#1e1e1e] w-full font-display">Abstract</h4>
                <p className="text-[18px] md:text-[20px] font-normal leading-[1.5] text-[#444] w-full">{pub.abstract}</p>
              </div>
            </div>

            <div className="border-t border-[#e0e0e0] pt-8 flex flex-wrap items-center justify-between gap-4 w-full mt-8">
              <div className="flex items-center gap-3">
                <a
                  href={pub.href}
                  target="_blank"
                  rel="noreferrer"
                  className="h-14 flex items-center px-6 bg-[#3b6edc] rounded-2xl text-base font-semibold text-white"
                >
                  Read Paper
                </a>
                <CiteButton />
              </div>
              <span className="text-[16px] font-medium leading-[1.5] text-[#6b6b6b] whitespace-nowrap">
                PDF • 8 pages
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
