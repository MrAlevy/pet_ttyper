import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const NavbarNavMenu = () => { 
    // _id exist means that typing window is open - need to change bright color
    const isTyper = useSelector(state => state.texts._id);

    return (
        <nav className={ isTyper && 'typer-gray-mode' }>
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