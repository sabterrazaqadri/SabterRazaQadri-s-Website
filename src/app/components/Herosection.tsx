"use client";
import Image from 'next/image';
import srq7 from './srq7.jpg';

const Herosection = () => {
  return (
    <div className='relative'>
      <div className="w-full h-[400px] sm:h-[600px] md:h-[800px] relative">
        <div className="w-full h-full absolute inset-0 bg-cover bg-center">
          <Image src={srq7} alt='Sabter Raza Qadri' layout="fill" objectFit="cover" className="blur-sm drop-shadow-lg" />
        </div>

        {/* Text Section */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-sans font-bold">
          <h1 className="text-5xl sm:text-6xl md:text-9xl animate-fadeInUp delay-1">Sabter</h1>
          <h1 className="text-4xl sm:text-5xl md:text-8xl animate-fadeInUp delay-2">Raza</h1>
          <h1 className="text-2xl sm:text-4xl md:text-6xl animate-fadeInUp delay-3">Qadri</h1>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }
        .delay-1 { animation-delay: 0.3s; }
        .delay-2 { animation-delay: 0.6s; }
        .delay-3 { animation-delay: 0.9s; }
      `}</style>
    </div>
  );
};

export default Herosection;
