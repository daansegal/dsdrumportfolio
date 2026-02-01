
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Videos from './components/Videos';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-200 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Videos />
        <Contact />
      </main>
    </div>
  );
};

export default App;
