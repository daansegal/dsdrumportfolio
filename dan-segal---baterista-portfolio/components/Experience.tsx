
import React, { useState, useEffect, useRef } from 'react';

const experiences = [
  "Auténtika - Demeter - TIC Experience - NEMPLA (Ensamble Neo-Soul) - Gabo X"
];

const Experience: React.FC = () => {
  // To replace the background image, change the URL below.
  const backgroundImageUrl = 'https://i.postimg.cc/qMydLg19/fotito-2-0.jpg';
  const [scale, setScale] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      const elementVisible = scrollY + viewportHeight > sectionTop && scrollY < sectionTop + sectionHeight;

      if (elementVisible) {
        // Calculate scroll progress relative to the component's visibility in the viewport
        const scrollProgress = (scrollY + viewportHeight - sectionTop) / (sectionHeight + viewportHeight);
        // Apply a subtle zoom effect. Starts at 1 and scales up to 1.1
        const newScale = 1 + scrollProgress * 0.1;
        setScale(Math.min(newScale, 1.1)); // Cap the zoom
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="experiencia"
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0 transition-transform duration-300 ease-out"
        style={{ 
          backgroundImage: `url('${backgroundImageUrl}')`,
          transform: `scale(${scale})`
        }}
      ></div>
      <div className="absolute inset-0 bg-black/75 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Experiencia</h2>
        <div className="max-w-4xl mx-auto text-center">
          <ul className="space-y-4">
            {experiences.map((exp, index) => (
              <li key={index} className="text-3xl md:text-4xl text-white font-light tracking-wider">
                {exp}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
