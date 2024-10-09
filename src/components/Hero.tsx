import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 text-center text-white">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
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
