// import { CenterFocusStrongOutlined } from "@material-ui/icons";s
import React, { useState } from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../StateProvider";

function Product({id, title, image, price, rating, author, subtitle }) {

  const [{basket}, dispatch] = useStateValue();
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        quantity: quantity,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p className="product-title">{title}</p>
        <p className="product-subtitle">{subtitle}</p>
        <p className="product-author">{author}</p>
        <div className="product-business">
          <div className="product-rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon className="star-icon" />
              ))}
          </div>

          <p className="product_price">
            <h2>$ {price}</h2>
          </p>
        </div>
      </div>

      <img src={image} alt={title}></img>

      <div className="product-actions">
        <div className="quantity-selector">
          <label>Qty: </label>
          <select value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}>
            {[...Array(10)].map((_, i) => (
              <option key={i+1} value={i+1}>{i+1}</option>
            ))}
          </select>
        </div>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
