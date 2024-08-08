import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/bhililogo.png';

function Header() {
  return (
    <header className="bg-blue-950 shadow p-4 flex items-center">
      <Link to="/">
        <img src={logo} alt="Law Office Logo" className="h-20 w-auto" />
      </Link>
      <nav className="ml-auto flex space-x-4 md:space-x-16 text-lg md:text-3xl">
        <Link to="/about-us" className="text-blue-600 hover:text-blue-800">About Us</Link>
        <Link to="/services" className="text-blue-600 hover:text-blue-800">Services</Link>
        <Link to="/our-lawyers" className="text-blue-600 hover:text-blue-800">Our Lawyers</Link>
      </nav>
    </header>
  );
}

export default Header;
