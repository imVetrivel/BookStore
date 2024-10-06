import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({onSearch}) => {

  const[search,setSearch]=useState("");

  const navigate=useNavigate();

  return (
    <nav className="bg-slate-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-3xl font-bold font-5">
          <h1>BookStore</h1>
        </div>
        
        <div className="flex items-center space-x-7">
          <form className="relative" onSubmit={()=>{onSearch(search)}}>
            <input
              type="search"
              placeholder="Search books..."
              value={search}
              onChange={(e)=>{setSearch(e.target.value),onSearch(search)}}
              className="w-64 py-2 pl-10 pr-4 text-sm text-gray-900 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Search className="w-4 h-4 text-gray-500" />
            </button>
          </form>
          
          <nav>
            <ul className="flex space-x-6 text-sm font-medium">
              <li className="hover:text-blue-400 transition" onClick={()=>navigate('/')}>Home</li>
              <li><a href="#" className="hover:text-blue-400 transition">Categories</a></li>
              <li className="hover:text-blue-400 transition" onClick={()=>navigate('/cart')}>Checkout</li>
              <li><a href="#" className="hover:text-blue-400 transition">Login</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;