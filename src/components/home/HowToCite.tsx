'use client';
import { useState } from 'react';
import { ChevronDown, Copy, Check } from 'lucide-react';

const CITE_STYLES = ['APA', 'Harvard', 'MLA', 'Vancouver', 'Chicago', 'IEEE'];

const DATASET_CITATIONS: Record<string, string> = {
  APA: 'Sears, D. R. W. (2025). Music Informatics for Radio Across the Globe (MIRAGE) Metacorpus v1.0. Zenodo. https://doi.org/10.5281/zenodo.18112107',
  Harvard: "Sears, D.R.W. (2025) 'Music Informatics for Radio Across the Globe (MIRAGE) Metacorpus v1.0', Zenodo, 29 December. Available at: https://doi.org/10.5281/zenodo.18112107",
  MLA: 'Sears, David R.W. "Music Informatics for Radio Across the Globe (MIRAGE) Metacorpus v1.0." Zenodo, 29 Dec. 2025. https://doi.org/10.5281/zenodo.18112107.',
  Vancouver: 'Sears DRW. Music Informatics for Radio Across the Globe (MIRAGE) Metacorpus v1.0 [Internet]. Zenodo; 2025 Dec 29. Available from: https://doi.org/10.5281/zenodo.18112107',
  Chicago: 'Sears, David R.W. "Music Informatics for Radio Across the Globe (MIRAGE) Metacorpus v1.0." Zenodo, December 29, 2025. https://doi.org/10.5281/zenodo.18112107.',
  IEEE: 'D. R. W. Sears, "Music Informatics for Radio Across the Globe (MIRAGE) Metacorpus v1.0," Zenodo, Dec. 29, 2025. [Online]. Available: https://doi.org/10.5281/zenodo.18112107',
};

const DASHBOARD_CITATIONS: Record<string, string> = {
  APA: 'Nguyen, N. V. T., Acosta, E. A. M., Dang, T., & Sears, D. R. W. (2024). Exploring internet radio across the globe with the MIRAGE online dashboard. In Proceedings of the 25th International Society for Music Information Retrieval Conference. San Francisco, CA.',
  Harvard: "Nguyen, N.V.T., Acosta, E.A.M., Dang, T. and Sears, D.R.W. (2024) 'Exploring Internet Radio Across the Globe with the MIRAGE Online Dashboard', in Proceedings of the 25th International Society for Music Information Retrieval Conference. San Francisco, CA.",
  MLA: 'Nguyen, Ngan V.T., et al. "Exploring Internet Radio Across the Globe with the MIRAGE Online Dashboard." Proceedings of the 25th International Society for Music Information Retrieval Conference, San Francisco, CA, 2024.',
  Vancouver: 'Nguyen NVT, Acosta EAM, Dang T, Sears DRW. Exploring Internet Radio Across the Globe with the MIRAGE Online Dashboard. In: Proceedings of the 25th International Society for Music Information Retrieval Conference; 2024; San Francisco, CA.',
  Chicago: 'Nguyen, Ngan V.T., Elizabeth A.M. Acosta, Tommy Dang, and David R.W. Sears. "Exploring Internet Radio Across the Globe with the MIRAGE Online Dashboard." In Proceedings of the 25th International Society for Music Information Retrieval Conference. San Francisco, CA, 2024.',
  IEEE: 'N. V. T. Nguyen, E. A. M. Acosta, T. Dang, and D. R. W. Sears, "Exploring Internet Radio Across the Globe with the MIRAGE Online Dashboard," in Proc. 25th Int. Soc. Music Inf. Retrieval Conf., San Francisco, CA, 2024.',
};

const DOI_URL = 'https://doi.org/10.5281/zenodo.18112107';

export default function HowToCite() {
  const [selectedStyle, setSelectedStyle] = useState('APA');
  const [citeDropdownOpen, setCiteDropdownOpen] = useState(false);
  const [copied, setCopied] = useState<'dataset' | 'dashboard' | null>(null);

  const copyText = (text: string, which: 'dataset' | 'dashboard') => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(which);
      setTimeout(() => setCopied(null), 2000);
    }).catch(() => {});
  };

  const datasetCitation = DATASET_CITATIONS[selectedStyle];
  const dashboardCitation = DASHBOARD_CITATIONS[selectedStyle];

  return (
    <section id="how-to-cite" className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-20 pt-16 pb-16 md:pt-30 md:pb-40 flex flex-col gap-10">

        {/* Heading row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
          <h2 className="text-[28px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.8px] text-[#1e1e1e] font-display">
            How to Cite
          </h2>
          <div className="relative">
            <button
              onClick={() => setCiteDropdownOpen((o) => !o)}
              onBlur={() => setTimeout(() => setCiteDropdownOpen(false), 150)}
              className="h-14 flex items-center gap-4 pl-4 pr-3 w-[200px] bg-[#f3f3f3] border border-[#e0e0e0] rounded-2xl"
            >
              <span className="flex-1 text-base font-normal text-[#1e1e1e] text-left">{selectedStyle}</span>
              <ChevronDown className={`w-5 h-5 text-[#c1c1c1] shrink-0 transition-transform ${citeDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {citeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-[200px] bg-white border border-[#e0e0e0] rounded-xl shadow-lg overflow-hidden z-50">
                {CITE_STYLES.map((label) => (
                  <button
                    key={label}
                    onMouseDown={() => { setSelectedStyle(label); setCiteDropdownOpen(false); }}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors ${selectedStyle === label ? 'bg-[#f3f3f3] font-semibold text-[#1e1e1e]' : 'text-[#444] hover:bg-[#f3f3f3]'}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Citation cards */}
        <div className="flex flex-col md:flex-row gap-10 w-full">

          {/* Dataset */}
          <div className="flex-1 bg-[#edeee9] rounded-2xl p-6 md:p-10 flex flex-col gap-6">
            <div className="flex items-center justify-between w-full">
              <p className="text-[18px] font-normal leading-[1.5] text-[#444]">When using the dataset</p>
              <button
                onClick={() => copyText(datasetCitation, 'dataset')}
                className="w-6 h-6 shrink-0 flex items-center justify-center text-[#444] hover:text-[#1e1e1e] transition-colors"
                title="Copy citation"
              >
                {copied === 'dataset' ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
            <div className="bg-white rounded-xl p-6 flex-1">
              <p className="text-[16px] font-normal leading-[1.5] text-[#444]">
                {(() => {
                  const [before, after] = datasetCitation.split(DOI_URL);
                  return (
                    <>
                      {before}
                      <a href={DOI_URL} target="_blank" rel="noreferrer" className="text-[#3b6edc] underline">{DOI_URL}</a>
                      {after}
                    </>
                  );
                })()}
              </p>
            </div>
          </div>

          {/* Dashboard */}
          <div className="flex-1 bg-[#edeee9] rounded-2xl p-6 md:p-10 flex flex-col gap-6">
            <div className="flex items-center justify-between w-full">
              <p className="text-[18px] font-normal leading-[1.5] text-[#444]">When using the online dashboard</p>
              <button
                onClick={() => copyText(dashboardCitation, 'dashboard')}
                className="w-6 h-6 shrink-0 flex items-center justify-center text-[#444] hover:text-[#1e1e1e] transition-colors"
                title="Copy citation"
              >
                {copied === 'dashboard' ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
            <div className="bg-white rounded-xl p-6 flex-1">
              <a
                href="https://www.researchgate.net/publication/388883730_Exploring_internet_radio_across_the_globe_with_the_MIRAGE_online_dashboard"
                target="_blank"
                rel="noreferrer"
                className="text-[16px] font-normal leading-[1.5] text-[#3b6edc] underline"
              >
                {dashboardCitation}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
