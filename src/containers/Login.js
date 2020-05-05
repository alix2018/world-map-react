import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import LoginPage from '../components/LoginPage';
import {fetchToken} from '../store/actions/login';
import {getIsLoading} from '../store/selectors/login';

function Login() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  function handleLoginClick() {
    dispatch(fetchToken('example@gmail.com', 'password'));
  }

  return <LoginPage isLoading={isLoading} onLoginClick={handleLoginClick}/>;
}

export default Login;