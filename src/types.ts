export interface Camera {
  id: string;
  title: string;
  location: string;
  lat: number;
  lng: number;
  thumbnail: string;
  youtubeId: string;
  status: 'live' | 'offline';
}