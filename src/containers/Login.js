import React from 'react';
import {navigate} from 'hookrouter';
import {useSelector, useDispatch} from 'react-redux';
import LoginPage from '../components/LoginPage';
import {fetchToken} from '../store/actions/login';
import {getIsLoading, getStatusError, getToken} from '../store/selectors/login';
import Cookies from '../helpers/cookies';

function Login() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const statusError = useSelector(getStatusError);
  const token = useSelector(getToken);

  if (token && !Cookies.getItem('token')) {
    Cookies.setItem('token', token);
    navigate('/home');
  }

  if (Cookies.getItem('token')) {
    navigate('/home');
  }

  function handleLoginClick(email, password) {
    dispatch(fetchToken(email, password));
  }

  return <LoginPage isLoading={isLoading} statusError={statusError} onLoginClick={handleLoginClick}/>;
}

export default Login;