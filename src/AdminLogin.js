import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'admin@example.com' && password === 'adminpassword') {
      localStorage.setItem('isAdminAuthenticated', 'true');
      navigate('/admindashboard');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div>
      <h1>Admin Login</h1>  <button className='backbutton'><Link to="/">⬅️ Back</Link></button>
      <input
        type="text"
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
