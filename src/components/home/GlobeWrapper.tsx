'use client';
import dynamic from 'next/dynamic';

const Globe3D = dynamic(() => import('@/components/Globe3D'), {
  ssr: false,
  loading: () => <div className="w-[620px] h-[640px] rounded-full bg-[#edeee9]" />,
});

export default function GlobeWrapper({ width, height }: { width: number; height: number }) {
  return <Globe3D width={width} height={height} />;
}
