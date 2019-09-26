import { combineReducers } from 'redux'
import { texts, textsIsLoading, textsError } from './texts'

export default combineReducers({
    texts,
    textsIsLoading,
    textsError
})
