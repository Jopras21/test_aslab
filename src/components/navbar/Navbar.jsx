import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '/src/assets/logo.png';
import Time from './time.jsx';

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    const navElement = document.getElementById('nav');
    if (navElement) {
      navElement.classList.remove('visible');
      setTimeout(() => {
        navElement.classList.add('visible');
      }, 1);
    }
  }, [location]);

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
      <ul className="md:hidden mt-2 bg-black px-4 py-2 space-y-2">
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
            to="/History"
            className={({ isActive }) =>
              `block text-lg py-2 transition hover:text-gray-400 ${isActive ? 'text-gray-400' : ''}`
            }
          >
            History
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
      </ul>
    </div>
  );
};

export default Navbar;
