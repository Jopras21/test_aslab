import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import ModelsPage from '../components/CardModels';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
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
        <div className="relative h-full flex flex-col items-center justify-center z-10 text-center">
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
            Experience luxury, innovation, and performance with Porsche.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#d61f1f' }}
            className="mt-8 px-6 py-3 text-lg font-medium bg-red-600 rounded-full hover:bg-red-700">
            Discover More
          </motion.button>
        </div>
      </section>

      {/* Featured Cards Section */}
      <section className="py-16 px-8">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-4xl font-semibold text-center mb-8 uppercase tracking-wider">
            Featured Models
          </h2>
          <ModelsPage />
        </motion.div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-8 bg-gray-900">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-4xl font-semibold text-center mb-8 uppercase tracking-wider">
            Our Newest Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <motion.img
                src="/src/assets/tech.jpg" // Replace with actual image URL
                alt="Porsche Technology"
                className="w-full h-auto rounded-lg shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <div className="flex flex-col justify-center">
              <motion.p
                className="text-lg text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Porsche is at the forefront of automotive innovation, continually enhancing its vehicles with cutting-edge technologies. From the groundbreaking 800V charging system in the Taycan, enabling ultra-fast charging times, to the advanced Porsche Dynamic Chassis Control Sport (PDCC) in the Panamera, which optimizes handling and stability, Porsche ensures an unparalleled driving experience. In addition, their driver assistance systems, such as Adaptive Cruise Control and Lane Keeping Assist, elevate safety while maintaining the thrill of performance. Porsche’s commitment to electrification is showcased in the Mission R, a fully electric racing car that embodies the future of Porsche’s performance capabilities.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: '#1d4ed8' }}
                className="px-6 py-3 text-lg font-medium bg-blue-600 rounded-full hover:bg-blue-700">
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-8 bg-black">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-4xl font-semibold text-center mb-8 uppercase tracking-wider">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 mb-4">
                "Driving a Porsche is an unparalleled experience of power, luxury, and innovation."
              </p>
              <h4 className="text-white font-bold">- John Doe</h4>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 mb-4">
                "The precision and engineering in every Porsche make it a masterpiece on wheels."
              </p>
              <h4 className="text-white font-bold">- Jane Smith</h4>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 mb-4">
                "From the moment you start the engine, you know it's not just a car; it's a Porsche."
              </p>
              <h4 className="text-white font-bold">- Alex Lee</h4>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
