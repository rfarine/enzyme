import React from 'react';
import Root from './components/root';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
});

let store = createStore(rootReducer);

console.log('store', store);

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);