import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Thejohn Karan',
    date: 'a year ago',
    text: '"Very hygienic place and service also,, Worth it.."',
  },
  {
    name: 'Milan Thind',
    date: 'a year ago',
    text: '"Best car wash in the area, very humble and genuine person. 👌"',
  },
  { name: 'Ridhman Singh', date: '4 weeks ago', text: '"Good car wash !"' },
  {
    name: 'Jasdeep Singh',
    date: 'a year ago',
    text: '"Satisfaction Guaranteed"',
  },
];

const Reviews: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-primary-dark bg-opacity-50">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-primary bg-opacity-60 p-5 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-current" />
                ))}
              </div>
              <p className="text-sm mb-3 text-lime-200">{review.text}</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-xs text-white">
                  {review.name}
                </span>
                <span className="text-xs text-lime-300">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
