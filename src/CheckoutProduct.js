import React from "react";
import { useStateValue } from "./StateProvider";
import './CheckoutProduct.css'
function CheckoutProduct({ id, title, image, price, rating }) {
    const [{basket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
     dispatch({
        type:"REMOVE_FROM_BASKET",
        id:id,
     })
  }
    return (
    <div className="checkoutProduct">
      <img src={image} className="product_image" alt="" />
      <div className="product_info">
        <p className="product_title">{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
