import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers } from 'redux';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import 'tachyons';
import './index.css';
import App from './containers/App.component';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots })
// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger));
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
