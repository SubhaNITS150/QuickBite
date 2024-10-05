import React from 'react'
import './Navbar.css'
import { useState } from 'react'


const Navbar = () => {

    const [menu, setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <img src="https://res.cloudinary.com/dludtk5vz/image/upload/v1727183681/kuzj5mbmdqig158lpnyg.png" alt=""  className='logo'/>

      <ul className="navbar-menu">
        <li className={menu==="Home" ? "active" : ""} onClick={() => setMenu("Home")}>Home</li>
        <li className={menu==="Menu" ? "active" : ""} onClick={() => setMenu("Menu")}>Menu</li>
        <li className={menu==="Mobile-app" ? "active" : ""} onClick={() => setMenu("Mobile-app")}>Mobile-app</li>
        <li className={menu==="Contact Us" ? "active" : ""} onClick={() => setMenu("Contact Us")}>Contact Us</li>
      </ul>

      <div className="navbar-right">
        <i className="fa-solid fa-magnifying-glass"></i>

        <div className="navbar-search-icon">
            <i className="fa-solid fa-cart-shopping cart"></i>
            <div className="dot">

            </div>
        </div>

        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
