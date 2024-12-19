import React from 'react'
import './FoodItem.css'
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id, name, price, description, image}) => {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-image-container">
        <img className='food-item-image' src={image} alt="" />

        {
          !cartItems[id] 
            ? <img src='https://res.cloudinary.com/dludtk5vz/image/upload/v1727529091/mgdlibky2wvggkdweejl.png' alt='' className='add' onClick={() => addToCart(id)} />
            : <div className='food-item-counter'>

                <img src='https://res.cloudinary.com/dludtk5vz/image/upload/v1727854543/hcjouamft4n7voue7tx3.png' alt="" onClick={() => removeFromCart(id)}/>

                <p>{cartItems[id]}</p>

                <img src="https://res.cloudinary.com/dludtk5vz/image/upload/v1727854642/w44hpe2x7wrq7eksrkqc.png" alt="" onClick={() => addToCart(id)}/>

              </div>

        }
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src="https://res.cloudinary.com/dludtk5vz/image/upload/v1727855009/qzqyb4yhwxglo7upj45t.png" alt="" />
        </div>

        <p className="food-item-desc">
          {description}
        </p>

        <p className="food-item-price">
          ${price}
        </p>
      </div>
    </div>
  )
}

export default FoodItem
