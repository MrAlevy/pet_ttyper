import React from 'react';
import { useSelector } from 'react-redux';

export const NavbarLeftMenu = () => { 
    // _id exist means that typing window is open - need to change bright color
    const isTyper = useSelector(state => state.texts._id);

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
    // _id exist means that typing window is open - need to change bright color
    const isTyper = useSelector(state => state.texts._id); 

    return (    
        <div 
            id='logo'
            style={isTyper && {color: '#959595'}}
        >
            <span>TTyper !</span>
        </div>
    )
}