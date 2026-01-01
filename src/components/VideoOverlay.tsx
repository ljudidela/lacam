import React from 'react';
import { Camera } from '../types';
import { X, Maximize2, Minimize2, ExternalLink } from 'lucide-react';
import { clsx } from 'clsx';

interface VideoOverlayProps {
  camera: Camera | null;
  onClose: () => void;
}

export const VideoOverlay: React.FC<VideoOverlayProps> = ({ camera, onClose }) => {
  if (!camera) return null;

  return (
    <div className="absolute top-4 right-4 z-[1000] w-full max-w-md md:max-w-lg lg:max-w-xl shadow-2xl animate-in fade-in slide-in-from-bottom-10 duration-300">
      <div className="bg-card border border-border rounded-xl overflow-hidden flex flex-col">
        <div className="p-3 flex items-center justify-between bg-secondary/50 backdrop-blur-sm">
          <div className="flex flex-col">
            <h3 className="font-bold text-sm">{camera.title}</h3>
            <span className="text-[10px] text-red-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              LIVE FEED
            </span>
          </div>
          <div className="flex items-center gap-1">
            <a 
              href={`https://www.youtube.com/watch?v=${camera.youtubeId}`} 
              target="_blank" 
              rel="noreferrer"
              className="p-1.5 hover:bg-white/10 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              title="Open in YouTube"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button 
              onClick={onClose}
              className="p-1.5 hover:bg-red-500/20 hover:text-red-400 rounded-md transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="relative aspect-video bg-black">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${camera.youtubeId}?autoplay=1&mute=1&rel=0&modestbranding=1`}
            title={camera.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};