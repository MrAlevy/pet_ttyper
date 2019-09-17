import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.scss'

export const Navbar = () => {
  let pathname = window.location.pathname
  console.log(pathname)
  
  return (
    <div className='navbar'>
        <div className='left-menu'>
          LOGO
        </div>
        <nav>
            <ul>
              <NavLink exact to='/' activeClassName='active-tab'><li>main</li></NavLink>
              <NavLink to='/stats' activeClassName='active-tab'><li>stats</li></NavLink>
              <NavLink to='/texts' activeClassName='active-tab'><li>texts</li></NavLink>
              <NavLink to='/texts' activeClassName='active-tab'><li>log in</li></NavLink>
            </ul>
        </nav>
    </div>
  );
}
