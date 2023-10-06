import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function NairobiMap() {

  const [leadPoisoningLocations, setLeadPoisoningLocations] = useState([
    { lat: -1.2400, lng: 36.7688, name: 'Kitisuru', Percentage: '' },
    { lat: -1.2560, lng: 36.8175, name: 'Parklands/Highridge', Percentage: '' },
    { lat: -1.250916, lng: 36.845914, name: 'Karura', Percentage: '' },
    { lat: -1.252794, lng: 36.764977, name: 'Kangemi', Percentage: '' },
    { lat: -1.2693100, lng: 36.7386300, name: 'Mountain View', Percentage: ''},
    { lat: -1.283922, lng: 36.798107, name: 'Kilimani', Percentage: '' },
    { lat: -1.2784631, lng: 36.752321, name: 'Kawangware', Percentage: '' },
    { lat: -1.277659, lng: 36.752845, name: 'Gatina', Percentage: '' },
    { lat: -1.278319, lng: 36.784644, name: 'Kileleshwa', Percentage: '' },
    { lat: -1.28730775, lng: 36.7480163, name: 'Kabiro', Percentage: '' },
    { lat: -1.3000000, lng: 36.7000000, name: 'Mutu-ini', Percentage: '' },
    { lat: -1.3041200, lng: 36.7397800, name: 'Ngando', Percentage: '' },
    { lat: -1.292471, lng: 36.736275, name: 'Riruta', Percentage: '' },
    { lat: -1.271887, lng: 36.70381, name: 'Uthiru', Percentage: '' },
    { lat: -1.2820, lng:  36.7140, name: 'Waithaka', Percentage: '' },
    { lat: -1.320853, lng: 36.684936, name: 'Karen', Percentage: '' },
    { lat: -1.3, lng: 36.81667, name: 'Nairobi West', Percentage: '' },
    { lat: -1.317003, lng: 36.796653, name: 'Mugumu-ini', Percentage: '' },
    { lat: -1.32423, lng: 36.827719, name: 'South C', Percentage: '' },
    { lat: -1.315817, lng: 36.805836, name: 'Nyayo Highrise', Percentage: '' },
    { lat: -1.31234835, lng: 36.796114350954, name: 'Laini Saba', Percentage: '' },
    { lat: -1.312024 , lng: 36.790161, name: 'Lindi Makina', Percentage: '' },
    { lat: -1.30490661132, lng: 36.7691307156, name: 'Woodley/Kenyatta Golf Course', Percentage: '' },
    { lat: -1.184392, lng: 36.464872, name: 'Sarangombe', Percentage: '' },
    { lat: -1.206415, lng: 36.913794, name: 'Githurai', Percentage: '' },
    { lat: -1.187234, lng: 36.90304, name: 'Kahawa West', Percentage: '' },
    { lat: -1.210542, lng: 36.897663, name: 'Zimmerman', Percentage: '' },
    { lat: -1.218459, lng: 36.886906, name: 'Roysambu', Percentage: '' },
    { lat: -1.1833, lng: 36.9167, name: 'Kahawa', Percentage: '' },
    { lat: -1.272758, lng: 36.827899, name: 'Clay City', Percentage: '' },
    { lat: -1.225602, lng: 36.924546, name: 'Mwiki', Percentage: '' },
    { lat: -1.227841, lng: 36.905729, name: 'Kasarani', Percentage: '' },
    { lat: -1.2505, lng: 36.9271, name: 'Njiru', Percentage: '' },
    { lat: -1.253287, lng: 37.007823, name: 'Ruai', percentage: '' },
    { lat: -1.243926, lng: 36.881712, name: 'Baba Dogo', percentage: '' },
    { lat: -1.2527, lng: 36.8640, name: 'Utalii', percentage: '' },
    { lat: -1.1333300, lng: 34.5500000, name: 'Mathare North', percentage: '' },
    { lat: -1.238604 , lng: 36.899007, name: 'Lucky Summer', percentage: '' },
    { lat: -1.250364, lng: 36.89094, name: 'Korogocho', percentage: '' },
    { lat: -1.325051, lng: 36.878502, name: 'Imara Daima', percentage: '' },
    { lat: -1.3028, lng: 36.8843, name: 'Mukuru Kwa Njenga', percentage: '' },
    { lat: -1.31833, lng: 36.87250, name: 'Mukuru Kwa Ruben', percentage: '' },
    { lat: -1.31629833333, lng: 36.8811983333, name: 'Pipeline', percentage: '' },
    { lat: -1.31043197, lng: 36.8960322, name: 'Kware', percentage: '' },
    { lat: -1.25501220915, lng: 36.8822600693, name: 'Kariobangi North', percentage: '' },
    { lat: -1.29816, lng: 36.88927, name: 'Dandora Area I', percentage: '' },
    { lat: -1.28452, lng: 36.88536, name: 'Dandora Area II', percentage: '' },
    { lat: -1.2820, lng: 36.7140, name: 'Dandora Area III', percentage: '' },
    { lat: -1.28097, lng: 36.88233, name: 'Dandora Area IV', percentage: '' },
    { lat: 1.2660, lng: 36.9219, name: 'Kayole North', percentage: '' },
    { lat: -1.276162, lng: 36.913794, name: 'Kayole Central', percentage: '' },
    { lat: -1.26746, lng: 36.91582, name: 'Kayole South', percentage: '' },
    { lat: -1.250562 , lng: 36.937984, name: 'Komarock', percentage: '' },
    { lat: -1.2592, lng: 36.9236, name: 'Matopeni/Spring Valley', percentage: '' },
    { lat: -1.27796, lng: 36.83526, name: 'Upper Savannah', percentage: '' },
    { lat: -1.2820, lng: 36.83526, name: 'Lower Savannah', percentage: '' },
    { lat: -1.332686, lng: 36.900351, name: 'Embakasi', percentage: '' },
    { lat: -1.27496478, lng: 36.96090454, name: 'Utawala', percentage: '' },
    { lat:  -1.286558, lng: 36.962825, name: 'Mihango', percentage: '' },
    { lat: -1.2776, lng: 36.8883, name: 'Umoja I', percentage: '' },
    { lat: -1.28321065001, lng: 36.90048185, name: 'Umoja II', percentage: '' },
    { lat: -1.2645912, lng: 36.895515, name: 'Mowlem', percentage: '' },
    { lat:  -1.264884, lng: 36.892285, name: 'Kariobangi South', percentage: '' },
    { lat: -1.2946400, lng: 36.8651600, name: 'Maringo/Hamza', percentage: '' },
    { lat: -1.3061, lng: 36.8627, name: 'Industrial Area', percentage: '' },
    { lat: -1.2891666, lng: 36.8239696, name: 'Harambee', percentage: '' },
    { lat: -1.056954, lng: 37.107094, name: 'Makongeni', percentage: '' },
    { lat: -1.2816645, lng: 36.8458837, name: 'Pumwani', percentage: '' },
    { lat: -1.2731795, lng: 36.8600088, name: 'Eastleigh North', percentage: '' },
    { lat: -1.2859085, lng: 36.8532829, name: 'Eastleigh South', percentage: '' },
    { lat: -1.2700900, lng: 36.8603400, name: 'Airbase', percentage: '' },
    { lat: -1.2820, lng: 36.83526, name: 'California', percentage: '' },
    { lat: -1.274665, lng: 36.829065, name: 'Ngara', percentage: '' },
    { lat: -1.2815735 , lng: 36.82233580000002, name: 'Nairobi Central', percentage: '' },
    { lat: -1.272545 , lng: 36.839829, name: 'Pangani', percentage: '' },
    { lat: -1.27717, lng: 36.835121, name: 'Ziwani/Kariokor', percentage: '' },
    { lat: -1.2899, lng: 36.836, name: 'Landmawe', percentage: '' },
    { lat: -1.2820, lng: 36.83526, name: 'Nairobi South', percentage: '' },
    { lat: -1.27977509162, lng: 36.8326941433, name: 'Mabatini', percentage: '' },
    { lat: -1.25649, lng: 36.872114, name: 'Huruma', percentage: '' },
    { lat: -1.3277100, lng: 36.7836000, name: 'Ngei', percentage: '' },
    { lat: -1.2668038395293, lng: 36.848135618581, name: 'Mlango Kubwa', percentage: '' },
    { lat: -1.2525036534071, lng: 36.878572857815, name: 'Kiamaiko', percentage: '' },
    { lat: -1.312217, lng: 36.791376, name: 'Kibra', percentage: '' },
    { lat: -1.2619, lng: 36.8585, name: 'Mathare South', percentage: '' },
    { lat: -1.30332, lng: 36.8315224, name: 'Embakasi Central', percentage: '' },
    { lat: -1.2997, lng: 36.9167, name: 'Embakasi East', percentage: '' },
    { lat: -1.2800, lng: 36.9167, name: 'Embakasi North', percentage: '' },
    { lat: -1.3000, lng: 36.9167, name: 'Embakasi South', percentage: '' },
    { lat: -1.28478, lng: 36.833774, name: 'Kamukunji', percentage: '' },
    { lat: -1.2959673, lng: 36.8724832, name: 'Makadara', percentage: '' },
    { lat: -1.284457, lng: 36.824504, name: 'Starehe', percentage: '' },
    { lat: -1.268264, lng: 36.811121, name: 'Westlands', percentage: '' },
    { lat: -1.145703, lng: 36.964853, name: 'Ruiru', percentage: '' },
    { lat: -1.457725, lng: 36.978503, name: 'Athi River', percentage: '' },
    { lat: -1.359227, lng: 36.937984, name: 'Syokimau', percentage: '' },
    { lat: -1.475289, lng:  36.96201, name: 'Kitengela', percentage: '' },
    { lat: -1.038757, lng: 37.083375, name: 'Thika', percentage: '' },
  ]);

  const [topLocations, setTopLocations] = useState([]);

  const mapCenter = [-1.286389, 36.817223];
  const nairobiBounds = [
    [-1.4642, 36.6544],
    [-1.1595, 37.0811],
  ];

  const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  useEffect(() => {
    fetch('/response.json')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.prediction)) {
          const updatedLocations = leadPoisoningLocations.map((location, index) => ({
            ...location,
            Percentage: data.prediction[index].toString(),
          }));
          setLeadPoisoningLocations(updatedLocations);


        } else {
          console.error('Error: Data.prediction is not an array.');
        }
      })
      .catch((error) => {
        console.error('Error fetching JSON data:', error);
      });
  }, []);

  
  
    return (
    <div>
      <div style={{ height: '520px', width: '100%' }}>
        <MapContainer
          center={mapCenter}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          maxBounds={nairobiBounds}
          minZoom={10}
          maxZoom={30}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={mapCenter}>
            <Popup>Nairobi, Kenya</Popup>
          </Marker>
          {leadPoisoningLocations.map((location, index) => (
            <Marker key={index} position={[location.lat, location.lng]} icon={greenIcon}>
              <Popup className='bg-green-500'>
                <div>
                  <h2>{location.name}</h2>
                  <p>Avg Blood Lead Level Percentage: {location.Percentage} %</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
        }