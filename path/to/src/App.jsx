import React from 'react';
import LoginForm from './LoginForm.jsx';
import loginBackground from './login-bg.svg';

function App() {
  return (
    <div className="app-container">
      <img src={loginBackground} alt="Login Background" className="login-bg" />
      <LoginForm />
    </div>
  );
}

export default App;
