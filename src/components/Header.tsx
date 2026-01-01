import React from 'react';
import { Video, Map, List } from 'lucide-react';

interface HeaderProps {
  viewMode: 'list' | 'map';
  setViewMode: (mode: 'list' | 'map') => void;
}

export const Header: React.FC<HeaderProps> = ({ viewMode, setViewMode }) => {
  return (
    <header className="bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between sticky top-0 z-20 shadow-lg">
      <div className="flex items-center gap-2">
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
          <Video className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight">LA Live Cams</h1>
          <p className="text-xs text-slate-400">Real-time views of Los Angeles</p>
        </div>
      </div>

      <div className="flex md:hidden bg-slate-800 rounded-lg p-1">
        <button
          onClick={() => setViewMode('list')}
          className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400'}`}
        >
          <List className="w-5 h-5" />
        </button>
        <button
          onClick={() => setViewMode('map')}
          className={`p-2 rounded-md transition-all ${viewMode === 'map' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-400'}`}
        >
          <Map className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};