import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Webcam } from '../types';
import L from 'leaflet';
import { Play } from 'lucide-react';

// Fix for default Leaflet markers in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapViewProps {
  webcams: Webcam[];
  onSelect: (webcam: Webcam) => void;
}

// Component to handle map resizing
const MapResizer = () => {
  const map = useMap();
  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100);
  }, [map]);
  return null;
};

export const MapView: React.FC<MapViewProps> = ({ webcams, onSelect }) => {
  const center: [number, number] = [34.0522, -118.2437]; // LA Center

  return (
    <MapContainer 
      center={center} 
      zoom={10} 
      scrollWheelZoom={true} 
      className="w-full h-full z-0"
      style={{ background: '#0f172a' }}
    >
      <MapResizer />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {webcams.map((cam) => (
        <Marker 
          key={cam.id} 
          position={[cam.lat, cam.lng]}
          eventHandlers={{
            click: () => {
              // Optional: center map on click
            },
          }}
        >
          <Popup className="custom-popup">
            <div className="w-48">
              <div className="relative aspect-video rounded-md overflow-hidden mb-2">
                <img src={cam.thumbnail} alt={cam.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-sm mb-1">{cam.title}</h3>
              <p className="text-xs text-slate-400 mb-2">{cam.location}</p>
              <button 
                onClick={() => onSelect(cam)}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs py-1.5 rounded flex items-center justify-center gap-1 transition-colors"
              >
                <Play className="w-3 h-3" /> Watch Live
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};