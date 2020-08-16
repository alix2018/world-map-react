import React, {useState} from 'react';
import './LoginPage.css';
import * as translations from '../../translations.json';

function LoginPage({statusError, onLoginClick}) {
  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const wrongCredentials = 'The combination of your email and password is incorrect. Please try again.';

function LoginPage({isLoading, onLoginClick}) {
  function handleClick() {
    if (onLoginClick) {
      onLoginClick();
    }
  }

  return (
    <>
      <article className="login">
        {console.log("translations", translations.login)}
        <img alt="world mappie logo" src="/public/assets/worldmappie.svg" width="120px"/>
        <a className="registration">Registration</a>
        <section>
          <h1>Time to travel</h1>
          <form>
            <div>
              <label className={isEmailFocus ? 'active' : ''} aria-label="email-field" onClick={onEmailFocus}>Email</label>
              <input type="text" value={emailValue} onFocus={onEmailFocus} onBlur={onEmailBlur} onChange={e => setEmailValue(e.target.value)}/>
            </div>
            <div>
              <label className={isPasswordFocus ? 'active' : ''} aria-label="password-field" onClick={onPasswordFocus}>Password</label>
              <input type={showPassword ? 'text' : 'password'} value={passwordValue} onFocus={onPasswordFocus} onBlur={onPasswordBlur} onChange={e => setPasswordValue(e.target.value)}/>
              <img hidden={showPassword} alt="eye show" src="/public/assets/password-show.svg" onClick={toggleShowPassword}/>
              <img hidden={!showPassword} alt="eye hide" src="/public/assets/password-hide.svg" onClick={toggleShowPassword}/>
            </div>
          </form>
          {statusError ? (
            <error>
              <div/>
              <p>{statusError ? wrongCredentials : ''}</p>
            </error>
          ) : null}
          <button type="submit" onClick={handleClick}>Log in</button>
        </section>
      </article>
      <div className="photo"/>
    </>
  );
}

export default LoginPage;