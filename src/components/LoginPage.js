import React from 'react';
import './LoginPage.css';

function LoginPage({isLoading, onLoginClick}) {
  function handleClick() {
    if (onLoginClick) {
      onLoginClick();
    }
  }

  return (
    <>
      <main>
        <section>
          <h1>Time to travel</h1>
          <form>
            <label aria-label="email-field">
              <input type="text" placeholder="Email"/>
            </label>
            <label aria-label="password-field">
              <input type="text" placeholder="Password"/>
            </label>
          </form>
          <button type="submit" onClick={handleClick}>Log in</button>
          {/* <span>{isLoading ? 'isloading' : 'NOT loading'}</span> */}
        </section>
      </main>
      <div className="landscape"></div>
    </>
  );
}

export default LoginPage;