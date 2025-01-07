// About Page

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen">
        {/* Header Section */}
        <header className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <motion.img
            src="/path-to-about-hero.jpg" // Replace with actual image
            alt="Porsche Design"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className="relative z-10 text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold uppercase tracking-wide"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              About Porsche
            </motion.h1>
            <motion.p
              className="mt-4 text-xl md:text-2xl text-gray-300"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Experience Innovation and Precision
            </motion.p>
          </div>
        </header>

        {/* Mission Section */}
        <section className="py-16 px-8">
          <motion.h2
            className="text-4xl font-semibold text-center mb-8 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Mission
          </motion.h2>
          <motion.div
            className="flex flex-col md:flex-row items-center md:items-start gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src="/path-to-mission-image.jpg" // Replace with actual image
              alt="Mission"
              className="w-full md:w-1/2 h-auto rounded-lg shadow-lg"
            />
            <div className="md:w-1/2">
              <p className="text-lg leading-relaxed text-gray-300">
                At Porsche, we strive to innovate and deliver exceptional
                performance that exceeds expectations. Our mission is to push
                the boundaries of luxury, speed, and engineering excellence.
              </p>
            </div>
          </motion.div>
        </section>

        {/* History Section */}
        <section className="bg-gray-900 py-16 px-8">
          <motion.h2
            className="text-4xl font-semibold text-center mb-8 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our History
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-2">
                  Milestone {index + 1}
                </h3>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer eget commodo dolor. Duis dapibus risus ut nisl
                  sollicitudin gravida.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 px-8 text-center">
          <motion.h2
            className="text-4xl font-semibold mb-6 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Have questions or want to learn more about Porsche? Contact us
            today!
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#d61f1f' }}
            className="px-6 py-3 text-lg font-medium bg-red-600 rounded-full hover:bg-red-700"
          >
            Contact Us
          </motion.button>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 py-6 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Porsche. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default About;
