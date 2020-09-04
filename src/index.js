import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

// Main app
import App from './App';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => {
        console.log('Service worker registered.');
      });
  });
}

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#app')
);