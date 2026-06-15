const scopeCards = [
  { type: 'Scope', title: 'Data Volume', body: 'The core of the project is MIRAGE MetaCorpus, which currently contains metadata for 1 million events.' },
  { type: 'Limitation', title: 'Medium-Specific', body: 'The project is limited to internet radio rather than terrestrial (FM/AM) radio or other streaming platforms.' },
  { type: 'Scope', title: 'Breadth', body: 'The metacorpus contains events from 10,000 internet radio stations across the globe.' },
  { type: 'Limitation', title: 'Data Sources', body: 'Metadata is collected from stream encoders and verified by annotators and open-access online music libraries, so data quality depends on these sources.' },
  { type: 'Scope', title: 'Depth', body: 'Each event in the metacorpus includes metadata for 131 fields. These fields cover information related to the location, station, event, artist, and track.' },
  { type: 'Limitation', title: 'Development Stage', body: 'The team released v1.0 in 2026, but the project is still in development.' },
  { type: 'Scope', title: 'Target Audience', body: 'The dashboard enables users with potentially little training in computational methods to access, interact with, and export information about the music on internet radio.' },
  { type: 'Limitation', title: 'Corpus Size', body: 'The current metacorpus consists of 1 million events, but data collection is ongoing.' },
];

export default function ScopeAndLimitations() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-20 pt-16 pb-16 md:pt-40 md:pb-30 flex flex-col gap-10">
        <div className="flex flex-col gap-4 w-full max-w-[842px]">
          <h2 className="text-[28px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.8px] text-[#1e1e1e] font-display">
            Scope &amp; Limitations
          </h2>
          <p className="text-[18px] md:text-[20px] font-normal leading-[1.5] text-[#444]">
            Focuses on internet radio metadata, a relatively new and underexamined medium. Data quality
            and coverage depend on external sources with varying accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {scopeCards.map((card, i) => (
            <div
              key={i}
              className="bg-[#edeee9] rounded-2xl p-6 flex flex-col gap-12 overflow-hidden min-h-[200px]"
            >
              <span className={`text-[14px] font-medium leading-[1.2] ${card.type === 'Scope' ? 'text-[#3b6edc]' : 'text-[#f74b0e]'}`}>
                {card.type}
              </span>
              <div className="flex flex-col gap-2">
                <p className="text-[24px] font-bold leading-[1.3] text-[#1e1e1e] font-display">{card.title}</p>
                <p className="text-[18px] font-normal leading-[1.5] text-[#444]">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
