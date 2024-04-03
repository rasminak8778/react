// import './components/Shop/ShopCard.module.css';
// import { useEffect } from 'react';

import { useEffect, useState } from "react";

import {getProducts} from '../../utils';
const ProductCard = ()  => {
    const [response,setResponse] = useState([]);


    // const v = ;
    useEffect(()=> {
        getData();
    },[])
    const getData = async () => {
        const response = await getProducts();
        setResponse(response)
    }
    console.log("DAThhhhhA", response)  
    return(
        <h1>Hello World</h1>
    );
    // <div>
    //     {response.map(obj)=> {
    //         return(<div className="card">
    //                 <h1>Hello</h1>
    //                 <h1>{obj.title}</h1>
    //             </div>
        
    //         );
    //     }}
    // </div>
    
};
export default ProductCard;
