import React from 'react';
import { Wrench } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Wrench className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Malm & Ko</span>
            </div>
            <p className="text-gray-400">
              Professionaalne torulukuteenus Rakveres ja selle ümbruses.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kiirlingid</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white">Teenused</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">Meist</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Kontakt</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Malm & Ko. Kõik õigused kaitstud.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;