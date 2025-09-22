// Updated Map.tsx with custom styling
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const markers = [
  { name: 'New York', coordinates: [40.712776, -74.0059] as [number, number], revenue: '$72K' },
  { name: 'San Francisco', coordinates: [37.7749, -122.4194] as [number, number], revenue: '$39K' },
  { name: 'Sydney', coordinates: [-33.8688, 151.2093] as [number, number], revenue: '$25K' },
  { name: 'Singapore', coordinates: [1.3521, 103.8198] as [number, number], revenue: '$61K' },
];

// Custom marker icon
const customIcon = new Icon({
  iconUrl:
    'data:image/svg+xml;base64,' +
    btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <circle cx="12" cy="12" r="5" fill="black" stroke="white" stroke-width="2" />
      </svg>
    `),
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12],
});

interface MapChartProps {
  backgroundColor?: string;
  landColor?: string;
  borderColor?: string;
}

const MapChart: React.FC<MapChartProps> = ({ 
  backgroundColor = '#FFFFFF', 
  landColor = '#FFFFFF', 
  borderColor = '#FFFFFF' 
}) => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden relative">
    <style>{`
      .custom-map-container .leaflet-container {
        background: ${backgroundColor} !important;
      }
    `}</style>
      
      <MapContainer
        center={[10, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%', backgroundColor }}
        className="rounded-lg custom-map-container"
        zoomControl={false}
        attributionControl={false}
      >
        {/* Custom styled tile layer */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
          className="custom-tiles"
        />
        
        {markers.map(({ name, coordinates, revenue }) => (
          <Marker key={name} position={coordinates} icon={customIcon}>
            <Popup className="custom-popup">
              <div className="text-center p-2">
                <div className="font-semibold text-gray-900 text-sm">{name}</div>
                <div className="text-gray-600 text-xs mt-1">{revenue}</div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapChart;
