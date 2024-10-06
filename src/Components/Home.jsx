import React from 'react';
import { bookCollection } from './BookCollections';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCard = ({ title, description, price, imageUrl }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-slate-600-500 ring-opacity-40 max-w-xs mx-auto flex flex-col justify-between">
    <div className="relative">
      <img className="w-full h-64 object-cover" src={imageUrl} alt={title} />
      <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-xs font-medium">
        SALE
      </div>
    </div>
    <div className="p-4 flex-grow">
      <h3 className="text-lg font-medium mb-2 font-1">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 font-3">{description}</p>
    </div>
    <div className="p-4 flex items-center justify-between mt-auto">
      <span className="font-bold text-lg">₹{price}</span>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 p-1 text-sm rounded font-1">
        Add to cart
      </button>
    </div>
  </div>
);

const GenreSection = ({ genre, books, search }) => {
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
  console.log(filteredBooks.length);
  return (
    <div className="mb-12">
      <h1 className="text-3xl font-bold mb-6 font-4">{genre}</h1>
      <div className="relative">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
          disabled={startIndex === 0}
        >
          <ChevronLeft size={24} />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
          {(filteredBooks.length>0 ? filteredBooks : books).slice(startIndex, startIndex + 5).map((book, index) => (
            <ProductCard
              key={index}
              title={book.title}
              description={book.description}
              price={book.price}
              imageUrl={book.imageUrl}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
          disabled={startIndex >= filteredBooks.length - 5}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

const Home = ({ search }) => {
  console.log(search);
  return (
    <div className="container mx-auto px-4 py-8">
      {Object.entries(bookCollection).map(([genre, books]) => (
        <GenreSection key={genre} genre={genre} books={books} search={search} />
      ))}
    </div>
  );
};

export default Home;
