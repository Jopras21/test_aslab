import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar/Navbar';


const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar/>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.img
          src="/path-to-porsche-image.jpg" // Replace with the actual image path
          alt="Porsche Car"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold uppercase tracking-wide"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}>
            Drive Your Dream
          </motion.h1>
          <motion.p
            className="mt-4 text-xl md:text-2xl text-gray-300"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}>
            Experience luxury and performance like never before.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#d61f1f' }}
            className="mt-8 px-6 py-3 text-lg font-medium bg-red-600 rounded-full hover:bg-red-700">
            Discover More
          </motion.button>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-16 px-8">
        <h2 className="text-4xl font-semibold text-center mb-8 uppercase tracking-wider">
          Featured Models
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((model, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}>
              <img
                src={`/path-to-model${model}.jpg`} // Replace with actual image paths
                alt={`Model ${model}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">Porsche Model {model}</h3>
                <p className="text-gray-400 mb-4">
                  The ultimate blend of speed, style, and sophistication.
                </p>
                <button className="px-4 py-2 text-sm font-medium bg-red-600 rounded-full hover:bg-red-700">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Porsche. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;