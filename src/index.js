import React from 'react';
import {render} from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';

// Main app
import App from './App';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => {
        console.log('Service worker registered.', reg);
      });
  });
}

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#app')
);