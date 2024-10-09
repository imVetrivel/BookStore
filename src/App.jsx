import { useEffect, useState } from 'react';
import './assets/css/core.css';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import Home from './Components/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import Admin from './Components/Admin';
import About from './Components/About';
import { AuthProvider } from './context/AuthContext.jsx';
import axios from 'axios';

function App() {
  const location = useLocation();
  const hidebar = location.pathname === '/' || location.pathname === '/register';

  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLoading, setIsLoading] = useState(true); // New loading state

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/books`);
        setBooks(response.data);
        setFilteredBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    filterBooks(searchTerm, selectedCategory);
  }, [books, searchTerm, selectedCategory]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  const filterBooks = (term, category) => {
    let filtered = books;

    if (term) {
      filtered = filtered.filter((book) =>
        book.title.toLowerCase().includes(term.toLowerCase()) ||
        book.author.toLowerCase().includes(term.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter((book) => book.genre === category);
    }

    setFilteredBooks(filtered);
  };

  return (
    <AuthProvider>
      <div>
          {hidebar&&<Navbar onSearch={handleSearch} onCategory={handleCategory} />}

        <div className="book-list">
          {isLoading ? (
            <p>Loading books...</p>
          ) : filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div key={book.id} className="book-card">
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
                <p>Genre: {book.genre}</p>
                <p>Price: ₹{book.price}</p>
              </div>
            ))
          ) : (
            console.log("no books found")
          )}
        </div>

        <Routes>
          <Route path='/' element={<Home search={searchTerm} category={selectedCategory} OnCategory={handleCategory}/>} />
          <Route path='/register' element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/about' element={<About OnCategory={handleCategory}/>} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
