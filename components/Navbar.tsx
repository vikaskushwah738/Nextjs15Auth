import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-white font-bold text-xl">
          <Link href="/">
            Auth Demo
          </Link>
        </div>
        <div className="flex space-x-10">
          <Link href="/" className="text-gray-400 hover:text-white">
            Home
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-white">
            About
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-white">
            Contact
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-white">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
