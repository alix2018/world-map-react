import React, {useState} from 'react';
import './LoginPage.css';

function LoginPage({isLoading, onLoginClick}) {
  const [isEmailFocus, setIsEmailFocus] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  function handleClick() {
    if (onLoginClick) {
      onLoginClick();
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

  return (
    <>
      <main>
        <section>
          <h1>Time to travel</h1>
          <form>
            <div className="email-field">
              <label className={isEmailFocus ? 'active' : ''} aria-label="email-field" onClick={onEmailFocus}>Email</label>
              <input type="text" value={emailValue} onFocus={onEmailFocus} onBlur={onEmailBlur} onChange={e => setEmailValue(e.target.value)}/>
            </div>
            <div className="password-field">
              <label className={isPasswordFocus ? 'active' : ''} aria-label="password-field" onClick={onPasswordFocus}>Password</label>
              <input type={showPassword ? 'text' : 'password'} value={passwordValue} onFocus={onPasswordFocus} onBlur={onPasswordBlur} onChange={e => setPasswordValue(e.target.value)} />
              <img alt="eye hide" src="../../public/assets/password-show.svg" onClick={toggleShowPassword} hidden={showPassword}/>
              <img alt="eye hide" src="../../public/assets/password-hide.svg" onClick={toggleShowPassword} hidden={!showPassword}/>
            </div>
          </form>
          <button type="submit" onClick={handleClick}>Log in</button>
          <span>{isLoading ? 'isloading' : ''}</span>
        </section>
      </main>
      <div className="landscape"/>
    </>
  );
}

export default LoginPage;