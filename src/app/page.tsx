import Hero from '@/components/home/Hero';
import HowToUse from '@/components/home/HowToUse';
import ScopeAndLimitations from '@/components/home/ScopeAndLimitations';
import MetadataAccess from '@/components/home/MetadataAccess';
import HowToCite from '@/components/home/HowToCite';

export default function Home() {
  return (
    <>
      <Hero />
      <HowToUse />
      <ScopeAndLimitations />
      <MetadataAccess />
      <HowToCite />
    </>
  );
}
