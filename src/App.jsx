import { useState } from 'react';
import './assets/css/core.css';
import Navbar from './Components/Navbar';
import Layout from './Components/Layout';
import Cart from './Components/Cart'; // Import Cart component

function App() {
   const [cart, setCart] = useState([]); // Ensure cart is initialized as an empty array
   const Books = [
      {
         name: 'Harry Potter',
         author: "J. K. Rowling",
         price: 1000,
         description: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling.",
         photo: "/assets/img/harrypotter.jpg"
      },
      {
         name: 'The Hobbit',
         author: "J. R. R. Tolkien",
         price: 800,
         description: "The Hobbit is a fantasy novel by J. R. R. Tolkien.",
         photo: "/assets/img/thehobbit.jpeg"
      },
      {
         name: '1984',
         author: "George Orwell",
         price: 600,
         description: "1984 is a dystopian social science fiction novel and cautionary tale by the English writer George Orwell.",
         photo: "/assets/img/1994.jpg"
      },
      {
         name: 'Pride and Prejudice',
         author: "Jane Austen",
         price: 700,
         description: "Pride and Prejudice is a romantic novel of manners written by Jane Austen.",
         photo: "/assets/img/prideandprejudice.jpg"
      },
      {
         name: 'Moby Dick',
         author: "Herman Melville",
         price: 900,
         description: "Moby Dick is a novel by Herman Melville, published in 1851.",
         photo: "/assets/img/mobydick.jpg"
      },
      {
         name: 'War and Peace',
         author: "Leo Tolstoy",
         price: 1200,
         description: "War and Peace is a novel by Leo Tolstoy, first published from 1865 to 1869.",
         photo: "/assets/img/warandpeace.jpg"
      },
   ];

   // Function to handle adding items to the cart
   function handleCart(book) {
      setCart(prevCart => [...prevCart, book]); // Use functional update for state
   }

   return (
      <>
         <Navbar />
         <div className='flex flex-col items-center mb-32 w-full'>
            <h1 className='text-center text-2xl mb-8'>Book's Store</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-4 md:mx-10 lg:mx-20'>
               {Books.map((book, index) => (
                  <div className='flex float-start flex-col' key={index}>
                     <Layout Books={[book]} />
                     <div className='mx-3 mt-1'>
                        <button className='bg-green-300 w-24 p-1' onClick={() => handleCart(book)}>Add to cart</button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <Cart cartItems={cart} /> {/* Render Cart component with cart items */}
      </>
   );
}

export default App;
