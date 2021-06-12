import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from '../src/services/reducers/index';
import rootSaga from "../src/services/saga/index";
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <Route component={App}/>
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
