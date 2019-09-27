import { put, call, takeEvery } from 'redux-saga/effects'
import { GET_TEXTS_FETCH } from '../constants/ActionTypes'
import {
    getTextsSuccess,
    getTextsIsLoading,
    getTextsError 
} from '../actions'

export function* watchGetTexts() {
    yield takeEvery(GET_TEXTS_FETCH, getTextsFetchAsync)
}

function* getTextsFetchAsync(action) {
    try {
        console.log('saga action: ', action)
        yield put(getTextsError(false))
        yield put(getTextsIsLoading(true))
        const data = yield call(async () => {
            let res

            switch (action.whatsFetching) {
                case 'allTexts':
                    res = await fetch(`http://localhost:3001/api/texts/`)
                    break;
                case 'textById':
                    res = await fetch(`http://localhost:3001/api/texts/${action.id}`)
                    break;
                default:
                    return;
            }

            return res.ok 
                ? res.json() 
                : false
        })
        yield put(getTextsIsLoading(false))
        !data 
            ? yield put(getTextsError(true))
            : yield put(getTextsSuccess(data))
    } catch (err) {
        console.log(err)
        yield put(getTextsError(true))
    }
}