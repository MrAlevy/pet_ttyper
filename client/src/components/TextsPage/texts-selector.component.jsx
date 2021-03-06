import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTextsFetch, setSortByFilter, setAlphabetFilter, setSearchFilter } from '../../actions';

export const TextsSelector = () => { 
    const dispatch = useDispatch();

    const sortByFilter = useSelector(state => state.sortByFilter);
    const alphabetFilter = useSelector(state => state.alphabetFilter);
    const searchFilter = useSelector(state => state.searchFilter);

    const handleChange = (e) => {
        console.log(e.target.name + ':' + e.target.value);
        switch (e.target.name) {
            case 'sortBy':
                dispatch(setSortByFilter(e.target.value));
                break;
            case 'language':
                dispatch(setAlphabetFilter(e.target.value));
                break;
            case 'search':
                dispatch(setSearchFilter(e.target.value));
                break;
            default: 
                return
        }
        dispatch(getTextsFetch('allTexts', undefined, sortByFilter, alphabetFilter, searchFilter));
    }

    return (   
        <div className='second-menu'>
            <input
                name='search'
                className='second-menu-item search'
                onChange={(e) => handleChange(e)}
                placeholder='search ...'
                value={searchFilter === 'nosearch' ? '' : searchFilter}
            />
            <label htmlFor='sortBy'>sort by: </label>
            <select                            
                name='sortBy' 
                className='second-menu-item sort-by'
                onChange={(e) => handleChange(e)}
                value={sortByFilter}
            >
                <option value='nosort'>-</option>
                <option value='rate'>rate</option>
                <option value='date'>date</option>
            </select>
            <label htmlFor='language'>alphabet: </label>
            <select                            
                name='language' 
                className='second-menu-item language'
                onChange={(e) => handleChange(e)} 
                value={alphabetFilter}
            >
                <option value='noalphabet'>-</option>
                <option value='latin'>latin</option>
                <option value='cyrillic'>cyrillic</option>
            </select>
        </div>
    );
}