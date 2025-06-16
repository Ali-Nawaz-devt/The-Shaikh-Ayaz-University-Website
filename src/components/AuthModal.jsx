import './AuthModal.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthModal = ({ onClose }) => {
  const navigate = useNavigate();
  const [view, setView] = useState('signin'); // 'signin' or 'signup'
  const [users, setUsers] = useState([
    { email: 'admin@admin.com', password: 'admin', name: 'Admin' },
  ]);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const exists = users.find(u => u.email === form.email);
    if (exists) return setError('User already exists.');
    const newUser = {
      email: form.email,
      password: form.password,
      name: `${form.firstName} ${form.lastName}`,
    };
    setUsers([...users, newUser]);
    setForm({ email: '', password: '', firstName: '', lastName: '' });
    setView('signin');
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const user = users.find(
      u => u.email === form.email && u.password === form.password
    );
    if (!user) return setError('Invalid credentials.');
    navigate('/dashboard');
    onClose();
  };

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button className="auth-close" onClick={onClose}>×</button>

        <div className="auth-tabs">
          <button
            className={view === 'signin' ? 'active' : ''}
            onClick={() => setView('signin')}
          >
            Sign In
          </button>
          <button
            className={view === 'signup' ? 'active' : ''}
            onClick={() => setView('signup')}
          >
            Sign Up
          </button>
        </div>

        {view === 'signup' ? (
          <form className="auth-form" onSubmit={handleSignUp}>
            <input type="text" name="firstName" placeholder="First Name" required onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last Name" required onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
            {error && <p className="auth-error">{error}</p>}
            <button type="submit" className="auth-submit">Sign Up</button>
          </form>
        ) : (
          <form className="auth-form" onSubmit={handleSignIn}>
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
            {error && <p className="auth-error">{error}</p>}
            <button type="submit" className="auth-submit">Sign In</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
