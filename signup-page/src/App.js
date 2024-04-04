import './App.css';
import ProductCard from './components/Shop/ShopCart.jsx';
import {LoginForm} from './components/Login/Login.jsx';
import { useEffect, useState } from "react"; 
import { Routes, Route} from "react-router-dom";
import { getProducts } from './utils.js';
  
function App() { 
    const [data,setData] = useState([]);
    useEffect(()=> {
        getData();
    },[])
    const getData = async () => {
        const data = await getProducts();
        setData(data)
    }
    return ( 
        <div className='App'>
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/login" element={<LoginForm />} /> 
            <Route path="/products" element={<ProductCard data={data}/>} />
        </Routes>
        </div>     
    ); 
} 
  
export default App;