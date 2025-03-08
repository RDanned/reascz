import { useEffect, useState } from 'react';
import './MapSelect.scss';
import { Region } from '@/types/geo.ts';
import regionDistrictData from '@/lib/region-district.json';
import RegionMapSelect from './RegionMapSelect';
import { Radio, RadioChangeEvent } from 'antd';

interface MapSelectProps {
  onRegionSelect: (region: string) => void;
  onDistrictSelect: (district: string) => void;
}

function MapSelect({ onRegionSelect, onDistrictSelect }: MapSelectProps) {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');

  useEffect(() => {
    setSelectedRegion(null);
    setSelectedDistrict('');
  }, []);

  const handleRegionSelect = (regionId: string) => {
    const region = regionDistrictData.find((reg) => reg.id === regionId);
    setSelectedRegion(region || null);
    setSelectedDistrict('');
    if (region) onRegionSelect(regionId);
  };

  const handleDistrictChange = (e: RadioChangeEvent) => {
    setSelectedDistrict(e.target.value);
    onDistrictSelect(e.target.value);
  };

  return (
    <div className="map-select">
      <h2>Výběr kraje a okresu</h2>

      <RegionMapSelect onChange={handleRegionSelect} />

      {selectedRegion && (
        <Radio.Group className="district-select" onChange={handleDistrictChange} value={selectedDistrict}>
          {selectedRegion.districts.map((district) => (
            <Radio key={district.id} value={district.name}>
              {district.name}
            </Radio>
          ))}
        </Radio.Group>
      )}
    </div>
  );
}

export default MapSelect;