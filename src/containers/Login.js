import React from 'react';
import {navigate} from 'hookrouter';
import {useSelector, useDispatch} from 'react-redux';
import LoginPage from '../components/LoginPage';
import {fetchToken} from '../store/actions/login';
import {getIsLoading, getStatusError, getToken} from '../store/selectors/login';

function Login() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const statusError = useSelector(getStatusError);
  const token = useSelector(getToken);

  if (token) {
    navigate('/home');
  }

  function handleLoginClick(email, password) {
    dispatch(fetchToken(email, password));
  }

  return <LoginPage isLoading={isLoading} statusError={statusError} onLoginClick={handleLoginClick}/>;
}

export default Login;