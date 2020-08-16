import React from 'react';
import Login from './containers/Login';
import Home from './containers/Home';

const routes = {
  '/': () => <Login/>,
  '/home': () => <Home/>
};

export default routes;