import { put, call } from 'redux-saga/effects'
import {
    getTextItemSuccess,
    getTextItemIsLoading,
    getTextItemError 
} from '../actions'

export default function* getTextItemFetchAsync(action) {
    try {
        yield put(getTextItemError(false))
        yield put(getTextItemIsLoading(true))
        const textItem = yield call(async () => {
            const res = await fetch(`http://localhost:5000/texts/type/${action.id}`)
            await console.log(':', action)
            return res.ok 
                ? res.json() 
                : false
        })
        yield put(getTextItemIsLoading(false))
        !textItem 
            ? yield put(getTextItemError(true))
            : yield put(getTextItemSuccess(textItem))
    } catch (err) {
        console.log(err)
        yield put(getTextItemError(true))
    }
}
