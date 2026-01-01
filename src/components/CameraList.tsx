import React from 'react';
import { Camera } from '../types';
import { Play, MapPin } from 'lucide-react';
import { clsx } from 'clsx';

interface CameraListProps {
  cameras: Camera[];
  selectedCamera: Camera | null;
  onSelect: (camera: Camera) => void;
  isOpen: boolean;
}

export const CameraList: React.FC<CameraListProps> = ({ cameras, selectedCamera, onSelect, isOpen }) => {
  return (
    <div className={clsx(
      "fixed md:relative top-16 bottom-0 w-80 bg-card border-r border-border overflow-y-auto transition-transform duration-300 z-40",
      isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
    )}>
      <div className="p-4">
        <h2 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Available Cameras</h2>
        <div className="space-y-3">
          {cameras.map((cam) => (
            <div 
              key={cam.id}
              onClick={() => onSelect(cam)}
              className={clsx(
                "group cursor-pointer rounded-xl overflow-hidden border transition-all duration-200",
                selectedCamera?.id === cam.id 
                  ? "border-primary ring-1 ring-primary bg-secondary/50"
                  : "border-border hover:border-primary/50 hover:bg-secondary/30"
              )}
            >
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={cam.thumbnail} 
                  alt={cam.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-background/20 backdrop-blur-sm p-2 rounded-full">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="flex items-center gap-1 text-[10px] font-bold bg-red-500/90 text-white px-2 py-0.5 rounded-full animate-pulse">
                    LIVE
                  </span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-foreground">{cam.title}</h3>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <MapPin className="w-3 h-3" />
                  {cam.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};