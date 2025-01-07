import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import porsche718Image from '/assets/718.jpeg';
import porsche911Image from '/assets/911.jpg';
import porscheTaycanImage from '/assets/taycan.webp';
import porschePanameraImage from '/assets/panmera.webp';

const porscheModels = [
  {
    title: 'Porsche 718',
    description: 'The Porsche 718 series combines thrilling mid-engine performance with cutting-edge technology. This mid-engine sports car offers precise handling, superior agility, and an iconic design. The 718 Boxster and Cayman are both available in several variants, with a range of powertrains including turbocharged four-cylinder engines and the electrifying performance of the 718 Spyder. Perfectly balanced, the 718 is designed for true driving enthusiasts who appreciate both comfort and track-ready dynamics.',
    images: [porsche718Image, porsche911Image, porscheTaycanImage],
    link: '/models/718',
  },
  {
    title: 'Porsche 911',
    description: 'The Porsche 911 is one of the most iconic sports cars in the world. First introduced in 1964, the 911 has evolved over the years, maintaining its unmistakable silhouette and rear-engine configuration. The 911 is renowned for its exhilarating driving experience, offering unmatched performance, superior handling, and a luxurious interior. Available in coupe, convertible, and Targa configurations, the 911 offers a range of models including the 911 Carrera, Turbo, and GT3, each designed to deliver extraordinary performance whether on the street or the track.',
    images: [porsche911Image, porsche718Image, porscheTaycanImage],
    link: '/models/911',
  },
  {
    title: 'Porsche Taycan',
    description: 'The Porsche Taycan is a groundbreaking all-electric sports sedan that marks a new era for Porsche. Known for its high-performance capabilities and luxurious features, the Taycan delivers instant torque, blistering acceleration, and exceptional driving dynamics, all while maintaining the comfort and refinement expected of a Porsche. With its futuristic design, advanced technology, and all-wheel drive powertrain, the Taycan is available in multiple variants including the Taycan 4S, Taycan Turbo, and Taycan Turbo S, offering varying levels of power and performance. The Taycan is a perfect combination of eco-friendliness and thrilling performance.',
    images: [porscheTaycanImage, porsche911Image, porschePanameraImage],
    link: '/models/taycan',
  },
  {
    title: 'Porsche Panamera',
    description: 'The Porsche Panamera is a luxury sports sedan that combines powerful performance with refined comfort. Designed for those who demand both exceptional driving dynamics and a sophisticated, high-tech interior, the Panamera offers the perfect balance of power, space, and luxury. With multiple powertrain options including V6, V8, and hybrid engines, the Panamera is capable of delivering exhilarating acceleration and top-tier handling. Whether you choose the standard Panamera, the Panamera 4, or the Panamera Turbo, every variant offers an unparalleled driving experience with advanced features, top-of-the-line materials, and cutting-edge technology. Ideal for long-distance journeys and track-day fun alike, the Panamera is truly a car that performs and pampers.',
    images: [porschePanameraImage, porsche911Image, porsche718Image],
    link: '/models/panamera',
  },
];


// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Models = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Models Section */}
      <motion.div
        className="px-8 py-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h1 className="text-5xl font-bold text-center mb-12 mt-16 text-gray-300 uppercase tracking-wider">
          Explore Our Porsche Models
        </h1>

        {porscheModels.map((model) => (
          <motion.section
            key={model.title}
            className="py-16 px-4 mb-8 border-b border-gray-800"
            variants={sectionVariants}
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-x-4">
              <div className="flex-1 md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-semibold text-gray-300 mb-4">{model.title}</h2>
                <p className="text-lg text-gray-400 mb-6">{model.description}</p>
                <motion.a
                  href={model.link}
                  className="px-6 py-3 bg-red-600 rounded-full text-white text-lg font-medium hover:bg-red-700 transition"
                  whileHover={{ scale: 1.05 }}
                >
                  Learn More
                </motion.a>
              </div>

              {/* Carousel for Images */}
              <div className="flex-1 md:w-1/2 mt-8 md:mt-0">
                <Carousel
                  infiniteLoop
                  autoPlay
                  interval={3000}
                  showThumbs={false}
                  showStatus={false}
                  dynamicHeight
                >
                  {model.images.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt={model.title} className="rounded-lg shadow-lg" />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </motion.section>
        ))}
      </motion.div>

      <Footer />
    </div>
  );
};

export default Models;
