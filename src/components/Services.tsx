import React from 'react';

const services = [
  {
    icon: '🔧',
    title: 'Veevarustussüsteemide ehitus',
    description: 'Täielik veevarustussüsteemide paigaldus ja hooldus'
  },
  {
    icon: '🚰',
    title: 'Veetorustike ehitus',
    description: 'Professionaalne veetorustike paigaldus'
  },
  {
    icon: '🏗️',
    title: 'Kanalisatsioonisüsteemide ehitus',
    description: 'Kaasaegsed lahendused kanalisatsioonisüsteemidele'
  },
  {
    icon: '🔍',
    title: 'Torustike kaamerauuringud',
    description: 'Täpne diagnostika kaamera abil'
  },
  {
    icon: '⚡',
    title: 'Ummistuste likvideerimine',
    description: 'Kiire ja efektiivne ummistuste kõrvaldamine'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meie teenused</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;