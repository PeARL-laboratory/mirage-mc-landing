'use client';
import { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

const steps = [
  {
    num: '1',
    title: 'Search',
    body: 'Locate radio stations, artists, or songs using search filters. Browse metadata from stations across the globe.',
  },
  {
    num: '2',
    title: 'Analyze',
    body: 'Use interactive visualizations and metadata panels to examine song lists, stations, and listening patterns.',
  },
  {
    num: '3',
    title: 'Listen & Export',
    body: 'Access embedded streaming links to listen to tracks and export relevant metadata or visualizations.',
  },
];

export default function HowToUse() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    playing ? videoRef.current.play() : videoRef.current.pause();
  }, [playing]);

  return (
    <section className="w-full bg-[#edeee9]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-20 py-16 md:py-40 flex flex-col items-center gap-24">

        <div className="flex flex-col gap-16 items-center w-full">
          {/* Heading */}
          <div className="flex flex-col gap-4 items-center text-center w-full max-w-[842px]">
            <h2 className="text-[28px] md:text-[48px] font-bold leading-[1.1] tracking-[-0.8px] text-[#1e1e1e] w-full font-display">
              How to Use
            </h2>
            <p className="text-[18px] md:text-[20px] font-normal leading-[1.5] text-[#444] w-full">
              Explore music across the global radio landscape, from stations in Malaysia and Bulgaria
              to broadcasts in Guatemala and beyond.
            </p>
          </div>

          {/* Steps */}
          <div className="flex flex-col md:flex-row items-start justify-center gap-10 w-full">
            {steps.map((s) => (
              <div key={s.num} className="flex-1 flex flex-col items-center gap-6 px-0 md:px-6">
                <div className="w-14 h-14 rounded-2xl bg-[#f74b0e] flex items-center justify-center shrink-0">
                  <span className="text-[24px] font-bold text-white leading-[1.3] font-display">{s.num}</span>
                </div>
                <div className="flex flex-col gap-4 items-start text-center w-full">
                  <p className="text-[24px] font-bold leading-[1.3] text-[#1e1e1e] w-full font-display">{s.title}</p>
                  <p className="text-[18px] font-normal leading-[1.5] text-[#444] w-full">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video */}
        <div
          className="relative w-full max-w-[842px] h-[240px] md:h-[518px] rounded-2xl border border-[#e0e0e0] overflow-hidden cursor-pointer"
          onClick={() => setPlaying((p) => !p)}
        >
          <video
            ref={videoRef}
            src="/herovideo.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            loop
            playsInline
          />
          {!playing && (
            <>
              <div className="absolute inset-0 bg-black/50 rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-2xl bg-[#f3f3f3] shadow-sm flex items-center justify-center pointer-events-none">
                  <Play className="w-5 h-5 text-[#1e1e1e] fill-[#1e1e1e]" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
