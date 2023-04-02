import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { legacy_createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers';
import { Provider } from 'react-redux';

const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);