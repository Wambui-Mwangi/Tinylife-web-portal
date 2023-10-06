'use client'
import React, { useState } from 'react';

const [leadPoisoningLocations, setLeadPoisoningLocations] = useState([
    { lat: -1.292065, lng: 36.821946, name: 'Parklands/Highridge', Percentage: '' },
    { lat: -1.281839, lng: 36.827994, name: 'Mountain View', Percentage: '' },
    { lat: -1.284669, lng: 36.858994, name: 'Kawangware', Percentage: '' },
    { lat: -1.274669, lng: 36.817223, name: 'Kabiro', Percentage: '' },
    { lat: -1.163669, lng: 36.124422, name: 'Landimawe', Percentage: '' },
    { lat: -1.272939, lng: 36.806452, name: 'Mutu-ini', Percentage: '' },
    { lat: -1.165399, lng: 36.135293, name: 'Ziwani/Kariokor', Percentage: '' },
    { lat: -1.271202, lng: 36.795681, name: 'Ngando', Percentage: '' },
    { lat: -1.269469, lng: 36.784910, name: 'Riruta', Percentage: '' },
    { lat: -1.259069, lng: 36.731055, name: 'Mugumu-ini', Percentage: '' },
    { lat: -1.255599, lng: 36.698742, name: 'Laini Saba', Percentage: '' },
    { lat: -1.253869, lng: 36.687971, name: 'Lindi Makina', Percentage: '' },
    { lat: -1.224369, lng: 36.634116, name: 'Zimmerman', Percentage: '' },
    { lat: -1.243469, lng: 36.623345, name: 'Roysambu', Percentage: '' },
    { lat: -1.241739, lng: 36.612574, name: 'Kahawa', Percentage: '' },
    { lat: -1.257339, lng: 36.709513, name: 'Nyayo Highrise', Percentage: '' },
    { lat: -1.239999, lng: 36.601803, name: 'Clay City', Percentage: '' },
    { lat: -1.236539, lng: 36.580261, name: 'Kasarani', Percentage: '' },
    { lat: -1.233069, lng: 36.558719, name: 'Ruai', Percentage: '' },
    { lat: -1.231339, lng: 36.547948, name: 'Baba Dogo', Percentage: '' },
    { lat: -1.234799, lng: 36.569490, name: 'Njiru', Percentage: '' },
    { lat: -1.229599, lng: 36.537177, name: 'Utalii', Percentage: '' },
    { lat: -1.224369, lng: 36.504907, name: 'Korogocho', Percentage: '' },
    { lat: -1.222639, lng: 36.494036, name: 'Imara Daima', Percentage: '' },
    { lat: -1.226111, lng: 36.515778, name: 'Kwa Njenga', Percentage: '' },
    { lat: -1.238269, lng: 36.591032, name: 'Mwiki', Percentage: '' },
    { lat: -1.287778, lng: 36.778889, name: 'Kibra', Percentage: '' },
    { lat: -1.220899, lng: 36.483165, name: 'Dandora', Percentage: '' },
]);

const getTopThreeItems = () => {
  const sortedList = [...leadPoisoningLocations].sort((a, b) => b.Percentage - a.Percentage);
  const topThreeItems = sortedList.slice(0, 3);
  return topThreeItems;
};
const topThreeItems = getTopThreeItems();
function TopLocations() {
  return (
    <div>
      <h1>Top Three Items</h1>
      <ul>
        {topThreeItems.map((item, index) => (
          <li key={index}>
            <h2>{item.name}</h2>
            <p>{item.Percentage}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TopLocations;









