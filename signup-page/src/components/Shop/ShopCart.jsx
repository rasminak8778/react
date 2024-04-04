import styles from '../Shop/ShopCard.module.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {getProducts} from '../../utils';
import { Product } from '../ProductDetails/Product.jsx';
import { NavLink } from "react-router-dom";


export default function ProductCard({data}){
    // const [data,setData] = useState([]);
    // useEffect(()=> {
    //     getData();
    // },[])
    // const getData = async () => {
    //     const data = await getProducts();
    //     setData(data)
    // }
    console.log("Data", data)  
    return(
        <div className={styles.card}> 
            {data.map((data) => (
                <div key={data.id}>
            <Router>
                <Link to={'/products/' + data.id}>More Details</Link>
                <Switch>
                <Route path="{'/products/' + data.id}">
                <Product/>
                </Route>
              </Switch>
            </Router>
                 {/* <NavLink to={'/products/' + data.id}> */}
                    <img src={data.image} alt={data.title} className={styles.cartItemImg}/>
                {/* </NavLink> */}
                    <h2 className={styles.h2}>{data.title}</h2>
                    <h2 className={styles.h2}>${data.price}</h2> 
                    {/* <Router>
                        <Link to="/product">More Details</Link>
                        
                            <Route path="/product">
                                <div product={data}/>
                            </Route>
                        
                    </Router>       */}
                    {/* <Router>
                        <Link to={'data/' + data.id} />
                       
                    </Router> */}
                </div>
            ))}           
        </div>
        
        
    );
};

