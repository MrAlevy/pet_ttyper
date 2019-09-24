import React from 'react';

export const NavbarLeftMenu = () => { 
    return (    
        <div className='left-menu'>
            <div id='avatar'>
                <img 
                    alt='avatar'
                    src={require('../../containers/images/guest_avatar.png')}
                />
            </div>
            <div className='personal-data'>
                <span id='nickname'>Guest</span>
                <br/>
                <div id='status'>{'<status>'}</div>
            </div>
        </div>
    );
}

export const Logo = () => {
    return (    
        <div id='logo'>
            <span>TTyper !</span>
        </div>
    )
}