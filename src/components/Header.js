import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom";
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            signOut(auth);
        }
    }

    return (        
        <div className="header">
            <Link to="/">
                <img src="./amazon-logo-main.png" className="header-logo" alt="Amazon Logo" />
            </Link>
            

            <div className="header-search">
                <input className="header-searchInput" type="text" />
                <SearchIcon className="header-search-icon" />
            </div>

            <div className="header-nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header-option">
                        <span className="header-option-one">Hello {!user ? 'Guest' : user.email}</span>
                        <span className="header-option-two">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/orders" className="header-option">
                    <span className="header-option-one">Returns</span>
                    <span className="header-option-two">& Orders</span>
                </Link>

                <a href="https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_159_mkw_p452-kw6-cr548066-c?mrntrk=go_cmp-6636914552_adg-84577172328_ad-766487322156_kwd-303629226711_dev-c_ext-" target="_blank" rel="noopener noreferrer" className="header-option">
                    <span className="header-option-one">Your</span>
                    <span className="header-option-two">Prime</span>
                </a>
            </div>

            <Link to="/checkout" className="link">
                <div className="header-option-basket">
                    <ShoppingCartOutlinedIcon className="header-basket-icon" />
                    <span className="header-option-two header-basket-count">{basket?.reduce((total, item) => total + (item.quantity || 1), 0)}</span>
                </div>
            </Link>
        </div>
    )
}

export default Header
