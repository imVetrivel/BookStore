import React, { useState } from 'react';

const Cart = ({ books }) => {
    const [cartItems, setCartItems] = useState(books);
    const handleRemove = (index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
    };

    const totalAmount = cartItems.reduce((total, book) => total + Number(book.price), 0);

    return (
        <div className="p-6 bg-white shadow-md rounded-lg mt-6">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((book, index) => (
                            <li key={index} className="flex items-start border-b py-4">
                                <img src={book.imageUrl} alt={book.title} className="w-24 h-36 object-cover rounded-md mr-4" />
                                <div className="flex-grow">
                                    <h3 className="text-lg font-semibold">{book.title}</h3>
                                    <p className="text-gray-700">Author: {book.author}</p>
                                    <p className="text-gray-600">Description: {book.description}</p>
                                    <p className="text-lg font-bold">Price: ₹{book.price}</p>
                                    <button 
                                        className="mt-2 text-red-500 hover:text-red-700" 
                                        onClick={() => handleRemove(index)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <p className="text-lg font-bold">Total Amount: ₹{totalAmount}</p>
                    </div>
                    <button 
                        className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
                        onClick={() => alert('Order placed!')}
                    >
                        Order Now
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;
