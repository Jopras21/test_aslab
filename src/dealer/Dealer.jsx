import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const DealerLocation = () => {
  return (
    <div className="bg-black text-white min-h-screen relative">
      {/* Hero Section with Video */}
      <section className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          src="/src/assets/video.mp4"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <Navbar />
        <div className="relative h-full flex items-center justify-center z-10">
          <div className="text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold uppercase tracking-wide"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}>
              Find a Dealer Near You
            </motion.h1>
            <motion.p
              className="mt-4 text-xl md:text-2xl text-gray-300"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}>
              Locate your nearest dealer and drive your dream today.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Dealer Map Section */}
      <section className="py-16 px-8">
        <h2 className="text-4xl font-semibold text-center mb-8 uppercase tracking-wider">
          Dealer Locations
        </h2>
        <div className="relative w-full h-96">
          {/* Google Map Embed */}
          <iframe
            title="Dealer Map"
            width="100%"
            height="100%"
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=dealer+locations"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default DealerLocation;
