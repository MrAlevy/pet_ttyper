import { combineReducers } from 'redux'
import { 
    texts, textsIsLoading, textsError,
    sortByFilter, alphabetFilter
} from './texts'

export default combineReducers({
    texts,
    textsIsLoading,
    textsError,
    sortByFilter,
    alphabetFilter
})
