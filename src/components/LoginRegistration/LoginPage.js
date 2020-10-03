import React, {useState} from 'react';
import './LoginPage.css';
import * as translations from '../../../translations';

function LoginPage({statusError, onLoginClick}) {
  const text = translations.login;
  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [imageSide] = useState('right');

  function handleClick() {
    if (onLoginClick) {
      onLoginClick(emailValue, passwordValue);
    }
  }

  function onEmailFocus() {
    setIsEmailFocus(true);
  }

  function onEmailBlur() {
    if (!emailValue) {
      setIsEmailFocus(false);
    }
  }

  function onPasswordFocus() {
    setIsPasswordFocus(true);
  }

  function onPasswordBlur() {
    if (!passwordValue) {
      setIsPasswordFocus(false);
    }
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function onRegistrationClick() {
    // TO REMOVE: setImageSide('left');
  }

  return (
    <>
      <article>
        <img alt="world mappie logo" src="/public/assets/worldmappie.svg" width="120px"/>
        <a href="/registration" aria-label="go to registration" className={imageSide} onClick={onRegistrationClick}>{text.a_registration}</a>
        <section>
          <h1>{text['h1_time-to-travel']}</h1>
          <form>
            <div>
              <label className={isEmailFocus ? 'active' : ''} aria-label="email-field" onClick={onEmailFocus}>{text.label_email}</label>
              <input type="text" value={emailValue} onFocus={onEmailFocus} onBlur={onEmailBlur} onChange={e => setEmailValue(e.target.value)}/>
            </div>
            <div>
              <label className={isPasswordFocus ? 'active' : ''} aria-label="password-field" onClick={onPasswordFocus}>{text.label_password}</label>
              <input type={showPassword ? 'text' : 'password'} value={passwordValue} onFocus={onPasswordFocus} onBlur={onPasswordBlur} onChange={e => setPasswordValue(e.target.value)}/>
              <img hidden={showPassword} alt="eye show" src="/public/assets/password-show.svg" onClick={toggleShowPassword}/>
              <img hidden={!showPassword} alt="eye hide" src="/public/assets/password-hide.svg" onClick={toggleShowPassword}/>
            </div>
          </form>
          {statusError ? (
            <error>
              <div/>
              <p>{statusError ? text.error_combinaison : ''}</p>
            </error>
          ) : null}
          <button type="submit" onClick={handleClick}>{text.btn_login}</button>
        </section>
      </article>
      <div className={`photo ${imageSide}`}/>
    </>
  );
}

export default LoginPage;