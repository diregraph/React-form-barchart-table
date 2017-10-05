import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import allReducers from './reducers/index';
import App from './components/app';

const store = createStore(allReducers,applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root')
);

