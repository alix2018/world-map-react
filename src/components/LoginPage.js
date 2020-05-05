import React from 'react';

function LoginPage({isLoading, onLoginClick}) {
  function handleClick() {
    if (onLoginClick) {
      onLoginClick();
    }
  }

  return (
    <>
      <h1>LOGIN PAGE</h1>
      <button type="submit" onClick={handleClick}>Log in</button>
      <div>{isLoading ? 'isloading' : 'NOT loading'}</div>
    </>
  );
}

export default LoginPage;