import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../utils";
import styles from '../Shop/ShopCard.module.css';
import style from '../ProductDetails/Product.module.css';
// import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSingleProduct(productId);
      setProduct(data);
    };
    fetchData();
  }, [productId]);

  if (!product) {
    return <div>Processing...</div>;
  }

  return (
        <div className={styles.cantainer}>
            <img src={product.image} alt={product.title} className={style.cartItemImg}/>
            <h2 className={style.h3}>{product.title}</h2>
            <h2 className={style.h2}>Price: ${product.price}</h2>
            <h2 className={style.h4}>Category: {product.category}</h2>
        </div>
  );
};

export default ProductDetails;


