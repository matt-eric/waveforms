import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore from './configureStore'

// Create redux store with history
const initialState = {};
const store = configureStore(initialState);

const composeApp = App => (
  <Provider store={store}>
    <App />
  </Provider>
)

const render = messages => {
  const App = require('./App').default
  ReactDOM.render(composeApp(App), document.getElementById('root'));
};

render()

if (module.hot) {
  module.hot.accept('./App', render);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();