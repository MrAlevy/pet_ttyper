import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.scss'
import { NAV1, NAV2, NAV3, NAV4 } from '../constants/NavbarNames'

export const Navbar = () => {

  
  return (
    <div className='navbar'>
        <div className='left-menu'>
          <div id='avatar'>
            <img 
              alt='avatar'
              src={require('./images/1.jpg')}
            />
          </div>
          <div className='personal-data'>
            <span>Alevy</span>
          </div>
        </div>
        <nav>
            <ul>
              <NavLink to={`/${NAV1}`} activeClassName='active-tab'><li>{NAV1}</li></NavLink>
              <NavLink to={`/${NAV2}`} activeClassName='active-tab'><li>{NAV2}</li></NavLink>
              <NavLink exact to='/' activeClassName='active-tab'><li>{NAV3}</li></NavLink>
              <NavLink to={`/${NAV4}`} activeClassName='active-tab'><li>{NAV4}</li></NavLink>
            </ul>
        </nav>
    </div>
  );
}
