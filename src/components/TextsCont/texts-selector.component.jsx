import React from 'react';
/* import './texts-selectors.scss'; */

const handleChange = (e) => {
    console.log(e.target.name + ':' + e.target.value)
}

export const TextsSelector = () => { 
    return (    
        <div className='texts-selector'>
            <select                            
                name='sortBy' 
                className='selectSortBy'
                onChange={(e) => handleChange(e)} 
            >
                <option value=''>sort by ...</option>
                <option value='rate'>rate</option>
                <option value='date'>date</option>
            </select>
            <select                            
                name='language' 
                className='language'
                onChange={(e) => handleChange(e)} 
            >
                <option value=''>language</option>
                <option value='latin'>latin</option>
                <option value='cyrillic'>cyrillic</option>
            </select>
            <input
                name='search'
                className='search'
                onChange={(e) => handleChange(e)}     
                value='search...'
            />
        </div>
    );
}