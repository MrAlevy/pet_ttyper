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
            <label htmlFor='sortBy'>sort by: </label>
            <select                            
                name='sortBy' 
                className='second-menu-item sort-by'
                onChange={(e) => handleChange(e)} 
            >
                <option value=''>-</option>
                <option value='rate'>rate</option>
                <option value='date'>date</option>
            </select>
            <label htmlFor='language'>alphabet: </label>
            <select                            
                name='language' 
                className='second-menu-item language'
                onChange={(e) => handleChange(e)} 
            >
                <option value=''>-</option>
                <option value='latin'>latin</option>
                <option value='cyrillic'>cyrillic</option>
            </select>
        </div>
    );
}