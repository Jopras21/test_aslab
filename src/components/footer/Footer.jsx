import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 z-20">
      <div className="container mx-auto px-8 md:px-16">
        {/* Logo and Branding */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-6 md:mb-0">
            <img 
              src="/src/assets/logo.png" // Replace with the Porsche logo path
              alt="Porsche Logo" 
              className="w-24 h-auto"
            />
            <h2 className="ml-4 text-2xl font-bold tracking-wide uppercase">Porsche</h2>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-6">
          <a href="/home" className="text-gray-400 hover:text-white transition">Home</a>
            <a href="/about" className="text-gray-400 hover:text-white transition">About Us</a>
            <a href="/models" className="text-gray-400 hover:text-white transition">Models</a>
            <a href="/dealer" className="text-gray-400 hover:text-white transition">Dealer</a>
            <a href="/Feedback" className="text-gray-400 hover:text-white transition">Feedback</a>
          </nav>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Social Media and Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="/src/assets/facebook.webp" 
                alt="Facebook" 
                className="w-6 h-6 hover:opacity-80 transition"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="/src/assets/twitter.webp"
                alt="Twitter" 
                className="w-6 h-6 hover:opacity-80 transition"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="/src/assets/instagram.png"
                alt="Instagram" 
                className="w-6 h-6 hover:opacity-80 transition"
              />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="/src/assets/linkedin.webp"
                alt="LinkedIn" 
                className="w-6 h-6 hover:opacity-80 transition"
              />
            </a>
          </div>

          <div className="text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Porsche. All rights reserved.</p>
            <p>Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
