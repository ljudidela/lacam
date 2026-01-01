import React, { useState } from 'react';
import { Header } from './components/Header';
import { CameraList } from './components/CameraList';
import { CameraMap } from './components/CameraMap';
import { VideoOverlay } from './components/VideoOverlay';
import { CAMERAS } from './data/cameras';
import { Camera } from './types';

function App() {
  const [selectedCamera, setSelectedCamera] = useState<Camera | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleCameraSelect = (camera: Camera) => {
    setSelectedCamera(camera);
    // On mobile, close sidebar when selecting
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background text-foreground overflow-hidden">
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <main className="flex-1 flex relative pt-16">
        <CameraList 
          cameras={CAMERAS} 
          selectedCamera={selectedCamera} 
          onSelect={handleCameraSelect}
          isOpen={isSidebarOpen}
        />
        
        <div className="flex-1 relative">
          <CameraMap 
            cameras={CAMERAS} 
            selectedCamera={selectedCamera} 
            onSelect={handleCameraSelect}
          />
          
          {/* Video Overlay floats on top of the map when a camera is selected */}
          <VideoOverlay 
            camera={selectedCamera} 
            onClose={() => setSelectedCamera(null)} 
          />
        </div>
      </main>
    </div>
  );
}

export default App;