import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
      <nav className='menu'>
  
         <NavLink to='/' className={({ isActive }) => 
          isActive ? "menu__item-active" : "menu__item"}>HomePage</NavLink>
  
          <NavLink to='/drift' className={({ isActive }) => 
          isActive ? "menu__item-active" : "menu__item"}>DriftPage</NavLink>
  
         <NavLink to='/timeattack' className={({ isActive }) => 
          isActive ? "menu__item-active" : "menu__item"}>TimeAttackPage</NavLink>
          
          <NavLink to='/forza' className={({ isActive }) => 
          isActive ? "menu__item-active" : "menu__item"}>ForzaPage</NavLink>
  
      </nav>
    )
  }