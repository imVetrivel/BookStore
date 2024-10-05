import React from 'react';
import PropTypes from 'prop-types';

function Cart({ cartItems = [] }) { 
  return (
    <div className='cart mx-36'>
      <h2 className='text-xl mb-4'>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className='flex flex-row gap-5'>
          {cartItems.map((data, index) => (
            <div key={index} className='mt-2'>
              <img 
                src={data.photo}  
                alt={data.name} 
                className='rounded-md h-32 w-32 object-cover'
              />
              <li>{data.author}</li>
              <li>{`Price: $${data.price}`}</li>     
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
