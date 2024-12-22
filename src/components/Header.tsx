import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="Malm & Ko Logo" 
              className="h-12 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-600">Kodu</a>
            <a href="#services" className="hover:text-blue-600">Teenused</a>
            <a href="#about" className="hover:text-blue-600">Meist</a>
            <a href="#contact" className="hover:text-blue-600">Kontakt</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#home" className="block hover:text-blue-600">Kodu</a>
            <a href="#services" className="block hover:text-blue-600">Teenused</a>
            <a href="#about" className="block hover:text-blue-600">Meist</a>
            <a href="#contact" className="block hover:text-blue-600">Kontakt</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;