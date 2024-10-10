import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false); // State to control visibility
  const phoneNumber = "+919915172910"; // Your phone number
  const message = "I would like to discuss having a website developed. What options do you offer?";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Set visibility to true after the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0); // Optional delay to allow for transition effect

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 text-center text-white"
      style={{
        backgroundImage: `url('/noise.jpg'), linear-gradient(to bottom, rgba(21, 36, 13, 0.3), rgba(15, 26, 10, 0.8))`, // Adjusted gradient with opacity
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'darken',  // Try using 'overlay' instead of 'multiply' for a lighter blend
        backgroundColor: 'rgba(10, 15, 0, 0.8)',  // RGBA value with 0.8 opacity
        opacity: isVisible ? 1 : 0,  // Apply opacity based on visibility state
        transition: 'opacity 600ms ease-in'  // Slower fade transition
      }}
    >
      <div className="flex flex-col items-center">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Premium Car Wash Services
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-lime-200 max-w-2xl mx-auto">
            Experience the ultimate car care at Thind Car Wash
          </p>
          <a
            href="#services"
            className="bg-accent hover:bg-secondary transition duration-300 px-6 py-3 rounded-sm text-lg font-semibold text-primary-dark"
          >
            Explore Our Services
          </a>
        </div>

        {/* WhatsApp Link in one line */}
        <div className="relative top-32 flex flex-col items-center opacity-20 hover:opacity-60 transition duration-300">
          <p className="text-lg mb-0">Need a website?</p>
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer" // Ensures security when opening new tabs
            className="underline text-lime-200 hover:text-lime-300 ml-2" // Added margin left for spacing
          >
            Click here to get started.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
