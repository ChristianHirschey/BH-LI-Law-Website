import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/bhililogo.png';

// FIXME: Header is wacky when mobile screens (specifically phones) are used

function Header() {
  return (
    <header className="bg-blue-950 shadow p-2 flex flex-wrap items-center sticky top-0 z-50">
      <Link to="/" className="flex-shrink-0">
        <img src={logo} alt="Law Office Logo" className="h-20 w-auto ml-40" />
      </Link>
      <div className="flex flex-col items-start p-1 ml-4">
        <h2 className='text-lg md:text-2xl text-white p-1'>Baaden & Hirschey</h2>
        <h3 className='text-xs md:text-sm text-white p-1'>Divorce & Family Court Lawyers</h3>
      </div>
      <nav className='ml-auto flex space-x-4 md:space-x-16 text-lg md:text-2xl mr-40'>
        <Link to="/people" className="text-white hover:text-slate-400">People</Link>
        <Link to="/practice" className="text-white hover:text-slate-400">Practice</Link>
        <Link to="/" className="text-white hover:text-slate-400">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
