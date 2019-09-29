import { 
    GET_TEXTS_SUCCESS, 
    GET_TEXTS_IS_LOADING, 
    GET_TEXTS_ERROR,
    GET_TEXTS_FETCH,
    SORT_BY_FILTER,
    ALPHABET_FILTER
} from '../constants/ActionTypes'

export const getTextsFetch = (whatsFetching, id, sortBy = 'nosort', alphabet = 'noalphabet') => ({
    type: GET_TEXTS_FETCH,
    whatsFetching,
    id,
    sortBy,
    alphabet
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