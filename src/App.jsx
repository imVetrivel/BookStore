import { useEffect, useState } from 'react';
import './assets/css/core.css';
import Navbar from './Components/Navbar';
import Layout from './Components/Layout';
import Cart from './Components/Cart';
import Home from './Components/Home'
import { Routes,Route, useLocation } from 'react-router-dom';
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import Admin from './Components/Admin';
import About from './Components/About'


function App() {

   const location=useLocation();
   const hidebar=location.pathname ==='/'||location.pathname==='/register';

   const[search,setSearch]=useState("");
   const[cart,setCart]=useState([]);
   const[category,setCategory]=useState("");

   function handleSearch(value){
      setSearch(value);
   }

   const[islogin,setLogin]=useState(false);
   function handleLogin(){
      setLogin(!islogin);
   }

   const[isadmin,setAdmin]=useState(false);
   function handleAdmin(){
      setAdmin(!isadmin);
   }
   console.log("Login : "+islogin);
   function handleCategory(value){
      setCategory(value);
   }

   // console.log(category)
   
   const handleCart = (product) => {
      setCart([...cart, product]);
    };

      useEffect(() => {
         console.log(cart);
      }, [cart])
      
   return (
      <>
         {/* {!hidebar && <Navbar onSearch={handleSearch} onCategory={handleCategory} islogin={islogin} isadmin={isadmin}/>} */}
         <Navbar/>
         <Routes>
            {/* <Navbar onSearch={handleSearch} books={cart}/>
            <Home cart={cart} handleCart={handleCart} search={search}/>
            <Cart books={cart}/> */}

            <Route path='/' element={<Home cart={cart} handleCart={handleCart} search={search} category={category} />}/>
            <Route path='/register' element={<Signup/>}/>
            <Route path="/login" element={<Signin/>} />
            <Route path="/cart" element={<Cart books={cart}/>} />
            <Route path='/admin' element={<Admin />}/>
            <Route path='/about' element={<About/>}/>

         </Routes>
      </>
   );
}

export default App;
