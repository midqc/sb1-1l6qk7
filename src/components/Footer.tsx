import React from 'react';
import { MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Visit Us
        </h2>
        <p className="text-lg mb-6 text-lime-200 max-w-2xl mx-auto">
          Plot No. 250, Mattaur, Sector 70, Sahibzada Ajit Singh Nagar, Punjab
          160070
        </p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Thind%20Car%20Wash%2C%20plot%20no%20250%2C%20Mattaur%2C%20Sector%2070%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20160070"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-accent hover:bg-secondary transition duration-300 px-6 py-3 rounded-lg text-lg font-semibold mb-8 text-primary-dark"
        >
          <MapPin className="mr-2" size={20} />
          Get Directions
        </a>
        <p className="text-sm text-lime-300">
          © {currentYear} Thind Car Wash. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
