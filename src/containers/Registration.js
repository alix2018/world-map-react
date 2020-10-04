import React from 'react';
import root from 'react-shadow';
import {navigate} from 'hookrouter';
import {useSelector, useDispatch} from 'react-redux';
import {register} from '../store/actions/registration';
import {getIsLoading, getError, getToken} from '../store/selectors/registration';
import RegistrationPage from '../components/LoginRegistration/RegistrationPage';
import styles from '../components/LoginRegistration/RegistrationPage.css';
import Cookies from '../helpers/cookies';

function Registration() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const registrationError = useSelector(getError);
  const token = useSelector(getToken);

  if (token && !Cookies.getItem('accessToken')) {
    Cookies.setItem('accessToken', token);
    navigate('/home');
  }

  function handleRegistrationClick(email, password) {
    dispatch(register(email, password));
  }

  return (
    <root.section id="registration-page">
      <RegistrationPage isLoading={isLoading} registrationError={registrationError} onRegistrationClick={handleRegistrationClick}/>
      <style type="text/css">{styles}</style>
    </root.section>
  );
}

export default Registration;