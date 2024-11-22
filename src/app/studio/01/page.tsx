// pages/index.tsx
import React from 'react';
import Video from '@/app/components/Video';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Responsive Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        My Video Page
      </h1>

      {/* Video Component */}
      <div className="flex justify-center">
        <Video
          videoId="AOT7al3B3xg" // Replace with your actual video ID
          title="Tanam Farsooda Jan Para (Farsi Naat By Moulana Abdul Rehman Jami With Urdu Tazmeen By
                Muhaamid Akhtari)"
        />
      </div>
    </div>
  );
};

export default Home;
