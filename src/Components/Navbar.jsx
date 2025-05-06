import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 transition-colors duration-300">
        <img src={assets.logo} alt="Logo" />

        <ul className="hidden md:flex gap-7">
          <li><a href="#Header" className="cursor-pointer hover:text-gray-600 text-white">Home</a></li>
          <li><a href="#About" className="cursor-pointer hover:text-gray-600 text-white">About</a></li>
          <li><a href="#Projects" className="cursor-pointer hover:text-gray-600 text-white">Projects</a></li>
          <li><a href="#Testimonials" className="cursor-pointer hover:text-gray-600 text-white">Testimonials</a></li>
        </ul>

        <button className="hidden md:block bg-white text-black px-8 py-2 rounded-full transition-colors duration-300">
          Sign up
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-6 py-2 bg-blue-500 text-white rounded-full"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="Menu icon"
        />
      </div>
    </div>
  );
};

export default Navbar;