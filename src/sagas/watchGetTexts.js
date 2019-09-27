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

function* getTextsFetchAsync() {
    try {
        yield put(getTextsError(false))
        yield put(getTextsIsLoading(true))
        const userInfo = yield call(async () => {
            const res = await fetch(
                `http://localhost:3001/api/texts/`
            )
            return res.ok 
                ? res.json() 
                : false
        })
        yield put(getTextsIsLoading(false))
        !userInfo 
            ? yield put(getTextsError(true))
            : yield put(getTextsSuccess(userInfo))
    } catch (err) {
        console.log(err)
        yield put(getTextsError(true))
    }
}
