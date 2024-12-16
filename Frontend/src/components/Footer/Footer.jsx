import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src="https://res.cloudinary.com/dludtk5vz/image/upload/v1727183681/kuzj5mbmdqig158lpnyg.png" alt="" className='company-logo' />

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi magni consequatur aspernatur ipsum quasi dolores earum provident qui fugit aperiam unde ullam suscipit atque, aliquam, sed quam rem nemo officiis illo fugiat corrupti.
            </p>

            <div className="footer-social-icons">
                <img src="https://res.cloudinary.com/dludtk5vz/image/upload/v1728307103/facebook_icon_b5yfrb.png" alt="facebook" />

                <img src="https://res.cloudinary.com/dludtk5vz/image/upload/v1728307273/twitter_icon_w8ijrq.png" alt="twitter" />

                <img src="https://res.cloudinary.com/dludtk5vz/image/upload/v1728307323/linkedin_icon_umncaj.png" alt="linkedin" />

            </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 123 456 7890</li>
            <li>contact@quickbite.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © 2024 Quickbite - All rights reserved.
      </p>
    </div>
  )
}

export default Footer
