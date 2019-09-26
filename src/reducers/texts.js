import { 
    GET_TEXTS_SUCCESS, 
    GET_TEXTS_IS_LOADING, 
    GET_TEXTS_ERROR 
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
