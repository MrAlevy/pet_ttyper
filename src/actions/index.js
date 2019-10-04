import { 
    GET_TEXTS_SUCCESS, 
    GET_TEXTS_IS_LOADING, 
    GET_TEXTS_ERROR,
    GET_TEXTS_FETCH,
    SORT_BY_FILTER,
    ALPHABET_FILTER,
    SEARCH_FILTER,
    UPDATE_TEXT,
} from '../constants/ActionTypes'

export const getTextsFetch = (whatsFetching, id, sortBy = 'nosort', alphabet = 'noalphabet', search = 'nosearch') => ({
    type: GET_TEXTS_FETCH,
    whatsFetching,
    id,
    sortBy,
    alphabet,
    search
})

export const getTextsSuccess = (textsArr) => ({
    type: GET_TEXTS_SUCCESS,
    payload: textsArr
})

export const getTextsIsLoading = (bool) => ({
    type: GET_TEXTS_IS_LOADING,
    isLoading: bool
})

export const getTextsError = (bool) => ({
    type: GET_TEXTS_ERROR,
    error: bool
})

export const setSortByFilter = (sortBy) => ({
    type: SORT_BY_FILTER,
    payload: sortBy
})

export const setAlphabetFilter = (alphabet) => ({
    type: ALPHABET_FILTER,
    payload: alphabet
})

export const setSearchFilter = (keyWords) => ({
    type: SEARCH_FILTER,
    payload: keyWords
})

export const updateText = (textFields) => ({
    type: UPDATE_TEXT,
    payload: textFields
})

