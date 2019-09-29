import React from 'react';
import { useDispatch } from 'react-redux';
import { getTextsFetch, setAlph } from '../../actions';

export const TextsSelector = () => { 
    const dispatch = useDispatch()

    const handleChange = (e) => {
        console.log(e.target.name + ':' + e.target.value)
    }


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
                onChange={(e) => dispatch(getTextsFetch('allTexts', undefined, e.target.value))} 
            >
                <option value='nosort'>-</option>
                <option value='rate'>rate</option>
                <option value='date'>date</option>
            </select>
            <label htmlFor='language'>alphabet: </label>
            <select                            
                name='language' 
                className='second-menu-item language'
                onChange={(e) => dispatch(getTextsFetch('allTexts', undefined, undefined, e.target.value))} 
            >
                <option value='noalphabet'>-</option>
                <option value='latin'>latin</option>
                <option value='cyrillic'>cyrillic</option>
            </select>
        </div>
    );
}