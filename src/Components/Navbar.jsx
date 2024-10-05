import React from 'react';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-3xl font-bold">
          <h1>BookStore</h1>
        </div>
        
        <div className="flex items-center space-x-7">
          <form className="relative">
            <input
              type="search"
              placeholder="Search books..."
              className="w-64 py-2 pl-10 pr-4 text-sm text-gray-900 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Search className="w-4 h-4 text-gray-500" />
            </button>
          </form>
          
          <nav>
            <ul className="flex space-x-6 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Categories</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Checkout</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Login</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;