import React from 'react';
import "./CheckoutProduct.css";
import StarIcon from "@mui/icons-material/Star"; 
import {useStateValue} from "../StateProvider";

function CheckoutProduct({id, image, title, price, rating, quantity}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    const updateQuantity = (newQuantity) => {
        dispatch({
            type: 'UPDATE_QUANTITY',
            id: id,
            quantity: parseInt(newQuantity)
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt={title} />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon key={i} className="star-icon" />
                    ))}
                </div>
                <div className="checkoutProduct_actions">
                    <div className="quantity_selector">
                        <label>Qty: </label>
                        <select value={quantity} onChange={(e) => updateQuantity(e.target.value)}>
                            {[...Array(10)].map((_, i) => (
                                <option key={i+1} value={i+1}>{i+1}</option>
                            ))}
                        </select>
                    </div>
                    <button onClick={removeFromBasket}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
