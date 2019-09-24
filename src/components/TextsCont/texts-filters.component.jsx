import React from 'react';

const handleClick = (e) => {
    console.log(e.target)
}

const addTextButtonClick = () => {
    console.log(1010)
}

export const TextsFilters = (props) => { 
    return (    
        <div className='main-menu texts-filter'>
            <div className='main-menu-items'>
                <div                            
                    name='my' 
                    className='main-menu-item'
                    onClick={(e) => handleClick(e)} 
                >
                    My
                </div>
                <div className='separator'>
                    |
                </div>
                <div
                    name='global' 
                    className='main-menu-item' 
                    onClick={(e) => handleClick(e)}
                >
                    Global
                </div>
                <div className='separator'>
                    |
                </div>
                <div
                    name='favorites' 
                    className='main-menu-item' 
                    onClick={(e) => handleClick(e)}
                >
                    Favorites
                </div>
            </div>
            <div className='texts-add-button'>
                <button className='addBtn' onClick={() => addTextButtonClick()}>upload</button>
            </div>
        </div>
    );
}