import React from 'react';

const services = [
  'Veevarustussüsteemide ehitus',
  'Veetorustike ehitus, veetorustikud',
  'Kanalisatsioonisüsteemide ehitus',
  'Kanalisatsioonitorustike ehitus',
  'Torutööd, torustikud, torustike ehitus',
  'Torustike kaamerauuringud',
  'Ummistuste likvideerimine, ummistused'
];

const ServicesList = () => {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold mb-6">Meie teenuste nimekiri</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <p>{service}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;