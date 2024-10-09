import React from 'react';
import { Droplet, Brush, Sparkles, Eraser, Car, Truck } from 'lucide-react';

const services = [
  {
    name: 'Foam Car Wash',
    description: 'Gentle foam cleaning that lifts dirt without scratching your vehicle’s surface, perfect for maintaining your car’s shine.',
    icon: Droplet,
    message: "I'm interested in your Foam Car Wash service",
  },
  {
    name: 'Dry Clean',
    description: 'Thorough interior detailing that removes dust, stains, and odors, leaving your upholstery fresh and inviting.',
    icon: Brush,
    message: "I'd like to know more about your Dry Clean service",
  },
  {
    name: 'Polishing',
    description: 'Professional polishing to restore your car’s shine and enhance the clarity of the paint, making it look brand new.',
    icon: Sparkles,
    message: "I'm interested in your Car Polishing service",
  },
  {
    name: 'Rubbing',
    description: 'Gentle technique to remove scratches and swirls, ensuring a smooth finish without damaging the paint.',
    icon: Eraser,
    message: "I'd like to inquire about your Car Rubbing service",
  },
  {
    name: 'Detailing',
    description: 'Complete car care that cleans and protects both the interior and exterior for a like-new appearance.',
    icon: Car,
    message: "I'm interested in your Car Detailing service",
  },
  {
    name: 'Dealer Washing',
    description: 'Specialized washing services for dealerships, ensuring your fleet looks professional and well-maintained.',
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
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-primary p-6 rounded-2xl shadow-lg cursor-pointer flex flex-col items-center text-center bg-opacity-40 hover:bg-opacity-80 transition duration-300"
              onClick={() => handleServiceClick(service.message)}
            >
              <div className="bg-accent bg-opacity-20 p-3 rounded-full mb-4">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-lime-200">{service.description}</p>
              <button
                className="mt-2 text-sm text-lime-400 bg-transparent border-0 cursor-pointer"
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
