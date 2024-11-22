// pages/index.tsx
import React from 'react';
import Video from '@/app/components/Video';
const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">My Video Page</h1>
      <Video
        videoId="V9CEPZnmuvQ" // Replace with your actual video ID
        title="Assalam Ya Nabi (Salam By Mufti E Azam Hind With Mesmerizing Mashup Of Amazing Arabic Nasheeds)"
      />
    </div>
  );
};

export default Home;
