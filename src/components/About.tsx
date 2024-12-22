import React from 'react';
import { CheckCircle } from 'lucide-react';
import ProjectGallery from './ProjectGallery';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <ProjectGallery />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Meist</h2>
            <p className="text-gray-600 mb-6">
              Malm & Ko on usaldusväärne torulukuteenuste pakkuja Rakveres ja selle 
              ümbruses. Meie meeskond on pühendunud pakkuma kvaliteetset teenust ja 
              kiiret reageerimist teie torulukuprobleemidele.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                <span>Üle 15 aasta kogemust</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                <span>Litsentseeritud ja sertifitseeritud</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                <span>24/7 hädaolukorra teenus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;