import React from 'react';

const Cart = ({ books }) => {
    return (
        <div className="p-6 bg-white shadow-md rounded-lg mt-6">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {books.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <ul>
                    {books.map((book, index) => (
                        <li key={index} className="flex items-start border-b py-4">
                            <img src={book.imageUrl} alt={book.title} className="w-24 h-36 object-cover rounded-md mr-4" />
                            <div className="flex-grow">
                                <h3 className="text-lg font-semibold">{book.title}</h3>
                                <p className="text-gray-700">Author: {book.author}</p>
                                <p className="text-gray-600">Description: {book.description}</p>
                                <p className="text-lg font-bold">Price: ₹{book.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
