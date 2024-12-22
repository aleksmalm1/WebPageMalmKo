import React from 'react';

const Map = () => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <div className="relative pb-[56.25%] h-0">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.19895368865!2d26.358881376030666!3d59.34632670966121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469375d31b907a87%3A0x7d3837c83f792031!2sLai%20t.%2028%2C%20Rakvere%2C%2044308%20L%C3%A4%C3%A4ne-Viru%20maakond!5e0!3m2!1set!2see!4v1691237769620!5m2!1set!2see"
          className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Map;