
import React, { useState } from 'react';
import './Login.css';
import {Link } from "react-router-dom"

const Login = ({ handleToggleRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  

 

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="button" >
          Login
        </button>
        <p>
          New user?{' '}
          <span className="register-link" onClick={handleToggleRegister}>
          <Link to='/Register' >  Register here  </Link>
           
          </span>
        </p>
        <button className="back-button" >
        <Link to='/' className='back' > Back to Home Page!  </Link> 
          
        </button>
      </form>
    </div>
  );
};

export default Login;

