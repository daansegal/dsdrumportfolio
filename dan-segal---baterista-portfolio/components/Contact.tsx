
import React from 'react';
import WhatsappIcon from './icons/WhatsappIcon';
import InstagramIcon from './icons/InstagramIcon';
import YoutubeIcon from './icons/YoutubeIcon';

const Contact: React.FC = () => {
  // To change the social links, update the hrefs below.
  const whatsappLink = 'https://wa.me/5491132049478';
  const instagramLink = 'https://instagram.com/daansegal'; 
  const youtubeLink = 'https://youtube.com/your-channel';   // <-- Change this

  return (
    <section id="contacto" className="py-20 md:py-32 bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">¿Tenés un proyecto en mente?</h2>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 text-lg"
        >
          <WhatsappIcon className="w-6 h-6" />
          <span>Hablemos</span>
        </a>

        <div className="mt-16">
          <p className="text-xl text-gray-300 mb-6">Seguime en mis redes:</p>
          <div className="flex justify-center items-center space-x-8">
            <a 
              href={instagramLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram" 
              className="text-gray-400 hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
            >
              <InstagramIcon className="w-8 h-8" />
            </a>
            <a 
              href={youtubeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube"
              className="text-gray-400 hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
            >
              <YoutubeIcon className="w-8 h-8" />
            </a>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp"
              className="text-gray-400 hover:text-yellow-300 transition-all duration-300 transform hover:scale-110"
            >
              <WhatsappIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
