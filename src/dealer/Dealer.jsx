import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const Dealer = () => {
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
              transition={{ duration: 1 }}
            >
              Find a Dealer Near You
            </motion.h1>
            <motion.p
              className="mt-4 text-xl md:text-2xl text-gray-300"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Locate your nearest dealer and drive your dream today.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Dealer Map Section */}
      <section className="py-16 px-8">
        <motion.h2
          className="text-4xl font-semibold text-center mb-8 uppercase tracking-wider"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Dealer Locations
        </motion.h2>
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                className="gmap_iframe w-full h-[500px] border-0"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=800&amp;hl=en&amp;q=indonesia&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
        <motion.p
          className="mt-8 text-center text-gray-400 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Use the map above to locate the nearest dealer in your region. Simply click on the location markers to view details, operating hours, and contact information.
        </motion.p>
      </section>

      {/* Dealer Services Section */}
      <section className="py-16 px-8 bg-gray-900">
        <motion.h2
          className="text-4xl font-semibold text-center mb-8 uppercase tracking-wider"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Services We Offer
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Test Drive</h3>
            <p className="text-gray-400">
              Experience the thrill of driving our latest models. Book a test drive at your nearest dealer today.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">After Sales Service</h3>
            <p className="text-gray-400">
              Enjoy comprehensive after-sales support, including maintenance, repair, and spare parts.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Consultation</h3>
            <p className="text-gray-400">
              Our experts are here to help you choose the perfect car for your needs and lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-8">
        <div className="text-center">
          <motion.h2
            className="text-4xl font-semibold uppercase tracking-wider mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.button
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold text-lg uppercase tracking-wide shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Book Your Test Drive
          </motion.button>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Dealer;
