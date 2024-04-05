import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({
    items: []
});

// export const ShoppingCartProvider = ({ children }) => {
//     const [cartItems, setCartItems ] = useState([]);

//     const addToCart = (data) => {
//         setCartItems([...cartItems, data]);
  
// };
