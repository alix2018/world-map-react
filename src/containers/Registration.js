import React from 'react';
import root from 'react-shadow';
import RegistrationPage from '../components/LoginRegistration/RegistrationPage';
import styles from '../components/LoginRegistration/RegistrationPage.css';

function Registration() {
  return (
    <root.section id="registration-page">
      <RegistrationPage/>
      <style type="text/css">{styles}</style>
    </root.section>
  );
}

export default Registration;