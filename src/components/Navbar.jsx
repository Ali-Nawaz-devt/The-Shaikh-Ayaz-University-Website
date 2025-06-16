import './Navbar.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu if window resizes back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => navigate('/')}>
          <img src="/logo.png" alt="Logo" className="logo-img" />
          <span className="logo-text">Shaikh Ayaz University</span>
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`nav-right ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/programs" onClick={() => setMenuOpen(false)}>Programs</Link></li>
            <li><Link to="/admissions" onClick={() => setMenuOpen(false)}>Admissions</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>

          
          <div className="nav-buttons">
            <button className="admin-btn" onClick={() => { setMenuOpen(false); navigate('/admin'); }}>Admin</button>
            <button className="apply-btn" onClick={() => { setMenuOpen(false); navigate('/apply'); }}>User</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
