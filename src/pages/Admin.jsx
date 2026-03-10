import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();

  const users = [
    { id: 1, name: 'John Farmer', email: 'john@farm.com', role: 'Farmer', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@farm.com', role: 'Technician', status: 'Active' },
    { id: 3, name: 'Bob Wilson', email: 'bob@farm.com', role: 'Farmer', status: 'Inactive' },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <img src="/agrelogo.jpg" alt="Logo" className="dash-logo" />
        <h1>Admin Dashboard</h1>
        <p>Welcome, Administrator</p>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </header>

      <div className="search-container">
        <h2>User Management</h2>
      </div>

      <main className="admin-main">
        <div className="card">
          <h2>Registered Users</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <span className={`badge ${user.status.toLowerCase()}`}>{user.status}</span>
                  </td>
                  <td>
                    <button className="action-btn">Edit</button>
                    <button className="action-btn delete">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <footer className="admin-footer">
        <p>&copy; 2024 IoT Rainwater Irrigation System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Admin;
