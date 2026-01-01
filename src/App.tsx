import { useState } from 'react';
import { Header } from './components/Header';
import { WebcamCard } from './components/WebcamCard';
import { MapView } from './components/MapView';
import { WebcamModal } from './components/WebcamModal';
import { webcams } from './data/webcams';
import { Webcam } from './types';

function App() {
  const [selectedWebcam, setSelectedWebcam] = useState<Webcam | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  return (
    <div className="h-screen flex flex-col bg-slate-950 text-slate-100 overflow-hidden">
      <Header viewMode={viewMode} setViewMode={setViewMode} />
      
      <main className="flex-1 flex overflow-hidden relative">
        {/* List View - Always visible on desktop, toggled on mobile */}
        <div className={`
          w-full md:w-[400px] lg:w-[450px] flex-shrink-0 border-r border-slate-800 bg-slate-900/50 overflow-y-auto custom-scrollbar
          ${viewMode === 'list' ? 'block' : 'hidden md:block'}
        `}>
          <div className="p-4 grid gap-4">
            {webcams.map(cam => (
              <WebcamCard 
                key={cam.id} 
                webcam={cam} 
                onSelect={setSelectedWebcam} 
              />
            ))}
          </div>
        </div>

        {/* Map View - Always visible on desktop, toggled on mobile */}
        <div className={`
          flex-1 relative bg-slate-950
          ${viewMode === 'map' ? 'block' : 'hidden md:block'}
        `}>
          <MapView 
            webcams={webcams} 
            onSelect={setSelectedWebcam} 
          />
          
          {/* Floating overlay for desktop map context */}
          <div className="absolute top-4 right-4 z-[400] bg-slate-900/90 backdrop-blur p-3 rounded-lg border border-slate-700 shadow-xl hidden md:block">
            <p className="text-xs font-medium text-slate-300">Showing {webcams.length} active cameras</p>
          </div>
        </div>
      </main>

      <WebcamModal 
        webcam={selectedWebcam} 
        onClose={() => setSelectedWebcam(null)} 
      />
    </div>
  );
}

export default App;