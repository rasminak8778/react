// import { useState } from "react";
import ProductDetails from "./components/ProductDetails/Product.jsx";

export const  getProducts = async()=>{
    console.log('Hello World')
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log("sxsx",data)
    return data
};
export const getSingleProduct = async(productId)=>{
    console.log('ssssss',productId)
    const url = `https://fakestoreapi.com/products/${productId}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log('single product', data);
    return data
};