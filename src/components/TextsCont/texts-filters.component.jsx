import React from 'react';

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
                <div className='sep'>
                    |
                </div>
                <div
                    name='global' 
                    className='filter f2' 
                    onClick={(e) => handleClick(e)}
                >
                    Global
                </div>
                <div className='sep'>
                    |
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
                <button className='addBtn' onClick={() => props.addTextButtonClick()}>upload</button>
            </div>
        </div>
    );
}