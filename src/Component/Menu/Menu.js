import React from 'react'
import './Menu.scss'
import {NavLink} from "react-router-dom";


export const Menu = () => {
    return (
      <header>
          <NavLink to="/MagicWand" className="MagicWand">
              MAGIC WAND
          </NavLink>

          <NavLink to="/Ava" className="AVA">
              AVA
          </NavLink>
      </header>
    )
}

export default Menu;