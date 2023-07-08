import React, { useState } from 'react';
import './Register.css';
import {Outlet,  Link } from "react-router-dom";

const Register = ({ handleToggleRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

 

  return (
    <div className="register-container">
      <h2>Register</h2>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <button type="button" >
          Register
        </button>
        <p>
          Already have an account?{' '}
          <span className="login-link" onClick={handleToggleRegister}>
          <Link to='/Login' >  Login here </Link>
           
          </span>
        </p>
        <button className="back-button" >
        <Link to='/' className='back' > Back to Home Page!  </Link> 
          
        </button>
      </form>
    </div>
  );
};

export default Register;
