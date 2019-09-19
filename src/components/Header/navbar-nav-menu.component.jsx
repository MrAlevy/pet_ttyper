import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavbarNavMenu = () => { 
    return (
        <nav>
            <ul>
                <NavLink 
                    to='/texts' 
                    activeClassName='active-tab'
                >
                    <li>texts</li>
                </NavLink>
                <NavLink 
                    exact 
                    to='/' 
                    activeClassName='active-tab'
                >
                    <li>page</li>
                </NavLink>
                <NavLink 
                    to='/settings' 
                    activeClassName='active-tab'
                >
                    <li>sets</li>
                </NavLink>
                <NavLink 
                    to='/auth' 
                    activeClassName='active-tab'
                >
                    <li>log in</li>
                </NavLink>
            </ul>
        </nav>
    );
}