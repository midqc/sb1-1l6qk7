import React from 'react';

const Hero: React.FC = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 text-center text-white"
      style={{
        backgroundImage: `url('/noise.jpg'), linear-gradient(to bottom, rgba(21, 36, 13, 0.3), rgba(15, 26, 10, 0.8))`, // Adjusted gradient with opacity
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',  // Try using 'overlay' instead of 'multiply' for a lighter blend
        backgroundColor: '#0a0f00',  // Custom Tailwind background color
      }}
    >
      <div>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Premium Car Wash Services
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-lime-200 max-w-2xl mx-auto">
          Experience the ultimate car care at Thind Car Wash
        </p>
        <a
          href="#services"
          className="bg-accent hover:bg-secondary transition duration-300 px-6 py-3 rounded-lg text-lg font-semibold text-primary-dark"
        >
          Explore Our Services
        </a>
      </div>
    </div>
  );
};

export default Hero;
