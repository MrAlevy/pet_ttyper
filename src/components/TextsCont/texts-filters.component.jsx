import React from 'react';
import './texts.scss';

const handleClick = (e) => {
    console.log(e.target)
}

export const TextsFilters = (props) => { 
    return (    
        <div className='texts-filter'>
            <div className='filters'>
                <div                            
                    name='my' 
                    className='filter f1'
                    onClick={(e) => handleClick(e)} 
                >
                    My
                </div>
                <div
                    name='global' 
                    className='filter f2' 
                    onClick={(e) => handleClick(e)}
                >
                    Global
                </div>
                <div
                    name='favorites' 
                    className='filter f3' 
                    onClick={(e) => handleClick(e)}
                >
                    Favorites
                </div>
            </div>
            <div className='texts-add-button'>
                <button onClick={() => props.addTextButtonClick()}>Upload</button>
            </div>
        </div>
    );
}