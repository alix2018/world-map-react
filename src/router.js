import React from 'react';
import Login from './containers/Login';
import Registration from './containers/Registration';
import Home from './containers/Home';

const routes = {
  '/': () => <Login/>,
  '/registration': () => <Registration/>,
  '/home': () => <Home/>
};

export default routes;