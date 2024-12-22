import React, { useState, useEffect } from 'react';

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80",
    title: "Projekt 1"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80",
    title: "Projekt 2"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1631641551473-fbe46919289a?auto=format&fit=crop&q=80",
    title: "Projekt 3"
  }
];

const ProjectGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
      <img
        src={projects[currentIndex].image}
        alt={projects[currentIndex].title}
        className="w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={handlePrevious}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
        >
          &#8594;
        </button>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;