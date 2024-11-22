// components/Video.tsx
import React from 'react';

interface VideoProps {
  videoId: string; // YouTube video ID
  title?: string;
}

const Video: React.FC<VideoProps> = ({ videoId, title }) => {
  const mp4DownloadLink = `https://www.ytmp3.cc/en13/convert/`; // Example conversion link
  const mp3DownloadLink = `https://www.ytmp3.cc/en13/convert/`; // Example conversion link

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full mt-8   "
          src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&controls=1&showinfo=0`}
          title={title}
          frameBorder="0"
          allowFullScreen
        />
      </div>
      {title && (
        <h3 className="mt-2 text-center text-lg font-semibold">{title}</h3>
      )}
      <div className="mt-2 flex justify-center space-x-4 mb-3">
        <a
          href={`${mp4DownloadLink}${videoId}`}
          className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download MP4
        </a>
        <a
          href={`${mp3DownloadLink}${videoId}`}
          className="inline-block px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download MP3
        </a>
      </div>
    </div>
  );
};

export default Video;
