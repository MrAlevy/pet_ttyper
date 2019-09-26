import { 
    GET_TEXTS_SUCCESS, 
    GET_TEXTS_IS_LOADING, 
    GET_TEXTS_ERROR,
    GET_TEXTS_FETCH,

    UPLOAD_TEXT_SUCCESS, 
    UPLOAD_TEXT_IS_LOADING, 
    UPLOAD_TEXT_ERROR,
    UPLOAD_TEXT_FETCH,

    GET_TEXT_ITEM_SUCCESS, 
    GET_TEXT_ITEM_IS_LOADING, 
    GET_TEXT_ITEM_ERROR,
    GET_TEXT_ITEM_FETCH,
} from '../constants/ActionTypes'

// GET_TEXTS
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


// UPLOAD_TEXT
export const uploadTextFetch = () => ({
    type: UPLOAD_TEXT_FETCH
})

export const uploadTextSuccess = () => ({
    type: UPLOAD_TEXT_SUCCESS,
})

export const uploadTextIsLoading = (bool) => ({
    type: UPLOAD_TEXT_IS_LOADING,
    isLoading: bool
})

export const uploadTextError = (bool) => ({
    type: UPLOAD_TEXT_ERROR,
    error: bool
})


// GET_TEXT_ITEM
export const getTextItemFetch = (id) => ({
    type: GET_TEXT_ITEM_FETCH,
    id
})

export const getTextItemSuccess = (textItem) => ({
    type: GET_TEXT_ITEM_SUCCESS,
    payload: textItem
})

export const getTextItemIsLoading = (bool) => ({
    type: GET_TEXT_ITEM_IS_LOADING,
    isLoading: bool
})

export const getTextItemError = (bool) => ({
    type: GET_TEXT_ITEM_ERROR,
    error: bool
})



