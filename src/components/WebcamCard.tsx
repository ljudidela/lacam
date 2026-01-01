import React from 'react';
import { Play, MapPin } from 'lucide-react';
import { Webcam } from '../types';

interface WebcamCardProps {
  webcam: Webcam;
  onSelect: (webcam: Webcam) => void;
}

export const WebcamCard: React.FC<WebcamCardProps> = ({ webcam, onSelect }) => {
  return (
    <div 
      className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer"
      onClick={() => onSelect(webcam)}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={webcam.thumbnail} 
          alt={webcam.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full group-hover:scale-110 transition-transform">
            <Play className="w-6 h-6 text-white fill-white" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-medium text-white">
          LIVE
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-white mb-1 group-hover:text-blue-400 transition-colors">{webcam.title}</h3>
        <div className="flex items-center text-slate-400 text-sm mb-3">
          <MapPin className="w-3 h-3 mr-1" />
          {webcam.location}
        </div>
        <div className="flex flex-wrap gap-2">
          {webcam.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-slate-700 text-slate-300 border border-slate-600">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};