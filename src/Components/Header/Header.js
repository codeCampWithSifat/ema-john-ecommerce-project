import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/Logo.svg";
import "./Header.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSignOut } from 'react-firebase-hooks/auth';

import auth from '../../firebasel.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

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
            
           {
           user ? <button onClick={() => signOut()} style={{marginLeft : ".5rem"}}> Sign Out</button> : 
           <li><Link to="/login">Login</Link></li>
           }
        </ul>
        </nav>
    </div>
  )
}

export default Header
