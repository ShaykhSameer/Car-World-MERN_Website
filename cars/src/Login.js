import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios'
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showEmptyFieldsError, setShowEmptyFieldsError] = useState(false); // New state variable

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      // Display error message if any field is empty
      setShowEmptyFieldsError(true);
    } else {
      // Implement your login logic here
      console.log('Logging in with:', email, password);
    }
  };

  const navigate=useNavigate();

  function handleClick(){
    axios.post('http://localhost:3001/login',{email,password})
        .then(res=>{
        alert(res.data.message)
        if (res.data.message === "Login successfull") {
            
    navigate("/Home");
        }
      })
        
  }

  return (
    <div className="login-box">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick}>Login</button>
      
      {showEmptyFieldsError && (
        <p style={{ color: 'red' }}>Email and password are required.</p>
      )}

      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default Login;
