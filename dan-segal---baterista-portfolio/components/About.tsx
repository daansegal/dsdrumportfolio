
import React from 'react';

const About: React.FC = () => {
  // To replace the portrait photo, change the URL in the src attribute below.
  const portraitImageUrl = 'https://i.postimg.cc/XYf9KcM9/7-1.jpg';
  
  return (
    <section id="sobre-mi" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Sobre Mí</h2>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2 lg:w-3/5 text-lg text-gray-300 leading-relaxed space-y-6">
            <p>
              Desde los tres años la música es una parte fundamental de mi vida. Estudio batería desde los seis años y tuve el privilegio de formarme con grandes maestros: Joaquín Bonazzola, Santiago “Tato” Ortolá, Santiago Sánchez Comes y actualmente sigo formándome con Marcelo Baraj. Además, me encuentro cursando la carrera de Músico Profesional en la Escuela de Música Contemporánea —EMC—. 
            </p>
            <p>
              A lo largo de mi recorrido participé en diversos proyectos, tanto como integrante estable como en calidad de sesionista, aportando mi musicalidad, compromiso y visión a cada uno de ellos.
            </p>
          </div>
          <div className="md:w-1/2 lg:w-2/5">
            <div className="aspect-square rounded-full overflow-hidden shadow-2xl ring-4 ring-gray-700/50">
                <img 
                    src={portraitImageUrl} 
                    alt="Dan Segal" 
                    className="w-full h-full object-cover" 
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
