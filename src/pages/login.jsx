import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    // Simulate authentication
    setTimeout(() => {
      // Check against stored users in localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const validUser = users.find(u => 
        (u.email === username || u.email === username) && u.password === password
      );
      
      // Also allow default admin account
      if ((username === 'admin' && password === 'password') || validUser) {
        navigate('/dashboard');
      } else {
        setError('Invalid credentials. Please try again.');
      }
      setLoading(false);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src="/logo192.png" alt="System Logo" className="logo" />
        <h1>IoT Rainwater Irrigation System</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username or Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? 'Authenticating...' : 'Login'}
          </button>
        </form>
        <button type="button" className="forgot" onClick={() => alert('Password reset functionality coming soon!')}>Forgot Password?</button>
        <p className="signup-link">Don't have an account? <Link to="/signup">Sign Up</Link></p>
        {loading && (
          <div className="loading-indicator">
            <div className="spinner"></div>
            <span>Authenticating...</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
