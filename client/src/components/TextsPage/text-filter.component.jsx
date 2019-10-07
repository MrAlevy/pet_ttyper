import React from 'react';

export const TextFilter = (props) => {
    return (
        <div className='main-menu-items'>
            <div                            
                name='my' 
                className='main-menu-item'
                onClick={(e) => props.handleClick(e)} 
            >
                My
            </div>
            <div className='separator'>
                |
            </div>
            <div
                name='global' 
                className='main-menu-item' 
                onClick={(e) => props.handleClick(e)}
            >
                Global
            </div>
            <div className='separator'>
                |
            </div>
            <div
                name='favorites' 
                className='main-menu-item' 
                onClick={(e) => props.handleClick(e)}
            >
                Favorites
            </div>
        </div>
    )
}