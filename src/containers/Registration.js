import React from 'react';
import root from 'react-shadow';
import RegistrationPage from '../components/RegistrationPage';
import styles from '../components/RegistrationPage.css';

function Registration() {
  return (
    <root.section id="registration-page">
      <RegistrationPage/>
      <style type="text/css">{styles}</style>
    </root.section>
  );
}

export default Registration;