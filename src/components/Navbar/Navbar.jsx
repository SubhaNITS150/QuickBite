import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("Home");

    const {getTotalCartAmount, token, setToken} = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () => {
      //Remove the token
      localStorage.removeItem("token");
      setToken("");
      
      //sent to home page
      navigate("/");
    }

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
            <div className={!getTotalCartAmount() ? "" : "dot"}>

            </div>
        </div>

        {!token ? <button onClick={() => {setShowLogin(true)}}>Sign In</button>
        :
        <div className='navbar-profile'>
          <img src="https://res.cloudinary.com/dludtk5vz/image/upload/v1736255574/profile_icon_zwg2z3.png" alt="" />
          <ul className="nav-profile-dropdown">
            <li><img src="https://res.cloudinary.com/dludtk5vz/image/upload/v1736255666/bag_icon_rs6gsi.png" alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img src="https://res.cloudinary.com/dludtk5vz/image/upload/v1736255703/logout_icon_xvmi74.png" alt="" /><p>Logout</p></li>
          </ul>
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar
