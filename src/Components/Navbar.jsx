import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const Navbar = ({ onSearch, onCategory}) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const { isLogin, user } = useAuth();
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    onCategory(selectedCategory);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); 
    onSearch(search); 
  };

  return (
    <nav className="bg-slate-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-5">
        <div className="text-3xl font-bold font-5">
          <h1>Bookart</h1>
        </div>

        <div className="flex items-center space-x-7">
          <form className="relative" onSubmit={handleSearchSubmit}>
            <input
              type="search"
              placeholder="Search books..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                onSearch(e.target.value);   
              }}
              className="w-64 py-2 pl-10 pr-4 text-sm text-gray-900 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Search className="w-4 h-4 text-gray-500" />
            </button>
          </form>

          <nav>
            <ul className="flex space-x-6 text-sm font-medium">
              <li className="relative">
                <select
                  value={category}
                  onChange={handleCategoryChange}
                  className="bg-transparent border-blue-300 text-sm font-medium hover:text-blue-400 transition focus:outline-none focus:ring-0"
                >
                  <option className="bg-slate-800 text-white p-4" value="">Categories</option>
                  <option className="bg-slate-800 text-white p-4" value="Contemporary Fiction">Contemporary Fiction</option>
                  <option className="bg-slate-800 text-white p-4" value="Classic Literature">Classic Literature</option>
                  <option className="bg-slate-800 text-white p-4" value="Mystery/Thriller">Mystery/Thriller</option>
                  <option className="bg-slate-800 text-white p-4" value="Science Fiction/Fantasy">Science Fiction/Fantasy</option>
                  <option className="bg-slate-800 text-white p-4" value="Non-fiction">Non-fiction</option>
                </select>
              </li> 
              <li className="hover:text-blue-400 transition" onClick={() => navigate('/')}>Home</li>
              <li className="hover:text-blue-400 transition" onClick={() => navigate('/about')}>About</li>
              <li className="hover:text-blue-400 transition" onClick={() => navigate('/cart')}>Checkout</li>

              {isLogin && user.role === 'admin' && (
                <li className="hover:text-blue-400 transition" onClick={() => navigate('/admin')}>Admin</li>
              )}
              {isLogin ? <li onClick={() => navigate('/login')} className="hover:text-blue-400 transition">Logout</li>
                  :<li onClick={() => navigate('/login')} className="hover:text-blue-400 transition">Login</li>
              }
              {/* <li>
                <a onClick={() => navigate('/login')} className="hover:text-blue-400 transition">Login</a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
