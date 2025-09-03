import React, { useState } from 'react';
import './ProductDetail.css';
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from '../StateProvider';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue();
    const [quantity, setQuantity] = useState(1);

    // Product data based on ID
    const products = {
        122322: {
            id: 122322,
            title: "A Game of Thrones (Song of Ice and Fire) Hardcover – August 1, 1996",
            image: "https://kbimages1-a.akamaihd.net/a26bb671-977c-4324-a6af-486847cdbe32/1200/1200/False/a-game-of-thrones-a-song-of-ice-and-fire-book-1.jpg",
            price: 26.29,
            rating: 5,
            author: "George R.R. Martin",
            subtitle: "The first book in the epic fantasy series that inspired HBO's Game of Thrones. Follow the noble families of Westeros as they play the deadly game of thrones."
        },
        122323: {
            id: 122323,
            title: "Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver",
            image: "https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg",
            price: 364.99,
            rating: 4,
            author: "Acer",
            subtitle: "Powerful laptop with AMD Ryzen processor, perfect for work and entertainment. Features full HD display and fast SSD storage."
        },
        122325: {
            id: 122325,
            title: "SAMSUNG 75-inch Class QLED Q70T Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN75Q70TAFXZA, 2020 Model)",
            image: "https://images-na.ssl-images-amazon.com/images/I/51d1lfcMIaL._AC_SL1000_.jpg",
            price: 100.29,
            rating: 4,
            author: "Samsung",
            subtitle: "Experience stunning 4K picture quality with Quantum HDR technology. Smart TV with Alexa built-in for voice control."
        },
        122326: {
            id: 122326,
            title: "OtterBox Defender Series Case for iPad Pro 11(1st Gen) - Retail Packaging - Black",
            image: "https://images-na.ssl-images-amazon.com/images/I/51o%2ByhvbK-L._AC_SL1000_.jpg",
            price: 11.99,
            rating: 5,
            author: "OtterBox",
            subtitle: "Ultimate protection for your iPad Pro. Drop protection, dust protection, and screen protection in one rugged case."
        },
        122321: {
            id: 122321,
            title: "Samsung Gear S3 Frontier Smartwatch (Bluetooth), SM-R760NDAAXAR",
            image: "https://images-na.ssl-images-amazon.com/images/I/61GcJ2DDvIL._AC_SL1000_.jpg",
            price: 9.99,
            rating: 3,
            author: "Samsung Electronics",
            subtitle: "Advanced smartwatch with GPS, heart rate monitor, and water resistance. Stay connected with style and functionality."
        },
        122327: {
            id: 122327,
            title: "LG 65UN7300PUF Alexa Built-In UHD 73 Series 65 4K Smart UHD TV (2020)",
            image: "https://images-na.ssl-images-amazon.com/images/I/81ZcNYPYthL._AC_SL1500_.jpg",
            price: 300.99,
            rating: 5,
            author: "LG",
            subtitle: "Immersive 4K entertainment with AI ThinQ technology. Smart TV with webOS and built-in Alexa for seamless control."
        }
    };

    const product = products[id] || products[122322];

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                ...product,
                quantity: quantity,
            },
        });
        navigate('/checkout');
    };

    return (
        <div className="productDetail">
            <div className="productDetail__left">
                <img src={product.image} alt={product.title} />
            </div>
            
            <div className="productDetail__right">
                <h1>{product.title}</h1>
                <p className="productDetail__author">by {product.author}</p>
                
                <div className="productDetail__rating">
                    {Array(product.rating).fill().map((_, i) => (
                        <StarIcon key={i} className="star-icon" />
                    ))}
                    <span>(4,234 ratings)</span>
                </div>

                <hr />

                <div className="productDetail__price">
                    <span className="price__symbol">$</span>
                    <span className="price__whole">{Math.floor(product.price)}</span>
                    <span className="price__fraction">{((product.price % 1) * 100).toFixed(0).padStart(2, '0')}</span>
                </div>

                <div className="productDetail__delivery">
                    <p><strong>FREE Returns</strong></p>
                    <p><strong>FREE delivery</strong> Wednesday, September 4</p>
                    <p>Or fastest delivery <strong>Tomorrow, September 3</strong></p>
                </div>

                <div className="productDetail__stock">
                    <p className="in-stock">In Stock</p>
                </div>

                <div className="productDetail__actions">
                    <div className="quantity__selector">
                        <label>Qty:</label>
                        <select value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}>
                            {[...Array(10)].map((_, i) => (
                                <option key={i+1} value={i+1}>{i+1}</option>
                            ))}
                        </select>
                    </div>
                    
                    <button className="addToCart__btn" onClick={addToCart}>
                        Add to Cart
                    </button>
                    
                    <button className="buyNow__btn">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;