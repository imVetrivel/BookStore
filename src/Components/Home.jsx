import React, { useEffect, useState } from 'react';
import { bookCollection } from './BookCollections';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { X } from 'lucide-react';
import Admin from './Admin';
import About from './About'


const Popup = ({handlePop,popdata}) => {
  
  return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg ring-4 ring-slate-600-500 ring-opacity-40 shadow-lg p-6 w-80">
            <h2 className="text-xl font-bold mb-4">{popdata}</h2>
            <p className="mb-4 text-gray-700">Added to cart!!</p>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
              onClick={() => handlePop()}
            >
              Close
            </button>
          </div>
        </div>
  )
}


// DetailedBookView component to display detailed information of the selected book
const DetailedBookView = ({ book, onClose, handleCart ,isAdded,setIsAdded}) => {
  // const [isAdded, setIsAdded] = useState(false);
  const handleAddToCart = () => {
    handleCart(book);
    setIsAdded(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white shadow-lg ring-4 ring-slate-600-500 ring-opacity-40 rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={book.imageUrl}
            alt={book.title}
            className="w-full md:w-1/3 h-64 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
            <p className="text-gray-600 mb-4">
              by <span className="text-blue-800">{book.author}</span>
            </p>
            <p className="text-gray-700 mb-4">{book.description}</p>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Overview</h3>
              <p className="text-gray-700">{book.overview}</p><a href="" className='text-blue-400 text-sm '>Read more</a>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Details</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li><strong>Stock Availability:</strong> {book.stockAvailability}</li>
                <li><strong>Language:</strong> {book.language}</li>
                <li><strong>Genre:</strong> {book.genre}</li>
                <li><strong>Format:</strong> {book.format}</li>
                <li><strong>Publisher:</strong> {book.publisher}</li>
              </ul>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">₹{book.price}</span>
              <button
                className={`font-bold py-2 px-4 rounded ${
                  isAdded ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'
                } text-white`}
                onClick={handleAddToCart}
                disabled={isAdded}
              >
                {isAdded ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ProductCard component to display book information in a card layout
const ProductCard = ({ title, author, description, price, imageUrl, overview, stockAvailability, language, genre, format, publisher, handleCart ,handlePop}) => {
  const [isDetailedViewOpen, setIsDetailedViewOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  
  const handleAddToCart = (e) => {
    e.stopPropagation();
    handleCart({ title, author, description, price, imageUrl, overview, stockAvailability, language, genre, format, publisher });
    setIsAdded(true);
    handlePop(title);
  };

  const openDetailedView = () => {
    setIsDetailedViewOpen(true);
  };

  const closeDetailedView = () => {
    setIsDetailedViewOpen(false);
  };

  return (
    <>
      <div
        className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-slate-600-500 ring-opacity-40 max-w-xs mx-auto flex flex-col justify-between hover:scale-105 duration-200 hover:shadow-lg cursor-pointer"
        onClick={openDetailedView}
      >
        <div className="relative">
          <img className="w-full h-64 object-cover" src={imageUrl} alt={title} />
        </div>
        <div className="p-4 flex-grow">
          <h3 className="text-lg font-medium font-1">{title}</h3>
          <p className="text-gray-600 text-xs mb-4 font-3">
            by <span className="text-blue-800">{author}</span>
          </p>
          <p className="text-gray-600 text-sm mb-4 font-3 line-clamp-3">
            {description}
          </p>
        </div>
        <div className="p-4 flex items-center justify-between mt-auto">
          <span className="font-bold text-lg">₹{price}</span>
          <button
            className={`font-bold py-1 px-2 p-1 text-sm rounded font-1 ${
              isAdded ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'
            } text-white`}
            onClick={handleAddToCart}
            disabled={isAdded}
          >
            {isAdded ? 'Added' : 'Add to Cart'}
            {/* {pop ? <Popup />:" "} */}
          </button>
        </div>
      </div>
      {isDetailedViewOpen && (
        <DetailedBookView
          book={{ title, author, description, price, imageUrl, overview, stockAvailability, language, genre, format, publisher }}
          onClose={closeDetailedView}
          handleCart={handleCart}
          isAdded={isAdded}
          setIsAdded={setIsAdded}
        />
      )}
    </>
  );
};

// GenreSection component to handle genre-based book display with filtering and pagination
const GenreSection = ({ genre, books, search, handleCart,handlePop}) => {
  const [startIndex, setStartIndex] = React.useState(0);

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, books.length - 5));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  if (filteredBooks.length === 0 && search) {
    return null;
  }

  return (
    <div className="mb-12">
      <h1 className="text-3xl font-bold mb-6 font-4">{genre}</h1>
      <div className="relative">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:scale-110 duration-300 hover:bg-blue-300"
          disabled={startIndex === 0}
        >
          <ChevronLeft size={24} />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
          {filteredBooks.slice(startIndex, startIndex + 5).map((book, index) => (
            <ProductCard
              key={index}
              title={book.title}
              author={book.author}
              description={book.description}
              price={book.price}
              imageUrl={book.imageUrl}
              overview={book.overview}
              stockAvailability={book.stockAvailability}
              language={book.language}
              genre={book.genre}
              format={book.format}
              publisher={book.publisher}
              handleCart={handleCart}
              handlePop={handlePop}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:scale-110 duration-300 hover:bg-blue-300"
          disabled={startIndex >= filteredBooks.length - 5}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

// Home component to display all books or filtered genres with search functionality
const Home = ({ search, handleCart,category }) => {
  const allBooks = [];
  const[pop,setPop]=useState(false);
  const[popdata,setPopdata]=useState("");
  const [collection, setCollection] = useState(bookCollection);

  // function handleAdmin(data){
  //   if (bookCollection[data.genre]) {
  //     bookCollection[data.genre].push(data);
  //   } else {
  //     bookCollection[data.genre] = [data];
  //   }
  //   console.log(data);
  // }
  
  function handlePop(data){
    setPopdata(data);
    setPop(!pop);
  }
  console.log(category);

  Object.values(bookCollection).forEach((genreBooks) => {
    allBooks.push(...genreBooks);
  });

  let matchedGenres=[];
  
  if(category){
    matchedGenres = Object.entries(bookCollection).filter(([genre, books]) =>
    books.some((book) =>
      genre.toLowerCase().includes(category.toLowerCase()) &&
      book.title.toLowerCase().includes(search.toLowerCase())
    ));
  }else{
    matchedGenres = Object.entries(bookCollection).filter(([genre, books]) =>
      books.some((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }
  
  return (
    <div>
      
      <div className="container mx-auto px-4 py-8">
        {matchedGenres.length > 0 ? (
          matchedGenres.map(([genre, books]) => (
            <GenreSection
              key={genre}
              genre={genre}
              books={books}
              search={search}
              handleCart={handleCart}
              handlePop={handlePop}
            />
          ))
        ) : (
          <h2 className="text-2xl text-center">No books found.</h2>
        )}
        {pop&&
          <Popup handlePop={handlePop} popdata={popdata}/>
        }
      </div>
      <About/>
      {/* <Popup /> */}
      {/* <Admin handleAdmin={handleAdmin}/> */}
    </div>
  );
};

export default Home;
