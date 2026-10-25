import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    // Here you would typically send data to an API
    console.log('Login submitted:', { username, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Sign in to your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          
          <button type="submit" className="btn btn-primary w-100">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
