import React from 'react';
import { Droplet, Brush, Sparkles, Eraser, Car, Truck } from 'lucide-react';

const services = [
  {
    name: 'Foam Car Wash',
    description: 'Gentle foam cleaning that lifts dirt without scratching.',
    icon: Droplet,
    message: "I'm interested in your Foam Car Wash service",
  },
  {
    name: 'Dry Clean',
    description: 'Thorough interior detailing that removes dust and odors.',
    icon: Brush,
    message: "I'd like to know more about your Dry Clean service",
  },
  {
    name: 'Polishing',
    description: 'Restores shine and improves paint clarity for a vibrant, polished finish.',
    icon: Sparkles,
    message: "I'm interested in your Car Polishing service",
  },
  {
    name: 'Rubbing',
    description: 'Removes scratches and swirls for a smooth finish.',
    icon: Eraser,
    message: "I'd like to inquire about your Car Rubbing service",
  },
  {
    name: 'Detailing',
    description: 'Comprehensive cleaning and protection for your car.',
    icon: Car,
    message: "I'm interested in your Car Detailing service",
  },
  {
    name: 'Dealer Washing',
    description: 'Professional washing services for dealerships.',
    icon: Truck,
    message: "I'd like to know more about your Dealer Washing service",
  },
];

const Services: React.FC = () => {
  const handleServiceClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919646868859?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          What We Offer
        </h2>
        {/* Adjusted the gap to 'gap-4' for smaller spacing */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-primary p-6 rounded-md shadow-lg cursor-pointer flex flex-col items-center text-center bg-opacity-40 hover:bg-opacity-80 transition duration-300"
              onClick={() => handleServiceClick(service.message)}
            >
              <div className="bg-accent bg-opacity-20 p-3 rounded-full mb-4">
                <service.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-lime-200">{service.description}</p>
              <button
                className="mt-2 text-sm text-lime-400 bg-transparent border-0 cursor-pointer font-medium"
              >
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
