import React from 'react';
import { PhoneCall } from 'lucide-react';

const EmergencyButton = () => {
  return (
    <a
      href="tel:+3725348816"
      className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors z-50 flex items-center space-x-2"
    >
      <PhoneCall className="h-6 w-6" />
      <span className="hidden md:inline">Hädaolukord</span>
    </a>
  );
};

export default EmergencyButton;