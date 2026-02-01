
import React, { useState, useEffect } from 'react';
import ArrowDownIcon from './icons/ArrowDownIcon';

const Hero: React.FC = () => {
  // To replace the background image, change the URL below.
  const backgroundImageUrl = 'https://i.postimg.cc/pLHstdR5/fotito.jpg';
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newZoom = 1 + scrollY / 2000; // Adjust the divisor to change zoom speed
      setZoom(newZoom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section
      id="inicio"
      className="h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image Container */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          transform: `scale(${zoom})`,
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Content Container */}
      <div className="relative z-20 w-full h-full">
        <div className="absolute bottom-10 left-10 text-left md:bottom-20 md:left-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight">
            Dan Segal
          </h1>
          <p className="mt-2 text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
            Baterista
          </p>
        </div>

        <a
          href="#sobre-mi"
          onClick={handleScrollTo}
          className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-pulse-slow"
          aria-label="Scroll down"
        >
          <ArrowDownIcon className="w-10 h-10" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
