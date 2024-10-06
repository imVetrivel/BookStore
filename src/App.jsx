import { useEffect, useState } from 'react';
import './assets/css/core.css';
import Navbar from './Components/Navbar';
import Layout from './Components/Layout';
import Cart from './Components/Cart';
import Home from './Components/Home'
import { Routes,Route } from 'react-router-dom';

function App() {

   const[search,setSearch]=useState("");
   const[cart,setCart]=useState([]);
   function handleSearch(value){
      setSearch(value);
   }

   const handleCart = (product) => {
      setCart([...cart, product]);
    };

    useEffect(()=>{
      console.log(cart);
    },[cart])

   return (
      <>
         <Navbar onSearch={handleSearch} books={cart}/>
         <Routes>
            {/* <Navbar onSearch={handleSearch} books={cart}/>
            <Home cart={cart} handleCart={handleCart} search={search}/>
            <Cart books={cart}/> */}
            <Route path="/" element={<Home cart={cart} handleCart={handleCart} search={search}/>} />
            <Route path="/cart" element={<Cart books={cart}/>} />
         </Routes>
      </>
   );
}

export default App;
