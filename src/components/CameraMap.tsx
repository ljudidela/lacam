import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Camera } from '../types';
import L from 'leaflet';
import { Video } from 'lucide-react';
import { renderToString } from 'react-dom/server';

// Fix for Leaflet icons in React
const createCustomIcon = () => {
  const iconHtml = renderToString(
    <div className="bg-primary text-primary-foreground p-2 rounded-full shadow-lg border-2 border-white transform hover:scale-110 transition-transform">
      <Video className="w-5 h-5" />
    </div>
  );

  return L.divIcon({
    html: iconHtml,
    className: 'custom-marker-icon',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
};

const customIcon = createCustomIcon();

interface MapControllerProps {
  selectedCamera: Camera | null;
}

const MapController: React.FC<MapControllerProps> = ({ selectedCamera }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedCamera) {
      map.flyTo([selectedCamera.lat, selectedCamera.lng], 14, {
        duration: 1.5
      });
    }
  }, [selectedCamera, map]);

  return null;
};

interface CameraMapProps {
  cameras: Camera[];
  selectedCamera: Camera | null;
  onSelect: (camera: Camera) => void;
}

export const CameraMap: React.FC<CameraMapProps> = ({ cameras, selectedCamera, onSelect }) => {
  return (
    <div className="w-full h-full bg-secondary/20 relative z-0">
      <MapContainer 
        center={[34.0522, -118.2437]} 
        zoom={11} 
        className="w-full h-full"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        <MapController selectedCamera={selectedCamera} />
        
        {cameras.map((cam) => (
          <Marker 
            key={cam.id} 
            position={[cam.lat, cam.lng]} 
            icon={customIcon}
            eventHandlers={{
              click: () => onSelect(cam),
            }}
          >
            <Popup className="bg-transparent border-none">
              <div className="text-center">
                <h3 className="font-bold text-sm mb-1">{cam.title}</h3>
                <p className="text-xs text-muted-foreground">Click marker to view</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};