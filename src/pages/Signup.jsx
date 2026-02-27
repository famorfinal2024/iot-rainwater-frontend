import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/login.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    setLoading(true);
    setError('');
    // Simulate signup
    setTimeout(() => {
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
      } else if (email && password) {
        // Save user to localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const existingUser = users.find(u => u.email === email);
        if (existingUser) {
          setError('Email already registered.');
        } else {
          users.push({ email, password });
          localStorage.setItem('users', JSON.stringify(users));
          alert('Signup successful! Please login.');
          navigate('/login');
        }
      } else {
        setError('Please fill in all fields.');
      }
      setLoading(false);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignup();
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src="/logo192.png" alt="System Logo" className="logo" />
        <h1>IoT Rainwater Irrigation System</h1>
        <form onSubmit={handleSubmit}>
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
        {loading && (
          <div className="loading-indicator">
            <div className="spinner"></div>
            <span>Signing up...</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Signup;
