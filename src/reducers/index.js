import { combineReducers } from 'redux'
import { texts, textsIsLoading, textsError, alph } from './texts'

export default combineReducers({
    texts,
    textsIsLoading,
    textsError,
    alph
})
