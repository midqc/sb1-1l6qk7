import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const gradientStyle = {
    background: `linear-gradient(135deg, 
      hsl(${120 + scrollProgress * 0.6}, 30%, 5%) 0%, 
      hsl(${140 + scrollProgress * 0.6}, 30%, 3%) 100%)`,
  };

  return (
    <div className="min-h-screen text-white" style={gradientStyle}>
      <Navbar isVisible={isNavbarVisible} />
      <Hero />
      <Services />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;