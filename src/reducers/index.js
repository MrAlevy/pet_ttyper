import { combineReducers } from 'redux'
import { texts, textsIsLoading, textsError } from './texts'
import { textItem, textItemIsLoading, textItemError } from './textItem'

export default combineReducers({
    texts,
    textsIsLoading,
    textsError,
    textItem,
    textItemIsLoading,
    textItemError
})
