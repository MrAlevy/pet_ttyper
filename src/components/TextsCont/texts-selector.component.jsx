import React from 'react';

const handleChange = (e) => {
    console.log(e.target.name + ':' + e.target.value)
}

export const TextsSelector = () => { 
    return (    
        <div className='second-menu'>
            <input
                name='search'
                className='second-menu-item search'
                onChange={(e) => handleChange(e)}     
                value='search...'
            />
            <select                            
                name='sortBy' 
                className='second-menu-item sort-by'
                onChange={(e) => handleChange(e)} 
            >
                <option value=''>sort by ...</option>
                <option value='rate'>rate</option>
                <option value='date'>date</option>
            </select>
            <select                            
                name='language' 
                className='second-menu-item language'
                onChange={(e) => handleChange(e)} 
            >
                <option value=''>language</option>
                <option value='latin'>latin</option>
                <option value='cyrillic'>cyrillic</option>
            </select>
        </div>
    );
}