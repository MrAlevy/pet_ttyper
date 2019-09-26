import { 
    GET_TEXTS_SUCCESS, 
    GET_TEXTS_IS_LOADING, 
    GET_TEXTS_ERROR,
    GET_TEXTS_FETCH
} from '../constants/ActionTypes'

export const getTextsFetch = () => ({
    type: GET_TEXTS_FETCH
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
