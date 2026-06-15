'use client';
import { useRouter } from 'next/navigation';

export default function CiteButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push('/#how-to-cite')}
      className="h-14 flex items-center px-6 bg-[#f3f3f3] border border-[#e0e0e0] rounded-2xl text-base font-semibold text-[#1e1e1e] hover:bg-[#e8e8e8] transition-colors"
    >
      Cite
    </button>
  );
}
