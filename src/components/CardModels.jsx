import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card'; 

// Import gambar
import porsche718Image from '/assets/718.jpeg';
import porsche911Image from '/assets/911.jpg';
import porscheTaycanImage from '/assets/taycan.webp';
import porschePanameraImage from '/assets/panmera.webp';

const porscheModels = [
  {
    title: 'Porsche 718',
    description: 'A mid-engine sports car, built for thrill and precision.',
    image: porsche718Image,  
    link: '/models/718', 
  },
  {
    title: 'Porsche 911',
    description: 'Iconic rear-engine performance that defines a generation.',
    image: porsche911Image,  
    link: '/models/911',
  },
  {
    title: 'Porsche Taycan',
    description: 'The future of electric driving with high-performance features.',
    image: porscheTaycanImage,  
    link: '/models/taycan',
  },
  {
    title: 'Porsche Panamera',
    description: 'A luxury sports sedan blending power and elegance.',
    image: porschePanameraImage,  
    link: '/models/panamera',
  },
];

const ModelsPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {porscheModels.map((model) => (
        <Card
          key={model.title}
          image={model.image}
          title={model.title}
          description={model.description}
          link={model.link}
        />
      ))}
    </div>
  );
};

export default ModelsPage;
