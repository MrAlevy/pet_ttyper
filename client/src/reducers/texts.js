import { 
    GET_TEXTS_SUCCESS, 
    GET_TEXTS_IS_LOADING, 
    GET_TEXTS_ERROR,
    SORT_BY_FILTER,
    ALPHABET_FILTER,
    SEARCH_FILTER,
} from '../constants/ActionTypes'

export const texts = (state={}, action) => {
    switch (action.type) {
        case GET_TEXTS_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export const textsIsLoading = (state=false, action) => {
    switch (action.type) {
        case GET_TEXTS_IS_LOADING:
            return action.isLoading
        default:
            return state
    }
}

export const textsError = (state=false, action) => {
    switch (action.type) {
        case GET_TEXTS_ERROR:
            return action.error
        default:
            return state
    }
}

export const sortByFilter = (state='nosort', action) => {
    switch (action.type) {
        case SORT_BY_FILTER:
            return action.payload
        default: 
            return state
    }
}

export const alphabetFilter = (state='noalphabet', action) => {
    switch (action.type) {
        case ALPHABET_FILTER:
            return action.payload
        default: 
            return state
    }
}

export const searchFilter = (state='nosearch', action) => {
    switch (action.type) {
        case SEARCH_FILTER:
            return action.payload
        default: 
            return state
    }
}