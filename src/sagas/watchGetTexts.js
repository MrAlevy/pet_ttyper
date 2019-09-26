import { put, call } from 'redux-saga/effects'
import {
    getTextsSuccess,
    getTextsIsLoading,
    getTextsError 
} from '../actions'

export default function* getTextsFetchAsync() {
    try {
        yield put(getTextsError(false))
        yield put(getTextsIsLoading(true))
        const texts = yield call(async () => {
            const res = await fetch(`http://localhost:5000/texts/`)
            return res.ok 
                ? res.json() 
                : false
        })
        yield put(getTextsIsLoading(false))
        !texts 
            ? yield put(getTextsError(true))
            : yield put(getTextsSuccess(texts))
    } catch (err) {
        console.log(err)
        yield put(getTextsError(true))
    }
}
