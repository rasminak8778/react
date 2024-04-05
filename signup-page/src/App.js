import './App.css';
import ProductCard from './components/Shop/ShopCart.jsx';
import {LoginForm} from './components/Login/Login.jsx';
import { useEffect, useState } from "react"; 
import { BrowserRouter as Router ,Routes, Route} from "react-router-dom";
import { getProducts } from './utils.js';
import ProductDetails from "./components/ProductDetails/Product.jsx";
import { ShoppingCartContext, ShoppingCartProvider } from './context/ShoppingCartContext.jsx';
  
function App() { 
    return ( 
        <div className='App'>
       {/* <ShoppingCartProvider> */}
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/login" element={<LoginForm />} /> 
                <Route path="/products" element={<ProductCard/>} />
                <Route path="/products/:productId" element={<ProductDetails/>} />
                
            </Routes>
        {/* </ShoppingCartProvider>  */}

        </div>     
    ); 
} 
  
export default App;