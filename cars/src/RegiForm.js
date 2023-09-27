import React, { useState } from 'react';
import './reg.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm'


function RegiForm() {
  const navigate=useNavigate();
  function handleClick(){
    navigate("/LoginForm")
  }

    
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All Fields Are Mandatory");
    } else {
      setFlag(true);
    }
  }

  return (
    <>
      {flag && <h2 className='ui-define'>Hello {inputData.name}, You've Registered Successfully</h2>}
      <form className='container' onSubmit={handleSubmit}>
        <div className='header'>
          <h1>REGISTRATION FORM</h1>
        </div>
        <div>
          <input
            type='text'
            placeholder="Enter Your Name"
            name="name"
            value={inputData.name}
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder="Enter Your Email"
            name="email"
            value={inputData.email}
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder="Enter Your Password"
            name="password"
            value={inputData.password}
            onChange={handleData}
          />
        </div>
        <div>
          
          <button type='submit' onClick={handleClick}>Submit</button>
         
        </div>
        
      </form>
    </>
  );
}

export default RegiForm;
