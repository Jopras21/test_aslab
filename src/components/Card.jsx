import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ image, title, description, link }) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
      whileHover={{ scale: 1.03 }}
    >
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a
          href={link}
          className="inline-block px-6 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
        >
          Learn More
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
