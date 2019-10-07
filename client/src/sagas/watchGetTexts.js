import { put, call, takeEvery, select } from 'redux-saga/effects';
import { GET_TEXTS_FETCH } from '../constants/ActionTypes';
import {
    getTextsSuccess,
    getTextsIsLoading,
    getTextsError 
} from '../actions';


export function* watchGetTexts() {
    yield takeEvery(GET_TEXTS_FETCH, getTextsFetchAsync)
}

function* getTextsFetchAsync(action) {
    
    try {
        yield put(getTextsError(false))
        yield put(getTextsIsLoading(true))

        let sortByFilter = yield select((state) => state.sortByFilter)
        let alphabetFilter = yield select((state) => state.alphabetFilter)
        let searchFilter = yield select((state) => state.searchFilter)
        
        console.log(`${action.whatsFetching}: ${sortByFilter} - ${alphabetFilter} - ${searchFilter}`)

        const data = yield call(async () => {
            let res

            switch (action.whatsFetching) {
                case 'allTexts':
                default: 
                    res = await fetch(`/api/texts/?sortBy=${sortByFilter}&alphabet=${alphabetFilter}&search=${searchFilter}`)
                    break;
                case 'textById':
                    res = await fetch(`/api/texts/${action.id}`)
                    break;
            }

            return res.ok 
                ? res.json() 
                : false
        })
        !data 
            ? yield put(getTextsError(true))
            : yield put(getTextsSuccess(data))
        yield put(getTextsIsLoading(false))
    } catch (err) {
        console.log(err)
        yield put(getTextsIsLoading(false))
        yield put(getTextsError(true))
    }
}
