import React from 'react';
import { X, MapPin } from 'lucide-react';
import { Webcam } from '../types';

interface WebcamModalProps {
  webcam: Webcam | null;
  onClose: () => void;
}

export const WebcamModal: React.FC<WebcamModalProps> = ({ webcam, onClose }) => {
  if (!webcam) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">{webcam.title}</h2>
            <div className="flex items-center text-slate-400 text-sm">
              <MapPin className="w-3 h-3 mr-1" />
              {webcam.location}
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video bg-black w-full">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${webcam.youtubeId}?autoplay=1&mute=1`}
            title={webcam.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          ></iframe>
        </div>

        {/* Footer Info */}
        <div className="p-4 bg-slate-900">
          <div className="flex gap-2">
            {webcam.tags.map(tag => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};