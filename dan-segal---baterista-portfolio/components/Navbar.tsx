
import React, { useState, useEffect } from 'react';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';

const navLinks = [
  { href: '#sobre-mi', label: 'Sobre Mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#videos', label: 'Escuchá' },
  { href: '#contacto', label: 'Contacto' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleScrollTo(e);
    setIsOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a 
            href="#inicio" 
            onClick={handleScrollTo} 
            className="text-xl font-bold tracking-wider text-white transition-all duration-300 inline-block hover:text-yellow-300 hover:scale-110"
          >
            DAN SEGAL
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleScrollTo} className="text-gray-300 hover:text-yellow-300 transition-all duration-300 hover:font-bold">
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none z-[61]" aria-label="Toggle menu">
              {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-gray-900 z-[60] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
         <div className="flex justify-end p-6 py-7">
            <button onClick={() => setIsOpen(false)} className="text-white focus:outline-none" aria-label="Close menu">
               <XIcon className="w-6 h-6" />
            </button>
         </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-20">
           {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleMobileLinkClick} className="text-gray-300 hover:text-yellow-300 transition-colors duration-300 text-3xl font-bold my-4 py-2">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
