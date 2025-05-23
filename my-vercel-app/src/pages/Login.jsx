import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling
import loginImage from '../images/logn.png'; // Explicitly import the image

export default function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Allow any credentials
    setIsAuthenticated(true);
    navigate('/');
  };

  return (
    <div className="login-page">
      {/* Left Section with Image */}
      <div className="login-left">
        <img src={loginImage} alt="Login Illustration" className="login-image" />
      </div>

      {/* Right Section with Login Form */}
      <div className="login-right">
        <div className="login-box">
          <h1>Welcome to MUN </h1>
          <p>Enter your account details below</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="login-button">
              Sign in
            </button>
          </form>
          <p className="forgot-password">Forgot your password?</p>
          <p className="register-link">
            Don't have an account? <a href="/register">Get Started</a>
          </p>
        </div>
      </div>
    </div>
  );
}

