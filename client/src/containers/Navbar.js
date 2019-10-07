import React from 'react';
import { NavbarLeftMenu, Logo } from '../components/Header/navbar-left-menu.component';
import { NavbarNavMenu } from '../components/Header/navbar-nav-menu.component';
import './styles/navbar.scss'

export const Navbar = () => { 
    return (
        <div className='navbar'>
            <NavbarLeftMenu />
            <Logo />
            <NavbarNavMenu />
        </div>
    );
}
