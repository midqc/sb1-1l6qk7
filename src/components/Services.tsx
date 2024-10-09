import React from 'react';
import { Droplet, Brush, Sparkles, Eraser, Car, Truck } from 'lucide-react';

const services = [
  {
    name: 'Foam Car Wash',
    description: 'Gentle yet effective cleaning',
    icon: Droplet,
    message: "I'm interested in your Foam Car Wash service",
  },
  {
    name: 'Dry Clean',
    description: 'Spotless interior detailing',
    icon: Brush,
    message: "I'd like to know more about your Dry Clean service",
  },
  {
    name: 'Polishing',
    description: "Restore your car's shine",
    icon: Sparkles,
    message: "I'm interested in your Car Polishing service",
  },
  {
    name: 'Rubbing',
    description: 'Remove scratches and swirls',
    icon: Eraser,
    message: "I'd like to inquire about your Car Rubbing service",
  },
  {
    name: 'Detailing',
    description: 'Comprehensive car care',
    icon: Car,
    message: "I'm interested in your Car Detailing service",
  },
  {
    name: 'Dealer Washing',
    description: 'Specialized fleet services',
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
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-primary bg-opacity-40 p-6 rounded-2xl shadow-lg cursor-pointer flex flex-col items-center text-center"
              onClick={() => handleServiceClick(service.message)}
            >
              <div className="bg-accent bg-opacity-20 p-3 rounded-full mb-4">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-lime-200">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
