
import React, { useState } from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';

// To add, remove, or change videos, edit this array.
const videoData = [
  { id: 'dQw4w9WgXcQ', title: 'Video Título 1' },
  { id: '3tmd-ClpJxA', title: 'Video Título 2' },
  { id: 'o-YBDTqX_ZU', title: 'Video Título 3' },
];

const Videos: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstVideo = currentIndex === 0;
    const newIndex = isFirstVideo ? videoData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastVideo = currentIndex === videoData.length - 1;
    const newIndex = isLastVideo ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const currentVideo = videoData[currentIndex];

  return (
    <section id="videos" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Escuchá mi Trabajo</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
             {/* Desktop Arrows */}
            <button
              onClick={goToPrevious}
              className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-20 p-2 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-all text-white z-10 transform hover:scale-110"
              aria-label="Video anterior"
            >
              <ArrowLeftIcon className="w-10 h-10" />
            </button>
            <button
              onClick={goToNext}
              className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-20 p-2 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-all text-white z-10 transform hover:scale-110"
              aria-label="Siguiente video"
            >
              <ArrowRightIcon className="w-10 h-10" />
            </button>
            
            {/* Video Player */}
            <div className="w-full aspect-video bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <iframe
                key={currentVideo.id} // Add key to force re-render on video change
                src={`https://www.youtube.com/embed/${currentVideo.id}`}
                title={currentVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          
          {/* Video Info */}
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-semibold text-white">{currentVideo.title}</h3>
            <p className="text-gray-400 mt-2 text-lg">{currentIndex + 1} / {videoData.length}</p>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center justify-center gap-8 mt-6">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-all text-white transform hover:scale-110"
              aria-label="Video anterior"
            >
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-all text-white transform hover:scale-110"
              aria-label="Siguiente video"
            >
              <ArrowRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;