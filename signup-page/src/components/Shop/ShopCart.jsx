import styles from '../Shop/ShopCard.module.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import {getProducts} from '../../utils';
import { ProductDetails } from '../ProductDetails/Product.jsx';
import { NavLink, useNavigate} from "react-router-dom";
import { Header } from '../Header/Header.js';
import { ShoppingCartContext } from '../../context/ShoppingCartContext.jsx';

export default function ProductCard(){
    const cartContext = useContext(ShoppingCartContext);
    const [data,setData] = useState([]);
    const navigate = useNavigate()
    const [cartItems, setCartItems] = useState([])
    
    useEffect(()=> {
        getData();
    },[])
    const getData = async () => {
        const data = await getProducts();
        setData(data)
    } 
    const handleAddtoCart = (data) => {
        console.log('he', cartContext)

        // item: []
        // const isItemInCart = cartItems.find((cartItem) => cartItem.id === data.id); 
        // if (isItemInCart) {
        //         setCartItems(
        //             cartItems.map((cartItem) =>
        //              cartItem.id === data.id
        //         ? {cartItem}
        //         : cartItem 
        //     )
        //             );
        // } else {
        //     setCartItems([cartItems]);
        // }
    }
    return(
        <>
        <ShoppingCartContext.Provider>
            <h1 className={styles.h2}>Shopping Cart</h1>
            <button onClick={()=>{navigate('/cart')}} className="buttonCart">Cart</button>
            <Header/>
            <div className={styles.card}> 
                {data.map((data) => (
                    <div key={data.id}>   
                    <NavLink to={`/products/${data.id}`} activeClassName="current">
                        <img src={data.image} alt={data.title} className={styles.cartItemImg}/>
                    </NavLink>
                        <h2 className={styles.h2}>{data.title}</h2>
                        <h2 className={styles.h2}>${data.price}</h2>
                        <button className='addtocart' onClick={ ()=> handleAddtoCart(data)}>
                            <div className='pretext'>
                                <i class="fas fa-cart-plus"></i> ADD TO CART
                            </div>
                    </button>
                    </div>
                ))}           
            </div>
        </ShoppingCartContext.Provider>
        </>   
    );
};

