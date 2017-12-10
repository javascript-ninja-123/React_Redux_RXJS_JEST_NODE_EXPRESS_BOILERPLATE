import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import {createEpicMiddleware} from 'redux-observable';

import APP from './components/App';
import reducers from './reducers';
import rootEpic from './epics';
const epicMiddleware = createEpicMiddleware(rootEpic);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancer(
    applyMiddleware(thunk,epicMiddleware)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <APP />
  </Provider>
  , document.getElementById('root'));
