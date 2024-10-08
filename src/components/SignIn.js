import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'; // Create a CSS file for styles

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here (e.g., API call)
    console.log('Signing in with:', { email, password });
    // Redirect to Dashboard or respective component after sign-in
    navigate('/'); // Redirect to the dashboard after successful sign-in
  };

  // Inline style for the background image
  const containerStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={containerStyle}>
      <div className="signin-box">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
}

export default SignIn;
