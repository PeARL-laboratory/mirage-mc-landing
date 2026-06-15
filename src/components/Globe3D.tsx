'use client';
import { useRef, useEffect, useCallback, useState } from 'react';
import * as d3 from 'd3';
// @ts-ignore – react-globe.gl has no bundled types
import Globe from 'react-globe.gl';
import earthDay from '@/assets/earth-blue-marble.jpg';

const colorArr = [
  '#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c',
  '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5',
  '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f',
  '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5',
];

interface Globe3DProps {
  width: number;
  height: number;
}

export default function Globe3D({ width, height }: Globe3DProps) {
  const globeEl = useRef<any>(null);
  const [locs, setLocs] = useState<any[]>([]);
  const [countries, setCountries] = useState<any[]>([]);

  // Fetch data at runtime — keeps the JS bundle small
  useEffect(() => {
    Promise.all([
      fetch('/mirage-mc-v1.locs.json').then((r) => r.json()),
      fetch('/mirage-mc-v1.countries.json').then((r) => r.json()),
    ]).then(([locsRaw, countriesRaw]) => {
      setLocs(
        locsRaw.map((d: any) => ({
          ...d,
          location_rg_country: d.Location_RG_country,
          location_rg_city: d.Location_RG_City,
        }))
      );
      setCountries(countriesRaw);
    });
  }, []);

  useEffect(() => {
    if (!locs.length) return;
    const timeout = setTimeout(() => {
      if (!globeEl.current) return;
      const controls = globeEl.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.6;
      controls.enableZoom = false;
      controls.enablePan = false;
      globeEl.current.pointOfView({ lat: 30, lng: 10, altitude: 2 }, 0);
    }, 300);
    return () => clearTimeout(timeout);
  }, [locs]);

  const arcThickScale = useCallback(() => {
    if (!locs.length) return d3.scaleLinear().domain([0, 1]).range([0.01, 0.5]);
    return d3
      .scaleLinear()
      .domain(d3.extent(locs, (d) => d.count) as [number, number])
      .range([0.01, 0.5]);
  }, [locs]);

  const colorsCategory = useCallback(() => {
    return d3
      .scaleOrdinal<string>(colorArr)
      .domain(countries.slice(0, 20).map((d: any) => d.title));
  }, [countries]);

  const getLng      = useCallback((d: any) => d.long, []);
  const getLat      = useCallback((d: any) => d.lat, []);
  const getHexAlt   = useCallback((d: any) => arcThickScale()(d.sumWeight), [arcThickScale]);
  const getHexColor = useCallback(
    (d: any) => colorsCategory()(d.points[0]?.location_rg_country) ?? '#888888',
    [colorsCategory]
  );
  const getLabelText  = useCallback((d: any) => d.title, []);
  const getLabelColor = useCallback(() => 'rgba(255,255,255,0.85)', []);
  const getLabelSize  = useCallback((d: any) => {
    const max = countries[0]?.count ?? 1;
    return 0.2 + (d.count / max) * 0.3;
  }, [countries]);

  return (
    <Globe
      ref={globeEl}
      width={width}
      height={height}
      globeImageUrl={earthDay.src}
      backgroundColor="rgba(0,0,0,0)"
      showAtmosphere={true}
      atmosphereColor="lightskyblue"
      atmosphereAltitude={0.15}
      hexBinPointsData={locs}
      hexBinPointWeight="count"
      hexBinPointLng={getLng}
      hexBinPointLat={getLat}
      hexAltitude={getHexAlt}
      hexBinResolution={4}
      hexTopColor={getHexColor}
      hexSideColor={getHexColor}
      hexBinMerge={false}
      hexTransitionDuration={0}
      labelsData={countries.slice(0, 20)}
      labelLat={getLat}
      labelLng={getLng}
      labelText={getLabelText}
      labelSize={getLabelSize}
      labelDotRadius={0}
      labelColor={getLabelColor}
      labelResolution={2}
      labelAltitude={0.02}
    />
  );
}
