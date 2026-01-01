import { Camera } from '../types';

// Mock data with realistic locations in Los Angeles
// Using generic YouTube live IDs or placeholders where specific cams might expire.
export const CAMERAS: Camera[] = [
  {
    id: '1',
    title: 'Santa Monica Pier',
    location: 'Santa Monica, CA',
    lat: 34.0094,
    lng: -118.4973,
    thumbnail: 'https://images.unsplash.com/photo-1496753480964-2d5d43ad4d36?q=80&w=1000&auto=format&fit=crop',
    youtubeId: 'jW5KJ9y5E_o', // Often live Santa Monica cam
    status: 'live'
  },
  {
    id: '2',
    title: 'Venice Beach Boardwalk',
    location: 'Venice, CA',
    lat: 33.9850,
    lng: -118.4695,
    thumbnail: 'https://images.unsplash.com/photo-1516653980644-358998e46794?q=80&w=1000&auto=format&fit=crop',
    youtubeId: 'vvFullsifac', // Venice Beach Live
    status: 'live'
  },
  {
    id: '3',
    title: 'Hollywood Blvd',
    location: 'Hollywood, CA',
    lat: 34.1016,
    lng: -118.3267,
    thumbnail: 'https://images.unsplash.com/photo-1534234828563-025317354318?q=80&w=1000&auto=format&fit=crop',
    youtubeId: '1y_kfWUCFDQ', // Hollywood Walk of Fame
    status: 'live'
  },
  {
    id: '4',
    title: 'Downtown LA Skyline',
    location: 'Los Angeles, CA',
    lat: 34.0522,
    lng: -118.2437,
    thumbnail: 'https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?q=80&w=1000&auto=format&fit=crop',
    youtubeId: 'n_7roHjXf_M', // LA Skyline
    status: 'live'
  },
  {
    id: '5',
    title: 'Beverly Hills',
    location: 'Beverly Hills, CA',
    lat: 34.0736,
    lng: -118.4004,
    thumbnail: 'https://images.unsplash.com/photo-1563407231-621410855328?q=80&w=1000&auto=format&fit=crop',
    youtubeId: 'DDU-rZs-Ic4', // Generic placeholder if specific one fails
    status: 'live'
  },
  {
    id: '6',
    title: 'LAX Airport View',
    location: 'Los Angeles, CA',
    lat: 33.9416,
    lng: -118.4085,
    thumbnail: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&w=1000&auto=format&fit=crop',
    youtubeId: '0q6q0eL5X8I', // LAX Live
    status: 'live'
  }
];