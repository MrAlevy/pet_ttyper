import { all, call, takeEvery } from 'redux-saga/effects'
import getTextsFetchAsync from './watchGetTexts'
import getTextItemFetchAsync from './watchGetTextItem'
import { GET_TEXTS_FETCH, GET_TEXT_ITEM_FETCH } from '../constants/ActionTypes'

export default function* rootSaga() {
    yield [
        takeEvery(GET_TEXTS_FETCH, getTextsFetchAsync),
        takeEvery(GET_TEXT_ITEM_FETCH, getTextItemFetchAsync)
    ]
}

