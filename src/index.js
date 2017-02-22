import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MainApp from './MainApp';
import './index.css';

function webstore(state = {}, action) {
  if (action.type==='LOGIN_USER') {
    let state = {};
    return [
      ...state,
      action.user
    ];
  }
  if (action.type==='LOGOUT_USER') {
    return [
      ...state,
      action.user
    ];
  }
  return state;
}

const store = createStore(webstore);

ReactDOM.render(
  <Provider store={store}>
    <MainApp />
  </Provider>,
  document.getElementById('root')
);
