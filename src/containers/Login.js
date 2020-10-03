import React from 'react';
import root from 'react-shadow';
import {navigate} from 'hookrouter';
import {useSelector, useDispatch} from 'react-redux';
import LoginPage from '../components/LoginRegistration/LoginPage';
import styles from '../components/LoginRegistration/LoginPage.css';
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

  return (
    <root.section id="login-page">
      <LoginPage isLoading={isLoading} statusError={statusError} onLoginClick={handleLoginClick}/>
      <style type="text/css">{styles}</style>
    </root.section>
  );
}

export default Login;