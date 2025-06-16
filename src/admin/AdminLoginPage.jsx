import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLoginPage.css';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const validEmail = 'admin@saus.edu.pk';
    const validPassword = 'admin123';

    if (email.trim().toLowerCase() === validEmail && password === validPassword) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h2>Admin Login</h2>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError('');
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError('');
          }}
        />
        {error && <p className="error-msg">{error}</p>}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default AdminLoginPage;
