import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between top-0 bg-gray-400 h-10 text-xl'>
        <div className=''>
            <h1>BookStore</h1>
        </div>
        <div className='flex justify-normal list-none gap-3 mr-5'>
            <li>Home</li>
            <li>Cart</li>
        </div>
    </div>
  )
}

export default Navbar
