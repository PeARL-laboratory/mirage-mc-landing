const METADATA_BADGES = [
  '# station_id',
  '# genre_tags',
  '# bitrate',
  '# codec',
  '# geo_lat',
  '# geo_lon',
  '# language',
  '# listener_count',
];

export default function MetadataAccess() {
  return (
    <section className="w-full bg-[#1e1e1e]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-20 py-16 md:py-40 flex flex-col items-center gap-12">
        <div className="flex flex-col gap-6 items-center text-center w-full max-w-[842px]">
          <h2 className="text-[28px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.8px] text-white w-full font-display">
            MetaData Access &amp; Export
          </h2>
          <p className="text-[18px] md:text-[20px] font-normal leading-[1.5] text-[#c1c1c1] w-full">
            The MIRAGE MetaCorpus is designed for researchers. Export filtered datasets in standard formats
            for offline analysis, machine learning applications, or integration with other research tools.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 items-center justify-center w-full max-w-[842px]">
          {METADATA_BADGES.map((badge) => (
            <div
              key={badge}
              className="h-12 flex items-center px-4 bg-white border-[1.5px] border-[#339f85] rounded-2xl overflow-clip shrink-0"
            >
              <span className="text-[18px] md:text-[20px] font-semibold leading-[1.5] text-[#02513e] whitespace-nowrap">
                {badge}
              </span>
            </div>
          ))}
        </div>

        <a
          href="https://zenodo.org/records/12786202"
          target="_blank"
          rel="noreferrer"
          className="h-14 flex items-center px-6 bg-[#3b6edc] rounded-2xl text-base font-semibold text-white"
        >
          Get MetaCorpus on Zenodo
        </a>
      </div>
    </section>
  );
}
