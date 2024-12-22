import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Mari Tamm',
    text: 'Väga professionaalne teenus. Kiire reageerimine ja põhjalik töö.',
    rating: 5
  },
  {
    name: 'Jüri Kask',
    text: 'Suurepärane teenindus ja mõistlikud hinnad. Soovitan soojalt!',
    rating: 5
  },
  {
    name: 'Anne Lepp',
    text: 'Usaldusväärsed ja täpsed. Lahendavad probleemid kiiresti.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Klientide arvustused</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;