import './ApplyPage.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import db from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const ApplyPage = () => {
  const navigate = useNavigate();
  const [view, setView] = useState('signin');
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

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const usersRef = collection(db, 'users');
      const querySnapshot = await getDocs(usersRef);

      const exists = querySnapshot.docs.find(doc => doc.data().email === form.email);
      if (exists) return setError('User already exists.');

      await addDoc(usersRef, {
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        password: form.password,
      });

      setForm({ email: '', password: '', firstName: '', lastName: '' });
      setView('signin');
    } catch (err) {
      console.error(err);
      setError('Error creating user.');
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const usersRef = collection(db, 'users');
      const querySnapshot = await getDocs(usersRef);

      const user = querySnapshot.docs.find(doc => {
        const data = doc.data();
        return data.email === form.email && data.password === form.password;
      });

      if (!user) return setError('Invalid credentials.');

      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setError('Error signing in.');
    }
  };

  return (
    <div className="apply-page">
      <div className="auth-box">
        <div className="auth-tabs">
          <button className={view === 'signin' ? 'active' : ''} onClick={() => setView('signin')}>Sign In</button>
          <button className={view === 'signup' ? 'active' : ''} onClick={() => setView('signup')}>Sign Up</button>
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

export default ApplyPage;
