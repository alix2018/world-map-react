import React, {useState} from 'react';
import {A} from 'hookrouter';
import './RegistrationPage.css';
import * as translations from '../../translations';

function RegistrationPage({registrationError, onRegistrationClick}) {
  const text = translations.registration;
  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const emailRegex = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
  const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,32})');

  function handleSubmitClick() {
    if (!showEmailError && !showPasswordError && onRegistrationClick) {
      onRegistrationClick(emailValue, passwordValue);
    }
  }

  function onEmailFocus() {
    setIsEmailFocus(true);
  }

  function onEmailBlur() {
    if (!emailValue) {
      setIsEmailFocus(false);
    }

    setShowEmailError(!emailRegex.test(emailValue));
  }

  function onPasswordFocus() {
    setIsPasswordFocus(true);
  }

  function onPasswordBlur() {
    if (!passwordValue) {
      setIsPasswordFocus(false);
    }

    setShowPasswordError(!passwordRegex.test(passwordValue));
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function onLoginClick() {
    // TO REMOVE: setImageSide('right');
  }

  return (
    <>
      <div className="photo"/>
      <article>
        <A href="/" aria-label="go to login" onClick={onLoginClick}>{text.a_login}</A>
        <section>
          <img alt="world mappie logo" src="/public/assets/worldmappie.svg" width="120px"/>
          <h2>{text['h2_sign-up']}</h2>
          <form>
            <div className="email-form">
              <label className={isEmailFocus ? 'active' : ''} aria-label="email-field" onClick={onEmailFocus}>{text.label_email}</label>
              <input type="text" value={emailValue} onFocus={onEmailFocus} onBlur={onEmailBlur} onChange={e => setEmailValue(e.target.value)}/>
            </div>
            {showEmailError ? (
              <error>
                <div/>
                <p>{showEmailError ? text.error_email : ''}</p>
              </error>
            ) : null}
            <div className="password-form">
              <label className={isPasswordFocus ? 'active' : ''} aria-label="password-field" onClick={onPasswordFocus}>{text.label_password}</label>
              <input type={showPassword ? 'text' : 'password'} value={passwordValue} onFocus={onPasswordFocus} onBlur={onPasswordBlur} onChange={e => setPasswordValue(e.target.value)}/>
              <img hidden={showPassword} alt="eye show" src="/public/assets/password-show.svg" onClick={toggleShowPassword}/>
              <img hidden={!showPassword} alt="eye hide" src="/public/assets/password-hide.svg" onClick={toggleShowPassword}/>
            </div>
            {showPasswordError ? (
              <error>
                <div/>
                <p>{showPasswordError ? text.error_password : ''}</p>
              </error>
            ) : null}
          </form>
          {registrationError ? (
            <error>
              <div/>
              <p>{registrationError ? 'Something went wrong' : ''}</p>
            </error>
          ) : null}
          <button type="submit" onClick={handleSubmitClick}>{text.btn_register}</button>
        </section>
      </article>
    </>
  );
}

export default RegistrationPage;