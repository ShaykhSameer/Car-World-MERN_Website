import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css'; 
import axios from 'axios'

function Signup() {
  const [name, setName] = useState(''); // Added name state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSignup = () => {
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      // Display error message if any field is empty
      setShowErrorMessage(true);
      setShowSuccessMessage(false); // Hide success message
    } else {
      // Implement your signup logic here
      console.log('Signing up with:', name, email, password);

      // Assuming signup was successful, show the success message
      setShowSuccessMessage(true);
      setShowErrorMessage(false); 
      axios.post('http://localhost:3001/signup',{name,email,password}).then(res=>console.log(res)).catch(err => console.log(err))
       
    }
  };

  return (
    <div className="signup-box">
      <h1>Sign Up</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)} // Handle name input
      />
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
      <button onClick={handleSignup}>Sign Up</button>

      {showSuccessMessage && (
        <p style={{ color: 'green' }}>Signup successful! You can now log in.</p>
      )}

      {showErrorMessage && (
        <p style={{ color: 'red' }}>All fields are mandatory. Please fill in all required information.</p>
      )}

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      </div>
    
  );
}

export default Signup;
