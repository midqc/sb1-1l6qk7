import React from 'react';

const Hero: React.FC = () => {
  const phoneNumber = "+919915172910"; // Your phone number
  const message = "I'm interested in getting a website quickly."; // Updated custom message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

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
            className="bg-accent hover:bg-secondary transition duration-300 px-6 py-3 rounded-lg text-lg font-semibold text-primary-dark"
          >
            Explore Our Services
          </a>
        </div>

        {/* WhatsApp Link in one line */}
        <div className="translate-y-[8rem] flex items-center">
          <p className="text-lg mb-0">Need a website fast?</p>
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
