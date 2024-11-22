// pages/index.tsx
import React from 'react';
import Video from '@/app/components/Video';
const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">My Video Page</h1>
      <Video
        videoId="s6QFXw3IbE8" // Replace with your actual video ID
        title="Wellcome O Mustafa (Mesmerizing Meelad Kalam Composed & Recited By Sabter Raza Qadri)"
      />
    </div>
  );
};

export default Home;
