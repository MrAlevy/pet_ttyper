import { 
    GET_TEXT_ITEM_SUCCESS, 
    GET_TEXT_ITEM_IS_LOADING, 
    GET_TEXT_ITEM_ERROR 
} from '../constants/ActionTypes'

export const textItem = (state={}, action) => {
    switch (action.type) {
        case GET_TEXT_ITEM_SUCCESS:
            return action.payload
        default:
            return state
    }
}

export const textItemIsLoading = (state=false, action) => {
    switch (action.type) {
        case GET_TEXT_ITEM_IS_LOADING:
            return action.isLoading
        default:
            return state
    }
}

export const textItemError = (state=false, action) => {
    switch (action.type) {
        case GET_TEXT_ITEM_ERROR:
            return action.error
        default:
            return state
    }
}
