import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  { name: 'Ridhman Singh', date: '4 weeks ago', text: '"Good car wash !"' },
  {
    name: 'Thejohn Karan',
    date: 'a year ago',
    text: '"Very hygienic place and service also,, Worth it.."',
  },
  {
    name: 'Milan Thind',
    date: 'a year ago',
    text: '"Best car wash in the area!"',
  },
  {
    name: 'Jasdeep Singh',
    date: 'a year ago',
    text: '"Satisfaction Guaranteed"',
  },
];

const Reviews: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-primary-dark bg-opacity-50 border-t-[1px] border-t-lime-800 border-opacity-20">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
        What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-primary bg-opacity-60 p-6 rounded-md shadow-lg"
            >
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-current" />
                ))}
              </div>
              <p className="text-sm mb-4 text-lime-200">{review.text}</p>
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