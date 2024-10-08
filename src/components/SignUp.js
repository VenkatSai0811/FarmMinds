import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Import the CSS file for styles

function SignUp() {
  const [name, setName] = useState(''); // State for the name field
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // For navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    // Mock sign-up process
    console.log('Signing up with:', { name, email, password });

    // After successful sign-up, redirect to SignIn page
    navigate('/signin'); // Redirect to the SignIn page
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required // Making the name field required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required // Making the email field required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required // Making the password field required
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required // Making the confirm password field required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/signin">Sign In</a></p>
      </div>
    </div>
  );
}

export default SignUp;
