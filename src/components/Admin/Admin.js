// src/components/Admin/Admin.js
import React from 'react';

function Admin() {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Manage Users</h3>
        <ul>
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
        </ul>
      </div>
      <div>
        <h3>Transaction Overview</h3>
        <p>No transactions available</p>
      </div>
    </div>
  );
}

export default Admin;
