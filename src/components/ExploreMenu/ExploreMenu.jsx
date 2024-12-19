import React from 'react'
import './ExploreMenu.css'
import { menuList } from './items'

const ExploreMenu = ( {category, setCategory} ) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu, featuring a delectable array of dishes, expertly prepared with the finest ingredients, bursting with bold flavors and textures, promising to delight your palate and provide a truly memorable dining experience.</p>

      <div className='explore-menu-list'>
        {menuList.map((item, index) => {
            return (
                <div onClick={() => setCategory(prev=>prev===item.menu_name ? "All" : item.menu_name)} key = {index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name ? "active" : ""} src={item.menu_image} alt=''/>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
