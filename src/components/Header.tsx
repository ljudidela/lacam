import React from 'react';
import { Video, Map as MapIcon, Menu } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="h-16 border-b border-border bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 flex items-center px-4 justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary rounded-lg">
          <Video className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="font-bold text-lg leading-none">LA Live Cams</h1>
          <p className="text-xs text-muted-foreground">Real-time city surveillance</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <button 
          onClick={toggleSidebar}
          className="p-2 hover:bg-secondary rounded-md md:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};