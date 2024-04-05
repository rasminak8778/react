import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

const ShoppingCartPage =() =>{
    const { cartItems } = useContext(ShoppingCartContext);
    return (
        <div>
            <h1>Shopping Cart </h1>
            <ul>
                {cartItems.map((data) =>(
                    <li key={data.id}>
                       <div>{data.title}</div>
                        <div>${data.price}</div> 
                    </li>
                ))}
            </ul>
        </div>
    );
};



