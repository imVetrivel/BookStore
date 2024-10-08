// import { LogIn } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Popup1 = () => {
    const navigate = useNavigate();
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg ring-4 ring-slate-600-500 ring-opacity-40 shadow-lg p-6 w-80">
                <h2 className="text-xl font-bold mb-4">Login Required</h2>
                <p className="mb-4 text-gray-700">Login to order</p>
                <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                    onClick={() => navigate('/')}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

const Cart = ({ books, islogin }) => {
    const [cartItems, setCartItems] = useState(books);
    const [showPopup, setShowPopup] = useState(false);

    const handleRemove = (index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
    };

    const totalAmount = cartItems.reduce((total, book) => total + Number(book.price), 0);

    const handleOrder = (e) => {
        e.preventDefault();
        if (islogin) {
            alert("Order placed");
        } else {
            setShowPopup(true);
        }
    };

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
                        onClick={handleOrder}
                    >
                        Order Now
                    </button>
                </>
            )}
            {showPopup && <Popup1 />}
        </div>
    );
};

export default Cart;
