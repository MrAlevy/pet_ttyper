import React from 'react';
import './texts.scss';

const handleClick = (e) => {
    console.log(e.target)
}

export const TextsFilters = (props) => { 
    return (    
        <div className='texts-filter'>
            <div                            
                name='my' 
                className='filter'
                onClick={(e) => handleClick(e)} 
            >
                My
            </div>
            <div
                name='global' 
                className='filter' 
                onClick={(e) => handleClick(e)}
            >
                Global
            </div>
            <div
                name='favorites' 
                className='filter' 
                onClick={(e) => handleClick(e)}
            >
                Favorites
            </div>

            <div className='texts-add-button'>
                <button onClick={() => props.addTextButtonClick()}>Upload</button>
            </div>
        </div>
    );
}