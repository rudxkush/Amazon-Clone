// import { CenterFocusStrongOutlined } from "@material-ui/icons";s
import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

function Product({id, title, image, price, rating, author, subtitle }) {

  return (
    <Link to={`/product/${id}`} className="product-link">
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
                  <StarIcon key={i} className="star-icon" />
                ))}
            </div>

            <p className="product_price">
              <h2>$ {price}</h2>
            </p>
          </div>
        </div>

        <img src={image} alt={title}></img>
      </div>
    </Link>
  );
}

export default Product;
