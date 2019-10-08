import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { watchGetTexts } from './sagas/watchGetTexts';
import { App } from './App';
import './index.css'

const sagaMiddleware = createSagaMiddleware();
console.log(process.env.NODE_ENV !== 'development')

// disable redux devtool on prod
let store
process.env.NODE_ENV !== 'development' 
    ? store = createStore(
        rootReducer,
        compose (
            applyMiddleware(sagaMiddleware)
        )
    )
    : store = createStore(
        rootReducer,
        compose (
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )


sagaMiddleware.run(watchGetTexts)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);