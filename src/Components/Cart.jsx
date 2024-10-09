import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import axios from 'axios';
import LoginPopup from './LoginPopup.jsx';

const Cart = () => {
    const { isLogin, user } = useAuth();
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const[cartid,setCartid]=useState([]);

    const handleRemove = (index) => {
        axios.delete("http://localhost:5000/user/deletecart", {
            data: { userId: user._id, index }
        })
        .then(res => {
            console.log(res.data); 
            const updatedCart = cartItems.filter((_, i) => i !== index);
            setCartItems(updatedCart);
        })
        .catch(error => {
            console.error(error.message); 
        });
        
        console.log(index); 
    };

    const handleOrder = (e) => {
        e.preventDefault();
        if (isLogin) {
            alert("Order placed");
        } else {
            setShowPopup(true);
        }
    };

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    }
    const handleClosePopup = () => {
        setIsPopupOpen(false);
    }

    useEffect(() => {
        const fetchCartItems = async () => {
            if (user && user._id) {
                try {
                    const response = await axios.get(`http://localhost:5000/user/getcart/${user._id}`);
                    // setCartid([response.data.cart_items._id]);
                    // console.log(cartid);
                    setCartItems(response.data?.cart.cart_items || []); // Set local cart items
                    setCartid(response.data?.cart.cart_items);
                    console.log(cartid);
                    // console.log(response);
                } catch (err) {
                    console.error(err);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchCartItems();
    }, [user]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (!isLogin)
        return (
            <>
                <LoginPopup onClose={handleClosePopup} />
            </>
        )

 else {
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
    }
}

export default Cart;
