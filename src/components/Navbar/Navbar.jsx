import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useContext } from 'react';

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("Home");

    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'>
        <img src="https://res.cloudinary.com/dludtk5vz/image/upload/v1727183681/kuzj5mbmdqig158lpnyg.png" alt=""  className='logo'/>
      </Link>

      <ul className="navbar-menu">
        <Link to='/' className={menu==="Home" ? "active" : ""} onClick={() => setMenu("Home")}>Home</Link>
        <a href="#explore-menu" className={menu==="Menu" ? "active" : ""} onClick={() => setMenu("Menu")}>Menu</a>
        <a href="#app-download" className={menu==="Mobile-app" ? "active" : ""} onClick={() => setMenu("Mobile-app")}>Mobile-app</a>
        <a href="#footer" className={menu==="Contact Us" ? "active" : ""} onClick={() => setMenu("Contact Us")}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <i className="fa-solid fa-magnifying-glass"></i>

        <div className="navbar-search-icon">
            <Link to='/cart'>
              <i className="fa-solid fa-cart-shopping cart"></i>
            </Link>
            <div className="dot">

            </div>
        </div>

        <button onClick={() => {
          setShowLogin(true)
        }}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
