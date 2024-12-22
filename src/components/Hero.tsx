import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 lg:pt-24">
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80"
            alt="Plumber at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professionaalne torulukuteenus Rakveres
            </h1>
            <p className="text-xl mb-8">
              Usaldusväärne ja kvaliteetne torulukuteenus. Oleme teie teenistuses 24/7 
              hädaolukordade puhul.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Võta ühendust
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;