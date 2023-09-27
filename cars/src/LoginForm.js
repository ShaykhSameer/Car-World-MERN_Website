import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

import './login.css'; 

const LoginForm = () => {
  
  const navigate=useNavigate();

  function handleClick(){
    navigate("/RegiForm");
  }
  return (
    <div className="signup-box1">
      <h1>Login</h1>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      
      <label htmlFor="password">Password</label>
      <input type="password" id="password" />
      <button onClick={handleClick}>Login</button>
      Already have an account? <Link to="/Reg">Signup</Link>


      </div>
  );
}



export default LoginForm;
