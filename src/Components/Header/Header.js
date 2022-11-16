import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav_menu">
        <Link to="/shop">
        <img src={logo} alt="" />
        </Link>
        <nav>
        <ul>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/inventory">Inventory</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        </nav>
    </div>
  )
}

export default Header
