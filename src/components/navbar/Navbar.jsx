import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '/src/assets/logo.png';
import Time from './time.jsx';

const Navbar = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const navElement = document.getElementById('nav');
    if (navElement) {
      navElement.classList.remove('visible');
      setTimeout(() => {
        navElement.classList.add('visible');
      }, 1);
    }
    // Close dropdown and mobile menu when route changes
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-black text-white shadow-md fixed w-full z-50" id="nav">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 object-cover" />
          <span className="ml-3 text-2xl font-bold">Porsche</span>
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg transition hover:text-gray-400 ${isActive ? 'text-gray-400' : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                `text-lg transition hover:text-gray-400 ${isActive ? 'text-gray-400' : ''}`
              }
            >
              About Us
            </NavLink>
          </li>

          {/* Dropdown Menu for Models */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-lg transition hover:text-gray-400 focus:outline-none"
            >
              Models
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-black text-white w-48 shadow-lg rounded-md">
                <li>
                  <NavLink
                    to="/model-718"
                    className="block px-4 py-2 text-lg transition hover:bg-gray-700"
                  >
                    Porsche 718
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/model-911"
                    className="block px-4 py-2 text-lg transition hover:bg-gray-700"
                  >
                    Porsche 911
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/model-panamera"
                    className="block px-4 py-2 text-lg transition hover:bg-gray-700"
                  >
                    Porsche Panamera
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/model-macan"
                    className="block px-4 py-2 text-lg transition hover:bg-gray-700"
                  >
                    Porsche Macan
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li>
            <NavLink
              to="/Dealer"
              className={({ isActive }) =>
                `text-lg transition hover:text-gray-400 ${isActive ? 'text-gray-400' : ''}`
              }
            >
              Dealer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Feedback"
              className={({ isActive }) =>
                `text-lg transition hover:text-gray-400 ${isActive ? 'text-gray-400' : ''}`
              }
            >
              Feedback
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            type="button"
            className="text-gray-400 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-8 6h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-black px-4 py-2 space-y-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block text-lg py-2 transition hover:text-gray-400 ${isActive ? 'text-gray-400' : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                `block text-lg py-2 transition hover:text-gray-400 ${isActive ? 'text-gray-400' : ''}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <button
              onClick={toggleDropdown}
              className="block text-lg py-2 text-left w-full transition hover:text-gray-400 focus:outline-none"
            >
              Models
            </button>
            {isDropdownOpen && (
              <ul className="ml-4">
                <li>
                  <NavLink
                    to="/model-718"
                    className="block py-2 text-lg transition hover:text-gray-400"
                  >
                    Porsche 718
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/model-911"
                    className="block py-2 text-lg transition hover:text-gray-400"
                  >
                    Porsche 911
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/model-panamera"
                    className="block py-2 text-lg transition hover:text-gray-400"
                  >
                    Porsche Panamera
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/model-macan"
                    className="block py-2 text-lg transition hover:text-gray-400"
                  >
                    Porsche Macan
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink
              to="/Dealer"
              className={({ isActive }) =>
                `block text-lg py-2 transition hover:text-gray-400 ${isActive ? 'text-gray-400' : ''}`
              }
            >
              Dealer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Feedback"
              className={({ isActive }) =>
                `block text-lg py-2 transition hover:text-gray-400 ${isActive ? 'text-gray-400' : ''}`
              }
            >
              Feedback
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
