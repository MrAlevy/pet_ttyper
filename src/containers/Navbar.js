import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.scss'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left-menu'>
          LOGO
        </div>
        <nav>
            <ul>
              <Link to='/'><li>main</li></Link>
              <Link to='/stats'><li>stats</li></Link>
              <Link to='/texts'><li>texts</li></Link>
              <Link to='/texts'><li>log in</li></Link>
            </ul>
        </nav>
    </div>
  );
}
