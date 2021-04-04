import React from 'react';
import root from 'react-shadow';
import {navigate} from 'hookrouter';
import {useSelector, useDispatch} from 'react-redux';
import LoginPage from '../components/LoginRegistration/LoginPage';
import styles from '../components/LoginRegistration/LoginPage.css';
import {fetchToken} from '../store/actions/login';
import {getIsLoading, getError, getToken} from '../store/selectors/login';
import Cookies from '../helpers/cookies';

function Login() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const token = useSelector(getToken);

  if (token && !Cookies.getItem('accessToken')) {
    Cookies.setItem('accessToken', token);
  }

  if (Cookies.getItem('accessToken')) {
    navigate('/home');
  } else {
    navigate('/');
  }

  function handleLoginClick(email, password) {
    dispatch(fetchToken(email, password));
  }

  return (
    <root.section id="login-page">
      <LoginPage isLoading={isLoading} error={error} onLoginClick={handleLoginClick}/>
      <style type="text/css">{styles}</style>
    </root.section>
  );
}

export default Login;